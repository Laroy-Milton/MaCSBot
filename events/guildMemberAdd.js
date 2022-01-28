const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js");

module.exports = {
	name: 'guildMemberAdd',
    once: false,
    execute(member, client) {

    const welcomechannelId = '934044492133171273' //Channel You Want to Send The Welcome Message

    // This is for the dorpdown menu
    const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('selectMainRole')
                .setPlaceholder('Select Role')
                .addOptions([
                    {
                        label: 'MacEwan Student',
                        description: 'This is a description',
                        value: 'first_option',
                    },
                    {
                        label: 'Professor',
                        description: 'This is also a description',
                        value: 'second_option',
                    },
                    {
                        label: 'Visitor',
                        description: 'This is also another description',
                        value: 'third_option',
                    }
                ]),
        );

        const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Some title')
			.setURL('https://discord.js.org/')
			.setDescription('Some description here');
    
    // set role for user
    // let welcomeRole = member.guild.roles.cache.find(role => role.name === 'Visitors');
    // member.roles.add(welcomeRole);

    const msg ='Welcome, please select a role to get started.'
    member.guild.channels.cache.get(welcomechannelId)
        .send({content: msg, embeds: [embed], components: [row]})
        .then(console.log('User ${} joined'))
        .catch(console.error);

    // send the message
    // member.guild.channels.cache.get(welcomechannelId).send({content: 'testicles', components: [row]})
        // .then(message => console.log('Sent message: ${message.content}'))
        // .catch(console.error);
	}
};