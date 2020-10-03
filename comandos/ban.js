const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first()
         message.delete()
        var channel = bot.channels.cache.get("747902957055639645")
        if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.reply(`:x: | Eu não tenho permissão para bani-lo.`)
        let membro2 = message.mentions.users.first() || bot.users.cache.get(args[0]);
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply(`:x: | Você, não tem permissão para banir.`)
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!member) return message.reply(`:warning: | Mencione o usuário que você quer banir.`)
        let motivooooooo = args[1];
        if(!motivooooooo) return message.reply(`:warning: | Diga um motivo.`)
        
        await member.ban();

    let embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle(`:hammer_pick: **BANIDO** :hammer_pick:`)
    .setDescription(`:no_entry_sign: ${member} foi de raloooooo :no_entry_sign:`)
    .setThumbnail(member.avatarURL)
    .addField(`:question: - Quem aplicou?`, message.author.username, true)
    .addField(`:exclamation: - Motivo `, motivooooooo, true)
    .setImage("https://media.tenor.com/images/048b3da98bfc09b882d3801cb8eb0c1f/tenor.gif")
    .setFooter(`Banido por: ${message.author.tag}`)

    message.channel.send(embed)

    let banidoDM = new Discord.MessageEmbed()
    .setTitle(`:hammer_pick: **BANIDO** :hammer_pick:`)
    .setThumbnail(gAvatar)
    .setDescription(`:no_entry_sign: | Você foi Banido, do ${message.guild.name} achou que ia quebrar as regras e sair impune danadinho?! :no_entry_sign:`)
    .addField(`:question: - Quem aplicou?`, message.author.username, true)
    .addField(`:exclamation: -  Motivo `, motivooooooo, true)
    .setImage('https://media.tenor.com/images/048b3da98bfc09b882d3801cb8eb0c1f/tenor.gif')
    
    user.send(banidoDM)
}

exports.help = {
    name: 'ban'
}