import { ArrowRight, Terminal, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-30 select-none">
        <div className="absolute top-[-10%] left-[20%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-500 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute top-[-5%] right-[20%] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-cyan-400 rounded-full blur-[80px] sm:blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top AI Badge */}
        <div className="inline-flex items-center space-x-2 bg-slate-900/80 backdrop-blur-sm border border-slate-800 px-3 py-1.5 rounded-full mb-6 sm:mb-8 hover:border-blue-500/30 transition-colors duration-300">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span className="text-xs sm:text-sm text-gray-300 font-medium">
            Introducing CodeFlow AI v2.5
          </span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>
        </div>

        {/* Main Header Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 sm:mb-8 leading-[1.15]">
          <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
            Ship Code Faster With
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Intelligent Automation
          </span>
        </h1>

        {/* Hero Paragraph */}
        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed">
          CodeFlow brings context-aware AI code suggestions, automatic unit testing, 
          and production error monitoring directly into your terminal workflow. 
          Stop debugging, start creating.
        </p>

        {/* Action Buttons Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm sm:max-w-none mx-auto">
          {/* Primary CTA button */}
          <a
            href="#pricing"
            className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2 
            bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 
            text-white font-medium px-6 py-3.5 rounded-xl shadow-lg shadow-blue-500/20 
            hover:shadow-cyan-500/20 transition-all duration-200"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary CTA button */}
          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 
            bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 
            text-gray-200 font-medium px-6 py-3.5 rounded-xl transition-all duration-200"
          >
            <Code2 className="w-5 h-5 text-gray-400" />
            <span>Explore Open Source</span>
          </a>
        </div>
      </div>
    </section>
  );
}
