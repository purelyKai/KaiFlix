"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Hero = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/search?q=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Unlimited movies and TV shows
        </motion.h1>
        <motion.form
          onSubmit={handleSearch}
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for movies or TV shows"
            className="w-full max-w-xl px-4 py-3 rounded-l-md focus:outline-none text-black"
          />
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 rounded-r-md hover:bg-red-700 transition duration-300"
          >
            Search
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Hero;
