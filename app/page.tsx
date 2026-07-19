export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-[#ededed]">

      {/* --- HERO SECTION (A Site) --- */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-24">
        <div className="max-w-4xl w-full space-y-6">
          <p className="text-[#007acc] font-mono text-sm md:text-base tracking-wide">
            &gt; System initialized.
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Bruno Costa.
          </h1>

          <h2 className="text-3xl md:text-5xl text-gray-400 font-bold tracking-tight">
            I build high-performance digital architecture.
          </h2>

          <p className="text-gray-500 text-lg md:text-xl max-w-2xl pt-4 leading-relaxed">
            Senior Software Engineer specializing in scalable full-stack applications, modular programming, and optimizing backend systems.
          </p>

          <div className="flex gap-4 pt-8">
            <a href="#projects" className="bg-[#ededed] text-[#0a0a0a] px-6 py-3 rounded font-semibold hover:bg-white transition-colors duration-200">
              Deployments
            </a>
            <a href="https://github.com/bk2cbruno" target="_blank" rel="noopener noreferrer" className="border border-gray-700 px-6 py-3 rounded font-semibold hover:border-gray-400 transition-colors duration-200">
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION (B Site) --- */}
      <section id="projects" className="min-h-screen px-8 md:px-24 py-20 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 border-b border-gray-800 pb-4">
            Featured Architecture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Project Card: PC Shutdown Scheduler */}
            <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-6 hover:border-[#007acc] transition-colors duration-300 flex flex-col justify-between group">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#007acc] transition-colors">
                  PC Shutdown Scheduler
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  A lightweight, cross-platform automated system control utility. Engineered with modular execution flows and automated deployment capabilities to generate standalone binaries.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-mono bg-[#1a1a1a] text-gray-300 px-2 py-1 rounded">Python</span>
                  <span className="text-xs font-mono bg-[#1a1a1a] text-gray-300 px-2 py-1 rounded">Tkinter</span>
                  <span className="text-xs font-mono bg-[#1a1a1a] text-gray-300 px-2 py-1 rounded">PyInstaller</span>
                </div>
              </div>
              <a href="https://github.com/bk2cbruno/pc-shutdown-scheduler" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#007acc] hover:underline">
                View Repository &rarr;
              </a>
            </div>

            {/* Project Card: Enterprise SaaS Dashboard */}
            <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-6 hover:border-[#007acc] transition-colors duration-300 flex flex-col justify-between group">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#007acc] transition-colors">
                  Enterprise Analytics OS
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  A high-performance B2B SaaS dashboard featuring real-time data visualization, modular component architecture, and responsive CSS Grid layouts.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-mono bg-[#1a1a1a] text-gray-300 px-2 py-1 rounded">Next.js 15</span>
                  <span className="text-xs font-mono bg-[#1a1a1a] text-gray-300 px-2 py-1 rounded">Tailwind CSS</span>
                  <span className="text-xs font-mono bg-[#1a1a1a] text-gray-300 px-2 py-1 rounded">Recharts</span>
                </div>
              </div>
              <a href="https://enterprise-saas-dashboard-six.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#007acc] hover:underline">
                View Live Deployment &rarr;
              </a>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}