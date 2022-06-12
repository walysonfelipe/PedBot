import {
    Whatsapp
} from 'venom-bot'

import userService from '../services/userService';
import readMessages from '../services/messages/read';

import { Message } from '../models/messageModel';
import { User } from '../models/userModel';

export default async function (client: Whatsapp) {
    client.onAnyMessage(async (message: Message) => {
        let user: User;
        if (
            !message.fromMe &&
            message.from !== 'status@broadcast' &&
            message.isGroupMsg === false) {    
             user = await userService(message.from);

             let response = await readMessages(message, client, user);

             console.log(response);
            }
    });
}