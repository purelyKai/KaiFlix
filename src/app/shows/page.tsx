import ContentGrid from "@/components/content/ContentGrid";
import { getPopularShows } from "@/lib/api";

export default async function ShowsPage() {
  const shows = await getPopularShows();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">Popular TV Shows</h1>
      <ContentGrid contents={shows} />
    </div>
  );
}
