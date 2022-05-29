import { create} from 'venom-bot';
import messageReceiver from './controllers/messageReceiver'
create('PedBot')
    .then((client) => {
       messageReceiver(client); 
    }).catch(clientErr => {
        console.log(clientErr);
    });