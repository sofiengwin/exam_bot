module.exports.handler = async (event) => {
  console.log('Event: ', event);
  const button =  {
    "type":"web_url",
    "url":"https://www.messenger.com",
    "title":"Visit Messenger"
  }

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

// Sample webhook response
// {
//   "object": "page",
//   "entry":[
//     {
//       "id":"699875806726514",
//       "time":1641363771528,
//       "messaging":[
//         {
//           "sender":{
//             "id":"3462137863826594"
//           },
//           "recipient":{
//             "id":"699875806726514"
//           },"timestamp":1641363770672,
//           "message":{
//             "mid":"m_hOXDCAzJ6MpReq5deZkr1k0kUJygepOHa2oIlVLqZM7SbqDe_VeR8AMscF_qj6wD3pG7H0jDLyrrVaJNIFOKZQ",
//             "text":"I have a question. Can you help?"
//           }
//         }
//       ]
//     }
//   ]
// }
