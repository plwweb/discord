const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`✅ ${client.user.tag} ออนไลน์พร้อมโลโก้ Roblox ของจริง!`);

  client.user.setPresence({
    status: 'online', // สถานะห้ามรบกวน (สีแดง)
    activities: [
      {
        // 1. Custom Status
        type: 'CUSTOM',
        name: 'Custom Status',
        state: '24/7 nakub', 
        emoji: { name: '🔥' }
      },
      {
        // 2. Roblox Playing (ใช้ ID ของเราเอง)
        type: 'PLAYING',
        name: 'ROBLOX', // ชื่อที่จะโชว์ตัวหนา
        // 🔴 นำ Application ID ที่ Copy มา ใส่แทนเลขตรงนี้
        applicationId: '1451806614750498996', 
        assets: {
          // 🔴 ใส่ชื่อรูปที่คุณตั้งใน Art Assets (เช่น 'logo')
          largeImage: 'logo', 
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
