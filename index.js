const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`✅ บัญชี ${client.user.tag} ออนไลน์พร้อมสถานะ`);

  // ตั้งค่า Presence
  client.user.setPresence({
    status: 'dnd', // หรือ 'online'
    activities: [
      {
        // 1. ส่วนของ Custom Status (ข้อความ + Emoji)
        type: 'CUSTOM',
        name: 'Custom Status',
        state: '24/7', // แก้ไขข้อความที่นี่
        emoji: { name: '🔥' } // แก้ไข Emoji ที่นี่
      },
      {
        // 2. ส่วนของเกม ROBLOX (แบบมีโลโก้)
        name: "ROBLOX",
        type: 'PLAYING',
        applicationId: '439205569915518976',
        assets: {
          largeImage: '439205569915518976', // ID รูปมาตรฐานของ Roblox
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
