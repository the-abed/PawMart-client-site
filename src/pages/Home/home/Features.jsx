import React from "react";
import { motion } from "framer-motion";
import { FaPaw, FaSearch, FaShieldAlt, FaMoon, FaFilePdf, FaMobileAlt } from "react-icons/fa";

const features = [
  { icon: <FaPaw />, title: "List & Manage", desc: "Easily add, update, or delete your pet and product listings." },
  { icon: <FaSearch />, title: "Smart Filtering", desc: "Find exactly what you need with category filters and search." },
  { icon: <FaShieldAlt />, title: "Secure Access", desc: "Private routes and authentication keep your data safe." },
  { icon: <FaMoon />, title: "Custom Themes", desc: "Switch between Light, Dark, and Custom PawMart themes." },
  { icon: <FaFilePdf />, title: "PDF Exports", desc: "Export your order history to PDF with a single click." },
  { icon: <FaMobileAlt />, title: "Fully Responsive", desc: "A seamless experience on mobile, tablet, and desktop." },
];

const Features = () => {
  return (
    <section className="py-10 px-4 md:px-16 my-12 w-11/12 mx-auto">
      <div className="text-center mb-12">
        <p className="text-primary font-medium mb-2">Platform Highlights ⚡</p>
        <h2 className="text-3xl md:text-4xl font-bold text-secondary">Advanced Features for You</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
        {features.map((f, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="p-8 bg-base-300 rounded-2xl shadow hover:shadow-lg text-center"
          >
            <div className="text-4xl text-primary mb-4 flex justify-center">{f.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-secondary">{f.title}</h3>
            <p className="text-sm" style={{ color: "var(--color-text-primary)" }}>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;