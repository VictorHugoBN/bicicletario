import Video from '../../components/Galeria/video';
import { Box } from '@mui/material';
import { theme } from '../../styles/theme';
import ImagemSlide from '../../components/Galeria/imagemSlide';
import image1 from './1.png';
import image2 from './2.png';
import image3 from './3.png';
import image4 from './4.png';
import image5 from './5.png';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Galeria = () => {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const animation1 = useScrollAnimation();
  const images = [image1, image2, image3, image4, image5];
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
        <ImagemSlide images={images} />
      </motion.div>
    </Box>
  );
};

export default Galeria;
