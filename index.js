const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`✅ บัญชี ${client.user.tag} ออนไลน์สำเร็จ! (รันยาว 6 ชม.)`);

  // 1. ส่วนของ Roblox Rich Presence
  // เปลี่ยนมาใช้ ID รูปภาพของ Discord แทนลิงก์ URL เพื่อป้องกัน INVALID_URL
  const rblx = new RichPresence(client)
    .setApplicationId('439205569915518976')
    .setType('PLAYING')
    .setName('Roblox')
    .setDetails('In Game')
    .setAssetsLargeImage('439205569915518976') // ใช้ ID ของ Roblox โดยตรง
    .setAssetsLargeText('Roblox')
    .setStartTimestamp(Date.now());

  // 2. ส่วนของ Custom Status
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
