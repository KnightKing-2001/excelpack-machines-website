import { FloatingContactBar } from "@/components/common/FloatingContactBar";
import { Footer, Header } from "@/components/navigation";
import {
  ComparisonDrawer,
  CookieConsent,
  DownloadBrochureModal,
  RequestQuoteModal,
} from "@/components/overlays";
import { COMPANY } from "@/constants/company";
import { useAnalytics } from "@/hooks/useAnalytics";
import { navbarItems } from "@/constants/navigation";
import { usePageTracker } from "@/hooks/usePageTracker";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link, Outlet } from "react-router-dom";

const footerColumns = [
  {
    title: "Packaging Machinery",
    links: [
      { label: "VFFS 3 Servo Series", href: "/products?category=3-Servo+VFFS" },
      { label: "VFFS 2 Servo Series", href: "/products?category=2-Servo+VFFS" },
      { label: "Pneumatic VFFS Series", href: "/products?category=Pneumatic+VFFS" },
      { label: "Special Purpose Machines (SPM)", href: "/products/ex-spm" },
      { label: "Multihead Weighers", href: "/products?filler=Multihead+Weigher" },
      { label: "Volumetric Cup Fillers", href: "/products?filler=Volumetric+Cup+Filler" },
      { label: "Servo Auger Fillers", href: "/products?filler=Auger+Filler" },
    ],
  },
  {
    title: "Target Industries",
    links: [
      { label: "Snacks, Namkeen & Confectionery", href: "/industries#food-snacks" },
      { label: "Spices, Flour & Powders", href: "/industries#spices-powders" },
      { label: "Grains, Pulses & Sugar", href: "/industries#grains-pulses" },
      { label: "Dry Fruits & Nuts", href: "/industries#dry-fruits-nuts" },
      { label: "Pharma & Agrochemicals", href: "/industries#pharma-chemicals" },
      { label: "Custom Automation", href: "/solutions#spm-engineering" },
    ],
  },
  {
    title: "Company & Support",
    links: [
      { label: "About ExcelPack", href: "/about" },
      { label: "Turnkey Line Solutions", href: "/solutions" },
      { label: "Service & Maintenance AMC", href: "/services" },
      { label: "Spare Parts Request", href: "/services#spare-parts" },
      { label: "Catalogues & Resources", href: "/resources" },
      { label: "Contact Engineering Team", href: "/contact" },
      { label: "Admin CRM Portal", href: "/admin" },
    ],
  },
];

function LayoutInner() {
  // These hooks need to be inside the Router context (provided by AppRouter)
  usePageTracker();
  useScrollReveal();
  useAnalytics();

  return (
    <div className="flex min-h-screen flex-col bg-neutral-50 font-sans text-neutral-900 antialiased selection:bg-orange-500 selection:text-white">
      <Header
        logo={
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/ExcelPack Logo.jpeg"
              alt="Excelpack Machines Private Limited"
              className="h-12 w-auto object-contain rounded-sm"
            />
          </Link>
        }
        items={navbarItems}
      />

      <main className="flex-1 page-transition">
        <Outlet />
      </main>

      <Footer
        logo={
          <div className="flex flex-col gap-2">
            <img
              src="/images/ExcelPack  Logo Dark.jpg"
              alt="Excelpack Logo"
              className="h-12 w-auto object-contain rounded-md"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />
            <div className="text-xl font-black uppercase tracking-wider text-white">
              EXCELPACK <span className="text-orange-500">MACHINES</span>
            </div>
            <span className="text-xs text-neutral-400 font-medium">
              Excelpack Machines Private Limited
            </span>
          </div>
        }
        description="Pioneering industrial packaging machinery manufacturer delivering high-speed 3-Servo VFFS, 2-Servo, Pneumatic, and Special Purpose Machines engineered for maximum efficiency and precision."
        columns={footerColumns}
        socialLinks={[
          { label: "LinkedIn", href: COMPANY.social.linkedin, icon: "in" },
          { label: "YouTube", href: COMPANY.social.youtube, icon: "▶" },
          { label: "IndiaMART", href: COMPANY.social.indiamart, icon: "IM" },
        ]}
        copyright={
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>
              © {new Date().getFullYear()} Excelpack Machines Private Limited. All rights reserved.
              • Greater Noida, U.P., India
            </p>
            <div className="flex items-center gap-6 text-xs text-neutral-400">
              <Link to="/about" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <Link to="/about" className="hover:text-white transition">
                Terms of Service
              </Link>
              <Link to="/admin" className="hover:text-orange-400 transition font-semibold">
                Admin Login
              </Link>
            </div>
          </div>
        }
      />

      {/* Global Modals & Floating Components */}
      <RequestQuoteModal />
      <DownloadBrochureModal />
      <ComparisonDrawer />
      <CookieConsent />
      <FloatingContactBar />
    </div>
  );
}

export default function MainLayout() {
  return <LayoutInner />;
}
