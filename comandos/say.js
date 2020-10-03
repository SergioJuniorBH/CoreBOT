const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    message.channel.send(sayMessage);
}

exports.help = {
    name: 'say'
}