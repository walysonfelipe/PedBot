import {
    Whatsapp
} from 'venom-bot'



import { Message } from '../models/messageModel';
import { User } from '../models/userModel';
import userService from '../services/userService';

export default async function (client: Whatsapp) {
    client.onAnyMessage(async (message: Message) => {
        let user: User;
        if (
            !message.fromMe &&
            message.from !== 'status@broadcast' &&
            message.isGroupMsg === false) {    
             user = await userService(message.from);
                   

            }
    });
}