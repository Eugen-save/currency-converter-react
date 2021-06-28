import { createGlobalStyle } from "styled-components";
import background from "./background.png"

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body{
     font-family: 'Lato', sans-serif;
     font-weight: 400;
     font-size: 24px;
     color: #0f4c81;
     max-width: 900px;
     margin: 0 auto;
     padding: 0 20px;
     background-image: url("${background}");
     background-attachment: fixed;

    @media (max-width: 767px) {
        background-position: center;
        background-size: 400px;
    }
}
`;