
import {sendAPi} from './util/sendApi'

exports.handler = async (event: any) => {
  const eventBody = JSON.parse(event.body)
  const button =  {
    "type":"web_url",
    "url":"https://www.messenger.com",
    "title":"Visit Messenger"
  }
  console.log("sender:", eventBody.entry[0].messaging[0].sender.id)
  const sample = {
    recipient: {
      id: eventBody.entry[0].messaging[0].sender.id,
    },
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text: "What do you want to do next?",
          buttons: [
           button,
           button,
           button,
          ]
        }
      }
    }
  }

  console.log('before api', {eventBody})
  const result: any = await sendAPi(sample)
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
