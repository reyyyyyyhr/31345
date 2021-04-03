const Discord = require('discord.js')
const joke = require('one-liner-joke').getRandomJoke
const colors = require('../lib/colors.json')

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    try {
        message.channel.send(
            new Discord.MessageEmbed()
            .setColor(colors.default)
            .setDescription(joke({
                exclude_tags: ['dirty', 'racist', 'marriage', 'sex', 'death']
            }).body)
            .setFooter(`${lang.RespondingTo} ${message.author.tag}`, message.author.avatarURL())
            .setTimestamp()
        )
    } catch (err) {
        message.channel.send(client.errors.genericError + err.stack).catch();
    }
}

exports.conf = {
    enabled: true,
    aliases: ['randomjoke'],
    guildOnly: false,
    permLevel: 'User'
}

exports.help = {
    name: 'joke',
    category: 'Fun',
    description: 'Returns a random joke.',
    usage: 'joke'
}