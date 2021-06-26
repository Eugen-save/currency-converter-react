import styled from "styled-components";

export const Label = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
        width: 100%;
        font-size: smaller;
}
`;

export const Text = styled.span`
    width: 100%;
    max-width: 200px;
    display:inline-block;
    margin-left: 5px;
`;

export const FormSelect = styled.select`
    padding: 10px;
    text-align: left;
    max-width: 350px;
    width: 100%;
    border-radius: 5px;
`;

export const FormInput = styled.input`
    padding: 10px;
    text-align: left;
    max-width: 350px;
    width: 100%;
    border-radius: 5px;
`;