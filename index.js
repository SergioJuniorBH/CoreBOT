const Discord = require('discord.js');
const fs = require('fs')
const config = require('./config.json')
const bot = new Discord.Client({
    disableEveryone: true
});
const prefix = (config.default_prefix)

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});

["event"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});

bot.login(config.token)
