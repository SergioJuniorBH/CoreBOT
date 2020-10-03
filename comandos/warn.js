const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    message.delete();
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Você não tem a permissão de administrador!`)

    let membro = message.mentions.users.first()
    if(!membro) return message.reply(`Por favor, mencione um usuário.`)

    let motivo = args.slice(1).join(" ");
    if(!motivo) return message.reply(`Escreva um motivo para estar mandando este alerta para o usuário.`)

    let embed = new Discord.MessageEmbed()
    .setTitle('AVISO')
    .setColor('RANDOM')
    .setFooter("Staff responsável: "+message.author.username, message.author.displayAvatarURL({size: 32}))
    .setDescription(motivo)

    membro.send(embed)
    message.channel.send(`:thinking: - Finalizei o comando com sucesso!`)

}

exports.help = {
    name: 'warn'
}