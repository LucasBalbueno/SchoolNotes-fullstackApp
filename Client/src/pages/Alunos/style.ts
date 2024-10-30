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
`;

export const TableContainer = styled.div`
    max-height: calc(60vh);
    overflow-y: auto;
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

                div {
                    svg {
                        cursor: pointer;
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
`;