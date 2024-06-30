import {Outlet} from "react-router-dom"
import Header from "./Header"
import SideBar from "./SideBar"
import styled from "styled-components"
import {DarkModeProvider} from "../contexts/DarkModeContext"

const StyledAppLayout = styled.div`
    display: grid;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
`

const Main = styled.main`
    padding: 4rem 4.8rem 6.4rem,
    background-color: var(--color-gray-50);
     overflow: scroll;
`

const Container = styled.div`
    max-width: 120rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`

const AppLayout = () => {
    return (
        <DarkModeProvider >
            <StyledAppLayout>
                <Header/>
                <SideBar/>
                <Main>
                    <Container>
                        <Outlet/>
                    </Container>
                </Main>
            </StyledAppLayout>
        </DarkModeProvider>
    )
}

export default AppLayout
