const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
client.on('ready', () => {
  console.log('Bot is ready');
});
client.login(process.env.BOT_TOKEN)
client.on('message', (msg) => {
if (msg.content.includes('suzumi')) {
    msg.reply('Did you mention me?');
}
});
client.on('message', (msg) => {
if (msg.content.includes('amogus')) {
    msg.reply('sussy baka');
}
});


