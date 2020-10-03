const Discord = require ("discord.js");

exports.run = async (bot, message, args) => {

    var list = [
        'Cara',
        'Coroa'
    ];

    var rand = list[Math.floor(Math.random() * list.length)];

    await message.channel.send(`:coin:  **${rand}**`)

}

exports.help = {
    name: 'moeda'
}