//Vars:
var Discord = require('discord.js');
var fs = require('fs');
//Programação:
module.exports.run = async (bot, message, args) => {
 if (message.mentions.users.first()) {
         var userapelido = message.guild.member(message.mentions.users.first()).nickname
var u = message.mentions.users.first().tag  
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
      u = message.author.tag
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
    u = mesage.tag
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

 u = message.guild.members.find(x => x.displayName == `${args.join(" ")}`).user.tag
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
 u = message.guild.members.find(x => x.user.tag == args.join(" ")).user.tag
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
 u = message.guild.members.find(x => x.displayName.includes(args.join(" "))).user.tag
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
    let embed = new Discord.RichEmbed()
    .setColor('GOLD')
    .setDescription(`**📥 Baixe clicando [aqui](${userfoto}).**`)
    .setImage(userfoto)
    .setFooter("Avatar de: "+u, userfoto)
   return message.channel.send(embed)

};
//Encerrado, vamos definir as aliases e o nome da função.
module.exports.config = {
    name: "avatar",
    aliases: ["pfp", "profilepicture", "fotodeperfil", "pp"]
}