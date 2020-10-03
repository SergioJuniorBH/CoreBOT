const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    const m = await message.channel.send("Opaaa");
    m.edit(`:person_raising_hand: | Opa, me chamou?\nSe sim eu sou o ${bot.user.username}, meu prefixo nesse servidor é \`c!\`\nPara qualquer dúvida sobre mim, entre neste servidor: https://discord.gg/5vcRmQK \nAté mais!`)
}

exports.help = {
    name: 'message'
}