import {
    Whatsapp
} from 'venom-bot'

import { Message } from '../models/botModel';
import readMessage from '../services/readMessage';

export default async function (client: Whatsapp) {
    client.onAnyMessage(async (message: Message) => {
       await readMessage(message,client)
    });
}