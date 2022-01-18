
import {sendAPi} from './util/sendApi'
require('dotenv').config()

console.log(process.env.API_URL)
export const handler = async () => {
  console.log('before api')
  await sendAPi()
  console.log('after api')

}

handler()