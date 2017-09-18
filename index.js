var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(request, response) {
  
});

app.listen(process.env.PORT || 3000);

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const tg = new Telegram.Telegram('286347105:AAEST1sg39bF1pVMcrF_klijfMuTlkORP-U')

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

tg.router.when(['hey', 'hi', 'hello'], new GreetingController());