import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const IMAGES = {
  hero: "https://cdn.poehali.dev/projects/e3c7f4f4-0402-41ca-9c21-ef81dd142f5e/files/4a63d3b8-428d-4f64-9d9c-8622c4d2b798.jpg",
  interior: "https://cdn.poehali.dev/projects/e3c7f4f4-0402-41ca-9c21-ef81dd142f5e/files/6efa1c9a-5cb8-4c23-b3c2-118a6064e91f.jpg",
  pelmeni: "https://cdn.poehali.dev/projects/e3c7f4f4-0402-41ca-9c21-ef81dd142f5e/files/744ce10d-4681-4a44-88fc-4dc6a96315c9.jpg",
  piroshki: "https://cdn.poehali.dev/projects/e3c7f4f4-0402-41ca-9c21-ef81dd142f5e/files/dfd2f9eb-27ca-4e16-bbba-6cc308bb513a.jpg",
  banquet: "https://cdn.poehali.dev/projects/e3c7f4f4-0402-41ca-9c21-ef81dd142f5e/files/f8ef1065-81f2-4c1c-a0b0-6c2c81c14bf2.jpg",
};

const navLinks = [
  { label: "Главная", href: "#hero" },
  { label: "Меню", href: "#menu" },
  { label: "Банкеты", href: "#banquet" },
  { label: "О нас", href: "#about" },
  { label: "Галерея", href: "#gallery" },
  { label: "Контакты", href: "#contacts" },
];

const menuDishes = [
  {
    name: 'Борщ «Богатырский»',
    desc: "С пампушками и чесноком. Томлёный по старинному рецепту",
    price: "280 ₽",
    emoji: "🍲",
    image: IMAGES.hero,
    tag: "Хит",
  },
  {
    name: 'Пельмени «Как у бабушки»',
    desc: "Ручная лепка, говядина со свининой, домашний бульон",
    price: "320 ₽",
    emoji: "🥟",
    image: IMAGES.pelmeni,
    tag: "Любимое",
  },
  {
    name: 'Пирожок «От Лисы ушёл»',
    desc: "С капустой и яйцом, румяный, из дрожжевого теста",
    price: "85 ₽",
    emoji: "🥧",
    image: IMAGES.piroshki,
    tag: "Выпечка",
  },
  {
    name: 'Уха «По-тростянски»',
    desc: "Из свежей речной рыбы, с зеленью и ржаным хлебом",
    price: "260 ₽",
    emoji: "🐟",
    image: IMAGES.banquet,
    tag: "Новинка",
  },
];

const menuCategories = [
  { icon: "🍖", label: "Горячие блюда" },
  { icon: "🍜", label: "Супы" },
  { icon: "🥗", label: "Салаты и закуски" },
  { icon: "🥐", label: "Домашняя выпечка" },
  { icon: "☕", label: "Напитки" },
];

const reviews = [
  {
    text: "Всегда заезжаем в «Колобок», когда бываем в Тростянке. Пельмени — просто сказка! Спасибо за гостеприимство!",
    author: "Семья Ивановых",
    stars: 5,
  },
  {
    text: "Отмечали юбилей мамы. Всё было на высшем уровне: вкусно, уютно, по-домашнему. Персонал очень внимательный. Рекомендую!",
    author: "Ольга П.",
    stars: 5,
  },
  {
    text: "Борщ как у мамы, пирожки нежнейшие — объедение! Атмосфера тёплая, душевная. Будем приезжать ещё!",
    author: "Николай и Татьяна",
    stars: 5,
  },
];

