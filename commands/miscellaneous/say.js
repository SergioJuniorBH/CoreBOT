const Discord = require('discord.js');

module.exports = {
    name: 'say',
    category: 'miscellaneous',
    description: 'Make the say whatever u want',
    aliases: ['speak', 'falar', 'fala'],
    run: async (bot, message, args) => {
    const sayMessage = args.join(" ");
    if(!sayMessage) {
        return message.channel.send('<a:no:766016144720396389> | Você não especificou a mensagem que eu tenho que falar')
    }
    message.delete().catch(O_o => {});
    message.channel.send(sayMessage);
    }
}