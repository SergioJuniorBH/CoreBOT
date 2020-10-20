const Discord = require('discord.js');

module.exports = {
    name: 'faustao',
    category: 'fun',
    description: 'Form an incredible phrase from the legend Faustão',
    run: async (bot, message, args) => {
        var list = [
            'Olokinho meu',
            'Tá pegano fogo bixo',
            'E lá vem as vídeo cassetadas'
        ];

        var list2 = [
            'https://i.pinimg.com/originals/7a/80/9a/7a809a616e389222b7eab6ad5be0ef4b.jpg',
            'https://i.pinimg.com/originals/9b/a9/2b/9ba92b2fc80e1863eb79eb95e8a67214.jpg',
            'https://i.pinimg.com/736x/0b/28/0f/0b280f1f99a9ec885d9bd2896c5cb5e1.jpg'
        ]
    
        var rand = list[Math.floor(Math.random() * list.length)];
        var rand2 = list2[Math.floor(Math.random() * list.length)]
    
        let avatar = message.author.displayAvatarURL({format: "png"});
        const embed = new Discord.MessageEmbed()
        .setDescription(rand)
        .setImage(rand2)
        await message.channel.send(embed);
    
    }
}