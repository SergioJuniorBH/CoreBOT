const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

    const role = await message.guild.roles.cache.find(r = r.id === "726603253713862676");
    const sender = message.author;

    if (!message.member.roles.cache.some(r => [
        "750423932149956620",
        "733415288917196860",
        "750426055948501003"
    ].includes(r.id))) {
        return message.channel.send(`${sender} este comando só funciona para administradores do servidor.`)
    } else if (message.content.includes("on")) {
        await role.setPermissions(67109889);
        await message.channel.send(`:white_check_mark:  O canal foi bloquado com sucesso por ${sender}.`)
    } else if (message.content.includes("off")) {
        await role.setPermissions(67111937);
        await message.channel.send(`:white_check_mark:  O canal foi desbloquado com sucesso por ${sender}`);
    } else {
        return message.channel.send(`:thinking:  ${sender} se você digitou o comando errado, o certo é c!block on para bloquar o chat, e c!block off se você quiser desbloquear o chat.`)
    }
}

exports.help = {
    name: 'block'
}