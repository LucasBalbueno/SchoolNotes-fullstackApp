import { Container , Content } from './style'
import { useState } from 'react'

import { SideBar } from '../../components/SideBar'
import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'

export function Home () {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Container>
            <SideBar isOpen={isSidebarOpen} />

            <Header setIsSidebarOpen={toggleSidebar} isOpen={isSidebarOpen} />

            <Content isOpen={isSidebarOpen}>
                <Outlet />
            </Content>
        </ Container>
    )
}