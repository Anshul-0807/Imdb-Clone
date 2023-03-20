import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material';
import { logoURL } from '../../constants/constant';




const StyledToolBar = styled(Toolbar)`
    background: #121212;
    min-height: 56px !important;
    padding: 0 115px !important;
`;

const Logo = styled("img")({
    width : 64
})

const Header = () => {
  return (
    <AppBar>
        <StyledToolBar>
          <Logo src={logoURL} alt="logo" />
        </StyledToolBar>
    </AppBar>
  )
}

export default Header;