const Discord = require('discord.js');
const db = require('quick.db');
const { getInfo } = require('../../handlers/xp')

module.exports = {
    name: 'level',
    category: 'info',
    description: 'Get the user level',
    aliases: ['lvl'],
    run: async (bot, message, args) => {
        const user = message.mentions.users.first() || message.author;

        if(user.id === bot.user.id) {
            return message.channel.send('<a:devil_parrot:750439079581057197> | Eu estou em um level que nenhum humano consegue calcular.')
        }

        if(user.bot) {
            return message.channel.send('<a:no:766016144720396389> | Bots não tem levels.')
        }

        let xp = db.get(`xp_${user.id}_${message.guild.id}`) || 0;
        const { level, remxp, levelxp} = getInfo(xp);
        if(xp === 0) {
            const zeroEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setThumbnail(user.displayAvatarURL({ dynamic: true, format: "png", size: 1024}))
            .setDescription(`${user.tag} tem **0** xp`)

            await message.channel.send(zeroEmbed)
        }

        let xpembed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(user.username, message.guild.iconURL())
        .setThumbnail(user.displayAvatarURL({ dynamic: true, format: "png", size: 1024}))
        .setDescription(`**LEVEL** - ${level}\n\n**XP** - ${remxp}/${levelxp}`)

        message.channel.send(xpembed)
    }
}