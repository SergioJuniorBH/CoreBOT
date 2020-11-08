const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: 'work',
    category: 'economy',
    description: 'The work of users',
    aliases: ['trabalho'],
    run: async (bot, message, args) => {
        let user = message.author;
        let author = await db.fetch(`worked_${message.guild.id}_${user.id}`);

        let timeout = 600000;

        if(author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author));
            const naopodeEmbed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setDescription(`Você não pode trabalhar durante **${time.minutes} minutos e ${time.seconds} segundos**. Tire um descanso.`)

            message.channel.send(naopodeEmbed);
        } else {
            let amount = Math.floor(Math.random() * 80) + 1;
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            db.set(`worked_${message.guild.id}_${user.id}`, Date.now())

            const trabalhouEmbed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle("OLHA O PAGAMENTOOOOO")
            .setDescription(`${user}, você trabalhou muito, tome como recompensa C$${amount}`)

            message.channel.send(trabalhouEmbed)
        }
    }
}