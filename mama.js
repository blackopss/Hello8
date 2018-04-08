
const Discord = require('discord.js');
const client = new Discord.Client();
const child_process = require("child_process");
const adminprefix = "$";
const devs = ['343383616895713290'];
const request = require('request');
const fs = require('fs');

client.on('ready', () => {
    console.log('I am ready!');
    console.log('By Spyro');
	
});    


client.login(process.env.BOT_TOKEN);





client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else     
    if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done :>`)
  return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
} else
    if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else     
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
    if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
        console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`⚠️ Bot restarting... ⚠️`);
        console.log("===============================================\n\n");
        client.destroy();
              child_process.fork(__dirname + "/bot.js");
        console.log(`Bot Successfully Restarted`);
    }
  
  });



client.on('message', message => {
if(message.content == adminprefix + 'bot') {
if (!message.channel.guild) return message.reply('** This command only for servers **');    
message.channel.send({
embed: new Discord.RichEmbed()
.addField('Uptime', timeCon(process.uptime()), true)
.addField('RAM Usage', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
.addField('Guild Count', client.guilds.size, true)
.addField("**Servers:**" , client.guilds.size)
.addField("**Users:**", client.users.size)
.addField("**channels:**", client.channels.size)
})
}
});

function timeCon(time) {
let days = Math.floor(time % 31536000 / 86400)
let hours = Math.floor(time % 31536000 % 86400 / 3600)
let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
days = days > 9 ? days : '0' + days
hours = hours > 9 ? hours : '0' + hours
minutes = minutes > 9 ? minutes : '0' + minutes
seconds = seconds > 9 ? seconds : '0' + seconds
return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}


client.on("message", message => {
	
      if(message.content.startsWith(adminprefix + 'id')) {
	var year = message.author.createdAt.getFullYear()
        var month = message.author.createdAt.getMonth()
        var day = message.author.createdAt.getDate()
        var men = message.mentions.users.first();  
        let args = message.content.split(' ').slice(1).join(' ');
        if (args == '') {
        var z = message.author;
        }else {
        var z = message.mentions.users.first();
        }
        
        let d = z.createdAt;          
        let n = d.toLocaleString();   
        let x;                       
        let y;                        
        
        if (z.presence.game !== null) {
        y = `${z.presence.game.name}`;
        } else {
        y = "Nothing";
        }
        if (z.bot) {
        var w = 'Bot';
        }else {
        var w = 'Human';
if(!message.channel.guild) return message.reply('**:x: Sorry This Command is Only For Servers **');         
      const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setThumbnail(`${z.avatarURL}`)
        .setFooter(message.author.username, message.author.avatarURL)
        .setTimestamp()
        .addField(':cloud_tornado:  | Name:',`**<@` + `${z.id}` + `>**`, true)
        .addField('📆 | Created At: ', "**" + year + "-"+ month +"-"+ day + "**", true)
        .addField('🤖 | User:',"**"+ w + "**",true)    
        .addField("⌚ | Joined In", "**" + message.member.joinedAt.toLocaleString() + "**", true)   
        message.channel.send({embed});
            if (!messsage) return message.reply('**Please Provide A Mention  ❌ **').catch(console.error);
	}
	}
});




client.on('message', message => {
  var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")

                                if(!message.channel.guild) return;
                        if (message.content === adminprefix + ('ping')) 
                        
message.channel.sendMessage('**Pinging Wait .........    **').then((message)=> {                                                                                 
  message.edit(embed)
                            
                        })

});




   
  
client.on('message', message => {
   if (message.content.startsWith(adminprefix + "clear")) {
          if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **You Need `Manage Messages` Permission**');
          var msg;
          msg = parseInt();
          
          message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
          message.channel.sendMessage('```Deleting Bad Wods```',).then(msg => {msg.delete(3000)
        })
   }
});

client.on('message', message => {
if(message.content.split(' ')[0] == adminprefix + 'bc') {
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("⚠ | ** You Don't Have Permissons**");
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
        if (!args[1]) {
    message.channel.send(`**${adminprefix}bc <message>**`);
    return;
    }
            message.guild.members.forEach(m => {
                var bc = new Discord.RichEmbed()
                .setThumbnail(message.guild.iconURL)
                .setFooter(`» Message By : ${message.author.username}#${message.author.discriminator}`)
                .setDescription(args)
                .setColor('RANDOM')
                // m.send(`[${m}]`);
                m.send({embed: bc}).catch(err => {console.log("[Broadcast] Couldn't send message to this user because he's closing his DM!")});
            });
            message.channel.send("**:loudspeaker: | Sending Broadcast ......**");
        }
        }
});

