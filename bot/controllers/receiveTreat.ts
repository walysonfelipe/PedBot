
exports.readMessage = async (client:any, message:any) => {
    await client.sendSeen(message)

    
    //verificar
    await client.startTyping(message)


    // ESTAGIOS
    // BOAS VINDAS 

}
