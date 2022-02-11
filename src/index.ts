
import {sendAPi} from './util/sendApi';
import {questions} from './templates';

exports.handler = async (event: any) => {
  const eventBody = JSON.parse(event.body);
  var question = questions[Math.floor(Math.random()*questions.length)];
  console.log('question', question);
  console.log('event.body', event.body)

  console.log("sender:", eventBody.entry[0].messaging[0].sender.id)
  const sample = {
    recipient: {
      id: eventBody.entry[0].messaging[0].sender.id,
    },
    message: {
      attachment: {
        type: "template",
        payload: {
         ...question
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
    body: JSON.stringify({...result}),
  }
}
