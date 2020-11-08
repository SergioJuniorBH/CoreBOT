const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'saldo',
    category: 'economy',
    description: 'Balance command',
    aliases: ['balance', 'meusaldo'],
    run: async (bot, message, args) => {
        let user = message.mentions.users.first() || message.author;

        let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);
        if(bal === null) bal = 0;

        const saldoEmbed = new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setDescription("BANCO DO CORE")
        .setDescription(`${user} atualmente você está com C$${bal} em seu saldo bancário.`)

        message.channel.send(saldoEmbed)
    }
}