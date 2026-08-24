"use client";

import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#131921] text-gray-300 rounded-t-3xl mt-16">
      <div className="max-w-7xl md:max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
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
              <a href="tel:+919324799373" className="hover:text-white">
                +91 9324799373
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section - Services */}
        <div>
          <h3 className="text-white font-medium mb-4">Services</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            {[
              { name: "Inventory Optimization", link: "/services/inventory" },
              { name: "Manufacturing", link: "/services/manufacturing" },
              { name: "Logistics & Distribution", link: "/services/logistics" },
              { name: "ERP Implementation", link: "/services/erp" },
              { name: "Sales & Customer Experience", link: "/services/sales" },
            ].map((service) => (
              <li
                key={service.name}
                className="hover:text-white cursor-pointer"
              >
                <Link href={service.link}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Quick Links */}
        <div>
          <h3 className="text-white font-medium mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            {[
              { name: "About", link: "/#about" },
              { name: "Services", link: "/services" },
              { name: "Success Stories", link: "/#results" },
              { name: "Credentials", link: "/#credentials" },
              { name: "Contact", link: "/#contact" },
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
          <p>© 2024 GreyArc Consulting. All rights reserved.</p>

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
