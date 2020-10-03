const Discord = require('discord.js');

exports.run = async(bot, message, args) => {
    message.delete();
    const content = args.join(" ");

    if(!args[0]) {
        return message.reply(`:thinking: , escreva a sugestão/idéia que você quer apresentar após o comando.`)
    } else if(content.length > 1000) {
        return message.channel.send(`:woozy_face:  escreva uma sugestão/idéia de até 1000 caracteres.`)
    } else {
        var canal = message.guild.channels.cache.find(ch => ch.id === "756634385528258600");
        const msg = await canal.send(
         new Discord.MessageEmbed()
        .setColor("RED")
        .addField("**Autor:**", message.author)
        .addField("**Conteúdo:**", content)
        .setFooter("ID do autor:" + message.author.id)
        .setTimestamp()
        );
    await message.channel.send(`:white_check_mark: ${message.author}, a sugestão/idéia foi enviada com sucesso!`);

    const emojis = ["✅", "❌"];

    for (const i in emojis) {
        await msg.react(emojis[i])
    }
  }
}


exports.help = {
    name: 'ideia'
}