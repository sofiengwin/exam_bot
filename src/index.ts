
import {sendAPi} from './util/sendApi';
import {questions} from './templates';

exports.handler = async (event: any) => {
  const eventBody = JSON.parse(event.body);
  var question = questions[0];
  console.log('question', question);
  const button = (choice: string) => {
    return {
      "type":"web_url",
      "url":"https://www.messenger.com",
      "title": `${choice}`
    }
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
          text: `${question['questionText']}`,
          buttons: question['choices'].map((choice) => (button(choice)))
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
