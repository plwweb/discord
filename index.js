const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`✅ บัญชี ${client.user.tag} ออนไลน์พร้อมภาพ งง Roblox!`);

  // ใช้ลิงก์ภาพจากระบบ Discord Content Delivery Network โดยตรง
  // วิธีนี้จะช่วยแก้รูปเครื่องหมายคำถาม (?) ได้ดีที่สุด
  const rblx = new RichPresence(client)
    .setApplicationId('439205569915518976')
    .setType('PLAYING')
    .setName('Roblox')
    .setDetails('In Game')
    // ใช้ External Asset ID ของ Discord
    .setAssetsLargeImage('439205569915518976') 
    .setAssetsLargeText('Roblox')
    .setStartTimestamp(Date.now());

  const customStatus = {
    name: 'Custom Status', 
    type: 'CUSTOM',
    state: '24/7 nakub', 
    emoji: { name: '🔥' } 
  };

  client.user.setPresence({
    status: 'dnd',
    activities: [customStatus, rblx]
  });
});

client.login(process.env.DISCORD_TOKEN);
