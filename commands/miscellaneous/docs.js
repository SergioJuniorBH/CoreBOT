const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
    name: 'docs',
    category: 'miscellaneous',
    description: 'Docs command',
    run: async (bot, message, args) => {
        const uri = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(args)}`

        axios.get(uri).then((embed) => {
            const { data } = embed

            if(data && !data.error) {
                message.channel.send({ embed: data })
            } else {
                message.channel.send(':thinking: | Eu procurei em todos os lugares mas não achei esta documentação.')
            }
        })
    }
}