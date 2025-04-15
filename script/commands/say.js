const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
  name: "say",
  version: "1.0.0",
  credits: "Max",
  permission: 2,
  description: "Text-to-speech in multiple languages. Use prefixes: en, ko, ja, tl, fr, es, hi",
  category: "ai",
  usages: "say <language code> <text>",
  prefix: true,
  premium: true,
  cooldown: 5
};

module.exports.run = async function({ api, event, args }) {
  try {
    const { createReadStream, unlinkSync } = fs;
    const { resolve } = path;

    let content = event.type === "message_reply" ? event.messageReply.body : args.join(" ");

    const languagePrefixes = {
      en: ["en", "english"],
      ru: ["ru", "russian"],
      ko: ["ko", "korean"],
      ja: ["ja", "japanese"],
      tl: ["tl", "tagalog"],
      fr: ["fr", "french"],
      es: ["es", "spanish"],
      hi: ["hi", "hindi"]
    };

    let languageToSay = null;
    for (const code in languagePrefixes) {
      if (languagePrefixes[code].some(prefix => content.startsWith(prefix))) {
        languageToSay = code;
        break;
      }
    }

    if (!languageToSay) {
      languageToSay = global.config.language || "en";
    }

    const msg = content.slice(languagePrefixes[languageToSay].find(prefix => content.startsWith(prefix)).length).trim();

    const filePath = resolve(__dirname, "cache", `${event.threadID}_${event.senderID}.mp3`);
    const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(msg)}&tl=${languageToSay}&client=tw-ob`;

    await global.utils.downloadFile(ttsUrl, filePath);

    return api.sendMessage({
      attachment: createReadStream(filePath)
    }, event.threadID, () => unlinkSync(filePath), event.messageID);

  } catch (error) {
    console.error("[say command error]", error);
  }
};
