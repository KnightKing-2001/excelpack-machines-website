import { useState } from "react";
import { resources, faqs } from "@/data/resources/resources.data";
import { useInquiryStore } from "@/lib/useInquiryStore";
import { Download, FileText, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function ResourcesPage() {
  const { setBrochureModalOpen } = useInquiryStore();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="py-12 bg-neutral-50 min-h-screen">
      <div className="mx-auto max-w-screen-2xl px-8">
        {/* Banner Header */}
        <div className="rounded-2xl bg-neutral-900 p-8 md:p-12 text-white shadow-xl">
          <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs font-bold text-orange-400 border border-orange-500/30 uppercase tracking-widest">
            Downloads & Knowledge Center
          </span>
          <h1 className="mt-3 text-3xl font-black text-white md:text-5xl">
            Engineering Resources & FAQs
          </h1>
          <p className="mt-3 text-neutral-300 text-sm md:text-base max-w-3xl leading-relaxed">
            Access product catalogues, technical datasheets, preventive maintenance checklists, and frequently asked technical questions regarding Vertical Form Fill Seal packaging systems.
          </p>
        </div>

        {/* Downloadable Resources Grid */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-neutral-900">Downloadable Technical Documents</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {resources.map((res) => (
              <div key={res.id} className="rounded-2xl bg-white p-6 border border-neutral-200 shadow-sm flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <FileText className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="rounded bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-900">
                      {res.category}
                    </span>
                    <span className="text-[11px] font-semibold text-neutral-400">{res.fileSize}</span>
                  </div>
                  <h3 className="mt-2 text-base font-bold text-neutral-900">{res.title}</h3>
                  <p className="mt-1 text-xs text-neutral-600 leading-relaxed">{res.description}</p>
                  <button
                    onClick={() => setBrochureModalOpen(true)}
                    className="mt-4 flex items-center gap-1.5 rounded-lg bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-700 shadow-sm"
                  >
                    <Download className="h-3.5 w-3.5" /> Download PDF Brochure
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="mt-16 rounded-2xl bg-white p-8 border border-neutral-200 shadow-sm">
          <div className="flex items-center gap-3 border-b border-neutral-100 pb-4">
            <HelpCircle className="h-6 w-6 text-orange-600" />
            <div>
              <h2 className="text-xl font-bold text-neutral-900">Frequently Asked Technical Questions</h2>
              <p className="text-xs text-neutral-500">Everything you need to know about Excelpack machinery & services</p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-neutral-200 bg-neutral-50/50 transition overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-neutral-900 hover:bg-neutral-100"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-orange-600 shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-neutral-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="border-t border-neutral-200 bg-white p-5 text-xs md:text-sm text-neutral-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
