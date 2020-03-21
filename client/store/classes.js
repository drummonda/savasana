import axios from 'axios';

export const SET_CLASSES = "SET_CLASSES";


export const setClasses = (classes) => ({
  type: SET_CLASSES,
  classes
})

export const fetchClasses = async (dispatch) => {
  try {
    const { data } = await axios.get('/api/classes');
    dispatch(setClasses(data));
  }
  catch (err) {
    console.log(err);
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case SET_CLASSES:
      return action.classes;
    default:
      return state
  }
}
