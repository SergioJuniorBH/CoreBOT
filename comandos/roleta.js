const Discord = require ("discord.js");

exports.run = async (bot, message, args) => {

    var list = [
        'Você puxou o gatilho e... tinha uma bala e você morreu.',
        'Você puxou o gatilho e... ufa, não tinha uma bala, foi por pouco.'
    ];

    var rand = list[Math.floor(Math.random() * list.length)];

    await message.channel.send(`**${rand}**`)

}

exports.help = {
    name: 'roleta'
}