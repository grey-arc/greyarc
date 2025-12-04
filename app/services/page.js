"use client";

import { useState, useEffect } from "react";
import { Factory } from "lucide-react";
import { useRouter } from "next/navigation";
import Footer from "@/components/home/Footer";
import Loading from "@/components/loading/loading";
import Package from "@/public/images/chart-network.png";
import Truck from "@/public/images/tool-case.png";
import Database from "@/public/images/rotate.png";
import Users from "@/public/images/users.png";
import Image from "next/image";

export default function ServicesPage() {
  const [services, setServices] = useState([{}]);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const handleView = async (slug, id) => {
    try {
      const res = await fetch(`/api/encrypt?id=${id}`);
      const data = await res.json();

      if (!data.encryptedId) {
        console.error("EC failure"); // Encryption Failed
        return;
      }

      // Store the slug in sessionStorage before navigating
      if (typeof window !== "undefined") {
        sessionStorage.setItem("scrollToService", slug);
      }

      router.push(
        `/services/${slug}?ref=${encodeURIComponent(data.encryptedId)}`
      );
    } catch (err) {
      // console.error("Error encrypting ID:", err);
      console.error("We are facing some issues, please try later");
    }
  };

  function Card({ Icon, service_name, slug, id }) {
    const isLucideIcon = Icon && (typeof Icon === "function" || Icon.$$typeof);
    const isImage = Icon && typeof Icon === "object" && Icon.src;

    return (
      <div
        id={slug}
        className="h-48 rounded-2xl p-6 bg-gray-300 hover:bg-gray-400 transition-colors cursor-pointer flex flex-col justify-between scroll-mt-32"
        onClick={() => handleView(slug, id)}
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
      </div>
    );
  }

  const icons = {
    Factory,
    Package,
    Truck,
    Database,
    Users,
  };

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .then(() => setLoading(false));
  }, []);

  // Scroll to the service card when returning to the page
  useEffect(() => {
    if (!loading && typeof window !== "undefined") {
      const scrollToSlug = sessionStorage.getItem("scrollToService");

      if (scrollToSlug) {
        // Clear it so it doesn't scroll again on next visit
        sessionStorage.removeItem("scrollToService");

        // Wait a bit for the page to fully render
        setTimeout(() => {
          const element = document.getElementById(scrollToSlug);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 300);
      }
    }
  }, [loading]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-100">
      <div className="min-h-screen py-20 px-6 md:px-12">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-16 text-center mt-10">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Services
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our comprehensive supply chain consulting services designed
            to optimize operations, reduce costs, and drive excellence across
            industries.
          </p>
        </div>

        {/* Service Cards - All 3 Columns */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = icons[service.excerpt];
              return (
                <Card
                  key={index}
                  Icon={Icon}
                  service_name={service.title}
                  slug={service.slug}
                  id={service._id}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
