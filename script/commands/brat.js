const { createCanvas, registerFont } = require('canvas');
const fs = require('fs-extra');
const Jimp = require('jimp');
const path = require('path');

// Optional: Register a font similar to bratgenerator
registerFont(path.join(__dirname, 'fonts', 'ArialNarrowBold.ttf'), { family: 'Arial Narrow' });

module.exports.config = {
  name: "brat",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Max (modified by ChatGPT)",
  description: "Generate text image with styling like bratgenerator.com",
  premium: false,
  prefix: true,
  category: "converter",
  usages: "brat [text]",
  cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID, senderID } = event;
  const text = args.join(" ");

  if (!text) {
    return api.sendMessage("❗ Please enter text to generate image.", threadID, messageID);
  }

  const width = 1200;
  const height = 800;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Set background white
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);

  // Font settings
  const maxFontSize = 140;
  const minFontSize = 40;
  const lineHeightMultiplier = 1.4;
  const maxLineWidth = width * 0.8;

  let fontSize = maxFontSize;
  ctx.font = `bold ${fontSize}px "Arial Narrow"`;

  // Function to wrap text
  const wrapText = (ctx, text, maxWidth) => {
    const words = text.split(' ');
    let lines = [], currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = ctx.measureText(currentLine + ' ' + word).width;
      if (width < maxWidth) {
        currentLine += ' ' + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  };

  // Adjust font size to fit text
  let lines;
  while (fontSize >= minFontSize) {
    ctx.font = `bold ${fontSize}px "Arial Narrow"`;
    lines = wrapText(ctx, text, maxLineWidth);
    const totalHeight = lines.length * fontSize * lineHeightMultiplier;
    if (totalHeight < height * 0.9) break;
    fontSize -= 5;
  }

  // Draw text
  const startY = (height - lines.length * fontSize * lineHeightMultiplier) / 2 + fontSize / 2;
  ctx.fillStyle = '#000000';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  lines.forEach((line, i) => {
    ctx.fillText(line, width / 2, startY + i * fontSize * lineHeightMultiplier);
  });

  // Save and blur the image
  const outPath = path.join(__dirname, `cache/brat_${senderID}.png`);
  const buffer = canvas.toBuffer();
  fs.writeFileSync(outPath, buffer);

  const image = await Jimp.read(outPath);
  image.blur(2);
  await image.writeAsync(outPath);

  return api.sendMessage({
    attachment: fs.createReadStream(outPath)
  }, threadID, () => fs.unlinkSync(outPath), messageID);
};
