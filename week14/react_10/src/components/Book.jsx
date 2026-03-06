import { useState } from "react";

function Book({ author, title, image, more, description, featured }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="book-card">
      {featured && <p className="book-featured">Featured</p>}
      <h2>{title}</h2>
      <p>by {author}</p>
      <img src={image} alt={title} />

      <a href={more} target="_blank" rel="noopener noreferrer">
        More Info
      </a>

      <p className="book-description">{isExpanded ? description : ""}</p>
      <div className="book-actions">
        <button onClick={toggleDescription}>click</button>
      </div>
    </div>
  );
}
export default Book;
