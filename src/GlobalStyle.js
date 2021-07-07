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
     color: ${({theme}) => theme.colors.chatamsBlue};
     max-width: 900px;
     margin: 0 auto;
     padding: 0 20px;
     background-image: url("${background}");
     background-attachment: fixed;
     margin-top: 50px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        background-position: center;
        background-size: 400px;
    }
}
`;