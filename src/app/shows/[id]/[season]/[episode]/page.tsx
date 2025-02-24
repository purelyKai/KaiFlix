import { notFound } from "next/navigation";
import VideoPlayer from "@/components/content/VideoPlayer";
import { getContentDetails } from "@/lib/api";

export default async function EpisodePage({
  params,
}: {
  params: { id: string; season: string; episode: string };
}) {
  const show = await getContentDetails(params.id, "tv");

  if (!show) {
    notFound();
  }

  // In a real application, you would fetch the specific episode data here
  const episodeData = {
    title: `${show.title} - S${params.season}E${params.episode}`,
    description: "Episode description would go here.",
    videoUrl: "https://example.com/video.mp4", // This should be the actual video URL
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-4">
        {episodeData.title}
      </h1>
      <VideoPlayer videoUrl={episodeData.videoUrl} />
      <p className="text-white mt-4">{episodeData.description}</p>
    </div>
  );
}
