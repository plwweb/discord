const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', () => {
  console.log(`✅ บัญชี ${client.user.tag} ออนไลน์พร้อมสถานะใหม่!`);

  client.user.setPresence({
    status: 'dnd', // สถานะ: online, idle, dnd
    activities: [{
      name: "ROBLOX", // ใส่ข้อความที่ต้องการโชว์ที่นี่
      type: 'PLAYING' // ใช้ตัวพิมพ์ใหญ่เสมอ: PLAYING, WATCHING, LISTENING
    }]
  });
});

client.login(process.env.DISCORD_TOKEN);
