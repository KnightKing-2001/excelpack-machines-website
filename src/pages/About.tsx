import { ShieldCheck, Award, Factory, Target, Compass, CheckCircle2, MapPin } from "lucide-react";

export default function AboutPage() {
  const coreValues = [
    { title: "Engineering Excellence", desc: "Uncompromising precision in component manufacturing and servo drive integration." },
    { title: "Customer Commitment", desc: "Building long-term partnerships through prompt after-sales support and AMC services." },
    { title: "Continuous Innovation", desc: "Adopting Industry 4.0 IoT remote diagnostics and sustainable recyclable film sealing." },
    { title: "Quality Assurance", desc: "Rigorous 48-hour continuous Factory Acceptance Testing (FAT) before machine dispatch." },
  ];

  return (
    <div className="py-12 bg-neutral-50 min-h-screen">
      <div className="mx-auto max-w-screen-2xl px-8">
        {/* Banner Header */}
        <div className="rounded-2xl bg-neutral-900 p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs font-bold text-orange-400 border border-orange-500/30 uppercase tracking-widest">
              Company Profile
            </span>
            <h1 className="mt-3 text-3xl font-black text-white md:text-5xl">
              About ExcelPack Machines
            </h1>
            <p className="mt-3 text-neutral-300 text-sm md:text-base leading-relaxed">
              Excelpack Machines Private Limited is a premier Indian packaging machinery manufacturer specializing in high-speed Vertical Form Fill Seal (VFFS) systems, multihead weighing lines, and custom automation.
            </p>
          </div>
        </div>

        {/* Company Overview & Greater Noida Facility */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2 items-center">
          <div className="rounded-2xl bg-white p-8 border border-neutral-200 shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-neutral-900">Pioneering Industrial Packaging Automation</h2>
            <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
              Founded with a vision to deliver world-class packaging automation, Excelpack Machines Private Limited combines mechanical engineering mastery, electronic servo motion control, and modern fabrication techniques.
            </p>
            <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
              Operating from our modern manufacturing plant in Greater Noida, Uttar Pradesh, our team of experienced design engineers, panel wiremen, and commissioning technicians deliver reliable equipment to top food, pharma, FMCG, and agrochemical producers worldwide.
            </p>

            <div className="pt-4 border-t border-neutral-100 grid grid-cols-2 gap-4 text-xs font-semibold">
              <div className="flex items-center gap-2 text-neutral-800">
                <MapPin className="h-4 w-4 text-orange-600 shrink-0" />
                <span>Greater Noida, U.P., India</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-800">
                <Award className="h-4 w-4 text-orange-600 shrink-0" />
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-800">
                <Factory className="h-4 w-4 text-orange-600 shrink-0" />
                <span>In-House CNC Fabrication</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-800">
                <ShieldCheck className="h-4 w-4 text-orange-600 shrink-0" />
                <span>SS304 Food Grade Certified</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-neutral-900 text-white p-8 shadow-xl relative overflow-hidden">
            <h3 className="text-xl font-bold text-white">Manufacturing Process & Quality Assurance</h3>
            <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
              Every Excelpack packaging machine progresses through six stringent quality stages:
            </p>

            <div className="mt-6 space-y-3 text-xs">
              <div className="flex items-start gap-3 bg-neutral-800 p-3 rounded-lg border border-neutral-700">
                <span className="font-extrabold text-orange-500 text-sm">01</span>
                <div>
                  <h4 className="font-bold text-white">SolidWorks 3D CAD Engineering</h4>
                  <p className="text-neutral-400 text-[11px]">Precision mechanical design & stress analysis before metal cutting.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-neutral-800 p-3 rounded-lg border border-neutral-700">
                <span className="font-extrabold text-orange-500 text-sm">02</span>
                <div>
                  <h4 className="font-bold text-white">CNC Laser Cutting & SS Fabrication</h4>
                  <p className="text-neutral-400 text-[11px]">Micron-accurate laser profiling and sanitary SS304 welding.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-neutral-800 p-3 rounded-lg border border-neutral-700">
                <span className="font-extrabold text-orange-500 text-sm">03</span>
                <div>
                  <h4 className="font-bold text-white">EPLAN Certified Panel Assembly</h4>
                  <p className="text-neutral-400 text-[11px]">Siemens & Delta PLC wiring, servo drives, and touchscreens.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-neutral-800 p-3 rounded-lg border border-neutral-700">
                <span className="font-extrabold text-orange-500 text-sm">04</span>
                <div>
                  <h4 className="font-bold text-white">Factory Acceptance Testing (FAT)</h4>
                  <p className="text-neutral-400 text-[11px]">48-hour continuous trial run with client sample film & product.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">Our Vision</h3>
            </div>
            <p className="mt-4 text-xs md:text-sm text-neutral-600 leading-relaxed">
              To become a globally recognized manufacturer of intelligent, high-speed packaging machinery by consistently delivering reliable automation, zero-waste precision, and exceptional after-sales engineering support.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">Our Mission</h3>
            </div>
            <ul className="mt-4 space-y-2 text-xs md:text-sm text-neutral-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                <span>Deliver precision-engineered VFFS machines with zero film wastage.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                <span>Build lasting client partnerships through responsive after-sales AMC service.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                <span>Pioneer Industry 4.0 IoT connected machinery for smart factory operations.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-12 rounded-2xl bg-white p-8 border border-neutral-200 shadow-sm">
          <h2 className="text-xl font-bold text-neutral-900">Our Core Pillars & Values</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((val, idx) => (
              <div key={idx} className="rounded-xl bg-neutral-50 p-5 border border-neutral-200">
                <h4 className="text-sm font-bold text-neutral-900">{val.title}</h4>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
