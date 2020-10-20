const Discord = require('discord.js');

module.exports = {
    name: 'warn',
    category: 'moderation',
    description: 'Send a message to DM of member',
    aliases: ['send', 'allert', 'warning', 'enviar', 'mensagem', 'alertar'],
    run: async (bot, message, args) => {
        message.delete();
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:no:766016144720396389> | Você não tem a permissão de administrador!`)

    let membro = message.mentions.users.first()
    if(!membro) return message.channel.send(`<a:no:766016144720396389> | Por favor, mencione um usuário.`)

    let motivo = args.slice(1).join(" ");
    if(!motivo) return message.channel.send(`<a:no:766016144720396389> | Escreva um motivo para estar mandando este alerta para o usuário.`)

    let embed = new Discord.MessageEmbed()
    .setTitle('AVISO')
    .setColor('RANDOM')
    .setFooter("Staff responsável: "+message.author.username, message.author.displayAvatarURL({size: 32}))
    .setDescription(motivo)

    membro.send(embed)
    message.channel.send(`<a:yes:766016055855284274> | Finalizei o comando com sucesso!`)
    }
}