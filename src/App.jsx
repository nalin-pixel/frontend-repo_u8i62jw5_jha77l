import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import Toolbar from './components/Toolbar';
import FileGrid from './components/FileGrid';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />

      <main id="app" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-6">
            <Sidebar />
            <section className="flex-1 min-w-0">
              <Toolbar />

              <div className="py-6">
                <div className="mb-4">
                  <h2 className="text-lg font-semibold">All files</h2>
                  <p className="text-sm text-slate-500">A calm, minimal workspace for your content</p>
                </div>
                <FileGrid />
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-sm text-slate-500">
          <span>© 2025 FluxDrive</span>
          <div className="inline-flex items-center gap-4">
            <a className="hover:text-slate-800" href="#">Status</a>
            <a className="hover:text-slate-800" href="#">Security</a>
            <a className="hover:text-slate-800" href="#">Changelog</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
