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

    @media only screen and (max-width: 1230px) {
        width: 70%;
    }

    @media only screen and (max-width: 800px) {
        position: absolute;
        left: 0;
    }
`;

export const TableContainer = styled.div`
    max-height: 60vh;
    overflow-y: auto;

    @media only screen and (max-width: 1230px) {
        width: 100%;
    }

    /* @media only screen and (max-width: 1230px) {
        width: 60%;
    } */
`;

export const TableAlunos = styled.table`
    color: ${({ theme }) => theme.COLORS.CREAM};
    font-size: 16px;
    font-family: ${({ theme }) => theme.FONTS.PRIMARY};
    
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

                button {
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    svg {
                        color: ${({ theme }) => theme.COLORS.RED};
                        font-size: 30px;
                    }
                }
            }

            td:last-child {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: .5rem;
            }

        }

    tr:nth-child(even) {
            background-color: ${({ theme }) => theme.COLORS.GREEN};
        }
    }

    @media only screen and (max-width: 1240px) {
            font-size: 16px;

            > thead {
            > tr {
                th {
                    padding: .4rem;
                }
            }
            > tbody {
                > tr {
                    td {
                        padding: .4rem;
        
                        button {
                            svg {
                                font-size: 25px;
                            }
                        }
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 1160px) {
        font-size: 15px;
    }

    @media only screen and (max-width: 1050px) {
        font-size: 13px;
    }

    @media only screen and (max-width: 970px) {
        font-size: 10px;

        > tbody {
            > tr {
                td {
                    button {
                        svg {
                            font-size: 15px;
                        }                        }
                }
            }
        }
    }
`;