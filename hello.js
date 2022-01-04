module.exports.handler = async (event) => {
  console.log('Event: ', event);
  const queryParams = event.queryStringParameters;
  console.log({queryParams})

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: "verified",
    }),
  }
}