import { useState } from "react";
import { Modal } from "./Modal";
import { products } from "@/data/products/products.data";
import { useInquiryStore } from "@/lib/useInquiryStore";
import { sanitizeFormData, isValidEmail, isValidPhone } from "@/lib/security";
import { CheckCircle2, Send, X, AlertCircle } from "lucide-react";

// Field max-length constraints
const FIELD_LIMITS = {
  name: 100,
  email: 150,
  phone: 25,
  company: 150,
  pouchType: 100,
  targetSpeed: 50,
  message: 1000,
};

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
}

export function RequestQuoteModal() {
  const { quoteModalOpen, setQuoteModalOpen, selectedMachineId, addInquiry } = useInquiryStore();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const activeMachineId = selectedMachineId || "EX-V3-MH";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    machineInterest: activeMachineId,
    industry: "Snacks, Namkeen & Confectionery",
    pouchType: "",
    targetSpeed: "",
    message: "",
  });

  const selectedMachineChoice = formData.machineInterest || activeMachineId;

  // ── Client-side validation
  function validate(): boolean {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = "Full name is required.";
    if (!isValidEmail(formData.email)) errs.email = "Please enter a valid email address.";
    if (!isValidPhone(formData.phone)) errs.phone = "Please enter a valid phone number.";
    if (!formData.company.trim()) errs.company = "Company name is required.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // ── Sanitize all fields before storing
    const safe = sanitizeFormData(formData, FIELD_LIMITS);

    addInquiry({
      ...safe,
      machineInterest: selectedMachineChoice,
      type: "Quote Request",
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setQuoteModalOpen(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        machineInterest: activeMachineId,
        industry: "Snacks, Namkeen & Confectionery",
        pouchType: "",
        targetSpeed: "",
        message: "",
      });
      setErrors({});
    }, 2500);
  };

  const handleClose = () => {
    setSubmitted(false);
    setQuoteModalOpen(false);
    setErrors({});
  };

  const setField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const currentMachine = products.find(
    (p) => p.id === selectedMachineChoice || p.model === selectedMachineChoice
  );

  const FieldError = ({ msg }: { msg?: string }) =>
    msg ? (
      <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
        <AlertCircle className="h-3 w-3" />
        {msg}
      </p>
    ) : null;

  return (
    <Modal open={quoteModalOpen} onClose={handleClose} size="xl">
      <div className="relative">
        <button
          onClick={handleClose}
          className="absolute right-0 top-0 text-neutral-400 hover:text-neutral-700"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        {submitted ? (
          <div className="py-12 text-center">
            <CheckCircle2 className="mx-auto h-16 w-16 text-green-500 animate-bounce" />
            <h3 className="mt-4 text-2xl font-bold text-neutral-900">Quotation Request Sent!</h3>
            <p className="mt-2 text-neutral-600">
              Thank you,{" "}
              <span className="font-semibold">{formData.name}</span>. Our technical sales team will
              review your specifications for{" "}
              <span className="font-semibold text-blue-700">
                {currentMachine?.name || selectedMachineChoice}
              </span>{" "}
              and get back to you within 4 business hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-800">
                Official Machine Quote Request
              </span>
              <h2 className="mt-2 text-2xl font-bold text-neutral-900">
                Get Commercial &amp; Technical Offer
              </h2>
              <p className="text-sm text-neutral-600">
                Excelpack Machines Private Limited • Direct Factory Pricing
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid gap-4 md:grid-cols-2">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-neutral-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={FIELD_LIMITS.name}
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setField("name", e.target.value)}
                    placeholder="e.g. Rajesh Kumar"
                    className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                      errors.name
                        ? "border-red-400 focus:ring-red-300"
                        : "border-neutral-300 focus:ring-blue-300 focus:border-blue-600"
                    }`}
                  />
                  <FieldError msg={errors.name} />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-neutral-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    maxLength={FIELD_LIMITS.email}
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setField("email", e.target.value)}
                    placeholder="e.g. rajesh@company.com"
                    className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                      errors.email
                        ? "border-red-400 focus:ring-red-300"
                        : "border-neutral-300 focus:ring-blue-300 focus:border-blue-600"
                    }`}
                  />
                  <FieldError msg={errors.email} />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-neutral-700">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={FIELD_LIMITS.phone}
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(e) => setField("phone", e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                      errors.phone
                        ? "border-red-400 focus:ring-red-300"
                        : "border-neutral-300 focus:ring-blue-300 focus:border-blue-600"
                    }`}
                  />
                  <FieldError msg={errors.phone} />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-neutral-700">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={FIELD_LIMITS.company}
                    autoComplete="organization"
                    value={formData.company}
                    onChange={(e) => setField("company", e.target.value)}
                    placeholder="e.g. Haldiram Snacks Pvt Ltd"
                    className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                      errors.company
                        ? "border-red-400 focus:ring-red-300"
                        : "border-neutral-300 focus:ring-blue-300 focus:border-blue-600"
                    }`}
                  />
                  <FieldError msg={errors.company} />
                </div>

                {/* Machine Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-neutral-700">
                    Select Packaging Machine *
                  </label>
                  <select
                    value={selectedMachineChoice}
                    onChange={(e) => setField("machineInterest", e.target.value)}
                    className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    {products.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.model} - {p.name} ({p.speed})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Industry */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-neutral-700">
                    Target Industry
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setField("industry", e.target.value)}
                    className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    <option>Snacks, Namkeen &amp; Confectionery</option>
                    <option>Spices, Flour &amp; Powders</option>
                    <option>Grains, Pulses, Sugar &amp; Salt</option>
                    <option>Dry Fruits, Nuts &amp; Seeds</option>
                    <option>Pharmaceuticals &amp; Agrochemicals</option>
                    <option>Custom Engineering &amp; SPM</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase text-neutral-700">
                    Pouch Style / Target Weight
                  </label>
                  <input
                    type="text"
                    maxLength={FIELD_LIMITS.pouchType}
                    value={formData.pouchType}
                    onChange={(e) => setField("pouchType", e.target.value)}
                    placeholder="e.g. Pillow Pouch 100g, Gusseted 1kg"
                    className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-neutral-700">
                    Required Speed (PPM)
                  </label>
                  <input
                    type="text"
                    maxLength={FIELD_LIMITS.targetSpeed}
                    value={formData.targetSpeed}
                    onChange={(e) => setField("targetSpeed", e.target.value)}
                    placeholder="e.g. 80 - 120 PPM"
                    className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-neutral-700">
                  Additional Details{" "}
                  <span className="text-neutral-400 normal-case font-normal">
                    ({FIELD_LIMITS.message - formData.message.length} chars remaining)
                  </span>
                </label>
                <textarea
                  rows={3}
                  maxLength={FIELD_LIMITS.message}
                  value={formData.message}
                  onChange={(e) => setField("message", e.target.value)}
                  placeholder="Provide product characteristics, bulk density, floor space constraints or gas flushing needs..."
                  className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-700 shadow-md"
                >
                  <Send className="h-4 w-4" /> Submit Quotation Request
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </Modal>
  );
}
