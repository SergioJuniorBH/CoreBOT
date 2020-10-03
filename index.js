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
