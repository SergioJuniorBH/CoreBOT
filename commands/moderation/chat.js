const Discord = require('discord.js');

module.exports = {
    name: 'chat',
    category: 'moderation',
    description: 'Turn a channel on and off',
    run: async (bot, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send('<a:no:766016144720396389> | Você não tem permissão para usar este comando.')
        }

        if(!args[0]) {
            return message.channel.send('<a:no:766016144720396389> | Use chat <on/off>')
        }

        const everyone = message.guild.roles.cache.find(e => e.name === "@everyone");

        if(args[0] === "off") {
            message.channel.overwritePermissions([
                {
                    id: everyone.id,
                    deny: ["SEND_MESSAGES"]
                }
            ])

            const lockEmbed = new Discord.MessageEmbed()
            .setColor("YELLOW")
            .setDescription("**Chat parado com sucesso**")
            message.channel.send(lockEmbed)
        }

        if(args[0] === "on") {
            message.channel.overwritePermissions( [
                {
                    id: everyone.id,
                    allow: ['SEND_MESSAGES']
                }
            ])

            const unlockEmbed = new Discord.MessageEmbed()
            .setColor("YELLOW")
            .setDescription("**Chat ligado com sucesso**")
            message.channel.send(unlockEmbed)
        }
    }
}