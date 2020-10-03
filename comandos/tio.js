const Discord = require ("discord.js");

exports.run = async (bot, message, args) => {
    await message.channel.send("É pavê ou... cê achou que eu ia fazer essa piada né?!")
}

exports.help = {
    name: 'tio'
}