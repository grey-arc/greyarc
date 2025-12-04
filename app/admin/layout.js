"use client";
import NextAuthSessionProvider from "../providers/SessionProvider";

export default function AdminLayout({ children }) {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
}
