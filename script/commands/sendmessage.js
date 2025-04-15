const axios = require('axios');

module.exports.config = {
  name: "sendmsg",
  version: "1.0.2",
  credits: "Max Spencer",
  permission: 2,
  description: "List groups and send a message to a chosen group.",
  category: "admin",
  usages: "[list | send <groupID> <message>]",
  prefix: true,
  premium: false,
  cooldown: 5
};

module.exports.run = async ({ api, event, args }) => {
  const action = args[0];
  const threadID = event.threadID;

  // List groups
  const listGroups = async () => {
    try {
      const threadList = await api.getThreadList(100, null, ['INBOX']);
      const groupThreads = threadList.filter(thread => thread.isGroup);
      if (!groupThreads.length) return api.sendMessage("❗ No group threads found.", threadID);

      let message = "📋 List of Groups:\n\n";
      groupThreads.forEach((group, index) => {
        message += `${index + 1}. ${group.name} (ID: ${group.threadID})\n`;
      });
      message += "\n📝 Reply with the group number to choose.";

      api.sendMessage(message, threadID, (err, info) => {
        global.client.handleReply.push({
          type: "chooseGroup",
          name: module.exports.config.name,
          messageID: info.messageID,
          author: event.senderID,
          groupThreads
        });
      });
    } catch (err) {
      console.error(err);
      api.sendMessage("❗ Failed to list groups.", threadID);
    }
  };

  // Send directly to a given groupID
  const sendMessageToGroup = async () => {
    const groupID = args[1];
    const customMessage = args.slice(2).join(" ");
    if (!groupID || !customMessage) {
      return api.sendMessage("❗ Please provide a group ID and the message text.\n\nExample: message2 send 123456789012345 Hello!", threadID);
    }
    try {
      await api.sendMessage(customMessage, groupID);
      api.sendMessage(`✅ Message sent to group ID ${groupID}.`, threadID);
    } catch (err) {
      console.error(err);
      api.sendMessage("❗ Failed to send the message. Please check the group ID.", threadID);
    }
  };

  if (action === "list") {
    await listGroups();
  } else if (action === "send") {
    await sendMessageToGroup();
  } else {
    api.sendMessage("❗ Invalid action.\n\nUse:\n• message2 list\n• message2 send <groupID> <message>", threadID);
  }
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
  const { type, author, groupThreads } = handleReply;
  if (event.senderID !== author) return;

  if (type === "chooseGroup") {
    const chosenIndex = parseInt(event.body) - 1;
    if (isNaN(chosenIndex) || chosenIndex < 0 || chosenIndex >= groupThreads.length) {
      return api.sendMessage("❗ Invalid choice. Please enter a valid group number.", event.threadID);
    }

    const chosenGroup = groupThreads[chosenIndex];
    api.sendMessage(`📝 You selected: ${chosenGroup.name}\nNow reply with the message to send.`, event.threadID, (err, info) => {
      global.client.handleReply.push({
        type: "sendToGroup",
        name: module.exports.config.name,
        messageID: info.messageID,
        author: event.senderID,
        threadID: chosenGroup.threadID,
        groupName: chosenGroup.name
      });
    });
  }

  if (type === "sendToGroup") {
    const messageText = event.body;
    try {
      await api.sendMessage(messageText, handleReply.threadID);
      api.sendMessage(`✅ Message sent to '${handleReply.groupName}'.`, event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("❗ Failed to send the message.", event.threadID);
    }
  }
};
