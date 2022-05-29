export default async function SendMessage(from:String, stage: number,client:any){
    client.sendSeen(from);
    client.startTyping(from);
    if(stage == 0){
      
      client.sendText(from, 'Olá meu nome Boty sou seu atendente da Pedpizza\n\n*Para que você tenha a melhor experiência, sugiro que espere eu te responder antes de enviar alguma mensagem.*\n\n');

      client.sendText(from, '📃 *Como posso te ajudar?*\n\n *1* - Ver o cardápio\n *2* - Verificar pedido\n\nDigite *MENU* para retornar a este menu inicial.\nDigite *SAIR* para encerrar o atendimento.\n\nDigite somente o *NÚMERO* da opção desejada:');
      
    }  
}