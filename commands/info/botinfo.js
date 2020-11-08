const Discord = require('discord.js');
const { version } = require('../../package.json');
const db = require('quick.db');
const { utc } = require('moment');
const { default_prefix } = require('../../config.json');
const os = require('os');
const ms = require('ms');

module.exports = {
    name: 'botinfo',
    category: 'info',
    description: 'Show the informations of bot',
    alises: ['bot-info', 'informaçoesdobot', 'informaçoes-do-bot'],
    run: async (bot, message, args) => {

        let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;

    const core = os.cpus()[0];

    function formatBytes(bytes) {
        if(bytes === 0) {
            return `0 Bytes`
        };
    
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes / Math.log(1024)));
        return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`
    }

        const embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle("MINHAS INFORMAÇÕES")
        .setAuthor(`Informações sobre ${bot.user.username}`)
        .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024}))
        .addFields({
            name: 'Minha tag',
            value: bot.user.tag
        }, {
            name: 'Versão',
            value: version
        }, {
            name: 'Número de comandos',
            value: bot.commands.size
        }, {
            name: 'Número de servidores que eu estou',
            value: bot.guilds.cache.size
        }, {
            name: 'Número de membros que eu conheço',
            value: bot.users.cache.size
        }, {
            name: 'Número de canais que eu vigio',
            value: bot.channels.cache.size
        }, {
            name: 'Versão do Node.Js',
            value: process.version
        }, {
            name: 'Versão do Discord.Js',
            value: Discord.version
        }, {
            name: 'Prefixo neste servidor',
            value: prefix
        }, {
            name: 'Status',
            value: bot.user.presence.status
        }, {
            name: 'Fui criado em',
            value: utc(bot.user.createdAt).format('DD/MM/YYYY')
        })
        .addField('Sistema', [
            `**Plataforma:** ${process.platform}`,
            `**Uptime:** ${ms(os.uptime() * 1000, {long: true})}`,
            `**CPU:**`,
            `\u200b Núcleos: ${os.cpus().length}`,
            `\u200b Modelo: ${core.model}`,
            `\u200b Velocidade: ${core.speed}MHz`,
        ])
        .setTimestamp()

        message.channel.send(embed)
        
    }
}