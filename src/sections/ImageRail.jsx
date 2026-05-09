import { useState } from "react";
import "./ImageRail.css";

export default function ImageRail({ images, alt }) {
  const list = Array.isArray(images) ? images : Object.values(images || {});
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  if (!list.length) return null;

  if (list.length === 1) {
    return (
      <>
        <div className="image-carousel">
          <img className="project-image-single" src={list[0]} alt={alt} />

          <button className="expand-btn" onClick={() => setIsOpen(true)}>
            ⛶
          </button>
        </div>

        {isOpen && (
          <div className="lightbox" onClick={() => setIsOpen(false)}>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ✕
            </button>

            <img
              className="lightbox-image"
              src={list[0]}
              alt={alt}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </>
    );
  }

  const next = () => {
    setCurrent((prev) => (prev + 1) % list.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + list.length) % list.length);
  };

  return (
    <>
      <div className="image-carousel">
        <button className="nav-btn left" onClick={prev}>
          ❮
        </button>

        <img
          className="carousel-image"
          src={list[current]}
          alt={`${alt} ${current + 1}`}
        />

        <button className="nav-btn right" onClick={next}>
          ❯
        </button>

        <button className="expand-btn" onClick={() => setIsOpen(true)}>
          ⛶
        </button>
      </div>

      {isOpen && (
        <div className="lightbox" onClick={() => setIsOpen(false)}>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            ✕
          </button>

          <button
            className="nav-btn left"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            ❮
          </button>

          <img
            className="lightbox-image"
            src={list[current]}
            alt={`${alt} ${current + 1}`}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="nav-btn right"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            ❯
          </button>
        </div>
      )}
    </>
  );
}
