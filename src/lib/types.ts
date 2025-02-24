// src/types.ts

export interface Content {
  id: string;
  title: string;
  overview?: string;
  poster_path?: string;
  backdrop_path?: string;
  genres: string[];
  media_type: "movie" | "tv";
  release_date?: string;
  first_air_date?: string;
  vote_average?: number;
  seasons?: number;
}

export interface Season {
  id: number;
  name: string;
  season_number: number;
  episode_count: number;
}

export interface Episode {
  id: number;
  name: string;
  episode_number: number;
  season_number: number;
  overview: string;
  still_path?: string;
  air_date?: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface SearchResult {
  page: number;
  results: Content[];
  total_pages: number;
  total_results: number;
}

export interface VideoSource {
  url: string;
  quality: string;
}

export interface StreamingData {
  sources: VideoSource[];
  subtitles: {
    language: string;
    url: string;
  }[];
}
