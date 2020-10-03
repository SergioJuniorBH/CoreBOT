const Discord = require ("discord.js");

exports.run = async (bot, message, args) => {

    var list = [
        'https://pa1.narvii.com/6214/5c506d2760822b9bc97f30eebd75a31ae73a0b2a_hq.gif',
        'https://www.intoxianime.com/wp-content/uploads/2017/02/KuzunoHonkai-Episode5-Omake-3.gif',
        'https://media1.tenor.com/images/6f4bf3f4b957c8a3d560bcf2f62c2577/tenor.gif?itemid=5072833'
    ]; //LISTA DAS IMAGENS QUE VÃO FICAR NO EMBED ALEATORIAMENTE

    var rand = list[Math.floor(Math.random() * list.length)];
    let user = message.mentions.users.first() || bot.users.cache.get(args[0]);
    if (!user) {
        return message.reply("Por favor, mencione usuários validos para se beijarem!");
    }

    /*
    message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
    */

    let avatar = message.author.displayAvatarURL({format: "png"});
    const embed = new Discord.MessageEmbed()
    .setTitle("**BEIJOU**")
    .setColor("#ff737e")
    .setDescription(`${message.author} **acaba de beijar** ${user}! :heart:`)
    .setImage(rand)
    .setTimestamp()
    .setThumbnail(avatar)
    .setFooter("Ui ui ui")
    .setAuthor(message.author.tag, avatar);
    await message.channel.send(embed);

}

exports.help = {
    name: 'beijar'
}
