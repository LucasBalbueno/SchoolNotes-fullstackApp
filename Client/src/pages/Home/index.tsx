import { Container , Content } from './style'

import { SideBar } from '../../components/SideBar'
import { Header } from '../../components/Header'

export function Home () {
    return (
        <Container>
            <SideBar />

            <Header />

            <Content />
        </ Container>
    )
}