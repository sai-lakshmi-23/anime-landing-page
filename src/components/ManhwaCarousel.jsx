import { useState, useEffect } from 'react';
import '../styles/carousel.css';

const manhwas = [
  { title: 'Leviathan', image: './images/pjimage.jpg' },
  { title: 'Tower of God', image: './images/tog.jpg' },
  { title: 'Leveling Up with Gods', image: './images/luwg.jpg' },
  { title: 'Existence', image: './images/existence.jpg' },
  { title: 'The Breaker', image: './images/breaker.jpg' },
  { title: 'The First Hunter', image: './images/hunter.jpg' },
  { title: 'Noblesse', image: './images/noblesse.jpg' },
  { title: 'Ultimate Outcast', image: './images/outcast.jpg' },
  { title: 'Unholy Blood', image: './images/blood.jpg' },
  { title: 'Dice: The Cube that Changes Everything', image: './images/dice.jpg' },
];

const ManhwaCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3); 

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 400) {
        setVisibleCount(1);
      } else if (width < 840) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => {
      window.removeEventListener('resize', updateVisibleCount);
    };
  }, []);

  const nextSlide = () => {
    if (startIndex + visibleCount < manhwas.length) {
      setStartIndex((prevIndex) => prevIndex + 1);
    } else {
      setStartIndex(0); 
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
    } else {
      setStartIndex(manhwas.length - visibleCount);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [startIndex, visibleCount]);

  return (
    <section id="carousel" className="carousel-section" aria-label="Supernatural Manhwas Carousel" role="region">
      <h2>Supernatural Manhwas</h2>
      <div className="carousel-container">
        <button className="carousel-button left" onClick={prevSlide} aria-label="Previous Slide">
          &#10094;
        </button>
        
        <div 
          className="carousel-items" 
          role="listbox"
          style={{ 
            transform: `translateX(-${(startIndex * 100) / visibleCount}%)`, 
            transition: 'transform 0.5s ease',
          }}>
          {manhwas.map((manhwa, index) => (
            <div 
              key={manhwa.title} 
              className="carousel-item" 
              role="option" 
              aria-selected={index === startIndex}>
              <img 
                src={manhwa.image} 
                alt={manhwa.title} 
                loading="lazy"
                width="200"
                height="300"
              />
              <h3>{manhwa.title}</h3>
            </div>
          ))}
        </div>

        <button className="carousel-button right" onClick={nextSlide} aria-label="Next Slide">
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default ManhwaCarousel;
