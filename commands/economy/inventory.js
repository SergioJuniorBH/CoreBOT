const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: 'inventory',
    category: 'economy',
    description: "See the user's inventory",
    aliases: ['inventario'],
    run: async (bot, message, args) => {
        let items = await db.fetch(message.author.id);
        if(items === null) items = "Seu inventário está vazio"

        const invenEmbed = new Discord.MessageEmbed()
        .setColor("YELLOW")
        .addField('Inventário', items)
        .setTimestamp()

        message.channel.send(invenEmbed)
    }
}