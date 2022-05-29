import { create } from 'venom-bot';
import initBot from './controllers/receiveTreat'
  (async () => {

    create('PedBot')
      .then((client) => {
        //Evento
        client.onAnyMessage(async (message) => {
          
        //   console.log(`
        //   ------------------------------------------
        //   Tipo:${message.type}
        //   ------------------------------------------
        //   from: ${message.from}
        // `);
        initBot(client,message)
        



        // await client.sendSeen(message.from)
        // await client.startTyping(message.from)
        // if (message.isGroupMsg === false && message.type === 'chat') {
        //   if(message.body === 'oi'){
        //       client.sendText(message.from, 'FALA LINDO, sua messagem foi essa: ' + message.body);
        //   }
        // }
        // infos
          //  console.log(message.body); Mensagem do remetente


          
        });

        


      })
      .catch((erro) => {
        console.log(erro);
      });
})();