const axios = require('axios');
const fs = require('fs-extra');

module.exports.config = {
  name: "poli",
  version: "1.0.0",
  credits: "Max",
  permission: 0,
  description: "Generate an image from text using Pollinations AI",
  category: "ai",
  usages: "poli [text]",
  prefix: true,
  premium: true,
  cooldown: 2
};

module.exports.run = async ({ api, event, args }) => {
  const { threadID, messageID } = event;
  const query = args.join(" ");
  
  if (!query) {
    return api.sendMessage("❗ Please provide a query to generate an image.", threadID, messageID);
  }

  const path = __dirname + `/cache/poli.png`;

  try {
    const response = await axios.get(`https://image.pollinations.ai/prompt/${encodeURIComponent(query)}`, {
      responseType: "arraybuffer"
    });

    fs.writeFileSync(path, Buffer.from(response.data, "utf-8"));

    api.sendMessage({
      body: "🖼️ Here's your generated image!",
      attachment: fs.createReadStream(path)
    }, threadID, () => fs.unlinkSync(path), messageID);

  } catch (error) {
    console.error(error);
    api.sendMessage("❗ Failed to generate the image. Please try again later.", threadID, messageID);
  }
};
