const Discord = require('discord.js');

module.exports = {
    name: 'give-role',
    category: 'roles',
    description: 'Add a role in some user',
    aliases: ['addrole', 'add-role', 'adicionarcargo', 'adicionar-cargo'],
    run: async (bot, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send('<a:no:766016144720396389> | Você não tem permissão para adicionar cargos.')
        }

        const targetUser = message.mentions.users.first()
        if(!targetUser) {
            return message.channel.send('<a:no:766016144720396389> | Você não mencionou ninguém para fornecer o cargo.')
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

            const errEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setDescription(`${targetUser} já tem o cargo ${role}`)

            message.channel.send(errEmbed)
        } else {
            member.roles.add(role)

        const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`Cargo ${role} adicionado em ${targetUser} com sucesso.`)

        await message.channel.send(embed)
        }
    }
}