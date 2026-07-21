import { Button, Container } from "@/components/ui";
import { homeHeroData } from "@/data/home";

export function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/home/Home page Background Image1.png')",
      }}
    >
      {/* Dark industrial overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#001B3A]/95 via-[#001B3A]/75 to-transparent" />

      <Container>
        <div className="relative z-10 flex min-h-screen items-center">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-sm uppercase tracking-widest text-blue-300">
              {homeHeroData.subtitle}
            </p>
            <h1 className="text-5xl font-bold leading-tight lg:text-6xl">{homeHeroData.title}</h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-200">
              {homeHeroData.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button>{homeHeroData.primaryButton.label}</Button>

              <Button variant="outline">{homeHeroData.secondaryButton.label}</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
