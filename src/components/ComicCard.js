import React from 'react';
import '../styles/styles.css';

function ComicCard({ comic, onDelete }) {
  return (
    <div className="comic-card">
      <img src={comic.image_url || comic.image} alt={comic.name || comic.title} />
      <h3>{comic.name || comic.title}</h3>
      <p>{comic.publisher || comic.author}</p>
      <p>{comic.description}</p>
      {onDelete && (
        <button onClick={() => onDelete(comic.id)}>Delete</button>
      )}
    </div>
  );
}

export default ComicCard;