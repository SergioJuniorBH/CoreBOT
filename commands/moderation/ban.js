const Discord = require('discord.js');

module.exports = {
    name: 'ban',
    category: 'moderation',
    description: 'Ban someone',
    aliases: ['banir'],
    run: async (bot, message, args) => {
        let user = message.mentions.users.first()
        message.delete()
       var channel = bot.channels.cache.get("747902957055639645")
       if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send(`<a:no:766016144720396389> | Eu não tenho permissão para bani-lo.`)
       let membro2 = message.mentions.users.first() || bot.users.cache.get(args[0]);
       if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`<a:no:766016144720396389> | Você, não tem permissão para banir.`)
       let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
       if(!member) return message.reply(`:warning: | Mencione o usuário que você quer banir.`)
       let motivooooooo = args[1];
       if(!motivooooooo) return message.reply(`:warning: | Diga um motivo.`)
       message.delete()
       let certeza = new Discord.MessageEmbed()
       .setColor('RED')
       .setTitle('**CERTEZA?**')
       .setDescription(`:hammer_pick: Você tem certeza de que quer banir ${member}? :hammer_pick:`)
       message.channel.send(certeza).then(msg => {
           msg.react("✅");
           let filtro = (reaction, usuario) => reaction.emoji.name === "✅" && usuario.id === message.author.id;
           const coletor = msg.createReactionCollector(filtro, {max: 1});

           coletor.on("collect", em => {
            em.remove(message.author.id);
            member.ban();

            let embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`:hammer_pick: **BANIDO** :hammer_pick:`)
            .setDescription(`<a:baniiido:761332235797921833> ${member} foi de raloooooo <a:baniiido:761332235797921833>`)
            .setThumbnail(member.avatarURL)
            .addField(`<a:devil_parrot:750439079581057197> - Quem aplicou?`, message.author.username, true)
            .addField(`:warning: - Motivo `, motivooooooo, true)
            .setImage("https://media.tenor.com/images/048b3da98bfc09b882d3801cb8eb0c1f/tenor.gif")
            .setFooter(`Banido por: ${message.author.tag}`)
         
            message.channel.send(embed)
         
            let banidoDM = new Discord.MessageEmbed()
            .setTitle(`<a:baniiido:761332235797921833> **BANIDO** <a:baniiido:761332235797921833>`)
            .setThumbnail(gAvatar)
            .setDescription(`:no_entry_sign: | Você foi Banido, do ${message.guild.name} achou que ia quebrar as regras e sair impune danadinho?! :no_entry_sign:`)
            .addField(`<a:devil_parrot:750439079581057197> - Quem aplicou?`, message.author.username, true)
            .addField(`:warning: -  Motivo `, motivooooooo, true)
            .setImage('https://media.tenor.com/images/048b3da98bfc09b882d3801cb8eb0c1f/tenor.gif')
            
            member.send(banidoDM)
        });
       })
}
    }