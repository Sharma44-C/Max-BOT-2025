module.exports.config = {
    name: "out",
    version: "1.0.0",
    credits: "Max",
    permission: 2,
    description: "Leaves the group, or from a specific group ID if provided",
    category: "admin",
    usages: "out [groupID]",
    prefix: true,
    premium: false,
    cooldown: 10
  };
  
  module.exports.run = async function({ api, event, args }) {
    try {
      const targetID = args[0] ? args[0] : event.threadID;
      if (!isNaN(targetID)) {
        return api.removeUserFromGroup(api.getCurrentUserID(), targetID);
      } else {
        return api.sendMessage("❗ Invalid group ID format.", event.threadID, event.messageID);
      }
    } catch (err) {
      console.error(err);
      return api.sendMessage("❗ Error trying to leave the group.", event.threadID, event.messageID);
    }
  };
  