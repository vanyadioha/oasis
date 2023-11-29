import { GamePage as GameDetails } from "@/components/pages/games/GamePage";
export default function GamePage({ params: { slug } }) {
  const baseUrl = process.env.BASE_URL;
  const apiKey = process.env.API_KEY;
  return <GameDetails slug={slug} baseUrl={baseUrl} apiKey={apiKey} />;
}
