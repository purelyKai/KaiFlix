import { useState, useEffect } from "react";
import { Content } from "@/lib/types";
import { getContentDetails } from "@/lib/api";

export function useContentData(id: string, mediaType: "movie" | "tv") {
  const [content, setContent] = useState<Content | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getContentDetails(id, mediaType);
        setContent(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An error occurred"));
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [id, mediaType]);

  return { content, isLoading, error };
}
