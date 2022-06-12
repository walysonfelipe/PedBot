import {
    Whatsapp
  } from 'venom-bot'
  
  import checkBeforeExecute from '../../utils/checkBeforeExecute';
  import executeStageMessage from '../stages/execute'
  import { Message } from '../../models/messageModel';
  import { User } from '../../models/userModel';
  
  export default async function (message: Message, client: Whatsapp, user: User) {
    if (message.isGroupMsg === false && message.type === 'chat') {
      await client.sendSeen(message.from);
      let status = 0;

      let responseMessage:any; 
      if(user.stage !== 0){
        let response = await checkBeforeExecute(user,message.body)
        responseMessage = response.messagesToSend
        status = responseMessage.status
      }

      if(responseMessage.messagesToSend.length == 0 && status == 0 || status == 2){
        responseMessage = await executeStageMessage(user, message) 
      }
      return responseMessage;
    }
  }