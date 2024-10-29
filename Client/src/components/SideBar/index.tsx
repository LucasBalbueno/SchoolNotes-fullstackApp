import { Container, Title, Navigation, StyledLinkNav, CreateButton } from './style'
import { FiPlus } from 'react-icons/fi';

export function SideBar() {
    return (
        <Container>
            <Title>
                <h1>SchoolNotes</h1>
            </Title>

            <Navigation>
                <ul>
                    <li>
                        <StyledLinkNav href="">Overboard</StyledLinkNav>
                    </li>
                    <li>
                        <StyledLinkNav href="">Alunos</StyledLinkNav>
                    </li>
                </ul>
            </Navigation>

            <CreateButton>
                <FiPlus />
                <h2>Adicionar Aluno</h2>
            </CreateButton>
        </Container>
    )
}