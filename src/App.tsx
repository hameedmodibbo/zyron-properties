/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  TrendingUp, 
  Key, 
  Calculator, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
  ExternalLink,
  ArrowUp
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Project Mavora', href: '#project-mavora' },
    { name: 'Short-let Management', href: '#shortlet' },
    { name: 'Insights', href: '#blog' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-blue py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-brand-white rounded flex items-center justify-center">
            <Building2 className="text-brand-blue w-6 h-6" />
          </div>
          <span className={`text-xl font-bold tracking-tighter ${isScrolled ? 'text-brand-white' : 'text-brand-white'}`}>
            ZYRON <span className="font-light">PROPERTIES</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-brand-white/80 hover:text-brand-white text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-brand-white text-brand-blue px-6 py-2 rounded font-semibold text-sm hover:bg-opacity-90 transition-all">
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-blue border-t border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-brand-white/80 hover:text-brand-white text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-brand-white text-brand-blue px-6 py-3 rounded font-semibold text-center">
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920" 
          alt="Luxury Real Estate Lagos" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-blue/85 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/40 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20 backdrop-blur-sm w-fit"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-brand-white text-xs font-bold uppercase tracking-widest">Now Launching: Project Mavora</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-brand-white leading-tight mb-6"
          >
            Real Estate Investment in Lagos.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-brand-white/80 text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
          >
            Institutional-grade property investments designed for high-yield returns. From luxury developments in Yaba to professional management that scales your passive income.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-brand-white text-brand-blue px-8 py-4 rounded font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 hover:scale-105 transition-all shadow-xl">
              View Project Mavora <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white/30 text-brand-white px-8 py-4 rounded font-bold hover:bg-white/10 backdrop-blur-sm transition-all">
              Short-let Services
            </button>
          </motion.div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <div className="text-3xl font-bold text-brand-white">25%</div>
              <div className="text-brand-white/50 text-xs uppercase tracking-wider mt-1">Avg. Annual Growth</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              <div className="text-3xl font-bold text-brand-white">₦500M+</div>
              <div className="text-brand-white/50 text-xs uppercase tracking-wider mt-1">Assets Managed</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
            >
              <div className="text-3xl font-bold text-brand-white">100%</div>
              <div className="text-brand-white/50 text-xs uppercase tracking-wider mt-1">Transparency</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectMavora = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const features = [
    "Prime Location in Akoka/Yaba",
    "High Rental Demand (Students & Professionals)",
    "Smart Home Integration",
    "24/7 Power & Security",
    "Flexible Payment Plans",
    "Guaranteed 15% Capital Appreciation"
  ];

  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1545324418-f1d3c5b53571?auto=format&fit=crop&q=80&w=800", title: "Exterior View", type: "Architecture" },
    { url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800", title: "Luxury Studio", type: "Interior" },
    { url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800", title: "Modern Kitchen", type: "Interior" },
    { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800", title: "Floor Plan A", type: "Layout" },
    { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800", title: "Amenity Space", type: "Amenities" },
    { url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800", title: "Bedroom Unit", type: "Interior" },
  ];

  return (
    <section id="project-mavora" className="section-padding bg-brand-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=600" alt="Project Mavora Exterior" className="rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="space-y-4 mt-8">
                <img src="https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&q=80&w=600" alt="Project Mavora Interior" className="rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-500" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" alt="Project Mavora Amenities" className="rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-sm font-bold text-brand-blue/60 uppercase tracking-widest mb-4">The Landmark Development</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6 leading-tight">
              Project Mavora: Akoka's Newest Luxury Landmark
            </h3>
            <p className="text-brand-blue/70 text-lg mb-8 leading-relaxed">
              Designed for the modern investor, Project Mavora offers premium studio apartments in the heart of Akoka, Yaba. This development bridges the gap between luxury living and high-yield real estate investment.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-blue w-5 h-5 flex-shrink-0" />
                  <span className="text-brand-blue/80 font-medium">{f}</span>
                </div>
              ))}
            </div>
            <button className="bg-brand-blue text-brand-white px-10 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-brand-blue/20">
              Download Brochure <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Image Gallery */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brand-blue mb-4">Development Gallery</h3>
            <p className="text-brand-blue/60 max-w-2xl mx-auto">Explore the intricate details of Project Mavora, from architectural floor plans to premium interior finishes.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setSelectedImage(img.url)}
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-blue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <span className="text-white font-bold text-lg mb-1">{img.title}</span>
                  <span className="text-white/70 text-xs uppercase tracking-widest">{img.type}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-10"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
              <motion.img 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-w-full max-h-full object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const ShortletManagement = () => {
  return (
    <section id="shortlet" className="section-padding bg-gray-50 text-brand-blue">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold text-brand-blue/60 uppercase tracking-widest mb-4">Passive Income Simplified</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Short-let Management That Works</h3>
          <p className="text-brand-blue/70 text-lg max-w-2xl mx-auto">
            We turn your property into a high-performing asset. Our end-to-end management ensures maximum occupancy and premium nightly rates.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Key className="w-8 h-8 text-brand-blue" />,
            title: "Full Onboarding",
            desc: "Interior styling, professional photography, and multi-platform listing optimization."
          },
          {
            icon: <CheckCircle2 className="w-8 h-8 text-brand-blue" />,
            title: "Guest Relations",
            desc: "24/7 guest communication, screening, and seamless check-in/check-out experiences."
          },
          {
            icon: <TrendingUp className="w-8 h-8 text-brand-blue" />,
            title: "Revenue Growth",
            desc: "Dynamic pricing algorithms to ensure you earn up to 3x more than traditional rentals."
          }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-10 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="w-16 h-16 bg-brand-blue/5 rounded-xl flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold mb-4">{item.title}</h4>
            <p className="text-brand-blue/60 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 text-brand-blue flex flex-col md:flex-row items-center gap-8 shadow-2xl border border-gray-100">
        <div className="flex-1">
          <h4 className="text-2xl font-bold mb-2">Ready to maximize your returns?</h4>
          <p className="text-brand-blue/60">Partner with Lagos's most trusted short-let management firm.</p>
        </div>
        <button className="bg-brand-blue text-brand-white px-8 py-4 rounded-xl font-bold whitespace-nowrap hover:scale-105 transition-all shadow-lg shadow-brand-blue/20">
          Get a Free Valuation
        </button>
      </div>
    </section>
  );
};

const ROICalculator = () => {
  const [investment, setInvestment] = useState(35000000);
  const [monthlyRent, setMonthlyRent] = useState(450000);
  
  const annualRevenue = monthlyRent * 12;
  const roi = ((annualRevenue / investment) * 100).toFixed(1);

  return (
    <section id="calculator" className="section-padding bg-brand-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm font-bold text-brand-blue/60 uppercase tracking-widest mb-4">Investment Intelligence</h2>
          <h3 className="text-4xl font-bold text-brand-blue mb-6">Investor ROI Calculator</h3>
          <p className="text-brand-blue/70 text-lg mb-8">
            Transparency is at our core. Use our calculator to estimate your potential returns from buy-to-let or short-let investments in Lagos.
          </p>
          
          <div className="space-y-8 bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <div className="space-y-4">
              <div className="flex justify-between">
                <label className="font-bold text-brand-blue">Property Value (₦)</label>
                <span className="text-brand-blue font-mono">₦{investment.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="10000000" 
                max="200000000" 
                step="1000000"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <label className="font-bold text-brand-blue">Est. Monthly Short-let Income (₦)</label>
                <span className="text-brand-blue font-mono">₦{monthlyRent.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="100000" 
                max="2000000" 
                step="10000"
                value={monthlyRent}
                onChange={(e) => setMonthlyRent(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
            </div>
          </div>
        </div>

        <div className="bg-brand-blue rounded-3xl p-10 text-brand-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Calculator className="w-32 h-32" />
          </div>
          <div className="relative z-10">
            <h4 className="text-xl font-medium mb-10 opacity-80">Estimated Performance</h4>
            <div className="space-y-8">
              <div>
                <div className="text-sm uppercase tracking-widest opacity-60 mb-1">Annual Gross Revenue</div>
                <div className="text-4xl md:text-5xl font-bold">₦{annualRevenue.toLocaleString()}</div>
              </div>
              <div className="h-px bg-white/10"></div>
              <div>
                <div className="text-sm uppercase tracking-widest opacity-60 mb-1">Estimated Annual ROI</div>
                <div className="text-6xl font-bold text-green-400">{roi}%</div>
              </div>
            </div>
            <p className="mt-10 text-sm opacity-50 italic">
              *Calculations are based on average market performance in Yaba/Akoka. Actual returns may vary.
            </p>
            <button className="w-full mt-8 bg-brand-white text-brand-blue py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all">
              Get Detailed Analysis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Blog = ({ onSelectPost }: { onSelectPost: (post: any) => void }) => {
  const posts = [
    {
      id: 1,
      title: "Why Studio Apartments in Yaba are Lagos’s Best-Kept Investment Secret",
      category: "Market Analysis",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
      content: `
        <p>Yaba has long been known as the 'Silicon Valley' of Nigeria, but its real estate potential is often overshadowed by its tech reputation. For savvy investors, the real opportunity lies in studio apartments.</p>
        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200" alt="Modern Studio Interior" referrerPolicy="no-referrer" />
        <h3>The Tech Hub Advantage</h3>
        <p>With thousands of tech professionals and students flocking to Yaba every year, the demand for compact, high-quality living spaces has skyrocketed. Studio apartments offer the perfect balance of affordability for tenants and high rental yields for owners.</p>
        <h3>Rental Yields vs. Capital Appreciation</h3>
        <p>While areas like Ikoyi offer prestige, Yaba offers cash flow. A well-managed studio in Akoka or Sabo can generate consistent double-digit rental yields, significantly higher than the Lagos average.</p>
      `
    },
    {
      id: 2,
      title: "How to Earn ₦8M Annually via Hands-Off Short-let Management",
      category: "Passive Income",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
      content: `
        <p>Short-letting is the future of Lagos real estate. But how do you scale from one property to a portfolio that generates ₦8M+ annually without it becoming a full-time job?</p>
        <h3>Professional Management is Key</h3>
        <p>The difference between a hobbyist and a professional short-let owner is management. By partnering with experts like Zyron Properties, you leverage professional cleaning, guest screening, and dynamic pricing.</p>
        <h3>Optimizing for Occupancy</h3>
        <p>It's not just about the nightly rate; it's about the occupancy. We use data-driven insights to ensure your property stays booked, even during off-peak seasons.</p>
      `
    },
    {
      id: 3,
      title: "Project Mavora: A Deep Dive into Akoka’s Newest Luxury Landmark",
      category: "Development",
      image: "https://images.unsplash.com/photo-1545324418-f1d3c5b53571?auto=format&fit=crop&q=80&w=800",
      content: `
        <p>Project Mavora isn't just another building; it's a statement of intent. Located in the heart of Akoka, it represents the pinnacle of modern urban living in Lagos.</p>
        <h3>Architectural Excellence</h3>
        <p>Every unit in Project Mavora has been designed to maximize space and natural light. From the smart home features to the premium finishes, no detail has been overlooked.</p>
        <h3>Strategic Location</h3>
        <p>Being minutes away from major universities and tech hubs, Project Mavora is perfectly positioned to capture the highest-paying tenants in the region.</p>
      `
    },
    {
      id: 4,
      title: "Buying vs. Renting in Lagos: The Investor’s Guide to Cashflow Real Estate",
      category: "Investor Guide",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      content: `
        <p>In a high-inflation environment like Nigeria, the question isn't whether to invest in real estate, but how. Should you be a tenant or a landlord?</p>
        <h3>Real Estate as an Inflation Hedge</h3>
        <p>Property values in Lagos have historically outpaced inflation. By owning cash-flowing assets, you protect your wealth while generating monthly income.</p>
        <h3>The Power of Leverage</h3>
        <p>We explore how smart investors use payment plans and mortgage options to control high-value assets with minimal initial capital.</p>
      `
    },
    {
      id: 5,
      title: "5 Maintenance Tips to Keep Your Short-let Property Rating at 5 Stars",
      category: "Management",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6954?auto=format&fit=crop&q=80&w=800",
      content: `
        <p>A 5-star rating is the lifeblood of a short-let business. One bad review can cost you thousands in lost bookings. Here are our top tips for maintaining excellence.</p>
        <h3>1. Preventive Maintenance</h3>
        <p>Don't wait for the AC to break. Regular servicing is cheaper than emergency repairs and lost revenue.</p>
        <h3>2. The 'White Glove' Test</h3>
        <p>Cleanliness is non-negotiable. Professional cleaning services are an investment, not an expense.</p>
        <h3>3. Guest Feedback Loop</h3>
        <p>Listen to your guests. Small improvements based on their feedback can lead to long-term success.</p>
      `
    }
  ];

  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto flex justify-between items-end mb-12">
        <div>
          <h2 className="text-sm font-bold text-brand-blue/60 uppercase tracking-widest mb-4">Latest Insights</h2>
          <h3 className="text-4xl font-bold text-brand-blue">Knowledge is Profit</h3>
        </div>
        <button className="hidden md:flex items-center gap-2 text-brand-blue font-bold border-b-2 border-brand-blue pb-1">
          View All Articles <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer"
            onClick={() => onSelectPost(post)}
          >
            <div className="h-56 overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="p-8">
              <span className="text-xs font-bold text-brand-blue/40 uppercase tracking-widest mb-3 block">{post.category}</span>
              <h4 className="text-xl font-bold text-brand-blue mb-4 leading-snug hover:text-blue-800 transition-colors">
                {post.title}
              </h4>
              <div className="flex items-center justify-between mt-6">
                <span className="text-sm text-gray-400">5 min read</span>
                <button className="text-brand-blue font-bold text-sm flex items-center gap-1">
                  Read More <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const BlogPostView = ({ post, onBack }: { post: any, onBack: () => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white pt-32 pb-20"
    >
      <div className="max-w-4xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-blue font-bold mb-8 hover:translate-x-[-4px] transition-transform"
        >
          <ArrowRight className="w-5 h-5 rotate-180" /> Back to Insights
        </button>
        
        <div className="rounded-3xl overflow-hidden mb-12 shadow-2xl aspect-video">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>

        <span className="text-sm font-bold text-brand-blue/40 uppercase tracking-widest mb-4 block">{post.category}</span>
        <h1 className="text-4xl md:text-6xl font-bold text-brand-blue mb-8 leading-tight">{post.title}</h1>
        
        <div 
          className="prose prose-lg max-w-none text-brand-blue/80 leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <div className="mt-20 p-10 bg-brand-blue rounded-3xl text-brand-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Interested in this topic?</h3>
            <p className="opacity-70">Speak with our investment experts today.</p>
          </div>
          <button className="bg-brand-white text-brand-blue px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all">
            Book a Consultation
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-brand-blue text-brand-white rounded-full shadow-2xl hover:scale-110 transition-transform"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-brand-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-brand-white rounded flex items-center justify-center">
              <Building2 className="text-brand-blue w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tighter">ZYRON PROPERTIES</span>
          </div>
          <p className="text-white/50 leading-relaxed">
            Lagos's leading real estate investment firm specializing in high-yield developments and professional asset management.
          </p>
          <div className="flex space-x-4">
            <a href="https://wa.me/2347071197950" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"><MessageCircle className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h5 className="font-bold mb-6 text-lg">Quick Links</h5>
          <ul className="space-y-4 text-white/60">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#project-mavora" className="hover:text-white transition-colors">Project Mavora</a></li>
            <li><a href="#shortlet" className="hover:text-white transition-colors">Short-let Management</a></li>
            <li><a href="#blog" className="hover:text-white transition-colors">Latest Insights</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-6 text-lg">Contact Us</h5>
          <ul className="space-y-4 text-white/60">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-white/40 mt-1" />
              <span>Akoka, Yaba, Lagos, Nigeria</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-white/40" />
              <span>+234 707 119 7950</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-white/40" />
              <span>invest@zyronproperties.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-6 text-lg">Newsletter</h5>
          <p className="text-white/60 mb-4 text-sm">Get exclusive investment opportunities delivered to your inbox.</p>
          <form className="space-y-3">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30"
            />
            <button className="w-full bg-brand-white text-brand-blue py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
        <p>© 2026 Zyron Properties. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-1">Sitemap <ExternalLink className="w-3 h-3" /></a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [selectedPost, setSelectedPost] = useState<any>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Hero />
              <ProjectMavora />
              <ShortletManagement />
              <Blog onSelectPost={setSelectedPost} />
            </motion.div>
          ) : (
            <motion.div
              key="blog-post"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <BlogPostView 
                post={selectedPost} 
                onBack={() => setSelectedPost(null)} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
