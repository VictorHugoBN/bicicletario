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
          style={{ width: '100%', height: '100%' }}
        />
      </DialogContent>
    </Dialog>
  );
};

const ImageSlide: React.FC<ImageCarouselProps> = ({ images }) => {
  const initialPositionIndexes = [0, 1, 2, 3, 4];
  const [positionIndexes, setPositionIndexes] = useState(
    initialPositionIndexes,
  );
  const [isImageOnHover, setIsImageOnHover] = useState(false);
  const theme = useTheme();
  const isXSmall = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmall = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

  const handleNext = useCallback(() => {
    if (isImageOnHover) return;

    setPositionIndexes((prevIndexes) =>
      // initialPositionState => [0, 1, 2, 3, 4]
      // initialPositionState => [1, 2, 3, 4, 0]
      // initialPositionState => [2, 3, 4, 0, 1]
      // initialPositionState => [3, 4, 0, 1, 2]
      // initialPositionState => [4, 0, 1, 2, 3]
      // initialPositionState => [0, 1, 2, 3, 4]
      prevIndexes.map((index) => (index + 1) % 5),
    );
  }, [isImageOnHover]);

  const positions = ['center', 'left1', 'left', 'right', 'right1'];
  const imageVariants = {
    center: { x: '0%', scale: isImageOnHover ? 1.1 : 1, zIndex: 5 },
    left1: { x: '-50%', scale: 0.7, zIndex: 3 },
    left: { x: '-90%', scale: 0.5, zIndex: 2 },
    right: { x: '90%', scale: 0.5, zIndex: 1 },
    right1: { x: '50%', scale: 0.7, zIndex: 3 },
  };

  /*   useEffect(() => {
    const interval = setInterval(handleNext, 2000);
    return () => clearInterval(interval);
  }, [handleNext]);
 */

  const getImageWidth = () => {
    if (isXSmall) {
      return '80%';
    } else if (isSmall) {
      return '60%';
    }
    return '40%';
  };

  useEffect(() => {
    console.log({ positionIndexes });
  }, [positionIndexes]);

  const handleImageClick = (indexToShowFirst: number) => {
    console.log('indexToShowFirst', indexToShowFirst);

    setPositionIndexes((prevIndexes) => prevIndexes.map((_index) => _index));
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
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{
            width: getImageWidth(),
            position: 'absolute',
            cursor: 'pointer',
            borderRadius: '12px',
            maxHeight: '100%',
          }}
          onClick={() => handleImageClick(index)}
        />
      ))}
    </Box>
  );
};

export default ImageSlide;
