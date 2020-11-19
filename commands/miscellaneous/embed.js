const Discord = require('discord.js');

module.exports = {
    name: 'embed',
    category: 'miscellaneous',
    description: 'Make a embed message',
    run: async (bot, message, args) => {
        let argument = args.join(" ");
        if(!argument) {
            return message.channel.send('<:not_stonks:776890257198678017> | Você não especificou o conteúdo do embed')
        }

        const persoEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('EMBED PERSONALIZADO')
        .setAuthor(`Embed feito por ${message.author.username}`)
        .setDescription(argument)
        .setTimestamp()

        message.channel.send(persoEmbed)
    }
}
