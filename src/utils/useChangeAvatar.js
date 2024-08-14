/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import images from "../data/images";

const useChangeAvatar = () => {
  // gestisce le immagini
  const [currentAvatar, setCurrentAvatar] = useState(images.avatarImages[0]);
  // gestisce l'animazione del nuovo avatar
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation("animate-appearance-out");
      // fa apparire il nuovo avatar
      setTimeout(() => {
        // filtra le immagini per non ripetere l'immagine corrente
        const filteredImages = images.avatarImages.filter(
          (image) => image !== currentAvatar,
        );

        const randomIndex = Math.floor(Math.random() * filteredImages.length);
        setCurrentAvatar(filteredImages[randomIndex]);
        setAnimation("animate-appearance-in");
      }, 50);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentAvatar]);
  return { currentAvatar, animation };
};

export default useChangeAvatar;
