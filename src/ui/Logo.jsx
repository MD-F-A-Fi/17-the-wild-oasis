import styled from "styled-components";
import {useDarkMode} from "../contexts/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {


    const {isDarkMode} = useDarkMode();

    const src = isDarkMode ? '/imgs/logo-dark.png' : 'logo-light.png';

  return (
    <StyledLogo>
      <Img src="/imgs/logo-light.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;