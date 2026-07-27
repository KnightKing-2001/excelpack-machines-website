import { Zap, Shield, Settings, Activity, Wrench, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export function WhyExcelpack() {
  const advantages = [
    {
      icon: Zap,
      title: "Advanced 3-Servo Precision Control",
      description:
        "Independent electronic servo drives for film pulling and horizontal sealing ensure smooth motion, eliminate mechanical wear, and increase packaging speeds up to 120 PPM.",
    },
    {
      icon: Shield,
      title: "Zero Film Wastage & High Accuracy",
      description:
        "Automated photo-mark sensors and print registration ensure pinpoint bag positioning, zero film waste during setup, and ±0.2g weighing precision.",
    },
    {
      icon: Settings,
      title: "Food-Grade SS304 Construction",
      description:
        "All contact parts and structural framing are fabricated from certified food-grade SS304 (or SS316 on request), meeting international cGMP, FDA, and CE hygienic standards.",
    },
    {
      icon: Activity,
      title: "Industry 4.0 IoT Ready",
      description:
        "Equipped with Siemens/Delta PLC interfaces supporting cloud connectivity, real-time OEE monitoring, and remote factory diagnostic assistance.",
    },
    {
      icon: Wrench,
      title: "Rapid Spare Parts & AMC Support",
      description:
        "Central spare parts warehouse in Greater Noida ensures 24-48 hour nationwide component dispatch, backed by expert field commissioning engineers.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-screen-2xl px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Column Text */}
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600">
              The ExcelPack Advantage
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-neutral-900 md:text-4xl leading-tight">
              Why Global Producers Choose ExcelPack Packaging Machinery
            </h2>
            <p className="mt-4 text-neutral-600 text-sm leading-relaxed">
              At Excelpack Machines Private Limited, we combine deep mechanical engineering expertise with cutting-edge servo automation to build machines that run reliably across demanding industrial shifts.
            </p>

            <div className="mt-8 space-y-6">
              {advantages.slice(0, 3).map((adv, index) => {
                const Icon = adv.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-neutral-900">{adv.title}</h4>
                      <p className="mt-1 text-xs text-neutral-600 leading-relaxed">{adv.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center gap-4">
              <Link
                to="/about"
                className="rounded-lg bg-blue-950 px-6 py-3 text-xs font-bold text-white hover:bg-blue-900 transition shadow-md"
              >
                Learn About Our Engineering Facility →
              </Link>
            </div>
          </div>

          {/* Right Column Facility / Visual Card */}
          <div className="relative">
            <div className="rounded-2xl bg-neutral-900 p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 h-60 w-60 rounded-full bg-orange-600/20 blur-3xl" />

              <span className="inline-block rounded-full bg-orange-500/20 px-3 py-1 text-xs font-bold text-orange-400 border border-orange-500/30">
                Manufacturing Facility • Greater Noida
              </span>

              <h3 className="mt-4 text-2xl font-bold">State-of-the-Art Production & Quality Assurance</h3>
              <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                From initial SolidWorks 3D CAD modeling to precision fabrication, wiring, and 48-hour continuous Factory Acceptance Testing (FAT), every Excelpack machine is built for maximum uptime.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-neutral-800 pt-6">
                <div>
                  <span className="text-3xl font-black text-orange-500">100%</span>
                  <p className="text-xs text-neutral-400 font-medium mt-1">FAT Tested Before Dispatch</p>
                </div>
                <div>
                  <span className="text-3xl font-black text-orange-500">12 Mo</span>
                  <p className="text-xs text-neutral-400 font-medium mt-1">Comprehensive Warranty</p>
                </div>
                <div>
                  <span className="text-3xl font-black text-orange-500">&lt; 4 Hrs</span>
                  <p className="text-xs text-neutral-400 font-medium mt-1">Sales Technical Response</p>
                </div>
                <div>
                  <span className="text-3xl font-black text-orange-500">SS304</span>
                  <p className="text-xs text-neutral-400 font-medium mt-1">Certified Contact Parts</p>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-neutral-800 p-4 text-xs text-neutral-300 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                  <span>Precision CNC Machined Parts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                  <span>EPLAN Certified Electrical Wiring Panels</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                  <span>Integrated Safety Light Curtains & Interlocks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
