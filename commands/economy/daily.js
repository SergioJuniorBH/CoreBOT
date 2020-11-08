const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: 'daily',
    category: 'economy',
    description: 'Receive a daily award of coins',
    aliases: ['diario'],
    run: async (bot, message, args) => {
        let user = message.author;

        let timeout = 86400000;
        let amount = 500;

        let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

        if(daily !== null && timeout - (Date.now() - daily > 0)) {
            let time = ms(timeout - (Date.now() - daily));

            const peraEmbed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setDescription(`Você já coletou sua recompensa diária, volte novamente em **${time.days} dias, ${time.hours} horas, ${time.minutes} minutos e ${time.seconds} segundos**`)

            message.channel.send(peraEmbed)
        } else {
            db.add(`money_${message.guild.id}_${user.id}`, amount);
            db.set(`daily_${message.guild.id}_${user.id}`, Date.now());

            const decimoterceiroEmbed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle("SEU SALÁRIO CHEGOU")
            .setDescription(`Foram adicionados C$${amount} em sua conta.`)

            message.channel.send(decimoterceiroEmbed)
        }
    }
}