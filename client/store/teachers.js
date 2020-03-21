import axios from 'axios';

export const SET_TEACHERS = "SET_TEACHERS";


export const setTeachers = (teachers) => ({
  type: SET_TEACHERS,
  teachers
})

export const fetchTeachers = async (dispatch) => {
  try {
    const { data } = await axios.get('/api/teachers');
    dispatch(setTeachers(data));
  }
  catch (err) {
    console.log(err);
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case SET_TEACHERS:
      return action.teachers;
    default:
      return state
  }
}
