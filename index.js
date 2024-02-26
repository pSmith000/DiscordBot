require('dotenv').config(); //initializes dotenv
const Discord = require('discord.js'); //imports discord.js

const { Client, GatewayIntentBits, Events } = require('discord.js');

const prefix = '!';

const client = new Client({
  allowedMentions: {
    parse: [`users`, `roles`],
    repliedUser: true,
  },
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
}); //creates new client

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildCreate', guild => {
  guild.systemChannel.send("Thanks for inviting me!");
});

client.on(Events.MessageCreate, message => {

  if (!message.content.startsWith(prefix) || message.author.bot) 
    return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'test'){
    message.channel.send('The bot is working');
  }
  else{
    message.channel.send('No');
  }
})

//this line must be at the very end
client.login("MTIwNDkwODUxNDI3MTU1OTc2MQ.GJ383Z.HxzL4vTGZnjhRZpOfMaqSJQdssK94aRdrMLYAQ"); //signs the bot in with token