


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

bot.onText(/^weather/, function( msg, match) {
  result = "https://my.meteoblue.com/visimage/meteogram_multiSimple?apikey=5838a18e295d&cache=no&city=Berbenno+di+Valtellina&iso2=it&lat=46.166401&lon=9.747340&asl=370&tz=Europe%2FRome&dt=1&fcstlength=72&look=CELSIUS%2CKILOMETER_PER_HOUR&lang=en&ts=1465152082&sig=4e515a75fea741080e179b716bef8da8";
  bot.sendMessage(msg.chat.id, result).then(function(){}) ;

});


console.log('bot server started...');
