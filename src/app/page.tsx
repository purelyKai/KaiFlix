import Hero from "@/components/home/Hero";
import ContentRow from "@/components/home/ContentRow";
import { getPopularMovies, getPopularShows } from "@/lib/api";
import { Content } from "@/lib/types";

export default async function Home() {
  const popularMovies: Content[] = await getPopularMovies();
  const popularShows: Content[] = await getPopularShows();

  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <ContentRow
          title="Popular Movies"
          contents={popularMovies}
          seeMoreLink="/movies"
        />
        <ContentRow
          title="Popular TV Shows"
          contents={popularShows}
          seeMoreLink="/shows"
        />
      </div>
    </>
  );
}
