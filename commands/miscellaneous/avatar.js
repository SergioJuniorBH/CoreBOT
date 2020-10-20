const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    category: 'miscellanious',
    description: 'Take the avatar of some member',
    run: async (bot, message, args) => {
        let embed = new Discord.MessageEmbed()
        if(!message.mentions.users.first()) {
            embed.setTitle("**SEU AVATAR**")
            embed.setThumbnail(message.author.displayAvatarURL())
            embed.setColor("RANDOM")
            return message.channel.send(embed)
        } else {
            let user = message.mentions.users.first()
            embed.setTitle(`**AVATAR DE ${user.tag}**`)
            embed.setThumbnail(user.displayAvatarURL())
            embed.setColor("RANDOM")
            return message.channel.send(embed)
        }
    }
}