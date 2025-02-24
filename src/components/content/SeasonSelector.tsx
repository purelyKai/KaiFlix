"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface SeasonSelectorProps {
  seasons: number;
}

const SeasonSelector: React.FC<SeasonSelectorProps> = ({ seasons }) => {
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-800 text-white py-2 px-4 rounded flex items-center justify-between w-full"
      >
        <span>Season {selectedSeason}</span>
        <ChevronDown size={20} />
      </button>
      {isOpen && (
        <div className="absolute mt-1 w-full bg-gray-800 rounded shadow-lg z-10">
          {Array.from({ length: seasons }, (_, i) => (
            <button
              key={i}
              onClick={() => {
                setSelectedSeason(i + 1);
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-700 text-white"
            >
              Season {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SeasonSelector;
