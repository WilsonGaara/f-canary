const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

     if (message.mentions.users.first()) {
         var userapelido = message.guild.member(message.mentions.users.first()).nickname
var us = message.mentions.users.first();
      var user = message.mentions.users.first().username;
      var userfoto = message.mentions.users.first().displayAvatarURL;
    var userstatus = message.mentions.users.first().presence.status;
    var usertag = message.mentions.users.first().tag;
    var usercolorole = message.guild.member(message.mentions.users.first()).displayHexColor;
    var usercriado = message.mentions.users.first().createdTimestamp;
    var userid = message.mentions.users.first().id;
  var game2 = message.mentions.users.first().presence.game;
  
   
   
   
  var userentrou = message.guild.member(message.mentions.users.first().id).joinedTimestamp;
  var usercargo = message.guild.member(message.mentions.users.first().id).roles;
  var userbot = message.mentions.users.first().bot;
   var servidores = bot.guilds.filter(a => a.members.get(message.mentions.users.first().id))
  var comum = servidores.map(a => a.name).join(', ')
    } else {
      us = message.author;
      user = message.author.username;
      userfoto = message.author.displayAvatarURL;
      userstatus = message.author.presence.status;
    usertag = message.author.tag;
    usercolorole = message.guild.member(message.author.id).highestRole.displayHexColor;
    usercriado = message.author.createdTimestamp;
    userid = message.author.id;
    game2 = message.author.presence.game;
     
      
      
      
      
      
      
    userentrou = message.guild.member(message.author.id).joinedTimestamp;
    usercargo = message.guild.member(message.author.id).roles;
    userapelido = message.guild.member(message.author.id).nickname
    userbot = message.author.bot;
      servidores = bot.guilds.filter(a => a.members.get(message.author.id))
       comum = servidores.map(a => a.name).join(', ')
    }
  
  
  
  
  
  
  
  
if (bot.users.get(args[0])) {
var mesage = bot.users.get(args[0])
    us = mesage;
      user = mesage.username;
      userfoto = mesage.displayAvatarURL;
      userstatus = mesage.presence.status;
    usertag = mesage.tag
    usercriado = mesage.createdTimestamp;
    userid = mesage.id;
    game2 = mesage.presence.game;
     
   // userentrou = bot.guilds.filter(a => a.members.get(userid)).joinedTimestamp;
userentrou = "BETA"
    usercargo = "BETA"
    userapelido = bot.guilds.filter(a => a.members.get(userid)).nickname
    userbot = message.bot;
  servidores = bot.guilds.filter(a => a.members.get(bot.users.get(args[0]).id))
   comum = servidores.map(a => a.name).join(', ')
 }

