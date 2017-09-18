var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(request, response) {
  
});

app.listen(process.env.PORT || 3000);

var TelegramBot = require('node-telegram-bot-api'),
    // Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
    telegram = new TelegramBot("286347105:AAEST1sg39bF1pVMcrF_klijfMuTlkORP-U", { polling: true });


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