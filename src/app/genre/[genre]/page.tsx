import { Suspense } from "react";
import ContentGrid from "@/components/content/ContentGrid";
import { getContentByGenre } from "@/lib/api";

export default async function GenrePage({
  params,
}: {
  params: { genre: string };
}) {
  const contents = await getContentByGenre(params.genre);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8 capitalize">
        {params.genre} Movies and Shows
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ContentGrid contents={contents} />
      </Suspense>
    </div>
  );
}
