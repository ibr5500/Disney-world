import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Details = () => {
  const character = useParams();
  const details = useSelector((state) => state.characters);
  const charDetails = details.filter((char) => +char.id === +character.id);

  return (
    <div className="details-container">
      {charDetails.map((char, index) => (
        <div className="details" key={index.legth * 5 + 1}>
          <div className="detail-img">
            <img src={char.image} alt={char.name} />
          </div>
          <div className="name">
            <h4>
              <span>Name:</span>
              {'  '}
              {(char.name[0] === '.' || char.name[0] === "'")
                ? char.name.replace(/[.']/g, '')
                : char.name}
            </h4>
          </div>
          <ul className="movies">
            <h4>Movies: </h4>
            {(!char.movies.length) ? <p>This character did not participate in Movies.</p>
              : char.movies.map((movie) => (
                <li key={index.legth * 5 + 1}>
                  {movie}
                  .
                </li>
              ))}
          </ul>
          <ul>
            <h4>Tv Shows: </h4>
            {(!char.shows.length) ? <p>This character did not participate in TV Shows.</p>
              : char.shows.map((show) => <li key={index.legth * 5 + 1}>{show}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Details;
