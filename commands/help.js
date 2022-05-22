const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageButton } = require('discord.js');
const { prefix } = require("../../config/config.json")
const paginationEmbed = require("discordjs-button-pagination")
const fs = require("fs")

let categories = { atc: [], custom: [] }
let embedArray = []

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Replies with the help section for the bot."),
    async execute(interaction) {
        const helpCommands = []
        const commandFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.js'))

        for (const [index, file] of commandFiles.entries()) {
            const command = require(`./${file}`)
            helpCommands.push(command.help);
        }

        if (!categories.atc.length && !categories.custom.length) {
            helpCommands.forEach(command => {
                if (command) {
                    switch (command.category) {
                        case "atc":
                            categories.atc.push({ name: command.name, description: command.description })
                            break;
                        case "custom":
                            categories.custom.push({ name: command.name, description: command.description })
                            break;
                    }
                }
            })
        }

        for (const [key, category] of Object.entries(categories)) {
            let e = new MessageEmbed()
                    .setTitle(`Help section for ${key.toUpperCase()}`)
                    .setColor("#00FFAA")
                    .setThumbnail(`${interaction.guild.iconURL()}`)
                    category.forEach(el => e.addField(`${prefix}${el.name}`, `${el.description}`))
            
            embedArray.push(e)
        }

        const button1 = new MessageButton()
            .setCustomId('previousbtn')
            .setLabel('Previous')
            .setStyle('DANGER');

        const button2 = new MessageButton()
            .setCustomId('nextbtn')
            .setLabel('Next')
            .setStyle('SUCCESS');

        let buttonArray = [button1, button2]

        paginationEmbed(interaction, embedArray, buttonArray, 60000)
    }
}