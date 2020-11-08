const Discord = require('discord.js');

module.exports = {
    name: 'serverinfo',
    category: 'info',
    description: 'Show the informations of server',
    aliases: ['infodoservidor'],
    run: async (bot, message, args) => {
        const { guild } = message

        const { region, memberCount, owner, afkTimeout } = guild
        const icon = guild.iconURL()

        const embed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle(`**INFORMAÇÕES DE ${guild.name}**`)
        .setThumbnail(icon)
        .addFields({
            name: '**Região**',
            value: region
        }, {
            name: '**Quantidade de Membros**',
            value: memberCount
        }, {
            name: '**Dono do Servidor**',
            value: owner.user.tag
        }, {
            name: '**AFK Timeout**',
            value: afkTimeout / 60
        })

        await message.channel.send(embed)
    }
}