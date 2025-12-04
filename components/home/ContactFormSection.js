import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, ArrowRight } from "lucide-react";

const ContactFormSection = ({ data }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [popup, setPopup] = useState({
    show: false,
    message: "",
    type: "", // success | error
  });

  const iconMap = {
    Email: Mail,
    Phone: Phone,
    Coverage: MapPin,
    LinkedIn: Linkedin,
  };

  const formSubmitIo = () => {
    fetch("https://formsubmit.co/ajax/info@greyarc.co", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => console.log("Submitted to FormSubmit"))
      .catch(() => console.log("Error"));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.company ||
      !formData.phone ||
      !formData.message
    ) {
      setPopup({
        show: true,
        message: "Please fill all the required fields",
        type: "error",
      });
      return;
    }

    const url = "/api/contacts";
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res?.ok) {
      setPopup({
        show: true,
        message: "Thank you for contacting GreyArc",
        type: "success",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
      formSubmitIo();
    } else {
      setPopup({
        show: true,
        message:
          "We are facing some issues while saving the data. Please try again after sometime.",
        type: "error",
      });
    }
  };

  if (!data) return null;

  return (
    <div
      id={data?.section_name}
      className="relative w-full bg-white py-16 px-4 sm:px-6 lg:px-8 mx-4 md:mx-auto"
    >
      {/* ✅ Popup Modal */}
      {popup.show && (
        <div className="fixed inset-0 bg-black/70 bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl shadow-lg max-w-sm w-full p-8 text-center">
            <h3
              className={`text-xl font-semibold mb-4 ${
                popup.type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {popup.type === "success" ? "Success" : "Error"}
            </h3>
            <p className="text-gray-700 mb-6">{popup.message}</p>
            <button
              onClick={() => setPopup({ show: false, message: "", type: "" })}
              className="bg-[var(--brand-orange)] hover:bg-[var(--brand-hover)] text-white px-6 py-2 rounded-full transition-colors duration-300"
            >
              Okay
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto md:max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {data.section_heading}
            </h2>
            <p className="text-gray-600 text-base mb-12 leading-relaxed">
              {data.section_description}
            </p>

            <div className="space-y-2">
              {data.section_list?.map((item, index) => {
                const IconComponent = iconMap[item.list_item_header] || Mail;
                return (
                  // py-4 Qaseem
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-gray-700" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm mb-0.5">
                        {item.list_item_header}
                      </h3>
                      <p className="text-gray-900 font-medium mb-1">
                        {item.list_item_description}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {item.list_item_short_desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-gray-50 rounded-4xl p-8 lg:p-10">
            <div className="space-y-12">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 bg-gray-200 border-0 rounded-4xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@company.com"
                    className="w-full px-4 py-3 bg-gray-200 border-0 rounded-4xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>
              </div>

              {/* Company and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                    className="w-full px-4 py-3 bg-gray-200 border-0 rounded-4xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-3 bg-gray-200 border-0 rounded-4xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message <sup className="text-red-500">*</sup>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your supply chain challenges and objectives..."
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-200 border-0 rounded-4xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-6">
              <button
                onClick={handleSubmit}
                className="cursor-pointer group flex items-center gap-2 bg-[var(--brand-orange)] hover:bg-[var(--brand-hover)] text-white px-8 py-3 rounded-full transition-colors duration-300 font-medium"
              >
                <span>Send Message</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
