import { Container, Section } from "@/components/ui";
import { homeHeroData } from "@/data/home";

export function Hero() {
  return (
    <Section spacing="hero">
      <Container>
        <div>
          <p className="text-sm uppercase tracking-wide">{homeHeroData.subtitle}</p>

          <h1 className="mt-4 text-5xl font-bold">{homeHeroData.title}</h1>

          <p className="mt-6 max-w-2xl text-lg">{homeHeroData.description}</p>

          <div className="mt-8 flex gap-4">
            <a
              href={homeHeroData.primaryButton.href}
              className="rounded bg-primary-600 px-6 py-3 text-white"
            >
              {homeHeroData.primaryButton.label}
            </a>

            <a href={homeHeroData.secondaryButton.href} className="rounded border px-6 py-3">
              {homeHeroData.secondaryButton.label}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
