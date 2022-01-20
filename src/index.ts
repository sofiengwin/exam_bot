
import {sendAPi} from './util/sendApi'

console.log("djdjdjdjjd", process.env)
exports.handler = async () => {
  console.log('before api')
  const result: any = await sendAPi()
  console.log('after api')

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({message: "hello world!", ...result}),
  }
}