import { CarIcon } from "./Icons";

interface CarCardProps {
  name: string;
  brand: string;
  type: string;
  seats: number;
  bookText: string;
  index: number;
  isAr: boolean;
}

const carGradients = [
  "from-blue-500 via-indigo-600 to-slate-800",
  "from-amber-400 via-orange-500 to-red-600",
  "from-emerald-400 via-teal-600 to-slate-800",
  "from-fuchsia-500 via-purple-600 to-indigo-900",
  "from-rose-400 via-pink-600 to-purple-900",
  "from-cyan-400 via-sky-600 to-blue-900",
  "from-yellow-400 via-amber-600 to-stone-800",
  "from-lime-400 via-green-600 to-emerald-900",
  "from-violet-400 via-fuchsia-600 to-rose-900",
];

export function CarCard({ name, brand, type, seats, bookText, index, isAr }: CarCardProps) {
  const gradient = carGradients[index % carGradients.length];
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className={`relative h-52 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 30% 50%, white 0%, transparent 50%)" }} />
        <CarIcon className="w-32 h-32 text-white/90 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute top-3 right-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-dark dark:text-brand-light">
          2025
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{name}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{brand}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-3 mb-4 text-xs">
          <span className="px-3 py-1 rounded-full bg-brand/10 text-brand-dark dark:text-brand-light font-semibold">
            {type}
          </span>
          <span className="text-slate-600 dark:text-slate-400">
            {isAr ? `${seats} ركاب` : `${seats} seats`}
          </span>
        </div>
        <button className="w-full py-2.5 rounded-xl bg-slate-900 dark:bg-brand text-white dark:text-slate-900 font-bold text-sm hover:bg-brand dark:hover:bg-brand-light transition-colors">
          {bookText}
        </button>
      </div>
    </div>
  );
}
