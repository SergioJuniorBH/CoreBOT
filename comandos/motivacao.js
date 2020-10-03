const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    
    var list = [
        'Confie em você mesmo, você consegue!',
        'Todos que duvidam de você são uns fracos, que vão a nenhum lugar na vida, diferente de você, que é um vencedor e vence qualquer batalha, e a vida tem vários planos futuros incríveis pra você.'
    ];

    var rand = list[Math.floor(Math.random() * list.length)];

    await message.channel.send(`:v: | **${rand}**`)
}

exports.help = {
    name: 'motivacao',
    description: 'Forma uma frase motivadora'
}