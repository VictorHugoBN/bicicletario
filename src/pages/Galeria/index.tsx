import Video from '../../components/Galeria/video';
import { Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ImagemSlide from '../../components/Galeria/imagemSlide';
import image1 from '../../assets/galery/img_1088.jpg';
import image2 from '../../assets/galery/img_1653.jpg';
import image3 from '../../assets/galery/img_1666.jpg';
import image4 from '../../assets/galery/img_3070.jpg';
import image5 from '../../assets/galery/img_3153.jpg';
import image6 from '../../assets/galery/img_3154.jpg';
import image7 from '../../assets/galery/img_3158.jpg';
import image8 from '../../assets/galery/img_3198.jpg';
import image9 from '../../assets/galery/img_3202.jpg';
import image10 from '../../assets/galery/img_4018.jpg';
import image11 from '../../assets/galery/img_4020.jpg';
import image12 from '../../assets/galery/img_4604.jpg';
import image13 from '../../assets/galery/img_4606.jpg';
import image14 from '../../assets/galery/img_4669.jpg';
import image15 from '../../assets/galery/img_5306.jpg';
import image16 from '../../assets/galery/img_5308.jpg';
import image17 from '../../assets/galery/img_9510.jpg';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { Gallery } from 'react-grid-gallery';
import { useState } from 'react';

const Galeria = () => {
  const theme = useTheme();

  const [showGallery, setShowGallery] = useState(false);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const animation1 = useScrollAnimation();

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
  ];

  const formattedImages = images.map((image) => ({
    src: image,
    width: 500,
    height: 500,
  }));

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(2),
      }}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate={animation1.controls}
        ref={animation1.ref}
      >
        <Video />
        <div
          style={{
            margin: '4rem 0 4rem 0',
          }}
        >
          <ImagemSlide images={images} />
        </div>
        <div
          style={{
            margin: '2rem 0 2rem 0',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            variant="contained"
            onClick={() => setShowGallery(!showGallery)}
          >
            {showGallery ? 'Fechar' : 'Mostrar Tudo'}
          </Button>
        </div>

        {showGallery ? (
          <>
            <Gallery
              images={formattedImages}
              margin={2}
              enableImageSelection={false}
              onClick={(_, item) => window.open(item.src, '_blank')}
            />
          </>
        ) : null}
      </motion.div>
    </Box>
  );
};

export default Galeria;
