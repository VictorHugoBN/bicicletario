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

export const FullScreenImage: React.FC<FullScreenImageProps> = ({
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

  const maxVisibleImages = 5; // Adjust this value to show more or fewer images
  const halfWindow = Math.floor(maxVisibleImages / 2);

  const computeRelativePosition = (index: number) => {
    let relativePosition = index - currentFocusedIndex;
    const totalImages = images.length;

    if (relativePosition < -Math.floor(totalImages / 2)) {
      relativePosition += totalImages;
    }
    if (relativePosition > Math.floor(totalImages / 2)) {
      relativePosition -= totalImages;
    }

    return relativePosition;
  };

  const imageVariant = (relativePosition: number) => {
    if (Math.abs(relativePosition) > halfWindow) {
      return { x: '0%', scale: 0, zIndex: 0, opacity: 0 };
    }

    const xMultiplier = isXSmall || isSmall ? 70 : 50; // Adjust spacing based on screen size
    const xOffset = relativePosition * xMultiplier;

    const scaleStep = 0.2; // Scale decrement per position away from center
    const scale = 1 - scaleStep * Math.abs(relativePosition);

    const zIndex = 5 - Math.abs(relativePosition); // Decrease zIndex with distance from center
    const opacity = 1 - 0.2 * Math.abs(relativePosition); // Optional: decrease opacity with distance

    return {
      x: `${xOffset}%`,
      scale: scale,
      zIndex: zIndex,
      opacity: opacity,
    };
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '55vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {images.map((image, index) => {
        const relativePosition = computeRelativePosition(index);

        const variant = imageVariant(relativePosition);

        return (
          <motion.img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            initial={variant}
            animate={variant}
            transition={{ duration: 0.5 }}
            style={{
              width: getImageWidth(),
              position: 'absolute',
              cursor: 'pointer',
              borderRadius: '12px',
              maxHeight: '100%',
              zIndex: variant.zIndex,
            }}
            onMouseEnter={() => setIsImageOnHover(true)}
            onMouseLeave={() => setIsImageOnHover(false)}
            onClick={() => {
              if (index === currentFocusedIndex) {
                setFullScreenImage(images[index]);
                return;
              }
              setCurrentFocusedIndex(index);
            }}
          />
        );
      })}
      <FullScreenImage
        imageUrl={fullScreenImage}
        onClose={() => setFullScreenImage(null)}
      />
    </Box>
  );
};

export default ImageSlide;
