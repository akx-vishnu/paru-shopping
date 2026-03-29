import { Link } from "react-router-dom";
import { ShoppingBag, ChevronRight, Phone, MessageSquare, MapPin, Truck, Wallet, RotateCcw, ShoppingCart } from "lucide-react";
import products from "../data/products.json";
import { useCart } from "../context/CartContext";

export default function Home() {
  const { addToCart } = useCart();

  const categories = [
    { name: "Groceries", icon: "🌾", color: "bg-yellow-50 border border-yellow-200" },
    { name: "Fruits & Vegetables", icon: "🍎", color: "bg-red-50 border border-red-200" },
    { name: "Household Items", icon: "🧹", color: "bg-blue-50 border border-blue-200" },
    { name: "Personal Care", icon: "🧼", color: "bg-purple-50 border border-purple-200" },
    { name: "Snacks & Beverages", icon: "🥤", color: "bg-orange-50 border border-orange-200" }
  ];

  const featured = products.slice(0, 4);

  const offers = [
    { emoji: "🔥", title: "Up to 40% OFF", subtitle: "On fresh groceries & daily needs", badge: "HOT DEAL", color: "from-amber-500 to-orange-600" },
    { emoji: "🎁", title: "Buy 1 Get 1 Free", subtitle: "Selected personal care products", badge: "LIMITED", color: "from-yellow-600 to-amber-700" },
    { emoji: "🌟", title: "Weekend Specials", subtitle: "Exclusive deals every Sat & Sun", badge: "WEEKEND", color: "from-gray-800 to-gray-900" },
  ];

  const whyUs = [
    { icon: <Truck size={32} />, title: "Fast Delivery", desc: "Get your order at your doorstep quickly" },
    { icon: <Wallet size={32} />, title: "Cash on Delivery", desc: "Pay when you receive, no advance needed" },
    { icon: <ShoppingCart size={32} />, title: "Easy Shopping", desc: "Simple browsing and quick checkout" },
    { icon: <RotateCcw size={32} />, title: "Easy Returns", desc: "Hassle-free returns within 24 hours" },
  ];

  return (
    <div className="space-y-14 pb-24">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary text-white rounded-2xl mx-3 sm:mx-4 mt-4 sm:mt-6 p-6 sm:p-10 md:p-20 flex flex-col md:flex-row items-center justify-between shadow-2xl">
        <div className="z-10 space-y-6 max-w-xl text-center md:text-left">
          <div className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-bold tracking-wider mb-2">
            🏪 Your Local Store, Online
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Shop Smart.<br /><span className="text-primary">Live Better.</span>
          </h1>
          <p className="text-lg md:text-xl font-medium opacity-80">
            Fresh groceries, home essentials & daily needs at your doorstep.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
            <Link
              to="/shop"
              className="bg-primary text-secondary px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition transform hover:-translate-y-1 inline-flex items-center space-x-2"
            >
              <span>Shop Now</span>
              <ChevronRight size={22} />
            </Link>
            <Link
              to="/shop"
              className="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition inline-flex items-center gap-2 backdrop-blur"
            >
              <span>View Offers</span>
              <span>🔥</span>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block opacity-10 absolute -right-10 -bottom-10 rotate-12">
          <ShoppingBag size={400} />
        </div>
      </section>

      {/* Today's Best Deals */}
      <section className="px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">🔥 Today's Best Deals</h2>
          <Link to="/shop" className="text-primary font-semibold flex items-center text-sm">
            View All <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {offers.map((offer, i) => (
            <div key={i} className={`bg-gradient-to-br ${offer.color} rounded-3xl p-8 text-white shadow-xl relative overflow-hidden hover:scale-[1.02] transition`}>
              <span className="absolute top-4 right-4 bg-white/20 text-white text-[10px] font-black tracking-widest px-3 py-1 rounded-full">{offer.badge}</span>
              <div className="text-5xl mb-4">{offer.emoji}</div>
              <h3 className="text-2xl font-black mb-1">{offer.title}</h3>
              <p className="text-sm opacity-80 font-medium">{offer.subtitle}</p>
              <Link to="/shop" className="mt-5 inline-block bg-white/20 hover:bg-white/30 text-white text-sm font-bold px-5 py-2 rounded-full transition">
                Grab Now →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">🛍️ Shop by Category</h2>
          <Link to="/shop" className="text-primary font-semibold flex items-center text-sm">
            View All <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={`/shop?category=${cat.name}`}
              className={`${cat.color} rounded-3xl p-6 text-center shadow-sm hover:shadow-xl transition transform hover:-translate-y-2 group`}
            >
              <span className="text-5xl block mb-4 group-hover:scale-110 transition">{cat.icon}</span>
              <p className="font-bold text-gray-800 leading-tight text-sm">{cat.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-primary pl-4">⭐ Popular Items</h2>
          <Link to="/shop" className="text-primary font-semibold flex items-center text-sm">
            See All <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl shadow-md overflow-hidden group hover:shadow-2xl transition flex flex-col">
              <div className="relative h-44 md:h-52">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                  {product.category}
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <h4 className="font-bold text-gray-800 truncate">{product.name}</h4>
                  <p className="text-primary font-black text-xl mt-1">₹{product.price}</p>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-3 w-full bg-primary text-secondary text-sm font-bold py-2 rounded-full hover:bg-yellow-600 transition flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={15} /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Paru Shopping */}
      <section className="px-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">🚚 Why Choose Paru Shopping?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {whyUs.map((item, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 text-center shadow-md hover:shadow-xl transition hover:-translate-y-1 transform">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
                {item.icon}
              </div>
              <h4 className="font-black text-gray-800 mb-1">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WhatsApp Order CTA */}
      <section className="px-6">
        <div className="bg-secondary rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
          <div className="z-10 text-center md:text-left">
            <h3 className="text-3xl font-black mb-2">📱 Order on WhatsApp!</h3>
            <p className="text-lg opacity-80 font-medium">Order easily on WhatsApp — quick, simple, and convenient.</p>
          </div>
          <a
            href="https://wa.me/919004063606"
            target="_blank"
            rel="noopener noreferrer"
            className="z-10 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition transform hover:scale-105 whitespace-nowrap"
          >
            <MessageSquare size={24} /> Chat on WhatsApp
          </a>
          <div className="text-8xl opacity-10 absolute right-6 bottom-2 select-none">💬</div>
        </div>
      </section>

      {/* Contact Quick Info */}
      <section className="px-6">
        <div className="bg-gray-900 rounded-3xl p-6 sm:p-10 text-white grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
          <div className="flex items-center space-x-6">
            <div className="bg-primary/20 p-4 rounded-2xl"><Phone className="text-primary" size={32} /></div>
            <div>
              <p className="text-gray-400 text-sm font-medium">Quick Call</p>
              <p className="text-xl font-bold">+91 90040 63606</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="bg-green-500/20 p-4 rounded-2xl"><MessageSquare className="text-green-500" size={32} /></div>
            <div>
              <p className="text-gray-400 text-sm font-medium">WhatsApp</p>
              <p className="text-xl font-bold">Chat with us</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="bg-primary/20 p-4 rounded-2xl"><MapPin className="text-primary" size={32} /></div>
            <div>
              <p className="text-gray-400 text-sm font-medium">Our Store</p>
              <p className="text-xl font-bold">Kochi, Kerala</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
