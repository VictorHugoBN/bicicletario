import { Box, Button, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import video from '../../assets/bike_-_82636 (Original).mp4';
import { useState, useRef } from 'react';
import { useTheme } from '@mui/material/styles';

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const theme = useTheme();
  const wppMessage = `Olá, gostaria saber mais sobre a oferta especial da Bicicletario Fácil - Rio De Janeiro`;
  const handleVideoClick = () => {
    const videoElement = videoRef.current;

    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }

      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Box>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        width="100%"
        height="600px"
        style={{ objectFit: 'cover', cursor: 'pointer' }}
        onClick={handleVideoClick}
      >
        <source src={video} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      <Box
        sx={{
          position: 'absolute',
          top: '80%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          [theme.breakpoints.down('md')]: {
            display: 'none',
          },
        }}
      >
        <Typography
          sx={{
            fontSize: '2.3rem',
            color: 'white',
            fontWeight: 600,
            [theme.breakpoints.down('lg')]: { fontSize: '1.8rem' },
          }}
        >
          Oferta Especial
        </Typography>
        <Typography
          sx={{
            fontSize: '2.3rem',
            color: 'white',
            fontWeight: 600,
            [theme.breakpoints.down('lg')]: { fontSize: '1.8rem' },
          }}
        >
          Teste grátis o bicicletário de 5 metros por um mês inteiro!
        </Typography>
        <Button
          startIcon={<PhoneIcon sx={{ width: '1.5rem', height: '1.5rem' }} />}
          onClick={() => {
            const formattedUrl = wppMessage.replace(/ /g, '%20');
            window.open(
              `https://api.whatsapp.com/send?phone=5521985100734&text=${formattedUrl}`,
              '_blank',
            );
          }}
          sx={{
            fontFamily: 'Amaranth',
            fontSize: '1.3rem',
            fontWeight: 600,
            color: 'white',
            background: '#CD8702',
            marginTop: '0.9rem',
            textTransform: 'none',
            paddingX: '2rem',
            borderRadius: '1.5rem',
            '&:hover': {
              backgroundColor: '#CD6A00',
              boxShadow: 'none',
            },
            '&:active': {
              boxShadow: 'none',
              backgroundColor: '#CD6A00',
            },
          }}
        >
          Contato
        </Button>
      </Box>
    </Box>
  );
};

export default Video;
