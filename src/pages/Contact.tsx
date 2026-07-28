import { useState } from "react";
import { products } from "@/data/products/products.data";
import { useInquiryStore } from "@/lib/useInquiryStore";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { sendAdminNotification, buildAdminNotificationParams } from "@/lib/useEmailService";

export default function ContactPage() {
  const { addInquiry } = useInquiryStore();
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    machineInterest: "EX-V3-MH",
    industry: "Snacks, Namkeen & Confectionery",
    pouchType: "",
    targetSpeed: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = addInquiry({ ...formData, type: "General Contact" });
    sendAdminNotification(
      buildAdminNotificationParams({ ...formData, id, type: "General Contact" })
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="py-12 bg-neutral-50 min-h-screen">
      <div className="mx-auto max-w-screen-2xl px-8">
        {/* Banner Header */}
        <div className="rounded-2xl bg-neutral-900 p-8 md:p-12 text-white shadow-xl">
          <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs font-bold text-orange-400 border border-orange-500/30 uppercase tracking-widest">
            Contact Sales & Engineering
          </span>
          <h1 className="mt-3 text-3xl font-black text-white md:text-5xl">
            Get In Touch With ExcelPack
          </h1>
          <p className="mt-3 text-neutral-300 text-sm md:text-base max-w-3xl leading-relaxed">
            Have a project requirement, machinery inquiry, or need a customized SPM offer? Speak directly with our engineering team in Greater Noida.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Left Column Contact Details & Address Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-white p-8 border border-neutral-200 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-neutral-900">Head Office & Plant</h2>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-neutral-400">Manufacturing Facility Location</h4>
                  <p className="mt-1 text-sm font-semibold text-neutral-800 leading-relaxed">
                    Excelpack Machines Private Limited<br />
                    Greater Noida Industrial Area,<br />
                    Gautam Buddha Nagar, Uttar Pradesh, India - 201306
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-neutral-400">Phone / Commercial Support</h4>
                  <p className="mt-1 text-sm font-semibold text-neutral-800">
                    +91-8527502214
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-neutral-400">Email Inquiries</h4>
                  <p className="mt-1 text-sm font-semibold text-blue-900">
                    info@excelpackmachine.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-neutral-400">Operating Hours</h4>
                  <p className="mt-1 text-xs text-neutral-600">
                    Monday – Saturday: 9:00 AM – 6:30 PM (IST)<br />
                    24/7 Service Emergency Support
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Shortcuts */}
            <div className="rounded-2xl bg-neutral-900 p-6 text-white shadow-xl space-y-3">
              <h3 className="text-sm font-bold">Instant Engineering Connect</h3>
              <a
                href="https://wa.me/918527502214"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-green-600 py-3 text-xs font-bold text-white hover:bg-green-700 transition"
              >
                <MessageSquare className="h-4 w-4" /> Chat on WhatsApp (+91-8527502214)
              </a>
              <a
                href="tel:+918527502214"
                className="flex items-center justify-center gap-2 rounded-xl bg-neutral-800 border border-neutral-700 py-3 text-xs font-bold text-white hover:bg-neutral-700 transition"
              >
                <Phone className="h-4 w-4 text-orange-400" /> Direct Phone Call
              </a>
            </div>
          </div>

          {/* Right Column Comprehensive Contact Form */}
          <div className="lg:col-span-7 rounded-2xl bg-white p-8 border border-neutral-200 shadow-sm">
            <h2 className="text-2xl font-bold text-neutral-900">Send Machinery Project Inquiry</h2>
            <p className="mt-1 text-xs text-neutral-500">
              Fill in your specifications below. Our sales engineering team will evaluate your requirements and contact you within 4 hours.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-xl bg-green-50 p-8 text-center border border-green-200">
                <CheckCircle2 className="mx-auto h-16 w-16 text-green-600 animate-bounce" />
                <h3 className="mt-3 text-2xl font-bold text-green-900">Inquiry Submitted Successfully!</h3>
                <p className="mt-2 text-sm text-green-700">
                  Thank you, <span className="font-bold">{formData.name}</span>. A commercial offer and machine technical drawings will be sent to <span className="font-bold">{formData.email}</span>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-700">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Abhishek Singh"
                      className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-700">Work Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@company.com"
                      className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-700">Phone / Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98181 77144"
                      className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-700">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company Name"
                      className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-700">Packaging Machine Model *</label>
                    <select
                      value={formData.machineInterest}
                      onChange={(e) => setFormData({ ...formData, machineInterest: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-hidden"
                    >
                      {products.map((p) => (
                        <option key={p.id} value={p.model}>
                          {p.model} - {p.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-700">Target Industry</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-hidden"
                    >
                      <option value="Snacks, Namkeen & Confectionery">Snacks, Namkeen & Confectionery</option>
                      <option value="Spices, Flour & Powders">Spices, Flour & Powders</option>
                      <option value="Grains, Pulses, Sugar & Salt">Grains, Pulses, Sugar & Salt</option>
                      <option value="Dry Fruits, Nuts & Seeds">Dry Fruits, Nuts & Seeds</option>
                      <option value="Pharmaceuticals & Agrochemicals">Pharmaceuticals & Agrochemicals</option>
                      <option value="Custom Engineering & SPM">Custom Engineering & SPM</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-700">Target Pouch Style & Weight</label>
                    <input
                      type="text"
                      value={formData.pouchType}
                      onChange={(e) => setFormData({ ...formData, pouchType: e.target.value })}
                      placeholder="e.g. 50g Namkeen Pillow Pouch"
                      className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-700">Required Speed (PPM)</label>
                    <input
                      type="text"
                      value={formData.targetSpeed}
                      onChange={(e) => setFormData({ ...formData, targetSpeed: e.target.value })}
                      placeholder="e.g. 90-120 PPM"
                      className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-700">Detailed Message / Custom Requirements</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe material characteristics, gas flushing requirement, factory floor dimensions..."
                    className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-orange-600 py-3.5 text-sm font-bold text-white hover:bg-orange-700 transition shadow-md"
                >
                  <Send className="h-4 w-4" /> Send Project Inquiry To Factory
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
