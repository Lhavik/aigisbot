const Discord = require('discord.js');
const client = new Discord.Client();
const {Client, Attachment} = require('discord.js');
const config = require("./config.json");
client.login(config.token);
client.on('ready', () => {
  console.log('I am ready!');
});
client.on('message', message =>{
  if(!message.content || message.author.bot) return;
    if(message.content === "UwU") {
      message.channel.send("OwO what's this");
    }
});
client.on('message', message =>{
  if(!message.content || message.author.bot) return;
    if(message.content === "OwO") {
      message.channel.send("UwU");
    }
});
client.on('message', (message) => {
if(!message.content.startsWith(config.prefix) || message.author.bot) return;
  if(message.content.startsWith(config.prefix + 'waifu')) {
    message.channel.send('YOUR WAIFU IS TRASH');
}else
if(message.content.startsWith(config.prefix + 'patty')) {
  message.channel.send('FUCK PATTY');
}else
  if(message.content.startsWith(config.prefix + 'yikes')) {
    const attachment = new Attachment('./yikes.jpg');
      message.channel.send(attachment);
}else
  if(message.content.startsWith(config.prefix + 'orb')) {
    const attachment = new Attachment('./orb.png');
      message.channel.send(attachment);
}else
  if(message.content.startsWith(config.prefix + 'chat')) {
    const attachment = new Attachment('./revive.jpg');
      message.channel.send(attachment);
}else
  if(message.content.startsWith(config.prefix + 'jake')) {
    const attachment = new Attachment('./JakeLeave.jpg');
      message.channel.send(attachment);
}else
  if(message.content.startsWith(config.prefix + 'pray')) {
    message.channel.send('🙏 PRAY THE RAGNELL AWAY 🙏')
}else
  if(message.content.startsWith(config.prefix + 'blame')) {
    message.channel.send('😡 📣  SJ Stream is unfair 😡 📣 awfulquilt is in there 😡 📣 standing at the concessions 😡 📣 plotting his oppressions 😡 📣')
}else
if(message.content.startsWith(config.prefix + 'sleep')){
  message.channel.send('You seem tired. You should go to sleep for the day *meow*')
}else
if(message.content.startsWith(config.prefix + "nerd")){
  message.channel.send('Y\'all are fukin NERDS like gawd dayum')
}else
  if(message.content.startsWith(config.prefix + 'help')) {
    message.channel.send('Current commads: waifu, patty, yikes, orb, chat, jake, pray, blame, and sleep \nIf you have any suggestions for the bot, feel free to contact Tots#1437 through DMs');
}
});
