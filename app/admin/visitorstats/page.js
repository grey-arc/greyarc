"use client";

import { useEffect, useState, useMemo } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import AdminNavbar from "@/components/a-nav/ANav";
import {
  ChevronLeft,
  ChevronRight,
  ChevronFirst,
  ChevronLast,
  MousePointerClick,
  Activity,
  UserRound,
} from "lucide-react";

function DateCard({ icon, heading, mainStat, description, heightFlag }) {
  return (
    <div
      className={
        heightFlag
          ? "bg-gray-100 rounded-2xl p-8 flex flex-col justify-between h-72"
          : "bg-gray-100 rounded-2xl p-8 flex flex-col justify-between"
      }
    >
      <div className="bg-white rounded-full w-fit p-2">{icon}</div>
      <div className="space-y-2">
        <p className="text-gray-600 text-sm font-medium">{heading}</p>

        <h1 className="text-6xl font-bold text-gray-800 tracking-tight">
          {mainStat}
        </h1>
        <p className="text-gray-500 text-sm pt-1">{description}</p>
      </div>
    </div>
  );
}

export default function ContactsAdmin() {
  const [contacts, setContacts] = useState([]);
  const [analytics, setAnalytics] = useState({
    today: { visits: 0, uniqueVisitors: 0 },
    last7Days: { visits: 0, uniqueVisitors: 0, chartData: [] },
    last30Days: { visits: 0, uniqueVisitors: 0, chartData: [] },
    allTime: { visits: 0, uniqueVisitors: 0, avgVisitsPerDay: 0 },
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // UI state
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const fetchAnalytics = async () => {
    try {
      const response = await fetch("/api/visits/analytics");
      const data = await response.json();

      if (data.success) {
        setAnalytics(data.stats);
        setContacts(data.stats.fullData);
      }
    } catch (error) {
      console.error("Failed to fetch analytics:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchAnalytics();

    return () => (mounted = false);
  }, []);

  const filtered = useMemo(() => {
    if (!query) return contacts;
    const q = query.toLowerCase();
    return contacts.filter((c) => {
      return (
        (c.date && c.date.includes(q)) ||
        (c.count && c.email.count.includes(q)) ||
        (c.uniqueVisitors && c.uniqueVisitors.includes(q))
      );
    });
  }, [contacts, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [totalPages]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  function exportCSV() {
    const headers = ["date", "count", "uniqueVisitors"];
    const rows = filtered.map((r) =>
      headers.map((h) => (r[h] == null ? "" : String(r[h]).replace(/\n/g, " ")))
    );
    const csv = [headers, ...rows]
      .map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `contacts_export_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="px-8 space-y-6">
      <AdminNavbar />

      <div className="p-8 max-w-7xl mx-auto">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <DateCard
            icon={
              <MousePointerClick className="w-8 h-8 text-gray-700 stroke-[1.5]" />
            }
            heading="Visitors"
            mainStat={analytics?.allTime?.visits}
            description="Number of visits since your site went live"
            heightFlag={true}
          />

          <DateCard
            icon={<UserRound className="w-8 h-8 text-gray-700 stroke-[1.5]" />}
            heading="Unique Visitors"
            mainStat={analytics?.allTime?.uniqueVisitors}
            description="Count of distinct visitors since launch"
            heightFlag={true}
          />

          <DateCard
            icon={<Activity className="w-8 h-8 text-gray-700 stroke-[1.5]" />}
            heading="Average Daily Visits"
            mainStat={analytics?.allTime?.avgVisitsPerDay}
            description="Average number of visits per day overall"
            heightFlag={true}
          />
        </div>

        {/* Visitor Stats Data */}
        <Card className="h-fit bg-white p-4 space-y-4 rounded-2xl mt-6">
          <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Visitor Stats</CardTitle>
            </div>

            <div className="flex items-center gap-2">
              <Input
                placeholder="Search date, visitors, or unique..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
                className="min-w-[260px]"
              />

              <Select onValueChange={(v) => setPageSize(Number(v))}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder={`${pageSize} / page`} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>

              <Button className="cursor-pointer" onClick={exportCSV}>
                Export CSV
              </Button>
            </div>
          </CardHeader>

          <CardContent>
            {loading ? (
              <div className="py-12 text-center text-sm text-muted-foreground">
                Loading stats...
              </div>
            ) : error ? (
              <div className="py-12 text-center text-sm text-red-600">
                {error}
              </div>
            ) : (
              <ScrollArea>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Total Visitors</TableHead>
                      <TableHead>Unique Visitors</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pageItems.length === 0 ? (
                      <TableRow>
                        <TableCell
                          colSpan={7}
                          className="text-center py-8 text-sm text-muted-foreground"
                        >
                          No contacts found
                        </TableCell>
                      </TableRow>
                    ) : (
                      pageItems.map((c, idx) => (
                        <TableRow key={idx} className="hover:bg-muted/50">
                          <TableCell>{c.date || "-"}</TableCell>
                          <TableCell>{c.count || "-"}</TableCell>
                          <TableCell>{c.uniqueVisitors}</TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell>Total</TableCell>
                      <TableCell>
                        {contacts.reduce(
                          (sum, item) => sum + (item.count || 0),
                          0
                        )}
                      </TableCell>
                      <TableCell>
                        {contacts.reduce(
                          (sum, item) => sum + (item.uniqueVisitors || 0),
                          0
                        )}
                      </TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </ScrollArea>
            )}
          </CardContent>

          <CardFooter className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing{" "}
              <strong>
                {(page - 1) * pageSize + Math.min(pageSize, pageItems.length)}
              </strong>{" "}
              of <strong>{filtered.length}</strong>
            </div>

            <div className="flex items-center gap-2">
              <Button
                className="cursor-pointer"
                onClick={() => setPage(1)}
                disabled={page === 1}
              >
                <ChevronFirst className="w-8 h-8 stroke-[1.5]" />
              </Button>
              <Button
                className="cursor-pointer"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                <ChevronLeft className="w-8 h-8 stroke-[1.5]" />
              </Button>
              <div className="px-3">
                {page} / {totalPages}
              </div>
              <Button
                className="cursor-pointer"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                <ChevronRight className="w-8 h-8 stroke-[1.5]" />
              </Button>
              <Button
                className="cursor-pointer"
                onClick={() => setPage(totalPages)}
                disabled={page === totalPages}
              >
                <ChevronLast className="w-8 h-8 stroke-[1.5]" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
