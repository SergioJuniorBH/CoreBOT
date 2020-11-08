const Discord = require('discord.js');
const math = require('mathjs');

module.exports = {
    name: 'math',
    category: 'fun',
    description: 'Make a calculation',
    aliases: ['matematica', 'calculo', 'calculadora'],
    run: async (bot, message, args) => {
        if(!args[0]) {
            return message.channel.send('<:nope:761333455148810280> | Você precisa providênciar o cálculo que eu devo fazer.')
        }

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch(e) {
            message.channel.send('<:nope:761333455148810280> | Providêncie um cálculo válido')
        }

        const nerdEmbed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle("BIB BUP BEEEP...")
        .addField('**Questão**', `\`\`\`css\n${args.join(" ")}\`\`\``)
        .addField('**Resposta**', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(nerdEmbed)
    }
}