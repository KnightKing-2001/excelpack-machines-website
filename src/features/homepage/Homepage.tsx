import { Hero } from "./components/Hero";
import { TrustMarquee } from "./components/TrustMarquee";
import { ProductShowcase } from "./components/ProductShowcase";
import { WhyExcelpack } from "./components/WhyExcelpack";
import { SPMSpotlight } from "./components/SPMSpotlight";
import { PreFooterLeadMagnet } from "./components/PreFooterLeadMagnet";

export function Homepage() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <ProductShowcase />
      <WhyExcelpack />
      <SPMSpotlight />
      <PreFooterLeadMagnet />
    </>
  );
}

export default Homepage;
