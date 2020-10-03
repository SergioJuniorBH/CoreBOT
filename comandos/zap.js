const Discord = require ("discord.js");

exports.run = async (bot, message, args) => {

    var list = [
        `:sunglasses: :sunglasses: :sunglasses: Opa garelinha do zarp zarp, é o bonde do zarp passando na *sua casa* :house: isso mesmo na sua casaaaaaaaaa :scream: :scream: :scream:.\n\nBão dia!!! :sunny: :sunny: :sunny:`,
        `Eae novinha, bonde do zarp passano sua casa novamente :sunglasses: :sunglasses: :sunglasses:. Novinha me passa seu número pra gente dar uma conversadinha mais tarde hehe.\n\n:sunglasses: :sunglasses: :sunglasses: `
    ];

    var rand = list[Math.floor(Math.random() * list.length)];

    await message.channel.send(`${rand}`)
}

exports.help = {
    name: 'zap'
}