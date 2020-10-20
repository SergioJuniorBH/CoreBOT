const Discord = require('discord.js');

module.exports = {
    name: 'clear',
    category: 'moderation',
    description: 'Clean one number of messages',
    aliases:['clean', 'delete'],
    run: async (bot, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("<a:no:766016144720396389> | Você não tem a permissão de gerenciar mensagens.")
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount <1 || deleteCount >101)
    return message.reply("<a:no:766016144720396389>| Forneça a quantidade de mensagens que você quer apagar entre um número de 1 a 100.")

    const fetched = await message.channel.messages.fetch({ limit: deleteCount + 1});
    message.channel
    .bulkDelete(fetched)
    message.channel.send(`:wastebasket:  ${args[0]} mensagens limpas com sucesso.`)
    .catch(error => console.log(`<a:no:766016144720396389> | Não foi possível deletar mensagens por: ${error}`)
    )
    }
}