const { Client, Intents } = require('discord.js');
const { MessageActionRow, MessageButton } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Eingeloggt als ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot || !message.content.startsWith('!fortnite')) return;

  const args = message.content.slice('!fortnite'.length).trim().split(/ +/);
  const playerName = args.join('%20');

  if (!playerName) {
    return message.channel.send('Bitte gib einen Fortnite-Spieler-Namen an.');
  }

  const fortniteTrackerURL = `https://fortnitetracker.com/profile/all/${playerName}`;

  const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setLabel('Fortnite Tracker')
        .setStyle('LINK')
        .setURL(fortniteTrackerURL)
    );

  message.channel.send({ content: `Hier sind die Fortnite-Statistiken für [${args.join(' ')}](${fortniteTrackerURL}):`, components: [row] });
});

client.login("");
