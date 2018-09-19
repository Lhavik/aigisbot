const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");
const logger = require('./utils/logger');
const {Client, Attachment} = require('discord.js');
client.on('ready', () => {
  logger.log('I am ready!');
});
fs.readdir("./events/", (err, files) => {
  if (err) return logger.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});
client.on("message", message => {
  // Sanity and verification checks
  if(!message.content || message.author.bot || message.channel.type !== 'text') return;

  if(message.content.indexOf(config.prefix) === 0) {
    // Prefix found, check for existing command
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    try {
      let filepath = `./commands/${command}.js`;
      if(fs.existsSync(filepath)) {
        let commandFile = require(filepath);
        commandFile.run(client, message, args);
      }
    } catch (err) {
      logger.error(err);
    }
  } else {
    // Prefix not found, check for other hidden goodies
    if(message.content === 'UwU') {
      message.channel.send('OwO what\'s this');
    }

    if(message.content === 'OwO') {
      message.channel.send('UwU');
    }
  }
});

client.on('error', (e) => logger.error(e));
client.on('warn', (e) => logger.warn(e));
client.on('debug', (e) => logger.info(e));

client.login(config.token);
