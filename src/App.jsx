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
          
          {/* Simple Footer */}
          <footer className="bg-white border-t border-gray-100 py-12 px-6 text-center text-gray-400 font-bold uppercase tracking-widest text-xs">
             &copy; 2026 Paru Shopping &bull; Kochi, Kerala &bull; Shop easy. Live happy.
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
             <a href="https://wa.me/919876543210" className="flex flex-col items-center space-y-1 text-gray-400 focus:text-green-500 transition">
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
