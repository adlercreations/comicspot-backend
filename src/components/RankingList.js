import React from 'react';
import ComicCard from './ComicCard';
import '../styles/styles.css';

function RankingList({ comics }) {
  return (
    <div className="ranking-list">
      <h2>Top Ranked Comics</h2>
      <div className="comics-container">
        {comics.map((comic, index) => (
          <ComicCard key={`${comic.volume_id}-${index}`} comic={comic} />
        ))}
      </div>
    </div>
  );
}

export default RankingList;