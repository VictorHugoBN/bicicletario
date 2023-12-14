import React, { useState, useEffect } from 'react';
import { Box, IconButton, Dialog, DialogContent } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface ImageCarouselProps {
  imagens: string[];
}
interface FullScreenImageProps {
  imageUrl: string | null;
  onClose: () => void;
}

const FullScreenImage: React.FC<FullScreenImageProps> = ({
  imageUrl,
  onClose,
}) => {
  return (
    <Dialog
      open={!!imageUrl}
      onClose={onClose}
      PaperProps={{
        style: {
          maxWidth: '65%',
        },
      }}
    >
      <DialogContent>
        <img
          src={imageUrl || ''}
          alt="FullScreenImage"
          style={{ width: '100%', height: '100%' }}
        />
      </DialogContent>
    </Dialog>
  );
};

const ImagemSlide: React.FC<ImageCarouselProps> = ({ imagens }) => {
  const [position, setPosition] = useState(0);
  const [speed, setSpeed] = useState(0.2);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  const nextSlide = () => {
    const maxPosition = -110;

    setPosition((prevPosition) => {
      const newPosition = prevPosition - speed;
      // Verificar se a nova posição ultrapassa o limite máximo
      return newPosition < maxPosition ? maxPosition : newPosition;
    });
  };

  const prevSlide = () => {
    const minPosition = 1;

    setPosition((prevPosition) => {
      const newPosition = prevPosition + 20;
      // Verificar se a nova posição ultrapassa o limite mínimo
      return newPosition > minPosition ? minPosition : newPosition;
    });
  };

  const nextSlide2 = () => {
    const maxPosition = -111;

    setPosition((prevPosition) => {
      const newPosition = prevPosition - 20;

      // Verificar se a nova posição ultrapassa o limite máximo
      if (newPosition < maxPosition) {
        setSpeed(0);
        return maxPosition;
      } else {
        return newPosition;
      }
    });
  };

  const handleMouseEnter = () => {
    setIsMouseOver(true);
    setSpeed(0.1); // Ajuste a velocidade ao passar o mouse
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
    setSpeed(0.2); // Volte à velocidade normal ao retirar o mouse
  };
  const handleImageHover = (index: number | null) => {
    if (isMouseOver) {
      setHoveredImage(index);
    }
  };
  const openFullScreenImage = (index: number) => {
    setFullScreenImage(imagens[index]);
  };

  const closeFullScreenImage = () => {
    setFullScreenImage(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isMouseOver) {
        nextSlide();
      }
    }, 90);

    return () => clearInterval(interval);
  }, [isMouseOver, speed]);

  return (
    <Box
      sx={{
        overflow: 'hidden',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box
        component="div"
        display="flex"
        width={`${imagens.length * 20}%`}
        sx={{
          transform: `translateX(${position}%)`,
          transition: 'transform 0.3s ease-in-out',
          position: 'relative',
          height: '300px',
          alignItems: 'center',
        }}
      >
        {imagens.map((imagem, index) => (
          <img
            key={index}
            src={imagem}
            alt={`Slide ${index}`}
            style={{
              width: 'auto',
              height: hoveredImage === index ? '100%' : '90%',
              objectFit: 'cover',
              marginRight: '25px',
              borderRadius: '8px',
              filter: hoveredImage === index ? 'brightness(0.5)' : 'none',
              transition: 'height 0.3s ease-in-out, filter 0.3s ease-in-out',
              cursor: 'pointer',
            }}
            onMouseEnter={() => handleImageHover(index)}
            onMouseLeave={() => handleImageHover(null)}
            onClick={() => openFullScreenImage(index)}
          />
        ))}
      </Box>
      <IconButton
        sx={{
          position: 'absolute',
          top: '900px',
          transform: 'translateY(-20%)',
          left: '0',
          zIndex: 1,
          color: 'orange',
          backgroundColor: 'white',
        }}
        onClick={prevSlide}
      >
        <ArrowBackIcon />
      </IconButton>
      <IconButton
        sx={{
          position: 'absolute',
          top: '900px',
          transform: 'translateY(-50%)',
          right: '0',
          zIndex: 1,
          color: 'orange',
          backgroundColor: 'white',
        }}
        onClick={nextSlide2}
      >
        <ArrowForwardIcon />
      </IconButton>
      <FullScreenImage
        imageUrl={fullScreenImage}
        onClose={closeFullScreenImage}
      />
    </Box>
  );
};

export default ImagemSlide;
