const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'goodbye',
    category: 'config',
    description: 'Set "GuildMemberRemove" channel',
    aliases: ['setgoodbye', 'setremove'],
    run: async (bot, message, args) => {
        let channel = message.mentions.channels.first()

        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send('<a:no:766016144720396389> | Você não tem permissão para utilizar este comando.')
        }

        if(!channel) {
            return message.channel.send('<a:no:766016144720396389> | Você não escolheu o canal.')
        }

        db.set(`byechannel_${message.guild.id}`, channel.id)
        message.channel.send(`<a:yes:766016055855284274> | Canal de saída configurado em ${channel}`)
    }
}