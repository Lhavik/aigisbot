const config = require('../config');
exports.run = (client, message, args) => {
  if(!message.author.id == config.ownerID) return;
  if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
  delete require.cache[require.resolve(`./${args[0]}.js`)];
  message.reply(`The command ${args[0]} has been reloaded`);
};
