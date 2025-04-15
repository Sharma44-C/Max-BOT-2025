const fs = require('fs-extra');
const pathFile = __dirname + '/cache/txt/autoseen.txt';

module.exports.config = {
    name: "autoseen",
    version: "1.0.0",
    credits: "Yan Maglinte",
    permission: 2,
    description: "Turn on/off automatic seen when new messages are received",
    category: "admin",
    usages: "on/off",
    prefix: false,
    premium: false,
    cooldown: 5,
  };
  

  module.exports.handleEvent = async ({ api, event, args }) => {
    if (!fs.existsSync(pathFile))
       fs.writeFileSync(pathFile, 'false');
       const isEnable = fs.readFileSync(pathFile, 'utf-8');
       if (isEnable == 'true')
         api.markAsReadAll(() => {});
    };
    
    module.exports. run = async ({ api, event, args }) => {
       try {
         if (args[0] == 'on') {
           fs.writeFileSync(pathFile, 'true');
           api.sendMessage('auto-seen has been enabled.', event.threadID, event.messageID);
         } else if (args[0] == 'off') {
           fs.writeFileSync(pathFile, 'false');
           api.sendMessage('auto-seen has been disabled.', event.threadID, event.messageID);
         } else {
           api.sendMessage('Incorrect syntax', event.threadID, event.messageID);
         }
       }
       catch(e) {
         console.log(e);
       }
    };