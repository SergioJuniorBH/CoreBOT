const Discord = require('discord.js');
const fs = require('fs')
const config = require('./config.json')
const search = require('yt-search');
const db = require('quick.db')
const bot = new Discord.Client({
    disableEveryone: true
});
const prefix = (config.default_prefix)
const { addexp } = require('./handlers/xp');

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.categories = fs.readdirSync("./commands/");
bot.queues = new Map();

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});

["event"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});

bot.login(config.token)