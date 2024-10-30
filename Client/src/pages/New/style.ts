import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: grid;
    grid-template-rows: 100px 1fr;
    grid-template-areas:
        'header'
        'content';
`;

export const Content = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    overflow-y: auto;
    
    header {
        width: 40%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 1rem;

        h1 {
            font-family: ${({ theme }) => theme.FONTS.PRIMARY};
            color: ${({ theme }) => theme.COLORS.GREEN};
            font-size: 35px;
            font-weight: 700;
        }

        a {
            color: ${({ theme }) => theme.COLORS.CREAM};
            text-decoration: none;
            font-size: 22px;
            font-weight: 600;
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 40%;

    label {
        display: flex;
        flex-direction: column;

        font-family: ${({ theme }) => theme.FONTS.PRIMARY};
        font-size: 18px;
        color: ${({ theme }) => theme.COLORS.CREAM};
        margin: .5rem 0;

        input {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
            border: none;
            padding: .5rem;
            font-size: 16px;
            margin-top: .3rem;
            color: ${({ theme }) => theme.COLORS.CREAM};

            &:focus {
                outline: none;
                border: none;
            }
        }
    }
`;

export const ButtonAdd = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.GREEN};
    color: ${({ theme }) => theme.COLORS.CREAM};
    font-family: ${({ theme }) => theme.FONTS.PRIMARY};
    font-size: 20px;
    font-weight: 600;
    padding: .5rem;
    border: none;
    margin-top: 1rem;
    cursor: pointer;

    &:hover {
        filter: brightness(1.2);
        transition: all .5s;
    }
`;