import { Grid, List, SortAsc, SortDesc, Filter, LayoutGrid, UploadCloud, Download } from "lucide-react";

function Toolbar() {
  return (
    <div className="sticky top-16 z-30 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center gap-2">
        <div className="flex items-center gap-2">
          <button className="inline-flex h-9 items-center gap-2 rounded-lg border border-slate-200/80 bg-white px-3 text-slate-700 hover:bg-slate-50"><UploadCloud size={16}/> Upload</button>
          <button className="inline-flex h-9 items-center gap-2 rounded-lg border border-slate-200/80 bg-white px-3 text-slate-700 hover:bg-slate-50"><Download size={16}/> Download</button>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200/80 bg-white text-slate-700 hover:bg-slate-50" title="Grid"><LayoutGrid size={16}/></button>
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200/80 bg-white text-slate-700 hover:bg-slate-50" title="List"><List size={16}/></button>
          <div className="h-6 w-px bg-slate-200"/>
          <button className="inline-flex h-9 items-center gap-2 rounded-lg border border-slate-200/80 bg-white px-3 text-slate-700 hover:bg-slate-50"><SortAsc size={16}/> Sort</button>
          <button className="inline-flex h-9 items-center gap-2 rounded-lg border border-slate-200/80 bg-white px-3 text-slate-700 hover:bg-slate-50"><Filter size={16}/> Filter</button>
        </div>
      </div>
    </div>
  );
}

export default Toolbar;
