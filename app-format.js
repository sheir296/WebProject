import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import AdbIcon from '@mui/icons-material/Adb';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Typography,
} from '@mui/material';

export const AppFormat = () => {
  return (
    <Router>
      <>
        <AppBar position="static"   sx={{ backgroundColor:'green'}}>
          <Container maxWidth="xl">
            <Toolbar disableGutters >
              {/* <AdbIcon sx={{ display: 'flex', mr: 1 }} /> */}
              <Avatar
                alt="Library Management System"
                src="client\icons\download.jpeg"
                sx={{ width: 50, height: 50, marginRight: 1 }}
              />
              <Link to="/" style={{ textDecoration: 'none', flexGrow: 5 }}>
                <Typography
                  variant="h5"
                  noWrap
                  sx={{   //custom css
                    mr: 3,
                    display: 'flex',
                    fontFamily: 'revert-layer',
                    fontWeight: 900,
                    letterSpacing: '.2rem',
                    color: 'black',
                  }}
                >
                  Library Management System
                </Typography>
              </Link>
              <Box
                sx={{
                  flexGrow: 0,
                }}
              >
                <Button
                  onClick={() => {
                    // setOpenLoginDialog(true)
                  }}
                  sx={{ my: 2, color: 'black', display: 'block', fontWeight: 'bold' }}
                >
                  Login
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </>
    </Router>
  );
};
