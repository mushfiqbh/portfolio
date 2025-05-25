"use client";

import { useState } from "react";
import Headline from "@/components/sub/headline";
import Button from "@/components/ui/Button";
import { projectTypes } from "@/assets/assets";
import emailjs from "@emailjs/browser";
import { FaInfoCircle } from "react-icons/fa";

export default function Services() {
  const [selectedProject, setSelectedProject] = useState("custom");
  const [customMessage, setCustomMessage] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [hasSent, setHasSent] = useState(false);
  const [alerts, setAlerts] = useState("");

  const handleSubmit = async () => {
    if (!customMessage.trim()) {
      setAlerts("no-message");
      return;
    }
    if (!contactInfo.trim()) {
      setAlerts("no-contact");
      return;
    }

    setIsSending(true);

    const templateParams = {
      project_type: selectedProject,
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
      setContactInfo("");
      setHasSent(true);
      setAlerts("");
    } catch (err) {
      console.error("Failed to send:", err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div id="services">
      <Headline title="Services" subtitle="Custom Web Solutions" />

      <div className="px-0 w-full md:w-3/4 mx-auto flex flex-wrap items-center gap-3 my-6"></div>

      <div className="w-full md:w-3/4 p-5 md:p-10 mx-auto bg-gradient-box shadow-shadow1 rounded-xl">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-xl font-bold mb-4 text-primary">
            Select Project Type
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {projectTypes?.map((type, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedProject(type);
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

        <div className="w-full mb-6">
          <div className="relative w-full md:w-2/3 rounded-lg">
            {alerts === "no-message" && (
              <div className="flex gap-3 items-center ml-3 mb-1 text-red-400">
                <FaInfoCircle /> Please write your message
              </div>
            )}
            <textarea
              placeholder="Please describe your project requirements..."
              value={customMessage}
              onChange={(e) => {
                setCustomMessage(e.target.value);
                setHasSent(false);
              }}
              rows={5}
              className="w-full bg-gradient-box shadow-shadow1 rounded-lg p-3 resize-none focus:outline-none"
            />
          </div>

          {alerts === "no-contact" && (
            <div className="flex gap-3 items-center ml-3 mb-1 text-red-400">
              <FaInfoCircle /> How I contact with you?
            </div>
          )}
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
              className="w-full md:w-2/3 bg-gradient-box shadow-shadow1 rounded-lg p-3 focus:outline-none"
            />

            <Button
              onClick={handleSubmit}
              disabled={isSending}
              variant="rect"
              text="small"
              className={`w-full md:w-auto text-white bg-gradient-red  hover:shadow-shadow1 ${
                isSending ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSending ? "Sending..." : hasSent ? "Sent" : "Send Request"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
