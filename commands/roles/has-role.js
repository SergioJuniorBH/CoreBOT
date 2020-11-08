const Discord = require('discord.js');

module.exports = {
    name: 'has-role',
    category: 'roles',
    description: 'Show if the user have a role',
    run: async (bot, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send('<:nop:773393832729509918> | Você não tem permissão para gerenciar cargos.')
        }

        const targetUser = message.mentions.users.first()
        if(!targetUser) {
            return message.channel.send('<:nop:773393832729509918> | Você não mencionou ninguém para mostrar se essa pessoa tem o cargo.')
        }

        args.shift()

        const roleName = args.join(" ")
        const role = message.guild.roles.cache.find((role) => {
            return role.name === roleName
        })

        if(!role) {
            return message.channel.send(`<:not_stonks:766061024025116682> | Eu procurei em todos os lugares deste servidor, mas não achei nenhum cargo com o nome de ${roleName}`)
        }
        
        const member = message.guild.members.cache.get(targetUser.id)

        if(member.roles.cache.get(role.id)) {

            const embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setDescription(`${targetUser} tem o cargo ${role}`)

            message.channel.send(embed)
        } else {
            const elseEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setDescription(`${targetUser} não tem o cargo ${role} em seu perfil.`)
            message.channel.send(elseEmbed)
        }
    }
}