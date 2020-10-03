const Discord = require ("discord.js");

exports.run = async (bot, message, args) => {

    var list = [
        'Olokinho meu',
        'Tá pegano fogo bixo',
        'E lá vem as vídeo cassetadas'
    ];

    var rand = list[Math.floor(Math.random() * list.length)];

    let avatar = message.author.displayAvatarURL({format: "png"});
    const embed = new Discord.MessageEmbed()
    .setDescription(rand)
    .setImage('https://static.vakinha.com.br/uploads/vakinha/image/451067/faust_o.jpg?ims=700x410')
    await message.channel.send(embed);

}

exports.help = {
    name: 'faustao'
}