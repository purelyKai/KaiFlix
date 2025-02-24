import { notFound } from "next/navigation";
import ContentDetails from "@/components/content/ContentDetails";
import { getContentDetails } from "@/lib/api";
import { Content } from "@/lib/types";

type Params = {
  type: string;
  id: string;
};

type Props = {
  params: Params;
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ContentPage({ params }: Props) {
  const mediaType = params.type === "movies" ? "movie" : "tv";
  const content: Content | null = await getContentDetails(params.id, mediaType);

  if (!content) {
    notFound();
  }

  return <ContentDetails {...content} />;
}
