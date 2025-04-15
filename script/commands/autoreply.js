const fs = require("fs");
const path = require("path");
const pathFile = path.join(__dirname, "/cache/txt/autoreply.txt");


module.exports.config = {
    name: "autoreply",
    version: "1.0.0",
    credits: "Max",
    permission: 0,
    description: "Greetings",
    category: "system",
    usages: "[text]",
    prefix: false,
    premium: false,
    cooldown: 10,
  };

  const keywords = [
    "hello",
    "hi",
    "hello po",
    "hi po",
    "hai po",
    "hai",
    "haii",
    "👍🏻",
    ".",
    "🌸",
    "hi max",
    "hii max",
    "hiii",
    "helloo",
    "loe",
    "low",
    "lo",
    "hey",
    "heyy",
    "loe po",
    "low po",
    "hai",
    "yo",
    "hi phoe",
    "morning",
    "Morning",
    "goodmorning",
    "good morning",
    "Goodmorning",
    "good noon",
    "good aftie",
    "good afternoon",
    "good eve",
    "goodeve",
    "goodevening",
    "good evening",
    "Hi",
    "h-hi?",
    "hi.",
    "hi",
    "hii",
    "hiii",
    "hiiii",
    "hi.",
    "hi kumusta?",
    "hii kumusta?",
    "hiii kumusta?",
    "hai",
    "hey",
    "heyy",
    "Hey",
    "Heyy",
    "hi po.",
    "hi po",
    "hii po",
    "hiii po",
    "hipu",
    "hi morning",
    "hii morning",
    "hiii morning",
    "hii morningg",
    "hiii morninggg",
    "hi phoe",
    "hipo",
    "gm",
    "Gm'",
    "G'morning",
    "Gmorning",
    "Goodmorning",
    "Goodmorningg",
    "Goodmorninggg",
    "Morning",
    "Morningg",
    "Morninggg",
    "g'morning",
    "gmorning",
    "morning",
    "morningg",
    "morninggg",
    "goodmorning",
    "goodmorningg",
    "goodmorninggg",
    "Hello",
    "Helloo",
    "Hellooo",
    "Hello po",
    "Helloo po",
    "Hellooo po",
    "hello",
    "helloo",
    "hellooo",
    "hello kumusta?",
    "helloo kumusta?",
    "hellooo kumusta?",
    "hello morning",
    "helloo morning",
    "hellooo morning",
    "hello morningg",
    "hello morninggg",
    "hello po",
    "helloo po",
    "hellooo po",
    "lo",
    "low",
    "loww",
    "loe",
    "loe po",
    "Loe",
    "Low",
    "Loww",
    "bf",
    "breakfast",
    "breakfast na",
    "good noon",
    "goodnoon",
    "goodaftie",
    "aft",
    "aftie",
    "afternoon",
    "goodafternoon",
    "good afternoon",
    "goodeve",
    "goodevee",
    "goodeveee",
    "good eve",
    "good evee",
    "good eveee",
    "eve",
    "evening",
    "eveningg",
    "eveningg",
    "goodevening",
    "good evening",
    "good eveningg",
    "good eveninggg",
    "dinner po",
    "dinner?",
    "fh",
    "done",
    "lunch",
    "lunch po",
    "lunch?",
    "halor",
    "halorr",
    "haler",
    "halerr",
    "halo",
    "gtk",
    "musta",
    "yo.",
    "yo",
    "yoo",
    "yow",
    "yoww",
    "zup",
    "zup.",
    "supp",
    "wazzup",
    "kumusta",
    "musta kayo?",
    "kumusta?",
    "syug",
    "guys",
    "bf syug",
    "kain?",
    "kain",
    "kain po",
    "eat",
    "eat po",
    "eat?",
    "snacks",
    "meryenda",
    "musta kayo?"
  ];
  
  
  
  
  
  module.exports.handleEvent = async ({ event, api, Users }) => {
    const thread = global.data.threadData.get(event.threadID) || {};
  
    // Check if event.body is defined
    if (event.body) {
      const lowercaseBody = event.body.toLowerCase();
  
      if (keywords.includes(lowercaseBody)) {
        // Your code here when a   // Respond to the keyword
  
      const juswa = [
        "kumain ka na?", "pano po i-cut off tong isang tao na to napaka sama po kasi ng ugali tsaka ang toxic‚ wala po kasing unfriend na nakalagay add to story lang tsaka edit profile", "pag ako talaga, hays... pag ako...", "anong natutunan mo nitong bakasyon? open roblox ma'am pakitaan ko kayo", "No no pilit", "late na nga ako tas si kuya nag pa gas pa", "kung wala kang pera sa labas ka titira", "edi wag mong itaga ayaw nya pala eh","isabaw mo sa kanin ang ihi ng kambing","dati ang dami kong pangarap ngayon ako na ung pinapangarap","dati pangarap kong maging performer, pero ngayon performer na ko eyyy 🤙🏻\n-sheena","dati gusto kong maging gardener, pero ngayon gusto ko na lng maging halaman\n-mikha","dati pangarap kong maging flight attendant and piloto pero ngayon pangarap ko na lng maging eroplano\n-stacey","pangarap ko to grow old with 7 beautiful ladies, but it's not them\n-gwen","dati gusto ko lng makompleto kami, pero ngayon gusto ko na lng maging hatdog sa ref para chill lng\n-maloi","dati pangarap kong maging teacher maging doctor, kaya yung mga kaibigan kong may sugat ginagamot ko sila\n-colet","dati pangarap kong maging strong independent women, pero ngayon gusto ko na lng magpakababy dahil andaming bayarin\n-aiah","pangarap ko pong maging journalist, pero ngayon gusto ko na lng maing biniverse ticket para pinag-aagawan niyo ko\n-jhoanna","kumusta?", "si max nakita ko kumakain ng bubog muntik pa mabulunan","I'm updating my commands, gawa mo?", "yan ang hilig nyo kase sa kape, kaya KAPEnalitan eh","pwede mo lng ako murahin pag hinihingal ka","hello i'm under the water please help me bloblobloblob", "okay ka lng?", "kung ayaw mo sakin edi wag ka naman ganyan", "gwaenchana seyo?(are you okay?)", "be safe, always wag papagutom","hi tapos ano? magiging friends tayo? lagi tayong mag-uusap mula umaga hanggang madaling araw? tas magiging close tayo? sa sobrang close natin nahuhulog na tayo sa isa't isa, tapos ano? liligawan kita? sasagutin mo naman ako. tas paplanuhin natin yung pangarap natin sa isa't isa tapos ano? may makikita kang iba. magsasawa ka na, iiwan mo na ako. tapos magmamakaawa ako sayo kasi mahal kita pero ano? wala kang gagawin, hahayaan mo lang akong umiiyak while begging you to stay. kaya wag na lang. thanks nalang sa hi mo.","Toilet paper, pugo, balot, penoy, chicharon, ticket ng lotto, sweepstake,Bili na bili na","Cellphone, charger, backlight casing  ringtone, logo, e load, pasaload, Bili na bili na","Butong pakwan, icecream, pusit, icecandy, durian, peanut brittle, kasoy, green peas, mixnuts, candy, bubblegum, lollipop, Bili na Bili na","ang dami ng tao sa planeta lahat may kanya-kanyang mundo, iniisip mo pa kung anong tingin nila sayo gawin mo lang gusto mo, wag ka lang manipa ng pusa","If you ever find my jokes offensive and disrespectful, please let me know. My inbox is open. You can always enlighten me and let’s have a conversation. I'm just so afraid that not everyone can initially understand my humor. If you think I've crossed the line, you can directly approach me and let's talk about it in a healthy way.","diba when we're taking pictures of the moon and usually di siya maganda compared sa personal, we do not say what the fawk, ampangit ng moon tonight no. We put the blame on our phone from not being able to capture the full beauty of moon, diba? You see where it is going? the next time you take pictures of yourself, and you feel like hindi ka ganon ka-good looking on that photo, stop blaming yourself because it's not you who actually do not look good. it's just technology is not that advanced yet that it's not to able captured your whole entire beauty. and yeah remember you're beautiful/handsome/maganda/pogi ka.","gusto ko lng sabihin sayo na isa akong mafia boss and the only way to protect her is to break up with her. ayoko madamay siya sa mafia wars namin","Keep in mind: Childhood friend and love is temporary but sa halagang benteng dinurog ang tae is eternal","Partida nagpakatanga ka sa taong hindi ka naman kayang bigyan ng halaga","Ops tama na, wag mona ipilit ang sarili mo sa kanya","halloween costume idea:magpanggap na okay lng ang lahat","takot maganon pero ako yung ginanon","sa mga hindi okay jan, gagi okay lng yan","kunyari tahimik pero may tinatago pa lang isang daang porsyentong selos","short mo green, damit mo green, kung ako yan di kita gaganyanin","akala nila masaya ako pero deep inside nasan na yung national ID ko","kakausapin ka lang kapag wala na silang topic sa kabila","matured na raw siya pero natatawa tuwing may nakikitang kalbo","kaya siguro hindi ka makarelate sa talks a lot boring ka kase kausap","huuh? break na kayo ng jowa mo?bilis naman dumating ng goodnews","kapag hindi mo kayang higitan siraan mo","huwag ka sumubok para madagdagan ang mga regrets mo sa buhay","pano ka aangat kung di ka marunong manghila pababa","ano pang silbi nang pagrereview kung may short term memory loss ako","bakit mo nilabas yang pagmamahal mo sa maling tao?","grabe yung buhos ng ulan kagabi, biglaan na lng tayong di nag-usap","sabihin na nating matured ka, pero bakit mo iniyakan yung taong nakilala mo lng sa internet?","halika dito hilutin kita, baka kase bali bali na yang buto mo kahuhulog sa maling tao","siguro di na sasakit ulo ko kapag naranasan ko  na yung forehead kiss","si max pinaka corny samin, sshhhh ka lng","i am not king, i am not a god, i am hoping na sana ako na lng kasi bakit hindi na lng ako","wala man lng kiss?, sige sa bundok na ko titira walang signal dun, di mo na ko ma contact","hello, hindi naman sa nangengealam ako pero okay lng ba sa parents mo na ganyan pinopost mo?wag ka sana magalit, ang sagwa lng kasi tignan na parang puro kabastusan at kagaguhan mga pinopost mo e, umasta ka sanang mahinhin kahit sa fb manlang, di ka ba nahihiya? wala ka bang class?","i'm fine being single because i don't have to think about anyone aside from myself","i miss having someone to tell how's my day, someone who can make me feel loved, appreciated and make me feel that i'm enough","fliptop ka ng fliptop wala ka namang laptop, eto tissue punasan mo luha mo tarantado talaga yang bf mo kung ako yan di kita gaganyanin","ang toxic trait kopo ay di po ako namamansin pag wala sa mood tas pag ako na di pinansin nasasaktan ako haha","you did great and you tried your best to answer your exams, kaya kung ano makuha mong score okay lng yan gaslightin mo nalang sarili mo na okay lng lahat","si mama kase lagi ako pinapakain ng kalabasa nung bata pa ko, ang linaw tuloy ng paningin ko makakita ng mga bagay bagay na ikasasakit ko","grabe siya mang asar, papabuntis sa iba tas gagawin akong ninong","sorry wala ako regalo sayo, kiss na lang kita tapos balik mo pag ayaw mo","kumpleto sa higa, pero kulang sa tulog","yung joy pangalan mo tapos malungkot ka, okay lng yan, si princess nga tomboy eh","wala daw akong maibubuga, malamang hindi naman ako dragon","ang dami tumatakbo ngayon sa isipan ko, yung isa nadapa pa","i miss you sorry sa mga nagawa mo","anong tawag sa bading na kabayo? edi kabayot","edi kayo na may pera, utangin sana yan ng mama nyo","sige wag mo na akong tadtadrin ng kiss hayaan mo nalang ako mamatay","nilalamig ka ba? gusto mo ba cuddle tayo walang malisya concern lng ako sayo","Breaking New: Lalaking Muslim na December 25 isinilang, Merry Christmas ang pangalan","ang new year's resolution ko po ay hindi na ako maghahabol ule, pero kung ikaw why not","tinatawag ka nilang weak without knowing na naliligo ka ng malamig na tubig kahit na malamig ang weather","cry all you want mas masarap ang creampie kesa sa buko pie","sakit na naman ng likod ko, pano ba dapat posture pag umupo dapat ba nakakandong sayo","alam niyo ba na ang left handed ay mas mabilis magsulat kaysa sa mga walang kamay","alam niyo ba na ang mga dinasaur ay hindi kayang pumalakpak kase patay na sila","new year na pala crush, mag ingat ka sa paputok magiging cat parents pa tayo","life update:nakalimutan na lahat ng lesson","balang aaraw, kaibigan mo rin ang titira sayo patalikod","sumasakit ulo ko sa music taste ng kapitbahay namin","pinagpapawisan na ako kakasayaw dahil sa tiktok remix na pinapatugtog ng kapitbahay namin","ask ko lng kung makakasabay ba yung pilay sa takbo ng panahon","Introduction\nchapter 1 talking stage\nchapter 2 MU\nchapter 3 Label\nchapter 4 agoii ka na\nIs there someone else na ba sa chapter 5\nconlusion: Only love can hurt like this","masaya sa buhay nung nag chachat tapos uunsend msg tapos kapag tinanong mo kung ano yon sasabihin wala","ikaw ah, miss mo raw ako sabi sa baraha sa tiktok","kabait bait ko raw kapag may kailangan, syempre may kailangan ako alangan mag sungit ako","jowa ka lng, ex na ako, nagawa na namin lahat uulitin na lng sayo","the universe saw me aiming to be dean's lister, kaya binigyan niya ako ng isang subject na 2.25 ang grade","si max bilhin niyo na tapos ibenta niyo mga organs","hindi nako marunong makipagflirt, so i guess we just gonna argue na lng","hindi ako marunong makipagflirt pero i can insult you nicely","mama:nak wala daw kayong pasok. \nme na naka tatlong buhos na sa katawan","me to my gay friend na nagka-anak: \nAMA KA NA ACCLA!","nag cutting classes para magsima","minsan kausap ko lng sarili ko tas nag aaway pa kami","napanaginipan kita kagabi, nakaupo sa tabi ng ilog, nag iisa at mukhang mabigat ang loob, lalapitan sana kita at yayakapin , pero bigla kang tumayo at nag hugas ng pwet","lamig, kasalanan ng mga short hair to eh","aanhin mo ang label kung pwede naman special friends with special feelings","sabi ni freddie aguilar tawanan mo yung problema. \nme nung nakasagasa ng bata: 😆😆","kumakain ako ng sushi pati padlock","bat ako mag seselos kung pwede naman ako matulog ng maaga","ang sakit ng ulo ko, kailangan ko ng mwamwagesic","sometimes we're tested not to show our weaknesses but to discover our strengths","ang tulog nababawi pero ang singko hindi","money doesn't buy happiness is a form of gaslighting propagated by the upper class so that you are content with your miserable life and don't demand more","pakitaan kita ng magic, maliit na problema kaya kong palakihin","pumasok sa school, nag-exam, hinulaan, umuwi","pumasok sa school, natulog, nag-exam, naka perfect sa exam, nagising","don't be afraid to make a grammatical mistakes in english, not being able to speak english fluently doesn't make you less intelligent. as long as you know how to communicate well you are smart enough. Do not set yourself to the standard of others","anong mas prefer mo? ako kase mas gusto kong maging masaya, maging mentally stable, heal my inner child, pagod na pagod na ako maging malungkot, gusto ko naman maranasan ang maging masaya sa mundong to. so yeah mas gusto ko yung may pineapple","comparing is an insult, we are called individuals because we are totally different","i saw you in my dream, i thought it was real","hindi applicable sa lahat ng sitwasyon yung notion na if they wanted to they would, there are circumstances where people don't hva control over some things na kahit gusto nila, hindi nila magagawa because of certain factors, consider the situation paminsa minsan","i don't think i'll ever fall in love again, once is enough.","pangiti-ngiti lng tayo, dinadaan na lang natin sa mga memes at dogshow post, pero sa totoo lang, ang daming struggle ang gusto nating ikwento sa iba pero nahihiya tayo o natatakot na makadagdag pa tayo sa iniisip nil, tapik sa balikat, self. tara life","guys enlighten me pag masiyado na offensive mga jokes ko"," kung offensive man mga jokes ko wala akong pake sa nararamdaman nyo","bumubuhat ng tatlo, lumulunok ng bato, kumakain ng gulay, bakit mo naman ako pinalaya umay","toxic filipino behavior: magkalkal tungkol sa past rs ng partner nya at pag may nakita magsisilos at mag bebreakdown","ikagagalit ba ng nescafe kung ayaw ko bumangon","there is no best revenge, just heal and move on with your life, don't become like the people who traumatized you","kapag trinato ka talaga ng tama, marealize mong ikaw yung redflag","moved on sa umaga miss na kita sa gabi","ang corny ng pinag sshare mo pero irereact ko parin yan crush kita eh","oo, nagseselos ako sa react may problema ba tayo don","acting strong lang ako pero hinang hina na ako sa selos","selflove sa umaga tas i wish you were mine sa gabi","ano naman kung malamig, haha batak na kaya to sa cold reply","masarap pala ang atay lalo na pag atay ng pinagseselosan mo","me gaslightimg myself na di ako nagseselos dun sa nakita ko kahit oo naman","always gotta act cool para hindi halata na miserable buhay ko","diba ikaw yun, yung nagka-crush sa fictional character","paano na ako kapag shinip ka sa iba tapos pinagtabi pa kayo","girl boss daw pero umiiyak pag sinigawan","sulitin mo na mga orass na kausap mo siya dahil ipagpapalit ka na niyan sa kaklase nya next week","love pag nag introduces your self ka sabihin mo may seloso kang gf/bf","i can fix her/him no bro, tanghali na yan gumigising tapos antok parin pag ka gising","pinatulog mo lng pala ako para makapag usap na kayo","me fighting the urge na hindi ngumiti kapag nag notif yung pangalan mo sa messenger","pakilunok ang tae kapag hindi kayang buhusan salamat po","grabe nakakatamad na maglagay ng response dito sa bot na to pero pag ikaw na mag lalagay ng response dun mo marerealize na hanggang friends lng kayo","sinong kumain ng fudgee bar ko?","makita nyo na lahat wag lang yung side kong natutuwa sa laruanng pambata"," makita nyo na lahat wag lang kung paano ako mag beg","gulatin mo yung mga taong walang bilib sayo, mag exam ka ng hindi nag rereview","ipakita mo kung sino ka","bawal umasa dito","sige tatabihan kita sa isang kondisyon, maari ba kitang kumutan ng aking wagas na pagmamahal at bihisan ang iyong katawan ng malinis at tunay kong hangarin ng saganon, matakpan ang hubad na kaisipan ng di mabuwig sa balon ng kasalanan","ako pa talaga hinamon mo nang walang pansinan bakit kamusta ka na ba","gulatin mo mga kasabay mo sa bus mag gender reveal ka","be funny para makalimutan nilang masama ugali mo","unang banlaw pipiliin ka sa araw-araw","Disturbing Facts: your lips are made of the same skin type and texture as your anus","Disturbing Facts: remember, an empty search history reveals more than a full one","paano ako mananalo sayo eh loser ako","mahihila rin kita pababa, not now but soon","bakit hindi pantay bangs mo","first day of school kunware mabait pero totoo miss na kita","move on and acceptance is the key, wag kang manghinayang sa memories pwede ulit mangyare yan pero sa tamang tao na","huwag mong pangarapin ang taong may itsura or mayaman ang pangarapin mo yung taong magdadala sayo sa","kapag may nag oopen up sakin sobrang appreciated ko talaga, iba kase yung feelimg na alam mong may trust sayo yung tao, para ishare sayo yung mga dinadala niya, iba rin yung feeling na in a simple way, nakagaan sa pakiramdam nila yung presence mo","hindi ka naman dapat matakot kase maraming anjan sa paligid niya, kase kung ikaw talaga gusto niyan hinding hindi maaagaw yan sayo","never judge a situation that you've never been in","don't let the internet rush you, no one is posting their failures","yung naaksidente kayo pero gipit ka, manong yung sukli mo sa bente?","what scares me the most is the unstoppable marching of time that is slowly guiding us all towards an inevitable death","what if meron siyang iba","hindi panget humor ng mga kaklase mo, sadyang nasobrahan kalang sa pag ka adik mo sa internet kaya tingin mo sa lahat ng tao ay corny at cringe","minsan na nga lang masurprise sa surprise quiz pa umay","im sorry if i offended you, i was trying to flirt","tol patingin ako essay mo kukuha lng ako ide- ah bawal? may gamot? sige sige","god knew i'd be too powerful kung hindi lang ako mahiyain","kung may ipapakain lng ako sa pusa inuwi na kita","alam niyo gawin nating proper etiquette na after ng exam wag na pag usapan lahat ng tamang sagot","gusto ko na ilabas clingy side ko","happy teacher's day po ma'am/sir ah walang plus points yung pagbati ko? sige sige","miss mo na pala ako eh, bakit sa kabila mo sinasabe","please naninikip ang dibdib ko kapag siniseen mo lng mga messages ko","halik ang lunas sa sakit na nararamdaman ko","baby please talk to me hindi ko na keribels","alam mo kung bakit madilim tuwing gabi? kase walang gabi na hindi kita miss baby","Sarah patingin ng confidential fun- ah bawal? kumokontra sa kapayapaan?kalaban ng bayan? sige sige","kung sino man ang kumokontra sa pusa ay kumokontra sa kapayapaan, kung sino ang kumokontra sa kapayapaan ay kalaban ng bayan","if hindinmo ma-appreciate ang appearance ng ibang tao such as their lips,skin,tone,teeth, eyes,hairs,heights,weights,and the way they dress etc. the only thing that you could do is shut your mouth. as long as they appreciate, let them be, don't be a reason for someone discomfort","what if they laugh at me? what if i fail?what if? what??, we suffer more in imagination than in reality","hi,ganda mo ah,swerte siguro magiging bf mo haha,wala narin akong chance na sasagutin mo ako, kung gwapo lng sana ako, wala kase akong kwentang tao","please stop giving me the hardest battles(hingiin yung sukli sa jeep)","wag mo isisi sa itim na pusa kamalasan mo, baka tanga ka lang","mga bagay na mahirap gawin \n1.magkunwaring di ka miss","toxic filipino mindset: porket nagalit ka lumalabas na raw tunay na ugali mo","hindi lumabas sa quiz yung nireview ko","wala na nga akong pera tapos aayain pa nila ako gumala","isa pang singil hindi na ako papasok","ma'am sunod sunod na mga activities ah dapat may time management? sige sige","ma'am pwede po bang bukas ko na ipasa yung assignment ko, diko kase nagawa wala kase akong kwentang estudyante","review: 5 mins\n pahinga: ikaw","ang biggest achievement ko po this year ay wala kase puro biggest regret na lang","ang paborito kong physical activity ay ang mag jump into conclusions","gusto mo pala maging makulay ang pasko mo, ba't hindi ka kumain ng christmas light","kahit si jollibee malulungkot kapag nalaman niyang iba na nagpapasaya sayo","nagseselos ako, sabi ng walang karapatan","ang act of service ko po ay mag commute","try mo sakinmag vent, aagawin ko yang moment mo","kung kaya ng iba ipagawa mo sa kanila","ang sarap talaga makipagtalo kahit alam kong ako ang mali","just be yourself don't limit your angriness kapag galit ka idamay mo lahat ng tao sa paligid mo","sama ng pakiramdam ko, pero mas masama pakiramdam mo","kung papipiliin ako between character development or maging mentall stable, mas pipiliin ko parin ang magkaroon ng sampung milyon","grade consious na tamad","positive plus negative equals i miss u","tayo na siguro ang pinaka perfect couple kung magiging tayo lang","putol putol convo natin pero straight feelings ko sayo","mahal parin kita kahit yung dating goodmorning mo ay gm na lng ngayon, matapunan ka sana ng mainit na kape","ang saya talaga maging masamang tao","watch me clutch my pending schooworks mamayang gabi","no need to review dahil sapat na ang mga nalaman ko","sino ba kase naglock ng tagumpay at bakit edukasyon pa ang susi","tara mag group study(nangbackstab)","all this time hindi pala galing sa loob ng ulo ko ang mga boses na naririnig ko, kundi sa kaluluwa ng may ari nitong damit na suot ko galing ukay-ukay","pumunta ako kanina sa 7/11 may naka lagay na PULL di nako pumasok puno na raw kaya umuwi na ko","isa na nga lang talent ko ang mag assume pa","anong tagalog ng apologizing? edi pag susuri","sinong nag paiyak sa sugarpie honeybunch gbf ko"," yung biglaan dumating parcel mo na halagang 1,350 tas hindi mo pa nalilibing bangkay ng amo mo, sino relate jan","Top 10 Larong Pampamilya \n1.Agawan ng lupa","kung edukasyon ang susi sa pangarap sino nag lock","yung first time mo mang backstab tapos bumaon sino relate jan","why do filipinos have sa many babies? para marami pera pang retirement fund","sorry kung nakaka istorbo ako hindi na ulet kita ichachat","may anak nako naka pangalan sayo","i'm so fucking down rn at at gusto ko nalang mag suicide kaya please lunurin mo na lang ako sa mwa mwa mo","i don't think we appreciate when people address their issues with you enough, instead of goging straight into defensive mode think about their intention. wen someone's brave enough to communicate a boundary you've crossed it means they're invested in the long term health of the relationship. the easier alternative would've been stay silent and let resentment later","not satisfied with my performance sa studies lately, found out i'm loosing interest in everything, gusto ko nalang matulog, straight in a week, and it hurts na tinatamad na ako, like i wasn't supposed to be feeling this, the waes just began and i should be the warrior of my dreams","cinareer masiyado pagiging class clown na pati insecurities ng iba ginagawang joke","if we don't tell people how we feel how will they know","people are not showing off, they're sharing happy moments and achievements, unless you are viewing from a jealous point of view, so fix yourself","boss sukli ko po sa bente? ah bente na po ang pancit canton? sige sige","wag mo ginagawang biro ang insecurities ng iba, hindi mo kinacool yan, pls tigil mo yan","wag ka puro shared post ng kabastusan hindi mo kinacool yan","bakit tumawa ka nung shinip ka sa iba","anong never back down never what? haha suko na ko bai","wala ka sa listahan, baka sa ibang gc ka","sa kape ko natagpuan ang init na dapat sayo ko naramdaman, pero sayo ko nalasahan ang pait na dapat sa kape ko lng matitikman","ang lala ng burnout ko sa online class, wala talaga akong nareretain sa utak ko, literal na work and submit na lng ginagawa ko","please know the difference between jokes and insults. thank you","i respect your other responsibilities, update is enough","when he never makes you feel jealous and giving u assurance na ikaw lng palagi","nver talk to strangers they could be a robot secretly waiting to rule the world","puro kayo kasalanan ng mga lalake ahh, baka nakakalimutan niyo si eva kumain ng apple","pinilit ni satanas kainin yung apple, lalaki si satanas so kasalanan parin ng mga lalaki","joke time, anong tawag sa bear kapag hindi na siya sikat? edi laos na kase hindi na siya oso","the irony of pain is that you want to be comforted by the one who hurt you","Breaking News: tatay pinatay ang anak gamit ang samurai dahil sa mababang grades","sometimes people you have met that made you enchanted ended up be just it, sometimes they ended being just a friemd. they let that spark shine until it fades in time. Cuz you don't want to ruin that feeling. both of you just want to leave it as it is","i confessed not because i wanted him to reciprocate the feelings that i have for her, but because i wanted her to know that there's someone who sees something in him that others don't. i like this girl so much, and he deserves to know how i think about her","kapag gulong-gulo ka na, gumulong ka","pag drain na drain kana, baka dati kang drainage","kung feeling mo binabalot ka ng kalungkutan, baka dati kang turon","kung lagi ka natataranta, baka dati kang tarantado","kung pakiramdam mong punong-puno ka na, baka dati kang gubat","kung marami kang pasanin sa buhay, baka dati kang kargador","panghapon ba kayo o pang umaga? ako kase pang character development lng","everyday feels like a response, rather than a purpose. i have no choice but to be here","pre-test daw pero wala kaming natikman","eating bread alangan namang inumin ko","normalize sending memes to stay in touch case i got nothing to talk about","astig daw, nagagalit la nga kapag di ka kinikiss","hindi na kaya ng ka astigan ko namimiss na talaga kita","sorry naman kung hindi ako aestetik at isa lang akong dugyot na gagsti","horny daw siya pero wala naman siyang sungay","i wish i was a cat, no school, no works, just meow meow","your mental health must be your priority, pls take good care of ur body, ur mind, heart and all. if u need to take a rest just do it, give yourslef a break,don't force yourself","Moral Lesson: wag mo ipahiya ang kaibigan mo para magpasikat sa babae","Mission 143: magnakaw ng pera para ibigay sa kaklaseng walang baon","Mission 1: bugbugin mga pulubi sa kalsada para may maganda silang tutulugan sa ospital","edi sorry kung patay gutom ako sa kiss","tara nood crime story habang nagkakatakutan","if you are dead inside, go outside","i be like i don't care but then i get sharp pains in my chest","mga bagay na mahirap gawin \n1. magkunwaring hindi ka miss","crushback mo nga ako kung mahal mo mama mo","mahal kita pero hindi kita pipilitin na piliin ako kase hindi ganon ang pagmamahal","ipapangalan kita sa pusa ko para lagi ka nang nasa tabi ko","don't be insecure miss, alam kong maganda ka always","edi sorry kung kiss enjoyer ako","my money don't jingle jingle i'm broke","pumogi/gumanda lng dahil sa filer, never say this to someone it's not his/her fault if he's/she's not confident enought to show his/her pure face, he's/she's afraid to be called ugly because of not having clear skin. if you can take picture of yourself without filters then stop undervaluing them","uri nga mga mahihinang nilalang: \n1. ako pag nag seselos","meron ka bang lemon? gusto kase kita","meron ka bang lemon? gusto ko nang mamatay","Ming takbo ming, nanjan na yung cat lover daw pero di naman kumakain ng tinik","payag ka aso ka ni john wick pero tahol mo pahigop","dog lover daw pero dipende sa luto","yung hinalikan ka ni crush tapos ginising ka ng mama mo","yung nakailang yakult ka na pero hindi ka parin okay","porket nakahiga matutulog na? di ba pwedeing nag pahinga lng kase pagod nang intindihin ka","hindi porket nakatulala sabog na , hindi ba pwedeng iniisip lng kita","porket naka upo pagod agad? hindi ba pwedeng i can't stand seeing you with someone else","yung ka chat mo si crush tas bigla siya nag post ng penge ka chat yung may kwenta sana","yung lagi mong pinag ppray na sana mamatay na yung crush ng crush mo tapos pag tulog mo biglang di ka na nagising","yung hinihimas niya buhok mo tapos naalala mo ikaw lng tayo sa inyo","wow ang lakas naman ng loob mong magtampo wala namang kayo","gigil mo ko, pagtapos mo kong pakiligin iiwan mo rin pala ako","tatalikod lng muna ako baka sakaling pag harap ko ako na gusto mo","yung pinayagan kang maligo sa ulan kaso nakidlatan ka lang","ang buhay ko sakto lng, walang labis ikaw na lng ang kulang","ayoko ng coke gusto ko ikaw mismo","hindi ako corny sadyang mataas lng standars mo sa joke","ikaw lng gusto ko kahit magsumbong ka pa sa mama mo","sabi niya sweet dreams pero binangungot ka","cat lover ka pala haha meow","sorry for being annoying i'll keep doing it again and again","isang hugsilog nga po","pakibalot nga ng sarili mo kase ikaw ang wish ko ngayong pasko","edi sana hindi ka na lng umasa sa reply niya, pampalipas oras ka lng naman, babalik lng sayo kapag wala na silang matopic sa kabila","please follow and support Isa Dalawa Tatlo Quickie Tayo","Rules ni bff, \n1.Bawal ka po mag puyat\n2.Lagi ka mag papaalam sakin kung aalis ka o ano gagawin mo\n3.Lagi kang makinig sakin\n4.Lagi ka mag po","paglalamayan ko sa undas\n1.grades ko","paglalamayan ko sa undas\n1.bangkay ng pinagseselosan ko","toxic filipino culture:\nikaw na may birthday ikaw pa manlilibre","try mo sakin mag rant, aagawin ko yang moment mo","oo sk ako,\ns-akin\nk-alang","inang buhay to di na mawalan ng problema palagi nalang pagsubok konti nalang gusto ko na sumuko sa buhay","F.O saglit backstab na malupit tapos bff na ulit","ang sarap talagang makipagtalo kahit alam kong ako ang mali","wag ako boi, hindi ako mag co-confess kahit obvious na gusto ko siya","overthinker pero hindi makapag think sa exam","wag ka na mag selos baby sayo ko lng iaalay ang clingyn side ko","drinking water kase babagsak ako this quarter","research topic: buhay ng ibang tao","matatalo mo ko sa pagandahan ng sulat","pano pala kung nagbibiruan kayo ni hidilyn tapos bigla kang binato ng motor","oo bading ako\nb-balik kana\na-akin ka na lng ulit\nd-dali na oh\ni-imissyou\nn-namimiss na talaga kita\ng-grabe lungkot ko nung nawala ka","kami na siguro ang pinakaperfect couple kung naging kami lng","matatalo mo ko sa papogian pero sa padamihan ng racist classmates umuwi ka na","syempre may corny at clingy side rin ako, ano akala niyo sakin araw-araw masama ugali","sign of maturity: hindi na nagpaparinig sa facebook hindi tulad ng iba jan","pati sa pagtae ko ikaw parin nasa isip ko","nagtthirsttrap na sa story ah, break na siguro kayo","lord kung di po siya para sakin pwede mo na siya kunin","sorry kung cold ako minsan, tinatamad kase ako magtype kita","review: 5 mins\npahinga: ikaw","saluhin mo ang cute stickers ko","grabe nakakapagod umupo, pwedeng tayo na lng","tatlong bilyon tas kiss mo lng ang aking gusto","kung competitive ka talaga, i-try mo nga lamangan feelings ko sayo","sa sobrang daming trend ngayon sa ubusan ng pera pa ako nakasabay","daming gagawin sa school, parang gusto ko nalang magpa baby sayo","kung ang panahon ay lumilipas, ang sama ng loob ko hinde","matured daw siya pero kinukumutan yung pusa pag tulog","matured daw siya pero umiiyak kapag may nakitang patay na pusa sa daan","happy holloween sa mga takot na takot bumagsak pero hindi nagpapasa ng activity","kumusta pagiging palamunin sa bahay","wohoii, imissyoutime nanaman with imagining fake scenarios namin together habang nakatitig sa kisame then sisihin ang sarili ko kung bakit nya ako iniwan at pinagpalit sa classmate nya","sinanay mo kase(luh bat nadamay nanay ko)"," madami po kami)","faith(edi lagyan mo ng asukal","a fool(sa tagalog mansanas)","may bente ka?(oo nakakalakad nga eh","crush mo pala ako eh, oh eto mixed signals","ala eh, pwede gang ikaw ang tagapiga ng kalamansi sa aking lume","sinong hindi pa kumakain jan, pakain ko sana kamao ko","me:pabili nga po ng coke\nale:mismo?\nme:oy hindi ah","guys may tanong ako, lets say hypothetically binenta ko kidney ko, tapos yung pera ginamit ko for business, tapos lumago yung business, pwede ba ako bumili ng bagong kidney para 2 na ulit kidney ko?","sa bawat pagkakamali may mga lessons na matutunan, kaya gumawa ka ng madaming pagkakamali para madami ka rin matutunan","kung may problema ka, it's your problem","wag ka maniniwala sa swerte, malas yan","wag kang magsisinungaling, kung hindi ka lng din magsasabi ng totoo","kung hindi ka nagkakamali, may tama ka na","kung hindi mo na kaya, ipagawa mo sa iba","hindi mo malalaman ang halaga mo kung wala kang kwenta","it's the simple things that make things simple","the best things in life are not things","tatahimik lng ako pero hindi ako maingay","basta lagi mong tandaan, kahit anong pangit ng araw mo, mas panget kalagi mong tandaan, kahit anong pangit ng ka","yung naki sleep over ka sa bahay ng tropa mo tapos ni-raid kayo ng PDEA","yung sine-sermonan yung kapatid mo sa sala, tapos dumaan ka lng para kumuha ng tubig\nmama mo: isa ka pa!!"
  
      ];

      module.exports.handleEvent = async ({ event, api, Users }) => {
        if (!fs.existsSync(pathFile)) fs.writeFileSync(pathFile, "false");
        const isEnabled = fs.readFileSync(pathFile, "utf-8");
        
        if (isEnabled === "true") {
            if (event.body && keywords.includes(event.body.toLowerCase())) {
                const name = await Users.getNameUser(event.senderID);
                const mentions = [{ tag: name, id: event.senderID }];
                const randomResponse = juswa[Math.floor(Math.random() * juswa.length)];
                
                const moment = require("moment-timezone");
                const timeZone = "Asia/Manila";
                const now = moment().tz(timeZone);
                const hours = now.format("HHmm");
    
                const session =
                    (hours >= "0001" && hours <= "0400") ? "bright morning" :
                    (hours >= "0401" && hours <= "0700") ? "morning" :
                    (hours >= "0701" && hours <= "1000") ? "morning" :
                    (hours >= "1001" && hours <= "1100") ? "morning" :
                    (hours >= "1101" && hours <= "1500") ? "afternoon" :
                    (hours >= "1501" && hours <= "1800") ? "evening" :
                    (hours >= "1801" && hours <= "2100") ? "evening" :
                    (hours >= "2101" && hours <= "2400") ? "late night and advance sleepwell" :
                    "error";
    
                const msg = { 
                    body: `Hi ${name}, have a good ${session}, ${randomResponse}`,
                    mentions 
                };
    
                setTimeout(() => {
                    api.sendMessage(msg, event.threadID);
                }, 10000);
            }
        }
    };
    
    module.exports.run = async ({ api, event, args }) => {
        try {
            if (args[0] === "on") {
                fs.writeFileSync(pathFile, "true");
                api.sendMessage("auto-reply has been enabled.", event.threadID);
            } else if (args[0] === "off") {
                fs.writeFileSync(pathFile, "false");
                api.sendMessage("auto-reply has been disabled.", event.threadID);
            } else {
                api.sendMessage("usage: autoreply [on/off]", event.threadID);
            }
        } catch (e) {
            console.error(e);
            api.sendMessage("❌ An error occurred while toggling auto-reply.", event.threadID);
        }
    };
}
    }
}
