import styled from "styled-components";

export const FormButton = styled.button`
    border: none;
    padding: 10px;
    box-shadow: 1px 1px 5px 0px hsl(208, 79%, 29%);
    border-radius: 5px;
    background-color: #0f4c81;
    color: #fff;
    transition: color 0.3s;
    width: 100%;

&:hover {
    background-color: hsl(208, 79%, 38%);
}

&:active {
    background-color: hsl(208, 79%, 45%);
}
`;