const { Client, CustomStatus } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`✅ บัญชี ${client.user.tag} ออนไลน์พร้อมสถานะ Roblox และ Custom Status!`);

  // 1. สร้าง Custom Status (ข้อความ + Emoji)
  const custom = new CustomStatus(client)
    .setEmoji('🔥') // เปลี่ยน Emoji ได้ที่นี่
    .setState('รันระบบอัตโนมัติ 24/7'); // เปลี่ยนข้อความสถานะได้ที่นี่

  // 2. ตั้งค่าสถานะการเล่นเกม ROBLOX (แบบมีโลโก้)
  const roblox = {
    name: "ROBLOX",
    type: 'PLAYING',
    applicationId: '439205569915518976', // ID ของ Roblox
    details: 'Playing Roblox',
    assets: {
      largeImage: '439205569915518976', // ดึงโลโก้ Roblox
      largeText: 'Roblox'
    }
  };

  // สั่งให้แสดงผลพร้อมกันทั้ง 2 อย่าง
  client.user.setPresence({
    status: 'online', // สถานะจุดสีเหลือง (หรือเปลี่ยนเป็น online)
    activities: [custom, roblox] 
  });
});

client.login(process.env.DISCORD_TOKEN);
