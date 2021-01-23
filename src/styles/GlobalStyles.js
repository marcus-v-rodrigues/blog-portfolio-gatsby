import { createGlobalStyle } from "styled-components"
import Fonts from "./fonts"

const GlobalStyles = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
    */

    ${Fonts}

    :root {
        --dark-navy: #020c1b;
        --navy: #0a192f;
        --light-navy: #112240;
        --lightest-navy: #233554;
        --navy-shadow: rgba(2, 12, 27, 0.7);
        --white: #e6f1ff;
        --green: #64ffda;
        --green-tint: rgba(100, 255, 218, 0.1);
        --dark-slate: #8892b0;
        --slate: #a8b2d1;
        --light-slate: #ccd6f6;
        --purple: #8a2be2;
        --light-purple: #7d1dd6;
        --font-sans: "Montserrat", "Poppins", -apple-system, sans-serif;
        --font-mono: "Space Mono", -apple-system, monospace;
    }


    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
    display: block;
    }
    body {
    line-height: 1;
    }
    ol, ul {
    list-style: none;
    }
    blockquote, q {
    quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
    content: '';
    content: none;
    }
    table {
    border-collapse: collapse;
    border-spacing: 0;
    }
    * {
    box-sizing: border-box;
    }

    body {
    line-height: 1;
    font-size: 100%;
    font-family: var(--font-sans);
    }
    img {
    display: block;
    width: 100%;
    height: auto;
    }
`
export default GlobalStyles