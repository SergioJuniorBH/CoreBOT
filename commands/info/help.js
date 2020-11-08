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
        .setDescription(`Aperte em cada reação para saber sobre meus comandos:\n\n⚖️ **- Para comandos de administração**\n\n❓ **- Para comandos de informação**\n\n🎉 **- Para comandos de diversão**\n\n⚙️ **- Para comandos de configuração**\n\n🎭 **- Para miscelâneas que eu consigo fazer**\n\n💵 **- Para comandos de economia**\n\n🎮 **- Para comandos de jogos**\n\n🖼️ **- Para comandos com imagens**\n\n📦 **- Para comandos de Minecraft**\n\n🎫 **- Para comandos de cargos**\n\n**Até mais**`)

        message.channel.send('<a:white_check:766061025803239444> | Meus comandos foram enviados para o seu privado.')
        message.member.send(embed).then(msg => {
            msg.react("⚖️");
            msg.react("❓");
            msg.react("🎉");
            msg.react("⚙️");
            msg.react("🎭");
            msg.react("💵");
            msg.react("🎮");
            msg.react("🖼️");
            msg.react("📦");
            msg.react("🎫");

            let filtro = (reaction, usuario) => reaction.emoji.name === "⚖️" && usuario.id === message.author.id;
            const coletor = msg.createReactionCollector(filtro, {max: 1});

            coletor.on("collect", em => {
                const embed2 = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("**COMANDOS DE ADMINISTRAÇÃO**")
                .setDescription("\`anuncio\` - Comando para anunciar algo no chat que você desejar\n\`ban\` - Comando para banir um determinado usuário do seu servidor\n\`clear\` - Comando para apagar um número de mensagens de 1 a 100\n\`unban\` - Comando para caso você queira desbanir um usuário que era do seu servidor\n\`warn\` - Comando para enviar uma mensagem no privado de um membro do seu servidor\n\`chat <on/off>\` - Comando para ligar e desligar o chat que você usar este comando\n\`deletewarns\` - Deletar todos os avisos que um usuário tem\n\`slow\` - Ativa o modo Slowmode do chat que você usar este comando")
                message.member.send(embed2)
            });
            let filtro2 = (reaction, usuario) => reaction.emoji.name === "❓" && usuario.id === message.author.id;
            const coletor2 = msg.createReactionCollector(filtro2, {max: 1});

            coletor2.on("collect", em => {
                const embed3 = new Discord.MessageEmbed()
                .setColor("BLUE")
                .setTitle("**COMANDOS DE INFORMAÇÃO**")
                .setDescription("\`help\` - Comando que mostra todos os meus outros comandos\n\`ideia\` - Comando para dar uma sugestão de algo (só funciona no meu servidor de diversão)\n\`ping\` - Comando para mostrar em quanto tá meu ping\n\`uptime\` - Comando que informa a quanto tempo estou online\n\`level\` - Informa em que level o membro mencionado está\n\`serverinfo\` - Mostra as informações do servidor\n\`userinfo\` - Mostra as informações de um determinado usuário\n\`botinfo\` - Mostra as minhas informações\`warnings\` - Mostra a quantidade de avisos que um determinado membero tem\n\`weather\` - Mostra o clima da cidade que você quiser\n\`covid\` - Informa sobre os casos de COVID-19")
                message.member.send(embed3)
            });
            let filtro3 = (reaction, usuario) => reaction.emoji.name === "🎉" && usuario.id === message.author.id;
            const coletor3 = msg.createReactionCollector(filtro3, {max: 1});

            coletor3.on("collect", em => {
                const embed4 = new Discord.MessageEmbed()
                .setColor("YELLOW")
                .setTitle("**COMANDOS DE DIVERSÃO**")
                .setDescription("\`faustao\` - Comando para aparecer uma icônica foto e frase da lenda Faustão\n\`kiss\` - Hummm, você vai poder beijar alguém\n\`math\` - Me faça fazer um cálculo\n\`motivacao\` - Forme uma frase motivacional aleatória\n\`nota\` - Eu vou dar uma nota para algo\n\`perfeito\` - Forme uma frase literalmente perfeita\n\`silvio\` - A mesma coisa do comando faustao, a única diferença é que é com o Silvio Santos\n\`among\` - Comando para notificar uma nova partida de Among Us\n\`ascii\` - Forme uma frase em ASCII")
                message.member.send(embed4)
            });
            let filtro4 = (reaction, usuario) => reaction.emoji.name === "⚙️" && usuario.id === message.author.id;
            const coletor4 = msg.createReactionCollector(filtro4, {max: 1});

            coletor4.on("collect", em => {
                const embed5 = new Discord.MessageEmbed()
                .setColor("#0a8bfc")
                .setTitle("**COMANDOS DE CONFIGURAÇÃO**")
                .setDescription("\`prefix\` - Comando para mudar o meu prefixo no seu servidor\n\`welcome\` - Comando para definir o chat de boas-vindas\`goodbye\` - Comando para definir o canal de mensagens de saída do servidor\n\`setamong\` - Define o canal para notificar novas partidas de Among Us\n\`setban\` - Define o canal para as mensagens de ban\`setsuggestion\` - Define o canal de sugestões")
                message.member.send(embed5)
            });
            let filtro5 = (reaction, usuario) => reaction.emoji.name === "🎭" && usuario.id === message.author.id;
            const coletor5 = msg.createReactionCollector(filtro5, {max: 1});

            coletor5.on("collect", em => {
                const embed6 = new Discord.MessageEmbed()
                .setColor("#d80afc")
                .setTitle("**MISCELÂNEAS**")
                .setDescription("\`createtextchannel\` - Comando para criar um canal de texto\n\`createvoicechannel\` - Comando para criar um canal de voz\n\`say\` - Comando para fazer o bot falar oque você quiser\n\`docs\` - Informa a documentação do Discord.Js")
                message.member.send(embed6)
            });
            let filtro6 = (reaction, usuario) => reaction.emoji.name === "💵" && usuario.id === message.author.id;
            const coletor6 = msg.createReactionCollector(filtro6, {max: 1});

            coletor6.on("collect", em => {
                const embed7 = new Discord.MessageEmbed()
                .setColor("#fcb70a")
                .setTitle("**ECONOMIA**")
                .setDescription("\`banco\` - Mostra o quanto de dinheiro do Core os membros do servidor tem\n\`store\` - Comando para mostrar a Loja do Core\n\`buy\` - Comando para comprar um item da Loja do Core\n\`daily\` - Comando para receber seu pagamento diário\n\`inventory\` - Comando para mostrar seu inventário\n\`saldo\` - Mostra o quanto de dinheiro do Core você tem\n\`work\` - Comando para você trabalhar e receber seu pagamento")
                message.member.send(embed7)
            });
            let filtro7 = (reaction, usuario) => reaction.emoji.name === "🎮" && usuario.id === message.author.id;
            const coletor7 = msg.createReactionCollector(filtro7, {max: 1});

            coletor7.on("collect", em => {
                const embed8 = new Discord.MessageEmbed()
                .setColor("#0afc1a")
                .setTitle("**JOGOS**")
                .setDescription("\`dado\` - Gire o dado para cair um número aleatório\n\`jokenpo\` - Comando para brincar de 'Pedra, papel e tesoura'\n\`moeda\` - Jogue a moeda e veja se caiu cara ou coroa\n\`roleta\` - Jogue roleta russa, mas ninguém se fere\n\`salabim\` - Basta me fazer uma pergunta que eu prevejo o futuro")
                message.member.send(embed8)
            });
            let filtro8 = (reaction, usuario) => reaction.emoji.name === "🖼️" && usuario.id === message.author.id;
            const coletor8 = msg.createReactionCollector(filtro8, {max: 1});

            coletor8.on("collect", em => {
                const embed9 = new Discord.MessageEmbed()
                .setColor("#0a6ffc")
                .setTitle("**IMAGENS**")
                .setDescription("\`avatar\` - Mostra o avatar de algum usuário e o download para ele\n\`cat\` - Comando para aparecer fotos/gifs de gatinhos fofos'\n\`dog\` - Comando para aparecer fotos/gifs de cachoritos fofos\n\`meme\` - Ache um meme incrível do Reddit\n\`piada\` - Comando para aparecer uma piada muito boa na sua tela... ou não...")
                message.member.send(embed9)
            });
            let filtro9 = (reaction, usuario) => reaction.emoji.name === "📦" && usuario.id === message.author.id;
            const coletor9 = msg.createReactionCollector(filtro9, {max: 1});

            coletor9.on("collect", em => {
                const embed10 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setTitle("**COMANDOS DE MINECRAFT**")
                .setDescription("\`achieviment\` - Comando para aparecer uma conquista personalizada\n\`mchead\` - Comando para aparecer uma cabeça do Minecraft'\n\`mcskin\` - Comando para aparecer uma skin de Minecraft")
                message.member.send(embed10)
            });
            let filtro10 = (reaction, usuario) => reaction.emoji.name === "🎫" && usuario.id === message.author.id;
            const coletor10 = msg.createReactionCollector(filtro10, {max: 1});

            coletor10.on("collect", em => {
                const embed11 = new Discord.MessageEmbed()
                .setColor("#ec0afc")
                .setTitle("**COMANDOS DE CARGOS**")
                .setDescription("\`give-role\` - Adicione um cargo do servidor em um membro\n\`has-role\` - Comando para ver se o usuário tem o determinado cargo'\n\`remove-role\` - Comando para remover um cargo de um usuário")
                message.member.send(embed11)
            });
        })
    }
}