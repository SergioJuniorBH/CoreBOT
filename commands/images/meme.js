const Discord = require('discord.js');
const api = require('imageapi.js');

module.exports = {
    name: 'meme',
    category: 'images',
    description: 'Meme command',
    aliases: ['lol', 'memes', 'reddit'],
    run: async (bot, message, args) => {
        let subreddits = [
            "comedyheaven",
            "dank",
            "meme",
            "memes"
        ]
        let subreddit = subreddits[Math.floor(Math.random() * subreddits.length-1)]
        let img = await api(subreddit)
        const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle(`A great meme that came from  r/${subreddit}`)
        .setURL(`https://reddit.com/r/${subreddit}`)
        .setImage(img)
        message.channel.send(embed)
    }
}