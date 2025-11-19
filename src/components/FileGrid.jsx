import { FileText, ImageIcon, Video, Music, MoreVertical, Star, Link2 } from "lucide-react";

const files = [
  { id: 1, name: 'Quarterly_Report_Q3.pdf', type: 'pdf', size: '2.3 MB', modified: '2h ago' },
  { id: 2, name: 'Brand_Guidelines.v2.fig', type: 'fig', size: '48 MB', modified: '1d ago' },
  { id: 3, name: 'Website_Header.png', type: 'image', size: '1.2 MB', modified: '3d ago' },
  { id: 4, name: 'Team_Standup_Notes.md', type: 'doc', size: '86 KB', modified: '3d ago' },
  { id: 5, name: 'Product_Demo.mp4', type: 'video', size: '120 MB', modified: '1w ago' },
  { id: 6, name: 'Podcast_Intro.wav', type: 'audio', size: '28 MB', modified: '2w ago' },
];

const badgeByType = (type) => {
  const map = {
    pdf: { label: 'PDF', color: 'bg-rose-100 text-rose-700 border-rose-200' },
    fig: { label: 'FIGMA', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
    image: { label: 'IMG', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
    doc: { label: 'DOC', color: 'bg-amber-100 text-amber-700 border-amber-200' },
    video: { label: 'MP4', color: 'bg-blue-100 text-blue-700 border-blue-200' },
    audio: { label: 'WAV', color: 'bg-purple-100 text-purple-700 border-purple-200' },
  };
  return map[type] || { label: 'FILE', color: 'bg-slate-100 text-slate-700 border-slate-200' };
};

const IconByType = ({ type }) => {
  switch (type) {
    case 'pdf':
    case 'doc':
      return <FileText className="text-slate-400" size={16} />;
    case 'image':
      return <ImageIcon className="text-slate-400" size={16} />;
    case 'video':
      return <Video className="text-slate-400" size={16} />;
    case 'audio':
      return <Music className="text-slate-400" size={16} />;
    default:
      return <FileText className="text-slate-400" size={16} />;
  }
};

function FileCard({ file }) {
  const badge = badgeByType(file.type);
  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
      <div className="absolute right-2 top-2 z-10 inline-flex items-center gap-1">
        <button className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-slate-200/80 bg-white text-slate-700 hover:bg-slate-50"><Star size={14}/></button>
        <button className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-slate-200/80 bg-white text-slate-700 hover:bg-slate-50"><Link2 size={14}/></button>
        <button className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-slate-200/80 bg-white text-slate-700 hover:bg-slate-50"><MoreVertical size={14}/></button>
      </div>
      <div className="aspect-video w-full bg-slate-100"/>
      <div className="p-4">
        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-semibold ${badge.color}`}>
            <IconByType type={file.type} /> {badge.label}
          </span>
          <div className="text-xs text-slate-400">{file.size} • {file.modified}</div>
        </div>
        <div className="mt-2 text-sm font-medium text-slate-900 truncate" title={file.name}>{file.name}</div>
      </div>
    </div>
  );
}

function FileGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {files.map(f => <FileCard key={f.id} file={f} />)}
    </div>
  );
}

export default FileGrid;
