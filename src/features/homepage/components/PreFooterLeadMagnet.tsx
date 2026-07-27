import { useState } from "react";
import { Download, CheckCircle2, FileText } from "lucide-react";
import { useInquiryStore } from "@/lib/useInquiryStore";

export function PreFooterLeadMagnet() {
  const { addInquiry } = useInquiryStore();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addInquiry({
      name: name || "Website Visitor",
      email,
      phone: "N/A",
      company: "Newsletter / Catalogue Lead",
      machineInterest: "General Catalogue 2026",
      industry: "General Inquiry",
      message: "Inline pre-footer catalogue download lead",
      type: "Brochure Download",
    });
    setSubmitted(true);

    const link = document.createElement("a");
    link.href = "/images/ExcelPack Logo.jpeg";
    link.download = "Excelpack_Catalogue_2026.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-neutral-900 text-white py-16 border-t border-neutral-800">
      <div className="mx-auto max-w-5xl px-6 rounded-2xl bg-gradient-to-r from-blue-950 to-neutral-900 border border-neutral-800 p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-widest">
              <FileText className="h-4 w-4" /> Download Official Specs
            </div>
            <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-white">
              Get the Complete Industrial Packaging Catalogue 2026
            </h2>
            <p className="mt-2 text-xs md:text-sm text-neutral-300 leading-relaxed">
              Explore full engineering dimensions, pouch size matrices, electrical schemas, and multihead weighing tolerances.
            </p>
          </div>

          <div>
            {submitted ? (
              <div className="rounded-xl bg-neutral-900/80 p-6 text-center border border-green-500/30">
                <CheckCircle2 className="mx-auto h-10 w-10 text-green-500" />
                <h4 className="mt-2 text-lg font-bold text-white">Catalogue Download Triggered!</h4>
                <p className="mt-1 text-xs text-neutral-400">
                  Thank you. Your PDF download has started automatically.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name *"
                    className="w-full rounded-lg border border-neutral-700 bg-neutral-900/90 px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:border-orange-500 focus:outline-hidden"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Work Email Address *"
                    className="w-full rounded-lg border border-neutral-700 bg-neutral-900/90 px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:border-orange-500 focus:outline-hidden"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-orange-600 py-3 text-xs font-bold text-white transition hover:bg-orange-700 shadow-md"
                >
                  <Download className="h-4 w-4" /> Download Free PDF Brochure (4.5 MB)
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
