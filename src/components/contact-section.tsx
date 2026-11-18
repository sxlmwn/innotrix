"use client";

import { useState } from "react";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconClock,
  IconWorld,
  IconSend,
  IconCircleCheck,
} from "@tabler/icons-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission and log payload to console as instructed
    setTimeout(() => {
      console.log("Innotrix Contact Submission:", formData);
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="relative w-full bg-[#050914] py-20 sm:py-28 text-white border-t border-white/5">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Get In Touch
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Have a project in mind? We&apos;d love to hear about it. Send us a message and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="mt-14 sm:mt-18 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Contact Details (Left Column) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-white/10 bg-[#071233]/50 p-6 sm:p-8 backdrop-blur-sm">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Contact Information
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Reach out to our global delivery office directly via email, phone, or WhatsApp.
              </p>

              <div className="mt-8 space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-blue-600/20 text-cyan-400 border border-cyan-500/30 flex-shrink-0">
                    <IconMail className="size-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Email
                    </span>
                    <p className="mt-0.5">
                      <a
                        href="mailto:innotrixai@gmail.com"
                        className="text-sm sm:text-base font-medium text-white hover:text-cyan-300 transition-colors"
                      >
                        innotrixai@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Call / WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-blue-600/20 text-cyan-400 border border-cyan-500/30 flex-shrink-0">
                    <IconPhone className="size-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Call / WhatsApp
                    </span>
                    <p className="mt-0.5">
                      <a
                        href="https://wa.me/971502891421"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-medium text-white hover:text-cyan-300 transition-colors"
                      >
                        +971 50 289 1421
                      </a>
                    </p>
                  </div>
                </div>

                {/* Visit Us */}
                <div className="flex items-start gap-4">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-blue-600/20 text-cyan-400 border border-cyan-500/30 flex-shrink-0">
                    <IconMapPin className="size-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Visit Us
                    </span>
                    <p className="mt-0.5">
                      <a
                        href="https://maps.google.com/?q=Dubai,+United+Arab+Emirates"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-medium text-white hover:text-cyan-300 transition-colors"
                      >
                        Dubai, UAE
                      </a>
                    </p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-blue-600/20 text-cyan-400 border border-cyan-500/30 flex-shrink-0">
                    <IconWorld className="size-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Website
                    </span>
                    <p className="mt-0.5">
                      <a
                        href="https://www.innotrix.site/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-medium text-white hover:text-cyan-300 transition-colors"
                      >
                        https://www.innotrix.site/
                      </a>
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-blue-600/20 text-cyan-400 border border-cyan-500/30 flex-shrink-0">
                    <IconClock className="size-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Working Hours
                    </span>
                    <p className="mt-0.5 text-sm sm:text-base font-medium text-white">
                      Mon–Sat, 9:00 AM – 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4">
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                Fast Response Guarantee
              </span>
              <p className="mt-1 text-xs text-slate-300">
                All client inquiries are reviewed by our senior technical architects and responded to within 24 hours.
              </p>
            </div>
          </div>

          {/* Form (Right Column) */}
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#071233]/50 p-6 sm:p-10 backdrop-blur-sm">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-lg">
                  <IconCircleCheck className="size-10" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">
                  Message Sent Successfully
                </h3>
                <p className="mt-3 max-w-md text-base text-slate-300 leading-relaxed">
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
                  className="mt-8 rounded-xl bg-white/10 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-200">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="mt-2 w-full rounded-xl border border-white/15 bg-[#050914] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-200">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="mt-2 w-full rounded-xl border border-white/15 bg-[#050914] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-200">
                      Phone / WhatsApp <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 123 4567"
                      className="mt-2 w-full rounded-xl border border-white/15 bg-[#050914] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Select Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-200">
                    Select Service <span className="text-cyan-400">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-white/15 bg-[#050914] px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="AI & Automation">AI &amp; Automation</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-200">
                    Tell us about your project... <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your goals, timeline, and requirements..."
                    className="mt-2 w-full rounded-xl border border-white/15 bg-[#050914] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3.5 px-6 text-sm sm:text-base font-semibold text-white shadow-lg transition-all hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:brightness-110 disabled:opacity-50"
                >
                  <IconSend className="size-5" />
                  <span>{loading ? "Sending..." : "Send Message"}</span>
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
