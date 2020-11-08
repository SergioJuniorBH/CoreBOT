const Discord = require('discord.js');

module.exports = {
    name: 'slow',
    category: 'moderation',
    description: 'Slow a channel',
    aliases: ['slowmode', 'canal-lento'],
    run: async (bot, message, args) => {
        const { channel } = message

        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send('<a:no:766016144720396389> | Você não tem permissão para ativar slowmode neste servidor')
        }

        let duration = args[0]

        if(duration === 'off') {
            duration = 0;
        }

        if(isNaN(duration)) {
            message.channel.send('<a:no:766016144720396389> | Providencie um número válido ou a palavra "off"')
        }

        channel.setRateLimitPerUser(duration)
        const embed = new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setDescription(`O slowmode para este canal foi configurado para ${duration}`)
        message.channel.send(embed)
    }
}