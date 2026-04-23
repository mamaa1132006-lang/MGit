import { useEffect, useState } from "react";
import { translations, type Lang } from "./i18n";
import { CarCard } from "./components/CarCard";
import { FAQ } from "./components/FAQ";
import {
  SunIcon, MoonIcon, GlobeIcon, MenuIcon, CloseIcon,
  CarIcon, StarIcon, WhatsAppIcon, PhoneIcon, MailIcon, PinIcon,
  ArrowIcon, ShieldIcon, ClockIcon, TagIcon,
} from "./components/Icons";

export default function App() {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang");
    return (saved === "en" || saved === "ar") ? saved : "ar";
  });
  const [dark, setDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [menuOpen, setMenuOpen] = useState(false);

  const t = translations[lang];
  const isAr = lang === "ar";
  const dir = isAr ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    localStorage.setItem("lang", lang);
  }, [lang, dir]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const navItems = [
    { id: "home", label: t.nav.home },
    { id: "routes", label: t.nav.routes },
    { id: "fleet", label: t.nav.fleet },
    { id: "faq", label: t.nav.faq },
    { id: "reviews", label: t.nav.reviews },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl gold-gradient flex items-center justify-center shadow-lg shadow-brand/30">
                  <CarIcon className="w-7 h-7 text-slate-900" />
                </div>
              </div>
              <div className="leading-tight">
                <div className="font-black text-lg md:text-xl text-slate-900 dark:text-white">{t.brand}</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">{t.tagline}</div>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-dark dark:hover:text-brand-light hover:bg-brand/5 transition"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLang(isAr ? "en" : "ar")}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                aria-label="Toggle language"
              >
                <GlobeIcon className="w-4 h-4" />
                <span>{isAr ? "EN" : "AR"}</span>
              </button>
              <button
                onClick={() => setDark(!dark)}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                aria-label="Toggle theme"
              >
                {dark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
              </button>
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl gold-gradient text-slate-900 font-bold text-sm shadow-lg shadow-brand/30 hover:shadow-brand/50 transition"
              >
                {t.hero.bookNow}
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200"
                aria-label="Menu"
              >
                {menuOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="lg:hidden pb-4 fade-up">
              <nav className="flex flex-col gap-1">
                {navItems.map(item => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-brand/10 transition"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden hero-gradient">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, #d4a017 0%, transparent 40%),
                              radial-gradient(circle at 80% 70%, #f5c842 0%, transparent 40%)`
          }}
        />
        <div className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(currentColor 1px, transparent 1px),
                              linear-gradient(90deg, currentColor 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            color: "white"
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {t.hero.badge}
              </div>
              <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                {t.hero.title}
                <span className="block mt-2 bg-gradient-to-r from-brand-light via-brand to-brand-light bg-clip-text text-transparent">
                  {t.brand}
                </span>
              </h1>
              <p className="text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl gold-gradient text-slate-900 font-bold shadow-2xl shadow-brand/40 hover:scale-105 transition-transform"
                >
                  {t.hero.bookNow}
                  <ArrowIcon className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a
                  href="https://wa.me/966500000000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-bold shadow-2xl shadow-green-500/30 transition"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  {t.hero.whatsapp}
                </a>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                {[
                  { n: "10K+", l: isAr ? "عميل سعيد" : "Happy clients" },
                  { n: "50+", l: isAr ? "سيارة حديثة" : "Modern cars" },
                  { n: "24/7", l: isAr ? "خدمة عملاء" : "Support" },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl md:text-3xl font-black text-brand-light">{s.n}</div>
                    <div className="text-xs text-white/60 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-square">
                <div className="absolute inset-0 rounded-[3rem] gold-gradient opacity-20 blur-3xl" />
                <div className="absolute inset-8 rounded-[3rem] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center float-anim">
                  <CarIcon className="w-64 h-64 text-brand-light drop-shadow-2xl" />
                </div>
                {/* Floating badges */}
                <div className="absolute top-10 -start-4 bg-white dark:bg-slate-900 rounded-2xl p-3 shadow-2xl flex items-center gap-2 float-anim" style={{ animationDelay: "1s" }}>
                  <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                    <ShieldIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">{isAr ? "نقل آمن" : "Safe Travel"}</div>
                    <div className="text-[10px] text-slate-500">100%</div>
                  </div>
                </div>
                <div className="absolute bottom-10 -end-4 bg-white dark:bg-slate-900 rounded-2xl p-3 shadow-2xl flex items-center gap-2 float-anim" style={{ animationDelay: "2s" }}>
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600">
                    <StarIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">4.9/5</div>
                    <div className="text-[10px] text-slate-500">{isAr ? "تقييم" : "Rating"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Routes */}
      <section id="routes" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-brand-dark dark:text-brand-light font-bold mb-3 tracking-wider text-sm">
              {isAr ? "•  وجهاتنا  •" : "•  OUR ROUTES  •"}
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
              {t.routes.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-3">{t.routes.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.routes.list.map((route, i) => (
              <a
                key={i}
                href="#contact"
                className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 hover:border-brand transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="absolute -top-10 -end-10 w-32 h-32 rounded-full bg-brand/10 group-hover:bg-brand/20 transition" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center mb-4 shadow-lg shadow-brand/20">
                    <PinIcon className="w-7 h-7 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{route}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {isAr ? "متوفر الآن" : "Available now"}
                    </span>
                    <ArrowIcon className={`w-5 h-5 text-brand-dark dark:text-brand-light ${isAr ? "rotate-180" : ""} group-hover:translate-x-1 transition`} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
              {t.features.title}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.features.items.map((f, i) => {
              const icons = [ShieldIcon, CarIcon, TagIcon, ClockIcon];
              const Icon = icons[i];
              return (
                <div key={i} className="group relative p-6 rounded-3xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 hover:border-brand transition-all duration-300 hover:shadow-xl">
                  <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-slate-900" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section id="fleet" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-brand-dark dark:text-brand-light font-bold mb-3 tracking-wider text-sm">
              {isAr ? "•  أسطولنا  •" : "•  OUR FLEET  •"}
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
              {t.fleet.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-3">{t.fleet.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.fleet.cars.map((car, i) => (
              <CarCard
                key={i}
                index={i}
                isAr={isAr}
                bookText={t.fleet.bookCar}
                {...car}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28 bg-white dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-brand-dark dark:text-brand-light font-bold mb-3 tracking-wider text-sm">
              FAQ
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
              {t.faq.title}
            </h2>
          </div>
          <FAQ items={t.faq.items} />
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-6 h-6 text-brand" />
              ))}
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
              {t.reviews.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.reviews.list.map((r, i) => {
              const colors = ["from-blue-500 to-purple-600", "from-pink-500 to-rose-600", "from-emerald-500 to-teal-600"];
              const initial = r.name.charAt(isAr ? 3 : 0).toUpperCase();
              return (
                <div key={i} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <StarIcon key={j} className="w-4 h-4 text-brand" />
                    ))}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 min-h-[120px]">
                    "{r.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors[i]} text-white font-black flex items-center justify-center text-lg shadow-lg`}>
                      {initial}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white text-sm">{r.name}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">{r.city} • {r.date}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Promo */}
      <section id="contact" className="py-20 md:py-28 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-30"
          style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #d4a017 0%, transparent 60%)" }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/20 border border-brand/40 text-brand-light font-bold text-sm mb-6">
            <TagIcon className="w-4 h-4" />
            {isAr ? "عرض حصري" : "Exclusive Offer"}
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            {t.promo.title}
          </h2>
          <p className="text-white/80 text-lg mb-8">{t.promo.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl gold-gradient text-slate-900 font-black text-lg shadow-2xl shadow-brand/40 hover:scale-105 transition-transform"
            >
              {t.promo.btn}
              <ArrowIcon className={`w-5 h-5 ${isAr ? "rotate-180" : ""}`} />
            </a>
            <a
              href="tel:+966500000000"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur text-white font-bold text-lg hover:bg-white/20 transition"
            >
              <PhoneIcon className="w-5 h-5" />
              {t.footer.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl gold-gradient flex items-center justify-center shadow-lg shadow-brand/30">
                  <CarIcon className="w-7 h-7 text-slate-900" />
                </div>
                <div className="font-black text-xl text-white">{t.brand}</div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">{t.footer.about}</p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">{t.footer.links}</h4>
              <ul className="space-y-2 text-sm">
                {navItems.map(item => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="hover:text-brand-light transition">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">{t.footer.contact}</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <PhoneIcon className="w-4 h-4 text-brand" />
                  <a href={`tel:${t.footer.phone}`}>{t.footer.phone}</a>
                </li>
                <li className="flex items-center gap-3">
                  <MailIcon className="w-4 h-4 text-brand" />
                  <a href={`mailto:${t.footer.email}`}>{t.footer.email}</a>
                </li>
                <li className="flex items-center gap-3">
                  <PinIcon className="w-4 h-4 text-brand" />
                  <span>{t.footer.address}</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">{t.footer.followUs}</h4>
              <div className="flex gap-3">
                {["IG", "TW", "FB", "TT"].map(s => (
                  <a key={s} href="#" className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-brand hover:text-slate-900 flex items-center justify-center font-bold text-xs transition">
                    {s}
                  </a>
                ))}
                <a href="https://wa.me/966500000000" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-green-500 hover:bg-green-400 text-white flex items-center justify-center transition">
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            {t.footer.rights}
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/966500000000"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 end-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-2xl shadow-green-500/40 hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
      </a>
    </div>
  );
}
