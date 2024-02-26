//Lets require be used as normal
import { createRequire } from 'module'
const require = createRequire(import.meta.url);

require('dotenv').config(); //initializes dotenv
const Discord = require('discord.js'); //imports discord.js

//Imports random words from the js library
import { generate, count } from "random-words";

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

client.on(Events.MessageCreate, message => {

  //Noah
  /*if (message.author == "423396384302039042")
  {
    message.channel.send('Don\'t ever talk in this chat again fool.');
    message.channel.send('Mr. Reagan Thomas');
    return;
  }
  //Patrick
  if (message.author == "480178483943964703")
  {
    message.channel.send('Don\'t ever talk in this chat again fool.');
    message.channel.send('Mr. P Viator');
    return;
  }
  */
 /*
  //Peyton  
  if (message.author == "273678998251503616")
  {
    message.channel.send('Hello Peyton, God Supreme');
    //return;
  }
  //Justin
  if (message.author == "251964607877480450")
  {
    message.channel.send('You have committed many a crime Justin Judice. Please refrain frome speaking without being spoken to wench.');
    return;
  }*/

  if (!message.content.startsWith(prefix) || message.author.bot) 
    return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'test'){
    message.channel.send('The bot is working');
  }
  if (command === 'freestyle')
  {
    message.channel.send("Your new word is: " + generate());
  }
  if (command === 'ussliberty')
  {
    message.channel.send(
      '(Verse 1)\n' + 
    'Yo, listen up, I\'ll tell a tale of history\'s twist,\n' +
    'About a ship named Liberty, caught in a violent mist.\n' +
    'In \'67, June, amidst the sea\'s embrace,\n'+
    'She sailed with pride, a symbol of the USA\'s grace.\n'+
    
    'Set sails in the Med, on a mission, they believed,\n'+
    'But what ensued, no sailor could\'ve perceived.\n'+
    'Israeli jets approached, without a friendly hail,\n'+
    'Innocent sailors soon found themselves in a deadly gale.\n'+
    
    '(Chorus)\n'+
    'U.S.S. Liberty, her story never fades,\n'+
    'In the annals of time, where truth evades.\n'+
    'A tragic incident, shrouded in mystery,\n'+
    'The world still ponders the U.S.S. Liberty\'s history.\n'+
    
    '(Verse 2)\n'+
    'Flags flying high, under the scorching sun\'s glare,\n'+
    'Suddenly, chaos erupted, a nightmare beyond compare.\n'+
    'Torpedo strikes, bombs falling from the sky,\n'+
    'Sailors\' cries for help, as the wounded lie.\n'+
    
    'Amid confusion, amidst the smoke and flame,\n'+
    'Courageous souls fought on, to protect the ship\'s name.\n'+
    'Though battered and bruised, Liberty stood tall,\n'+
    'Her crew\'s resilience, an unwavering call.\n'+
    
    '(Chorus)\n'+
    'U.S.S. Liberty, her story never fades,\n'+
    'In the annals of time, where truth evades.\n'+
    'A tragic incident, shrouded in mystery,\n'+
    'The world still ponders the U.S.S. Liberty\'s history.\n'+
    
    '(Verse 3)\n'+
    'Questions linger, about that fateful day,\n'+
    'Was it mistaken identity, or something more at play?\n'+
    'Conspiracy theories abound, whispers in the dark,\n'+
    'But the truth remains elusive, leaving its mark.\n'+
    
    'Yet amidst the shadows, one thing rings true,\n'+
    'The bravery of Liberty\'s crew, in all they had to do.\n'+
    'Their sacrifice remembered, in each passing year,\n'+
    'As we honor their memory, shedding a silent tear.\n'+
    
    '(Chorus)\n'+
    'U.S.S. Liberty, her story never fades,\n'+
    'In the annals of time, where truth evades.\n'+
    'A tragic incident, shrouded in mystery,\n'+
    'The world still ponders the U.S.S. Liberty\'s history.\n'+
    
    '(Outro)\n'+
    'So here\'s to the U.S.S. Liberty, sailing on the eternal sea,\n'+
    'A symbol of courage, and the pursuit of truth\'s decree.\n'+
    'May her legacy endure, in the hearts of those who know,\n'+
    'The untold story of Liberty, forever in our soul.\n');
  }
  if (command === 'help')
  {
    message.channel.send("Nah");
  }
  else{
    //message.channel.send('No');
  }
})

//this line must be at the very end
client.login("Insert Token Here"); //signs the bot in with token