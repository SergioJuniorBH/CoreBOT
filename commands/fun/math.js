const Discord = require('discord.js');
const {calculator} = require('../../functions');

module.exports = {
    name: 'math',
    category: 'fun',
    description: 'Make a calculation',
    aliases: ['matematica', 'calculo', 'calculadora'],
    run: async (bot, message, args) => {
        if(!args[0]) {
            message.channel.send(`<a:no:766016144720396389> | Você não especificou o seu primeiro número para fazer o cálculo.`)
        };

        if(!args[1]) {
            message.channel.send(`<a:no:766016144720396389> | Você não especificou como vai ser o cálculo. +, -, *...`)
        }; 

        if(!args[2]) {
            message.channel.send(`<a:no:766016144720396389> | Você não especificou o seu segundo número para fazer o cálculo.`)
        };
        
        message.channel.send(calculator(args[0],args[1],args[2]))
    }
}