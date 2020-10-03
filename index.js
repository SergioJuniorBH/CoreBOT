const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

fs.readdir("./comandos/", (err, files) => {
    if (err) console.error(err);

    let arquivojs = files.filter(f => f.split(".").pop() === "js");
    arquivojs.forEach((f, i) => {
        let props = require(`./comandos/${f}`);
        console.log(`Comando ${f} iniciou com sucesso`)
        bot.commands.set(props.help.name, props);
    });
})

bot.on("guildMemberAdd", (member) => {

    let guild = bot.guilds.cache.get("703809493279965215");
    let channel = bot.channels.cache.get("722500911640870933");
    let emoji = member.guild.emojis.cache.find(emoji => emoji.name === 'leals');

if(guild != member.guild) {
    return console.log('Sai daqui rapaz')
} else {

    let embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTitle(`${emoji} SEJA BEM-VINDO(A) ${emoji}`)
    .setImage('https://cdn.discordapp.com/attachments/735287053398310943/739230564250288219/IMG_20200528_130801_916.jpg')
    .setDescription(`${member.user}, seja muito bem-vindo(a) ao servidor ${guild.name}! Atualmente estamos com ${member.guild.memberCount} membros. Por Favor, leia as regras do servidor, para você não cometer vacilos e ser retirado do servidor ou temporáriamente, ou permanentemente!`)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024}))
    .setFooter('ID do usuário: ' + member.user.id)
    .setTimestamp();

    channel.send(embed)
    member.send(`Olá, seja muito bem-vindo ao servidor L E A L S, eu sou o Core, o bot criado pelo administrador do servidor, RUIVO. Espero que você se divirta aqui dentro, até mais.`)
}
});

bot.on('ready', () => {
    console.log(`Bot foi iniciado com sucesso`);
    let activities = [
        `Harry Potter`,
        `The Last of Us 2`,
        `DMenor11`,
        `Deni`,
        `RUIVO FF`,
        `Utilize ${config.prefix}help para aparecer os comandos do bot`,
        `${bot.guilds.cache.size} servidores.`,
        `${bot.channels.cache.size} canais.`,
        `${bot.users.cache.size} usuários.`,
        `Você dormir.`
    ],
    i = 0;
    setInterval(() => bot.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
    }), 10000); //WATCHING, LISTENING, PLAYING, STREAMING
    setStatus("online") //idle, dnd, online, invisible
    .catch(console.log);
}); 

bot.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    let arquivocmd = bot.commands.get(command.slice(prefix.length));
    if (arquivocmd) arquivocmd.run(bot, message, args);
});

bot.login(config.token);