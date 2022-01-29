const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
        console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);

        if (interaction.isCommand()) {
            const command = interaction.client.commands.get(interaction.commandName);

            if (!command) return;

            try {
            await command.execute(interaction);
            } catch (error) {
                console.error(error);
                return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        }
        if (interaction.isSelectMenu()) {
            // TODO seperate function
            if (interaction.customId === 'selectMainRole') {
                await interaction.reply({content: "This is empehmeral", ephemeral: true});
            }
        }

        if (interaction.isButton()) {
            if (interaction.customId === 'acceptRules') {
                const userId = interaction.member.user.id;
                console.log(userId);
                const row = new MessageActionRow()
                    .addComponents(
                        new MessageButton()
                        .setStyle('LINK')
                        .setLabel('Verify Email')
                        .setURL(`http://localhost:5500/?userid=${userId}`)
                    )
                await interaction.reply({content: "Please verify your email", ephemeral: true, components: [row]});
            }

            if (interaction.customId === 'denyRules') {
                await interaction.reply({content: "You must comply with the rules to gain access to the server", ephemeral: true});
            }
        }
	},
};