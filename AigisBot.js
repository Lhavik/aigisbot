const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");
const {Client, Attachment} = require('discord.js');
client.on('ready', () => {
  console.log('I am ready!');
});
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});
client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});
client.on('message', (message) =>{
  if(!message.content || message.author.bot) return;
    if(message.content === 'UwU') {
      message.channel.send('OwO what\'s this');
    }
});
client.on('message', (message) =>{
  if(!message.content || message.author.bot) return;
    if(message.content === 'OwO') {
      message.channel.send('UwU');
    }
});
client.on('error', (e) => console.error(e));
client.on('warn', (e) => console.warn(e));
client.on('debug', (e) => console.info(e));

client.login(config.token);
