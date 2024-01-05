import TeleBot from "telebot"
const admin = '5031002143';
const API_URL = "https://instaapi-uzoqov.vercel.app/ig?url=";


const bot = new TeleBot("6489118017:AAFa36dFUJazpqIcRfzFm5mcUFcDxiZdjvg")


bot.on("text", msg => {
   //msg.reply.text(msg.text)
   const txt = msg.text;
   const chatId = msg.chat.id;
   if(txt == "/start"){
      bot.sendMessage(chatId, `👋🏻 Assalomu alaykum <a href='tg://user?id=${msg.chat.id}'>${msg.chat.first_name}</a> botimizga xush kelibsiz! `, { parse_mode: 'html' });
      bot.sendMessage(admin, `🔔Botimizda Yangi azo
➖➖➖➖➖➖➖➖➖
 <a href = 'tg://user?id=${chatId}'>${msg.chat.first_name}</a> Botga🤖 /start Bosdi!
<b>🔔 Usernamesi:</b> @${msg.chat.username}
<b>🆔️ Raqami:</b> <code>${chatId}</code>
➖➖➖➖➖➖➖➖➖
 `, { parse_mode: 'html' });
   }else if (txt.includes("instagram.com")) {
      bot.sendMessage(chatId, "⌛");
      fetch(API_URL + txt)
        .then(res => res.json())
        .then(data => {
          //console.log(data)
          if (data.status) {
            if (data.data.length == 1) {
              let typee = data.data[0].type;
              if (typee == "video") {
                bot.sendVideo(chatId, data.data[0].url, { caption: "Video @EttaProBot orqali yuborildi!" })
              } else if (typee == "image") {
                bot.sendPhoto(chatId, data.data[0].url, { caption: "Foto @EttaProBot orqali yuborildi!" })
              }
            } else {
              data.data.forEach(res => {
                bot.sendVideo(chatId, res.url)
              });
              bot.sendMessage(chatId, "@EttaPro botdan foydalanganinggizda xursandmiz")
            }
          } else {
            bot.sendMessage(chatId, "Havolada xatolik..")
          }
        })
        .catch(err => {
          bot.sendMessage(chatId, "Xatolik qayta urinib ko'ring!")
        });
      //igapi(chatId,text)
    }else{
      return bot.sendMessage(chatId,txt);
   }
   
});



export default bot