const galleryItems = [
  { src: IMAGES.interior, alt: "Интерьер кафе" },
  { src: IMAGES.hero, alt: "Борщ в глиняном горшочке" },
  { src: IMAGES.pelmeni, alt: "Пельмени ручной лепки" },
  { src: IMAGES.piroshki, alt: "Домашние пирожки" },
  { src: IMAGES.banquet, alt: "Банкетный зал" },
  { src: IMAGES.interior, alt: "Уютный уголок кафе" },
];

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    document
      .querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [formSent, setFormSent] = useState(false);

  useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF8F0", color: "#2C1A0E" }}>

      {/* ===== HEADER ===== */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(255,248,240,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #E8D5BC" : "none",
          boxShadow: scrolled ? "0 2px 20px rgba(139,69,19,0.1)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button onClick={() => handleNav("#hero")} className="flex items-center gap-3 group">
              <div
                className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xl md:text-2xl shadow-md transition-transform group-hover:scale-110"
                style={{ background: "linear-gradient(135deg, #D4A017, #C4843A)", border: "2px solid #8B4513" }}
              >
                🎭
              </div>
              <div className="text-left">
                <div
                  className="font-cormorant-sc font-bold text-base md:text-xl leading-tight"
                  style={{ color: scrolled ? "#8B4513" : "#FFF8F0" }}
                >
                  Кафе «Колобок»
                </div>
                <div
                  className="font-golos text-xs hidden sm:block leading-none"
                  style={{ color: scrolled ? "#C4843A" : "rgba(255,248,240,0.7)" }}
                >
                  Душевная кухня · Тростянка
                </div>
              </div>
            </button>

            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="font-golos font-medium text-sm transition-all duration-200 hover:scale-105 relative group"
                  style={{ color: scrolled ? "#5C3D2E" : "rgba(255,248,240,0.9)" }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full"
                    style={{ backgroundColor: "#C0392B" }}
                  />
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="tel:+79603561222"
                className="hidden md:flex items-center gap-1.5 font-golos font-medium text-sm"
                style={{ color: scrolled ? "#8B4513" : "rgba(255,248,240,0.9)" }}
              >
                <Icon name="Phone" size={14} />
                +7 (960) 356-12-22
              </a>
              <button
                onClick={() => handleNav("#contacts")}
                className="btn-red hidden md:block px-4 py-2 rounded-lg text-sm font-golos font-semibold"
              >
                Забронировать
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg"
                style={{ color: scrolled ? "#8B4513" : "#FFF8F0" }}
              >
                <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div
            className="lg:hidden py-4 px-4 border-t"
            style={{ backgroundColor: "rgba(255,248,240,0.98)", borderColor: "#E8D5BC" }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="block w-full text-left py-3 font-golos font-medium border-b"
                style={{ color: "#3E2009", borderColor: "#F0DFC8" }}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a href="tel:+79603561222" className="flex items-center gap-2 font-golos" style={{ color: "#8B4513" }}>
                <Icon name="Phone" size={16} />
                +7 (960) 356-12-22
              </a>
              <button
                onClick={() => handleNav("#contacts")}
                className="btn-red w-full py-2.5 rounded-lg font-golos font-semibold"
              >
                Забронировать столик
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ===== HERO ===== */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Борщ в глиняном горшочке"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(44,26,14,0.9) 0%, rgba(44,26,14,0.65) 55%, rgba(44,26,14,0.3) 100%)" }} />
          <div className="absolute inset-0 pattern-folk" />
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-center pointer-events-none">
          <div className="absolute w-72 h-72 xl:w-96 xl:h-96 rounded-full opacity-15" style={{ border: "60px solid #D4A017", right: "5%" }} />
          <div className="absolute w-48 h-48 rounded-full opacity-10" style={{ border: "30px solid #C0392B", right: "15%", top: "25%" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-32 md:py-40">
          <div className="max-w-2xl" style={{ animation: "fadeUp 0.9s ease-out both" }}>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-golos font-medium mb-6"
              style={{ backgroundColor: "rgba(212,160,23,0.2)", border: "1px solid rgba(212,160,23,0.4)", color: "#F0C040" }}
            >
              <span>✦</span>
              <span>Тростянка · Балашовский район · Саратовская область</span>
              <span>✦</span>
            </div>

            <h1
              className="font-cormorant font-bold leading-tight mb-6"
              style={{ color: "#FFF8F0", fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
            >
              Добро пожаловать в{" "}
              <em style={{ color: "#F0C040" }}>«Колобок»</em>
              {" "}— место, где живёт{" "}
              <span style={{ color: "#ECA87A" }}>вкус русской сказки!</span>
            </h1>

            <p
              className="font-golos text-base md:text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: "rgba(255,248,240,0.85)" }}
            >
              Мы готовим для вас с любовью по традиционным рецептам. Идеальное место
              для семейных обедов, тёплых встреч с друзьями и уютных праздников.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleNav("#menu")}
                className="btn-wood px-7 py-3 rounded-xl text-base"
              >
                🍽 Смотреть меню
              </button>
              <button
                onClick={() => handleNav("#contacts")}
                className="px-7 py-3 rounded-xl text-base font-cormorant-sc font-semibold transition-all duration-300 hover:translate-y-[-2px]"
                style={{
                  border: "2px solid rgba(255,248,240,0.5)",
                  color: "#FFF8F0",
                  backgroundColor: "rgba(255,248,240,0.08)",
                  letterSpacing: "0.05em"
                }}
              >
                📅 Забронировать столик
              </button>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { icon: "🕙", text: "Ежедневно 10:00–22:00" },
                { icon: "👨‍👩‍👧‍👦", text: "Зал на 30 человек" },
                { icon: "🏡", text: "Семейная кухня" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-golos"
                  style={{ backgroundColor: "rgba(255,248,240,0.1)", color: "rgba(255,248,240,0.8)" }}
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" style={{ animation: "bounce 2s infinite" }}>
          <Icon name="ChevronDown" size={28} style={{ color: "rgba(255,248,240,0.5)" }} />
        </div>
      </section>

      {/* ===== WOOD STRIP ===== */}
      <div className="wood-section py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {[
            "🌾 Местные продукты",
            "👩‍🍳 Семейные рецепты",
            "🏆 С 2015 года",
            "💛 Всегда свежее",
            "🎉 Банкеты и праздники",
          ].map((item) => (
            <span key={item} className="font-cormorant-sc text-sm font-medium tracking-widest" style={{ color: "#D4A017" }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ===== MENU ===== */}
      <section id="menu" className="py-20 md:py-28 pattern-folk">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 reveal">
            <p className="font-cormorant-sc text-sm tracking-widest mb-3" style={{ color: "#C0392B" }}>✦ НАШЕ ✦</p>
            <h2 className="font-cormorant font-bold mb-4" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#3E2009" }}>
              Меню
            </h2>
            <div className="gold-divider max-w-xs mx-auto mb-4">
              <span className="font-golos text-base" style={{ color: "#8B4513" }}>Всё готовится с душой</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {menuCategories.map((cat) => (
                <div
                  key={cat.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-golos font-medium cursor-pointer transition-all hover:scale-105"
                  style={{ backgroundColor: "#F5E6D3", color: "#5C3D2E", border: "1px solid #E8D5BC" }}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuDishes.map((dish, i) => (
              <div
                key={dish.name}
                className="dish-card reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div
                    className="absolute top-3 left-3 px-2 py-0.5 rounded text-xs font-golos font-bold"
                    style={{ backgroundColor: "#C0392B", color: "#FFF8F0" }}
                  >
                    {dish.tag}
                  </div>
                  <div
                    className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-lg"
                    style={{ backgroundColor: "rgba(255,248,240,0.9)" }}
                  >
                    {dish.emoji}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-cormorant font-bold text-lg mb-1" style={{ color: "#3E2009" }}>
                    {dish.name}
                  </h3>
                  <p className="font-golos text-sm mb-3 leading-relaxed" style={{ color: "#7A5C47" }}>
                    {dish.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-cormorant-sc font-bold text-xl" style={{ color: "#C0392B" }}>
                      {dish.price}
                    </span>
                    <button
                      className="px-3 py-1.5 rounded-lg text-xs font-golos font-medium transition-all hover:scale-105"
                      style={{ backgroundColor: "#F5E6D3", color: "#8B4513", border: "1px solid #E8D5BC" }}
                    >
                      Подробнее
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <button
              onClick={() => handleNav("#contacts")}
              className="btn-wood px-8 py-3.5 rounded-xl text-base"
            >
              📋 Смотреть всё меню
            </button>
          </div>
        </div>
      </section>

      {/* ===== BANQUET ===== */}
      <section id="banquet" className="py-20 md:py-28" style={{ backgroundColor: "#FFF8F0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-left">
              <p className="font-cormorant-sc text-sm tracking-widest mb-3" style={{ color: "#C0392B" }}>✦ ТОРЖЕСТВА ✦</p>
              <h2 className="font-cormorant font-bold mb-6" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#3E2009" }}>
                Отметим праздник<br />
                <em style={{ color: "#C4843A" }}>по-русски!</em>
              </h2>

              <div className="p-6 rounded-2xl mb-6" style={{ backgroundColor: "#F5E6D3", border: "1px solid #E8D5BC" }}>
                <p className="font-golos text-base leading-relaxed" style={{ color: "#5C3D2E" }}>
                  Проводим дни рождения, юбилеи, корпоративы и любые семейные
                  торжества. У нас есть уютный зал на{" "}
                  <strong style={{ color: "#8B4513" }}>30 человек</strong>, специальное
                  банкетное меню и душевная атмосфера. Позвоните нам, чтобы обсудить
                  детали вашего праздника!
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "🎂", title: "Дни рождения", desc: "Торт в подарок!" },
                  { icon: "🥂", title: "Юбилеи", desc: "Особое банкетное меню" },
                  { icon: "💼", title: "Корпоративы", desc: "Для коллектива" },
                  { icon: "👨‍👩‍👧", title: "Семейные встречи", desc: "Тепло и уют" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 p-3 rounded-xl"
                    style={{ backgroundColor: "#FFF8F0", border: "1px solid #E8D5BC" }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="font-golos font-semibold text-sm" style={{ color: "#3E2009" }}>{item.title}</div>
                      <div className="font-golos text-xs mt-0.5" style={{ color: "#8B6E5A" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleNav("#contacts")}
                className="btn-red px-7 py-3.5 rounded-xl text-base"
              >
                🎉 Узнать условия
              </button>
            </div>

            <div className="reveal-right">
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-3xl"
                  style={{ background: "linear-gradient(135deg, #D4A017, #C4843A)", opacity: 0.15 }}
                />
                <img
                  src={IMAGES.banquet}
                  alt="Банкетный зал"
                  className="relative w-full rounded-2xl object-cover shadow-2xl"
                  style={{ height: "420px", border: "3px solid #D4A017" }}
                />
                <div
                  className="absolute -bottom-4 -right-4 px-4 py-3 rounded-2xl shadow-lg text-center"
                  style={{ backgroundColor: "#C0392B", border: "2px solid #D4A017" }}
                >
                  <div className="font-cormorant-sc font-bold text-2xl" style={{ color: "#F0C040" }}>30</div>
                  <div className="font-golos text-xs" style={{ color: "#FFF8F0" }}>мест</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-20 md:py-28 pattern-folk">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-left order-2 lg:order-1">
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-3xl"
                  style={{ background: "linear-gradient(135deg, #8B4513, #C4843A)", opacity: 0.12 }}
                />
                <img
                  src={IMAGES.interior}
                  alt="Интерьер кафе"
                  className="relative w-full rounded-2xl object-cover shadow-2xl"
                  style={{ height: "400px", border: "3px solid #C4843A" }}
                />
                <div
                  className="absolute -top-5 -left-5 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg"
                  style={{ backgroundColor: "#FFF8F0", border: "3px solid #D4A017" }}
                >
                  🏡
                </div>
              </div>
            </div>

            <div className="reveal-right order-1 lg:order-2">
              <p className="font-cormorant-sc text-sm tracking-widest mb-3" style={{ color: "#C0392B" }}>✦ О НАС ✦</p>
              <h2 className="font-cormorant font-bold mb-6" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#3E2009" }}>
                Наша история
              </h2>
              <p className="font-golos text-base leading-relaxed mb-5" style={{ color: "#5C3D2E" }}>
                Кафе «Колобок» — это семейное дело, рождённое из любви к родной земле
                и русской кухне. Мы находимся в живописном селе{" "}
                <strong style={{ color: "#8B4513" }}>Тростянка</strong> и каждый день радуем
                наших гостей и жителей района вкусной и понятной едой.
              </p>
              <p className="font-golos text-base leading-relaxed mb-8" style={{ color: "#5C3D2E" }}>
                Мы используем <strong style={{ color: "#8B4513" }}>местные продукты</strong> и
                готовим так, чтобы каждый почувствовал себя как дома. Как у бабушки —
                с теплом, заботой и щедрой душой.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { num: "10+", label: "Лет радуем гостей" },
                  { num: "50+", label: "Блюд в меню" },
                  { num: "♾", label: "Тепла и любви" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-xl"
                    style={{ backgroundColor: "#F5E6D3", border: "1px solid #E8D5BC" }}
                  >
                    <div className="font-cormorant-sc font-bold text-2xl" style={{ color: "#8B4513" }}>{stat.num}</div>
                    <div className="font-golos text-xs mt-1" style={{ color: "#7A5C47" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section id="gallery" className="py-20 md:py-28" style={{ backgroundColor: "#FFF8F0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 reveal">
            <p className="font-cormorant-sc text-sm tracking-widest mb-3" style={{ color: "#C0392B" }}>✦ ГАЛЕРЕЯ ✦</p>
            <h2 className="font-cormorant font-bold" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#3E2009" }}>
              Загляните к нам
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className={`reveal overflow-hidden rounded-2xl group cursor-pointer ${i === 0 ? "col-span-2 md:col-span-1" : ""}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="relative overflow-hidden" style={{ height: "220px" }}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                    style={{ background: "linear-gradient(to top, rgba(44,26,14,0.7) 0%, transparent 60%)" }}
                  >
                    <span className="font-cormorant-sc text-sm font-medium" style={{ color: "#F0C040" }}>
                      {item.alt}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="py-20 md:py-28 wood-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 reveal">
            <p className="font-cormorant-sc text-sm tracking-widest mb-3" style={{ color: "#D4A017" }}>✦ ОТЗЫВЫ ✦</p>
            <h2 className="font-cormorant font-bold" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#FFF8F0" }}>
              Говорят, у нас душевно!
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="reveal p-6 rounded-2xl"
                style={{
                  backgroundColor: "rgba(255,248,240,0.08)",
                  border: "1px solid rgba(212,160,23,0.3)",
                  transitionDelay: `${i * 0.12}s`,
                }}
              >
                <div className="text-4xl mb-4 opacity-60" style={{ color: "#D4A017" }}>"</div>
                <div className="flex mb-3">
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <span key={j} style={{ color: "#F0C040" }}>★</span>
                  ))}
                </div>
                <p className="font-golos text-sm leading-relaxed mb-4" style={{ color: "rgba(255,248,240,0.85)" }}>
                  {review.text}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: "#D4A017", color: "#3E2009" }}
                  >
                    {review.author[0]}
                  </div>
                  <span className="font-cormorant-sc font-semibold text-sm" style={{ color: "#D4A017" }}>
                    — {review.author}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACTS ===== */}
      <section id="contacts" className="py-20 md:py-28 pattern-folk">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 reveal">
            <p className="font-cormorant-sc text-sm tracking-widest mb-3" style={{ color: "#C0392B" }}>✦ КОНТАКТЫ ✦</p>
            <h2 className="font-cormorant font-bold" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#3E2009" }}>
              Ждём в гости!
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="reveal-left space-y-5">
              {[
                {
                  icon: "MapPin" as const,
                  label: "Адрес",
                  value: "Саратовская область, Балашовский р-н, с. Тростянка, ул. 40 лет Победы, д. 36",
                  color: "#C0392B",
                },
                {
                  icon: "Phone" as const,
                  label: "Телефон",
                  value: "+7 (960) 356-12-22",
                  color: "#2C5F8A",
                },
                {
                  icon: "Clock" as const,
                  label: "Режим работы",
                  value: "Ежедневно с 10:00 до 22:00",
                  color: "#D4A017",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{ backgroundColor: "#F5E6D3", border: "1px solid #E8D5BC" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon name={item.icon} size={18} style={{ color: "#FFF8F0" }} />
                  </div>
                  <div>
                    <div className="font-golos font-semibold text-sm mb-0.5" style={{ color: "#8B4513" }}>{item.label}</div>
                    <div className="font-golos text-sm leading-relaxed" style={{ color: "#3E2009" }}>{item.value}</div>
                  </div>
                </div>
              ))}

              <div className="rounded-2xl overflow-hidden shadow-lg" style={{ border: "2px solid #E8D5BC" }}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=43.1604%2C51.5467&z=15&pt=43.1604%2C51.5467%2Cpm2rdl~Кафе+Колобок%2Cул.+40+лет+Победы+36"
                  width="100%"
                  height="240"
                  frameBorder="0"
                  title="Кафе Колобок на карте"
                  allowFullScreen
                  style={{ display: "block" }}
                />
              </div>
            </div>

            <div className="reveal-right">
              <div
                className="p-8 rounded-2xl"
                style={{ backgroundColor: "#FFF8F0", border: "2px solid #E8D5BC", boxShadow: "0 10px 40px rgba(139,69,19,0.1)" }}
              >
                <h3 className="font-cormorant font-bold text-2xl mb-2" style={{ color: "#3E2009" }}>
                  Написать нам
                </h3>
                <p className="font-golos text-sm mb-6" style={{ color: "#8B6E5A" }}>
                  Оставьте заявку на бронирование или задайте вопрос
                </p>

                {formSent ? (
                  <div className="text-center py-10 px-4 rounded-xl" style={{ backgroundColor: "#F5E6D3" }}>
                    <div className="text-5xl mb-4">🎉</div>
                    <h4 className="font-cormorant font-bold text-xl mb-2" style={{ color: "#3E2009" }}>
                      Сообщение отправлено!
                    </h4>
                    <p className="font-golos text-sm" style={{ color: "#8B6E5A" }}>
                      Мы перезвоним вам в ближайшее время.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { label: "Ваше имя", key: "name", type: "text", placeholder: "Иван Иванович" },
                      { label: "Телефон", key: "phone", type: "tel", placeholder: "+7 (___) ___-__-__" },
                    ].map((field) => (
                      <div key={field.key}>
                        <label className="block font-golos text-sm font-medium mb-1.5" style={{ color: "#5C3D2E" }}>
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          value={formData[field.key as keyof typeof formData]}
                          onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                          required
                          className="w-full px-4 py-3 rounded-xl font-golos text-sm outline-none transition-all"
                          style={{ backgroundColor: "#F5E6D3", border: "1.5px solid #E8D5BC", color: "#3E2009" }}
                          onFocus={(e) => (e.target.style.borderColor = "#C4843A")}
                          onBlur={(e) => (e.target.style.borderColor = "#E8D5BC")}
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block font-golos text-sm font-medium mb-1.5" style={{ color: "#5C3D2E" }}>
                        Ваше сообщение
                      </label>
                      <textarea
                        placeholder="Хочу забронировать столик на 4 человека на субботу..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl font-golos text-sm outline-none transition-all resize-none"
                        style={{ backgroundColor: "#F5E6D3", border: "1.5px solid #E8D5BC", color: "#3E2009" }}
                        onFocus={(e) => (e.target.style.borderColor = "#C4843A")}
                        onBlur={(e) => (e.target.style.borderColor = "#E8D5BC")}
                      />
                    </div>
                    <button type="submit" className="btn-wood w-full py-3.5 rounded-xl text-base">
                      📨 Отправить сообщение
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="wood-section py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                  style={{ background: "linear-gradient(135deg, #D4A017, #C4843A)", border: "2px solid rgba(212,160,23,0.5)" }}
                >
                  🎭
                </div>
                <div>
                  <div className="font-cormorant-sc font-bold text-lg" style={{ color: "#FFF8F0" }}>
                    Кафе «Колобок»
                  </div>
                  <div className="font-golos text-xs" style={{ color: "rgba(255,248,240,0.5)" }}>
                    Душевная кухня в сердце Тростянки
                  </div>
                </div>
              </div>
              <p className="font-golos text-sm leading-relaxed" style={{ color: "rgba(255,248,240,0.65)" }}>
                Семейное кафе с домашней русской кухней. Готовим с любовью по традиционным рецептам.
              </p>
            </div>

            <div>
              <h4 className="font-cormorant-sc font-semibold text-base mb-4" style={{ color: "#D4A017" }}>Контакты</h4>
              <div className="space-y-2.5">
                {[
                  { icon: "MapPin" as const, text: "с. Тростянка, ул. 40 лет Победы, д. 36" },
                  { icon: "Phone" as const, text: "+7 (960) 356-12-22", href: "tel:+79603561222" },
                  { icon: "Clock" as const, text: "Ежедневно 10:00 – 22:00" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-2 font-golos text-sm" style={{ color: "rgba(255,248,240,0.75)" }}>
                    <Icon name={item.icon} size={14} style={{ color: "#D4A017", marginTop: 2, flexShrink: 0 }} />
                    {item.href ? (
                      <a href={item.href} className="hover:text-white transition-colors">{item.text}</a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-cormorant-sc font-semibold text-base mb-4" style={{ color: "#D4A017" }}>Мы в соцсетях</h4>
              <div className="flex gap-3">
                {[
                  { label: "ВКонтакте", icon: "👥", color: "#4A76A8" },
                  { label: "Одноклассники", icon: "🎓", color: "#EE8208" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-golos font-medium transition-all hover:translate-y-[-2px]"
                    style={{ backgroundColor: social.color, color: "#FFF8F0" }}
                  >
                    <span>{social.icon}</span>
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
            style={{ borderColor: "rgba(212,160,23,0.2)" }}
          >
            <p className="font-golos text-xs" style={{ color: "rgba(255,248,240,0.4)" }}>
              © 2015–{new Date().getFullYear()} Кафе «Колобок». Все права защищены.
            </p>
            <p className="font-golos text-xs" style={{ color: "rgba(255,248,240,0.4)" }}>
              с. Тростянка · Балашовский район · Саратовская область
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-8px); }
        }
      `}</style>
    </div>
  );
}