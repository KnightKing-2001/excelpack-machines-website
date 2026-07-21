import { PageLayout } from "@/components/layout";
import { Footer, Navbar } from "@/components/navigation";
import { Section } from "@/components/ui";
import { navbarItems } from "@/constants/navigation";

export function Home() {
  return (
    <PageLayout header={<Navbar items={navbarItems} />} footer={<Footer columns={[]} />}>
      {/* Hero Section */}
      <Section id="hero" spacing="xl">
        Homepage Hero Section
      </Section>

      {/* Featured Products */}
      <Section id="products">Product Showcase</Section>

      {/* Industries */}
      <Section id="industries" background="muted">
        Industries Served
      </Section>

      {/* Call To Action */}
      <Section id="cta" background="primary">
        Contact CTA
      </Section>
    </PageLayout>
  );
}
