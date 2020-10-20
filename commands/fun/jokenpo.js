const Discord = require('discord.js');

module.exports = {
    name: 'jokenpo',
    category: 'fun',
    description: 'Rock, paper and scissors',
    aliases: ['pedrapapeltesoura'],
    run: async (bot, message, args) => {
        var list = [
            'Pedra',
            'Papel',
            'Tesoura'
        ];
    
        var rand = list[Math.floor(Math.random() * list.length)];
    
        await message.channel.send(`**${rand}**`)
    }
}