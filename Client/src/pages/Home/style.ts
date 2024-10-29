import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 100px 1fr;
    grid-template-areas:
        'sidebar header'
        'sidebar content';
`;

export const Content = styled.main`
    grid-area: content;
    /* background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800}; */
`;