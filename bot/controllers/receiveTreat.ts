import { message } from "../models/VenomBot"
import readMessage from "../services/readMessageSender"
import SendMessage from "../services/SendMessageTo"


export default async function (client:any, message:message) {
    // await client.sendSeen(message.from)

    if(message.isGroupMsg === false && message.type === 'chat' && !message.fromMe && message.from =="556198248600@c.us") {
    
       if(readMessage(message.body,message.from)){
         console.log("Q???")
        //  await client.startTyping(message.from)        
         SendMessage(message.from,0,client);
       }

       
           
    

    }

    
    


    // ESTAGIOS
    // BOAS VINDAS 

}
