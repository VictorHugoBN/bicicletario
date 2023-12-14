import Video from '../../components/Galeria/video';
import { Box } from '@mui/material';
import { theme } from '../../styles/theme';
import ImagemSlide from '../../components/Galeria/imagemSlide';
import imagem1 from '../../assets/bicicletarioHome.jpg';
import imagem2 from '../../assets/Bicicletário fácil Logo Preto Fundo.svg';
import imagem3 from '../../assets/bicicletarioHome.jpg';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Galeria = () => {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const animation1 = useScrollAnimation();
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
      <motion.div
        variants={variants}
        initial="hidden"
        animate={animation1.controls}
        ref={animation1.ref}
      >
        <Video />

        <ImagemSlide imagens={repeatedImages} />
      </motion.div>
    </Box>
  );
};

export default Galeria;
