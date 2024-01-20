import { Context, Markup, Telegraf } from "telegraf"
require('dotenv').config()

const WEB_APP_URL = "https://hoaper.github.io/aitu_merchant_telegram/"
const bot = new Telegraf(process.env.BOT_TOKEN || "")

bot.start(async (ctx) => {
    ctx.reply(
		"Launch mini app from inline keyboard!",
		Markup.inlineKeyboard([
            Markup.button.webApp("open", WEB_APP_URL)
        ])
	)
    ctx.setChatMenuButton({
        "text": "SHOP",
        type: "web_app",
        "web_app": {
            "url": WEB_APP_URL
        }
    })

})



bot.launch()
    .then(() => {
        console.log("BOT STARTED");
})

