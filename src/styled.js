import { createGlobalStyle } from "styled-components";
import background from "./background.png"

export const GlobalStyle = createGlobalStyle`
body{
    background-image: url("${background}");
    background-attachment: fixed;

    @media (max-width: 767px) {
        background-position: center;
        background-size: 400px;
    }
}
`;