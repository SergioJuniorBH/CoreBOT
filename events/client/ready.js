const Discord = require('discord.js')
const {prefix} = require('../../config.json');

module.exports = bot => {
    var activities = [
        `Utilize ${prefix}help`,
        `${bot.guilds.cache.size} servidores`,
        `${bot.users.cache.size} usuários`,
        `Sabia que meu jogo favorito é The Last of Us 2?`,
        `Minecraft`,
        `Você enquanto dorme`,
        `Me mencione para ver oque acontece`,
        `EM MANUTENÇÃO`
    ]
    i = 0;
    setInterval(() => bot.user.setActivity(activities[i++ % activities.length], {
        type: "PLAYING"
    }), 8000);
    console.log('✅ The bot is on.')
}