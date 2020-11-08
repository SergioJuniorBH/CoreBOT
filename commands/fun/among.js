const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'among',
    category: 'fun',
    description: 'Call to a new game on Among Us',
    aliases: ['among-us'],
    run: async (bot, message, args) => {

        let cha = db.get(`amonchannel_${message.guild.id}`);

        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel) return message.channel.send('<a:no:766016144720396389> | Você precisa estar conectado em um canal de voz');

        const inv = await voiceChannel.createInvite({
            maxAge: 0,
            unique: false,
            maxUses: 100,
        });

        const thecode = args[0];
        if (thecode.length !== 6) return message.channel.send('<a:no:766016144720396389> | Um código no Among Us só tem até 6 caractéres');
        const thecodeUC = thecode.toUpperCase();

        const region = args[1];
        let r = '';
        if(region.toLowerCase() === 'eu' || region.toLowerCase() === 'europe') r = 'Europe';
        if(region.toLowerCase() === 'na' || region.toLowerCase() === 'northamerica') r = 'North America';
        if(region.toLowerCase() === 'as' || region.toLowerCase() === 'asia') r = 'Asia';
        if(region === 'undefined' || region === '') return message.channel.send('<a:no:766016144720396389> | As únicas regiões disponíveis são: Europe(eu), North America(na) e Asia(as)');

            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(message.member.user.tag)
            .setTitle('NOVO JOGO')
            .addField('**Código**', `${thecodeUC}`, true)
            .addField('**Região**', `${r}`, true)
            .addField('**Canal de Voz**', `[Clique aqui](${inv})`, true)
            .setThumbnail(message.guild.iconURL({ dynamic: true }));
            if(cha === null) {
                message.channel.send(embed)
            } else {
                bot.channels.cache.get(cha).send(embed)
            }
            message.channel.send(`Código da sala enviado com sucesso.`);
    }
}