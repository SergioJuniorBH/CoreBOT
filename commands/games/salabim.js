const Discord = require('discord.js');

module.exports = {
    name: 'salabim',
    category: 'games',
    description: 'See your future',
    aliases: ['advinha', 'futuro', 'advinhar', '8ball', 'future'],
    run: async (bot, message, args) => {
        var list = [
            'Prevejo que sim',
            'Talvez sim',
            'Um talvez bem talvez mesmo...',
            'Pelo visto não',
            'Provavelmente não...',
            'É melhor eu nem falar...'
        ];
    
        var rand = list[Math.floor(Math.random() * list.length)];
    
        let reason = args.join(" ");
    
        if(!reason) {
            return message.channel.send("<a:no:766016144720396389> | Você precisa fazer uma pergunta para que o Salabim preveja seu futuro.")
        } else {
            message.channel.send(`**${rand}**`)
        }
    }
}