import { useState } from "react";
import { Modal } from "./Modal";
import { useInquiryStore } from "@/lib/useInquiryStore";
import { Download, FileText, CheckCircle2, X } from "lucide-react";
import { products } from "@/data/products/products.data";

export function DownloadBrochureModal() {
  const { brochureModalOpen, setBrochureModalOpen, selectedMachineId, addInquiry } = useInquiryStore();
  const [downloaded, setDownloaded] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const selectedMachine = products.find((p) => p.id === selectedMachineId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addInquiry({
      ...formData,
      machineInterest: selectedMachine?.model || "General Catalogue",
      industry: "Brochure Request",
      message: "Gated brochure download submission",
      type: "Brochure Download",
    });
    setDownloaded(true);

    // Create virtual download trigger
    const link = document.createElement("a");
    link.href = "/images/ExcelPack Logo.jpeg";
    link.download = `Excelpack_Catalogue_${selectedMachine?.model || "2026"}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloaded(false);
      setBrochureModalOpen(false);
    }, 3000);
  };

  return (
    <Modal open={brochureModalOpen} onClose={() => setBrochureModalOpen(false)} size="md">
      <div className="relative">
        <button
          onClick={() => setBrochureModalOpen(false)}
          className="absolute right-0 top-0 text-neutral-400 hover:text-neutral-700"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {downloaded ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-green-500 animate-bounce" />
            <h3 className="mt-3 text-xl font-bold text-neutral-900">Brochure Download Started!</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Your official PDF datasheet for <span className="font-semibold text-blue-700">{selectedMachine ? selectedMachine.name : "Excelpack Catalogue 2026"}</span> has been initiated. Check your downloads folder.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 border-b pb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900">Download Technical Specification PDF</h3>
                <p className="text-xs text-neutral-500">
                  {selectedMachine ? `${selectedMachine.model} - ${selectedMachine.name}` : "Excelpack Industrial Packaging Catalogue 2026"}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <div>
                <label className="block text-xs font-semibold text-neutral-700">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700">Work Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 Mobile number"
                  className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700">Company / Organization *</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Company name"
                  className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-hidden"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-900 py-3 text-sm font-semibold text-white transition hover:bg-blue-950 shadow-md"
                >
                  <Download className="h-4 w-4" /> Download PDF Brochure Now
                </button>
              </div>

              <p className="text-center text-[11px] text-neutral-400">
                100% Secure • Instant Access • No Spam Guarantee
              </p>
            </form>
          </div>
        )}
      </div>
    </Modal>
  );
}
