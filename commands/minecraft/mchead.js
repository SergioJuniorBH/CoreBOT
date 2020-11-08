const Discord = require('discord.js');

module.exports = {
    name: 'mchead',
    category: 'minecraft',
    description: 'Random head of minecraft command',
    run: async (bot, message, args) => {
        let reason = args.join(' ');
    if (reason.length < 1) return message.channel.send('<a:no:766016144720396389>** | Cite um nick de Minecraft**')

    let embed = new Discord.MessageEmbed()

        .setTitle(`Cabeça de ${reason}`)
        .setImage(`https://mc-heads.net/head/${args[0]}`)
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp(new Date())
        .setColor('RANDOM')
    message.channel.send(embed)
    }
}