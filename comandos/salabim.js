const Discord = require ("discord.js");

exports.run = async (bot, message, args) => {

    var list = [
        'Prevejo que sim',
        'Talvez sim',
        'Um talvez bem talvez mesmo...',
        'Pelo visto não',
        'Provavelmente não...',
        'É melhor eu nem falar...'
    ];

    var rand = list[Math.floor(Math.random() * list.length)];

    let reason = args.slice(1).join(" ")

    if(!reason) {
        return message.reply("Você precisa fazer uma pergunta para que o Salabim preveja seu futuro.")
    } else {
        message.channel.send(`**${rand}**`)
    }
}

exports.help = {
    name: 'salabim'
}