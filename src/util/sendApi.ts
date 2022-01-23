import axios from 'axios';

export const sendAPi = (payload: any) => {
  return axios.post(`${process.env.API_URL}${process.env.PAGE_ACCESS_TOKEN}`, {
    ...payload,
  })
    .then(function (response) {
      // handle success
      console.log(response.data);
      return response.data
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}
