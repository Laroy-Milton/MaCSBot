const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rules')
		.setDescription('Setup button for email verification'),
	async execute(interaction) {
        //This is for the dorpdown menu
        
		await interaction.reply({content: 'TODO: meainingfull message about rules', 
            components: [
            new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('acceptRules')
                .setStyle('SUCCESS')
                .setLabel('Accept'),
            new MessageButton()
                .setCustomId('denyRules')
                .setStyle('DANGER')
                .setLabel('Deny')
        )
        ]});
	},
};


