const Discord = require('discord.js');

module.exports = {
    name: 'kiss',
    category: 'fun',
    description: 'Kiss some user',
    aliases: ['beijar'],
    run: async (bot, message, args) => {
        var list = [
            'https://pa1.narvii.com/6214/5c506d2760822b9bc97f30eebd75a31ae73a0b2a_hq.gif',
            'https://www.intoxianime.com/wp-content/uploads/2017/02/KuzunoHonkai-Episode5-Omake-3.gif',
            'https://media1.tenor.com/images/6f4bf3f4b957c8a3d560bcf2f62c2577/tenor.gif?itemid=5072833'
        ];
    
        var rand = list[Math.floor(Math.random() * list.length)];
        let user = message.mentions.users.first() || bot.users.cache.get(args[0]);
        if (!user) {
            return message.channel.send(`<a:no:766016144720396389> | Por favor, mencione usuários validos para se beijarem!`);
        }
    
        let avatar = message.author.displayAvatarURL({format: "png"});
        const embed = new Discord.MessageEmbed()
        .setTitle("BEIJOU")
        .setColor("#ff737e")
        .setDescription(`${message.author} **acaba de beijar** ${user}! :heart:`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter("Ui ui ui")
        .setAuthor(message.author.tag, avatar);
        await message.channel.send(embed);
    
    }
}