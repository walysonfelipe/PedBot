import { existsOnDatabase, saveUserOnDatabase } from "../subscribers/database";

export default function readMessage(body:string , from:string): any {
   

    let user = existsOnDatabase(from)
   
    if (!user) {
      user = saveUserOnDatabase(from)
    }

    console.log(user);
    return true;
}