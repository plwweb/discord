const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`✅ ${client.user.tag} ออนไลน์รอบใหม่แบบ!`);

  const rblx = new RichPresence(client)
    .setApplicationId('439205569915518976')
    .setType('PLAYING')
    .setName('Roblox')
    .setAssetsLargeImage('https://img5.pic.in.th/file/secure-sv1/imagec46f84e71c747974.png')
    .setAssetsLargeText('Roblox')
    .setStartTimestamp(Date.now());

  const customStatus = {
    name: 'Custom Status', 
    type: 'CUSTOM',
    state: '24/7 nakub', 
    emoji: { name: '🔥' } 
  };

  client.user.setPresence({
    status: 'dnd',
    activities: [customStatus, rblx]
  });
});

client.login(process.env.DISCORD_TOKEN);
