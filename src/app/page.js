import { Carousel, PopularGames, MenuBar } from "../components/pages/home";

export default function Home() {
  const baseUrl = process.env.BASE_URL;
  const apiKey = process.env.API_KEY;
  return (
    <>
      <MenuBar />
      <Carousel />
      <PopularGames baseUrl={baseUrl} apiKey={apiKey} />
    </>
  );
}
