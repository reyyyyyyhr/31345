exports.run = async (client, message, args, level) => {
    try {
        const modRole = message.guild.roles.cache.find(r => r.name.toLowerCase() === client.getSettings(message.guild.id).modRole.toLowerCase());
        const adminRole = message.guild.roles.cache.find(r => r.name.toLowerCase() === client.getSettings(message.guild.id).adminRole.toLowerCase());
        // Ensure mod/admin roles actually exist
        if (!modRole) {
            return message.channel.send(lang.NoModRole)
        }

        if (!adminRole) {
            return message.channel.send(lang.NoAdminRole)
        }

        if (!message.member.roles.cache.has(modRole.id) && !message.member.hasPermission("MANAGE_MESSAGES") && !message.member.roles.cache.has(adminRole.id) && !message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send(lang.NoPermission)
        }
        let num

        if (args.Length === 0) return message.reply(lang.NoAmountSpecified)

        if (!isNaN(args[0])) {
            num = parseInt(args[0])

            if (num <= 100 && num >= 1) {
                message.delete()
                message.channel.bulkDelete(num)
            } else message.reply(lang.OneAndHundred)
        } else {
            message.reply(lang.InvalidAmount)
        }
    } catch (err) {
        message.channel.send(client.errors.genericError + err.stack).catch();
    }
}

exports.conf = {
    enabled: true,
    aliases: ['clear', 'prune', 'delete', 'del'],
    guildOnly: true,
    permLevel: 'User'
}

exports.help = {
    name: 'purge',
    category: 'Moderation',
    description: 'Purges the amount of messages you specify.',
    usage: 'purge <1-100>'
}