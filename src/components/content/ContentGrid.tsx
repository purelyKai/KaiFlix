"use client";

import ContentCard from "@/components/home/ContentCard";
import { motion } from "framer-motion";
import { Content } from "@/lib/types";

interface ContentGridProps {
  contents: Content[];
}

const ContentGrid: React.FC<ContentGridProps> = ({ contents }) => {
  return (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {contents.map((content) => (
        <ContentCard key={content.id} {...content} />
      ))}
    </motion.div>
  );
};

export default ContentGrid;
