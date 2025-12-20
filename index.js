const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`✅ บัญชี ${client.user.tag} ออนไลน์พร้อมแก้ปัญหาเรื่องภาพ!`);

  // ใช้ภาพจากที่จัดเก็บของ Discord โดยตรง เพื่อเลี่ยงรูปเครื่องหมายคำถาม
  const rblx = new RichPresence(client)
    .setApplicationId('439205569915518976')
    .setType('PLAYING')
    .setName('Roblox')
    .setDetails('In Game')
    // ดึงภาพจากฐานข้อมูลรูปภาพที่เสถียรที่สุด
    .setAssetsLargeImage('https://i.imgur.com/vHPTvYn.png') 
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
