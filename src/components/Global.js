"use client";

import { createGlobalStyle } from "styled-components";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default createGlobalStyle`
        *,
        *::before,
        *::after {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        ul {
          list-style: none;
        }
        a {
          text-decoration: none;
          &:visited,
          &:active,
          &:link {
            color: var(--text-primary);
          }
        }
        html {
          font-family: ${inter.style.fontFamily};
          font-size: 0.625em;
          --bg-primary: #191d20;
          --bg-secondary: #2c2f3a;
          --text-primary: #fff;
          --text-secondary: #aeaeae
        }
        body {
          font-size: 1.6rem;
          color: var(--text-primary);
          overflow-x: hidden;

        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        h1 {
          font-size: 3rem;
        }
        h2 {
          font-size: 2.5rem;
        }
        h3 {
          font-size: 2.1rem;
        }
        h4,
        h5,
        h6,
        button, p {
          font-size: 1.6rem;
        }
        .truncate {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 100%;
        }
        .game-name {
          margin: 1rem 0;
        }
        @media only screen and (max-width: 780px) {
          body {
            font-size: 1.4rem;
          }
          h1 {
            font-size: 2.5rem;
          }
          h2 {
            font-size: 2rem;
          }
          h3 {
            font-size: 1.8rem;
          }
          p {
            font-size: 1.4rem;
          }
        }
`;
