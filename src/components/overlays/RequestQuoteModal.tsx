import { useState } from "react";
import { Modal } from "./Modal";
import { products } from "@/data/products/products.data";
import { useInquiryStore } from "@/lib/useInquiryStore";
import { sanitizeFormData, isValidEmail, isValidPhone } from "@/lib/security";
import { CheckCircle2, Send, AlertCircle } from "lucide-react";

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

const FieldError = ({ msg }: { msg?: string }) =>
  msg ? (
    <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
      <AlertCircle className="h-3 w-3 shrink-0" />
      {msg}
    </p>
  ) : null;

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

  function validate(): boolean {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = "Full name is required.";
    if (!isValidEmail(formData.email)) errs.email = "Enter a valid email address.";
    if (!isValidPhone(formData.phone)) errs.phone = "Enter a valid phone number.";
    if (!formData.company.trim()) errs.company = "Company name is required.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const safe = sanitizeFormData(formData, FIELD_LIMITS);
    addInquiry({ ...safe, machineInterest: selectedMachineChoice, type: "Quote Request" });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setQuoteModalOpen(false);
      setFormData({
        name: "", email: "", phone: "", company: "",
        machineInterest: activeMachineId,
        industry: "Snacks, Namkeen & Confectionery",
        pouchType: "", targetSpeed: "", message: "",
      });
      setErrors({});
    }, 2500);
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

  const inputCls = (hasError?: string) =>
    `mt-1 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 ${
      hasError
        ? "border-red-400 focus:ring-red-300"
        : "border-neutral-300 focus:ring-blue-300 focus:border-blue-600"
    }`;

  return (
    <Modal
      open={quoteModalOpen}
      onClose={() => { setQuoteModalOpen(false); setErrors({}); }}
      title="Request a Quote"
      size="xl"
    >
      {submitted ? (
        /* ── Success State ── */
        <div className="py-8 text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-green-500 animate-bounce" />
          <h3 className="mt-4 text-xl font-bold text-neutral-900">Request Sent!</h3>
          <p className="mt-2 text-sm text-neutral-600 max-w-xs mx-auto">
            Thank you, <span className="font-semibold">{formData.name}</span>. Our team will
            review your{" "}
            <span className="font-semibold text-blue-700">
              {currentMachine?.name || selectedMachineChoice}
            </span>{" "}
            inquiry and respond within 4 business hours.
          </p>
        </div>
      ) : (
        /* ── Form ── */
        <form onSubmit={handleSubmit} className="space-y-4" noValidate autoComplete="off">

          {/* Header tag */}
          <div className="mb-1">
            <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-800">
              Direct Factory Pricing
            </span>
          </div>

          {/* Row 1: Name + Phone (side by side on sm+, stacked on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase text-neutral-600">Full Name *</label>
              <input
                type="text" required maxLength={FIELD_LIMITS.name} autoComplete="name"
                value={formData.name} onChange={(e) => setField("name", e.target.value)}
                placeholder="e.g. Rajesh Kumar"
                className={inputCls(errors.name)}
              />
              <FieldError msg={errors.name} />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-neutral-600">Phone / WhatsApp *</label>
              <input
                type="tel" required maxLength={FIELD_LIMITS.phone} autoComplete="tel"
                value={formData.phone} onChange={(e) => setField("phone", e.target.value)}
                placeholder="+91 98765 43210"
                className={inputCls(errors.phone)}
              />
              <FieldError msg={errors.phone} />
            </div>
          </div>

          {/* Row 2: Email + Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase text-neutral-600">Email *</label>
              <input
                type="email" required maxLength={FIELD_LIMITS.email} autoComplete="email"
                value={formData.email} onChange={(e) => setField("email", e.target.value)}
                placeholder="name@company.com"
                className={inputCls(errors.email)}
              />
              <FieldError msg={errors.email} />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-neutral-600">Company *</label>
              <input
                type="text" required maxLength={FIELD_LIMITS.company} autoComplete="organization"
                value={formData.company} onChange={(e) => setField("company", e.target.value)}
                placeholder="Company Name"
                className={inputCls(errors.company)}
              />
              <FieldError msg={errors.company} />
            </div>
          </div>

          {/* Row 3: Machine + Industry */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase text-neutral-600">Machine *</label>
              <select
                value={selectedMachineChoice}
                onChange={(e) => setField("machineInterest", e.target.value)}
                className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white"
              >
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.model} — {p.speed}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-neutral-600">Industry</label>
              <select
                value={formData.industry}
                onChange={(e) => setField("industry", e.target.value)}
                className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white"
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

          {/* Row 4: Pouch + Speed — optional, collapsed on mobile */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase text-neutral-600">Pouch / Weight</label>
              <input
                type="text" maxLength={FIELD_LIMITS.pouchType}
                value={formData.pouchType} onChange={(e) => setField("pouchType", e.target.value)}
                placeholder="e.g. 100g Pillow"
                className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm focus:border-blue-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-neutral-600">Speed (PPM)</label>
              <input
                type="text" maxLength={FIELD_LIMITS.targetSpeed}
                value={formData.targetSpeed} onChange={(e) => setField("targetSpeed", e.target.value)}
                placeholder="e.g. 80-120"
                className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm focus:border-blue-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold uppercase text-neutral-600">
              Additional Details{" "}
              <span className="text-neutral-400 normal-case font-normal">
                ({FIELD_LIMITS.message - formData.message.length} left)
              </span>
            </label>
            <textarea
              rows={3}
              maxLength={FIELD_LIMITS.message}
              value={formData.message}
              onChange={(e) => setField("message", e.target.value)}
              placeholder="Product, material, gas flushing, floor space requirements..."
              className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm focus:border-blue-600 focus:outline-none resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-orange-600 py-3.5 text-sm font-bold text-white transition hover:bg-orange-700 shadow-md"
          >
            <Send className="h-4 w-4" />
            Submit Quotation Request
          </button>
        </form>
      )}
    </Modal>
  );
}
