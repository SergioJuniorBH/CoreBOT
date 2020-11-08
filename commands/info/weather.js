const Discord = require('discord.js');
const weather = require('weather-js');

module.exports = {
    name: 'weather',
    category: 'info',
    description: 'Show the weather',
    aliases: ['clima'],
    run: async (bot, message, args) => {
        let city = args.join(" ");
        let degreetype = "C";

        await weather.find({search: city, degreeType: degreetype}, function(err, result) {
            if(!city) {
                return message.channel.send('<a:no:766016144720396389> | Você precisa especificar uma localização')
            }

            if(result === undefined || result.length === 0) {
                return message.channel.send(':thinking: | Localização **inválida**')
            }

            var current = result[0].current;
            var location = result[0].location;

            const weatherEmbed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setTitle("INFORMAÇÕES DO CLIMA")
            .setDescription(`${current.skytext}`)
            .setAuthor(`Previsão do tempo para ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .addField('Fuso Horário', `GMT${location.timezone}`, true)
            .addField('Tipo de Grau', location.degreetype, true)
            .addField('Temperatura', `${current.temperature}° Graus`, true)
            .addField('Vento', current.winddisplay, true)
            .addField('Humidade', `${current.humidity}%`, true)
            .addField('Parece', `${current.feelslike}° Graus`)
            message.channel.send(weatherEmbed)
        })
        }
    }