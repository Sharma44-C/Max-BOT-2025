const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
  name: "remini",
  version: "1.0",
  aliases: ["enhance"],
  credits: "Arn",
  description: "Enhance an image using the Remini API.",
  category: "tools",
  usages: "remini (reply to an image)",
  prefix: true,
  premium: false,
  permission: 0,
  cooldown: 5,
};

module.exports.run = async ({ api, event }) => {
  const { threadID, messageID, messageReply } = event;
  const send = (msg) => api.sendMessage(msg, threadID, messageID);

  if (!messageReply?.attachments?.[0]?.url) {
    return send("❌ Please reply to an image to enhance it.");
  }

  const imageUrl = messageReply.attachments[0].url;
  send("⌛ Enhancing image, please wait...");

  const apiUrl = `https://kaiz-apis.gleeze.com/api/upscalev3?url=${encodeURIComponent(imageUrl)}&stream=true`;
  const tmpDir = path.join(__dirname, "cache");
  const tmpFile = path.join(tmpDir, `remini_${Date.now()}.jpg`);

  try {
    await fs.ensureDir(tmpDir);

    const response = await axios.get(apiUrl, { responseType: "stream" });
    const writer = fs.createWriteStream(tmpFile);
    response.data.pipe(writer);

    writer.on("finish", async () => {
      await api.sendMessage(
        { attachment: fs.createReadStream(tmpFile) },
        threadID,
        () => fs.unlinkSync(tmpFile),
        messageID
      );
    });

    writer.on("error", (err) => {
      console.error("File write error:", err);
      send("❌ Failed to save the enhanced image.");
    });
  } catch (err) {
    console.error("Enhance error:", err);
    send("❌ An error occurred while enhancing the image. Please try again later.");
  }
};
