import {templatesMap} from './templates';

export const messengerTemplate = (templateName: string, recipient: string) => {
  const payload = templatesMap[templateName]
  return {
    recipient: {
      id: recipient,
    },
    message: {
      attachment: {
        type: "template",
        payload: {
         ...payload
        }
      }
    }
  }
}