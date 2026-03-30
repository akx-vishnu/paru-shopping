import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { ChevronRight, MessageSquare, Truck, Wallet, RotateCcw, ShoppingCart } from "lucide-react";
import products from "../data/products.json";
import { useCart } from "../context/CartContext";

/* ══════════════════════════════════════════════════
   HERO SLIDER  — 3 slides (Fruits / Vegetables / Groceries)
   Bright, clean, NO dark overlay — matches reference image
══════════════════════════════════════════════════ */
function HeroSlider() {
  const slides = [
    {
      label: "🍎 Fresh Fruits",
      headline: "Juicy Fruits,",
      sub: "Farm-Fresh Daily",
      desc: "Handpicked mangoes, berries, grapes & more — straight from the farm to your door.",
      cta: "Shop Now",
      bg: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 60%, #fde68a 100%)",
      accent: "#d97706",
      image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=900&q=85",
    },
    {
      label: "🥦 Farm Vegetables",
      headline: "Crisp Veggies,",
      sub: "Delivered Fresh",
      desc: "Crisp greens, colourful veggies — sourced fresh every morning for your family's health.",
      cta: "Shop Now",
      bg: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 60%, #bbf7d0 100%)",
      accent: "#16a34a",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85",
    },
    {
      label: "🛒 Daily Groceries",
      headline: "Fresh Groceries,",
      sub: "Delivered Daily",
      desc: "Everyday essentials — oils, dairy, spices & pantry staples — right to your doorstep.",
      cta: "Shop Now",
      bg: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 60%, #f1f5f9 100%)",
      accent: "#dca622",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const goTo = useCallback((idx) => {
    setCurrent(idx);
    setAnimKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      goTo((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(t);
  }, [goTo, slides.length]);

  const s = slides[current];

  return (
    <section
      className="mx-3 sm:mx-4 mt-4 rounded-3xl overflow-hidden shadow-2xl relative flex"
      style={{ minHeight: 300, background: s.bg, transition: "background 0.7s ease" }}
    >
      {/* Right food image */}
      <img
        key={`img-${current}`}
        src={s.image}
        alt={s.label}
        className="absolute right-0 top-0 h-full object-cover object-left"
        style={{
          width: "52%",
          animation: "heroImgIn 0.65s cubic-bezier(.22,1,.36,1) forwards",
          maskImage: "linear-gradient(to right, transparent 0%, black 28%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 28%)",
        }}
      />

      {/* Left text content */}
      <div className="relative z-10 flex flex-col justify-center px-6 sm:px-10 md:px-14 py-10 sm:py-14 w-[56%] sm:w-[52%]">
        <span
          key={`chip-${animKey}`}
          className="text-white text-[10px] sm:text-xs font-black rounded-full mb-3 w-fit tracking-widest uppercase shadow"
          style={{ backgroundColor: s.accent, padding: "4px 14px", animation: "heroUp 0.45s ease forwards" }}
        >
          {s.label}
        </span>

        <h1
          key={`h1-${animKey}`}
          className="text-2xl sm:text-4xl md:text-5xl font-black leading-tight mb-2"
          style={{ color: "#111827", animation: "heroUp 0.5s 0.05s ease both" }}
        >
          {s.headline}
          <br />
          <span style={{ color: s.accent }}>{s.sub}</span>
        </h1>

        <p
          key={`p-${animKey}`}
          className="text-gray-600 text-sm sm:text-base font-medium leading-relaxed mb-5"
          style={{ animation: "heroUp 0.55s 0.1s ease both" }}
        >
          {s.desc}
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/shop"
            className="text-white px-6 py-3 rounded-full font-black text-sm hover:shadow-xl hover:scale-105 transition inline-flex items-center gap-2 shadow-md"
            style={{ backgroundColor: s.accent }}
          >
            {s.cta} <ChevronRight size={16} />
          </Link>
          <a
            href="https://wa.me/919004063606"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-800 border border-gray-200 px-6 py-3 rounded-full font-black text-sm hover:shadow-xl hover:scale-105 transition inline-flex items-center gap-2 shadow-md"
          >
            <MessageSquare size={16} className="text-green-600" /> WhatsApp
          </a>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-6 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? 28 : 8,
              height: 8,
              backgroundColor: i === current ? s.accent : "#00000026",
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes heroImgIn { from { opacity:0; transform:translateX(32px); } to { opacity:1; transform:translateX(0); } }
        @keyframes heroUp    { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════════ */
export default function Home() {
  const { addToCart } = useCart();

  const categories = [
    { name: "Groceries", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80" },
    { name: "Fruits & Vegetables", image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=400&q=80" },
    { name: "Household Items", image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=400&q=80" },
    { name: "Personal Care", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80" },
    { name: "Snacks & Beverages", image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=400&q=80" },
  ];

  const deals = [
    {
      title: "Up to 40% OFF",
      subtitle: "Fresh Groceries",
      badge: "🔥 HOT DEAL",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80",
      accent: "#dca622",
    },
    {
      title: "Buy 1 Get 1",
      subtitle: "Personal Care",
      badge: "🎁 LIMITED",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80",
      accent: "#a855f7",
    },
    {
      title: "Weekend Special",
      subtitle: "Snacks & Drinks",
      badge: "⭐ WEEKEND",
      image: "https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?auto=format&fit=crop&w=600&q=80",
      accent: "#22c55e",
    },
  ];

  const featured = products.slice(0, 6);

  const whyUs = [
    { icon: <Truck size={28} />, title: "Fast Delivery", desc: "At your doorstep quickly" },
    { icon: <Wallet size={28} />, title: "Cash on Delivery", desc: "Pay when you receive" },
    { icon: <ShoppingCart size={28} />, title: "Easy Shopping", desc: "Quick, simple checkout" },
    { icon: <RotateCcw size={28} />, title: "Easy Returns", desc: "Hassle-free returns" },
  ];

  return (
    <div className="space-y-10 pb-28">

      {/* ── HERO SLIDER ──────────────────────────────────────── */}
      <HeroSlider />

      {/* ── CATEGORIES ───────────────────────────────────────── */}
      <section className="px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-black text-gray-800">🛍️ Shop by Category</h2>
          <Link to="/shop" className="text-primary font-bold flex items-center text-sm gap-1">All <ChevronRight size={16} /></Link>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-5 md:overflow-visible scrollbar-hide snap-x snap-mandatory">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={`/shop?category=${encodeURIComponent(cat.name)}`}
              className="snap-start shrink-0 w-28 sm:w-36 md:w-auto relative overflow-hidden rounded-2xl shadow-lg group hover:scale-105 transition duration-300 aspect-[3/4]"
            >
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-2 sm:p-3">
                <p className="text-white font-black text-xs sm:text-sm leading-tight drop-shadow-lg text-center">{cat.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── TODAY'S BEST DEALS — clean white cards, no plastic cover ── */}
      <section className="px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-black text-gray-800">🔥 Today's Best Deals</h2>
          <Link to="/shop" className="text-primary font-bold flex items-center text-sm gap-1">All <ChevronRight size={16} /></Link>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible scrollbar-hide snap-x snap-mandatory">
          {deals.map((deal, i) => (
            <Link
              key={i}
              to="/shop"
              className="snap-start shrink-0 w-64 sm:w-72 md:w-auto bg-white rounded-3xl shadow-md overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition duration-300 flex flex-col"
            >
              {/* Image — bright, only a very thin bottom fade */}
              <div className="relative overflow-hidden" style={{ height: 180 }}>
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-black/25 to-transparent" />
                <span
                  className="absolute top-3 left-3 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg tracking-wider"
                  style={{ backgroundColor: deal.accent }}
                >
                  {deal.badge}
                </span>
              </div>

              {/* Clean white card text */}
              <div className="p-4 flex flex-col gap-1 bg-white">
                <h3 className="font-black text-gray-900 text-lg leading-tight">{deal.title}</h3>
                <p className="text-gray-500 text-sm font-medium">{deal.subtitle}</p>
                <span
                  className="mt-2 self-start text-white text-xs font-black px-4 py-1.5 rounded-full"
                  style={{ backgroundColor: deal.accent }}
                >
                  Grab Now →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── POPULAR ITEMS ─────────────────────────────────────── */}
      <section className="px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-black text-gray-800 border-l-4 border-primary pl-3">⭐ Popular Items</h2>
          <Link to="/shop" className="text-primary font-bold flex items-center text-sm gap-1">See All <ChevronRight size={16} /></Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
          {featured.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition flex flex-col">
              <div className="relative overflow-hidden" style={{ paddingBottom: "100%" }}>
                <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute top-2 left-2 bg-primary/90 text-secondary text-[9px] font-black px-2 py-0.5 rounded-full shadow">{product.category}</div>
                <button
                  onClick={() => addToCart(product)}
                  className="absolute bottom-0 inset-x-0 bg-secondary/90 text-white text-xs font-black py-2 translate-y-full group-hover:translate-y-0 transition duration-300 flex items-center justify-center gap-1"
                >
                  <ShoppingCart size={13} /> Add
                </button>
              </div>
              <div className="p-2 sm:p-3">
                <p className="font-bold text-gray-800 text-xs sm:text-sm truncate leading-tight">{product.name}</p>
                <p className="text-primary font-black text-sm sm:text-base mt-0.5">₹{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROMO BANNER ─────────────────────────────────────── */}
      <section className="px-4">
        <div className="relative overflow-hidden rounded-3xl shadow-xl h-44 sm:h-56">
          <img src="https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1200&q=80" alt="Fresh produce" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10">
            <p className="text-green-300 font-black text-xs tracking-widest uppercase mb-1">Limited Time Offer</p>
            <h3 className="text-white font-black text-2xl sm:text-3xl leading-tight mb-4">Free Delivery<br />on First Order!</h3>
            <a href="https://wa.me/919004063606" target="_blank" rel="noopener noreferrer"
              className="bg-primary text-secondary px-6 py-2.5 rounded-full font-black text-sm w-fit hover:scale-105 transition inline-flex items-center gap-2">
              <MessageSquare size={16} /> Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────── */}
      <section className="px-4">
        <h2 className="text-xl sm:text-2xl font-black text-gray-800 mb-5 text-center">Why Choose Paru Shopping?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {whyUs.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 sm:p-5 text-center shadow-md hover:shadow-xl transition hover:-translate-y-1 transform">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-3">{item.icon}</div>
              <h4 className="font-black text-gray-800 text-sm mb-1">{item.title}</h4>
              <p className="text-gray-400 text-xs leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHATSAPP CTA ─────────────────────────────────────── */}
      <section className="px-4">
        <div className="relative overflow-hidden bg-[#128C7E] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
          <img src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=600&q=80" alt="Groceries"
            className="hidden sm:block absolute right-0 top-0 h-full w-56 object-cover opacity-25" />
          <div className="z-10 text-center sm:text-left">
            <h3 className="text-white font-black text-2xl sm:text-3xl mb-1">📱 Order on WhatsApp</h3>
            <p className="text-white/80 text-sm sm:text-base font-medium">Quick, simple &amp; convenient. We confirm in minutes.</p>
          </div>
          <a href="https://wa.me/919004063606" target="_blank" rel="noopener noreferrer"
            className="z-10 shrink-0 flex items-center gap-2 bg-white text-green-700 font-black text-base px-7 py-3.5 rounded-full shadow-lg hover:scale-105 transition">
            <MessageSquare size={20} /> Chat Now
          </a>
        </div>
      </section>

    </div>
  );
}
