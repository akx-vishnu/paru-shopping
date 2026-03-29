import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { ShoppingCart, Search, Filter, X, Check } from "lucide-react";
import products from "../data/products.json";
import { useCart } from "../context/CartContext";

const CATEGORY_IMAGES = {
  "All": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=120&q=70",
  "Groceries": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=120&q=70",
  "Fruits & Vegetables": "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=120&q=70",
  "Household Items": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=120&q=70",
  "Personal Care": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=120&q=70",
  "Snacks & Beverages": "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=120&q=70",
};

export default function Shop() {
  const [searchParams] = useSearchParams();
  const topRef = useRef(null);

  const categoryParam = searchParams.get("category");
  const searchParam = searchParams.get("search");

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category, setCategory] = useState(categoryParam || "All");
  const [searchTerm, setSearchTerm] = useState(searchParam || "");
  const [priceRange, setPriceRange] = useState(1000);
  const [showFilters, setShowFilters] = useState(false);
  const [added, setAdded] = useState(null);

  const { addToCart } = useCart();
  const categories = ["All", "Groceries", "Fruits & Vegetables", "Household Items", "Personal Care", "Snacks & Beverages"];

  // Scroll to top when category param changes from Home page links
  useEffect(() => {
    if (categoryParam) {
      setCategory(categoryParam);
      // scroll the page to the top of the shop content
      if (topRef.current) {
        topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [categoryParam]);

  useEffect(() => {
    let filtered = products;
    if (category !== "All") filtered = filtered.filter((p) => p.category === category);
    if (searchTerm) filtered = filtered.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    filtered = filtered.filter((p) => p.price <= priceRange);
    setFilteredProducts(filtered);
  }, [category, searchTerm, priceRange]);

  const handleCategoryClick = (cat) => {
    setCategory(cat);
    setShowFilters(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setAdded(product.id);
    setTimeout(() => setAdded(null), 2000);
  };

  return (
    <div ref={topRef} className="min-h-screen">

      {/* ── CATEGORY STRIP (top, always visible) ─────────────── */}
      <div className="bg-white border-b border-gray-100 px-4 py-3 sticky top-16 z-30 shadow-sm">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide snap-x pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`snap-start shrink-0 flex flex-col items-center gap-1 rounded-2xl overflow-hidden transition border-2 ${
                category === cat ? "border-primary shadow-md scale-105" : "border-transparent"
              }`}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 overflow-hidden relative">
                <img
                  src={CATEGORY_IMAGES[cat]}
                  alt={cat}
                  className="w-full h-full object-cover"
                />
                {category === cat && (
                  <div className="absolute inset-0 bg-primary/20" />
                )}
              </div>
              <span className={`text-[10px] sm:text-xs font-black px-1 pb-1 text-center leading-tight w-16 ${category === cat ? "text-primary" : "text-gray-600"}`}>
                {cat === "Fruits & Vegetables" ? "Fruits & Veg" : cat === "Snacks & Beverages" ? "Snacks" : cat === "Household Items" ? "Household" : cat === "Personal Care" ? "Personal" : cat}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 sm:p-6 md:p-8">

        {/* ── SEARCH & FILTER BAR ─────────────────────────────── */}
        <div className="flex gap-3 mb-6 items-center">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white rounded-2xl border border-gray-100 shadow-sm focus:ring-2 focus:ring-primary outline-none font-medium text-sm"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <X size={16} />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`p-3 rounded-2xl border shadow-sm transition flex items-center gap-2 text-sm font-bold ${showFilters ? "bg-primary text-white border-primary" : "bg-white text-gray-700 border-gray-100"}`}
          >
            <Filter size={18} /> <span className="hidden sm:inline">Filter</span>
          </button>
        </div>

        {/* ── PRICE FILTER PANEL ──────────────────────────────── */}
        {showFilters && (
          <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 mb-6 animate-in slide-in-from-top duration-200">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-black text-gray-800 text-sm">Price Range</h3>
              <span className="text-primary font-black text-sm">Up to ₹{priceRange}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1 font-bold">
              <span>₹0</span><span>₹1000</span>
            </div>
          </div>
        )}

        {/* ── HEADER ──────────────────────────────────────────── */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-black text-gray-800">
            {category === "All" ? "All Products" : category}
            <span className="text-primary text-base font-bold ml-2">({filteredProducts.length})</span>
          </h2>
        </div>

        {/* ── PRODUCTS GRID ────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition flex flex-col"
            >
              {/* square image */}
              <div className="relative overflow-hidden" style={{ paddingBottom: "100%" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-2 left-2 bg-primary/90 text-secondary text-[9px] font-black px-2 py-0.5 rounded-full shadow">
                  {product.category === "Fruits & Vegetables" ? "Fruits & Veg" : product.category}
                </div>
                {/* quick-add slide-up */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className={`absolute bottom-0 inset-x-0 text-white text-xs font-black py-2 translate-y-full group-hover:translate-y-0 transition duration-300 flex items-center justify-center gap-1.5 ${
                    added === product.id ? "bg-green-600" : "bg-secondary"
                  }`}
                >
                  {added === product.id ? <Check size={13} strokeWidth={3} /> : <ShoppingCart size={13} />}
                  {added === product.id ? "Added!" : "Add to Cart"}
                </button>
              </div>

              <div className="p-2 sm:p-3 flex flex-col flex-1 justify-between">
                <p className="font-bold text-gray-800 text-xs sm:text-sm leading-tight line-clamp-2 mb-1">{product.name}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-primary font-black text-sm sm:text-base">₹{product.price}</span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`p-1.5 sm:p-2 rounded-xl transition shadow-sm ${
                      added === product.id ? "bg-green-500 text-white" : "bg-primary/10 text-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    {added === product.id ? <Check size={14} strokeWidth={3} /> : <ShoppingCart size={14} />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 space-y-4">
            <div className="text-6xl">🔍</div>
            <p className="text-xl font-black text-gray-700">No products found</p>
            <p className="text-gray-400 text-sm">Try a different category or search term</p>
            <button
              onClick={() => { setSearchTerm(""); setCategory("All"); setPriceRange(1000); }}
              className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-primary/90 transition"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
