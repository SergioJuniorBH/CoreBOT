const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'userinfo',
    category: 'info',
    description: 'Show the informations of some user',
    aliases: ['user-info', 'informaçoes-de-usuario'],
    run: async (bot, message, args) => {
        const { guild, channel } = message
        const user = message.mentions.users.first()


        if(!user) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`Informações sobre ${message.author.username}`)
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
            .addField('Tag do Usuário', message.author.tag, true)
            .addField('Nickname', message.author.nickname, true)
            .addField('Criou sua Conta do Discord em', moment(message.author.createdTimestamp).format('DD/MM/YYYY'))
            .addField('ID', message.author.id, true)
            .addField('Status', message.author.presence.status, true)
            .addField('Está Jogando', message.author.presence.activities)
            .setTimestamp()

            message.channel.send(embed)

        } else {
            const embed = new Discord.MessageEmbed()
            embed.setAuthor(`Informações sobre ${user}`)
            embed.setThumbnail(user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
            embed.addField('Tag do Usuário', user.tag, true)
            embed.addField('Nickname', user.nickname, true)
            embed.addField('Criou sua Conta do Discord em', moment(user.createdTimestamp).format('DD/MM/YYYY'))
            embed.addField('ID', user.id, true)
            embed.addField('Status', user.presence.status, true)
            embed.setTimestamp()

            message.channel.send(embed)
        }
    }
}
