import { Content, SearchResult } from "@/lib/types";

// Mock data
const mockMovies: Content[] = [
  {
    id: "1",
    title: "Inception",
    overview:
      "A thief who enters the dreams of others to steal secrets from their subconscious.",
    poster_path: "/placeholder.jpg",
    backdrop_path: "/inception-backdrop.jpg",
    genres: ["Action", "Sci-Fi", "Thriller"],
    media_type: "movie",
    release_date: "2010-07-16",
    vote_average: 8.8,
  },
  {
    id: "2",
    title: "The Shawshank Redemption",
    overview:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster_path: "/placeholder.jpg",
    backdrop_path: "/shawshank-backdrop.jpg",
    genres: ["Drama"],
    media_type: "movie",
    release_date: "1994-09-23",
    vote_average: 9.3,
  },
  {
    id: "3",
    title: "The Dark Knight",
    overview:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster_path: "/placeholder.jpg",
    backdrop_path: "/dark-knight-backdrop.jpg",
    genres: ["Action", "Crime", "Drama"],
    media_type: "movie",
    release_date: "2008-07-18",
    vote_average: 9.0,
  },
];

const mockShows: Content[] = [
  {
    id: "4",
    title: "Breaking Bad",
    overview:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    poster_path: "/placeholder.jpg",
    backdrop_path: "/breaking-bad-backdrop.jpg",
    genres: ["Crime", "Drama", "Thriller"],
    media_type: "tv",
    first_air_date: "2008-01-20",
    vote_average: 9.5,
    seasons: 5,
  },
  {
    id: "5",
    title: "Stranger Things",
    overview:
      "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.",
    poster_path: "/placeholder.jpg",
    backdrop_path: "/stranger-things-backdrop.jpg",
    genres: ["Drama", "Fantasy", "Horror"],
    media_type: "tv",
    first_air_date: "2016-07-15",
    vote_average: 8.7,
    seasons: 4,
  },
  {
    id: "6",
    title: "The Crown",
    overview:
      "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
    poster_path: "/placeholder.jpg",
    backdrop_path: "/the-crown-backdrop.jpg",
    genres: ["Drama", "History"],
    media_type: "tv",
    first_air_date: "2016-11-04",
    vote_average: 8.7,
    seasons: 5,
  },
];

export async function getPopularMovies(): Promise<Content[]> {
  return mockMovies;
}

export async function getPopularShows(): Promise<Content[]> {
  return mockShows;
}

export async function getContentDetails(
  id: string,
  mediaType: "movie" | "tv"
): Promise<Content | null> {
  const allContent = [...mockMovies, ...mockShows];
  return (
    allContent.find(
      (content) => content.id === id && content.media_type === mediaType
    ) || null
  );
}

export async function searchContent(query: string): Promise<SearchResult> {
  const allContent = [...mockMovies, ...mockShows];
  const results = allContent.filter(
    (content) =>
      content.title.toLowerCase().includes(query.toLowerCase()) ||
      content.overview?.toLowerCase().includes(query.toLowerCase())
  );

  return {
    page: 1,
    results,
    total_pages: 1,
    total_results: results.length,
  };
}

export async function getContentByGenre(genre: string): Promise<Content[]> {
  const allContent = [...mockMovies, ...mockShows];
  return allContent.filter((content) =>
    content.genres.some((g) => g.toLowerCase() === genre.toLowerCase())
  );
}

// Commented out original code
/*
const API_KEY = process.env.TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

async function fetchFromTMDB(endpoint: string): Promise<any> {
  const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=en-US`)
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  return response.json()
}

export async function getPopularMovies(): Promise<Content[]> {
  const data = await fetchFromTMDB('/movie/popular')
  return data.results.map((movie: any) => ({
    id: movie.id.toString(),
    title: movie.title,
    poster_path: movie.poster_path,
    genres: [], // We'll need to fetch genres separately
    media_type: 'movie'
  }))
}

export async function getPopularShows(): Promise<Content[]> {
  const data = await fetchFromTMDB('/tv/popular')
  return data.results.map((show: any) => ({
    id: show.id.toString(),
    title: show.name,
    poster_path: show.poster_path,
    genres: [], // We'll need to fetch genres separately
    media_type: 'tv'
  }))
}

export async function getContentDetails(id: string, mediaType: 'movie' | 'tv'): Promise<Content> {
  const data = await fetchFromTMDB(`/${mediaType}/${id}`)
  return {
    id: data.id.toString(),
    title: mediaType === 'movie' ? data.title : data.name,
    overview: data.overview,
    poster_path: data.poster_path,
    genres: data.genres.map((genre: any) => genre.name),
    media_type: mediaType,
    seasons: mediaType === 'tv' ? data.number_of_seasons : undefined
  }
}

export async function searchContent(query: string): Promise<Content[]> {
  const data = await fetchFromTMDB(`/search/multi?query=${encodeURIComponent(query)}`)
  return data.results
    .filter((item: any) => item.media_type === 'movie' || item.media_type === 'tv')
    .map((item: any) => ({
      id: item.id.toString(),
      title: item.media_type === 'movie' ? item.title : item.name,
      poster_path: item.poster_path,
      genres: [], // We'll need to fetch genres separately
      media_type: item.media_type
    }))
}

export async function getContentByGenre(genre: string): Promise<Content[]> {
  const movieData = await fetchFromTMDB(`/discover/movie?with_genres=${getGenreId(genre)}`)
  const tvData = await fetchFromTMDB(`/discover/tv?with_genres=${getGenreId(genre)}`)
  
  const movies = movieData.results.map((movie: any) => ({
    id: movie.id.toString(),
    title: movie.title,
    poster_path: movie.poster_path,
    genres: [genre],
    media_type: 'movie'
  }))

  const shows = tvData.results.map((show: any) => ({
    id: show.id.toString(),
    title: show.name,
    poster_path: show.poster_path,
    genres: [genre],
    media_type: 'tv'
  }))

  return [...movies, ...shows]
}

function getGenreId(genre: string): number {
  const genreMap: { [key: string]: number } = {
    action: 28,
    comedy: 35,
    drama: 18,
    // Add more genres as needed
  }
  return genreMap[genre.toLowerCase()] || 0
}
*/
