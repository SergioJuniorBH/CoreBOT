const Discord = require('discord.js');
const figlet = require('figlet');

module.exports = {
    name: 'ascii',
    category: 'fun',
    description: 'Form words in ASCII',
    run: async (bot, message, args) => {
        if(!args[0]) {
            return message.channel.send('<:nope:761333455148810280> | Você precisa formar algum texto.')
        }

        msg = args.join(" ");

        figlet.text(msg, function (err, data) {
            if(err) {
                console.log(err)
            }
            if(data.length > 2000) {
                return message.channel.send('<:nope:761333455148810280> | Por favor, forneça um texto com menos de 2000 caractéres.')
            }

            message.channel.send('```' + data + '```')
        })
    }
}