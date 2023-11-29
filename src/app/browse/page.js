import { Browse as BrowseGames } from "@/components/pages/browse";

export default function Browse() {
  const baseUrl = process.env.BASE_URL;
  const apiKey = process.env.API_KEY;
  return <BrowseGames baseUrl={baseUrl} apiKey={apiKey} />;
}
