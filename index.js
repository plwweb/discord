const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', () => {
  console.log(`✅ บัญชี ${client.user.tag} ออนไลน์เรียบร้อยแล้ว!`);
  // ตั้งสถานะให้ดูเหมือนคนใช้งานจริง (Idle) เพื่อลดความเสี่ยง
  client.user.setPresence({ status: 'idle' });
});

// รันบอทด้วย Token จาก Secrets
client.login(process.env.DISCORD_TOKEN);
