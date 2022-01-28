const { MessageActionRow, MessageEmbed } = require("discord.js");

module.exports = {
	name: 'guildMemberAdd',
    execute(member, message,  Discord, client) {

    const welcomechannelId = '934044492133171273' //Channel You Want to Send The Welcome Message
    const targetChannelId = `934044492133171274` //Channel For Rules

    // This is for the dorpdown menu
    const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('select')
                .setPlaceholder('Nothing selected')
                .addOptions([
                    {
                        label: 'Select me',
                        description: 'This is a description',
                        value: 'first_option',
                    },
                    {
                        label: 'You can select me too',
                        description: 'This is also a description',
                        value: 'second_option',
                    },
                ]),
        );

    let welcomeRole = member.guild.roles.cache.find(role => role.name === 'Visitors');
    member.roles.add(welcomeRole);
    member.guild.channels.cache.get(welcomechannelId).send({content: 'testicles', components: [row]});
	}
};