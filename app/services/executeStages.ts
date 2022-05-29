import {
    Whatsapp
  } from 'venom-bot'

import { Message } from '../models/botModel'
import { User } from '../models/userModel'

import stages from './stages'
import sendMessage from '../services/sendMessage'

export default async function (
    message: Message,
    client: Whatsapp,
    user: User,
    ){
        const messagesToSend = await stages[user.stage].customer.execute(user)

        await sendMessage(messagesToSend,message,client)
}