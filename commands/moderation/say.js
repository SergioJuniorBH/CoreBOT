const Discord = require('discord.js');

module.exports = {
    name: 'say',
    category: 'moderation',
    description: 'Make the say whatever u want',
    aliases: ['speak', 'falar', 'fala'],
    run: async (bot, message, args) => {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    message.channel.send(sayMessage);
    }
}