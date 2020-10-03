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

    let guild = bot.guilds.cache.get("ID DO SERVIDOR QUE VOCÊ QUER RECEBER A MENSAGEM DE BOAS-VINDAS");
    let channel = bot.channels.cache.get("CANAL QUE VOCÊ QUER RECEBER A MENSAGEM DE BOAS VINDAS");
    let emoji = member.guild.emojis.cache.find(emoji => emoji.name === 'nome do emoji que você quer adicionar (opcional)');

if(guild != member.guild) {
    return console.log('Sai daqui rapaz')
} else {

    let embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTitle(`${emoji} SEJA BEM-VINDO(A) ${emoji}`)
    .setImage('Coloque a imagem que você quiser')
    .setDescription(`${member.user}, seja muito bem-vindo(a) ao servidor ${guild.name}! Atualmente estamos com ${member.guild.memberCount} membros. Por Favor, leia as regras do servidor, para você não cometer vacilos e ser retirado do servidor ou temporáriamente, ou permanentemente!`)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024}))
    .setFooter('ID do usuário: ' + member.user.id)
    .setTimestamp();

    channel.send(embed)
    member.send(`Aqui será a mensagem que vai ser enviada para a DM do usuário que entrar no servidor`)
}
});

bot.on('ready', () => {
    console.log(`Bot foi iniciado com sucesso`);
    let activities = [
        `O status que você quiser`,
        `O status que você quiser`,
        `O status que você quiser`,
        `O status que você quiser`,
        `O status que você quiser`,
        `Utilize ${config.prefix}help para aparecer os comandos do bot`,
        `${bot.guilds.cache.size} servidores.`, //AQUI É O TANTO DE SERVIDORES QUE SEU BOT ESTÁ ATUALMENTE
        `${bot.channels.cache.size} canais.`, //AQUI É O TANTO DE CANAIS QUE TEM NOS SERVIDORES QUE SEU BOT ESTÁ
        `${bot.users.cache.size} usuários.`, //AQUI É O TANTO DE USUÁRIOS QUE TEM NOS SERVIDORES QUE SEU BOT ESTÁ
        `Você dormir.`
    ],
    i = 0;
    setInterval(() => bot.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: " " //WATCHING, LISTENING, PLAYING, STREAMING
    }), 10000); //TEMPO QUE O STATUS DO BOT IRÁ MUDAR, O MEU É 10 SEGUNDOS.
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
