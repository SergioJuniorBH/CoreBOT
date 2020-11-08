const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: 'dog',
    category: 'images',
    description: 'Dog command',
    aliases: ['cachorros'],
    run: async (bot, message, args) => {
        let { body } = await superagent.get(`https://random.dog/woof.json`);

   let dogEmbed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setTitle("Cachoritos para alegrar seu dia :dog:")
   .setImage(body.url);

   message.channel.send(dogEmbed);
    }
}
