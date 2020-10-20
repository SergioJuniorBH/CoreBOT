const Discord = require('discord.js')

module.exports = {
    name: 'uptime',
    category: 'info',
    description: 'Time the bot is online',
    aliases: ['acordado', 'online', 'on'],
    run: async (bot, message, args) => {
        let totalSeconds = bot.uptime / 1000;
        let days = Math.floor(totalSeconds / 86400);
        let hour = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
    
        message.channel.send(`:sleeping:  Faz **${days} dias, ${hour} horas, ${minutes} minutos, ${seconds} segundos** que estou acordado.\n:yawning_face:  Ai ai, que sono...`)
    }
}