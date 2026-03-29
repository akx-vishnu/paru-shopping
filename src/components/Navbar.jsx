import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Search, Home, Store, Info, Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { count } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/shop?search=${searchTerm}`);
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img src="/favicon.svg" alt="Paru Shopping Logo" className="w-8 h-8 mr-2" />
            <span className="text-2xl font-bold text-primary tracking-tight">Paru Shopping</span>
          </Link>

          <form onSubmit={handleSearch} className="hidden md:flex flex-1 mx-8 relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-primary border-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="absolute right-3 top-2.5 text-gray-500">
              <Search size={20} />
            </button>
          </form>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-primary transition">Home</Link>
            <Link to="/shop" className="text-gray-600 hover:text-primary transition">Shop</Link>
            <Link to="/about" className="text-gray-600 hover:text-primary transition">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary transition">Contact</Link>
            <Link to="/cart" className="relative text-gray-600 hover:text-primary">
              <ShoppingCart size={24} />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                  {count}
                </span>
              )}
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative text-gray-600">
              <ShoppingCart size={24} />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                  {count}
                </span>
              )}
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-300">
          <form onSubmit={handleSearch} className="relative mb-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:ring-primary focus:ring-2 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="absolute right-3 top-2.5 text-gray-500">
              <Search size={20} />
            </button>
          </form>
          <Link onClick={() => setIsOpen(false)} to="/" className="flex items-center space-x-3 text-lg font-medium py-2 text-gray-700">
            <Home size={22} className="text-primary" /> <span>Home</span>
          </Link>
          <Link onClick={() => setIsOpen(false)} to="/shop" className="flex items-center space-x-3 text-lg font-medium py-2 text-gray-700">
            <Store size={22} className="text-primary" /> <span>Shop</span>
          </Link>
          <Link onClick={() => setIsOpen(false)} to="/about" className="flex items-center space-x-3 text-lg font-medium py-2 text-gray-700">
            <Info size={22} className="text-primary" /> <span>About</span>
          </Link>
          <Link onClick={() => setIsOpen(false)} to="/contact" className="flex items-center space-x-3 text-lg font-medium py-2 text-gray-700">
            <Phone size={22} className="text-primary" /> <span>Contact</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
