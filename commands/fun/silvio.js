const Discord = require('discord.js');

module.exports = {
    name: 'silvio',
    category: 'fun',
    description: 'The legend Silvio Santos',
    aliases: ['silviosantos'],
    run: async (bot, message, args) => {
        var list = [
            'Má oi',
            'Quem quer dinheiro? hahai',
            'Ouro que vale mais do que dinheiro',
            'Certa a resposta'
        ];

        var list2 = [
            'https://static.meionorte.com/uploads/imagens/2019/11/6/thumb/r-1200-800-q-90-escolhemos-as-10-pegadinhas-mais-engracadas-do-silvio-santos-pra-voce-32c03b6a-b2dd-472d-bff7-98b43b2f34aa.jpg',
            'https://www.bastidoresdatv.com.br/wp-content/uploads/2014/06/Silvio-Santos-bastidores-da-tv.jpg',
            'https://i.pinimg.com/originals/df/5f/67/df5f674d59e35fa8d8c75310ba44e120.gif'
        ]
    
        var rand = list[Math.floor(Math.random() * list.length)];
        var rand2 = list2[Math.floor(Math.random() * list.length)]
    
        const embed = new Discord.MessageEmbed()
        .setDescription(rand)
        .setImage(rand2)
        await message.channel.send(embed);
    }
}