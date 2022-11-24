import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchData, charactersFilter } from '../redux/characters/characters';

function Characters() {
  const displayCharacters = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!displayCharacters.length) dispatch(fetchData());
  });

  const [searchItem, setSearchItem] = useState('');

  const handleSearch = (e) => {
    if (e.searchItem === '' || e.searchItem === ' ') {
      dispatch(fetchData().sort());
    }
    dispatch(charactersFilter(searchItem));
    setSearchItem(e.target.value);
  };

  return (
    <>
      <div className="input-container">
        <input
          type="text"
          placeholder="Search ..."
          onChange={handleSearch}
          value={searchItem}
        />
      </div>
      <div className="container">
        {displayCharacters.sort().map((character, index) => (
          <div className={(index % 2 === 0) ? 'row-bg card' : 'card'} key={character.key}>
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
    </>
  );
}

export default Characters;
