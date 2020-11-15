const {default_prefix} = require('../../config.json');
const Discord = require('discord.js');
const db = require('quick.db');
const { addexp } = require('../../handlers/xp');

module.exports = async (bot, message) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(message.content == `<${bot.user.id}>` || message.content == `<@!${bot.user.id}>`) {
        const embedizin = new Discord.MessageEmbed()
        .setColor('YELLOW')
        .setDescription(`:man_raising_hand: | Opa, me chamou?\nSe sim eu sou o Core, meu prefixo nesse servidor é \`${prefix}\``)
        .setTimestamp()
                        
        message.channel.send(embedizin)
    };

    if(message.content === "Oi Core") {
        message.channel.send(`:grin: | Eae, tudo bom?`)
    };

    if(message.content === "Tô bem, e você Core?") {
        message.channel.send(":grin: | Que ótimo, eu tô bem também, obrigado por perguntar.")
    };

    if(message.content === "Eu tô mal Core") {
        message.channel.send(':frowning2: | Poxa... eu espero que você fique bem novamente.')
    };

    if(message.content === "Obrigado, Core") {
        message.channel.send(':hugging: | Por nada, eu tô aqui para ajudar as pessoas.')
    }

    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    let command;

    if(bot.commands.has(cmd)) {
        command = bot.commands.get(cmd);
    } else {
        command = bot.commands.get(bot.aliases.get(cmd));
    }

    command.run(bot, message, args);
    
    return addexp(message)
}
