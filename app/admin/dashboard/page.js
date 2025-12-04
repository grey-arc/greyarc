"use client";

import { useRouter } from "next/navigation";
import AdminNavbar from "@/components/a-nav/ANav";
import Image from "next/image";
import adminImage from "@/public/images/man working on a computer.png";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MousePointerClick,
  Newspaper,
  Activity,
  UserRound,
  ChartNoAxesCombined,
  TrendingUp,
  BellDot,
  X,
  NotebookPen,
} from "lucide-react";
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSession } from "next-auth/react";

// Notification
function Notification({ setNotification }) {
  const router = useRouter();

  return (
    <div className="flex border border-gray-300 rounded-2xl p-4 space-x-4 bg-white mt-5 max-w-7xl mx-auto">
      <div className="rounded-full w-fit p-2">
        <BellDot className="w-6 h-6 text-gray-700 stroke-[1.5]" />
      </div>

      <div>
        <p className="text-sm font-bold">Dear Admin</p>
        <p className="text-sm">
          You haven’t posted a blog from past 1 week. Posting a new blog boost
          the site SEO and helps customers discover about your business
        </p>
      </div>

      <div className="flex items-center space-x-4 ml-auto ">
        <Button
          className="cursor-pointer rounded-full"
          onClick={() => router.push("/admin/blogs/new")}
        >
          Post Now
        </Button>

        <div>
          <X
            className="w-4 h-4 text-gray-700 stroke-[1.5] cursor-pointer"
            onClick={() => setNotification(false)}
          />
        </div>
      </div>
    </div>
  );
}

function DateCard({ icon, heading, mainStat, description, heightFlag }) {
  return (
    <div
      className={
        heightFlag
          ? "bg-white rounded-2xl p-8 flex flex-col justify-between h-72"
          : "bg-white rounded-2xl p-8 flex flex-col justify-between"
      }
    >
      <div className="w-fit ">{icon}</div>
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

// Pie Chart Data
function TrendsPie({ data }) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          label
          innerRadius={60}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>

        <Legend
          verticalAlign="bottom" // position: top | bottom | middle
          align="center" // alignment: left | center | right
          iconType="circle" // shape of legend icon
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

function BlogData({ blogStats }) {
  const blogdata = [
    { name: "Active", value: blogStats[0], color: "#4f46e5" },
    { name: "Draft / Inactive", value: blogStats[1], color: "#000" },
  ];
  return <TrendsPie data={blogdata} />;
}

// Line Chart Data
function TrendsChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart
        width={500}
        height={250}
        data={data}
        margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
      >
        <XAxis
          dataKey="date"
          tick={{ fill: "#4b5563", fontSize: 12, fontWeight: 500 }} // ✅ font color & style
          axisLine={{ stroke: "#e5e7eb" }} // ✅ light gray axis line
          tickLine={{ stroke: "#d1d5db" }} // ✅ small tick marks
          tickMargin={10} // ✅ space between labels and axis
        />
        <YAxis hide={true} />
        <Tooltip />
        <Line type="monotone" dataKey="count" stroke="#000" />
      </LineChart>
    </ResponsiveContainer>
  );
}

function BlogTrends({ blogData }) {
  return <TrendsChart data={blogData} />;
}

