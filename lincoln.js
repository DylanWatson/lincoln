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
          if(event.body === '/stop')
          {
            api.sendMessage("Goodbye...", event.threadID);
            return stopListening();
          }

          if(menuPresent === true)
          {
            if(event.body === '1')
            {
              api.sendMessage("You can do it!", event.threadID);
              menuPresent = false;
            }
          }

          api.markAsRead(event.threadID, function(err)
          {
            if(err) console.log(err);
          });

          if(event.body === 'hi' || event.body === 'Hi' || event.body === "hi." || event.body === "Hi.")
          {
            api.sendMessage("Hi!  Welcome to Lincoln, a personal assistant by the people, for the people.\n\nHere are a few things you can do:\n\n1. Get encouragement.", event.threadID);
            menuPresent = true;
          }

          //api.sendMessage("TEST BOT: " + event.body, event.threadID);
          console.log(event.body)
        }
          case "event":
            console.log(event);
            break;
        }
    });
});
