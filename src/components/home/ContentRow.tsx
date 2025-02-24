"use client";

import Link from "next/link";
import ContentCard from "./ContentCard";
import { motion } from "framer-motion";
import { Content } from "@/lib/types";

interface ContentRowProps {
  title: string;
  contents: Content[];
  seeMoreLink: string;
}

const ContentRow: React.FC<ContentRowProps> = ({
  title,
  contents,
  seeMoreLink,
}) => {
  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <Link
          href={seeMoreLink}
          className="text-sm text-gray-400 hover:text-white"
        >
          See more
        </Link>
      </div>
      <motion.div
        className="flex space-x-4 overflow-x-auto pb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {contents.map((content) => (
          <ContentCard key={content.id} {...content} />
        ))}
      </motion.div>
    </div>
  );
};

export default ContentRow;
