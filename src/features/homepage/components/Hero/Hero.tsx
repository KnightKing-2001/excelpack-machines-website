import { Button, Container } from "@/components/ui";

export function Hero() {
  return (
    <section
      className="relative min-h-180 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/home/Home page Background Image1.png')",
      }}
    >
      {/* Overlay */}
      <div
        className="
          absolute inset-0
          bg-linear-to-r
          from-[#001B3A]
          via-[#001B3A]/80
          to-transparent
        "
      />

      <Container>
        <div className="relative z-10 flex min-h-180 items-center">
          <div className="max-w-3xl text-white">
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-blue-300">
              Smart Packaging Technology
            </p>

            <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
              Smart Machines.
              <br />
              Complete Solutions.
              <br />
              <span className="text-orange-500">Built For Performance.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-200">
              High performance packaging machines and automation solutions engineered for speed,
              precision, reliability, and long-term industrial performance.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-200">
              <span>⚙ Advanced Technology</span>
              <span>◉ Reliable Performance</span>
              <span>✣ Low Maintenance</span>
              <span>◎ Global Support</span>
            </div>

            <div className="mt-10 flex gap-4">
              <Button>Explore Machines →</Button>

              <Button variant="outline">▶ Watch Video</Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Speed Card */}
      <div
        className="
          absolute
          right-20
          top-1/2
          hidden
          -translate-y-1/2
          rounded-xl
          bg-[#002B63]
          p-8
          text-white
          shadow-xl
          lg:block
        "
      >
        <p className="text-sm">UP TO</p>

        <p className="text-4xl font-bold text-orange-500">180 PPM</p>

        <p>
          High Speed
          <br />
          Packaging
        </p>
      </div>
    </section>
  );
}
