const { Client, Intents, MessageEmbed } = require('discord.js');
const routes = require('./commands/routes');
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

client.on('messageCreate', async message =>{
  const collector = message.channel.createMessageCollector({ time: 15000 });
  const rotwchannel = message.guild.channels.cache.find(channel => channel.name === 'rotw');

  if (message.content.toLowerCase().startsWith(prefix + "say")) 
 {
  let MSG = message.content.split(" ");
  let Route = MSG.slice(1).join("+");
  let routeD = MSG.slice(1).join(" ");
  if (!Route) message.reply("Please specify the routes!")
  else
  {
   rotwchannel.send(routeD)
}
}
});

client.on('messageCreate', function(message) { 
  const collector = message.channel.createMessageCollector({ time: 15000 });
 

  if (message.content.toLowerCase().startsWith(prefix + "routestest")) 
 {
  let MSG = message.content.split(" ");
  let Route = MSG.slice(1).join("+");
  let routeD = MSG.slice(1).join(" ");
  if (!Route) message.reply("Please specify the routes!")
  if(routeD.content.includes('EDDM'))
    message.channel.send('hi')
  
}

});

client.on('messageCreate', async message =>{
  const collector = message.channel.createMessageCollector({ time: 15000 });
  const rotwchannel = message.guild.channels.cache.find(channel => channel.name === 'rotw');

  if (message.content.toLowerCase().startsWith(prefix + "rotw")) 
 {
  let MSG = message.content.split(" ");
  let Route = MSG.slice(1).join("+");
  let routeD = MSG.slice(1).join(" ");
  if (!Route) message.reply("Please specify the routes!")
  else
  {
   rotwchannel.send('```Sorry for the late one Pilots! say Hello to another week of ROTW! these are your routes for the week, enjoy!```' + "\n\n" + "***Routes***" + "\n\n" + routeD + "\n\n" + "***Multiplier Codes***" + "\n\nROTW 1.5x - 176046 \n\n ROTW 2x - 478157 \n\n ROTW 2.5x - 557689" +" \n\n Thank you and good luck flying - Lufty team! " + '```***EXTRAS*** \n\n NOTAMS \n\n • Remember to always fly in a professional manner and to always adhere to all ATC instructions. \n\n • These routes can be flown both directions n\n\ • When logging one of these flights, please select the TBM if you havent unlocked the aircraft and apply multiplier as indicated. \n\n • These routes are open to any rank, for all to enjoy and multipliers may be applied as indicated.```')
}
}
});

client.on('messageCreate', function(message) { 

  if(message.author.bot) return;
    if(message.content.toLowerCase().includes(`${prefix}routes`)){
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


client.on("message", async (message) => {
const {roleEmbed} = require('./functions/embeds')
if (message.author.bot) return;

if (message.content == "l.roles") {
client.api.channels(message.channel.id).messages.post({
  data: {
    embeds: [roleEmbed],
    components: [
      {
        type: 1,
        components: [
          {
            type: 2,
            style:  4,
            label: "Apply",
            // Our button id, we can use that later to identify,
            // that the user has clicked this specific button
            custom_id: "send_application"
          }
        ]
      }
    ]
  }
});
}
});



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
