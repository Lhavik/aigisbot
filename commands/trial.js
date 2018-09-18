exports.run = (client, message, args) => {
  const despair = client.emojis.get('490788218330152970');
  message.channel.send(`${despair}A body has been discovered!${despair} \nAfter a certain amount of time, which you may use however you like, a class trial will begin!`);
};
