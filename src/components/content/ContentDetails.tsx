"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import SeasonSelector from "./SeasonSelector";
import { Content } from "@/lib/types";

const ContentDetails: React.FC<Partial<Content>> = ({
  title = "",
  overview = "",
  poster_path = "",
  genres = [],
  media_type = "movie",
  seasons,
}) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={poster_path || "/placeholder.svg"}
            alt={title}
            width={300}
            height={450}
            className="rounded-lg"
          />
        </motion.div>
        <motion.div
          className="md:w-2/3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
          <p className="text-gray-400 mb-4">{genres.join(", ")}</p>
          {overview && <p className="text-white mb-6">{overview}</p>}
          <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300 flex items-center gap-2">
            <Play size={20} />
            {media_type === "movie" ? "Watch Movie" : "Watch First Episode"}
          </button>
          {media_type === "tv" && seasons && (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-white mb-2">
                Seasons
              </h2>
              <SeasonSelector seasons={seasons} />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ContentDetails;
