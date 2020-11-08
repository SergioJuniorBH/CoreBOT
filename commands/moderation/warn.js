const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'warn',
    category: 'moderation',
    description: 'Send a message to DM of member',
    aliases: ['send', 'allert', 'warning', 'enviar', 'mensagem', 'alertar'],
    run: async (bot, message, args) => {
        message.delete();
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:no:766016144720396389> | Você não tem a permissão de administrador!`)

    let user = message.mentions.users.first()
    if(!user) return message.channel.send(`<a:no:766016144720396389> | Por favor, mencione um usuário.`)

    let motivo = args.slice(1).join(" ");
    if(!motivo) return message.channel.send(`<a:no:766016144720396389> | Escreva um motivo para estar mandando este alerta para o usuário.`)

    if(message.mentions.users.first().bot) {
        return message.channel.send('<a:no:766016144720396389> | Não é possível alertar um bot.')
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if(warnings === 3) return message.channel.send(`${user} já tem 3 alertas`);

    if(warnings === null) {
        db.set(`warnings_${message.guild.id}_${user.id}`, 1);
        let embed = new Discord.MessageEmbed()
    .setTitle('AVISO')
    .setColor('RANDOM')
    .addField(`Você foi alertado em:`, message.guild.name)
    .setFooter("Staff responsável: "+message.author.username, message.author.displayAvatarURL({size: 32}))
    .setDescription(motivo)

    user.send(embed)
    message.channel.send(`<a:yes:766016055855284274> | Finalizei o comando com sucesso!`)
    }

    if(warnings !== null){
        db.add(`warnings_${message.guild.id}_${user.id}`, 1)
        let embed2 = new Discord.MessageEmbed()
    .setTitle('AVISO')
    .setColor('RANDOM')
    .addField(`Você foi alertado em:`, message.guild.name)
    .setFooter("Staff responsável: "+message.author.username, message.author.displayAvatarURL({size: 32}))
    .setDescription(motivo)

    user.send(embed2)
    message.channel.send(`<a:yes:766016055855284274> | Finalizei o comando com sucesso!`)
    }
    }
}