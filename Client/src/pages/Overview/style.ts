import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    h1 {
        font-family: ${({ theme }) => theme.FONTS.PRIMARY};
        font-size: 30px;
        color: ${({ theme }) => theme.COLORS.CREAM};
        margin-bottom: 4rem;
        text-transform: uppercase;
        font-weight: 700;
    }

    @media only screen and (max-width: 800px) {
        width: 95vw;
        position: absolute;
        left: -2rem;
    }
`;

export const DashBoard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
`;

export const AverageGrade = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 1rem;
        margin: .5rem;
        background-color: ${({ theme }) => theme.COLORS.GREEN};
        border-radius: 10px;
        color: ${({ theme }) => theme.COLORS.CREAM};
        
        h2 {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 1rem;
        }
        
        p {
            font-size: 30px;
        }
    }

    @media only screen and (max-width: 900px) {
        div {
            padding: .5rem;
            margin: .3rem;
            
            h2 {
                font-size: 17px;
                margin-bottom: .5rem;
            }
            
            p {
                font-size: 23px;
            }
        }
    }
`;

export const ContainerLists = styled.div`
    width: 75%;
    overflow-x: auto;
    height: 25%;
    overflow-y: auto;
    position: absolute;
    top: 55%;

    @media only screen and (max-width: 1450px) {
        top: 70%;
    }

    @media only screen and (max-width: 1000px) {
        width: 50%;
        top: 65%;
    }

    @media only screen and (max-width: 900px) {
        width: 70%;
        top: 60%;
        height: 40%;
    }

    @media only screen and (max-width: 800px) {
        width: 70%;
        top: 120%;
        height: 40%;
    }
`;

export const ListAlunos = styled.div`
    display: flex;
    gap: 3rem;

    @media only screen and (max-width: 750px) {
        flex-wrap: wrap;
    }
    
    div {
        display: flex;
        flex-direction: column;
        text-align: center;

        h2 {
            font-family: ${({ theme }) => theme.FONTS.PRIMARY};
            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.CREAM};
        }
    }

    table {
        color: ${({ theme }) => theme.COLORS.CREAM};
        font-size: 16px;
        font-family: ${({ theme }) => theme.FONTS.PRIMARY};
        margin: 1rem;
        width: 15rem;
            
        > thead {
            > tr {
                th {
                    padding: .7rem;
                    text-transform: uppercase;
                    font-weight: 600;
                    border: 1px solid ${({ theme }) => theme.COLORS.GREEN};
                    color: ${({ theme }) => theme.COLORS.GREEN};
                }
            }
        }
            
        > tbody {
            > tr {
                td {
                    padding: .7rem;
                    text-align: center;
                    vertical-align: middle;
                    border: 1px solid ${({ theme }) => theme.COLORS.GREEN};
                }
            }
        }
    }
`;