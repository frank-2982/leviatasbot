var TelegramBot = require('node-telegram-bot-api'),
    // Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
    telegram = new TelegramBot("286347105:AAEST1sg39bF1pVMcrF_klijfMuTlkORP-U", { polling: true });

//telegram.on("text", (message) => {
//  telegram.sendMessage(message.chat.id, "Hello world");
//});

var Clear = require('codeday-clear'),
    // Our sample app token and secret
    clear = new Clear("1YZiGaj3baaLU8IKVsASRIWaNF2oJNg0", "1COMnWyGnGBsNqkhaZ6WMBWB9UWZw6QZ");

// moment is not a class, just a simple function
var moment = require('moment');

telegram.on("text", (message) => {
  telegram.sendMessage(message.chat.id, "Hello world");
});