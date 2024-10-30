import styled from 'styled-components';

export const Container = styled.header<{ isOpen: boolean }>`
    ${({ isOpen }) => isOpen ? 'grid-area: header;' : 'width: 94vw;'}
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.GRAY_100};

    display: flex;
    align-items: center;
    gap: 2rem;
    padding-left: 5rem;
    
    button {
        display: none;
    }

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

    @media only screen and (max-width: 800px) {
    ${({ isOpen }) => isOpen ? 'grid-area: header;' : 'width: 94vw;'}
        button {
            display: flex;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;

            > svg {
                color: ${({ theme }) => theme.COLORS.GREEN};
                font-size: 2.5rem;
            }
        }

        img {
            display: none;
        }

        div {
            display: none;
        }
    }
`;