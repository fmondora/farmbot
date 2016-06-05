

var token = '234912877:AAGtmlM3JCXrRcQZbJx9AUuVBcz5DxHuwdM';

var Bot = require('node-telegram-bot-api'),
    bot = new Bot(token, { polling: true });

bot.onText(/^\/say_hello (.+)$/, function (msg, match) {
  var name = match[1];
  bot.sendMessage(msg.chat.id, 'Hello ' + name + '!').then(function () {
  // reply sent!
  });
});

bot.onText(/^\/sum((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].trim().split(/\s+/).forEach(function (i) {
    result += (i || 0);
  })
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
  });
});


console.log('bot server started...');
