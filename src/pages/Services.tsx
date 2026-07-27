import { useState } from "react";
import { services } from "@/data/services/services.data";
import { useInquiryStore } from "@/lib/useInquiryStore";
import { Wrench, ShieldCheck, Settings, GraduationCap, CheckCircle2, Send } from "lucide-react";

export default function ServicesPage() {
  const { addInquiry } = useInquiryStore();
  const [submitted, setSubmitted] = useState(false);

  const [partForm, setPartForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    machineModel: "EX-V3-MH",
    partDescription: "",
  });

  const getIcon = (name: string) => {
    switch (name) {
      case "Wrench": return Wrench;
      case "ShieldCheck": return ShieldCheck;
      case "Settings": return Settings;
      default: return GraduationCap;
    }
  };

  const handlePartSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addInquiry({
      ...partForm,
      machineInterest: partForm.machineModel,
      industry: "Spare Parts Request",
      message: `Spare Part Request: ${partForm.partDescription}`,
      type: "Spare Parts",
    });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="py-12 bg-neutral-50 min-h-screen">
      <div className="mx-auto max-w-screen-2xl px-8">
        {/* Banner */}
        <div className="rounded-2xl bg-neutral-900 p-8 md:p-12 text-white shadow-xl">
          <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs font-bold text-orange-400 border border-orange-500/30 uppercase tracking-widest">
            After-Sales & Technical Support
          </span>
          <h1 className="mt-3 text-3xl font-black text-white md:text-5xl">
            Support Beyond Installation
          </h1>
          <p className="mt-3 text-neutral-300 text-sm md:text-base max-w-3xl leading-relaxed">
            We don’t just sell packaging machinery — we ensure long-term equipment uptime with factory-certified installation, preventive maintenance contracts (AMC), express spare parts delivery, and operator training.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((serv) => {
            const Icon = getIcon(serv.icon);
            return (
              <div key={serv.id} className="rounded-2xl bg-white p-8 border border-neutral-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-bold text-neutral-900">{serv.title}</h2>
                </div>

                <p className="mt-4 text-xs md:text-sm text-neutral-600 leading-relaxed">
                  {serv.description}
                </p>

                <div className="mt-6 border-t border-neutral-100 pt-4">
                  <h4 className="text-xs font-extrabold uppercase text-neutral-500 mb-2">Key Service Benefits:</h4>
                  <ul className="space-y-2 text-xs text-neutral-700">
                    {serv.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        <span className="font-semibold">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Spare Parts Request Section */}
        <div id="spare-parts" className="mt-16 rounded-2xl bg-white p-8 border border-neutral-200 shadow-sm scroll-mt-24">
          <div className="max-w-3xl">
            <span className="text-xs font-extrabold uppercase text-orange-600 tracking-wider">
              Genuine OEM Components
            </span>
            <h2 className="mt-1 text-2xl font-bold text-neutral-900">Request Machine Spare Parts or Change Parts</h2>
            <p className="mt-2 text-xs text-neutral-600">
              Need replacement sealing jaws, heater cartridges, forming collars, belts, or pneumatic solenoids? Submit your machine serial/model number below for 24-48 hr dispatch.
            </p>
          </div>

          {submitted ? (
            <div className="mt-6 rounded-xl bg-green-50 p-6 text-center border border-green-200">
              <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
              <h3 className="mt-2 text-lg font-bold text-green-900">Spare Parts Inquiry Received!</h3>
              <p className="mt-1 text-xs text-green-700">
                Our parts desk will check stock availability for <span className="font-bold">{partForm.machineModel}</span> and email you an official quote.
              </p>
            </div>
          ) : (
            <form onSubmit={handlePartSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={partForm.name}
                    onChange={(e) => setPartForm({ ...partForm, name: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-700">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={partForm.email}
                    onChange={(e) => setPartForm({ ...partForm, email: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-700">Phone / Mobile *</label>
                  <input
                    type="tel"
                    required
                    value={partForm.phone}
                    onChange={(e) => setPartForm({ ...partForm, phone: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-700">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={partForm.company}
                    onChange={(e) => setPartForm({ ...partForm, company: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-neutral-700">Machine Model / Serial *</label>
                <select
                  value={partForm.machineModel}
                  onChange={(e) => setPartForm({ ...partForm, machineModel: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-hidden"
                >
                  <option value="EX-V3-MH">EX-V3-MH (3-Servo Multihead)</option>
                  <option value="EX-V3-CF">EX-V3-CF (3-Servo Cup Filler)</option>
                  <option value="EX-V3-AF">EX-V3-AF (3-Servo Auger)</option>
                  <option value="EX-V2-MH">EX-V2-MH (2-Servo Multihead)</option>
                  <option value="EX-V2-CF">EX-V2-CF (2-Servo Cup Filler)</option>
                  <option value="EX-V2-AF">EX-V2-AF (2-Servo Auger)</option>
                  <option value="EX-PN-MH">EX-PN-MH (Pneumatic Multihead)</option>
                  <option value="EX-PN-CF">EX-PN-CF (Pneumatic Cup Filler)</option>
                  <option value="EX-PN-AF">EX-PN-AF (Pneumatic Auger)</option>
                  <option value="EX-SPM">Special Purpose Machine (SPM)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-neutral-700">Required Part Name / Description *</label>
                <textarea
                  rows={3}
                  required
                  value={partForm.partDescription}
                  onChange={(e) => setPartForm({ ...partForm, partDescription: e.target.value })}
                  placeholder="Specify part description (e.g., Horizontal Sealing Jaw Set for EX-V3-MH, 240mm Forming Collar, Solenoid Valve)..."
                  className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-hidden"
                />
              </div>

              <button
                type="submit"
                className="flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-2.5 text-xs font-bold text-white hover:bg-orange-700 shadow-md"
              >
                <Send className="h-4 w-4" /> Submit Spare Parts Request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
