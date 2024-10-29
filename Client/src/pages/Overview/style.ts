import styled from "styled-components";

export const Container = styled.div`
    h1 {
        font-family: ${({ theme }) => theme.FONTS.PRIMARY};
        font-size: 30px;
        color: white;
    }
`;