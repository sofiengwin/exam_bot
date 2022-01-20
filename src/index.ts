
import {sendAPi} from './util/sendApi'

console.log("djdjdjdjjd", process.env)
exports.handler = async () => {
  console.log('before api')
  await sendAPi()
  console.log('after api')

}