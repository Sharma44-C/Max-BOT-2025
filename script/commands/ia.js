const Tesseract = require('tesseract.js');

// Image-to-text conversion function using Tesseract OCR
async function convertImageToText(imageURL) {
  try {
    const { data: { text } } = await Tesseract.recognize(imageURL, 'eng', {
      logger: info => console.log(info)
    });
    return text;
  } catch (error) {
    console.error(error);
    throw new Error('Error converting image to text');
  }
}

module.exports.config = {
  name: "ia",
  version: "2.1.3",
  credits: "Max",
  permission: 0,
  description: "Convert image to text using OCR",
  category: "ai",
  usages: "Reply to an image with 'ia' or 'IA'",
  prefix: true,
  premium: true,
  cooldown: 3
};

module.exports.handleEvent = async function({ api, event }) {
  const { threadID, messageID, type, messageReply, body } = event;

  if (!body || !(body.toLowerCase().startsWith("ia"))) return;

  if (type === "message_reply" && messageReply?.attachments?.[0]?.type === "photo") {
    const imageURL = messageReply.attachments[0].url;

    try {
      const textResult = await convertImageToText(imageURL);

      if (!textResult.trim()) {
        return api.sendMessage("❗ Unable to convert the photo to text. Please ensure the image is clear.", threadID, messageID);
      }

      return api.sendMessage(textResult, threadID, messageID);
    } catch (error) {
      return api.sendMessage("❗ Error converting the image to text.", threadID, messageID);
    }
  } else {
    return api.sendMessage("❗ Please reply to a photo to convert it to text.", threadID, messageID);
  }
};
