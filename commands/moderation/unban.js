const Discord = require('discord.js');

module.exports = {
    name: 'unban',
    category: 'moderation',
    description: 'Unban members',
    run: async (bot, message, args) => {
        message.delete()
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<a:no:766016144720396389> | Você não tem permissão para desbanir usuários.`)
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`<a:no:766016144720396389> | Eu não tenho permissão para desbanir usuários.`)
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    
        if(!args[0]) return message.channel.send(`<a:no:766016144720396389> | ${message.author.username} forneça um usuário válido para ser desbanido!`)
    
        let bannedMember = await bot.users.fetch(args[0])
        if(!bannedMember) return message.channel.send(`:thinking: | Você precisa fornecer o ID do usuário que você quer desbanir.`)
    
        let reason = args.slice(1).join(" ")
        if (!reason) reason = (`:thinking: | Você precisa dar um motivo para estar desbanindo essa pessoa.`)
        try {
            message.guild.members.unban(bannedMember, reason)
    
            const desbanido = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setTitle(`:hammer_pick: **DESBANIDO** :hammer_pick:`)
            .setDescription(`:white_check_mark: ${bannedMember} pode voltar ao servidor :white_check_mark:`)
            .setThumbnail(bannedMember.avatarURL)
            .addField(`:question: - Quem desbaniu?`, message.author.username, true)
            .addField(`:exclamation: - Motivo` , reason, true)
            .setFooter(`Desbanido por: ${message.author.tag}`)
    
            message.channel.send(desbanido)
        }catch(e) {
            console.log(e.message) 
        }
    }
}