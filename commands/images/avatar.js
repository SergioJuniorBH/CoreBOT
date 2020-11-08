const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    category: 'images',
    description: 'Take the avatar of some member',
    run: async (bot, message, args) => {
        if(!message.mentions.users.first()) {
            const embed = new Discord.MessageEmbed()
            .setTitle("🖼️ | SEU AVATAR")
            .setDescription(`[Clique aqui](${message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })}) para baixar o avatar`)
            .setImage(message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024}))
            .setColor("RANDOM")
            message.channel.send(embed)
        } else {
            const embed2 = new Discord.MessageEmbed()
            let user = message.mentions.users.first()
            .setTitle(`**🖼️ AVATAR DE ${user.tag}**`)
            .setDescription(`[Clique aqui](${user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })}) para baixar o avatar`)
            .setImage(user.displayAvatarURL({ dynamic: true, format: "png", size: 1024}))
            .setColor("RANDOM")
            message.channel.send(embed2)
        }
    }
}
