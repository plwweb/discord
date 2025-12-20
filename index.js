const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`✅ ${client.user.tag} ออนไลน์พร้อมปุ่ม (Force Refresh)!`);

  // ใช้การส่งข้อมูลดิบ เพื่อความชัวร์ที่สุด
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
        // ส่วนของ Roblox (ใช้ ID ของคุณ: 1451806614750498996)
        type: 'PLAYING',
        name: 'ROBLOX', 
        applicationId: '1451806614750498996', // ✅ ID ของคุณ
        details: 'In Game',
        state: 'Playing with friends', // เพิ่มบรรทัดนี้ช่วยให้ดูเต็มขึ้น
        assets: {
          largeImage: 'logo', // ✅ ชื่อรูปในเว็บ (ต้องตรงเป๊ะ)
          largeText: 'Roblox'
        },
        // 🔥 เพิ่มปุ่ม เพื่อบังคับให้ Discord โหลดสถานะใหม่
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
