import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus, ArrowRight, MessageCircle, ShoppingBag, CreditCard, User, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, total } = useCart();
  const [step, setStep] = useState(1); // 1: Cart, 2: Checkout, 3: Success
  const [formData, setFormData] = useState({ name: "", phone: "", address: "", payment: "Cash on Delivery" });

  const handleCheckout = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const generateWhatsAppMessage = () => {
    const items = cartItems
      .map((item) => `${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}`)
      .join("%0A");
    const message = `*Order from Paru Shopping*%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AAddress: ${formData.address}%0APayment: ${formData.payment}%0A%0A*Items:*%0A${items}%0A%0A*Total: ₹${total}*`;
    window.open(`https://wa.me/919004063606?text=${message}`, "_blank");
  };

  if (cartItems.length === 0 && step !== 3) {
    return (
      <div className="flex flex-col items-center justify-center py-32 space-y-10 px-6 text-center animate-in fade-in zoom-in duration-500">
        <div className="bg-gray-100 p-12 rounded-full relative">
          <ShoppingBag size={120} className="text-gray-300" />
          <div className="absolute top-0 right-0 bg-primary w-8 h-8 rounded-full animate-ping"></div>
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-black text-gray-800">Your bag is empty!</h2>
          <p className="text-gray-500 text-lg max-w-sm">Looks like you haven't added anything to your cart yet.</p>
        </div>
        <Link to="/shop" className="bg-primary text-white px-10 py-5 rounded-3xl font-extrabold text-xl shadow-2xl hover:scale-105 active:scale-95 transition flex items-center space-x-3">
          <ShoppingBag size={24} /> <span>Start Shopping</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12 min-h-screen">
      <div className="flex items-center space-x-4 mb-10 overflow-x-auto pb-4 scrollbar-hide">
        <div className={`px-6 py-2 rounded-full font-bold whitespace-nowrap ${step >= 1 ? "bg-primary text-white" : "bg-gray-100 text-gray-400"}`}>1. My Cart</div>
        <ArrowRight size={20} className="text-gray-300 shrink-0" />
        <div className={`px-6 py-2 rounded-full font-bold whitespace-nowrap ${step >= 2 ? "bg-primary text-white" : "bg-gray-100 text-gray-400"}`}>2. Shipping Details</div>
        <ArrowRight size={20} className="text-gray-300 shrink-0" />
        <div className={`px-6 py-2 rounded-full font-bold whitespace-nowrap ${step >= 3 ? "bg-primary text-white" : "bg-gray-100 text-gray-400"}`}>3. Success!</div>
      </div>

      {step === 1 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 animate-in slide-in-from-bottom duration-500">
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-4xl font-black text-gray-800 mb-8">My Shopping Bag</h1>
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-4 sm:p-6 rounded-[2rem] shadow-xl border border-gray-50 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 group">
                <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-2xl group-hover:scale-105 transition" />
                <div className="flex-1 space-y-2 text-center sm:text-left">
                  <h3 className="text-2xl font-extrabold text-gray-800">{item.name}</h3>
                  <p className="text-primary font-black text-xl">₹{item.price}</p>
                </div>
                <div className="flex items-center bg-gray-100 p-2 rounded-2xl space-x-6">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-white rounded-xl shadow-sm transition"><Minus size={20} /></button>
                  <span className="font-black text-xl w-6 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-white rounded-xl shadow-sm transition"><Plus size={20} /></button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="bg-red-50 p-4 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition shadow-sm"><Trash2 size={24} /></button>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-50 sticky top-24 space-y-10">
              <h3 className="text-2xl font-black text-gray-800 border-b-2 border-primary pb-4">Order Summary</h3>
              <div className="space-y-6">
                 <div className="flex justify-between text-lg font-bold text-gray-500 italic"><span>Items ({cartItems.length})</span> <span>₹{total}</span></div>
                 <div className="flex justify-between text-lg font-bold text-gray-500 italic"><span>Delivery Charge</span> <span className="text-green-500">FREE</span></div>
                 <div className="pt-6 border-t-2 border-dashed border-gray-100 flex justify-between items-end">
                    <span className="text-xl font-bold text-gray-800">Total Amount</span>
                    <span className="text-4xl font-black text-primary">₹{total}</span>
                 </div>
              </div>
              <button onClick={() => setStep(2)} className="w-full bg-primary text-white py-6 rounded-3xl font-black text-xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1 flex items-center justify-center space-x-4">
                <span>Proceed to Shipping</span> <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl animate-in fade-in duration-500">
          <h2 className="text-4xl font-black text-gray-800 mb-10">Shipping Details</h2>
          <form onSubmit={handleCheckout} className="space-y-8">
            <div className="relative group">
              <label className="text-sm font-black text-gray-400 uppercase tracking-widest mb-2 block group-focus-within:text-primary transition">Full Name</label>
              <div className="flex items-center bg-gray-100 rounded-2xl px-6 py-1 focus-within:ring-2 focus-within:ring-primary transition">
                <User size={20} className="text-gray-400 mr-4" />
                <input required type="text" className="bg-transparent border-none focus:ring-0 w-full py-4 text-lg font-bold text-gray-800 placeholder-gray-300 outline-none" placeholder="Enter your name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>
            </div>
            <div className="relative group">
              <label className="text-sm font-black text-gray-400 uppercase tracking-widest mb-2 block group-focus-within:text-primary transition">Phone Number</label>
              <div className="flex items-center bg-gray-100 rounded-2xl px-6 py-1 focus-within:ring-2 focus-within:ring-primary transition">
                <Phone size={20} className="text-gray-400 mr-4" />
                <input required type="tel" className="bg-transparent border-none focus:ring-0 w-full py-4 text-lg font-bold text-gray-800 placeholder-gray-300 outline-none" placeholder="Enter phone number" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </div>
            </div>
            <div className="relative group">
              <label className="text-sm font-black text-gray-400 uppercase tracking-widest mb-2 block group-focus-within:text-primary transition">Delivery Address</label>
              <div className="flex items-start bg-gray-100 rounded-2xl px-6 py-1 focus-within:ring-2 focus-within:ring-primary transition">
                <MapPin size={20} className="text-gray-400 mr-4 mt-5" />
                <textarea required rows="3" className="bg-transparent border-none focus:ring-0 w-full py-4 text-lg font-bold text-gray-800 placeholder-gray-300 outline-none resize-none" placeholder="Enter full address" onChange={(e) => setFormData({ ...formData, address: e.target.value })}></textarea>
              </div>
            </div>
            <div className="relative group">
              <label className="text-sm font-black text-gray-400 uppercase tracking-widest mb-2 block group-focus-within:text-primary transition">Payment Method</label>
              <div className="flex items-center bg-gray-100 rounded-2xl px-6 py-1 focus-within:ring-2 focus-within:ring-primary transition">
                <CreditCard size={20} className="text-gray-400 mr-4" />
                <select className="bg-transparent border-none focus:ring-0 w-full py-4 text-lg font-bold text-gray-800 outline-none" onChange={(e) => setFormData({ ...formData, payment: e.target.value })}>
                   <option>Cash on Delivery</option>
                   <option>UPI / Online Payment</option>
                </select>
              </div>
            </div>
            <div className="flex space-x-4 pt-6">
               <button type="button" onClick={() => setStep(1)} className="flex-1 bg-gray-100 text-gray-800 py-6 rounded-3xl font-black text-xl hover:bg-gray-200 transition">Back</button>
               <button type="submit" className="flex-[2] bg-primary text-white py-6 rounded-3xl font-black text-xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1">Place Order</button>
            </div>
          </form>
        </div>
      )}

      {step === 3 && (
        <div className="max-w-xl mx-auto text-center space-y-12 py-20 animate-in zoom-in duration-500">
           <div className="w-40 h-40 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto text-7xl animate-bounce">✅</div>
           <div className="space-y-6">
              <h2 className="text-5xl font-black text-gray-800 leading-tight">Order Placed Successfully!</h2>
              <p className="text-xl text-gray-500 font-medium px-8 leading-relaxed">Your order for <span className="text-primary font-black">₹{total}</span> is confirmed. Now send it to us via WhatsApp to finish.</p>
           </div>
           <div className="space-y-6">
              <button onClick={generateWhatsAppMessage} className="w-full bg-green-500 text-white py-6 rounded-full font-black text-2xl shadow-xl flex items-center justify-center space-x-4 transform hover:scale-105 transition">
                <MessageCircle size={32} /> <span>Send WhatsApp Order</span>
              </button>
              <Link to="/" className="inline-block text-gray-400 font-black hover:text-primary transition border-b-2 border-transparent hover:border-primary pb-1">Back to Home</Link>
           </div>
        </div>
      )}
    </div>
  );
}
