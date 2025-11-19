import { Menu, Search, Upload, Plus, Bell, Settings, Grid2x2 } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
        <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200/80 bg-white text-slate-700 hover:bg-slate-50">
          <Menu size={18} />
        </button>
        <div className="font-semibold text-slate-900 tracking-tight">FluxDrive</div>
        <span className="hidden sm:inline-flex text-xs text-slate-500 px-2 py-1 rounded-md border border-slate-200/60 ml-2">SaaS File Manager</span>

        <div className="ml-auto hidden md:flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              placeholder="Search files, folders, tags..."
              className="h-9 w-[340px] rounded-lg border border-slate-200/80 bg-white pl-9 pr-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
            />
          </div>

          <button className="inline-flex h-9 items-center gap-2 rounded-lg border border-slate-200/80 bg-white px-3 text-slate-700 hover:bg-slate-50"><Plus size={16}/> New</button>
          <button className="inline-flex h-9 items-center gap-2 rounded-lg border border-slate-200/80 bg-white px-3 text-slate-700 hover:bg-slate-50"><Upload size={16}/> Upload</button>
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200/80 bg-white text-slate-700 hover:bg-slate-50"><Grid2x2 size={16}/></button>
          <button className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200/80 bg-white text-slate-700 hover:bg-slate-50"><Bell size={16}/><span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-rose-500"/></button>
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200/80 bg-white text-slate-700 hover:bg-slate-50"><Settings size={16}/></button>
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxhdmF0YXJ8ZW58MHwwfHx8MTc2MzUyMzI4N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="avatar" className="h-9 w-9 rounded-lg border border-slate-200 object-cover"/>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
