const Discord = require("discord.js");

module.exports = {
    name: 'ping',
    category: 'info',
    description: 'Say the ping of the bot',
    aliases: ['latency'],
    run: async (bot, message, args) => {
    const m = await message.channel.send("<a:loading:766057285784174633> | Calculando....")
    m.edit(`:ping_pong: | Pong\n:satellite: - Latência está em: \`${Math.round(bot.ws.ping)}\``)
    }
}
