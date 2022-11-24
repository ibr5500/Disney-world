import axios from 'axios';

const GET_DATA = 'DISNEY_WORLD/redux/GET_DATA';
const FILTER = 'DISNEY_WORLD/redux/FILTER';

const baseURL = 'https://api.disneyapi.dev/characters';
const characters = [];

export const fetchData = () => async (dispatch) => {
  const res = await axios.get(`${baseURL}`);
  return dispatch({ type: GET_DATA, payload: res.data.data });
};

export const charactersFilter = (search) => ({ type: FILTER, payload: search });

const charactersReducer = (action, state = characters) => {
  switch (action.type) {
    case FILTER: {
      return state.filter((character) => {
        const name = character.name.toLowerCase();
        return name.includes(action.payload.toLowerCase());
      });
    }
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
