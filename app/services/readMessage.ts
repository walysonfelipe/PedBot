import {
    Whatsapp
} from 'venom-bot'

import { Message } from '../models/botModel';
import { existsOnDatabase, saveUserOnDatabase } from '../subscribers/database';
import checkBeforeExecute from './checkBeforeExecute';
import executeStages from './executeStages'
import sendMessage from '../services/sendMessage'
export default async function (message:Message, client:Whatsapp){
    if(message.isGroupMsg === false && message.type === 'chat' && !message.fromMe && message.from =="556198248600@c.us") {
        let user = existsOnDatabase(message.from)
   
        if (!user) {
          user = saveUserOnDatabase(message.from)
        }
        await client.sendSeen(message.from);
        let status = 0;
        if(user.stage !== 0){
            const response = await checkBeforeExecute(user, message.body)

            if (response.messagesToSend.length) {
                await sendMessage(response.messagesToSend, message, client) 
            }
            status = response.status
        }
        
        if(status == 0 || status == 2){
            await executeStages(message, client, user)
        }

        //  if(user.stage !== 0){
        //     const response = await checkBeforeExecute(user, message.body)
        //    if(response.messagesToSend.length){
        //     await sendMessage(response.messagesToSend, message, client)     
        //    }
        //     else{
        //         await executeStages(message, client, user)
        //     }
        // }
    
        
        
    }    
}

