const Discord = require('discord.js');
var bot = new Discord.Client();

const PREFIX = "s!";

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "welcome").send(member.toString() + ", **Welcome to SwiFT Community!**\n*Make sure to read server rules and information.*\n*Also dont forget subscribe to our channel*\n*<http://www.youtube.com/c/SwiFTFreestyle>*")
    })


bot.on("ready", function() {
    bot.user.setStatus('Made by Minty!')
    console.log("Im Ready!");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;
        var args = message.content.substring(PREFIX.length).split(" ");

        switch (args[0].toLowerCase()) {
            case "leaders":
                message.channel.send("***Minty*** - 16 Years old, polish beginner editor and designer, IT passionate!\n***Merch*** - 16 Years old, Russian cyka-blyat editor and designer!.");
                break;
            case "lastvid":
                message.channel.send("https://ltstyt.be/3e5");
                break;
            case "help":
                message.author.send("***Here are the commands!***\n **s!website** *(in progress)*\n **s!leaders**\n **s!lastvid**\n **s!yt**\n **s!twitter**\n **s!socials**");
                break;
            case "yt":
                message.channel.send("**Our Youtube** <http://yt.team-swift.eu/>");
                break;
            case "twitter":
                message.channel.send("**Our Twitter!** <http://twitter.team-swift.eu/>");
                break;
            case "socials":
                message.channel.send("**Our Socials!**\n**Youtube** <http://yt.team-swift.eu/>\n**Twitter** <http://twitter.team-swift.eu/>\n**Discord** http://discord.team-swift.eu/");
                break;        
            case "website":
                message.channel.send("**Our Website!** <http://team-swift.eu/>");
                break;
            case "join":
                message.channel.send("**Application URL!** <http://apply.team-swift.eu/>");
        }
    }  
)




bot.login(process.env.BOT_TOKEN);
