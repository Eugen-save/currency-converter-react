import styled from "styled-components";

export const FormButton = styled.button`
    border: none;
    padding: 10px;
    box-shadow: 1px 1px 5px 0px ${({theme}) => theme.colors.chatamsBlue};
    border-radius: 5px;
    background-color: ${({theme}) => theme.colors.chatamsBlue};
    color: ${({theme}) => theme.colors.white};
    transition: color 0.3s;
    width: 100%;

&:hover {
    filter: brightness(110%);
}

&:active {
    filter: brightness(120%);
}
`;