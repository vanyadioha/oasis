"use client";

import { createGlobalStyle } from "styled-components";
import { Plus_Jakarta_Sans as PJSans } from "next/font/google";

const pjSans = PJSans({ subsets: ["latin"] });

export default createGlobalStyle`
        *,
        *::before,
        *::after {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          font-family: ${pjSans.style.fontFamily};
        }
        ul {
          list-style: none;
        }
        a {
          text-decoration: none;
        }
        html {
          font-size: 0.625em;
        }
        body {
          font-size: 1.6rem;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        button {
          font-size: 1.6rem;
        }
`;
