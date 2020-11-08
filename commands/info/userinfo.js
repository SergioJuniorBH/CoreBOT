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
            .addFields({
                name: 'Tag do usuário',
                value: message.author.tag
            }, {
                name: 'Nickname',
                value: message.author.nickname || 'Nenhum'
            }, {
                name: 'Criou sua conta do Discord em',
                value: moment(message.author.createdTimestamp).format('DD/MM/YYYY')
            }, {
                name: 'ID',
                value: message.author.id
            }, {
                name: 'Status',
                value: message.author.presence.status
            }, {
                name: 'Jogo que está jogando agora',
                value: message.author.presence.activities
            })
            .setTimestamp()

            message.channel.send(embed)

        } else {
            const embed2 = new Discord.MessageEmbed()
            .setAuthor(`Informações sobre ${user}`)
            .setThumbnail(user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
            .addFields({
                name: 'Tag do usuário',
                value: user.tag
            }, {
                name: 'Nickname',
                value: user.nickname || 'Nenhum'
            }, {
                    name: 'Criou sua conta do Discord em',
                    value: moment(message.author.createdTimestamp).format('DD/MM/YYYY')
            }, {
                name: 'ID',
                value: user.id
            }, {
                name: 'Status',
                value: user.presence.status
            }, {
                name: 'Jogo que está jogando agora',
                value: user.presence.activities
            })
            .setTimestamp()

            message.channel.send(embed2)
        }
    }
}