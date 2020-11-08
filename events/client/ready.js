const Discord = require('discord.js')
const {default_prefix} = require('../../config.json');

module.exports = async (bot, message) => {

    var activities = [
        `Utilize ${default_prefix}help`,
        `${bot.guilds.cache.size} servidores`,
        `${bot.users.cache.size} usuários`,
        `Sabia que meu jogo favorito é The Last of Us 2?`,
        `Minecraft`,
        `Você enquanto dorme`,
        `Me mencione para ver oque acontece`,
        `Me divulguem por favor, quero ser famoso 🥺`
    ]
    i = 0;
    setInterval(() => bot.user.setActivity(activities[i++ % activities.length], {
        type: "PLAYING"
    }), 8000);
    console.log('✅ The bot is on.')
    console.log('✅ Quick.db connected')
    }
