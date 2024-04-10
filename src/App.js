// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './themeSlice';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Features from './pages/Features';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const App = () => {
 const theme = useSelector((state) => state.theme.theme);
 const dispatch = useDispatch();

 const muiTheme = createTheme({
    palette: {
      mode: theme, // 'light' or 'dark'
    },
 });

 return (
    <ThemeProvider theme={muiTheme}>
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                My App
              </Typography>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/about-us">
                About Us
              </Button>
              <Button color="inherit" component={Link} to="/features">
                Features
              </Button>
              <IconButton color="inherit" onClick={() => dispatch(toggleTheme())}>
                {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/features" element={<Features />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
 );
};

export default App;
