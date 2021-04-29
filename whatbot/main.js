const Discord = require('discord.js');
const { Stats } = require('fs');
const client = new Discord.Client()
var DBPL = require('./DB/playerStats.json');
const prefix = "c-";
const advert = "834014827948146699";
var tmout = 0
var writeTime = 120
process.stdin.resume()
function exitHandler(cause) {
if(cause == "FINAL") {
console.log("Condensed has closed with code 0") } else {
console.log("Condensed is closing with error code " + cause)
dbWrite(DBPL)
console.log("Goodbye!")}
process.exit("FINAL")
}
process.on('exit', exitHandler.bind("0"))
process.on('SIGINT', exitHandler.bind("1"))
process.on('SIGUSR1', exitHandler.bind("3"))
process.on('SIGUSR2', exitHandler.bind("3"))
process.on('uncaughtException', exitHandler.bind("2"))
function doAdvertCooldown() {
    if(tmout > -1){
    tmout = tmout - 1
    }
    if(tmout2 > -1){
        tmout2 = tmout2 - 1
    }
    if(writeTime > -1){
        writeTime = writeTime - 1
    } else {
dbWrite(DBPL)
writeTime = 120}
}
var thea = setInterval(doAdvertCooldown, 1000)
thea
var tmout2 = 0
client.login("")

client.on('ready', () => {
    console.log("Startup initiated.")
    client.user.setActivity("c-help")
    console.log(client.guilds.cache.size + " servers found containing the BOT.")
console.log("Condensed is ready.")
});
function generateRandomNum(top) {
    return Math.floor(Math.random() * Math.floor(top))
}
function badWordsFilter(badWord, messagetoCheck) {
    if(messagetoCheck.content.toLowerCase().includes(badWord)) {
        if(messagetoCheck.channel.type == 'text'){
        var authr = messagetoCheck.author
        console.log("[DELETED]: " + messagetoCheck.author.username + "#" + messagetoCheck.author.discriminator + ": " + messagetoCheck.content)
	if(messagetoCheck.guild.me.hasPermission("MANAGE_MESSAGES")) {
        messagetoCheck.channel.send(authr.username + ", please do not use that word.")
        messagetoCheck.delete()}
    } else {
        messagetoCheck.channel.send("*** w h y . ***")
        messagetoCheck.channel.send("*** w h y a r e y o u c u s s i n g m e o u t . . . ! ! ! ***")
        messagetoCheck.channel.send("Don't make me block you. I am a computer. I have approximately 0 IQ. And yes, that's actually a number.")
        messagetoCheck.channel.send("So GET OUT RIGHT NOW. STOP FREAKING CUSSING ME OUT CREEP.")
        console.log("[DM ATTACK]: " + messagetoCheck.author.username + "#" + messagetoCheck.author.discriminator + ": " + messagetoCheck.content)
        return
    }
    }
}
function getUserFromMention(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.cache.get(mention);
	}
}

var fs = require('fs'); 
function chatModule(messageToEval, msgword, responder) {
    var args = messageToEval.content.slice(6).toLowerCase();
    if(args.includes(msgword)﻿) {
        messageToEval.channel.send(responder)
        return true
    } else {
        return false
    }
}
function thought(toCheck, msgw, val, responder){
    if(toCheck == val){
        msgw.channel.send(responder)
    }
}

