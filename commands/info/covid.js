const Discord = require('discord.js');
const api = require('covidapi');
const fetch = require('node-fetch');

module.exports = {
    name: 'covid',
    category: 'info',
    description: 'Info of Covid-19 stats',
    aliases: ['corona', 'coronavirus', 'corona-virus', 'covid-status'],
    run: async (bot, message, args) => {
        let countries = args.join(" ") || args[0]

        const data = await api.all()

        if(!countries) {
            return message.channel.send('<a:no:766016144720396389> | Você não especificou o país. Se você quiser ver todos, use \`covid all\`')
        }

        if(args[0] === "all") {
            const data = await api.all()

                const allEmbed = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("STATUS DA COVID-19 EM TODO O MUNDO")
                .addField('Casos', data.cases, true)
                .addField('Casos Ativos', data.active, true)
                .addField('Casos Hoje', data.todayCases, true)
                .addField('Casos Recuperados', data.recovered, true)
                .addField('Casos de Morte', data.deaths, true)
                .addField('Casos Críticos', data.critical, true)
                message.channel.send(allEmbed)
            } else {

            let countryData = await api.countries({country: countries})
                const embed2 = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle(`STATUS DA COVID-19 EM ${countries}`)
                .addField('Casos', countryData.cases, true)
                .addField('Casos Ativos', countryData.active, true)
                .addField('Casos Hoje', countryData.todayCases, true)
                .addField('Casos Recuperados', countryData.recovered, true)
                .addField('Casos de Morte', countryData.deaths, true)
                .addField('Casos Críticos', countryData.critical, true)
                message.channel.send(embed2)
        .catch(err => {
            console.log(err)
            message.channel.send(':robot: | **BIP BUP BEEEP**. **Erro no sistema**, provavelmente você colocou um país inválido ou o comando deu erro.')
        })
        }
    }
}