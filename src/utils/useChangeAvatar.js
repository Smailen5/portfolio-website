/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import images from "../data/images";

const useChangeAvatar = () => {

  const [currentAvatar, setCurrentAvatar] = useState(images.avatarImages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.avatarImages.length);
      setCurrentAvatar(images.avatarImages[randomIndex]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return currentAvatar;
};

export default useChangeAvatar;
