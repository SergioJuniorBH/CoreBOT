const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    category: 'images',
    description: 'Take the avatar of some member',
    run: async (bot, message, args) => {
        let embed = new Discord.MessageEmbed()
        if(!message.mentions.users.first()) {
            embed.setTitle("🖼️ **SEU AVATAR**")
            embed.setDescription(`[Clique aqui](${message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })}) para baixar o avatar`)
            embed.setImage(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024}))
            embed.setColor("RANDOM")
            return message.channel.send(embed)
        } else {
            let user = message.mentions.users.first()
            embed.setTitle(`**🖼️ AVATAR DE ${user.tag}**`)
            embed.setDescription(`[Clique aqui](${user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })}) para baixar o avatar`)
            embed.setImage(user.displayAvatarURL({ dynamic: true, format: "png", size: 1024}))
            embed.setColor("RANDOM")
            return message.channel.send(embed)
        }
    }
}
