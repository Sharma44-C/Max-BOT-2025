const path = require("path"); 
const fs = require('fs');

// Ensure directory exists
const cacheDir = path.join(__dirname, "cache", "txt");
if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, { recursive: true });
}

const pathFile = path.join(__dirname, "/cache/txt/autointeract.txt");

// Initialize file if missing
if (!fs.existsSync(pathFile)) {
    fs.writeFileSync(pathFile, "false");
}
module.exports.config = {
    name: "autointeract",
    version: "2.0.2",
    permissions: 0,
    credits: "Max Spencer",
    description: "auto interact",
    premium: false,
    prefix: false,
    category: "system",
    usages: ["interact"],
    cooldowns: 5
  };
  

  module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID, body } = event;
  
    // Last chat
    let lastChat = [
      "lc",
      "last chat",
      "ako na lc",
      "ako na last chat",
      "lc ako",
      "last chat ako",
      "lc em",
    ];
  
    // Hakdog
    let ha = ["ha", "ha?", "haa", "ha??", "haa?"];
  
    // Bakit
    let bakit = ["bakit", "ansabe?", "ano raw", "anuraw?", "nuraw?", "nani?", "what?", "ano?", "anyare?", "anong nangyare?", "bakit?", "bakit kaya", "why?"];
  
    // Bye
    let bye = ["maya na lang", "brb", "bounce na me", "bye", "byee", "byeee", "babye", "babay", "babyee", "babyeee", "alis na ko", "later", "alis muna ko", "charge lng ako", "charge lng muna ako", "charge muna ako", "may pupuntahan pa ko", "charge lng"];
  
    // Hahahaha
    let haha = ["haha", "hahaha?", "hahahaha", "hahahahaha", "hahahahahaha", "HAHA", "HAHAHA", "HAHAHAHA", "HAHAHAHAHA", "HAHAHAHAHAHA", "HAHAHAHAHAHAHA", "HSHSHSHSHS", "hshshshshs"];
  
    // Bot
    let bot = ["bot", "bot ka?", "bot ka ba?", "BOT", "bot bayan", "bot ka ba", "bot ka ba talaga", "kapangit nang sinsabi ng bot", "bot niya", "chat bot", "bot niyo", "pinagsasabi nitong bot", "ambagal ng bot", "inanetong bot na to", "tanginang bot yan", "pangit ng bot", "bilis ng bot", "bot?", "bot??"];
  
    // Ey
    let ey = ["eyy", "eyyy", "eyyy", "eyyable", "🤙", "🤙🤙", "🤙🤙🤙"];
  
    // max
    let max = ["max", "maxx", "hoy max", "hoyy max", "maxxx", "hi max", "hi maxx", "hello max", "hello maxx", "max"];
  
    // Gusto
    let gusto = ["gusto nya rin ako", "gusto", "gusto nya ba ko?", "crush nya rin ako", "crush nya ko", "crush ako", "crush niya ko", "crush niya rin ako"];
    // mahal
    let mahal = ["mahal nya rin ako", "mahal niya?", "mahal nya ba ko?", "mahal niya ba ko?", "mahal nya rin ako", "mahal nya ko", "mahal ako", "mahal", "mahall niya ko", "mahal niya rin ako"];
  
    
  
    if (body && typeof body === "string" && body.trim() !== "") {
      body = body.toLowerCase();
  
      if (lastChat.includes(body)) {
        let lcVar = [
          "ako na, don't say that. you're more than just a last chat. everytime na maiisip mo na last chat ka no! you're a wonderful person and i appreciate you so much. hindi biro maging last chat. It must've been tough pero u did it. you're so strong kaya sobrang proud kami sayo.i know what you feel, yung feeling na maging last chat pero always remember you're a strong person. nakayanan mo ang lahat ng ito, if feeling mo magiging last chat ka nagchachat ka pa rin, we're so proud of you kaya you deserve a respect. you're an independent person. we love you so much.",
          "salo kona last chat, ako naman palagi eh, palibhasa iniwan, pinaasa, di pinaglaban, di crinushback, at pampalipas oras lang naman ako, wala din namang nag mamahal sakin, sino ba naman ako",
          "𝐒𝐀𝐆𝐈𝐏 𝐊𝐎𝐍𝐀 𝐋𝐀𝐒𝐓 𝐂𝐇𝐀𝐓\n\nTo be the last chat is such an honor and responsibility. If I were to be the last chat, I will use my chat to influence the youth, I will raise awareness to certain causes like Last chat awareness, I wanna show the world, my internet friends rather that I'm confidently cute to be the last chat",
        ];
        let lcRes = lcVar[Math.floor(Math.random() * lcVar.length)];
        setTimeout(() => {
          api.sendMessage(lcRes, threadID, messageID);
          api.setMessageReaction("😆", event.messageID, (err) => {}, true);
        }, 10000); // 10000 milliseconds (10 seconds)
      } else if (ha.includes(body)) {
        let haVar = [
          "hatdog HAHAHAHA",
          "halika dito hilutin kita, alam kong bali bali na yang buto mo kakahulog sa maling tao",
          "hatdog",
          "hakdog",
          "H A T D O G",
          "ha labyo yieee",
          "halaman",
          "hamburger HAHAHAHAHA",
          "hangin",
          "hanggang friend nalang ba talaga",
          "hanjibaluktot yalubog yalutang",
          "handa kong ibigay lahat ng yaman sa mundo, handa akong makipaglaban para lng sa iyong gusto, handa ako na sumugal, handang mamatay para sa iyo kung kailangan, ako ang super hero mo, handa kang ipaglaban",
        ];
        let haRes = haVar[Math.floor(Math.random() * haVar.length)];
        setTimeout(() => {
          api.sendMessage(haRes, threadID, messageID);
          api.setMessageReaction("😆", event.messageID, (err) => {}, true);
        }, 5000); // 5000 milliseconds (5 seconds)
      } else if (bakit.includes(body)) {
        let bakitVar = [
          "tanong mo sa pagong", "punta ka na lng sa settings tapos hanapin mo yung pake ko", "tanong mo sa pagong, baka alam nya, pag hindi sumagot punta ka na lng sa settings tapos hanapin mo yung pake ko"
        ];
        let bakitRes = bakitVar[Math.floor(Math.random() * bakitVar.length)];
        setTimeout(() => {
          api.sendMessage(bakitRes, threadID, messageID);
          api.setMessageReaction("😆", event.messageID, (err) => {}, true);
        }, 5000); // 5000 milliseconds (5 seconds)
      } else if (bye.includes(body)) {
        let byeVar = [
          "take your time, balik ka na lng kapag wala na kayong matopic sa kabila", "take your time💗", "ingatt baka habulin ng aso", "balik ka na lng kapag wala na kayong matopic sa kabila", "balik ka na lang kapag miss mo na ko", "balik ka na lng kapag iniwan ka na", "balik ka na lng kapag wala na kayo", "balik ka na lang kapag hindi na siya yung icing sa ibabaw ng cupcake mo", "balik ka na lang kapag hindi na siya yung knight and shining armor mo", "balik ka na lng kapag hindi na siya yung star ng pasko mo", "balik ka na lang kapag naghost ka na", "balik ka na lng kapag wala ng kayo", "balik ka na lang kapag no choice ka na", "balik ka na lng kapag bored ka na"
        ];
        let byeRes = byeVar[Math.floor(Math.random() * byeVar.length)];
        setTimeout(() => {
          api.sendMessage(byeRes, threadID, messageID);
          api.setMessageReaction("😆", event.messageID, (err) => {}, true);
        }, 5000); // 5000 milliseconds (5 seconds)
      } else if (haha.includes(body)) {
        let hahaVar = [
          "masiyado ka ng masaya, happy pill mo ko noh", "wag ka na", "tawang tawa ah baka mabaliw ka niyan", "tawa ka ng tawa, takas ka sa mental noh"
        ];
        let hahaRes = hahaVar[Math.floor(Math.random() * hahaVar.length)];
        setTimeout(() => {
          api.sendMessage(hahaRes, threadID, messageID);
          api.setMessageReaction("😆", event.messageID, (err) => {}, true);
        }, 5000); // 5000 milliseconds (5 seconds)
      } else if (bot.includes(body)) {
        let botVar = [
          "bot ka nang bot, botasin ko tagiliran mo eh", "bot ka nang bot, umpog ko ulo mo eh", "bot ka nang bot, gusto mo itupi kita sa walo", "bot ka nang bot, hindi nga ako si bot"
        ];
        let botRes = botVar[Math.floor(Math.random() * botVar.length)];
        setTimeout(() => {
          api.sendMessage(botRes, threadID, messageID);
          api.setMessageReaction("😆", event.messageID, (err) => {}, true);
        }, 5000); // 5000 milliseconds (5 seconds)
      } else if (ey.includes(body)) {
        let eyVar = [
          "eyyyablee🤙🤙", "eyyyyy🤙🤙🤙🤙", "eyyy ka muna eyyy🤙🤙"
        ];
        let eyRes = eyVar[Math.floor(Math.random() * eyVar.length)];
        setTimeout(() => {
          api.sendMessage(eyRes, threadID, messageID);
          api.setMessageReaction("😆", event.messageID, (err) => {}, true);
        }, 5000); // 5000 milliseconds (5 seconds)
        
      } else if (ey.includes(body)) {
        let maxVar = [
          "ano kailangan mo? jowa ba? wala ako mabibigay sayo", "ano ba gusto mo?", "lalapit ka lng naman sakin kapag may kailangan ka", "ano? bakit?", "bakit? may kailangan ka? ano ka naka free", "wait tumatae pa ko", "wait lng kumakain pa ko", "wait busy pa ko", "wag ka na", "ano ano ano", "wait ka chat ko pa si aiah wag ka magulo", "wait ka chat ko pa si mikha wag ka magulo", "wait ka chat ko pa si maloi wag ka magulo", "wait ka chat ko pa si colet wag ka magulo", "wait ka chat ko pa si jhoanna wag ka magulo", "wait ka chat ko pa si stacey wag ka magulo", "wait ka chat ko pa si gwen wag ka magulo", "wait ka chat ko pa si sheena wag ka magulo"
        ];
        let maxRes = maxVar[Math.floor(Math.random() * maxVar.length)];
        setTimeout(() => {
          api.sendMessage(maxRes, threadID, messageID);
          api.setMessageReaction("😆", event.messageID, (err) => {}, true);
        }, 5000); // 5000 milliseconds (5 seconds)
  
      } else if (gusto.includes(body)) {
        let gustoVar = [
          "kaya ka lng naman gusto kase bored siya","kaya ka lng naman gusto kase wala na silang matopic sa kabila","kaya ka lng naman gusto kase pampalipas oras ka lng niya","kaya ka lng naman gusto kase tinatanong mo","kaya ka lng naman gusto kase no choice na siya","kaya ka lng naman gusto ko kase pampalipas oras ka lng"
        ];
        let mahalRes = mahalVar[Math.floor(Math.random() * gustoVar.length)];
        setTimeout(() => {
          api.sendMessage(mahalRes, threadID, messageID);
          api.setMessageReaction("😆", event.messageID, (err) => {}, true);
        }, 5000); // 5000 milliseconds (5 seconds)
      }
      else if (mahal.includes(body)) {
        let mahalVar = [
          "kaya ka lng naman mahal kase bored siya","kaya ka lng naman mahal kase wala na silang matopic sa kabila","kaya ka lng naman mahal kase pampalipas oras ka lng niya","kaya ka lng naman mahal kase tinatanong mo","kaya ka lng naman mahal kase no choice na siya","kaya ka lng naman mahal kase pinilit mo","kaya ka lng naman mahal kase naaawa lng siya sayo","hindi ka non mahal","hindi ka sure","delulu","mahal ka ba?","kaya ka lng naman mahal ko kase pampalipas oras ka lng"
        ];
        let mahalRes = mahalVar[Math.floor(Math.random() * mahalVar.length)];
        setTimeout(() => {
          api.sendMessage(mahalRes, threadID, messageID);
          api.setMessageReaction("😆", event.messageID, (err) => {}, true);
        }, 5000); // 5000 milliseconds (5 seconds)
      }
    }
    
  };

  module.exports.run = async ({ api, event, args }) => {
    try {
        if (args[0] === "on") {
            fs.writeFileSync(pathFile, "true");
            api.sendMessage("✅ Auto-interact enabled!", event.threadID);
        } else if (args[0] === "off") {
            fs.writeFileSync(pathFile, "false");
            api.sendMessage("❌ Auto-interact disabled!", event.threadID);
        } else {
            api.sendMessage("Usage: autointeract [on/off]", event.threadID);
        }
    } catch (e) {
        console.error("Toggle Error:", e);
        api.sendMessage("❌ Failed to toggle. Check permissions or logs.", event.threadID);
    }
};