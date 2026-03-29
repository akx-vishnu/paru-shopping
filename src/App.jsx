import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-primary/20">
          <Navbar />
          <main className="flex-1 max-w-7xl mx-auto w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          
          {/* Rich Footer */}
          <footer className="bg-gray-900 text-gray-300 mt-16 px-8 py-14">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <img src="/favicon.svg" alt="Logo" className="w-8 h-8" />
                  <span className="text-white text-xl font-black tracking-tight">Paru Shopping</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">Your daily needs, delivered. Everything you need in one place — fresh, fast, and affordable.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/" className="hover:text-primary transition">Home</a></li>
                  <li><a href="/shop" className="hover:text-primary transition">Shop</a></li>
                  <li><a href="/about" className="hover:text-primary transition">About Us</a></li>
                  <li><a href="/contact" className="hover:text-primary transition">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Delivery Areas</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Kochi, Kerala</li>
                  <li>Ernakulam District</li>
                  <li>Thrissur</li>
                  <li>Nearby Areas</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Info</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/contact" className="hover:text-primary transition">Terms & Conditions</a></li>
                  <li><a href="/contact" className="hover:text-primary transition">Privacy Policy</a></li>
                  <li><a href="https://wa.me/919004063606" className="hover:text-primary transition">WhatsApp Order</a></li>
                  <li><span className="text-gray-500">+91 90040 63606</span></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-600 font-medium tracking-widest uppercase">
              &copy; 2026 Paru Shopping &bull; Kochi, Kerala &bull; Shop Smart. Live Better.
            </div>
          </footer>


          {/* Sticky Bottom Bar for Mobile - Optional but great for UX */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-gray-100 p-4 flex justify-around items-center z-50">
             <button onClick={() => window.location.href='/'} className="flex flex-col items-center space-y-1 text-gray-400 focus:text-primary transition">
                <span className="text-2xl">🏠</span>
                <span className="text-[10px] font-black tracking-tighter">HOME</span>
             </button>
             <button onClick={() => window.location.href='/shop'} className="flex flex-col items-center space-y-1 text-gray-400 focus:text-primary transition">
                <span className="text-2xl">🛍️</span>
                <span className="text-[10px] font-black tracking-tighter">SHOP</span>
             </button>
             <button onClick={() => window.location.href='/cart'} className="flex flex-col items-center space-y-1 text-gray-400 focus:text-primary transition">
                <span className="text-2xl">🛒</span>
                <span className="text-[10px] font-black tracking-tighter">CART</span>
             </button>
             <a href="https://wa.me/919004063606" className="flex flex-col items-center space-y-1 text-gray-400 focus:text-green-500 transition">
                <span className="text-2xl">💬</span>
                <span className="text-[10px] font-black tracking-tighter">HELP</span>
             </a>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
