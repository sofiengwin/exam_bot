
import {sendAPi} from './util/sendApi'

exports.handler = async (event: any) => {
  console.log('before api', event.body)
  const result: any = await sendAPi()
  console.log('after api')
  console.log({result})
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({message: "hello world!", ...result}),
  }
}
