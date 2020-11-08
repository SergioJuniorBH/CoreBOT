const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'warnings',
    category: 'info',
    description: 'Show the number of warnings one member have',
    aliases: ['avisos', 'alertas'],
    run: async (bot, message, args) => {
        const user = message.mentions.users.first();


        let warnings = await db.get(`warnings_${message.guild.id}_${user.id}`);

        if(warnings === null) warnings = 0;

        message.channel.send(`**${user.username}** tem **${warnings}** aviso(s) neste servidor.`);
    }
}