client.on('message', message => {
if (message.content === adminprefix + "server") {
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();

    const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
    const days = millis / 1000 / 60 / 60 / 24;
    let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
    var embed  = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField("**🆔 Server ID**", "**"+message.guild.id+"**",true)
    .addField("**👑 Server Owner**", "**"+message.guild.owner+"**" ,true)
    .addField("**🌍 Region**" , "**"+message.guild.region+"**",true)
    .addField('**💬 Text Channels**',`**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`,true)
    .addField("**📣 Voice Channels**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `,true)
    .addField("**🤔 Server Opened In**", ` ** [ ${days.toFixed(0)} ] ** Day ` ,true)
    .addField("**👔 Roles**",`**[${message.guild.roles.size}]** Role `,true)
    .addField("**💠 Verification Level**", ` ** [ ${verificationLevels[message.guild.verificationLevel]} ] ** `,true)
    
    .addField("👥Members Count",`**${message.guild.memberCount}**`)
    .setThumbnail(message.guild.iconURL)
    .setColor('RANDOM')
    message.channel.sendEmbed(embed)
}
});


client.on('message', message => {
	if (message.content.startsWith("b*id")) {
		if(!message.channel.guild) return;
		let args = message.content.split(' ').slice(1).join(' ');


        let defineduser = '';
        if (!args[1]) { 
            defineduser = message.author;
        } else { 
            let firstMentioned = message.mentions.users.first();
            defineduser = firstMentioned;
        }

     
     
const w = [`./assest/fff.png`];
var Canvas = require('canvas')
var jimp = require('jimp')

         const millis = new Date().getTime() - defineduser.createdAt.getTime();
const now = new Date();
const stats2 = ['online', 'Low', 'Medium', 'Insane'];
const days = millis / 1000 / 60 / 60 / 24;
              let time = `${(defineduser.createdAt)}`
              
        let Image = Canvas.Image,
            canvas = new Canvas(300, 300),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
  
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 300, 300);

})
   var mentionned = message.mentions.users.first();

    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;
          
      }

                let url = defineduser.displayAvatarURL.endsWith(".webp") ? defineduser.displayAvatarURL.slice(20, 20) + ".png" : defineduser.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.drawImage(ava, 35 , 54, 70, 70);
                                              var time2;
      if(mentionned){
          var time2 = `${(message.mentions.users.first.joinedAt)}`;
      } else {
          var time2 = `${(message.member.joinedAt)}`;
          
      }  
                           var status;
    if (defineduser.presence.status === 'online') {
        status = 'Online';
    } else if (defineduser.presence.status === 'dnd') {
        status = 'Dnd';
    } else if (defineduser.presence.status === 'idle') {
        status = 'Idle';
    } else if (defineduser.presence.status === 'offline') {
        status = 'Invisible';
    }
    
                        ctx.font = '15px Bold';
                        ctx.fontSize = '25px';
                        ctx.fillStyle = "Arial";
                        ctx.textAlign = "center";
                        ctx.fillText(status, 151.00 , 120 );
                        
    
                       
                        ctx.font = '20px Bold';
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "Arial";
                        ctx.textAlign = "7c7c7c";
                        ctx.fillText(`${defineduser.username}`, 190.50 , 89);


                        ctx.font = '10px Bold';
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "Arial";
                        ctx.textAlign = "7c7c7c";
                        ctx.fillText(`#${defineduser.discriminator}`, 230.50  , 120);

                        var time2;
      if(mentionned){
          var time2 = `${(message.mentions.users.first.joinedAt)}`;
      } else {
          var time2 = `${(message.member.joinedAt)}`;
          
      }
           
                                                //wl
                       ctx.font = '15px Bold';
                        ctx.fontSize = '25px';
                        ctx.fillStyle = "Arial";
                        ctx.textAlign = "center";
                        ctx.fillText(time2, 150 , 242 );
                        
                        
                        var time3;
      if(mentionned){
          var time3 = `${(message.mentions.users.first.createdAt)}`;
      } else {
          var time3 = `${(message.member.createdAt)}`;
          
      }
           
                                                //wl
                        ctx.font = '15px Bold';
                        ctx.fontSize = '25px';
                        ctx.fillStyle = "Arial";
                        ctx.textAlign = "center";
                        ctx.fillText(time, 150 , 185);
			    
			    
                        
message.channel.sendFile(canvas.toBuffer())

            // when someone calls this command, it also adds 1 earlier at the same, but since this is fetching the previous value, we need to add 1 to the answer, even thought it will be updated
            //by:omar_9897
        })
    })




}

})

