"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

const Header: React.FC = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path: string) => {
    router.push(path);
    handleCloseMenu();
  };

  const StyledAppBar = styled(AppBar)({
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    boxShadow: 'none',
    borderBottom: '1px solid #e0e0e0',
  });

  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  });

  const StyledButton = styled(Button)({
    color: '#333',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
    display: { xs: 'none', sm: 'inline-block' },
  });

  const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    cursor: 'pointer',
  }));

  const StyledMenu = styled(Menu)({
    '& .MuiPaper-root': {
      marginTop: '40px',
      width: '20ch',
    },
  });

  return (
    <StyledAppBar position="sticky">
      <Container maxWidth="lg">
        <StyledToolbar>
          <StyledTypography variant="h6" as="div" onClick={() => handleNavigate('/')}>
            Vishesh Kumar
          </StyledTypography>
          <div>
            <StyledButton onClick={() => handleNavigate('/')} sx={{ display: { xs: 'none', sm: 'inline-block' } }}>
              Home
            </StyledButton>
            <StyledButton onClick={() => handleNavigate('/about')} sx={{ display: { xs: 'none', sm: 'inline-block' } }}>
              About
            </StyledButton>
            <StyledButton onClick={() => handleNavigate('/projects')} sx={{ display: { xs: 'none', sm: 'inline-block' } }}>
              Projects
            </StyledButton>
            <StyledButton onClick={() => handleNavigate('/contact')} sx={{ display: { xs: 'none', sm: 'inline-block' } }}>
              Contact
            </StyledButton>
            <StyledButton aria-label="menu" onClick={handleOpenMenu} sx={{ display: { xs: 'inline-block', sm: 'none' } }}>
              <MenuIcon />
            </StyledButton>
          </div>
        </StyledToolbar>
      </Container>
      <StyledMenu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu} transformOrigin={{ horizontal: 'right', vertical: 'top' }} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <MenuItem onClick={() => handleNavigate('/')}>Home</MenuItem>
        <MenuItem onClick={() => handleNavigate('/about')}>About</MenuItem>
        <MenuItem onClick={() => handleNavigate('/projects')}>Projects</MenuItem>
        <MenuItem onClick={() => handleNavigate('/contact')}>Contact</MenuItem>
      </StyledMenu>
    </StyledAppBar>
  );
};

export default Header;