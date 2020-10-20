const Discord = require('discord.js');

module.exports = {
    name: 'help',
    category: 'info',
    description: 'Help the users',
    aliases: ['comandos', 'ajuda'],
    run: async (bot, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle("**MEUS COMANDOS**")
        .setDescription(`Aperte em cada reação para saber sobre meus comandos:\n\n⚖️ **- Para comandos de administração**\n\n❓ **- Para comandos de informação**\n\n🎉 - **Para comandos de diversão**\n\n**Até mais**`)

        message.channel.send(embed).then(msg => {
            msg.react("⚖️");
            msg.react("❓");
            msg.react("🎉");

            let filtro = (reaction, usuario) => reaction.emoji.name === "⚖️" && usuario.id === message.author.id;
            const coletor = msg.createReactionCollector(filtro, {max: 1});

            coletor.on("collect", em => {
                em.remove(message.author.id);
                const embed2 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setTitle("**COMANDOS DE ADMINISTRAÇÃO**")
                .setDescription("\`anuncio\` - Comando para anunciar algo no chat que você desejar\n\`ban\` - Comando para banir um determinado usuário do seu servidor\n\`clear\` - Comando para apagar um número de mensagens de 1 a 100\n\`say\` - Comando para fazer o bot falar oque você quiser\n\`unban\` - Comando para caso você queira desbanir um usuário que era do seu servidor\n\`warn\` - Comando para enviar uma mensagem no privado de um membro do seu servidor")
                message.channel.send(embed2)
            });
            let filtro2 = (reaction, usuario) => reaction.emoji.name === "❓" && usuario.id === message.author.id;
            const coletor2 = msg.createReactionCollector(filtro2, {max: 1});

            coletor2.on("collect", em => {
                em.remove(message.author.id);
                const embed3 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setTitle("**COMANDOS DE INFORMAÇÃO**")
                .setDescription("\`help\` - Comando que mostra todos os meus outros comandos\n\`ideia\` - Comando para dar uma sugestão de algo (só funciona no meu servidor de diversão)\n\`ping\` - Comando para mostrar em quanto tá meu ping\n\`uptime\` - Comando que informa a quanto tempo estou online")
                message.channel.send(embed3)
            });
            let filtro3 = (reaction, usuario) => reaction.emoji.name === "🎉" && usuario.id === message.author.id;
            const coletor3 = msg.createReactionCollector(filtro3, {max: 1});

            coletor3.on("collect", em => {
                em.remove(message.author.id);
                const embed4 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setTitle("**COMANDOS DE DIVERSÃO**")
                .setDescription("\`dado\` - Comando para cair algum número aleatório do dado\n\`faustao\` - Comando para aparecer uma icônica foto e frase da lenda Faustão\n\`jokenpo\` - Comando para brincar de pedra, papel e tesoura\n\`kiss\` - Hummm, você vai poder beijar alguém\n\`math\` - Me faça fazer um cálculo\n\`meme\` - Ache um meme muito bom do Reddit\n\`moeda\` - Brinque de cara ou coroa\n\`motivacao\` - Forme uma frase motivacional aleatória\n\`nota\` - Eu vou dar uma nota para algo\n\`perfeito\` - Forme uma frase literalmente perfeita\n\`piada\` - Uma piada muito boa irá aparecer na sua tela, ou não...\n\`roleta\` - Brinque de roleta russa\n\`salabim\` - Basta me fazer uma pergunta e irei prever ela\n\`silvio\` - A mesma coisa do comando faustao, a única diferença é que é com o Silvio Santos\n\`avatar\` - Pegue o avatar de alguém")
                message.channel.send(embed4)
            });
        })
    }
}