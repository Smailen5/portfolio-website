import { avatarImages } from '@/data/images';
import { useEffect, useRef, useState } from 'react';

const FADE_DURATION = 300;
const CHANGE_INTERVAL = 5000;

const useChangeAvatar = () => {
  const [currentAvatar, setCurrentAvatar] = useState(avatarImages[0]);
  const [animation, setAnimation] = useState('');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation('animate-fade-out');

      timeoutRef.current = setTimeout(() => {
        setCurrentAvatar(previousAvatar => {
          const filteredImages = avatarImages.filter(
            image => image !== previousAvatar
          );
          const randomIndex = Math.floor(Math.random() * filteredImages.length);
          return filteredImages[randomIndex];
        });
        setAnimation('animate-fade-in');
      }, FADE_DURATION);
    }, CHANGE_INTERVAL);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { currentAvatar, animation };
};

export default useChangeAvatar;
