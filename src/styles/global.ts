import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f2f0f5;
        --red: #e52e4d;
        --blue: #5429cc;
        --blue-light: #6933FF;
        --text-title: #363f5f;
        --text-body: #969Cb3;
        --shape: #fff;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        // se a tela do usuario for até 1080px
        @media (max-width: 1080px) {
            font-size: 93.75%; // 16px * 0.9375 = 15px
        }

        // se a tela do usuario for até 720px
        @media (max-width: 720px) {
            font-size: 87.5%; // 16px * 0.875 = 14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`