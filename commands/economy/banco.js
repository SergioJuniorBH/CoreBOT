const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: 'banco',
    category: 'economy',
    description: 'Server leaderboard',
    aliases: ['leaderboard'],
    run: async (bot, message, args) => {
        let money = db.startsWith(`money_${message.guild.id}`, { sort: ".data" })

        let content = "";

        for (let i = 0; i < money.length; i++) {
            let user = bot.users.cache.get(money[i].ID.split('_')[2]).username

            content += `${i+1}.${user} - ${money[i].data} \n`;

            const bancoEmbed = new Discord.MessageEmbed()
            .setColor("YELLOW")
            .setTitle(`Banco do Core em ${message.guild.name}`)
            .setDescription(`${content}`)
            .setTimestamp()

            message.channel.send(bancoEmbed)
        }
    }
}