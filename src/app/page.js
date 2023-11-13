import {
  Carousel,
  PopularGames,
  MenuBar,
  Deals,
  Spotlight,
} from "../components/pages/home";

export default function Home() {
  const baseUrl = process.env.BASE_URL;
  const apiKey = process.env.API_KEY;
  return (
    <>
      <MenuBar />
      <Carousel />
      <PopularGames baseUrl={baseUrl} apiKey={apiKey} />
      <Deals />
      <Spotlight baseUrl={baseUrl} apiKey={apiKey} />
      {/* 
        Halloween specials for scary games
      */}
      {/* Featured Special game: Spiderman 2 maybe*/}
      {/* Most played, new releases, upcoming, most rated, trending(if any)*/}
      {/* 
          Platform Spotlight: Playstation
      */}
      {/* Browse by category */}
      {/* Browse/explore ALL Games */}
      {/* News if any */}
    </>
  );
}
