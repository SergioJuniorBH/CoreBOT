const Discord = require('discord.js');

module.exports = {
    name: 'piada',
    category: 'fun',
    description: 'Bad jokes',
    aliases: ['piadas', 'piadasruins', 'tiodopave', 'tio'],
    run: async (bot, message, args) => {
        var list = [
            'https://img.buzzfeed.com/buzzfeed-static/static/2017-06/7/9/asset/buzzfeed-prod-fastlane-01/sub-buzz-3211-1496843408-1.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto',
            'https://img.buzzfeed.com/buzzfeed-static/static/2017-06/7/9/asset/buzzfeed-prod-fastlane-01/sub-buzz-1587-1496841844-9.jpg?downsize=600:*&output-format=auto&output-quality=auto',
            'https://img.buzzfeed.com/buzzfeed-static/static/2017-06/7/9/asset/buzzfeed-prod-fastlane-03/sub-buzz-29221-1496841999-7.jpg?downsize=600:*&output-format=auto&output-quality=auto',
            'https://img.buzzfeed.com/buzzfeed-static/static/2017-06/7/10/asset/buzzfeed-prod-fastlane-02/sub-buzz-16057-1496845762-1.jpg?downsize=600:*&output-format=auto&output-quality=auto',
            'https://img.buzzfeed.com/buzzfeed-static/static/2017-06/7/9/asset/buzzfeed-prod-fastlane-03/sub-buzz-30068-1496842150-1.jpg?downsize=600:*&output-format=auto&output-quality=auto',
            'https://img.buzzfeed.com/buzzfeed-static/static/2017-06/7/9/asset/buzzfeed-prod-fastlane-01/sub-buzz-2559-1496842258-2.jpg?downsize=600:*&output-format=auto&output-quality=auto',
            'https://img.buzzfeed.com/buzzfeed-static/static/2017-06/7/9/asset/buzzfeed-prod-fastlane-01/sub-buzz-2559-1496842284-4.jpg?downsize=600:*&output-format=auto&output-quality=auto',
            'https://img.buzzfeed.com/buzzfeed-static/static/2017-06/7/13/asset/buzzfeed-prod-fastlane-03/sub-buzz-10849-1496855608-4.jpg?downsize=600:*&output-format=auto&output-quality=auto',
            'https://img.buzzfeed.com/buzzfeed-static/static/2017-06/7/9/asset/buzzfeed-prod-fastlane-02/sub-buzz-13888-1496842397-1.png?downsize=600:*&output-format=auto&output-quality=auto',
            'https://img.buzzfeed.com/buzzfeed-static/static/2017-06/7/10/asset/buzzfeed-prod-fastlane-03/sub-buzz-5285-1496846851-3.jpg?downsize=600:*&output-format=auto&output-quality=auto',
            'https://img.buzzfeed.com/buzzfeed-static/static/2017-06/7/9/asset/buzzfeed-prod-fastlane-01/sub-buzz-2350-1496842903-6.jpg?downsize=600:*&output-format=auto&output-quality=auto',
            'https://img.buzzfeed.com/buzzfeed-static/static/2017-06/7/9/asset/buzzfeed-prod-fastlane-02/sub-buzz-14309-1496843325-2.jpg?downsize=600:*&output-format=auto&output-quality=auto',
            'https://img.buzzfeed.com/buzzfeed-static/static/2017-06/7/9/asset/buzzfeed-prod-fastlane-01/sub-buzz-2438-1496842097-1.jpg?downsize=600:*&output-format=auto&output-quality=auto',
            'https://img.buzzfeed.com/buzzfeed-static/static/2017-06/7/9/asset/buzzfeed-prod-fastlane-03/sub-buzz-30598-1496843816-1.jpg?downsize=600:*&output-format=auto&output-quality=auto',
            'https://img.buzzfeed.com/buzzfeed-static/static/2017-06/7/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-12373-1496849629-2.jpg?downsize=600:*&output-format=auto&output-quality=auto'
            
        ];
    
        var rand = list[Math.floor(Math.random() * list.length)];
    
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(rand)

        await message.channel.send(embed)
    }
}