const Discord = require ("discord.js");

exports.run = async (bot, message, args) => {

    var list = [
        `:grimacing: | É.... eu dou uma nota 1 pra você... não fica triste.`,
        `:grimacing: | Então... você recebeu uma nota 2... pelo menos é melhor que nota 1, né?`,
        `:neutral_face: | Olha... você recebeu uma nota 3, bora melhorar ae.`,
        `:neutral_face: | Você recebeu uma nota 4, ainda tá ruimzinha, mas dá pra melhorar.`,
        `:neutral_face: | Hummm, nota 5, quase chegou na média...`,
        `:slight_smile: | Nota 6, olha, você já tá na média, não foi ruim.`,
        `:slight_smile: | Nota 7, você passou da média, parabéns.`,
        `:partying_face: | Uau, nota 8, você foi muito bem.`,
        `:partying_face: | Eitaaaaa, nota 9, quase foi um 10 hihi.`,
        `:sunglasses: | Caraca, você fez mágica??? NOTA 10, que isso cara.`
    ];

    var rand = list[Math.floor(Math.random() * list.length)];

    await message.channel.send(`**${rand}**`)
}

exports.help = {
    name: 'nota'
}