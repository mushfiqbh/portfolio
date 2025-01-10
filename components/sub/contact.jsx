"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Headline from "./headline";
import Button from "@/UI/Button";

export const ContactMe = () => {
  const [status, setStatus] = useState("Send Now");
  const form = useRef();

  const sendEmail = (e) => {
    setStatus("Sending...");
    e.preventDefault();

    emailjs
      .sendForm("service_ipcu0w4", "template_aicpn0y", form.current, {
        publicKey: "k6BnjHuitclYjPVSa",
      })
      .then(
        () => {
          setStatus("Sent! Thank you");
          form.current.reset();
        },
        (error) => {
          setStatus("Failed! Retry");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact">
      <Headline title="Contact Me" subtitle="Send Direct Email" />
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-lg mx-auto p-6 bg-gradient-box shadow-shadow1 rounded-lg space-y-4"
      >
        <input
          type="text"
          name="user_name"
          id="user_name"
          className="mt-1 block w-full px-3 py-2 bg-background border rounded-lg border-none outline-none"
          placeholder="Enter your name"
          required
        />

        <input
          type="text"
          name="user_email"
          id="user_email"
          className="mt-1 block w-full px-3 py-2 bg-background border rounded-lg border-none outline-none"
          placeholder="Enter your email/ phone"
          required
        />

        <textarea
          name="message"
          id="message"
          className="mt-1 block w-full px-3 py-2 bg-background border rounded-lg border-none outline-none"
          rows="4"
          placeholder="Write your message here"
          required
        ></textarea>

        <Button type="submit" className="w-full text-primary">
          {status}
        </Button>
      </form>
    </div>
  );
};
