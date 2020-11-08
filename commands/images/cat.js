const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: 'cat',
    category: 'images',
    description: 'Cat command',
    aliases: ['gatos'],
    run: async (bot, message, args) => {
        let { body } = await superagent.get(`http://aws.random.cat/meow`);

   let catEmbed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setTitle("Gatinhos para alegrar seu dia 🐱")
   .setImage(body.file);

   message.channel.send(catEmbed);
    }
}
