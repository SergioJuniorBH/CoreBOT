const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle("ENTÃO VOCÊ QUER SABER MEUS COMANDOS")
    .setDescription(`Logo abaixo estão todos os meus comandos divididos por categorias.\n\n:tools:  **COMANDOS ADMINISTRATIVOS:**\n\`c!anuncio\` - Envia um anúncio de sua preferência no chat que você quiser.\n\`c!clear\` - Exclui de 1 a 100 mensagens no determinado chat que você está usando o comando.\n\`c!ideia\` - Qualquer membro pode usar este comando para dar uma sugestão de algo. (Comando exclusivo do meu servidor.)\n\`c!say\` - Escreva a mensagem que você quiser que o bot fale.\n\`c!warn\` - Envia uma mensagem personalizada no privado de algum membro do seu servidor.\n\`c!ban\` - Bane um membro do seu servidor.\n\`c!unban\` - Desbanir um usuário que está banido.\n\n:question:  **COMANDOS INFORMATIVOS:**\n\`c!help\` - Então... como você está vendo este comando serve para isso aqui, informar todos os meus comandos.\n\`c!ping\` - Informa quanto está o meu ping.\n\`c!uptime\` - Informa a quanto tempo eu estou acordado.\n\`c!message\` - Comando pra caso você tenha alguma dúvida sobre mim.\n\n:tada:  **COMANDOS DE DIVERSÃO:**\n\`c!beijar\` - Então... você vai poder beijar o usuário que você quiser.\n\`c!dado\` - Gire o dado e veja o número que irá cair.\n\`c!faustao\` - Com este simples comando irá aparecer uma bela imagem do Faustão e uma famosa frase dele na sua tela.\n\`c!jokenpo\` - Brinque de pedra, papel e tesoura com os seus amigos.\n\`c!moeda\` - Jogue uma moeda e veja se caiu cara ou coroa.\n\`c!nota\` - Você irá receber uma nota, não é de beleza nem nada, você que irá interpretar a sua nota.\n\`c!perfeito\` - Forme uma frase perfeita.\n\`c!roleta\` - Brinque de roleta-russa com seus amigos sem precisar ser na vida real.\n\`c!silvio\` - É a mesma coisa do comando do Faustão, só que dessa vez é do Silvio Santos.\n\`c!tio\` - Aparecerá uma piada muito boa na tela... ou não.\n\`c!zap\` - Duas frases muito boas do zarp zarp.\n\`c!motivacao\` - Forma uma frase motivacional aleatória.\n\nÉ isso, se eu te ajudei não precisa agradecer.\n\nAté a próxima hihi!`)

    message.channel.send(embed);
};

exports.help = {
    name: 'help'
}