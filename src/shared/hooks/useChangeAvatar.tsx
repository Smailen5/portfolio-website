import { avatarImages } from '@/data/images';
import { useEffect, useRef, useState } from 'react';

const FADE_DURATION = 300;
const CHANGE_INTERVAL = 5000;
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

const useChangeAvatar = () => {
  const [currentAvatar, setCurrentAvatar] = useState(avatarImages[0]);
  const [animation, setAnimation] = useState('');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);

    const startCycle = () => {
      intervalRef.current = setInterval(() => {
        setAnimation('animate-fade-out');

        timeoutRef.current = setTimeout(() => {
          setCurrentAvatar(previousAvatar => {
            const filteredImages = avatarImages.filter(
              image => image !== previousAvatar
            );
            const randomIndex = Math.floor(
              Math.random() * filteredImages.length
            );
            return filteredImages[randomIndex];
          });
          setAnimation('animate-fade-in');
        }, FADE_DURATION);
      }, CHANGE_INTERVAL);
    };

    const stopCycle = () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setAnimation('');
    };

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        stopCycle();
      } else {
        startCycle();
      }
    };

    if (!mediaQuery.matches) {
      startCycle();
    }

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      stopCycle();
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return { currentAvatar, animation };
};

export default useChangeAvatar;
