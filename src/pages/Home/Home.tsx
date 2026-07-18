import { PageLayout, Section } from "@/components/layout";

import { Footer, Navbar } from "@/components/navigation";

import { navbarItems } from "@/constants/navigation";

export function Home() {
  return (
    <PageLayout header={<Navbar items={navbarItems} />} footer={<Footer columns={[]} />}>
      {/* Hero */}

      <Section id="hero" spacing="xl">
        Homepage Hero Section
      </Section>

      {/* Products */}

      <Section id="products">Product Showcase</Section>

      {/* Industries */}

      <Section id="industries" background="muted">
        Industries Served
      </Section>

      {/* CTA */}

      <Section id="cta" background="primary">
        Contact CTA
      </Section>
    </PageLayout>
  );
}
