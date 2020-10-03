const Discord = require ("discord.js");

exports.run = async (bot, message, args) => {

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

exports.help = {
    name: 'dado'
}