import { URL, myHttpClient } from './index';
import { SubmissionError } from 'redux-form';

export const searchWord = (values) => async dispatch => {
  // await myHttpClient.get(`${URL}/search${values}`
  await myHttpClient.get(`${URL}`
  ).then((response) => {
    console.log(response)
  }).catch((error) => {
    console.log(error)
  })
}