if(message.guild.members.find(x => x.displayName == `${args.join(" ")}`)) {

 us = message.guild.members.find(x => x.displayName == `${args.join(" ")}`).user
      user = message.guild.members.find(x => x.displayName == `${args.join(" ")}`).user.username;
      userfoto = message.guild.members.find(x => x.displayName == `${args.join(" ")}`).user.displayAvatarURL;
      userstatus = message.guild.members.find(x => x.displayName == `${args.join(" ")}`).presence.status;
    usertag = message.guild.members.find(x => x.displayName == `${args.join(" ")}`).user.tag;
    usercolorole = message.guild.members.find(x => x.displayName == `${args.join(" ")}`).highestRole.displayHexColor;
    usercriado = message.guild.members.find(x => x.displayName == `${args.join(" ")}`).user.createdTimestamp;
    userid = message.guild.members.find(x => x.displayName == `${args.join(" ")}`).id;
    game2 = message.guild.members.find(x => x.displayName == `${args.join(" ")}`).presence.game;
     
    
      
    userentrou = message.guild.member(message.guild.members.find(x => x.displayName == `${args.join(" ")}`).id).joinedTimestamp;
    usercargo = message.guild.member(message.guild.members.find(x => x.displayName == `${args.join(" ")}`).id).roles;
    userapelido = message.guild.member(message.guild.members.find(x => x.displayName == `${args.join(" ")}`).id).nickname
    userbot = message.guild.members.find(x => x.displayName == `${args.join(" ")}`).bot;
      servidores = bot.guilds.filter(a => a.members.get(message.guild.members.find(x => x.displayName == `${args.join(" ")}`).id))
       comum = servidores.map(a => a.name).join(', ')


}
if(args.join(" ")){
  if(message.guild.members.find(x => x.user.tag == args.join(" "))) {
 us = message.guild.members.find(x => x.user.tag == args.join(" ")).user
      user = message.guild.members.find(x => x.user.tag == args.join(" ")).user.username;
      userfoto = message.guild.members.find(x => x.user.tag == args.join(" ")).user.displayAvatarURL;
      userstatus = message.guild.members.find(x => x.user.tag == args.join(" ")).presence.status;
    usertag = message.guild.members.find(x => x.user.tag == args.join(" ")).user.tag;
    usercolorole = message.guild.members.find(x => x.user.tag == args.join(" ")).highestRole.displayHexColor;
    usercriado = message.guild.members.find(x => x.user.tag == args.join(" ")).user.createdTimestamp;
    userid = message.guild.members.find(x => x.user.tag == args.join(" ")).id;
    game2 = message.guild.members.find(x => x.user.tag == args.join(" ")).presence.game;
     
    
      
    userentrou = message.guild.member(message.guild.members.find(x => x.user.tag == args.join(" ")).id).joinedTimestamp;
    usercargo = message.guild.member(message.guild.members.find(x => x.user.tag == args.join(" ")).id).roles;
    userapelido = message.guild.member(message.guild.members.find(x => x.user.tag == args.join(" ")).id).nickname
    userbot =message.guild.members.find(x => x.user.tag == args.join(" ")).bot;
      servidores = bot.guilds.filter(a => a.members.get(message.guild.members.find(x => x.user.tag == args.join(" ")).id))
       comum = servidores.map(a => a.name).join(', ')


  }
   if(message.guild.members.find(x => x.displayName.includes(args.join(" ")))) {
 us = message.guild.members.find(x => x.displayName.includes(args.join(" "))).user
      user = message.guild.members.find(x => x.displayName.includes(args.join(" "))).user.username;
      userfoto = message.guild.members.find(x => x.displayName.includes(args.join(" "))).user.displayAvatarURL;
      userstatus = message.guild.members.find(x => x.displayName.includes(args.join(" "))).presence.status;
    usertag = message.guild.members.find(x => x.displayName.includes(args.join(" "))).user.tag;
    usercolorole = message.guild.members.find(x => x.displayName.includes(args.join(" "))).highestRole.displayHexColor;
    usercriado = message.guild.members.find(x => x.displayName.includes(args.join(" "))).user.createdTimestamp;
    userid = message.guild.members.find(x => x.displayName.includes(args.join(" "))).id;
    game2 = message.guild.members.find(x => x.displayName.includes(args.join(" "))).presence.game;
     
    
      
    userentrou = message.guild.member(message.guild.members.find(x => x.displayName.includes(args.join(" "))).id).joinedTimestamp;
    usercargo = message.guild.member(message.guild.members.find(x => x.displayName.includes(args.join(" "))).id).roles;
    userapelido = message.guild.member(message.guild.members.find(x => x.displayName.includes(args.join(" "))).id).nickname
    userbot =message.guild.members.find(x => x.displayName.includes(args.join(" "))).bot;
      servidores = bot.guilds.filter(a => a.members.get(message.guild.members.find(x => x.displayName.includes(args.join(" "))).id))
       comum = servidores.map(a => a.name).join(', ')
   }

  }
var user = us
  
    if (user.presence.game && user.presence.game.name === 'Spotify' && user.presence.game.type === 2) {

            let trackIMG = user.presence.game.assets.largeImageURL;
            let trackURL = `https://open.spotify.com/track/${user.presence.game.syncID}`;
            let trackName = user.presence.game.details;
            let trackAuthor = user.presence.game.state;
            let trackAlbum = user.presence.game.assets.largeText;

            const embed = new Discord.RichEmbed()
            .setAuthor(`Spotify`, `https://cdn.discordapp.com/emojis/408668371039682560.png`)
            .setColor("BLUE")
            .setImage(trackIMG)
            .addField('🎶 Música: ', trackName, true)
            .addField('📔 Álbum:', "**"+trackAlbum+"**", true)
            .addField('🎤 Autor: ', "👤 | `"+trackAuthor+"`", true)
            .addField('🎵 Ouça no Spotify: ', `[Clique aqui para se vincular!](${trackURL})`, false)
            .setFooter('Ouvinte: '+user.tag, 'https://hotemoji.com/images/dl/d/headphone-emoji-by-twitter.png')
            //.setFooter("Continue sendo tão incrível quanto é!", "https://cdn.discordapp.com/emojis/501512019141459978.png?v=1")

            message.channel.send(embed);
    

    } else {
        message.channel.send(':x: | **Oopsi, dupsi! - O usuário não está ouvindo Spotify! - **')
    }
}

module.exports.config = {
    name: "spotify",
  aliases: ["spotif"]
}