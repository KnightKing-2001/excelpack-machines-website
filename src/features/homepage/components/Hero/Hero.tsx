import { Container } from "@/components/ui";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Zap, Shield, Globe, Award } from "lucide-react";

const heroImages = [
  "/images/hero-01.webp",
  "/images/hero-02.webp",
  "/images/hero-03.webp",
  "/images/hero-04.webp",
  "/images/hero-05.webp",
];

const badges = [
  { icon: Zap, label: "Advanced Technology" },
  { icon: Shield, label: "Reliable Performance" },
  { icon: Globe, label: "Global Support" },
  { icon: Award, label: "ISO Certified" },
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentImage((previous) => (previous === heroImages.length - 1 ? 0 : previous + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Slider */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`
            absolute inset-0 bg-cover bg-center
            transition-opacity duration-1500
            ${currentImage === index ? "opacity-100" : "opacity-0"}
          `}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      {/* Multi-layer gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001B3A] via-[#001B3A]/90 to-[#001B3A]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#001B3A]/60 via-transparent to-transparent" />

      {/* Animated grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container>
        <div className="relative z-10 flex min-h-[90vh] items-center">
          <div className={`max-w-3xl text-white transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Pre-headline pill */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
                Smart Packaging Technology
              </span>
            </div>

            <h1 className="text-5xl font-black leading-[1.1] lg:text-7xl">
              Smart Machines.
              <br />
              Complete Solutions.
              <br />
              <span className="relative">
                <span className="text-orange-500">Built For Performance.</span>
                {/* Underline accent */}
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 12" fill="none">
                  <path d="M0 8 Q100 0 200 8 Q300 16 400 8" stroke="#f97316" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
                </svg>
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-gray-200/90 leading-relaxed">
              High performance packaging machines and automation solutions engineered for speed,
              precision, reliability, and long-term industrial performance.
            </p>

            {/* Feature badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {badges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-200 backdrop-blur-sm"
                >
                  <Icon className="h-3.5 w-3.5 text-orange-400" />
                  {label}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="
                  inline-flex items-center gap-2 rounded-xl bg-orange-600
                  px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-orange-600/30
                  transition-all duration-200 hover:bg-orange-500 hover:scale-105 hover:shadow-orange-500/40
                "
              >
                Explore Machines
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/contact"
                className="
                  inline-flex items-center gap-2 rounded-xl border border-white/20
                  bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm
                  transition-all duration-200 hover:bg-white/20 hover:border-white/40
                "
              >
                <Play className="h-4 w-4 fill-white" />
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* Speed stat card — desktop only */}
      <div className="absolute right-16 top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="rounded-2xl border border-white/10 bg-[#002B63]/80 backdrop-blur-md p-8 text-white shadow-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-300">Up To</p>
          <p className="mt-1 text-5xl font-black text-orange-500">180</p>
          <p className="text-2xl font-bold text-orange-400">PPM</p>
          <div className="mt-4 border-t border-white/10 pt-4 text-xs text-neutral-300">
            <p className="font-semibold">High-Speed Packaging</p>
            <p className="mt-1 text-neutral-400">3-Servo Precision Control</p>
          </div>
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentImage(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentImage === index ? "w-10 bg-orange-500" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
