import axios from 'axios';

export const SET_STUDIOS = "SET_STUDIOS";


export const setStudios = (studios) => ({
  type: SET_STUDIOS,
  studios
})

export const fetchStudios = async (dispatch) => {
  try {
    const { data } = await axios.get('/api/studios');
    dispatch(setStudios(data));
  }
  catch (err) {
    console.log(err);
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case SET_STUDIOS:
      return action.studios;
    default:
      return state
  }
}