function ContactsTable({ recentData }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Message</TableHead>
          <TableHead className="text-right">Updated At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentData.map((contact, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{contact.name}</TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.company}</TableCell>
            <TableCell>{contact.phone}</TableCell>
            <TableCell>{contact.message}</TableCell>
            <TableCell className="text-right">{contact.updatedAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function ContactsData({ stats, trend, data }) {
  const formData = stats;

  const formTrendData = trend;

  return (
    <div className="mt-12">
      {/* Heading */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-fit">
          <NotebookPen className="w-8 h-8 text-gray-700 stroke-[1.5]" />
        </div>
        <p className="text-2xl font-bold">Form Details</p>
      </div>
      {/* Stats and Trend */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
        {/* Quick Stats */}
        <div className="bg-white col-start-1 col-end-2 p-4 space-y-4 rounded-2xl">
          <p className="text-gray-600 text-sm font-medium mb-6">Quick Stats</p>

          {formData.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <p className="text-gray-600">{item.field}</p>

              <div className="bg-gray-50 p-2 rounded-2xl w-12 h-12 flex items-center justify-center">
                <p className="font-bold text-gray-800">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Form Filling Trend Chart */}
        <div className="bg-white col-start-2 col-end-5 p-4 rounded-2xl">
          <p className="text-gray-600 text-sm font-medium mb-6">
            Messages per day
          </p>
          <TrendsChart data={formTrendData} />
        </div>
      </div>
      {/* Recent form fills */}
      <div className="bg-white p-4 space-y-4 rounded-2xl mt-6">
        <p className="text-gray-600 text-sm font-medium mb-6">
          Last 10 contact form submissions
        </p>
        <ContactsTable recentData={data} />
      </div>
    </div>
  );
}

const page = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [todayDate, setTodayDate] = useState({
    dayName: "",
    fullDate: "",
  });
  const [blogStats, setBlogStats] = useState({
    totaldbBlogs: 0,
    activeBlogs: 0,
    inactiveBlogs: 0,
    blogsPerMonth: [],
    notify: false,
  });
  const [contactStats, setContactStats] = useState({
    totalContacts: 0,
    contactsThisMonth: 0,
    contactsLast7Days: 0,
    contactsToday: 0,
    recentContacts: [
      {
        _id: "",
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      },
    ],
    contactTrend: [
      { date: "11 Oct", count: 1 },
      { date: "12 Oct", count: 2 },
      { date: "13 Oct", count: 1 },
      { date: "14 Oct", count: 3 },
      { date: "15 Oct", count: 5 },
      { date: "16 Oct", count: 2 },
      { date: "17 Oct", count: 4 },
      { date: "18 Oct", count: 1 },
      { date: "19 Oct", count: 3 },
      { date: "20 Oct", count: 2 },
    ],
  });
  const [notification, setNotification] = useState(false);
  const [analytics, setAnalytics] = useState({
    today: { visits: 0, uniqueVisitors: 0 },
    last7Days: { visits: 0, uniqueVisitors: 0, chartData: [] },
    last30Days: { visits: 0, uniqueVisitors: 0, chartData: [] },
    allTime: { visits: 0, uniqueVisitors: 0, avgVisitsPerDay: 0 },
  });

  // Authentication Check
  useEffect(() => {
    if (status === "loading") return; // Wait for session to load

    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  const today = () => {
    const date = new Date();
    const optionsDay = { weekday: "long" };
    const dayName = date.toLocaleDateString("en-GB", optionsDay);
    setTodayDate((prev) => ({ ...prev, dayName }));

    const day = date.getDate();
    const suffix = (day) => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    const optionsDate = { month: "long", year: "numeric" };
    const monthYear = date.toLocaleDateString("en-GB", optionsDate);
    const fullDate = `${day}${suffix(day)} ${monthYear}`;
    setTodayDate((prev) => ({ ...prev, fullDate }));
  };

  const blogData = async () => {
    const res = await fetch("/api/blogs/analytics");
    const data = await res.json();
    setBlogStats(data);
    setNotification(data.notify);
    return data;
  };

  const contactAnalytics = async () => {
    const res = await fetch("/api/contacts/analytics");
    const data = await res.json();
    setContactStats(data);
  };

  const fetchAnalytics = async () => {
    try {
      const response = await fetch("/api/visits/analytics");
      const data = await response.json();

      if (data.success) {
        setAnalytics(data.stats);
      }
    } catch (error) {
      console.error("Failed to fetch analytics:", error);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      today();
      blogData();
      contactAnalytics();
      fetchAnalytics();
    }
  }, [status]);

  // Show loading state while checking authentication
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render dashboard if not authenticated
  if (status === "unauthenticated") {
    return null;
  }

  return (
    <div className="px-8 space-y-6 bg-gray-50">
      <AdminNavbar />
      {notification ? <Notification setNotification={setNotification} /> : null}

      <div className="p-8 max-w-7xl mx-auto">
        {/* Welcome Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="col-start-1 col-end-3 flex items-center justify-between bg-white rounded-2xl p-8 md:p-12 ">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-700">
                Hi Admin
              </h1>

              <p className="text-gray-500 mt-2">
                Are you ready to start your day with some insightful analytics?
              </p>
            </div>

            <div className="right-0 mx-8 ">
              <Image
                src={adminImage}
                alt="Admin working at desk"
                className="w-72 h-auto object-contain"
                width={1000}
                height={1000}
              />
            </div>
          </div>

          <DateCard
            icon={<Calendar className="w-8 h-8 text-gray-700 stroke-[1.5]" />}
            heading="Today's Date"
            mainStat={todayDate.dayName}
            description={todayDate.fullDate}
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
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

          <DateCard
            icon={<Newspaper className="w-8 h-8 text-gray-700 stroke-[1.5]" />}
            heading="Total Blog Posts"
            mainStat={blogStats.totaldbBlogs}
            description="Total number of published blog posts"
            heightFlag={true}
          />
        </div>

        {/* Blog Pie and Trends */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div className="col-start-1 col-end-3 bg-white rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-white rounded-full w-fit p-2">
                <ChartNoAxesCombined className="w-8 h-8 text-gray-700 stroke-[1.5]" />
              </div>

              <p className="text-gray-600 text-sm font-medium">
                Blog Post Statistics
              </p>
            </div>
            <BlogData
              blogStats={[blogStats?.activeBlogs, blogStats?.inactiveBlogs]}
            />
          </div>

          <div className="col-start-3 col-end-5 bg-white rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-white rounded-full w-fit p-2">
                <TrendingUp className="w-8 h-8 text-gray-700 stroke-[1.5]" />
              </div>

              <p className="text-gray-600 text-sm font-medium">
                Blog Posting Trend
              </p>
            </div>
            <BlogTrends blogData={blogStats.blogsPerMonth} />
          </div>
        </div>

        {/* Contacts Data */}
        <ContactsData
          stats={[
            { field: "Today", value: contactStats.contactsToday },
            { field: "Last 7 Days", value: contactStats.contactsLast7Days },
            { field: "This Month", value: contactStats.contactsThisMonth },
            { field: "Total Submissions", value: contactStats.totalContacts },
          ]}
          trend={contactStats.contactTrend}
          data={contactStats.recentContacts}
        />
      </div>
    </div>
  );
};

export default page;
