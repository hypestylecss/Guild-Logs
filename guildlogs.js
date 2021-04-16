const logChannel = 'CHANNEL_ID';
bot.on('guildCreate', (guild) => {
    bot.channels.cache.get(logChannel).send(
        new MessageEmbed()
        .setTitle(`Servers: ${bot.guilds.cache.size}`)
        .addField(':envelope_with_arrow: Server-Name:', `${guild.name}`)
        .addField(':id: Server-ID:', `${guild.id}`)
        .addField(':hammer_pick: Server-Members:', `${guild.memberCount}`)
        .addField(':crown: Owner-ID:', `${guild.ownerID}`)
        .setColor('#37ff00')
        .setTimestamp()
    )

})

bot.on('guildDelete', (guild) => {
    bot.channels.cache.get(logChannel).send(
        new MessageEmbed()
        .setTitle(`Servers: ${bot.guilds.cache.size}`)
        .addField(':envelope_with_arrow: Server-Name:', `${guild.name}`)
        .addField(':id: Server-ID:', `${guild.id}`)
        .addField(':hammer_pick: Server-Members:', `${guild.memberCount}`)
        .addField(':crown: Owner-ID:', `${guild.ownerID}`)
        .setColor('#ff1100')
        .setTimestamp()
    )
    
})
her
