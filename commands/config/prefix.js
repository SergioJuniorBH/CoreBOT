const Discord = require('discord.js');
const db = require('quick.db');
const { default_prefix } = require('../../config.json')

module.exports = {
    name: 'prefix',
    category: 'config',
    description: 'Set bot prefix',
    aliases: ['setprefix'],
    run: async (bot, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send('<a:no:766016144720396389> | Você não tem permissão para usar este comando.')
        }

        if(!args[0]) {
            return message.channel.send('<a:no:766016144720396389> | Você não escreveu qual será o novo prefixo.')
        }

        if(args[1]) {
            return message.channel.send('<a:no:766016144720396389> | Você não pode configurar o prefixo com 2 argumentos.')
        }

        if(args[0].length > 3) {
            return message.channel.send('<a:no:766016144720396389> | Você não pode configurar o prefixo com 3 argumentos.')
        }

        if(args.join("") === default_prefix) {
            db.delete(`prefix_${message.guild.id}`)
            const resetEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription('**Prefixo resetado para padrão.**')

            await message.channel.send(resetEmbed)
        }

        db.set(`prefix_${message.guild.id}`, args[0])
        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`**Prefixo alterado para** \`${args[0]}\``)

        await message.channel.send(embed)
    }
}