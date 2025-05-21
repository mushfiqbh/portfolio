"use client";

import { useState } from "react";
import Headline from "@/components/sub/headline";
import Button from "@/components/ui/Button";
import { projectTypes } from "@/assets/assets";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import emailjs from "@emailjs/browser";

export default function Services() {
  const [selectedProject, setSelectedProject] = useState("ecommerce");
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [customMessage, setCustomMessage] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [hasSent, setHasSent] = useState(false);

  const handleFeatureToggle = (feature) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const handleSelectAll = () => {
    const allFeatures = projectTypes[selectedProject];
    setSelectedFeatures((prev) =>
      prev.length === allFeatures.length ? [] : allFeatures
    );
  };

  const handleSubmit = async () => {
    if (!contactInfo.trim()) {
      return;
    }

    setIsSending(true);

    const templateParams = {
      project_type: selectedProject,
      features: selectedFeatures.join(", "),
      message: customMessage,
      contact: contactInfo,
    };

    try {
      const res = await emailjs.send(
        "service_ipcu0w4",
        "template_aicpn0y",
        templateParams,
        {
          publicKey: "k6BnjHuitclYjPVSa",
        }
      );

      console.log("Email sent:", res.text);
      setCustomMessage("");
      setSelectedFeatures([]);
      setHasSent(true);
    } catch (err) {
      console.error("Failed to send:", err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div id="services">
      <Headline title="Services" subtitle="Custom Web Solutions" />

      <div className="px-0 w-full md:w-3/4 mx-auto flex flex-wrap items-center gap-3 my-6">
        {Object.keys(projectTypes).map((type) => (
          <div
            key={type}
            onClick={() => {
              setSelectedProject(type);
              setSelectedFeatures([]);
            }}
            onChange={() => {
              handleFeatureToggle(feature);
              setHasSent(false);
            }}
            className={`w-fit text-center p-3 text-sm md:text-base rounded-md cursor-pointer transition-all duration-200 bg-gradient-box mx-1 shadow-shadow1 hover:text-primary ${
              selectedProject === type ? "text-primary font-bold" : ""
            }`}
          >
            {type
              .replace(/([A-Z])/g, " $1")
              .replace(/^\w/, (c) => c.toUpperCase())}
          </div>
        ))}
      </div>

      <div className="w-full md:w-3/4 p-5 md:p-10 mx-auto bg-gradient-box shadow-shadow1 rounded-xl">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-xl font-bold mb-4 text-primary">
            Select Features
          </h2>
          <button
            onClick={handleSelectAll}
            className="mb-4 px-4 py-2 bg-gradient-box  rounded-md hover:text-primary transition-all flex items-center gap-1"
          >
            <IoCheckmarkDoneSharp />
            {selectedFeatures.length === projectTypes[selectedProject].length
              ? "Deselect All"
              : "Select All Features"}
          </button>
        </div>

        {projectTypes[selectedProject].length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {projectTypes[selectedProject].map((feature) => (
              <label
                key={feature}
                className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer transition-all bg-gradient-box hover:text-primary shadow-shadow1 ${
                  selectedFeatures.includes(feature)
                    ? "text-primary font-semibold"
                    : ""
                }`}
              >
                <input
                  type="checkbox"
                  className="accent-primary"
                  checked={selectedFeatures.includes(feature)}
                  onChange={() => handleFeatureToggle(feature)}
                />
                {feature}
              </label>
            ))}
          </div>
        ) : (
          <p className="mb-6">
            Please describe your project in the message box below.
          </p>
        )}

        <div className="w-full mb-6">
          <div className="w-full mb-4">
            <textarea
              placeholder="Describe your idea or custom requirements..."
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              className="w-full md:w-2/3 bg-gradient-box  rounded-lg p-3 resize-none focus:outline-none"
            />
          </div>

          <div className="w-full flex flex-col md:flex-row items-start md:items-end gap-4">
            <input
              type="text"
              name="contact"
              placeholder="Your Contact Info"
              value={contactInfo}
              onChange={(e) => {
                setContactInfo(e.target.value);
                setHasSent(false);
              }}
              className="w-full md:w-2/3 bg-gradient-box  rounded-lg p-3 focus:outline-none"
            />

            <Button
              onClick={handleSubmit}
              disabled={isSending}
              variant="rect"
              text="small"
              className={`w-full md:w-auto bg-gradient-red  hover:shadow-shadow1 ${
                isSending ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSending
                ? "Sending..."
                : hasSent
                ? "Sent! Resend"
                : "Send Request"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
