import { Heart, ShieldCheck, Clock, MapPin, Phone, MessageSquare } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years of Service", value: "15+", icon: <Clock className="text-blue-500" /> },
    { label: "Happy Customers", value: "10k+", icon: <Heart className="text-red-500" /> },
    { label: "Local Trust", value: "100%", icon: <ShieldCheck className="text-green-500" /> }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12 space-y-24 pb-32">
      {/* Hero Section */}
      <section className="text-center space-y-10 animate-in fade-in slide-in-from-top duration-700">
        <h1 className="text-5xl md:text-8xl font-black text-gray-800 leading-tight">Our Story</h1>
        <div className="bg-primary h-4 w-32 mx-auto rounded-full shadow-lg"></div>
        <p className="text-xl md:text-3xl text-gray-500 max-w-4xl mx-auto leading-relaxed font-medium">
          Bringing the freshest and best quality local goods to your doorstep in Kochi since <span className="text-primary font-black">2011</span>.
        </p>
      </section>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-2xl group-hover:bg-primary/30 transition"></div>
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
            alt="Storefront"
            className="relative rounded-[3rem] shadow-2xl transform group-hover:scale-105 transition duration-500"
          />
          <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-100 hidden md:block">
            <p className="text-primary font-black text-4xl leading-tight text-center">Locally<br />Owned</p>
          </div>
        </div>

        <div className="space-y-10">
          <h2 className="text-4xl md:text-6xl font-black text-gray-800">Local Trust. Modern Ease.</h2>
          <p className="text-lg md:text-2xl text-gray-500 leading-relaxed font-medium italic">
            "We believe in more than just selling products. We believe in community. Paru Shopping was started with a simple vision: to make quality essentials accessible and affordable for every family in our neighborhood."
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-50 text-center space-y-4 hover:shadow-2xl transition group">
                <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-3xl transform group-hover:rotate-12 transition">
                  {stat.icon}
                </div>
                <div>
                  <h4 className="text-3xl font-black text-gray-800">{stat.value}</h4>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <section className="bg-gray-900 rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 shadow-2xl">
         <div className="space-y-6 text-center md:text-left">
            <h3 className="text-4xl font-black leading-tight">Need help with<br />an order?</h3>
            <p className="text-xl text-gray-400 font-medium">Our friendly team is always here for you.</p>
         </div>
         <div className="flex flex-wrap justify-center gap-6">
            <a href="tel:+919004063606" className="bg-white text-gray-900 px-10 py-5 rounded-full font-black text-xl flex items-center space-x-4 shadow-xl hover:scale-105 transition active:scale-95">
               <Phone className="text-primary" /> <span>Call Now</span>
            </a>
            <a href="https://wa.me/919004063606" className="bg-green-500 text-white px-10 py-5 rounded-full font-black text-xl flex items-center space-x-4 shadow-xl hover:scale-105 transition active:scale-95">
               <MessageSquare /> <span>WhatsApp</span>
            </a>
         </div>
      </section>
    </div>
  );
}
