const Discord = require('discord.js');

module.exports = {
    name: 'remove-role',
    category: 'roles',
    description: 'Remove a role in some user',
    aliases: ['removerole', 'delete-role', 'removercargo', 'remover-cargo'],
    run: async (bot, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send('<:nop:773393832729509918> | Você não tem permissão para remover cargos.')
        }

        const targetUser = message.mentions.users.first()
        if(!targetUser) {
            return message.channel.send('<:nop:773393832729509918> | Você não mencionou ninguém para remover o cargo.')
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

        if(!member.roles.cache.get(role.id)) {

            const errEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setDescription(`${targetUser} não tem o cargo ${role}`)

            message.channel.send(errEmbed)
        } else {
            member.roles.remove(role)

            const embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setDescription(`${role} foi removido com sucesso de ${targetUser}`)

            message.channel.send(embed)
        }
    }
}