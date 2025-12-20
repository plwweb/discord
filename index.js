const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`✅ บัญชี ${client.user.tag} ออนไลน์สำเร็จ (No Error Mode)`);

  client.user.setPresence({
    status: 'dnd',
    activities: [
      {
        // 1. Custom Status
        type: 'CUSTOM',
        name: 'Custom Status',
        state: '24/7 nakub', 
        emoji: { name: '🔥' }
      },
      {
        // 2. Roblox Playing
        type: 'PLAYING',
        name: 'ROBLOX',
        applicationId: '439205569915518976',
        details: 'In Game',
        assets: {
          // ใช้รหัสรูปภาพโดยตรงแทน URL เพื่อเลี่ยง Error
          largeImage: '439205569915518976', 
          largeText: 'Roblox'
        },
        timestamps: {
          start: Date.now()
        }
      }
    ]
  });
});

client.login(process.env.DISCORD_TOKEN);
