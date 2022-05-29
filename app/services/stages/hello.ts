import { User } from "../../models/userModel"
import { changeUser } from "../../subscribers/database"

async function execute (user: User) {
    const messagesToSend = []
    
    changeUser(user.from, 'stage', 1)

    messagesToSend.push('Olá meu nome Boty sou seu atendente da Pedpizza\n\n*Para que você tenha a melhor experiência, sugiro que espere eu te responder antes de enviar alguma mensagem.*\n\n')
    messagesToSend.push('📃 *Como posso te ajudar?*\n\n *1* - Ver o cardápio\n *2* - Verificar pedido\n\nDigite *MENU* para retornar a este menu inicial.\nDigite *SAIR* para encerrar o atendimento.\n\nDigite somente o *NÚMERO* da opção desejada:')
    return messagesToSend
  }
  

 
  export {
    execute
  }
  