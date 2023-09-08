import fifalogo from "../assets/carousel assets/logo/fifa.png";
import gowrlogo from "../assets/carousel assets/logo/gowr.png";
import gtavlogo from "../assets/carousel assets/logo/gtav.png";
import hfwlogo from "../assets/carousel assets/logo/hfw.png";
import smmlogo from "../assets/carousel assets/logo/smm.png";
import tloulogo from "../assets/carousel assets/logo/tlou.png";
import fifapix from "../assets/carousel assets/pix/fifa.png";
import gowrpix from "../assets/carousel assets/pix/gowr.png";
import gtavpix from "../assets/carousel assets/pix/gtav.png";
import hfwpix from "../assets/carousel assets/pix/hfw.png";
import smmpix from "../assets/carousel assets/pix/smm.png";
import tloupix from "../assets/carousel assets/pix/tlou.png";
import fifawp from "../assets/carousel assets/wp/fifa.jpg";
import gowrwp from "../assets/carousel assets/wp/gowr.jpg";
import gtavwp from "../assets/carousel assets/wp/gtav.jpg";
import hfwwp from "../assets/carousel assets/wp/hfw.png";
import smmwp from "../assets/carousel assets/wp/smm.jpg";
import tlouwp from "../assets/carousel assets/wp/tlou.jpg";

export const carouselConfig = [
  {
    name: "FIFA 23",
    logo: fifalogo,
    pix: fifapix,
    bg: fifawp,
  },
  {
    name: "God Of War: Ragnarok",
    logo: gowrlogo,
    pix: gowrpix,
    bg: gowrwp,
  },
  {
    name: "Grand Theft Auto V",
    logo: gtavlogo,
    pix: gtavpix,
    bg: gtavwp,
  },
  {
    name: "Horizon: Forbidden West",
    logo: hfwlogo,
    pix: hfwpix,
    bg: hfwwp,
  },
  {
    name: "Spider-Man: Miles Morales",
    logo: smmlogo,
    pix: smmpix,
    bg: smmwp,
  },
  {
    name: "The Last of Us Part II",
    logo: tloulogo,
    pix: tloupix,
    // bg: tlouwp,
    bg: "../src/assets/carousel assets/wp/tlou.jpg",
  },
];
