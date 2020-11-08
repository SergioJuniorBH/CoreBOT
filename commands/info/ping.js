const Discord = require("discord.js");

module.exports = {
    name: 'ping',
    category: 'info',
    description: 'Say the ping of the bot',
    aliases: ['latency'],
    run: async (bot, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription(`:ping_pong: | Pong\n:satellite: - Latência está em: \`${Math.round(bot.ws.ping)}\``)

    message.channel.send(embed)
    }
}
