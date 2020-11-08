const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'setban',
    category: 'config',
    description: 'Set the ban message channel',
    aliases: ['set-ban', 'setbanchannel'],
    run: async (bot, message, args) => {
        let channel = message.mentions.channels.first()

        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send('<a:no:766016144720396389> | Você não tem permissão para utilizar este comando.')
        }

        if(!channel) {
            return message.channel.send('<a:no:766016144720396389> | Você não escolheu o canal.')
        }

        db.set(`banchannel_${message.guild.id}`, channel.id)
        message.channel.send(`<a:yes:766016055855284274> | Canal para mensagens de ban configurado em ${channel}`)
    }
}