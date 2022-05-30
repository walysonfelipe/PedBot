import { User } from "../../models/userModel"
import { changeUser } from "../../subscribers/database"

async function execute (user: User) {
    const messagesToSend = []
    
    changeUser(user.from, 'stage', 2)

    messagesToSend.push(
        {
          type: 'image',
          url: 'app/images/menu.jpeg',
          name: 'menu',
          caption: ''
        }
      )

    messagesToSend.push('Digite o numero de cada item ..\n\n*⚠️ Obs:* *_Por-favor separar todos por virgula_*')
    return messagesToSend
  }
  

 
  export {
    execute
  }
  