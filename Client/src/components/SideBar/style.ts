import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.aside`
    grid-area: sidebar;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Title = styled.div`
    height: 98px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.GRAY_100};

    h1 {
        font-family: ${({ theme }) => theme.FONTS.PRIMARY};
        font-weight: 600;
        font-size: 30px;
        color: ${({ theme }) => theme.COLORS.GREEN};
    }
`;

export const Navigation = styled.nav`
    text-align: center;
    padding-top: 2rem;

    > ul li {
        margin-bottom: 2rem;
    }
`;

export const StyledLinkNav = styled(Link)`
    font-family: ${({ theme }) => theme.FONTS.PRIMARY};
    font-weight: 400;
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.CREAM};
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.COLORS.GREEN};
        transition: all .5s;
    }
`;

export const CreateButton = styled(Link)`
    height: 100px;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.GREEN};
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    h2 {
        font-family: ${({ theme }) => theme.FONTS.PRIMARY};
        font-weight: 500;
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.CREAM};
    }

    > svg {
        font-size: 30px;
        color: ${({ theme }) => theme.COLORS.CREAM};
        margin-right: 10px;
    }
`;