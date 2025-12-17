const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', () => {
  console.log(`✅ บัญชี ${client.user.tag} ออนไลน์แล้ว!`);

  client.user.setPresence({
    status: 'dnd', // เลือกสถานะ: online, idle, dnd
    activities: [{
      name: "ชื่อเกมหรือข้อความที่ต้องการ", // ข้อความที่จะโชว์
      type: 'PLAYING' // ประเภท: 'PLAYING', 'WATCHING', 'LISTENING', 'COMPETING'
    }]
  });
});


// รันบอทด้วย Token จาก Secrets
client.login(process.env.DISCORD_TOKEN);
