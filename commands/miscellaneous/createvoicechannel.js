const Discord = require('discord.js');
const { prefix } = require('../../config.json')

module.exports = {
    name: 'createvoicechannel',
    category: 'miscellaneous',
    description: 'Crete a new voice channel on Discord server',
    aliases: ['voicechannel'],
    run: async (bot, message, args) => {

        const name = args.join(" ");

        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send('<a:no:766016144720396389> | Você não tem permissão para criar um canal.')
        }

        if(!name) {
            return message.channel.send('<a:no:766016144720396389> | Você não disse qual será o nome do canal.')
        }
            message.guild.channels.create(name, {
                type: 'voice'
            })

            message.channel.send(`<a:yes:766016055855284274> | Canal ${name} criado com sucesso.`)
    }
}