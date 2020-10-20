const Discord = require('discord.js');

module.exports = {
    name: 'motivacao',
    category: 'fun',
    description: 'Be happy',
    aliases: ['motivacional', 'feliz'],
    run: async (bot, message, args) => {
        var list = [
            'Não tenha medo da mudança. Coisas boas se vão para que as melhores possam vir.',
            'Vencedor não é aquele que sempre vence, mas sim aquele que nunca para de lutar.',
            'Hoje são dias de guerra, amanhã serão de glória.'
        ];
    
        var rand = list[Math.floor(Math.random() * list.length)];
    
        await message.channel.send(`:v: | **${rand}**`)
    }
}