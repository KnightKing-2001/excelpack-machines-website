import { Button, Container } from "@/components/ui";
import { homeHeroData } from "@/data/home";

export function Hero() {
  return (
    <section
      className="relative min-h-[700px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${homeHeroData.backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#001B3A]/95 via-[#001B3A]/70 to-transparent" />

      <Container>
        <div className="relative z-10 flex min-h-[700px] items-center">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-sm uppercase tracking-widest text-blue-300">
              {homeHeroData.subtitle}
            </p>

            <h1 className="text-5xl font-bold leading-tight">{homeHeroData.title}</h1>

            <p className="mt-6 text-lg text-gray-200">{homeHeroData.description}</p>

            <div className="mt-8 flex gap-4">
              <Button>{homeHeroData.primaryButton.label}</Button>

              <Button variant="outline">{homeHeroData.secondaryButton.label}</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
