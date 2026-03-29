import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12 min-h-screen space-y-24">
      {/* Hero Section */}
      <section className="text-center space-y-10 animate-in fade-in slide-in-from-top duration-700">
        <h1 className="text-5xl md:text-8xl font-black text-gray-800 leading-tight">Get in Touch</h1>
        <div className="bg-primary h-4 w-32 mx-auto rounded-full shadow-lg"></div>
        <p className="text-xl md:text-3xl text-gray-500 max-w-4xl mx-auto leading-relaxed font-medium">
          Have a question or feedback? We'd love to hear from you.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Contact Info & Info Cards */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800">Visit Our Store</h2>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-medium italic">
              "We're located in the heart of the community. Stop by for a coffee and fresh groceries!"
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-50 space-y-6 group hover:shadow-2xl transition duration-500 transform hover:-translate-y-2">
              <div className="bg-primary/10 w-20 h-20 rounded-3xl flex items-center justify-center text-primary group-hover:rotate-12 transition">
                <MapPin size={40} strokeWidth={2.5} />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-black text-gray-800">Address</h4>
                <p className="text-lg text-gray-500 font-bold leading-relaxed">
                  Market Road, Kochi,<br />Kerala - 682001
                </p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-50 space-y-6 group hover:shadow-2xl transition duration-500 transform hover:-translate-y-2">
              <div className="bg-secondary/10 w-20 h-20 rounded-3xl flex items-center justify-center text-secondary group-hover:rotate-12 transition">
                <Clock size={40} strokeWidth={2.5} />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-black text-gray-800">Hours</h4>
                <p className="text-lg text-gray-500 font-bold leading-relaxed">
                  Mon - Sat: 8 AM - 9 PM<br />Sun: 9 AM - 6 PM
                </p>
              </div>
            </div>

            <a href="tel:+919876543210" className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-50 space-y-6 group hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="bg-blue-100 w-20 h-20 rounded-3xl flex items-center justify-center text-blue-500 group-hover:rotate-12 transition">
                <Phone size={40} strokeWidth={2.5} />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-black text-gray-800">Phone</h4>
                <p className="text-lg text-gray-500 font-bold leading-relaxed">+91 98765 43210</p>
              </div>
            </a>

            <a href="https://wa.me/919876543210" className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-50 space-y-6 group hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="bg-green-100 w-20 h-20 rounded-3xl flex items-center justify-center text-green-500 group-hover:rotate-12 transition">
                <MessageCircle size={40} strokeWidth={2.5} />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-black text-gray-800">WhatsApp</h4>
                <p className="text-lg text-gray-500 font-bold leading-relaxed">Chat with us directly</p>
              </div>
            </a>
          </div>
        </div>

        {/* Form & Map */}
        <div className="space-y-12">
           <form onSubmit={handleSubmit} className="bg-gray-900 p-10 md:p-14 rounded-[3.5rem] shadow-2xl space-y-8 animate-in slide-in-from-right duration-700">
              <h3 className="text-4xl font-black text-white mb-10">Send a Message</h3>
              <div className="space-y-6">
                <input required type="text" placeholder="Full Name" className="w-full bg-gray-800/50 border-none rounded-3xl py-6 px-10 text-white text-xl placeholder-gray-500 focus:ring-2 focus:ring-primary outline-none transition font-bold" />
                <input required type="email" placeholder="Email Address" className="w-full bg-gray-800/50 border-none rounded-3xl py-6 px-10 text-white text-xl placeholder-gray-500 focus:ring-2 focus:ring-primary outline-none transition font-bold" />
                <textarea required rows="4" placeholder="Your Message" className="w-full bg-gray-800/50 border-none rounded-[2rem] py-6 px-10 text-white text-xl placeholder-gray-500 focus:ring-2 focus:ring-primary outline-none transition font-bold resize-none"></textarea>
              </div>
              <button disabled={submitted} type="submit" className={`w-full py-6 rounded-3xl font-black text-2xl shadow-xl transition transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-4 ${submitted ? "bg-green-500 text-white" : "bg-primary text-white"}`}>
                {submitted ? <><CheckCircle2 size={32} /> <span>Sent!</span></> : <><Send size={28} /> <span>Send Message</span></>}
              </button>
           </form>

           {/* Simple Map Placeholder */}
           <div className="bg-gray-200 rounded-[3.5rem] h-[350px] md:h-[400px] overflow-hidden shadow-2xl relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125745.71830605928!2d76.22306354418659!3d9.97022204618778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514ab2a945%3A0x6d9f52f36f642646!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1703275200000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) contrast(1.1) opacity(0.8)' }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
              ></iframe>
              <div className="absolute inset-0 bg-primary/10 pointer-events-none group-hover:opacity-0 transition duration-500"></div>
           </div>
        </div>
      </div>
    </div>
  );
}
