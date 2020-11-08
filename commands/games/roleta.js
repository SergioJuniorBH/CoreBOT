const Discord = require('discord.js');

module.exports = {
    name: 'roleta',
    category: 'games',
    description: 'Russian roulette',
    aliases: ['roletarussa', 'roulette'],
    run: async (bot, message, args) => {
        var list = [
            'Você puxou o gatilho e... tinha uma bala e você morreu.',
            'Você puxou o gatilho e... ufa, não tinha uma bala, foi por pouco.'
        ];
    
        var rand = list[Math.floor(Math.random() * list.length)];
    
        await message.channel.send(`**${rand}**`)
    }
}