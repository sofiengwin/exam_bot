import axios from 'axios';

export const sendAPi = () => {
  return axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
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