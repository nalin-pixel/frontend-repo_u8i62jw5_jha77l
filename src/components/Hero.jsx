import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[78vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/30 backdrop-blur px-3 py-1 pointer-events-none">
              <span className="h-2 w-2 rounded-full bg-rose-500" />
              <span className="text-xs font-medium text-slate-800">Interactive cover</span>
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
              Manage files at enterprise scale with a calm, minimalist UI
            </h1>
            <p className="mt-4 text-slate-700 text-lg">
              A modern workspace for browsing, tagging, previewing and collaborating on files. Clean visuals, fast interactions.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#app" className="inline-flex h-10 items-center justify-center rounded-lg bg-slate-900 px-4 text-white hover:bg-slate-800 transition">Open Workspace</a>
              <button className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-300 bg-white px-4 text-slate-900 hover:bg-slate-50 transition">Request Demo</button>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent"/>
    </section>
  );
}

export default Hero;
