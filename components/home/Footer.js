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
              <a href="mailto:info@vanrao.com" className="hover:text-white">
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
              {
                name: "Inventory Optimization",
                link: "/services/inventory?ref=47446ffb95c010cb4a92d70ca1c708e9%3Ac3321fd546f0444d54b3c061b8bebc03a0d0f7598beb1f2a3028e0b5b25ad93c",
              },
              {
                name: "Manufacturing",
                link: "/services/manufacturing?ref=7b342ff7deb9f63dacde6c4a4e5ae746%3Ad2e74767f08074a03f475bdf3598a1cc80649c3fcbebeb3352abbef1ee835863",
              },
              {
                name: "Logistics & Distribution",
                link: "/services/logistics?ref=c9f626b83247c898ff3e12e93a05ab48%3Ac9525e2f5134f9ca2f847666f9729643126591605a5dd7a10aa56d9bbf8fde11",
              },
              {
                name: "ERP Implementation",
                link: "/services/erp?ref=2142aadc7c8fa8a9b2d0f991287adf10%3A74d5ddfc383437fca1f8ca30231c5ed81cb66f03d3cdc38acb5b66c4c2900990",
              },
              {
                name: "Sales & Customer Experience",
                link: "/services/sales?ref=d94a8cddd7c07b1257817e77c6fdc893%3Aca1bca960573efa5900d473d2bc53d3a8d8c41f95c77c4a81152e41fd18c59fc",
              },
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
            <Link href="#" className="hover:text-white">
              LinkedIn
            </Link>
            <span className="hidden md:block text-gray-600">|</span>
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <span className="hidden md:block text-gray-600">|</span>
            <Link href="#" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
