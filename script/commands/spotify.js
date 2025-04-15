const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports.config = {
  name: "spotify",
  version: "1.0",
  credits: "Kaiz",
  permission: 0,
  description: "Search and download Spotify track.",
  category: "music",
  usages: "spotify [song name]",
  prefix: true,
  premium: false,
  cooldown: 5,
};

module.exports.run = async ({ api, event, args }) => {
  if (!args[0]) {
    return api.sendMessage("❌ Please provide a song name.\nUsage: spotify [song name]", event.threadID, event.messageID);
  }

  const keyword = encodeURIComponent(args.join(" "));
  const searchURL = `https://kaiz-apis.gleeze.com/api/spotify-search?q=${keyword}`;

  try {
    const searchRes = await axios.get(searchURL);
    const track = searchRes.data[0]; // First result

    if (!track || !track.trackUrl) {
      return api.sendMessage("❌ No track found.", event.threadID, event.messageID);
    }

    const downloadURL = `https://kaiz-apis.gleeze.com/api/spotify-down?url=${encodeURIComponent(track.trackUrl)}`;
    const dlRes = await axios.get(downloadURL);
    const { title, url, artist, thumbnail } = dlRes.data;

    const cacheDir = path.join(__dirname, "cache");
    if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir);

    const imgPath = path.join(cacheDir, `thumb_${event.senderID}.jpg`);
    const audioPath = path.join(cacheDir, `audio_${event.senderID}.mp3`);

    const imgRes = await axios.get(thumbnail, { responseType: "arraybuffer" });
    fs.writeFileSync(imgPath, imgRes.data);

    const audioRes = await axios.get(url, { responseType: "arraybuffer" });
    fs.writeFileSync(audioPath, audioRes.data);

    api.sendMessage({
      body: `🎵 Title: ${title}\n👤 Artist: ${artist}`,
      attachment: fs.createReadStream(imgPath),
    }, event.threadID, () => {
      api.sendMessage({
        body: "🎧 Here’s your Spotify track!",
        attachment: fs.createReadStream(audioPath),
      }, event.threadID, () => {
        fs.unlinkSync(imgPath);
        fs.unlinkSync(audioPath);
      });
    });

  } catch (err) {
    console.error("Spotify Error:", err);
    api.sendMessage("❌ An error occurred while processing your request.", event.threadID, event.messageID);
  }
};
