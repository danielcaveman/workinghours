import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
    }

    body {
        box-sizing: border-box;
    }

    .ReactModal__Content {
        max-width: 50rem;
        margin: 30vh auto;
    }

    .ReactModal__Overlay {
        background-color: rgb(40 40 40 / 75%) !important;
    }
`;
