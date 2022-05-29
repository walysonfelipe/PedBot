import {
    Whatsapp
} from 'venom-bot'

import { Message } from '../models/botModel';
import { existsOnDatabase, saveUserOnDatabase } from '../subscribers/database';
import sendMessage from './executeStages'

export default async function (message:Message, client:Whatsapp){
    if(message.isGroupMsg === false && message.type === 'chat' && !message.fromMe && message.from =="556198248600@c.us") {
        let user = existsOnDatabase(message.from)
   
        if (!user) {
          user = saveUserOnDatabase(message.from)
        }
        await client.sendSeen(message.from);
        await client.startTyping(message.from);

        await sendMessage(message, client, user)
        
    }    
}

