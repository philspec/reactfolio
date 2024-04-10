// src/pages/AboutUs.js
import React from 'react';
import { Typography, Box } from '@mui/material';

const AboutUs = () => {
 return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at cursus pellentesque, nisl eros pellentesque quam, a faucibus nisl risus id nisi.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor ligula vel sem.
      </Typography>
    </Box>
 );
};

export default AboutUs;