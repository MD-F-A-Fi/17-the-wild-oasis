import styled from 'styled-components';

import Logo from './Logo'
import MainNav from './MainNav'



const StyledSidebar = styled.aside`
    padding: 3.2rem 2.4rem ;
    border-right: 1px solid var(--color-grey-100);
    background-color: var(--color-white-0);

    grid-row: 1/3;

    display:flex;
    flex-direction: column;
    gap: 3.2rem;
`


const SideBar = () => {
    return (
        <StyledSidebar as='aside'>
            <Logo/>
            <MainNav/>
        </StyledSidebar>
    )
}

export default SideBar
