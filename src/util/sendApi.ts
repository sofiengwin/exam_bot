import axios from 'axios';

export const sendAPi = () => {
  axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}