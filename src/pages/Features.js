// src/pages/Features.js
import React from 'react';
import { Typography, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const Features = () => {
 return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Features
      </Typography>
      <Carousel>
        <Paper sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <img src="https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?" alt="feature 1" style={{ width: 'auto', height: '90vh', objectFit: 'contain' }} />
          <Typography>Feature 1</Typography>
        </Paper>
        <Paper sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <img src="https://images.pexels.com/photos/2105416/pexels-photo-2105416.jpeg" alt="feature 2" style={{ width: 'auto', height: '90vh', objectFit: 'contain' }} />
          <Typography>Feature 2</Typography>
        </Paper>
        <Paper sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <img src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg" alt="feature 3" style={{ width: 'auto', height: '90vh', objectFit: 'contain' }} />
          <Typography>Feature 3</Typography>
        </Paper>
      </Carousel>
    </Box>
 );
};

export default Features;
