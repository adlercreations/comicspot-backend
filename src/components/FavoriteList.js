import React from 'react';
import ComicCard from './ComicCard';
import AddFavoriteForm from './AddFavoriteForm';
import '../styles/styles.css';

function FavoriteList({ comics, addFavoriteComic, setFavoriteComics }) {

  const handleDelete = (id) => {
    fetch(`http://localhost:7000/favoritesList/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setFavoriteComics(comics.filter(comic => comic.id !== id));
      })
      .catch(error => console.error('Error deleting comic:', error));
  };

  return (
    <div className="favorite-list">
      <h2>Your Favorite Comics</h2>
      <AddFavoriteForm addFavoriteComic={addFavoriteComic} />
      <div className="comics-container">
        {comics.map((comic, index) => (
          <ComicCard 
            key={comic.id || `${index}-${comic.title}-${comic.image}`} 
            comic={comic} 
            onDelete={handleDelete} 
          />
        ))}
      </div>
    </div>
  );
}

export default FavoriteList;