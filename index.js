const { Client, CustomStatus, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`✅ บัญชี ${client.user.tag} ออนไลน์พร้อมแก้ไขโลโก้ Roblox!`);

  // 1. สร้าง Custom Status (ข้อความ + Emoji)
  const custom = new CustomStatus(client)
    .setEmoji('🔥') 
    .setState('24/7');

  // 2. สร้าง Rich Presence สำหรับ Roblox แบบละเอียด
  const roblox = new RichPresence(client)
    .setApplicationId('439205569915518976') // Roblox ID
    .setType('PLAYING')
    .setName('ROBLOX')
    .setAssetsLargeImage('439205569915518976') // ลองใช้ ID ของแอปเป็นรหัสรูป
    .setAssetsLargeText('Roblox');

  // สั่งแสดงผล
  client.user.setPresence({
    status: 'dnd',
    activities: [custom, roblox] 
  });
});

client.login(process.env.DISCORD_TOKEN);
