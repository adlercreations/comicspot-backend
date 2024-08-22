import React, { useState } from 'react';
import '../styles/styles.css';

function AddFavoriteForm({ addFavoriteComic }) {
  const [name, setName] = useState('');
  const [publisher, setPublisher] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComic = { name, publisher, image_url, description };

    fetch('http://localhost:7000/favoritesList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newComic),
    })
      .then(response => response.json())
      .then(data => {
        addFavoriteComic(data);
        console.log('New comic added:', data);
      })
      .catch(error => console.error('Error adding comic:', error));

    setName('');
    setPublisher('');
    setImageUrl('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Publisher"
        value={publisher}
        onChange={(event) => setPublisher(event.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image_url}
        onChange={(event) => setImageUrl(event.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />
      <button type="submit">Add to Favorites</button>
    </form>
  );
}

export default AddFavoriteForm;