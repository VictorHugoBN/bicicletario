import { Paper, Typography } from '@mui/material';

const Galeria = () => {
  return (
    <Paper
      elevation={3}
      style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}
    >
      <Typography variant="h5" gutterBottom>
        Meu Vídeo
      </Typography>
      <video controls width="100%" height="auto">
        <source src="caminho/do/seu/video.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </Paper>
  );
};

export default Galeria;
