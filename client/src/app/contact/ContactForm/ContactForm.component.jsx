"use client";
import React, { useState } from "react";
import Input from "@/app/Components/Form/Input/Input.component";
import Textarea from "@/app/Components/Form/Textarea/Textarea.component";
import Select from "@/app/Components/Form/Select/Select.component";
import {
  FiUser,
  FiMail,
  FiMessageCircle,
  FiHelpCircle,
  FiSend,
} from "react-icons/fi";
import styles from "./ContactForm.module.css";
import PrimaryButton from "@/app/Components/PrimaryButton/PrimaryButton.component";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    service: "",
  });
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("");
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("form-name", "contact");

    try {
      await fetch("/", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      setStatus("Thank you! Your message has been sent.");
      setForm({ name: "", email: "", message: "", service: "" });
    } catch (err) {
      setStatus("Sorry, something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      className={styles.contactForm}
      onSubmit={handleSubmit}
      id="contact"
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      {/* Netlify hidden input for form name */}
      <input type="hidden" name="form-name" value="contact" />
      {/* Honeypot field for bots */}
      <input type="hidden" name="bot-field" />
      <h1>Let&apos;s work together</h1>
      <p>
        I&apos;m currently available for freelance work and open to new
        opportunities.
      </p>

      <Input
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your name"
        required
        icon={<FiUser />}
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="you@email.com"
        required
        icon={<FiMail />}
      />
      <Textarea
        label="Message"
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Tell me about your project..."
        required
        icon={<FiMessageCircle />}
      />
      <label
        htmlFor="service"
        style={{
          fontWeight: 600,
          color: "var(--grey-600)",
          marginBottom: 4,
          marginTop: 8,
        }}
      >
        What do you need help with
      </label>
      <Select
        name="service"
        value={form.service}
        onChange={handleChange}
        required
        icon={<FiHelpCircle />}
      >
        <option value="" disabled>
          What do you need help with?
        </option>
        <option value="web">Web Development</option>
        <option value="uiux">UI/UX Design</option>
        <option value="performance">Performance</option>
        <option value="other">Other</option>
      </Select>
       <div className={styles.buttonDiv}>
        <PrimaryButton type="submit" disabled={submitting}>
          <span
            style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
          >
            <FiSend style={{ marginRight: 6 }} />
            {submitting ? "Sending..." : "Send Message"}
          </span>
        </PrimaryButton>
        {status && (
          <p
            role="status"
            style={{
              marginTop: 12,
              color: status.startsWith("Thank")
                ? "var(--green-700)"
                : "var(--red-700)",
              fontWeight: 600,
              minHeight: 24,
            }}
          >
            {status}
          </p>
        )}
      </div>
    </form>
  );
}
