const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`✅ ${client.user.tag} ออนไลน์ต่อเนื่องแบบ No-Downtime!`);

client.on('ready', async () => {
  console.log(`✅ บัญชี ${client.user.tag} ออนไลน์พร้อมสถานะ Roblox!`);

  // 1. ส่วนของ Roblox Rich Presence
  const rblx = new RichPresence(client)
    .setApplicationId('439205569915518976')
    .setType('PLAYING')
    .setName('Roblox')
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1423715705882280056/1450936935227985940/image.png?ex=694459d2&is=69430852&hm=beeea752e66e1726b5c6b336e34e8058e85792e282b93d6e0ebc711f4d221666') // ใช้ URL รูป
    .setAssetsLargeText('Roblox')
    .setStartTimestamp(Date.now());

  // 2. ส่วนของ Custom Status
  const customStatus = {
    name: 'Custom Status', // 🔴 บรรทัดนี้สำคัญมาก ต้องใส่กัน error
    type: 'CUSTOM',
    state: '24/7 nakub', 
    emoji: { name: '🔥' } 
  };

  // รวมทั้งสองอย่างเข้าด้วยกัน
  client.user.setPresence({
    status: 'dnd',
    activities: [customStatus, rblx]
  });
});

client.login(process.env.DISCORD_TOKEN);
