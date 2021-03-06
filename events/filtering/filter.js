const Discord = require("discord.js");

const blocked = require('./blocked.json')
module.exports = async (bot, message) => {
    try {
        if (message.author.bot) return;
        var logchannel = message.guild.channels.cache.find(c => c.name === "logs") || bot.channels.cache.get("733672950099869756");
        if (!logchannel) return;

        for (let i = 0; i < blocked.length; i++) {
            if (message.content.toLowerCase().includes(blocked[i])) {
                const embed = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setTitle("Flagged word !")
                    .addFields(
                        {name: "**User**", value:`> ${message.author.username}`},
												{name: "**User ID**", value: `> ${message.author.id}`},
                        {name: "**Word**", value:`> ${message.content}`}
                    )
                    .setFooter(message.author.username)
                    .setTimestamp();
            return logchannel.send(embed)
            }
        }


    } catch (e) {logchannel.send(`There was a problem with message flagging, ${e}.`) }
} 