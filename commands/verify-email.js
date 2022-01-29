const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('verify-email')
		.setDescription('Setup button for email verification'),
	async execute(interaction) {
        //This is for the dorpdown menu
        
		await interaction.reply({content: 'TODO: meainingfull message', 
            components: [
            new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setStyle('LINK')
                .setLabel('Verify Email')
                .setURL('http://localhost:5500')
        )
        ]});
	},
};


