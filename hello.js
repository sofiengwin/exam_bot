module.exports.handler = async (event) => {
  console.log('Event: ', event);
  const button =  {
    "type":"web_url",
    "url":"https://www.messenger.com",
    "title":"Visit Messenger"
  }
  console.log('ENV', process.env)
  const sample = {
    recipient: {
      id: "<PSID>",
    },
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text: "What do you want to do next?",
          buttons: [
           
          ]
        }
      }
    }
  }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sample),
  }
}
