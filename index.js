const { Client, CustomStatus, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`✅ บัญชี ${client.user.tag} ออนไลน์พร้อมบังคับโลโก้ Roblox!`);

  // 1. Custom Status
  const custom = new CustomStatus(client)
    .setEmoji('🔥') 
    .setState('24/7');

  // 2. Rich Presence (แบบบังคับใส่ลิงก์รูป)
  const roblox = new RichPresence(client)
    .setApplicationId('439205569915518976')
    .setType('PLAYING')
    .setName('ROBLOX')
    .setStartTimestamp(Date.now()) // เพิ่มเวลาที่เริ่มเล่น (ให้ดูเหมือนจริง)
    // ใช้ลิงก์รูปภาพโดยตรงแทนการดึงจาก ID
    .setAssetsLargeImage('https://i.pinimg.com/originals/93/7b/09/937b093f6984764b8893d7c71f544525.png') 
    .setAssetsLargeText('Roblox');

  client.user.setPresence({
    status: 'dnd',
    activities: [custom, roblox] 
  });
});

client.login(process.env.DISCORD_TOKEN);
