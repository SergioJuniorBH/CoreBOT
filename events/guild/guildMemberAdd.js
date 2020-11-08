const Discord = require('discord.js');
const db = require('quick.db');

module.exports = (bot, member, message) => {
    let chx = db.get(`welchannel_${member.guild.id}`);

if(chx === null) {
    return;
}

    let embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTitle('<:beers:766061024691617792> SEJA BEM-VINDO(A) <:beers:766061024691617792>')
    .setDescription(`${member.user}, seja muito bem-vindo(a) ao servidor, espero que você se divirta aqui dentro e faça novas amizades. Atualmente o servidor está com ${member.guild.memberCount} membros.`)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024}))
    .setFooter('ID do usuário: ' + member.user.id)
    .setTimestamp();

    bot.channels.cache.get(chx).send(embed)
    member.send(`Olá, seja muito bem-vindo(a) ao servidor, meu nome é Core. Espero que você se divirta aqui dentro, até mais.`)
}