import Image from "next/image";
import { Nav } from "@/components/nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Full screen background image */}
      <Image
        src="/bg.webp"
        alt="Stellar Dashboard"
        fill
        className="object-cover md:object-center object-[25%_center]"
        priority
      />

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/75 to-white/45 dark:from-black/75 dark:to-black/45 transition-colors duration-300" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Nav />

        <main className="container mx-auto px-6 flex-1 flex items-center">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 md:mb-8
              text-slate-900 dark:text-white
              drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]">
              Navigate Your Success
            </h1>
            <p className="text-lg md:text-xl mb-8 md:mb-10 font-medium
              text-slate-800 dark:text-slate-200 leading-relaxed
              drop-shadow-[0_1px_4px_rgba(255,255,255,0.2)]
              max-w-2xl mx-auto">
              Transform your ideas into reality with our innovative digital solutions.
              Empowering visionaries to reach new heights.
            </p>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500
              text-white rounded-sm font-semibold tracking-wider text-lg
              hover:from-indigo-500 hover:to-indigo-400
              transform hover:-translate-y-0.5 transition-all duration-200
              shadow-[0_4px_20px_-4px_rgba(79,70,229,0.5)]
              hover:shadow-[0_6px_24px_-3px_rgba(79,70,229,0.6)]
              before:absolute before:inset-0 before:rounded-xl before:bg-white/10 before:opacity-0
              hover:before:opacity-100 before:transition-opacity
              overflow-hidden">
              <span className="relative inline-flex items-center gap-2">
                Begin Your Journey
                <svg className="w-5 h-5 transform translate-x-0 group-hover:translate-x-1 transition-transform"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
