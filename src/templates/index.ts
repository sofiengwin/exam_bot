const button = (choice: string) => {
  return {
    "type":"web_url",
    "url":"https://www.messenger.com",
    "title": `${choice}`
  }
}

export const questions = [
  // {
  //   template_type: "button",
  //   "text": "Which AWS Trusted Advisor real-time guidance recommendations are available for AWS Basic Support and AWS Developer Support customers?\n",
  //   "buttons": [
  //     "Service limit checks",
  //     "Security Groups ",
  //     "Amazon S3",
  //   ].map((choice) => (button(choice)))
  // },
  // {
  //   template_type: "button",
  //   "text": "Which service reduces the operational overhead of your IT organization?",
  //   "buttons": [
  //     "AWS Partner Network consulting partners",
  //     "AWS Professional Services",
  //     "Infrastructure Event Management",
  //   ].map((choice) => (button(choice)))
  // },
  // {
  //   template_type: "button",
  //   "text": "Which service provides the easiest way to set up and govern a secure, multi-account AWS environment?\n",
  //   "buttons": [
  //     "Control Tower",
  //     "AWS Marketplace",
  //     "AWS Trusted Advisor",
  //   ].map((choice) => (button(choice)))
  // },
  {
    "template_type": "list",
    "top_element_style": "compact",
    "elements": [
      {
        "title": "Classic T-Shirt Collection",
        "subtitle": "See all our colors",
        "buttons": [
          {
            "title": "View",
            "type": "web_url",
            "url": "https://www.messenger.com",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://www.messenger.com"            
          }
        ]
      },
      {
        "title": "Classic White T-Shirt",
        "subtitle": "See all our colors",
        "default_action": {
          "type": "web_url",
          "url": "https://www.messenger.com",
          "messenger_extensions": false,
          "webview_height_ratio": "tall"
        }
      },
      {
        "title": "Classic Blue T-Shirt",
        "subtitle": "100% Cotton, 200% Comfortable",
        "default_action": {
          "type": "web_url",
          "url": "https://www.messenger.com",
          "messenger_extensions": true,
          "webview_height_ratio": "tall",
        },
        "buttons": [
          {
            "title": "Shop Now",
            "type": "web_url",
            "url": "https://www.messenger.com",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
          }
        ]        
      }
    ],
     "buttons": [
      {
        "title": "View More",
        "type": "postback",
        "payload": "payload"            
      }
    ]  
  }
]
