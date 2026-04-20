"use client";
import React, { useState } from "react";
import Input from "@/app/Components/Form/Input/Input.component";
import Textarea from "@/app/Components/Form/Textarea/Textarea.component";
import Select from "@/app/Components/Form/Select/Select.component";
import { FiUser, FiMail, FiMessageCircle, FiHelpCircle, FiSend } from "react-icons/fi";
import styles from "./ContactForm.module.css";
import PrimaryButton from "@/app/Components/PrimaryButton/PrimaryButton.component";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit} id="contact">
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
      <label htmlFor="service" style={{ fontWeight: 600, color: "var(--grey-600)", marginBottom: 4, marginTop: 8 }}>
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

      <PrimaryButton type="submit" disabled={submitting}>
        {submitting
          ? "Sending..."
          : submitted
            ? "Sent!"
            : <><span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><FiSend style={{ marginRight: 6 }} />Send Message</span></>}
      </PrimaryButton>
    </form>
  );
}
