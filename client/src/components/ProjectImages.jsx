import { useState, useEffect, useRef } from "react";
import { Card } from "react-bootstrap";

const ProjectImages = ({ images, interval = 1000 }) => {
  // Setting up for project image carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isHovered) {
      intervalRef.current = setInterval(() => {
        setTimeout(() => {
          setCurrentImageIndex((index) => (index + 1) % images.length);
        }, 0);
      }, interval);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isHovered, images.length, interval]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="projectImage"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card.Img
        variant="top"
        src={images[currentImageIndex]}
        alt="image carousel of project screenshots"
        fluid
      ></Card.Img>
    </div>
  );
};

export default ProjectImages;
