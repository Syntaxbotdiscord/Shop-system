const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});



client.on('ready', async () => {
    console.log(`${client.user.username} has logged in.`);
    client.user.setActivity('--help|Em-Store', {type: 'LISTENING'});
});



client.login(process.env.BOT_TOKEN);


client.on('message', message => {
     if (message.content === "--help") {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **--id**  ' ,' **معلومــات عــن حســابــك** ')
.addField('     **--server** ' ,' ** معلومات عن السيرفر**')
.addField('     **--avatar** ' , '**صورتك في الدسكورد أو صورة الشخص المذكور**')
.addField('     **--kick ** ' ,' ** للطرد  ** ')
.addField('     **--ban** ' , '**لـ اعطاء بان للعضو** ')
.addField('     **--bc ** ' ,' ** للبرودكاست ** ')
.addField('     **--clear** ' , '**لـ مسح الشات** ')
.addField('للأستفسار أو الرد على أسئلتكم وأفكـــاركم كلمني على الديسكورد ' , '**!_ٍٍٍ"Mrzizx"#5157**')
.setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
});




































//avatar

client.on('message', message => {
    if (message.content.startsWith("--avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});













//server script
const prefix = ("--");
client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });












client.on('message', message => {
if (message.content.startsWith("--kick")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.kick("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء كيك الى العضو  ");
};
});

















client.on('message', message => {
              if(!message.channel.guild) return;
    var prefix = "--";
    if(message.content.startsWith('--bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "S Bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
       let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {	
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('Server', message.guild.name)
       .addField('Sender', message.author.username)
       .addField('Message', args)
       .setImage("https://cdn.discordapp.com/attachments/462788140134957057/462995755586682891/raser4xd.png")
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });
















client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});
  


















client.on('message', async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let args = message.content.split(" ");
  let command = args[0];

  if(message.content.startsWith(prefix + "clear")) {
    if(!message.member.hasPermission("MANAGEP_MESSAGES")) return message.reply('**انت لا تملك الخصائص الكافية.**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!args[1]) {
      var stop = true;
      var msg = parseInt(100);

      stop = false;
      setTimeout(() => {
        stop = true;
      },3005);
      setInterval(() => {
        if(stop === true) return;
        message.channel.fetchMessages({
          limit: msg
        }).then(m => {
          message.channel.bulkDelete(msg).then(() => {
            message.channel.send(`${message.author},\n\`\`\`تم مسح الرسائل بنجاح\`\`\``).then(msg => {
              msg.delete(3000);
            });
          });
        });
      },1000);
    } else if(args[1]) {
      if(args[1] <= 100) {
          message.channel.fetchMessages({
              limit: msg
          }).then(m => {
              message.channel.bulkDelete(m).then(() => {
                  message.channel.send(`${message.author},\n\`\`\`تم مسح الرسائل بنجاح\`\`\``).then(msg => {
              msg.delete(3000);
                  });
              });
          });
      } else if(args[1] <= 200) {
        stop = true;
        setTimeout(() => {
          stop = false;
        },2001);
        setInterval(() => {
          if(stop === true) return;
          message.channel.fetchMessages({
            limit: msg
          }).then(m => {
            message.channel.bulkDelete(m).then(() => {
                message.channel.send(`${message.author},\n\`\`\`تم مسح الرسائل بنجاح\`\`\``).then(msg => {
              msg.delete(3000);
                  });
            });
          });
        },1000);
      } else if(args[1] <= 300) {
        stop = true;
        setTimeout(() => {
          stop = false;
        },2001);
        setInterval(() => {
          if(stop === true) return;
          message.channel.fetchMessages({
            limit: msg
          }).then(m => {
            message.channel.bulkDelete(m).then(() => {
            message.channel.send(`${message.author},\n\`\`\`تم مسح الرسائل بنجاح\`\`\``).then(msg => {
              msg.delete(3000);
                  });
            });
          });
        });
      }
    }
  }
});

























client.on('message', message => {
  var prefix = '--';
  
  if (message.content.startsWith(prefix + "id")) {
  if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات :x:`);
   message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
    .setColor("!0a0909")
    .setAuthor(message.author.username, message.author.avatarURL) 
.addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
.addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.addField(': عدد الدعوات', inviteCount,false)
.setFooter("-")  
    message.channel.sendEmbed(id);
})
}       
});





















client.on('guildMemberAdd', member => {
    let codes = member.guild.roles.find(r => r.name == "member");
    member.addRole(codes);
})




