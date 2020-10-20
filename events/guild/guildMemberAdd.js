const Discord = require('discord.js');

module.exports = (bot, member) => {
    let guild = bot.guilds.cache.get("703809493279965215"); //GUILD ID
    let channel = bot.channels.cache.get("722500911640870933"); //CHANNEL ID
    let emoji = member.guild.emojis.cache.find(emoji => emoji.name === 'leals'); //EMOJI ID

if(guild != member.guild) {
    return console.log('Sai daqui rapaz')
} else {

    let embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTitle(`${emoji} SEJA BEM-VINDO(A) ${emoji}`)
    .setDescription(`${member.user}, seja muito bem-vindo(a) ao servidor ${guild.name}! Atualmente estamos com ${member.guild.memberCount} membros. Por Favor, leia as regras do servidor, para você não cometer vacilos e ser retirado do servidor ou temporáriamente, ou permanentemente!`)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024}))
    .setFooter('ID do usuário: ' + member.user.id)
    .setTimestamp();

    channel.send(embed)
    member.send(`Olá, seja muito bem-vindo ao servidor ${guild.name}, eu sou o Core, o bot criado pelo administrador do servidor, RUIVO. Espero que você se divirta aqui dentro, até mais.`)
}
}