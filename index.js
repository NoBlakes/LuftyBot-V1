const { Client, MessageEmbed, MessageButton, Intents } = require('discord.js');
const  { token, prefix } = require('./config.json')
const client = new Client ({ intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGES], partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });



client.on('ready', () => {
    client.user.setStatus('idle')
    client.user.setActivity(" 211 Routes | l.help", {
        type: "WATCHING",
      });
    }) 

client.on('ready', () => {

console.log('ready')

})

client.on('message', message => {
  if (message.content === prefix + 'ping') {
  message.channel.send('Loading data').then (async (msg) =>{
    msg.delete()
    message.channel.send(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  })
  }
});

client.on('messageCreate', function(message) { 

  if(message.author.bot) return;
    if(message.content.toLowerCase().includes(`${prefix}help`) || (message.content.toLowerCase().includes (`${prefix}h`))){
        const helpEmbed = new MessageEmbed()

        
.setColor('#0099ff')
    .setTitle('prefix: l.')
    .setAuthor('Help for Luftybot')
    .setDescription('this is the help page for LuftyBot, more to come!')    .addFields(
    { name: 'Commands', value: 'here is some help with the commands:' },
    { name: '\u200B', value: '\u200B' },
    { name: 'Basics', value: ` To View the current lists of route lufty use `, inline: true },
    { name: 'More commands', value: 'Some other commands are \n\n placeholder \n\n placeholder', inline: true },
)
    .setTimestamp(new Date())
    .setFooter('if you have any bugs please DM State_SimulatingNZ#3510 ');
            message.channel.send({ embeds: [helpEmbed] });   
    }
})

client.on('messageCreate', function(message) { 

  if(message.author.bot) return;
    if(message.content.toLowerCase().includes(`${prefix}routes`) || (message.content.toLowerCase().includes (`${prefix}r`))){
        const routeEmbed = new MessageEmbed()

        
.setColor('#0099ff')
    .setAuthor('Routes')
    .setDescription('this is the Routes!')    .addFields(
    { name: '\u200B', value: '\u200B' },
    { name: 'Lufty', value: ` Lufthansa mainline: l.mainline \n\n Lufthansa Regional: l.regional `, inline: true },
)
    .setTimestamp(new Date())
    .setFooter('if you have any bugs please DM State_SimulatingNZ#3510 ');
            message.channel.send({ embeds: [routeEmbed] });   
    }
})





client.on('messageCreate', function(message) { 


  if(message.author.bot) return;
    if(message.content.toLowerCase().includes(`${prefix}regional`)){
        const routeEmbed = new MessageEmbed()

        
.setColor('#0099ff')
    .setAuthor('Regional')
    .addFields(
    { name: '\u200B', value: '\u200B' },
    { name: 'Regional routes:', value: ` `, inline: true },
)
    .setTimestamp(new Date())
    .setFooter('if you have any bugs please DM State_SimulatingNZ#3510 ')
        
    message.channel.send({ embeds: [regionalEmbed] });   
    }
})



client.login(token)