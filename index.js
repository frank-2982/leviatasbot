var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(request, response) {
  
});

app.listen(process.env.PORT || 3000)


const TOKEN = process.env.TELEGRAM_TOKEN || '286347105:AAEST1sg39bF1pVMcrF_klijfMuTlkORP-U';

var TelegramBot = require('node-telegram-bot-api');

const options = {
   webHook: {
    // Port to which you should bind is assigned to $PORT variable
    // See: https://devcenter.heroku.com/articles/dynos#local-environment-variables
    port: process.env.PORT
    // you do NOT need to set up certificates since Heroku provides
    // the SSL certs already (https://<app-name>.herokuapp.com)
    // Also no need to pass IP because on Heroku you need to bind to 0.0.0.0
  }

}


// Heroku routes from port :443 to $PORT
// Add URL of your app to env variable or enable Dyno Metadata
// to get this automatically
// See: https://devcenter.heroku.com/articles/dyno-metadata
const url = process.env.APP_URL || 'https://leviatasbot.herokuapp.com:443';
const bot = new TelegramBot(TOKEN, options);

// This informs the Telegram servers of the new webhook.
// Note: we do not need to pass in the cert, as it already provided
bot.setWebHook(`${url}/bot${TOKEN}`);


// Just to ping!
bot.on('message', function onMessage(msg) {
  bot.sendMessage(msg.chat.id, 'I am alive on Heroku!');
});



















/*
var Clear = require('codeday-clear'),
    // Our sample app token and secret
    clear = new Clear("1YZiGaj3baaLU8IKVsASRIWaNF2oJNg0", "1COMnWyGnGBsNqkhaZ6WMBWB9UWZw6QZ");

// moment is not a class, just a simple function
var moment = require('moment');

telegram.on("text", (message) => {
  if(message.text.toLowerCase().indexOf("/codeday") === 0){
    clear.getEventById("oo4QIuKQQTYA", (codedayEvent) => {
      var endsAt = moment(codedayEvent.ends_at * 1000);
      telegram.sendMessage(message.chat.id, "CodeDay ends *" + endsAt.fromNow() + "*!", {
           parse_mode: "Markdown"
      });
    });
  }else{
telegram.sendMessage(message.chat.id, "Hello world");

	}
});

telegram.on("inline_query", (query) => {
  var searchTerm = query.query.trim();

  clear.getRegions((regions) => {
    var queryResults = [ ];

    regions.forEach((region) => {
      if(region.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 && region.current_event && region.current_event.venue){
        queryResults.push({
          type: "article",
          id: region.id,
          title: "CodeDay " + region.name,
          description: "Hosted at " + region.current_event.venue.full_address,
          input_message_content: {
            latitude: region.location.lat,
            longitude: region.location.lng,
            title: "CodeDay " + region.name,
            address: region.current_event.venue.full_address
          }
        });
      }
    });

    telegram.answerInlineQuery(query.id, queryResults);
  });
});
*/