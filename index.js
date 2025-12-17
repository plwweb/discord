const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`✅ บัญชี ${client.user.tag} ออนไลน์พร้อมสถานะ Lastt`);

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
      
      // สร้าง Object สำหรับ Roblox Rich Presence
  const rblx = new RichPresence(client)
    .setApplicationId('439205569915518976') // ID ของ Roblox
    .setType('PLAYING')
    .setName('Roblox')
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1423715705882280056/1450936935227985940/image.png?ex=694459d2&is=69430852&hm=beeea752e66e1726b5c6b336e34e8058e85792e282b93d6e0ebc711f4d221666') // 🔴 แก้ไข: ใส่เป็น Link รูปภาพ
    .setAssetsLargeText('Roblox')
    .setStartTimestamp(Date.now());
      }
    ]
  });
});

client.login(process.env.DISCORD_TOKEN);
