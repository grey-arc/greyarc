import connectDB from "@/lib/mongoose";
import Blog from "@/app/models/Blog";
import { Factory, TrendingUp, Warehouse, Ship, Handshake } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/home/Footer";
import Package from "@/public/images/chart-network.png";
import Truck from "@/public/images/tool-case.png";
import Database from "@/public/images/rotate.png";
import Users from "@/public/images/users.png";
import Image from "next/image";
import { EXPERTISE_PAGES, MARKET_PAGES } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Agrochemical Consulting Services",
  description:
    "Agrochemical consulting services for crop protection manufacturers and distributors in India, Southeast Asia, the Middle East and Europe: supply chain, S&OP, forecast accuracy, warehousing, manufacturing and export enablement.",
  alternates: { canonical: "https://www.greyarc.co/services" },
};

const icons = { Factory, Package, Truck, Database, Users, TrendingUp, Warehouse, Ship, Handshake };

async function getServices() {
  await connectDB();
  // Matches the original /api/services route's filter exactly: author
  // only. Service records in this dataset are currently all
  // published: false, so a stricter filter here would empty this page.
  const services = await Blog.find({ author: "services" }).lean();
  return services;
}

function ServiceCard({ Icon, service_name, slug }) {
  const isLucideIcon = Icon && (typeof Icon === "function" || Icon.$$typeof);
  const isImage = Icon && typeof Icon === "object" && Icon.src;

  return (
    <Link
      href={`/services/${slug}`}
      id={slug}
      className="h-48 rounded-2xl p-6 bg-gray-300 hover:bg-gray-400 transition-colors cursor-pointer flex flex-col justify-between scroll-mt-32"
    >
      {Icon && (
        <>
          {isLucideIcon && !isImage && (
            <Icon className="w-10 h-10 text-black mb-4" strokeWidth={2} />
          )}
          {isImage && (
            <Image src={Icon} alt={service_name} className="w-10 h-10 mb-4" />
          )}
        </>
      )}

      <h3 className="text-gray-900 text-xl font-medium">{service_name}</h3>
    </Link>
  );
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="bg-gray-100">
      <div className="min-h-screen py-20 px-6 md:px-12">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-16 text-center mt-10">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Agrochemical Consulting Services
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Specialist supply chain and operations consulting built only for
            crop protection and agrochemical manufacturers and distributors —
            from S&amp;OP and forecast accuracy to warehousing, manufacturing
            and export enablement, across India, Southeast Asia, the Middle
            East and Europe.
          </p>
        </div>

        {/* Service Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = icons[service.excerpt];
              return (
                <ServiceCard
                  key={service._id}
                  Icon={Icon}
                  service_name={service.title}
                  slug={service.slug}
                />
              );
            })}
          </div>

          {/* Keyword landing pages + markets — internal links */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Core expertise</h2>
              <ul className="space-y-2">
                {EXPERTISE_PAGES.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className="text-gray-700 underline underline-offset-4 hover:text-black">{p.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Markets we serve</h2>
              <ul className="space-y-2">
                <li className="text-gray-700">India (headquartered in Thane, Maharashtra)</li>
                {MARKET_PAGES.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className="text-gray-700 underline underline-offset-4 hover:text-black">{p.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
