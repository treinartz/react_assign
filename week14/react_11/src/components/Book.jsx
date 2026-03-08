import { useState } from "react";

function Book({
  author,
  title,
  image,
  more,
  description,
  featured,
  likes = 0,
  onLike,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="book-card">
      {featured && <p className="book-featured">Featured</p>}
      <img src={image} alt={title} />
      <h4 className="book-title">{title}</h4>
      <p className="book-author">by {author}</p>
      <a
        className="book-link"
        href={more}
        target="_blank"
        rel="noopener noreferrer"
      >
        More Info
      </a>

      {/* && renders the paragraph only when expanded — no empty element when closed */}
      {isExpanded && <p className="book-description">{description}</p>}

      <div className="book-actions">
        {/* ternary switches between two real labels */}
        <button onClick={toggleDescription}>
          {isExpanded ? "Hide Description" : "Show Description"}
        </button>
        <button onClick={onLike}>👍 Like ({likes})</button>
      </div>
    </div>
  );
}

export default Book;
