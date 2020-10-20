const Discord = require('discord.js');

module.exports = (bot, member) => {
    let guild = bot.guilds.cache.get("703809493279965215"); //GUILD ID
    let channel = bot.channels.cache.get("722501731904258110"); //CHANNEL ID
    let emoji = member.guild.emojis.cache.find(emoji => emoji.name === 'lealspb'); //EMOJI ID

if(guild != member.guild) {
    return console.log('Alguém saiu do server.... não é esse.')
} else {

    let embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTitle(`${emoji} ALGUÉM NOS DEIXOU ${emoji}`)
    .setDescription(`${member.user} saiu do servidor ${guild.name}! Então agora estamos com ${member.guild.memberCount} membros.`)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024}))
    .setFooter('ID do usuário: ' + member.user.id)
    .setTimestamp();

    channel.send(embed)
}
}