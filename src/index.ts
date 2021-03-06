
import {sendAPi} from './util/sendApi';
import {questions} from './templates';

exports.handler = async (event: any) => {
  const eventBody = JSON.parse(event.body);
  console.log('event.body', event.body)
  var question = questions[Math.floor(Math.random()*questions.length)];
  const recipient = eventBody.entry[0].messaging[0].sender.id
  console.log('question', question);
  console.log('recipient', recipient)

  const result: any = await sendAPi('responseTemplate', recipient)
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
