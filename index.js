require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const keep_alive = require('./keep_alive.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setStatus("dnd"); // Sets the bot's status to Do Not Disturb
});

client.login(process.env.TOKEN);
