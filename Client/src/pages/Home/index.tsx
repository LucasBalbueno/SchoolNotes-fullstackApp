import { Container , Content } from './style'

import { SideBar } from '../../components/SideBar'
import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'

export function Home () {
    return (
        <Container>
            <SideBar />

            <Header />

            <Content>
                <Outlet />
            </Content>
        </ Container>
    )
}