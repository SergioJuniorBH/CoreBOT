const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'ideia',
    category: 'info',
    description: 'Make one idea',
    aliases: ['idea', 'sugestao'],
    run: async (bot, message, args) => {
        message.delete()
        const content = args.join(" ");

        let chg = db.get(`sugchannel_${message.guild.id}`);


    if(!args[0]) {
        return message.channel.send(`:thinking: | Escreva a sugestão/ideia que você quer apresentar após o comando.`)
    } else if(content.length > 1000) {
        return message.channel.send(`:woozy_face: | Escreva uma sugestão/ideia de até 1000 caracteres.`)
    } else {
        let embed = new Discord.MessageEmbed()
        .setColor("YELLOW")
        .addField("Autor:", message.author)
        .addField("Conteúdo:", content)
        .setFooter("ID do autor:" + message.author.id)
        .setTimestamp()

        if(chg === null) {
            message.channel.send(embed).then(msg => {
                msg.react("✅");
                msg.react("❌");
            })
         } else {
            bot.channels.cache.get(chg).send(embed).then(msg => {
                msg.react("✅");
                msg.react("❌");
         });
        
    await message.channel.send(`<a:yes:766016055855284274> ${message.author}, a sugestão/idéia foi enviada com sucesso!`);

    
}
    }
}
}