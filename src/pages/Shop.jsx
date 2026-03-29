import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ShoppingCart, Search, Filter, X, ChevronRight, Check } from "lucide-react";
import products from "../data/products.json";
import { useCart } from "../context/CartContext";

export default function Shop() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const searchParam = searchParams.get("search");

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category, setCategory] = useState(categoryParam || "All");
  const [searchTerm, setSearchTerm] = useState(searchParam || "");
  const [priceRange, setPriceRange] = useState(500);
  const [showFilters, setShowFilters] = useState(false);
  const [added, setAdded] = useState(null);

  const { addToCart } = useCart();

  const categories = ["All", "Groceries", "Fruits & Vegetables", "Household Items", "Personal Care", "Snacks & Beverages"];

  useEffect(() => {
    let filtered = products;

    if (category !== "All") {
      filtered = filtered.filter((p) => p.category === category);
    }

    if (searchTerm) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    filtered = filtered.filter((p) => p.price <= priceRange);

    setFilteredProducts(filtered);
  }, [category, searchTerm, priceRange]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAdded(product.id);
    setTimeout(() => setAdded(null), 2000);
  };

  return (
    <div className="flex flex-col md:flex-row p-6 md:p-10 space-y-8 md:space-y-0 md:space-x-12 min-h-screen">
      {/* Sidebar Filters */}
      <aside className={`md:w-72 space-y-10 md:block ${showFilters ? 'block' : 'hidden'}`}>
        <div className="flex justify-between items-center md:hidden mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Filters</h2>
          <button onClick={() => setShowFilters(false)} className="bg-gray-100 p-2 rounded-full"><X size={24} /></button>
        </div>

        <section className="space-y-6">
          <h3 className="text-lg font-extrabold text-gray-800 border-b-2 border-primary pb-2 flex items-center space-x-2">
            <Filter size={20} className="text-primary" /> <span>Categories</span>
          </h3>
          <div className="flex flex-wrap gap-3 md:flex-col md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-3 rounded-2xl text-left font-bold transition shadow-sm border-2 ${
                  category === cat
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-gray-700 hover:bg-gray-100 border-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-lg font-extrabold text-gray-800 border-b-2 border-primary pb-2 flex items-center space-x-2">
            <span>Price Range</span>
          </h3>
          <div className="space-y-4">
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <p className="font-bold text-gray-700 text-lg">Under ₹{priceRange}</p>
          </div>
        </section>
      </aside>

      {/* Main Content */}
      <main className="flex-1 space-y-10">
        <div className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-black text-gray-800">
            {category === "All" ? "Every Product" : category}
            <span className="text-primary text-lg font-bold ml-3 italic">({filteredProducts.length})</span>
          </h2>
          <button
            onClick={() => setShowFilters(true)}
            className="md:hidden bg-primary text-white p-4 rounded-2xl shadow-lg transform active:scale-95 transition"
          >
            <Filter size={24} />
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden group hover:shadow-2xl transition border border-gray-50 flex flex-col">
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl text-xs font-black text-primary shadow-lg border border-primary/20">
                  {product.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col space-y-3">
                <h4 className="font-bold text-xl text-gray-800 line-clamp-1">{product.name}</h4>
                <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">{product.description}</p>
                <div className="mt-auto pt-6 flex items-center justify-between border-t border-gray-100">
                  <span className="text-2xl font-black text-primary">₹{product.price}</span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`p-4 rounded-2xl transition shadow-lg transform active:scale-90 flex items-center justify-center min-w-[3.5rem] ${
                      added === product.id ? "bg-green-600 text-white" : "bg-primary text-white hover:bg-primary/90"
                    }`}
                  >
                    {added === product.id ? <Check size={24} strokeWidth={3} /> : <ShoppingCart size={24} strokeWidth={2.5} />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-24 space-y-6">
             <div className="text-7xl">🔍</div>
             <p className="text-2xl font-bold text-gray-800">No products found for "{searchTerm}"</p>
             <button onClick={() => {setSearchTerm(""); setCategory("All"); setPriceRange(1000);}} className="text-primary font-bold hover:underline">Clear all filters</button>
          </div>
        )}
      </main>
    </div>
  );
}
