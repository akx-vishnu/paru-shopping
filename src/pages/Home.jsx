import { Link } from "react-router-dom";
import { ShoppingBag, ChevronRight, Phone, MessageSquare, MapPin } from "lucide-react";
import products from "../data/products.json";

export default function Home() {
  const categories = [
    { name: "Groceries", icon: "🌾", color: "bg-green-100" },
    { name: "Fruits & Vegetables", icon: "🍎", color: "bg-red-100" },
    { name: "Household Items", icon: "🧹", color: "bg-blue-100" },
    { name: "Personal Care", icon: "🧼", color: "bg-purple-100" },
    { name: "Snacks & Beverages", icon: "🥤", color: "bg-orange-100" }
  ];

  const featured = products.slice(0, 4);

  return (
    <div className="space-y-12 pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-white rounded-2xl mx-4 mt-6 p-10 md:p-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between shadow-2xl">
        <div className="z-10 space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Paru Shopping
          </h1>
          <p className="text-xl md:text-2xl font-medium opacity-90 italic">
            "Shop easy. Live happy."
          </p>
          <div className="pt-4">
            <Link
              to="/shop"
              className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg transition transform hover:-translate-y-1 inline-flex items-center space-x-2"
            >
              <span>Shop Now</span>
              <ChevronRight size={22} />
            </Link>
          </div>
        </div>
        <div className="hidden lg:block opacity-20 absolute -right-10 -bottom-10 rotate-12">
          <ShoppingBag size={400} />
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Shop by Category</h2>
          <Link to="/shop" className="text-primary font-semibold flex items-center">
            View All <ChevronRight size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={`/shop?category=${cat.name}`}
              className={`${cat.color} rounded-3xl p-6 text-center shadow-sm hover:shadow-xl transition transform hover:-translate-y-2 group`}
            >
              <span className="text-5xl block mb-4 group-hover:scale-110 transition">{cat.icon}</span>
              <p className="font-bold text-gray-800 leading-tight">{cat.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Today's Special Banner */}
      <section className="px-6">
        <div className="bg-secondary rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 shadow-lg relative overflow-hidden">
          <div className="z-10 text-center md:text-left">
            <h3 className="text-4xl font-black mb-2">Today's Special Offer!</h3>
            <p className="text-xl opacity-90 font-medium">Get flat 20% off on all organic fresh vegetables.</p>
            <Link to="/shop?category=Fruits & Vegetables" className="mt-8 bg-white text-secondary px-8 py-3 rounded-full font-bold inline-block hover:scale-105 transition">
              Grab it Now
            </Link>
          </div>
          <div className="text-7xl opacity-30 absolute right-10 bottom-4 rotate-12 select-none">🥗</div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-6">
        <h2 className="text-2xl font-bold mb-8 text-gray-800 border-l-4 border-primary pl-4">Our Top Picks</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-2xl transition">
              <div className="relative h-48 md:h-56">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                  {product.category}
                </div>
              </div>
              <div className="p-5 space-y-1">
                <h4 className="font-bold text-lg text-gray-800 truncate">{product.name}</h4>
                <p className="text-primary font-black text-xl">₹{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Quick Info */}
      <section className="px-6">
        <div className="bg-gray-900 rounded-3xl p-10 text-white grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex items-center space-x-6">
            <div className="bg-primary/20 p-4 rounded-2xl"><Phone className="text-primary" size={32} /></div>
            <div>
              <p className="text-gray-400 text-sm font-medium">Quick Call</p>
              <p className="text-xl font-bold">+91 98765 43210</p>
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
            <div className="bg-secondary/20 p-4 rounded-2xl"><MapPin className="text-secondary" size={32} /></div>
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
