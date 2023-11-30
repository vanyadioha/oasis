//Game deals
import ryse from "../../public/assets/deals/ryse.JPG";
import daysgone from "../../public/assets/deals/daysgone.jpg";
import farcry5 from "../../public/assets/deals/farcry5.JPG";
import gears5 from "../../public/assets/deals/gears5.JPG";
//Explore Deals
import forza4 from "../../public/assets/deals/forza4.JPG";
import senua from "../../public/assets/deals/hellblade.JPG";
import sd from "../../public/assets/deals/sleepingdogs.JPG";
import uncharted from "../../public/assets/deals/uncharted.jpg";
// Explore Campaigns
import heroes from "../../public/assets/deals/heroesfc.JPG";
import kombat from "../../public/assets/deals/kombatpak.JPG";
import nicki from "../../public/assets/deals/nickicod.JPG";

export const gameDeals = [
  {
    name: "Ryse: Son of Rome",
    pix: ryse,
    old: 29.99,
    new: 19.99,
    slug: "ryse-son-of-rome",
  },
  {
    name: "Days Gone",
    pix: daysgone,
    old: 20.47,
    new: 18.99,
    slug: "days-gone",
  },
  {
    name: "Far Cry 5",
    pix: farcry5,
    old: 35.99,
    new: 30.99,
    slug: "far-cry-5",
  },
  {
    name: "Gears 5",
    pix: gears5,
    old: 20.99,
    new: 15.59,
    slug: "gears-5",
  },
];

export const exploreDeals = [
  {
    name: "Forza Horizon 4",
    pix: forza4,
    slug: "forza-horizon-4",
  },
  {
    name: "Hellblade: Senua's Sacrifice",
    pix: senua,
    slug: "hellblade-senuas-sacrifice",
  },
  {
    name: "Sleeping Dogs",
    pix: sd,
    slug: "sleeping-dogs",
  },
  {
    name: "Uncharted: The Nathan Drake Collection",
    pix: uncharted,
    slug: "uncharted-the-nathan-drake-collection",
  },
];
export const exploreCampaigns = [
  {
    name: "EA SPORTS FC 24",
    campaignName: "FUT Heroes: New icons for a new generation",
    pix: heroes,
    txt: "From Cult heroes to unsung legends, these players have all left their mark on the beautiful game and now, they are ready to join up with you on EA FC24.",
    slug: "ea-sports-fc-24",
  },
  {
    name: "Mortal Kombat 1",
    campaignName: "Kombat Pack 1: Expand your Kombat Roster",
    pix: kombat,
    txt: "Bring carnage to the world of Mortal Kombat with the new DLC warriors, Omni-man, Quan-chi and so on. Purchase the Kombat pack 1 (Available now),  to add them to your roster.",
    slug: "mortal-kombat-1-2023",
  },
  {
    name: "COD: Warzone 2.0",
    campaignName: "Old Enemies, New Alliances: Introducing the Queen",
    pix: nicki,
    txt: "Attention! Attention! Barbz do you read me? Add the new Nicki Minaj operator, emotes and various new weapons to your multiplayer and BR loadouts. Bring mayhem, dominate the competition and take all the glory!",
    slug: "call-of-duty-warzone-20",
  },
];
