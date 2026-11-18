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
      console.log("Innotrix Contact Submission:", formData);
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <section id="contact" className="w-full bg-[#EFF6FF] py-24 md:py-36 text-[#0B1E3A] border-t border-[#DBEAFE]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          {/* Left Column: Heading & Plain Contact Details */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#64748B]">
              09 — INITIATE PROJECT
            </span>

            <h2 className="font-serif mt-4 text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1] tracking-tight text-[#0B1E3A]">
              Let&apos;s Build Something <span className="italic font-normal">Amazing</span> Together
            </h2>

            <p className="mt-6 text-base leading-[1.7] text-[#334155]">
              Have a project in mind? We&apos;d love to hear about it. Send us a message and we&apos;ll get back to you within 24 hours.
            </p>

            {/* Contact Details as a Plain List */}
            <div className="mt-12 space-y-6 border-t border-[#DBEAFE] pt-8">
              <div>
                <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#64748B]">
                  Email
                </span>
                <p className="mt-1">
                  <a
                    href="mailto:innotrixai@gmail.com"
                    className="text-base font-normal text-[#0B1E3A] hover:text-[#1D4ED8] hover:underline underline-offset-4 transition-colors"
                  >
                    innotrixai@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#64748B]">
                  Call / WhatsApp
                </span>
                <p className="mt-1">
                  <a
                    href="https://wa.me/971502891421"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-normal text-[#0B1E3A] hover:text-[#1D4ED8] hover:underline underline-offset-4 transition-colors"
                  >
                    +971 50 289 1421
                  </a>
                </p>
              </div>

              <div>
                <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#64748B]">
                  Visit
                </span>
                <p className="mt-1">
                  <a
                    href="https://maps.google.com/?q=Dubai,+United+Arab+Emirates"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-normal text-[#0B1E3A] hover:text-[#1D4ED8] hover:underline underline-offset-4 transition-colors"
                  >
                    Dubai, UAE
                  </a>
                </p>
              </div>

              <div>
                <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#64748B]">
                  Website
                </span>
                <p className="mt-1">
                  <a
                    href="https://www.innotrix.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-normal text-[#0B1E3A] hover:text-[#1D4ED8] hover:underline underline-offset-4 transition-colors"
                  >
                    https://www.innotrix.site/
                  </a>
                </p>
              </div>

              <div>
                <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#64748B]">
                  Working Hours
                </span>
                <p className="mt-1 text-base text-[#334155]">
                  Mon–Sat, 9:00 AM – 8:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Form in a White Box with 1px Hairline Border */}
          <div className="lg:col-span-7 rounded-[2px] border border-[#DBEAFE] bg-[#FFFFFF] p-8 sm:p-12">
            {submitted ? (
              <div className="py-16 text-center">
                <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#1D4ED8]">
                  MESSAGE RECEIVED
                </span>
                <h3 className="font-serif mt-3 text-3xl font-normal text-[#0B1E3A]">
                  Thank You
                </h3>
                <p className="mt-4 text-base text-[#334155] leading-[1.7] max-w-md mx-auto">
                  Thanks — we&apos;ll get back to you within 24 hours.
                </p>
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
                  className="mt-8 text-xs font-medium text-[#1D4ED8] hover:underline underline-offset-4"
                >
                  Send another inquiry →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium tracking-wide uppercase text-[#64748B]">
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
                    className="mt-2 w-full rounded-[2px] border border-[#DBEAFE] bg-[#FFFFFF] px-4 py-3 text-sm text-[#0B1E3A] placeholder-[#94A3B8] focus:border-[#1D4ED8] focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium tracking-wide uppercase text-[#64748B]">
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
                      className="mt-2 w-full rounded-[2px] border border-[#DBEAFE] bg-[#FFFFFF] px-4 py-3 text-sm text-[#0B1E3A] placeholder-[#94A3B8] focus:border-[#1D4ED8] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium tracking-wide uppercase text-[#64748B]">
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
                      className="mt-2 w-full rounded-[2px] border border-[#DBEAFE] bg-[#FFFFFF] px-4 py-3 text-sm text-[#0B1E3A] placeholder-[#94A3B8] focus:border-[#1D4ED8] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-medium tracking-wide uppercase text-[#64748B]">
                    Select Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="mt-2 w-full rounded-[2px] border border-[#DBEAFE] bg-[#FFFFFF] px-4 py-3 text-sm text-[#0B1E3A] focus:border-[#1D4ED8] focus:outline-none transition-colors"
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="AI & Automation">AI &amp; Automation</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium tracking-wide uppercase text-[#64748B]">
                    Tell us about your project... *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your objectives, timeframe, and requirements..."
                    className="mt-2 w-full rounded-[2px] border border-[#DBEAFE] bg-[#FFFFFF] px-4 py-3 text-sm text-[#0B1E3A] placeholder-[#94A3B8] focus:border-[#1D4ED8] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-[2px] bg-[#1D4ED8] py-3.5 px-6 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
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
