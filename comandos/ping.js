const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    const m = await message.channel.send("Calculando....")
    m.edit(`:ping_pong:  - Pong\n:satellite:  Meu ping está em: \`${Math.round(bot.ws.ping)}\``)
}

exports.help = {
    name: 'ping'
}