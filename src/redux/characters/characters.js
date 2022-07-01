import axios from 'axios';

const GET_DATA = 'DISNEY_WORLD/redux/GET_DATA';

const baseURL = 'https://api.disneyapi.dev/characters';
const characters = [];

export const fetchData = () => async (dispatch) => {
  const res = await axios.get(`${baseURL}`);
  return dispatch({ type: GET_DATA, payload: res.data.data });
};

const charactersReducer = (state = characters, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload.map((character) => ({
        ...character,
        id: character._id, // eslint-disable-line
        key: character._id, // eslint-disable-line
        name: character.name,
        image: character.imageUrl,
        movies: character.films,
        shows: character.tvShows,
      }));
    default:
      return state;
  }
};

export default charactersReducer;
