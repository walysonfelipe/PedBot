import { User } from "../models/userModel";
import { changeUser, removeUser } from "../subscribers/database";

export default async function (user: User, content: string){
    let status = 0
    const messagesToSend:any[] = []
    
    if (user.stage !== 0) {
        if(content === "MENU" || content === "menu" || content === "Menu"){
            changeUser(user.from,'stage', 0)
            status = 2
          }
          else if(content === "SAIR" || content === "Sair"){
              status = 3
            removeUser(user.from)
            messagesToSend.push('😢 que pena que já vai.. Quando quiser pode voltar!!! estamos te aguardando');
          }
        else if(user.stage === 1 && content != "1" && content != "2" && status != 2){
         status = 1
         messagesToSend.push('❌ Opção inválida.');
        }
    }
    return {
        messagesToSend,
        status
      }
}