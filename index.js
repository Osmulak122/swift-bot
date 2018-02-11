const Discord = require('discord.js');
var bot = new Discord.Client();

const PREFIX = "s!";

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "welcome").send(member.toString() + ", **Welcome to SwiFT Community!**\n*Make sure to read server rules and information.*\n*Also dont forget to subscribe to our channel*\n*<http://yt.team-swift.eu/>\n And follow us on Twitter!\n<http://twitter.team-swift.eu/>*")
    })


bot.on("ready", function() {
    bot.user.setGame('Made by Minty!')
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
                message.channel.send("***Here are the commands!***\n\n**s!website** *(coming soon)*\n**s!join** *(coming soon)*\n**s!leaders**\n**s!lastvid**\n**s!yt**\n**s!twitter**\n**s!socials**\n**s!twitch**");
                break;
            case "yt":
                message.channel.send("**Our Youtube** <http://yt.team-swift.eu/>");
                break;
            case "twitter":
                message.channel.send("**Our Twitter!** <http://twitter.team-swift.eu/>");
                break;
            case "stream":
                message.channel.send("**Our Twitch** <http://twitch.team-swift.eu/>");
                break;
            case "socials":
                message.channel.send("**Our Socials!**\n**Youtube** <http://yt.team-swift.eu/>\n**Twitter** <http://twitter.team-swift.eu/>\n**Discord** http://discord.team-swift.eu/");
                break;        
            case "website":
                message.channel.send("**Our Website!** <http://team-swift.eu/>");
                break;
            case "join":
                message.channel.send("**Application URL!** <http://apply.team-swift.eu/>");
                break;
            case "kys":
                message.delete();
                message.channel.send('kys');
                break;
            case "minty":
                message.channel.send("**E-mail:** minty@team-swift.eu\n**Steam:** <https://steamcommunity.com/id/osmulsky>\n**YouTube:** <https://www.youtube.com/channel/UCglYxOz6Bmu1lu1IvPZc_aQ>");
                break;
            case "twitch" :
                message.channel.send("<https://twitch.tv/teamswift_rl>\n*If u want to get access to hidden Twitch channels and get notification when we start stream, write `?rank Twitch` in #bot_commands channel!*");
        }
    }  
)




bot.login(process.env.BOT_TOKEN);
