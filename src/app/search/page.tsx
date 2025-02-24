import { Suspense } from "react";
import ContentGrid from "@/components/content/ContentGrid";
import { searchContent } from "@/lib/api";
import { SearchResult } from "@/lib/types";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const query = searchParams.q;

  const searchResults: SearchResult = await searchContent(query);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">
        Search Results for &quot;{query}&quot;
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ContentGrid contents={searchResults.results} />
      </Suspense>
    </div>
  );
}
