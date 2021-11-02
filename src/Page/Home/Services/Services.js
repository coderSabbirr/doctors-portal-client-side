import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: "https://i.ibb.co/tJ16X8v/fluoride.png"
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img:"https://i.ibb.co/kyNxf8h/cavity.png"
        
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img:"https://i.ibb.co/NLGZjcR/whitening.png"
    }
]

  
const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <Container>
      <Typography variant="h6" sx={{mt:5,mb:1,color: 'success.main' }} component="div">
          Our Services
      </Typography>
      <Typography variant="h4" sx={{fontWeight: 500,mb:8}} component="div">
          Services We Provide
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            services.map(service =><Service
            key={service.name}
            service={service}
            ></Service>)
        }
      </Grid>
      </Container>
    </Box>
    );
};

export default Services;