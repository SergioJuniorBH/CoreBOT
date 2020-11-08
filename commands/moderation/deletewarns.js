const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'deletewarns',
    category: 'moderation',
    description: 'Remove warnings for some user',
    aliases: ['removewarns', 'remove-warns', 'removeravisos', 'remover-avisos', 'removeralertas', 'remover-alertas'],
    run: async (bot, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('<a:no:766016144720396389> | Você não consegue remover alertas de membros neste servidor.');

        const user = message.mentions.users.first()
        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

        if(!user) return message.channel.send('<a:no:766016144720396389> | Você precisa mencionar o usuário que você quer retirar os avisos');

        if(warnings === null) return message.channel.send(`**${user.username} não tem alertas neste servidor**`);


        db.delete(`warnings_${message.guild.id}_${user.id}`);

        message.channel.send(`<a:yes:766016055855284274> | Alertas de ${user.username} foram limps com sucesso!`)
    }
}