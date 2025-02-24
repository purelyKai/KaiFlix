"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Content } from "@/lib/types";

const ContentCard: React.FC<Content> = ({
  id,
  title,
  poster_path,
  genres,
  media_type,
}) => {
  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/${media_type === "movie" ? "movies" : "shows"}/${id}`}>
        <Image
          src={poster_path || "/placeholder.svg"}
          alt={title}
          width={200}
          height={300}
          className="rounded-md"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="bg-red-600 rounded-full p-3"
          >
            <Play className="text-white" size={24} />
          </motion.div>
        </div>
      </Link>
      <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-400">{genres.join(", ")}</p>
    </motion.div>
  );
};

export default ContentCard;
