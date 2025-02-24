import ContentGrid from "@/components/content/ContentGrid";
import { getPopularMovies } from "@/lib/api";

export default async function MoviesPage() {
  const movies = await getPopularMovies();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">Popular Movies</h1>
      <ContentGrid contents={movies} />
    </div>
  );
}
