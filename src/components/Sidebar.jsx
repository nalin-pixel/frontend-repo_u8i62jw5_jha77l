import { Folder, Star, Clock, Trash2, Tag, Share2, Layers, HardDrive, Cloud, ChevronRight } from "lucide-react";

const Item = ({ icon: Icon, label, count, active=false }) => (
  <button className={`group w-full flex items-center justify-between rounded-lg px-3 py-2 text-sm transition ${active ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'}`}>
    <span className="inline-flex items-center gap-2">
      <Icon className={active ? 'text-white' : 'text-slate-500 group-hover:text-slate-700'} size={16}/>
      {label}
    </span>
    <span className={`text-xs ${active ? 'text-white/80' : 'text-slate-400 group-hover:text-slate-600'}`}>{count}</span>
  </button>
);

function Sidebar() {
  return (
    <aside className="hidden lg:block w-64 shrink-0 border-r border-slate-200 bg-white/70 backdrop-blur">
      <div className="p-4">
        <div className="mb-4">
          <div className="text-xs font-medium text-slate-500 mb-2">Workspace</div>
          <div className="space-y-1">
            <Item icon={Folder} label="All files" count={240} active />
            <Item icon={Star} label="Favorites" count={18} />
            <Item icon={Clock} label="Recents" count={42} />
            <Item icon={Share2} label="Shared" count={11} />
            <Item icon={Layers} label="Projects" count={8} />
          </div>
        </div>

        <div className="mb-4">
          <div className="text-xs font-medium text-slate-500 mb-2">Storage</div>
          <div className="space-y-1">
            <Item icon={HardDrive} label="Local" count="128 GB" />
            <Item icon={Cloud} label="Cloud" count="2.3 TB" />
            <Item icon={Trash2} label="Trash" count={6} />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs font-medium text-slate-500">Tags</div>
            <button className="text-xs text-slate-500 hover:text-slate-700">Manage</button>
          </div>
          <div className="space-y-1">
            {['Design','Docs','Media','Legal','Finance'].map(t => (
              <button key={t} className="group w-full flex items-center justify-between rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">
                <span className="inline-flex items-center gap-2"><Tag size={16} className="text-rose-500"/> {t}</span>
                <ChevronRight size={14} className="text-slate-400 group-hover:text-slate-600"/>
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
