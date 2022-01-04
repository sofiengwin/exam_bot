module.exports.handler = async (event) => {
  console.log('Event: ', event);
  const queryParams = event.queryStringParameters;
  console.log({queryParams})
    // Your verify token. Should be a random string.
  let VERIFY_TOKEN = 'https://dts9lexckf.execute-api.us-east-1.amazonaws.com/exam_stage/bot?hub.verify_token=good&hub.mode=subscribe'
    
    // Parse the query params
  let mode = queryParams['hub.mode'];
  let token = queryParams['hub.verify_token'];
  let challenge = queryParams['hub.challenge'];
  console.log({mode, token, challenge})
    console.log(req.query)
    // Checks if a token and mode is in the query string of the request
    if (mode && token) {
    
      // Checks the mode and token sent is correct
      if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        
        // Responds with the challenge token from the request
        console.log('WEBHOOK_VERIFIED');
        res.status(200).send(challenge);
      }
    }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: responseMessage,
    }),
  }
}