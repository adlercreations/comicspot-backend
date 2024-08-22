import ComicCard from './ComicCard';
import '../styles/styles.css';

function ExploreComics({ comics }) {
    return (
      <div className="explore-list">
        <h2>Explore New Comics</h2>
        <div className="comics-container">
          {comics.map((comic, index) => (
            <ComicCard key={`${comic.volume_id}-${index}`} comic={comic} />
          ))}
        </div>
      </div>
    );
}

export default ExploreComics;