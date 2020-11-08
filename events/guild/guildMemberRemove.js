const Discord = require('discord.js');
const db = require('quick.db');

module.exports = (bot, member, message) => {
    let chy = db.get(`byechannel_${member.guild.id}`);

    if(chy === null) {
        return;
    }

    let embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("<:rip:766061024070729768> ALGUÉM NOS DEIXOU <:rip:766061024070729768>")
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setDescription(`${member.user}, deixou nosso servidor. Então atualmente o servidor está com ${member.guild.memberCount} membros.`)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024}))
    .setFooter('ID do usuário: ' + member.user.id)
    .setTimestamp();

    bot.channels.cache.get(chy).send(embed)
}