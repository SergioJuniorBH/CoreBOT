const Discord = require ("discord.js");

exports.run = async (bot, message, args) => {

    var list = [
        'Má oi',
        'Quem quer dinheiro? hahai',
        'Ouro que vale mais do que dinheiro'
    ];

    var rand = list[Math.floor(Math.random() * list.length)];

    let avatar = message.author.displayAvatarURL({format: "png"});
    const embed = new Discord.MessageEmbed()
    .setDescription(rand)
    .setImage('https://static.meionorte.com/uploads/imagens/2019/11/6/thumb/r-1200-800-q-90-escolhemos-as-10-pegadinhas-mais-engracadas-do-silvio-santos-pra-voce-32c03b6a-b2dd-472d-bff7-98b43b2f34aa.jpg')
    await message.channel.send(embed);

}

exports.help = {
    name: 'silvio'
}