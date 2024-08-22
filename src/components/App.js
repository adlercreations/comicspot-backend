import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Header from './Header';
import RankingList from './RankingList';
import FavoriteList from './FavoriteList';
import ExploreComics from './ExploreComics';
import ErrorPage from './ErrorPage';
import '../styles/styles.css';

function App() {
  const [rankedComics, setRankedComics] = useState([]);
  const [favoriteComics, setFavoriteComics] = useState([]);
  const [exploreComics, setExploreComics] = useState([]);

  useEffect(() => {
    fetch('http://localhost:7000/rankingList')
      .then(response => response.json())
      .then(data => setRankedComics(data))
      .catch(error => console.error('Error fetching ranked comics:', error));

    fetch('http://localhost:7000/favoritesList')
      .then(response => response.json())
      .then(data => setFavoriteComics(data))
      .catch(error => console.error('Error fetching favorite comics:', error));
    
    fetch('http://localhost:7000/exploreList')
      .then(response => response.json())
      .then(data => setExploreComics(data))
      .catch(error => console.error('Error fetching ranked comics:', error));
  }, []);

  const addFavoriteComic = (newComic) => {
    setFavoriteComics([...favoriteComics, newComic]);
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<RankingList comics={rankedComics} />} />
          <Route path="/favorites" element={<FavoriteList comics={favoriteComics} addFavoriteComic={addFavoriteComic} setFavoriteComics={setFavoriteComics} />} />
          <Route path="/explore" element={<ExploreComics comics={exploreComics} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;