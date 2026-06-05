import { useState } from "react";
import "./Carousel.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export type Slide = {
  image: string;
  title?: string;
  description?: string;
};

type CarouselProps = {
  slides: Slide[];
};

const Carousel = ({ slides }: CarouselProps) => {
  const [current, setCurrent] = useState<number>(0);

  if (!slides || slides.length === 0) return null;

  const next = () => {
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="carousel">
      <img
        src={slides[current].image}
        alt={slides[current].title || "slide"}
        className="carousel-image"
      />

      {/* <div className="content">
        <h2>{slides[current].title}</h2>
        <p>{slides[current].description}</p>
      </div> */}

      <button onClick={prev} className="prev">
        <FaChevronLeft />
      </button>

      <button onClick={next} className="next">
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Carousel;