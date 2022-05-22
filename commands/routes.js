const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
//const { embedMsgIcaos } = require('../functions/embeds');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("icaos")
        .setDescription("Displays all of the ICAOS of all the aiports in the game."),
    async execute(interaction) {
        let embed = embedMsgIcaos()
        interaction.reply('hi')
    },

    help: {
        "name": "icaos",
        "description": "Displays all of the ICAOS of all the aiports in the game.",
        "category": "custom"
    }
}

//{ embeds:[embed] }