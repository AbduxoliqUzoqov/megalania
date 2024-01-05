import TeleBot from "telebot"

const bot = new TeleBot("6489118017:AAFa36dFUJazpqIcRfzFm5mcUFcDxiZdjvg")

bot.on("text", msg => msg.reply.text(msg.text))

export default bot
