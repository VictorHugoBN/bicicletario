import React, { useCallback, useEffect, useState } from 'react';
import {
  Box,
  Dialog,
  DialogContent,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

interface ImageCarouselProps {
  images: string[];
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
      PaperProps={{ style: { maxWidth: '65%' } }}
    >
      <DialogContent>
        <img
          src={imageUrl || ''}
          alt="FullScreenImage"
          style={{ width: '100%', height: 'auto' }}
        />
      </DialogContent>
    </Dialog>
  );
};

const ImageSlide: React.FC<ImageCarouselProps> = ({ images }) => {
  const [isImageOnHover, setIsImageOnHover] = useState(false);
  const theme = useTheme();
  const isXSmall = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmall = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const [currentFocusedIndex, setCurrentFocusedIndex] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  const handleNext = useCallback(() => {
    if (isImageOnHover) return;

    setCurrentFocusedIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [isImageOnHover, images.length]);

  const imageVariants = {
    center: { x: '0%', scale: isImageOnHover ? 1.1 : 1, zIndex: 5 },
    left1: { x: '-50%', scale: 0.7, zIndex: 3 },
    left: { x: '-90%', scale: 0.5, zIndex: 2 },
    right: { x: '90%', scale: 0.5, zIndex: 1 },
    right1: { x: '50%', scale: 0.7, zIndex: 3 },
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 2000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const getImageWidth = () => {
    if (isXSmall) {
      return '80%';
    } else if (isSmall) {
      return '60%';
    }
    return '40%';
  };

  const handleImageClick = (indexToShowFirst: number) => {
    setCurrentFocusedIndex(indexToShowFirst);
  };

  const getPosition = (index: number) => {
    const totalImages = images.length;
    const relativeIndex =
      (index - currentFocusedIndex + totalImages) % totalImages;

    switch (relativeIndex) {
      case 0:
        return 'center';
      case 1:
        return isXSmall || isSmall ? 'right' : 'right1';
      case totalImages - 1:
        return isXSmall || isSmall ? 'left' : 'left1';
      case 2:
        return 'right';
      case totalImages - 2:
        return 'left';
      default:
        return 'hidden'; // For images not in the view.
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        position: 'relative',
      }}
    >
      {images.map((image, index) => (
        <motion.img
          onMouseEnter={() => setIsImageOnHover(true)}
          onMouseLeave={() => setIsImageOnHover(false)}
          key={index}
          src={image}
          alt={`Slide ${index}`}
          initial="center"
          animate={getPosition(index)}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{
            width: getImageWidth(),
            position: 'absolute',
            cursor: 'pointer',
            borderRadius: '12px',
            maxHeight: '100%',
          }}
          onClick={() => {
            if (index === currentFocusedIndex) {
              setFullScreenImage(images[index]);
              return;
            }
            handleImageClick(index);
          }}
        />
      ))}

      <FullScreenImage
        imageUrl={fullScreenImage}
        onClose={() => setFullScreenImage(null)}
      />
    </Box>
  );
};

export default ImageSlide;
