// Simple echo bot. He'll repeat anything that you say.
// Will stop when you say '/stop'
var login = require("facebook-chat-api");
login({email: "abraham.lincoln.dev@gmail.com", password: "Cm1772pf!"}, function callback (err, api) {
    if(err) return console.error(err);
    //console.log(api.getCurrentUserID());
    api.setOptions({listenEvents: false});
    var menuPresent = false;

    var stopListening = api.listen(function(err, event)
    {
        //console.log(api.getCurrentUserID());
        if(err) return console.error(err);

        if(event.type === "message")
        {
          if(event.body === "Hi" || event.body === "hi")
          {
            api.sendMessage("Welcome to Lincoln, a API personal assistant by the people, for the people.\n\nType in one of the categories below to get started!\n\nMotivation", event.threadID);
          }

          if(event.body === "Motivation" || event.body === "motivation")
          {
            var motivation = require('./motivation.js');
            api.sendMessage(motivation.menu(), event.threadID);
            var recieveInput = api.listen(function(err, event)
            {
              if(motivation.choice(event.body) !== "exit")
              {
                api.sendMessage(motivation.choice(event.body), event.threadID);
              }
            });
          }
          //api.sendMessage("TEST BOT: " + event.body, event.threadID);
        }
    });
});
