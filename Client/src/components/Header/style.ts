import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.GRAY_100};

    display: flex;
    align-items: center;
    gap: 2rem;
    padding-left: 10rem;

    img {
        width: 60px;
        border-radius: 50%;
    }

    div {
        font-family: ${({ theme }) => theme.FONTS.PRIMARY};
        font-size: 25px;
        
        p {
            font-size: 17px;
            color: ${({ theme }) => theme.COLORS.CREAM};
            margin-bottom: .3rem;
        }  
        
        h3 {
            color: ${({ theme }) => theme.COLORS.GREEN};
        }
    }
`;