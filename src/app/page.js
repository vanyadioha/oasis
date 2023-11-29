import {
  Carousel,
  PopularGames,
  Deals,
  Spotlight,
  New,
  Genres,
} from "../components/pages/home";

export default function Home() {
  const baseUrl = process.env.BASE_URL;
  const apiKey = process.env.API_KEY;
  return (
    <>
      <Carousel />
      <PopularGames baseUrl={baseUrl} apiKey={apiKey} />
      <Deals />
      <Spotlight baseUrl={baseUrl} apiKey={apiKey} />
      <New baseUrl={baseUrl} apiKey={apiKey} />
      <Genres baseUrl={baseUrl} apiKey={apiKey} />
    </>
  );
}
