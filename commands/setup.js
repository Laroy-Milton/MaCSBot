const { SlashCommandBuilder, MessageActionRow, MessageSelectMenu, MessageEmbed  } = require('@discordjs/builders');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('setup')
		.setDescription('Setup for role call'),
	async execute(interaction) {
        //This is for the dorpdown menu
        
		await interaction.send({content: 'Welcome, please select a role to get started.', 
            components: [
            new MessageActionRow()
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
        )
        ]});
	},
};