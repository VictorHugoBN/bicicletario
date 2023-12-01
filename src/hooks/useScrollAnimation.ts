import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { AnimationControls, useAnimation } from 'framer-motion';

interface UseScrollAnimationReturnType {
  ref: (node?: Element | null) => void;
  controls: AnimationControls;
}

const useScrollAnimation = (): UseScrollAnimationReturnType => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return { ref, controls };
};

export default useScrollAnimation;
