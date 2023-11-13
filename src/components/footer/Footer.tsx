import Box from '@mui/material/Box';
import { Routes } from '../../utils/enums/Routes';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from './XIcon';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '15rem',
        display: 'flex',
        alignItems: 'center',
        backgroundImage:
          'linear-gradient(to bottom, rgba(205, 106, 0, 0.6), rgba(205, 135, 2, 0.6), rgba(255, 255, 255, 0.6))',
      }}
    >
      <img
        src="../../../public/assets/Logo2.png"
        alt="Logo2"
        style={{
          marginLeft: '5%',

          maxWidth: '20%',
        }}
      />
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          marginLeft: '20px',
          flexDirection: 'column',
        }}
      >
        {Routes.values.map((page) => (
          <Button
            key={page}
            onClick={() => navigate(`/${page}`)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '5rem',
              ':hover': {
                backgroundColor: 'transparent',
                color: '#CD6A00',
              },
            }}
          >
            {Routes.getLabel(page)}
          </Button>
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '35%',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{ fontSize: '1rem', lineHeight: '1rem', marginRight: '1.5rem' }}
        >
          Onde estamos: Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Unde minus excepturi quis delectus, voluptatibus neque
          voluptatem facere ut soluta explicabo a esse magnam consectetur minima
          est atque ratione eos nam?
        </Typography>
        <Typography
          sx={{ fontSize: '1rem', lineHeight: '1rem', marginTop: '1rem' }}
        >
          Contato: (99)99999-9999
        </Typography>
        <Box sx={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
          <InstagramIcon />
          <FacebookIcon />
          <LinkedInIcon />
          <XIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
