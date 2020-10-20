const Discord = require('discord.js');

module.exports = {
    name: 'moeda',
    category: 'fun',
    description: 'Head or crown, luck will tell you',
    aliases: ['coinflip', 'caraoucoroa'],
    run: async (bot, message, args) => {
        var list = [
            'Cara',
            'Coroa'
        ];
    
        var rand = list[Math.floor(Math.random() * list.length)];
    
        await message.channel.send(`:coin: | **${rand}**`)
    }
}