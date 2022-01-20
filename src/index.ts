
import {sendAPi} from './util/sendApi'

console.log("djdjdjdjjd", process.env)
export const handler = async () => {
  console.log('before api')
  await sendAPi()
  console.log('after api')

}