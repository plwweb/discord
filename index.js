const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`✅ ${client.user.tag} ออนไลน์พร้อมรูป (ใช้ Public ID)`);

  // ใช้การส่งข้อมูลดิบ เพื่อความชัวร์
  client.user.setPresence({
    status: 'dnd',
    activities: [
      {
        // ส่วนของ Custom Status
        type: 'CUSTOM',
        name: 'Custom Status',
        state: '24/7 nakub', 
        emoji: { name: '🔥' }
      },
      {
        // ใช้ ID สาธารณะที่มีรูป Roblox พร้อมใช้งานอยู่แล้ว (แก้ปัญหา ? หายถาวร)
        type: 'PLAYING',
        name: 'ROBLOX', 
        applicationId: '795774026330996767', // ID สาธารณะ (Verified)
        details: 'In Game',
        assets: {
          largeImage: 'roblox', // ชื่อรูปมาตรฐานของ ID นี้
          largeText: 'Roblox'
        },
        buttons: [
          { label: "Join Game", url: "https://www.roblox.com" }
        ],
        timestamps: {
          start: Date.now()
        }
      }
    ]
  });
});

client.login(process.env.DISCORD_TOKEN);