client.on('message', message => {
    if (message.content === adminprefix + "bac") {
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("⚠ | ** You Don't Have Permissons**");
            if (message.author.id === client.user.id) return;
            let args = message.content.split(' ').slice(1).join(' ');

    
    
    const w = [`./assest/fff.png`];
    var Canvas = require('canvas')
    var jimp = require('jimp')
    
    const now = new Date();
                  
            let Image = Canvas.Image,
                canvas = new Canvas(300, 300),
                ctx = canvas.getContext('2d');
            ctx.patternQuality = 'bilinear';
            ctx.filter = 'bilinear';
            ctx.antialias = 'subpixel';
      
                let BG = Canvas.Image;
                let ground = new Image;
                ground.src = Background;
                ctx.drawImage(ground, 0, 0, 300, 300);
    
    
       
    
                    let url = defineduser.displayAvatarURL.endsWith(".webp") ? defineduser.displayAvatarURL.slice(20, 20) + ".png" : defineduser.displayAvatarURL;
                    jimp.read(url, (err, ava) => {
                        if (err) return console.log(err);
                        ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                            if (err) return console.log(err);
    
                            let Avatar = Canvas.Image;
                            let ava = new Avatar;
                            ava.src = buf;
                            ctx.drawImage(ava, 35 , 54, 70, 70);
         
                              
        
                            ctx.font = '15px Bold';
                            ctx.fontSize = '25px';
                            ctx.fillStyle = "Arial";
                            ctx.textAlign = "center";
                            ctx.fillText('Message :', 80 , 100 );
                            
        
                           
                            ctx.font = '20px Bold';
                            ctx.fontSize = '20px';
                            ctx.fillStyle = "Arial";
                            ctx.textAlign = "7c7c7c";
                            ctx.fillText(`args`, 190.50 , 89);
    
                                message.channel.sendFile(canvas.toBuffer());
                        })
                    })
                }
            });



client.on('message', message => {
    
   if (message.content.startsWith("b**id")) {

if(!message.channel.guild) return;

let args = message.content.split(' ').slice(1).join(' ');

        let defineduser = '';
        if (!args[1]) { 
            defineduser = message.author;
        } else { 
            let firstMentioned = message.mentions.users.first();
            defineduser = firstMentioned;
        }

const w = ['./id.png'];
var Canvas = require('canvas')
var jimp = require('jimp')

         const millis = new Date().getTime() - defineduser.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy');
const stats2 = ['online', 'Low', 'Medium', 'Insane'];
const days = millis / 1000 / 60 / 60 / 24;
          dateFormat(now, 'dddd, mmmm dS, yyyy');
              let time = `${dateFormat(defineduser.createdAt)}`
              
        let Image = Canvas.Image,
            canvas = new Canvas(300, 300),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
  
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 300, 300);

})
   var mentionned = message.mentions.users.first();

    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;
          
      }

                let url = defineduser.displayAvatarURL.endsWith(".webp") ? defineduser.displayAvatarURL.slice(20, 20) + ".png" : defineduser.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.drawImage(ava, 35 , 54, 70, 70);
                                              var time2;
      if(mentionned){
          var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
      } else {
          var time2 = `${dateFormat(message.member.joinedAt)}`;
          
      }  
                           var status;
    if (defineduser.presence.status === 'online') {
        status = 'Online';
    } else if (defineduser.presence.status === 'dnd') {
        status = 'Dnd';
    } else if (defineduser.presence.status === 'idle') {
        status = 'Idle';
    } else if (defineduser.presence.status === 'offline') {
        status = 'Invisible';
    }
    
                        ctx.font = '15px Bold';
                        ctx.fontSize = '15px';
                        ctx.fillStyle = "#7c7c7c";
                        ctx.textAlign = "center";
                        ctx.fillText(status, 151.00 , 120 );
                        
    
                       
                        ctx.font = '20px Bold';
                        ctx.fontSize = '15px';
                        ctx.fillStyle = "83.50";
                        ctx.textAlign = "7c7c7c";
                        ctx.fillText(`${defineduser.username}`, 190.50 , 89);


                        ctx.font = '15px Bold';
                        ctx.fontSize = '15px';
                        ctx.fillStyle = "83.50";
                        ctx.textAlign = "7c7c7c";
                        ctx.fillText(`#${defineduser.discriminator}`, 230.50  , 120);

                        var time2;
      if(mentionned){
          var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
      } else {
          var time2 = `${dateFormat(message.member.joinedAt)}`;
          
      }
           
                                                //wl
                        ctx.font = '15px Bold';
                        ctx.fontSize = '15px';
                        ctx.fillStyle = "#7c7c7c";
                        ctx.textAlign = "center";
                        ctx.fillText(time2, 150 , 242 );
                        
                        
                        var time3;
      if(mentionned){
          var time3 = `${dateFormat(message.mentions.users.first.createdAt)}`;
      } else {
          var time3 = `${dateFormat(message.member.createdAt)}`;
          
      }
           
                                                //wl
                        ctx.font = '15px Bold';
                        ctx.fontSize = '15px';
                        ctx.fillStyle = "#7c7c7c";
                        ctx.textAlign = "center";
                        ctx.fillText(time, 150 , 185);
                        
message.channel.sendFile(canvas.toBuffer())

            // when someone calls this command, it also adds 1 earlier at the same, but since this is fetching the previous value, we need to add 1 to the answer, even thought it will be updated
            //by:omar_9897
        })
    })




}

})
