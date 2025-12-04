"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // shadcn utility
import {
  LayoutDashboard,
  FileText,
  Database,
  UserRound,
  Settings,
  BookOpen,
  LogOut,
  Activity,
} from "lucide-react";
import Image from "next/image";
import GreyArcFav from "@/public/images/logo.png";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button"; // shadcn button

export default function AdminNavbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Blogs", href: "/admin/blogs", icon: FileText },
    { name: "Services", href: "/admin/services", icon: Settings },
    { name: "Page Data", href: "/admin/listing", icon: Database },
    { name: "Contacts", href: "/admin/contacts", icon: UserRound },
    { name: "Visitors", href: "/admin/visitorstats", icon: Activity },
    { name: "Blog Data", href: "/admin/blogsdata", icon: BookOpen },
  ];

  return (
    <nav className="w-full bg-background border-b border-border shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo */}
        <Link href="/admin/dashboard" className="flex items-center space-x-2">
          <Image
            src={GreyArcFav}
            alt="GreyArc Logo"
            width={28}
            height={28}
            className="rounded"
          />
          <h1 className="text-xl font-semibold">Admin Panel</h1>
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center space-x-6">
          {navItems.map(({ name, href, icon: Icon }) => (
            <li key={name}>
              <Link
                href={href}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors",
                  pathname === href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {name}
              </Link>
            </li>
          ))}

          {/* Sign Out Button */}
          <li>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer hover:text-destructive"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
