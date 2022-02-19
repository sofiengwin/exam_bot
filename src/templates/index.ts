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
  },
  // {
  //   "template_type": "list",
  //   "top_element_style": "compact",
  //   "elements": [
  //     {
  //       "title": "Classic T-Shirt Collection",
  //       "subtitle": "See all our colors",
  //       "buttons": [
  //         {
  //           "title": "View",
  //           "type": "web_url",
  //           "url": "https://www.messenger.com",
  //           "messenger_extensions": true,
  //           "webview_height_ratio": "tall",
  //           "fallback_url": "https://www.messenger.com"            
  //         }
  //       ]
  //     },
  //     {
  //       "title": "Classic White T-Shirt",
  //       "subtitle": "See all our colors",
  //       "default_action": {
  //         "type": "web_url",
  //         "url": "https://www.messenger.com",
  //         "messenger_extensions": false,
  //         "webview_height_ratio": "tall"
  //       }
  //     },
  //     {
  //       "title": "Classic Blue T-Shirt",
  //       "subtitle": "100% Cotton, 200% Comfortable",
  //       "default_action": {
  //         "type": "web_url",
  //         "url": "https://www.messenger.com",
  //         "messenger_extensions": true,
  //         "webview_height_ratio": "tall",
  //       },
  //       "buttons": [
  //         {
  //           "title": "Shop Now",
  //           "type": "web_url",
  //           "url": "https://www.messenger.com",
  //           "messenger_extensions": true,
  //           "webview_height_ratio": "tall",
  //         }
  //       ]        
  //     }
  //   ],
  //    "buttons": [
  //     {
  //       "title": "View More",
  //       "type": "postback",
  //       "payload": "payload"            
  //     }
  //   ]  
  // }
]



{
//   "recipient":{
//     "id":"3462137863826594"
//   },
//   "message":{
// 		"text": "1. We have the right \ 2. hat for everyone 3. htjjekekee. \r 4. thtk jekrtkt",
//     "attachment":{
//       "type":"template",
//       "payload":{
//     		     "template_type":"generic",
//         "elements":[
//            {
//             "title":"Welcome!",
//             "subtitle":"1. We have the right \r 2. hat for everyone 3. htjjekekee. \r 4. thtk jekrtkt"
//           }
//         ]
//       }
//     }
//   }
// }

// const rhht = {
//   "type": "template",
//   "payload": {
//     "template_type": "customer_feedback",
//     "title": "Rate your experience with Original Coast Clothing.", // Business needs to define. 
//     "subtitle": "Let Original Coast Clothing know how they are doing by answering two questions", // Business needs to define. 
//     "button_title": "Rate Experience", // Business needs to define. 
//     "feedback_screens": [{
//       "questions":[{
//         "id": "hauydmns8", // Unique id for question that business sets
//         "type": "csat",
//         "title": "How would you rate your experience with Original Coast Clothing?", // Optional. If business does not define, we show standard text. Standard text based on question type ("csat", "nps", "ces" >>> "text")
//         "score_label": "neg_pos", // Optional
//         "score_option": "five_stars", // Optional
//       }]
//     }],
//     "business_privacy": 
//     {
//         "url": "https://www.example.com"
//      },
//     "expires_in_days" : 3 // Optional, default 1 day, business defines 1-7 days
//   }
// }
// }

// {
//   "recipient":{
//     "id":"3462137863826594"
//   },
//   "message":{
// 		"text": "1. We have the right hdjsjdjewkeke hdshjdsj hdsjsdjjsdjsdjsjs \n 2. hat for everyone jejkejejjeejw dhshsdhj sdjhshsh shjsjhs jsjsj \n 3. htjjekekee.jewjjejkwejkwe dsjjksk jsjksjs jksjskj sjkjs ajuweqwbuqw \n 4. thtk jekrtkt hjsjejjwejkwejwekjjejew jekndjkkna sqkjwenewkj jehewjkewewjk"
//   }
}