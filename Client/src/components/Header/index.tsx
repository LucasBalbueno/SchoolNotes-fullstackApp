import { Container } from './style'

import iconProfile from '../../assets/iconProfile.jpg'

export function Header() {
    return (
        <Container>
            <img src={iconProfile} />
            <div>
                <p>Bem vindo,</p>
                <h3>Professor Carlos</h3>
            </div>
        </Container>
    )
}