import axios from 'axios';

import { messengerTemplate } from '../templates/message';

export const sendAPi = (templateName: string, recipient: string) => {
  const payload = messengerTemplate(templateName, recipient)
  console.log({payload})
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
      return error.data
    })
}
