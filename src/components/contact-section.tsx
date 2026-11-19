"use client";

import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <section id="contact" className="w-full bg-[#050914] py-16 sm:py-20 lg:py-28 text-white border-t border-[#1E293B]">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading & Contact Details */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#2563eb]">
              09 — INITIATE PROJECT
            </span>

            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white break-words">
              Let&apos;s Build Something Amazing Together
            </h2>

            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed text-[#94A3B8] break-words">
              Have a project in mind? Send us a message and we will get back to you within 24 hours.
            </p>

            {/* Contact Details List */}
            <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-5 border-t border-[#1E293B] pt-6">
              <div>
                <span className="text-[11px] font-medium tracking-wide uppercase text-[#94A3B8]">
                  Email
                </span>
                <p className="mt-0.5">
                  <a
                    href="mailto:innotrixai@gmail.com"
                    className="text-base font-medium text-white hover:text-[#2563eb] transition-colors break-words"
                  >
                    innotrixai@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <span className="text-[11px] font-medium tracking-wide uppercase text-[#94A3B8]">
                  Call / WhatsApp
                </span>
                <p className="mt-0.5">
                  <a
                    href="https://wa.me/971502891421"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium text-white hover:text-[#2563eb] transition-colors break-words"
                  >
                    +971 50 289 1421
                  </a>
                </p>
              </div>

              <div>
                <span className="text-[11px] font-medium tracking-wide uppercase text-[#94A3B8]">
                  Visit
                </span>
                <p className="mt-0.5 text-base font-medium text-white break-words">
                  Dubai, UAE
                </p>
              </div>

              <div>
                <span className="text-[11px] font-medium tracking-wide uppercase text-[#94A3B8]">
                  Working Hours
                </span>
                <p className="mt-0.5 text-base text-[#94A3B8] break-words">
                  Mon–Sat, 9:00 AM – 8:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 w-full rounded-[2px] border border-[#1E293B] bg-[#050914] p-5 sm:p-8 lg:p-10">
            {submitted ? (
              <div className="py-12 sm:py-16 text-center">
                <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#2563eb]">
                  MESSAGE RECEIVED
                </span>
                <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-white break-words">
                  Thanks — we&apos;ll get back to you within 24 hours.
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      service: "Web Development",
                      message: "",
                    });
                  }}
                  className="mt-6 text-xs font-semibold text-[#2563eb] hover:underline underline-offset-4"
                >
                  Send another inquiry →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 w-full">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium tracking-wide uppercase text-[#94A3B8]">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="mt-1.5 w-full rounded-[2px] border border-[#1E293B] bg-[#050914] px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-white placeholder-[#64748B] focus:border-[#2563eb] focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium tracking-wide uppercase text-[#94A3B8]">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="mt-1.5 w-full rounded-[2px] border border-[#1E293B] bg-[#050914] px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-white placeholder-[#64748B] focus:border-[#2563eb] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium tracking-wide uppercase text-[#94A3B8]">
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 123 4567"
                      className="mt-1.5 w-full rounded-[2px] border border-[#1E293B] bg-[#050914] px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-white placeholder-[#64748B] focus:border-[#2563eb] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-medium tracking-wide uppercase text-[#94A3B8]">
                    Select Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="mt-1.5 w-full rounded-[2px] border border-[#1E293B] bg-[#050914] px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-white focus:border-[#2563eb] focus:outline-none transition-colors"
                  >
                    <option value="Web Development" className="bg-[#050914] text-white">Web Development</option>
                    <option value="Mobile App Development" className="bg-[#050914] text-white">Mobile App Development</option>
                    <option value="AI Chatbots" className="bg-[#050914] text-white">AI Chatbots</option>
                    <option value="Automation" className="bg-[#050914] text-white">Automation</option>
                    <option value="AI Calling Agents" className="bg-[#050914] text-white">AI Calling Agents</option>
                    <option value="AI Automation" className="bg-[#050914] text-white">AI Automation</option>
                    <option value="Digital Marketing" className="bg-[#050914] text-white">Digital Marketing</option>
                    <option value="Data Analytics" className="bg-[#050914] text-white">Data Analytics</option>
                    <option value="Cloud Solutions" className="bg-[#050914] text-white">Cloud Solutions</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium tracking-wide uppercase text-[#94A3B8]">
                    Project message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your objectives, timeframe, and requirements..."
                    className="mt-1.5 w-full rounded-[2px] border border-[#1E293B] bg-[#050914] px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-white placeholder-[#64748B] focus:border-[#2563eb] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-[2px] bg-[#2563eb] py-3 sm:py-3.5 px-6 text-sm font-semibold text-white transition-colors hover:bg-blue-600 disabled:opacity-50"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
