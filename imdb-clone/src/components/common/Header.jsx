import React from 'react'
import {useState} from 'react';
import { AppBar, Toolbar, styled, Box, Typography , InputBase} from '@mui/material';
import { Menu, BookmarkAdd, ExpandMore} from '@mui/icons-material';

import { logoURL } from '../../constants/constant';

// component

import HeaderMenu from './HeaderMenu';



const StyledToolBar = styled(Toolbar)`
    background: #121212;
    min-height: 56px !important;
    padding: 0 115px !important;
    justify-content: space-between;
    & > * {
      padding: 16px;
    }
    & > div {
      display: flex;
      align-items: center;
      cursor: pointer;
      & > p {
        font-size: 14px;
        font-weight: 600
      }
    }
    & > p {
        font-size: 14px;
        font-weight: 600
      }
`;

const InputSearchFeild = styled(InputBase)`
background: #ffffff;
height: 30px;
width: 55%;
border-radius: 5px;

`;

const Imdbpro = styled(Box)`
color: #26b5fc;
`

const Logo = styled("img")({
    width : 64
})

const Header = () => {

 const [open, setOpen] = useState(null);


 const handleClick = (e) => {
     setOpen(e.currentTarget)
 }

 const handleClose = () => {
  setOpen(null);
};

  return (
    <AppBar>
        <StyledToolBar>
          <Logo src={logoURL} alt="logo" />
          <Box  onClick={handleClick}>
            <Menu/>
            <Typography>
              Menu
            </Typography>
          </Box>
          <HeaderMenu open={open} handleClose={handleClose}/>
          <InputSearchFeild/>
          <Typography>IMDb<Imdbpro component="span">Pro</Imdbpro></Typography>
          <Box>
            <BookmarkAdd/>
            <Typography>
              Watchlist
            </Typography>
          </Box>
          <Typography>Sign In</Typography>
          <Box>
            <Typography>En</Typography>
            <ExpandMore/>
          </Box>
        </StyledToolBar>
    </AppBar>
  )
}

export default Header;