import { Link } from "react-router-dom";
import { ChevronRight, MessageSquare, Truck, Wallet, RotateCcw, ShoppingCart, Star } from "lucide-react";
import products from "../data/products.json";
import { useCart } from "../context/CartContext";

export default function Home() {
  const { addToCart } = useCart();

  const categories = [
    {
      name: "Groceries",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80",
      color: "from-yellow-400 to-amber-500",
    },
    {
      name: "Fruits & Vegetables",
      image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=400&q=80",
      color: "from-green-400 to-emerald-600",
    },
    {
      name: "Household Items",
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=400&q=80",
      color: "from-blue-400 to-cyan-600",
    },
    {
      name: "Personal Care",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
      color: "from-purple-400 to-fuchsia-600",
    },
    {
      name: "Snacks & Beverages",
      image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=400&q=80",
      color: "from-orange-400 to-red-500",
    },
  ];

  const deals = [
    {
      title: "Up to 40% OFF",
      subtitle: "Fresh Groceries",
      badge: "🔥 HOT",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80",
      bg: "from-amber-500 to-orange-600",
    },
    {
      title: "Buy 1 Get 1",
      subtitle: "Personal Care",
      badge: "🎁 LIMITED",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80",
      bg: "from-purple-500 to-pink-600",
    },
    {
      title: "Weekend Special",
      subtitle: "Snacks & Drinks",
      badge: "⭐ WEEKEND",
      image: "https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?auto=format&fit=crop&w=600&q=80",
      bg: "from-gray-700 to-gray-900",
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

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden mx-3 sm:mx-4 mt-4 rounded-3xl shadow-2xl min-h-[320px] sm:min-h-[400px] md:min-h-[480px] flex">
        {/* background image */}
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=85"
          alt="Fresh groceries"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* dark gradient overlay – left heavy */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent" />

        <div className="relative z-10 flex flex-col justify-center p-6 sm:p-10 md:p-16 max-w-lg">
          <span className="inline-block bg-primary text-secondary text-xs font-black px-4 py-1 rounded-full mb-4 w-fit tracking-widest uppercase">
            🏪 Your Local Store, Online
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            Fresh. Fast.<br />
            <span className="text-primary">Delivered.</span>
          </h1>
          <p className="text-white/80 text-base sm:text-lg font-medium mb-6">
            Groceries, vegetables &amp; daily needs —<br className="hidden sm:block" />
            right to your doorstep.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/shop"
              className="bg-primary text-secondary px-7 py-3 rounded-full font-black text-base hover:shadow-lg hover:scale-105 transition inline-flex items-center gap-2"
            >
              Shop Now <ChevronRight size={18} />
            </Link>
            <a
              href="https://wa.me/919004063606"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-7 py-3 rounded-full font-black text-base hover:bg-green-600 transition inline-flex items-center gap-2"
            >
              <MessageSquare size={18} /> WhatsApp Order
            </a>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES – horizontal scroll strip ─────────────── */}
      <section className="px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-black text-gray-800">🛍️ Shop by Category</h2>
          <Link to="/shop" className="text-primary font-bold flex items-center text-sm gap-1">
            All <ChevronRight size={16} />
          </Link>
        </div>

        {/* Scrollable row – no wrap on mobile, grid on md+ */}
        <div className="flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-5 md:overflow-visible scrollbar-hide snap-x snap-mandatory">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={`/shop?category=${encodeURIComponent(cat.name)}`}
              className="snap-start shrink-0 w-28 sm:w-36 md:w-auto relative overflow-hidden rounded-2xl shadow-lg group hover:scale-105 transition duration-300 aspect-[3/4]"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              {/* simple bottom-only gradient – keeps image vivid, text readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-2 sm:p-3">
                <p className="text-white font-black text-xs sm:text-sm leading-tight drop-shadow-lg text-center">
                  {cat.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── DEALS – image banner cards ───────────────────────── */}
      <section className="px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-black text-gray-800">🔥 Today's Best Deals</h2>
          <Link to="/shop" className="text-primary font-bold flex items-center text-sm gap-1">
            All <ChevronRight size={16} />
          </Link>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible scrollbar-hide snap-x snap-mandatory">
          {deals.map((deal, i) => (
            <Link
              key={i}
              to="/shop"
              className="snap-start shrink-0 w-64 sm:w-72 md:w-auto relative overflow-hidden rounded-3xl shadow-xl group hover:scale-[1.02] transition duration-300 h-48 sm:h-56"
            >
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${deal.bg} opacity-75`} />
              <div className="absolute top-3 left-3 bg-white/20 backdrop-blur text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest">
                {deal.badge}
              </div>
              <div className="absolute bottom-0 inset-x-0 p-4">
                <h3 className="text-white font-black text-xl leading-tight">{deal.title}</h3>
                <p className="text-white/80 text-sm font-medium">{deal.subtitle}</p>
                <span className="mt-2 inline-block bg-white/20 hover:bg-white/30 text-white text-xs font-bold px-4 py-1.5 rounded-full transition">
                  Grab Now →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── POPULAR PRODUCTS ─────────────────────────────────── */}
      <section className="px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-black text-gray-800 border-l-4 border-primary pl-3">
            ⭐ Popular Items
          </h2>
          <Link to="/shop" className="text-primary font-bold flex items-center text-sm gap-1">
            See All <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
          {featured.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition flex flex-col"
            >
              {/* image – tall ratio */}
              <div className="relative overflow-hidden" style={{ paddingBottom: "100%" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-2 left-2 bg-primary/90 text-secondary text-[9px] font-black px-2 py-0.5 rounded-full shadow">
                  {product.category}
                </div>
                {/* quick add overlay */}
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
          <img
            src="https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1200&q=80"
            alt="Fresh produce"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10">
            <p className="text-green-300 font-black text-xs tracking-widest uppercase mb-1">Limited Time Offer</p>
            <h3 className="text-white font-black text-2xl sm:text-3xl leading-tight mb-4">
              Free Delivery<br />on First Order!
            </h3>
            <a
              href="https://wa.me/919004063606"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-secondary px-6 py-2.5 rounded-full font-black text-sm w-fit hover:scale-105 transition inline-flex items-center gap-2"
            >
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
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-3">
                {item.icon}
              </div>
              <h4 className="font-black text-gray-800 text-sm mb-1">{item.title}</h4>
              <p className="text-gray-400 text-xs leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHATSAPP CTA STRIP ───────────────────────────────── */}
      <section className="px-4">
        <div className="relative overflow-hidden bg-[#128C7E] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=600&q=80"
            alt="Groceries"
            className="hidden sm:block absolute right-0 top-0 h-full w-56 object-cover opacity-25"
          />
          <div className="z-10 text-center sm:text-left">
            <h3 className="text-white font-black text-2xl sm:text-3xl mb-1">📱 Order on WhatsApp</h3>
            <p className="text-white/80 text-sm sm:text-base font-medium">Quick, simple &amp; convenient. We confirm in minutes.</p>
          </div>
          <a
            href="https://wa.me/919004063606"
            target="_blank"
            rel="noopener noreferrer"
            className="z-10 shrink-0 flex items-center gap-2 bg-white text-green-700 font-black text-base px-7 py-3.5 rounded-full shadow-lg hover:scale-105 transition"
          >
            <MessageSquare size={20} /> Chat Now
          </a>
        </div>
      </section>

    </div>
  );
}
