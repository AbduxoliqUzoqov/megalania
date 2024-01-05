import TeleBot from "telebot"


const bot = new TeleBot("6489118017:AAFa36dFUJazpqIcRfzFm5mcUFcDxiZdjvg")

bot.setMyCommands([
    { command: "/start", description: "🔆 Botni ishga tushirish ♻️" },
    { command: "/info", description: "🔰 Malumot olish" },
    { command: "/admin", description: "👨‍💻 Admin Panel"},
  ]);

bot.on("text", msg => msg.reply.text(msg.text))

export default bot
