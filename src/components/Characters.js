import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchData } from '../redux/characters/characters';

const Characters = () => {
  const displayCharacters = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!displayCharacters.length) dispatch(fetchData());
  });

  return (
    <div className="container">
      {displayCharacters.map((character, index) => (
        <div className={(index % 2 === 0) ? 'row-bg' : ''} key={character.key}>
          <Link to={{ pathname: `/${character.id}` }} className="details-link">
            <img className="character-img" src={character.image} alt={character.name} />
            {' '}
            <h3 className="character-name">
              {(character.name[0] === '.' || character.name[0] === "'")
                ? character.name.replace(/[.']/g, '')
                : character.name}
            </h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Characters;
