const TOKEN = process.env.TELEGRAM_TOKEN || '286347105:AAEST1sg39bF1pVMcrF_klijfMuTlkORP-U';

const Telegram = require('telegram-node-bot'):
const TelegramBaseController = Telegram.TelegramBaseController:
const tg = new Telegram.Telegram(TOKEN):

class GreetingController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    greetingHandler($) {
        $.sendMessage('Hey, how are you?')
    }
get routes() {
        return {
            'hey': 'greetingHandler',
            'hi': 'greetingHandler',
            'hello': 'greetingHandler',
        }
    }
}


tg.router
.when(['hey', 'hi', 'hello'], new GreetingController());