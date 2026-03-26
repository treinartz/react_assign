import { useState } from "react";

function BookCard({ title, author, image, description, url, isFeatured }) {
  const [showDescription, setDescription] = useState(false);

  function toggleDescription() {
    setDescription((prev) => !prev);
  }

  return (
    <div
      className={`book-card book-card--hoverable ${isFeatured ? "book-card--featured" : ""}`}
    >
      <img src={image} alt={title} className="book-card__image" />
      <h1 className="book-card__title">{title}</h1>
      <p className="book-card__author">{author}</p>

      <button className="book-card__button" onClick={toggleDescription}>
        {showDescription ? "Show Less" : "Read More!"}
      </button>

      {showDescription && (
        <p className="book-card__description">{description}</p>
      )}

      {url && (
        <a
          href={url}
          className="book-card__link"
          target="_blank"
          rel="noreferrer"
        >
          Learn More
        </a>
      )}
    </div>
  );
}

export default BookCard;
