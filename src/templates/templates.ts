const question =   {
  template_type: "button",
  "text": "Which AWS Trusted Advisor real-time guidance recommendations are available for AWS Basic Support and AWS Developer Support customers?\n",
  "buttons": [
    {
      "type":"web_url",
      "url":"https://www.messenger.com",
      "title": `test`
    },
    {
      "type":"web_url",
      "url":"https://www.messenger.com",
      "title": `test`
    }
  ]
}

const response = {
  "template_type": "customer_feedback",
  "title": "Rate your experience with Original Coast Clothing.", // Business needs to define. 
  "subtitle": "Let Original Coast Clothing know how they are doing by answering two questions", // Business needs to define. 
  "button_title": "Rate Experience", // Business needs to define. 
  "feedback_screens": [{
    "questions":[{
      "id": "hauydmns8", // Unique id for question that business sets
      "type": "csat",
      "title": "How would you rate your experience with Original Coast Clothing?", // Optional. If business does not define, we show standard text. Standard text based on question type ("csat", "nps", "ces" >>> "text")
      "score_label": "neg_pos", // Optional
      "score_option": "five_stars", // Optional
    }]
  }],
  "business_privacy": 
  {
      "url": "https://www.example.com"
   },
  "expires_in_days" : 3 // Optional, default 1 day, business defines 1-7 days
}

export const templatesMap: any = {
  responseTemplate: response,
  questionTemplate: question,
}

