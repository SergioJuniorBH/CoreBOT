const Discord = require('discord.js');

module.exports = {
    name: 'dado',
    category: 'fun',
    description: 'Command to get a random number of the dice',
    aliases: ['dice'],
    run: async (bot, message, args) => {
        var list = [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
        ];
    
        var rand = list[Math.floor(Math.random() * list.length)];
    
        await message.channel.send(`:game_die: | ${message.author.username} girou o dado e conseguiu o número **${rand}**`)
    }
}