import styled from "styled-components";

export const Title = styled.header`
    text-align: center;
    font-size: 40px;
    margin-bottom: 20px;
    background-color: ${({theme}) => theme.colors.chatamsBlue};
    color: ${({theme}) => theme.colors.white};
    padding: 10px;
    border-radius: 5px;
    margin: 0;
`;