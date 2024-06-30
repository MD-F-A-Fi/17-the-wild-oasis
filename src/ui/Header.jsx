import styled from "styled-components"
import LogOut from "../features/authentication/LogOut"
import HeaderMenu from "./HeaderMenu"
import UserAvatar from '../features/authentication/UserAvatar'

const StyledHeader = styled.header`
    background-color: var(--color-white-0);
    padding: 1.2rem 4.8rem;
    border-bottom: 1px solid var(--color-grey-100);

    display: flex;
    gap: 2.4rem;
    justify-content: flex-end;
`

const Header = () => {
    return (
        <StyledHeader as='header'>
            <UserAvatar/>
            <HeaderMenu/>
        </StyledHeader>
    )
}

export default Header
