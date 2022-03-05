const button = () => {
  return {
    "type":"web_url",
    "url":"https://www.messenger.com",
    "title": `test`
  }
}

export const questions = [
  {
    template_type: "button",
    "text": "Which AWS Trusted Advisor real-time guidance recommendations are available for AWS Basic Support and AWS Developer Support customers?\n",
    "buttons": [
      button(),
      button()
    ]
  }
]