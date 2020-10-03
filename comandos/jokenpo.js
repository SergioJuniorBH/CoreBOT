const Discord = require ("discord.js");

exports.run = async (bot, message, args) => {

    var list = [
        'Pedra',
        'Papel',
        'Tesoura'
    ];

    var rand = list[Math.floor(Math.random() * list.length)];

    await message.channel.send(`**${rand}**`)

}

exports.help = {
    name: 'jokenpo'
}