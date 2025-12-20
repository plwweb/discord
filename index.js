const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`✅ ${client.user.tag} ออนไลน์ด้วยวิธี Raw Data (บังคับโชว์รูป)`);

  // ใช้การส่งค่าแบบ Object โดยตรง เพื่อข้ามปัญหาระบบของ Library
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
        // ส่วนของ Roblox (Application ID ของคุณ)
        type: 'PLAYING',
        name: 'ROBLOX', 
        applicationId: '1451806614750498996', // ✅ ID ของคุณ
        details: 'In Game',
        assets: {
          largeImage: 'logo', // ✅ ชื่อรูปใน Developer Portal
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