function dbWrite(stuffto){
console.log("[SYSTEM]: Database save initiated.")
fs.writeFileSync('./DB/playerStats.json', JSON.stringify(stuffto))
console.log("[SYSTEM]: Database updated.")
}
client.on('message', message =>{
    if(message.author.bot) return;
const guiID = message.channel.guild.id
var maxWarn = DBPL[guiID + "maxWarn"]
if(isNaN(maxWarn)) {
DBPL[guiID + "maxWarn"] = 0;
maxWarn = 0
}
var bfilt = DBPL[guiID + "bfilt"]
if(isNaN(bfilt)) {
DBPL[guiID + "bfilt"] = 0;
bfilt = 0
}
if(bfilt == 0) {
    badWordsFilter("fck", message)
    badWordsFilter("fuck", message)
    badWordsFilter("shit", message)
    badWordsFilter("dumbass", message)
    badWordsFilter("shitass", message)
    badWordsFilter("adf.ly", message)
    badWordsFilter("bit.ly", message)
    badWordsFilter("a sshole", message)
    badWordsFilter("sh*t", message)
    badWordsFilter("d ate", message)
    badWordsFilter("d ating", message)
    badWordsFilter("sh-t", message)
    badWordsFilter("s--t", message)
    badWordsFilter("dating", message)
    badWordsFilter("nigg", message)
    badWordsFilter("fag", message)
    badWordsFilter("retard", message)
    badWordsFilter("ree", message)
    badWordsFilter("d8", message)
    badWordsFilter("cunt", message)
    badWordsFilter(" ass", message)
    badWordsFilter("f**k", message)
    badWordsFilter("f*ck", message)
    badWordsFilter("asshole", message)
    badWordsFilter("@everyone", message)
    badWordsFilter("wimp", message)
    if(message.content.toLowerCase().startsWith("ass")){
        badWordsFilter("ass", message)
    }}
    if(!message.content.startsWith(prefix)) return;
    if(message.channel.type == 'text') {
    var tmst = ("[BOTMSG]: ")
    console.log(tmst + message.author.username + "#" + message.author.discriminator + ": " + message.content)
    var args = message.content.slice(2).split(" ");
    const cmd = args.shift().toLowerCase();
const poing = args[0]
const ping = getUserFromMention(poing)
var ID = message.author.id;
var rod = DBPL[ID + "rod"]
if(isNaN(rod)) {
DBPL[ID + "rod"] = 10;
rod = 10}
var gold = DBPL[ID + "gold"]
if(isNaN(gold)) {
DBPL[ID + "gold"] = 0;
gold = 0
}
var bait = DBPL[ID + "bait"]
if(isNaN(bait)) {
DBPL[ID + "bait"] = 0;
bait = 0
}
var pick = DBPL[ID + "pick"]
if(isNaN(pick)) {
DBPL[ID + "pick"] = 0;
pick = 0
}
var infinitybait = DBPL[ID + "upgr1"]
if(isNaN(infinitybait)) {
DBPL[ID + "upgr1"] = 0;
infinitybait = 0
}
var spp = DBPL[ID + "upgr2"]
if(isNaN(spp)) {
DBPL[ID + "upgr2"] = 0;
spp = 0
}
const loID = guiID + "user" + ID
var maxWarn = DBPL[guiID + "maxWarn"]
if(isNaN(maxWarn)) {
DBPL[guiID + "maxWarn"] = 0;
maxWarn = 0
}
if(infinitybait > 0) {
DBPL[ID + "bait"] = 1000;
bait = 1000
}
var mon = DBPL[ID + "cas"]
if(isNaN(mon)) {
DBPL[ID + "cas"] = 0;
mon = 0;
}

    if(cmd === 'help'){
        message.channel.send('```Condensed Help List```');
        message.channel.send('```c-eco - Economy options, c-help - Bring this menu up, c-mod - Moderation actions, c-join - Join the home server of Condensed, c-fun - Funny commands, c-intr - Internal Commands```');
    };
if(cmd === 'eco') {
message.channel.send(`'''Economy Commands'''`)
message.channel.send(`'''c-goldshop - Look at the Golden Shop, c-rod - Upgrade rod (provided you have the money), c-bb (int) - Buy bait, c-fish - Fish, c-pickaxe - Upgrade your pickaxe, c-mine - Mine (more effective than fishing for minnows), c-bal - Get balance'''`)}
if(cmd === 'goldshop') {
message.channel.send('Gold Shop')
message.channel.send('Your Balance in gold: ' + gold)
if(infinitybait == 0) {
message.channel.send('Infinite Bait - 100 Gold (c-gs1)')
}
if(spp == 0) {
message.channel.send('Super Pickaxe (upgrade faster than rod) - 150,000 Gold (c-gs2)')
}
}
if(cmd === 'pickaxe') {
if(spp == 0) {
var nextPrice = pick * 1.25 + 1
var nextRod = pick * 1.10 + 1
} else {
var nextPrice = pick * 0.65
var nextRod = pick * 1.3
}
if(mon > nextPrice) {
DBPL[ID + "cas"] = DBPL[ID + "cas"] - nextPrice
message.channel.send("Success! You now have a balance of " + DBPL[ID + "cas"] + " silver.")
DBPL[ID + "pick"] = nextRod

} else {
message.channel.send("You need more silver.")
message.channel.send("The price of the next pickaxe is " + nextPrice + " silver.")}}

if(cmd === 'mine') {
if(spp == 1) {
var x = generateRandomNum(25 + pick) * 0.1
} else {
var x = generateRandomNum(25 + pick) * 0.01}
message.channel.send("After swinging your pickaxe around in a cave, you got " + x + " silver.")
DBPL[ID + "cas"] = DBPL[ID + "cas"] + x
if(spp == 1) {
var x = generateRandomNum(25 + pick + gold) * 0.001
message.channel.send("You also got " + x + " gold.")
DBPL[ID + "gold"] = DBPL[ID + "gold"] + x}
}
if(cmd === 'gs2') {
if(spp == 0) {
if(gold > 149999.99) {
DBPL[ID + "upgr2"] = 1
DBPL[ID + "gold"] = gold - 150000
message.channel.send('Purchase Successful!')
} else {
message.channel.send('You do not have enough gold to buy that.')
}}}
if(cmd === 'gs1') {
if(infinitybait == 0) {
if(gold > 99.99) {
DBPL[ID + "upgr1"] = 1
DBPL[ID + "gold"] = gold - 100
message.channel.send('Purchase Successful!')
} else {
message.channel.send('You do not have enough gold to buy that.')
}}}
if(cmd === 'mod') {
message.channel.send(`'''Moderation Condensed Commands'''`)
message.channel.send(`'''c-prune (int between 1 and 99) - Clear out (int) messages, c-kick (ping) - Kick a user, c-ban (ping) - Ban a user, c-leave - Get rid of this bot!, c-warn (user) - Warn someone, c-maxwarn (int) - Set the max warnings before ban, set to a value below 1 to disable, c-swear - Toggle the swearword filter, c-pardon - Reset a user's WARNS'''`)}
if(cmd === 'fun') {
message.channel.send(`'''Fun Condensed Commands'''`)
message.channel.send(`'''c-pfp <ping> - Get your profile picture, if argument is set then it will show theirs instead, c-meme - Get a meme'''`)}
if(cmd === 'intr') {
message.channel.send(`'''Internal Condensed Commands'''`)
message.channel.send(`'''c-advert - Advertise the server using QuickAdvert, c-bug - Report a bug, c-idea - Send an idea, c-qr - Get bot stats, c-sudo - Make Condensed speak, c-invite - Invite Condensed'''`)}
if(cmd === 'rod') {
var nextPrice = rod * 0.75
var nextRod = rod * 1.25
if(mon > nextPrice) {
DBPL[ID + "cas"] = DBPL[ID + "cas"] - nextPrice
message.channel.send("Success! You now have a balance of " + DBPL[ID + "cas"] + " silver.")
DBPL[ID + "rod"] = nextRod

} else {
message.channel.send("You need more silver.")
message.channel.send("The price of the next rod is " + nextPrice + " silver.")}}

if(cmd === 'bb') {
        const ar = message.content.slice(4);
var arg = parseInt(ar)
if(!isNaN(arg)) {
var args = Math.round(arg)
if(mon > args && args > 0) {
DBPL[ID + "bait"] = DBPL[ID + "bait"] + args;
DBPL[ID + "cas"] = DBPL[ID + "cas"] - args;
message.channel.send("Purchase succeeded.")
} else {
message.channel.send("You need more silver.")}
}}
if(cmd === 'fish') {
if(bait > 0) {
DBPL[ID + "bait"] = DBPL[ID + "bait"] - 1;
var x = generateRandomNum(rod) * 0.5
var y = generateRandomNum(rod) * 0.3
DBPL[ID + "cas"] = DBPL[ID + "cas"] + x;

message.channel.send('Your hook has fallen into the water and a small-ish fish worth  ' + x + ' silver grabbed on. You have sold the fish.')
message.channel.send('You have ' + DBPL[ID + "bait"] + ' bait remaining.')
if(y > 100) {
var z = generateRandomNum(50)
var e = generateRandomNum(10) + gold
var e = e * 0.05
message.channel.send('On closer inspection, you discover that this fish is a very special and rare fish! As you sell it, you get paid a bonus ' + e + ' gold!')
DBPL[ID + "gold"] = DBPL[ID + "gold"] + e

}
} else
{var x = generateRandomNum(rod) * 0.01
DBPL[ID + "cas"] = DBPL[ID + "cas"] + x;
message.channel.send('You threw your plain hook into the water. A tiny minnow worth ' + x + ' silver grabbed on. You have sold the minnow.')

}}
if(cmd === 'bal') {
message.channel.send('Your balance is ' + mon + " silver")
message.channel.send('and ' + DBPL[ID + "gold"] + ' gold.')}
    if(cmd === 'search'){
        message.channel.send('Opening a google link')
        const args = message.content.slice(9).split(" ");
        const args2 = args.join("%20");
        message.channel.send('https://www.google.com/search?q=' + args2)
    };
    if(cmd === 'sudo'){
        const args = message.content.slice(6);
        message.channel.send(args);
        message.delete()
    };
    if(cmd === 'pfp'){
if(typeof(ping) === "undefined"){
        message.channel.send("Your gorgeous PFP!")
        message.channel.send("Direct Link: " + message.author.displayAvatarURL().slice(0,-5) + "?size=4096")} else {message.channel.send("Their gorgeous PFP!")
message.channel.send("Direct Link: " + ping.displayAvatarURL().slice(0,-5) + "?size=4096")}
    };
    if(cmd === 'idea'){
        const owner = "718186519860346963"
        const args = message.content.slice(6);
        message.channel.send("Idea sent!")
        var mesg = message.author.username + "#" + message.author.discriminator + ":" + args
        client.users.cache.get(owner).send(mesg)
    };
    if(cmd === 'join'){
        message.channel.send("My home is at https://discord.gg/ACUbUKJAsk")
    };
    if(cmd === 'invite'){
        message.channel.send("Add me to your server at https://discord.com/api/oauth2/authorize?client_id=768890121948495893&permissions=2081160439&scope=bot")
    };
    if(cmd === 'qr'){
        message.channel.send(client.guilds.cache.size + " servers found containing Condensed. Bot has been up since October 22, 2020.")
        message.channel.send("Condensed is an open-source discord bot made by Gamerweb.")
        message.channel.send("Copyleft 2014 - 2021 Gamerweb Inc")
    };
    if(cmd === 'bug'){
        if(tmout2 < 1){
        message.channel.send("Bug has been reported.")
        const args = message.content.slice(5);
        client.channels.cache.get("830353850950877204").send(args)
        tmout2 = 120
        } else {
            message.channel.send("Sorry, but bug reports can only be done every 2 minutes. Please wait " + tmout2 + " seconds before using that command again.")
        }
    };
    if(cmd === "swear") {
        if(message.member.hasPermission('MANAGE_MESSAGES')){
if(DBPL[guiID + "bfilt"] == 0) {
message.channel.send("Bad words filter is now OFF.")
DBPL[guiID + "bfilt"] = 1
} else {
message.channel.send("Bad words filter is now ON.")
DBPL[guiID + "bfilt"] = 0}

        } else {
            message.channel.send('You dont have the sufficient permissions')
        }
    };
    if(cmd === "maxwarn") {
        if(message.member.hasPermission('KICK_MEMBERS')){
DBPL[guiID + "maxWarn"] = poing;
message.channel.send("The maximum warnings before an automatic ban is now " + poing + ". If this value is below 1 or not an integer, auto-bans are disabled.")

        } else {
            message.channel.send('You dont have the sufficient permissions')
        }
    };
    if(cmd === "pardon") {
        if(message.member.hasPermission('BAN_MEMBERS')){
if(typeof(ping) === "object") {
var kickmem = message.guild.members.cache.get(ping.id)
var victimperm = kickmem.roles.highest.position
var auth = message.guild.members.cache.get(message.author.id)
var authperm = auth.roles.highest.position
if(authperm > victimperm) {
var warns = DBPL[loID + "WARN"]
if(isNaN(warns)) {
DBPL[loID + "WARN"] = 0;
maxWarn = 0
}
DBPL[loID + "WARN"] = 0
var reason = args.slice(0).join(" ")

client.users.cache.get(ping.id).send('You have been pardoned by ' + message.guild.name + " for " + reason + ".")
message.channel.send(ping.username + "#" + ping.discriminator + " has been pardoned.")

 } else {message.channel.send("You cannot warn that member.")}} else {message.channel.send("Please specify a member.")}
        } else {
            message.channel.send('You dont have the sufficient permissions')
        }
    };
    if(cmd === "warn") {
        if(message.member.hasPermission('BAN_MEMBERS')){
if(typeof(ping) === "object") {
var kickmem = message.guild.members.cache.get(ping.id)
var victimperm = kickmem.roles.highest.position
var auth = message.guild.members.cache.get(message.author.id)
var authperm = auth.roles.highest.position
if(authperm > victimperm) {
var warns = DBPL[loID + "WARN"]
if(isNaN(warns)) {
DBPL[loID + "WARN"] = 0;
maxWarn = 0
}
DBPL[loID + "WARN"] += 1
var reason = args.slice(0).join(" ")

client.users.cache.get(ping.id).send('You have recieved a warning from ' + message.guild.name + " for " + reason + ". You now have " + DBPL[loID + "WARN"] + " warnings.")
if(DBPL[loID + "WARN"] == DBPL[guiID + "maxWarn"]) {
client.users.cache.get(ping.id).send('You have recieved too many warnings from ' + message.guild.name + " and have been automatically banned.")
kickmem.ban()}
message.channel.send(ping.username + "#" + ping.discriminator + " has been warned.")

 } else {message.channel.send("You cannot warn that member.")}} else {message.channel.send("Please specify a member.")}
        } else {
            message.channel.send('You dont have the sufficient permissions')
        }
    };
    if(cmd === "ban") {
        if(message.member.hasPermission('BAN_MEMBERS')){
if(typeof(ping) === "object") {
var kickmem = message.guild.members.cache.get(ping.id)
var victimperm = kickmem.roles.highest.position
var auth = message.guild.members.cache.get(message.author.id)
var authperm = auth.roles.highest.position
if(authperm > victimperm) {
            message.channel.send("It hurts to say goodbye.")
client.users.cache.get(ping.id).send('You have been banned permanently from ' + message.guild.name)
message.channel.send(ping.username + "#" + ping.discriminator + " has been banned.")
            kickmem.ban()} else {message.channel.send("You cannot ban that member.")}} else {message.channel.send("Please specify a member.")}
        } else {
            message.channel.send('You dont have the sufficient permissions')
        }
    };
    if(cmd === "kick") {
        if(message.member.hasPermission('KICK_MEMBERS')){
if(typeof(ping) === "object") {
var kickmem = message.guild.members.cache.get(ping.id)
var victimperm = kickmem.roles.highest.position
var auth = message.guild.members.cache.get(message.author.id)
var authperm = auth.roles.highest.position
if(authperm > victimperm) {
            message.channel.send("It hurts to say goodbye.")
client.users.cache.get(ping.id).send('You have been kicked from ' + message.guild.name)
message.channel.send(ping.username + "#" + ping.discriminator + " has been kicked.")
            kickmem.kick()} else {message.channel.send("You cannot kick that member.")}} else {message.channel.send("Please specify a member.")}
        } else {
            message.channel.send('You dont have the sufficient permissions')
        }
    };
    if(cmd === "leave") {
        if(message.member.hasPermission('MANAGE_GUILD')){
            message.channel.send("It hurts to say goodbye,,,")
            message.guild.leave()
        } else {
            message.channel.send('No, you need the MANAGE_GUILD permission.')
        }
    };
    if(cmd === "prune") {
        if(message.member.hasPermission("MANAGE_MESSAGES")){
            args = message.content.slice(8);
            if(args > 0 && args < 100){
                message.channel.bulkDelete(args)
                message.delete()
            } else {
                message.channel.send("Argument 1 must be between 0 and 100.")
            }
        } else {
            message.channel.send("Sorry, but you must have the MANAGE_MESSAGES permission.")
        }
    }
    if(cmd === 'advert'){
        if(message.member.hasPermission('MANAGE_GUILD')){
            if(tmout < 1){
            message.channel.send("Advertised your server.");
            message.channel.createInvite({
              maxAge: 0,
              maxUses: 0
            })
            .then(invite => client.channels.cache.get(advert).send(`${invite}`))
            .catch(console.error);
            tmout = 1200
        } else {
            message.channel.send("Sorry, but you must wait " + tmout + " seconds before using that command. Advertisements can only be done once every 20 minutes.")
        }
        } else {
            message.channel.send("Sorry, but you don't have permission to use that command. You must have the MANAGE GUILD permission.")
        }
    };
    if(cmd === 'meme'){
var length = fs.readdirSync('./memes').length
        var i = generateRandomNum(length + 1)
message.channel.send("***m e m e***", { files: ["./memes/" + i + ".jpg"] });
    }}
})
