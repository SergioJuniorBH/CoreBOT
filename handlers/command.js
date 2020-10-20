const {readdirSync} = require('fs');
const Discord = require('discord.js');
const ascii = require('ascii-table');
let table = new ascii("Commands")
table.setHeading('Command','Load status');
module.exports = async (bot) => {
    readdirSync('./commands/').forEach(dir => {
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);
            if(pull.name) {
                bot.commands.set(pull.name, pull);
                table.addRow(file, '✅')
            } else {
                table.addRow(file, `❌ === It's not working`)
                continue;
            } if(pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => bot.aliases.set(alias, pull.name))
        }
    });
    console.log(table.toString());
}