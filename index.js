const Discord = require('Discord.js');
var bot = new Discord.Client();

const PREFIX = "s!";

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "welcome").sendMessage(member.toString() + ", **Welcome to the SwiFT Community!**\n*Make sure to read server rules and information.*\n*Also dont forget subscribe to our channel*\n*http://www.youtube.com/c/SwiFTFreestyle*")
    })


bot.on("ready", function() {
    bot.user.setGame('Made by Minty#7493')
    console.log("Im Ready!");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;
        var args = message.content.substring(PREFIX.length).split(" ");

        switch (args[0].toLowerCase()) {
            case "leaders":
                message.channel.sendMessage("***Minty*** - 16 Years old, polish beginner editor and designer, IT passionate!\n***Merch*** - 16 Years old, Russian cyka-blyat editor and designer!.");
                break;
            case "lastvid":
                message.channel.sendMessage("https://ltstyt.be/3e5");
                break;
            case "help":
                message.author.sendMessage("***Here are the commands!***\n **s!leaders**\n **s!lastvid**\n **s!yt**");
                break;
            case "yt":
                message.channel.sendMessage("http://www.youtube.com/c/SwiFTFreestyle");
                break;
                
                    
        }
    }  
)





bot.login(process.env.B0T_T0KEN);
