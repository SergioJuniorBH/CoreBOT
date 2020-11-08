const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');
const {default_prefix} = require('../../config.json');

module.exports = {
    name: 'store',
    category: 'economy',
    description: "Store of the Core's world",
    aliases: ['loja'],
    run: async (bot, message, args) => {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if(prefix === null) prefix = default_prefix;

        const lojinhaEmbed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('🛒 Loja do Core')
        .setThumbnail('https://cdn.discordapp.com/attachments/763154635527421972/773063537971036170/Core_logo.jpg')
        .setDescription(`**Escolha os tipos de produtos que você quer comprar:**\n🚌 **- Veículos**\n🔫 **- Armas de caça**\n🏙️ **-Propriedades**\n🔭 **-Miscelâneas**`)
        .setTimestamp()

        message.channel.send(lojinhaEmbed).then(msg => {
            msg.react("🚌");
            msg.react("🔫");
            msg.react("🏙️");
            msg.react("🔭");

            let filtro = (reaction, usuario) => reaction.emoji.name === "🚌" && usuario.id === message.author.id;
            const coletor = msg.createReactionCollector(filtro, {max: 1});

            coletor.on("collect", em => {
                em.remove()
                const veiculoEmbed = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("🚌   Loja de veículos")
                .setThumbnail("https://image.flaticon.com/icons/png/512/57/57451.png")
                .setDescription(":race_car: **- Carro de corrida** \`C$4000\`\n:red_car: **- Carro simples** \`C$2300\`\n:minibus: **- Van** \`C$2000\`\n:bus: **- Combe** \`C$1800\`\n:motorcycle: **- Moto de corrida** \`C$2800\`\n:motor_scooter: **- Motinha**\`C$1300\`\n:bike: **- Bicicleta**\`C$500\`\n\n**Compre com moderação**")
                .setFooter(`Para comprar algo digite ${prefix}buy <item>`)
                .setTimestamp()
                message.channel.send(veiculoEmbed)
            });
            let filtro2 = (reaction, usuario) => reaction.emoji.name === "🔫" && usuario.id === message.author.id;
            const coletor2 = msg.createReactionCollector(filtro2, {max: 1});

            coletor2.on("collect", em => {
                em.remove()
                const armasEmbed = new Discord.MessageEmbed()
                .setColor("#4b0082")
                .setTitle('🔫   Loja de armas de caça')
                .setThumbnail('https://image.flaticon.com/icons/png/512/57/57451.png')
                .setDescription(":bow_and_arrow: **- Arco e flecha** \`C$3000\`\n<:knife:773271765127659561> **- Faca** \`C$1500\`\n<:faca_das_galaxias:773271765563867156> **- Adaga** \`C$1000\`\n<:espada_sombria:773271765371715590> **- Espada** \`C$2600\`\n<:glock:773271765228585013> **- Pistola** \`6000\`\n<:4035_Shotgun:773273479553876018> **- Escopeta** \`8000\`\n\n**Compre com moderação**")
                .setFooter(`Para comprar algo digite ${prefix}buy <item>`)
                .setTimestamp()
                message.channel.send(armasEmbed)
            });
            let filtro3 = (reaction, usuario) => reaction.emoji.name === "🏙️" && usuario.id === message.author.id;
            const coletor3 = msg.createReactionCollector(filtro3, {max: 1});

            coletor3.on("collect", em => {
                em.remove()
                const propriEmbed = new Discord.MessageEmbed()
                .setColor("#ff8c00")
                .setTitle('🏙️   Loja de propriedades')
                .setThumbnail('https://image.flaticon.com/icons/png/512/57/57451.png')
                .setDescription(":european_castle: **- Castelo** \`C$30000\`\n<:office:773276082265653288> **- Escritório da empresa 'Core'** \`C$24000\`\n:hospital: **- Hospital 'Rettet Leben'** \`C$29000\`\n:hotel: **- Hotel 'Liebe'** \`C$15000\`\n:factory: **- Usina elétrica** \`C$12000\`\n:house: **- Casa** \`C$10000\`\n:office: **- Apartamento** \`C$13000\`\n\n**Compre com moderação**")
                .setFooter(`Para comprar algo digite ${prefix}buy <item>`)
                .setTimestamp()
                message.channel.send(propriEmbed)
            });
            let filtro4 = (reaction, usuario) => reaction.emoji.name === "🔭" && usuario.id === message.author.id;
            const coletor4 = msg.createReactionCollector(filtro4, {max: 1});

            coletor4.on("collect", em => {
                em.remove()
                const misEmbed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle("🔭   Loja de miscelâneas")
            .setThumbnail('https://image.flaticon.com/icons/png/512/57/57451.png')
            .setDescription("<:5676_katiaureverse:773280369016700950> **- Cartas de Uno** \`C$25\`\n:black_joker: **- Cartas de Pókemon** \`C$15\`\n:black_joker: **- Cartas de Yu-Gi-Oh** \`C$15\`\n<:5476_Smartphone:773282794113466389> **- Celular CPhone** \`800\`\n<:computer_bsod:773283451348582411> **- Computador CMac** \`2000\`\n:joystick: **- Videogame CStation** \`2500\`\n\n**Compre com moderação**")
            .setFooter(`Para comprar algo digite ${prefix}buy <item>`)
            .setTimestamp()
            message.channel.send(misEmbed)
            })
        })
    }
}