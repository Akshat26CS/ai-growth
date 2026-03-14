import React from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";

interface Props {
  closeForm: () => void;
}

export default function ContactForm({ closeForm }: Props) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass-card w-[90%] max-w-lg p-8 relative"
      >
        
        {/* Close Button */}
        <button
          onClick={closeForm}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">
          Book Your Free AI Demo
        </h2>

        <form className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Your Name"
            className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none"
          />

          <input
            type="text"
            placeholder="Business Type"
            className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none"
          />

          <textarea
            placeholder="Tell us about your business"
            rows={4}
            className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:outline-none"
          />

          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 py-3 rounded-lg font-semibold hover:opacity-90"
          >
            Book Demo
          </button>

        </form>

      </motion.div>
    </div>
  );
}