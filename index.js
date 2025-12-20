const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`✅ บัญชี ${client.user.tag} ออนไลน์พร้อมภาพ Roblox!`);

  // ใช้ลิงก์ภาพที่ดึงจาก Discord Content Delivery Network โดยตรง
  const rblxImage = 'mp:external/v2L_Xp8Y_M-s7zY9J2-q9-Z0-I/https/raw.githubusercontent.com/Anankun9/Discord-Online-24-7/main/roblox.png';

  const rblx = new RichPresence(client)
    .setApplicationId('439205569915518976')
    .setType('PLAYING')
    .setName('Roblox')
    .setDetails('In Game')
    .setAssetsLargeImage(rblxImage) // บังคับใช้ลิงก์ตรงที่ Discord อ่านได้
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
