var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(request, response) {
  
});

app.listen(process.env.PORT || 3000);

'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand

const tg = new Telegram.Telegram('286347105:AAEST1sg39bF1pVMcrF_klijfMuTlkORP-U')

tg.onMaster(() => {
listener.listen(app.get('port'), function (){
console.log('Your app runing on '+ app.get('port'));
});

/*
class PingController extends TelegramBaseController {
    
    pingHandler($) {
        $.sendMessage('pong')
    }

    get routes() {
        return {
            'pingCommand': 'pingHandler'
        }
    }
}

tg.router
    .when(
        new TextCommand('ping', 'pingCommand'),
        new PingController()
    )*/