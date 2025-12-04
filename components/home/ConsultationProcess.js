import React from "react";
import { ScanEye, FileCog, Network, Scale } from "lucide-react";

const ConsultationProcess = ({ data }) => {
  const data = [
    {
      list_item_header: "Diagnostic Phase",
      list_item_description:
        "Quantify performance gaps using Supply Chain Capability Diagnostic (SCCD), SCOR model mapping, Value Stream Mapping, and Root Cause Analysis",
      list_item_image: "",
      list_item_svg: "ScanEye",
    },
    {
      list_item_header: "Design Phase",
      list_item_description:
        "Co-create future-state blueprints leveraging Value Driver Trees and Blue Ocean Strategy frameworks",
      list_item_image: "",
      list_item_svg: "FileCog",
    },
    {
      list_item_header: "Implementation Phase",
      list_item_description:
        "Execute wave-based rollouts with Lighthouse Pilots, governed by a Transformation Management Office (TMO) managing cadence and metrics.",
      list_item_image: "",
      list_item_svg: "Network",
    },
    {
      list_item_header: "Sustain Phase",
      list_item_description:
        "Embed change through training, capability building and Kotter's 8-Step Change Model to ensure continuous improvement and adoption",
      list_item_image: "",
      list_item_svg: "Scale",
    },
  ];
  const defaultSteps = [
    {
      number: "1",
      title: "Initial discussion to understand your challenges",
    },
    {
      number: "2",
      title: "Assessment of current supply chain operations",
    },
    {
      number: "3",
      title: "Customized solution proposal and roadmap",
    },
    {
      number: "4",
      title: "Implementation support and ongoing guidance",
    },
  ];
  const steps = data?.section_list || defaultSteps;
  const heading = data?.section_heading || "Consultation Process";

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto md:max-w-6xl">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12">
          {heading}
        </h2>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step Card */}
              <div className="relative bg-gray-800 rounded-3xl p-8 flex flex-col justify-between min-h-[280px]">
                {/* Step Number */}
                <div className="text-6xl font-bold text-gray-400 mb-6">
                  {step.number || step.list_item_header || index + 1}
                </div>

                {/* Step Description */}
                <p className="text-white text-base leading-relaxed">
                  {step.title || step.list_item_description}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsultationProcess;
