"use client";

import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { EXPERTISE_PAGES, MARKET_PAGES, GUIDE_PAGES, ORG } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[#131921] text-gray-300 rounded-t-3xl mt-16">
      <div className="max-w-7xl md:max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-semibold text-white mb-4">GreyArc</h2>
          <p className="text-sm leading-relaxed text-gray-400 mb-6">
            Transforming the agrochemical, chemical, and manufacturing sectors
            through strategic, operational, and people excellence. GreyArc
            Consulting empowers businesses to move from fragmented systems to
            data-driven, efficient, and scalable operations — guided by decades
            of industry expertise and practical transformation experience.
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-gray-400" />
              <a href="mailto:info@greyarc.co" className="hover:text-white">
                info@greyarc.co
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-gray-400" />
              <a href={ORG.telephoneHref} className="hover:text-white">
                {ORG.telephoneDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* Expertise — keyword landing pages (replaces the old hard-coded
            service list, which linked "ERP Implementation" to the GRACE
            framework page) */}
        <div>
          <h3 className="text-white font-medium mb-4">Expertise</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            {EXPERTISE_PAGES.map((p) => (
              <li key={p.href} className="hover:text-white">
                <Link href={p.href}>{p.label}</Link>
              </li>
            ))}
            {GUIDE_PAGES.map((p) => (
              <li key={p.href} className="hover:text-white">
                <Link href={p.href}>{p.label}</Link>
              </li>
            ))}
            <li className="hover:text-white">
              <Link href="/services">All services</Link>
            </li>
          </ul>
        </div>

        {/* Markets */}
        <div>
          <h3 className="text-white font-medium mb-4">Markets</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>India</li>
            {MARKET_PAGES.map((p) => (
              <li key={p.href} className="hover:text-white">
                <Link href={p.href}>{p.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Quick Links */}
        <div>
          <h3 className="text-white font-medium mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            {[
              { name: "About", link: "/about" },
              { name: "Services", link: "/services" },
              { name: "Success Stories", link: "/success-stories" },
              { name: "Credentials", link: "/credentials" },
              { name: "Contact", link: "/contact" },
              { name: "Blogs", link: "/blogs" },
            ].map((link) => (
              <li
                key={link.name}
                className="hover:text-white cursor-pointer transition-colors duration-150"
              >
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-4 px-6 rounded-t-3xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-gray-500 space-y-3 md:space-y-0">
          <p>© {new Date().getFullYear()} GreyArc Consulting. All rights reserved.</p>

          <div className="flex items-center space-x-4">
            <a
              href="https://in.linkedin.com/company/greyarcco"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
            <span className="hidden md:block text-gray-600">|</span>
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span className="hidden md:block text-gray-600">|</span>
            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
