import { Context, Markup, Telegraf } from "telegraf"
require('dotenv').config()

const WEB_APP_URL = "https://google.com"
const bot = new Telegraf(process.env.BOT_TOKEN || "")

bot.start(async (ctx) => {
    await ctx.reply(
        "Launch mini app from inline keyboard!",
        Markup.inlineKeyboard([
            Markup.button.webApp("open", WEB_APP_URL)
        ])
    )
    await ctx.setChatMenuButton({
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

