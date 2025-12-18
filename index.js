const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`✅ ${client.user.tag} ออนไลน์รอบใหม่แบบ Maximum Duration!`);

  const rblx = new RichPresence(client)
    .setApplicationId('439205569915518976')
    .setType('PLAYING')
    .setName('Roblox')
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1423715705882280056/1450936935227985940/image.png?ex=694459d2&is=69430852&hm=beeea752e66e1726b5c6b336e34e8058e85792e282b93d6e0ebc711f4d221666')
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
