import { Box } from '@mui/material';
import video from '../../assets/bike_-_82636 (Original).mp4';
import { useState, useRef } from 'react';

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

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
        playsInline
        webkit-playsinline="true"
      >
        <source src={video} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </Box>
  );
};

export default Video;
