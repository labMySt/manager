import axios from 'axios';

import {
  AUTH_USER,
  AUTH_USER_FATCHED,
  AUTH_USER_ERROR
} from './types';

const sendAuth = () => ({ type: 'AUTH_USER' });
const writeUser = (data) => ({ type: 'AUTH_USER_FATCHED', payload: data });
const writeError = (data) => ({ type: 'AUTH_USER_ERROR',  payload: data});

export const fetchUser = () =>((dispatch) =>{
  dispatch(sendAuth())
  axios.get('/auth/get_user')
   .then((response) => {
       dispatch(writeUser(response.data))
   })
   .catch((err)=>{
     dispatch(writeError(err))
   })
});
