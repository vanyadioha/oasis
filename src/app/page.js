import {
  Carousel,
  PopularGames,
  MenuBar,
  Deals,
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
      {/* 
          featured: New call of duty battle pass
          featured: Mk1 kombat pack
          featured: fc23 new campaign
      */}
      {/* Hottest games out rn */}
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
