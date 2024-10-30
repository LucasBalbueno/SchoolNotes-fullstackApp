import { Container, Title, Navigation, StyledLinkNav, CreateButton } from './style'
import { FiPlus } from 'react-icons/fi';

interface SideBarProps {
    isOpen: boolean;
}

export function SideBar({ isOpen }: SideBarProps) {
    console.log(isOpen)

    return (
        <Container className={`${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <Title>
                <h1>SchoolNotes</h1>
            </Title>

            <Navigation>
                <ul>
                    <li>
                        <StyledLinkNav to="">Visão Geral</StyledLinkNav>
                    </li>
                    <li>
                        <StyledLinkNav to="alunos">Alunos</StyledLinkNav>
                    </li>
                </ul>
            </Navigation>

            <CreateButton to="/new">
                <FiPlus />
                <h2>Adicionar Aluno</h2>
            </CreateButton>
        </Container>
    )
}