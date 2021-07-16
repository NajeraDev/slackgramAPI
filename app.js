require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const { WebClient } = require('@slack/web-api');
const { createEventAdapter } = require('@slack/events-api');

const slackSigningSecret = process.env.SLACK_SIGNING_SECRET; 
const slackToken = process.env.SLACK_TOKEN;
const port = process.env.SLACK_PORT || 3000;
const telegramToken = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(telegramToken, {polling: true});
const chatId= process.env.TELEGRAM_CHAT_ID;

const slackEvents = createEventAdapter(slackSigningSecret);
const slackClient = new WebClient(slackToken);

let sender = ""

slackEvents.on('message', (event) => {
    if (event.user != "U028TRUCLEL") {
        console.log(`Got message from user ${event.user}: ${event.text}`);
        console.log(event);
        (async () => {
            switch (event.user) {
                case 'U0283K4QTSN':
                    sender = "Najera"
                    break;
            
                default:
                    sender = "Alguien"
                    break;
            }
            try{
                //await slackClient.chat.postMessage({ channel: event.channel, text: `Hello <@${event.user}>! :taco:`}); aaaa
                bot.sendMessage(chatId, `<${sender}> envio a Slack: ${event.text}`);
            } catch(error){
                console.log(error);
            }
        })();
    }
    return;
});

//chanel: C028G90R17B

slackEvents.on('error', console.error);

slackEvents.start(port).then(() =>{
    console.log(`Server started on port ${port}`);
})


