const pidusage = require("pidusage");

function byte2mb(bytes) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  let l = 0, n = parseInt(bytes, 10) || 0;
  while (n >= 1024 && ++l) n /= 1024;
  return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.config = {
  name: "up",
  version: "1.0.1",
  credits: "Mirai Team",
  permission: 0,
  description: "Check how long the bot has been online",
  category: "system",
  usages: "",
  prefix: true,
  premium: false,
  cooldown: 5,
};

module.exports.run = async function ({ api, event }) {
  const uptime = process.uptime();
  const hours = Math.floor(uptime / 3600);
  const minutes = Math.floor((uptime % 3600) / 60);
  const seconds = Math.floor(uptime % 60);
  const start = Date.now();

  try {
    const usage = await pidusage(process.pid);

    const message = `🤖 Bot Uptime Info:
⏱️ Uptime: ${hours}h ${minutes}m ${seconds}s
👥 Total Users: ${global.data.allUserID.length}
👨‍👩‍👧‍👦 Total Groups: ${global.data.allThreadID.length}
🧠 CPU Usage: ${usage.cpu.toFixed(1)}%
💾 RAM Usage: ${byte2mb(usage.memory)}
📶 Ping: ${Date.now() - start}ms`;

    return api.sendMessage(message, event.threadID, event.messageID);
  } catch (error) {
    console.error("❌ Error fetching process usage:", error);
    return api.sendMessage("❌ Failed to retrieve uptime information.", event.threadID, event.messageID);
  }
};
