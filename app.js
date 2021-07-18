require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const { createEventAdapter } = require('@slack/events-api');

const slackSigningSecret = process.env.SLACK_SIGNING_SECRET; 
const slackToken = process.env.SLACK_TOKEN;
const port = process.env.PORT;
const telegramToken = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(telegramToken, {polling: true});
const chatId= process.env.TELEGRAM_CHAT_ID;

const slackEvents = createEventAdapter(slackSigningSecret);

let sender = ""

slackEvents.on('message', (event) => {
    
        console.log(`Got message from user ${event.user}: ${event.text}`);
        (async () => {
            switch (event.user) {
                case 'U0283K4QTSN':
                    sender = "Najera"
                    break;

                case 'U028G9HTSQZ':
                    sender = "Alex"
                    break;
            
                default:
                    sender = "Alguien"
                    break;
            }
            try{
                bot.sendMessage(chatId, `<${sender}> envio a Slack: ${event.text}`);
            } catch(error){
                console.log(error);
            }
        })();
    
    return;
});

slackEvents.on('error', console.error);

slackEvents.start(port).then(() =>{
    console.log(`Server started on port ${port}`);
})


