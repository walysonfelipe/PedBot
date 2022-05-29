import { Whatsapp } from "venom-bot";
import { Message } from "../models/botModel";

export default async function (
    messagesToSend: any,
    message: Message,
    client: Whatsapp,
    ){
        for (let index = 0; index < messagesToSend.length; index++) {
            const element = messagesToSend[index]
            await client.sendText(message.from, String(element))
            .catch((erro) => {
              console.error('Error when sending: ', erro) 
            })
        }
}