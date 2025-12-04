"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/home/Navbar";

export default function PageLayout({ children }) {
  const pathname = usePathname();

  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Navbar />}
      {children}
    </>
  );
}
