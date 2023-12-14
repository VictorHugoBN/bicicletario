import Video from '../../components/Galeria/video';
import { Box } from '@mui/material';
import { theme } from '../../styles/theme';
import ImagemSlide from '../../components/Galeria/imagemSlide';
import imagem1 from '../../assets/bicicletarioHome.jpg';
import imagem2 from '../../assets/Bicicletário fácil Logo Preto Fundo.svg';
import imagem3 from '../../assets/bicicletarioHome.jpg';

const Galeria = () => {
  const images = [imagem1, imagem2, imagem3, imagem1];

  // Repetir as imagens para criar um efeito de loop
  const repeatedImages = [
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
  ];

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Video />
      <ImagemSlide imagens={repeatedImages} />
    </Box>
  );
};

export default Galeria;
