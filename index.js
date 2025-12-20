const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  // แก้ไขข้อความ Log ให้ดูง่ายขึ้น
  console.log(`✅ บัญชี ${client.user.tag} ออนไลน์พร้อมสถานะ Roblox (รันยาว 6 ชม.)`);

  // 1. ส่วนของ Roblox Rich Presence (ใช้ลิงก์รูปภาพใหม่ที่คุณให้มา)
  const rblx = new RichPresence(client)
    .setApplicationId('439205569915518976')
    .setType('PLAYING')
    .setName('Roblox')
    .setAssetsLargeImage('https://img5.pic.in.th/file/secure-sv1/imagec46f84e71c747974.png')
    .setAssetsLargeText('Roblox')
    .setStartTimestamp(Date.now());

  // 2. ส่วนของ Custom Status
  const customStatus = {
    name: 'Custom Status', 
    type: 'CUSTOM',
    state: '24/7 nakub', 
    emoji: { name: '🔥' } 
  };

  // สั่งออนไลน์สถานะ Do Not Disturb พร้อมกิจกรรมทั้งหมด
  client.user.setPresence({
    status: 'dnd',
    activities: [customStatus, rblx]
  });
});

client.login(process.env.DISCORD_TOKEN);
