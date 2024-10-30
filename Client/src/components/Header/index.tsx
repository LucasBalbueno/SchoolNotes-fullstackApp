import { Container } from './style'
import { IoMenu } from "react-icons/io5";

import iconProfile from '../../assets/iconProfile.jpg'

interface HeaderProps {
    setIsSidebarOpen: () => void;
    isOpen: boolean;
}

export function Header({ setIsSidebarOpen, isOpen }: HeaderProps) {
    return (
        <Container isOpen={isOpen}>
            <button onClick={setIsSidebarOpen}>
                <IoMenu />
            </button>
            <img src={iconProfile} />
            <div>
                <p>Bem vindo,</p>
                <h3>Professor Carlos</h3>
            </div>
        </Container>
    )
}