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
  FiDollarSign,
  FiClock,
} from "react-icons/fi";
import styles from "./ContactForm.module.css";
import PrimaryButton from "@/app/Components/PrimaryButton/PrimaryButton.component";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    service: "",
    budget: "",
    timeline: "",
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
    formData.append("bot-field", "");
    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }
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
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />

      {/* <div className={styles.formHeader}>
        <span className={styles.formLine} aria-hidden="true" />
        <span className={styles.formPixel} aria-hidden="true" />
      </div> */}

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

      <div className={styles.rowFields}>
        <Input
          label="Budget"
          name="budget"
          value={form.budget}
          onChange={handleChange}
          placeholder="Estimated budget (optional)"
          icon={<FiDollarSign />}
        />

        <Input
          label="Timeline"
          name="timeline"
          value={form.timeline}
          onChange={handleChange}
          placeholder="Ideal timeline (optional)"
          icon={<FiClock />}
        />
      </div>

      <div className={styles.selectField}>
        <label htmlFor="service">What do you need help with</label>

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
      </div>

      <div className={styles.buttonDiv}>
        <PrimaryButton type="submit" disabled={submitting}>
          <span className={styles.submitContent}>
            <FiSend />
            {submitting ? "Sending..." : "Send Message"}
          </span>
        </PrimaryButton>

        {status && (
          <p
            role="status"
            className={`${styles.statusMessage} ${
              status.startsWith("Thank")
                ? styles.statusSuccess
                : styles.statusError
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </form>
  );
}
