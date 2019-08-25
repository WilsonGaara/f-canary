//Vars:
var Discord = require('discord.js');
var fs = require('fs');
//Programação:
module.exports.run = async (bot, message, args) => {
  
const moment = require('moment');
moment.locale('pt-BR');
 if (message.mentions.users.first()) {
         var userapelido = message.guild.member(message.mentions.users.first()).nickname
var us = message.mentions.users.first()
      var user = message.mentions.users.first().username
      var userfoto = message.mentions.users.first().displayAvatarURL
    var userstatus = message.mentions.users.first().presence.status
    var usertag = message.mentions.users.first().tag
    var usercolorole = message.guild.member(message.mentions.users.first()).displayHexColor
    var usercriado = message.mentions.users.first().createdTimestamp
    var userid = message.mentions.users.first().id
  var game2 = message.mentions.users.first().presence.game
  
   
   
   
  var userentrou = message.guild.member(message.mentions.users.first().id).joinedTimestamp
  var usercargo = message.guild.member(message.mentions.users.first().id).roles
  var userbot = message.mentions.users.first().bot
   var servidores = bot.guilds.filter(a => a.members.get(message.mentions.users.first().id))
  var comum = servidores.map(a => a.name).join(', ')
    } else {
      us = message.author
      user = message.author.username
      userfoto = message.author.displayAvatarURL
      userstatus = message.author.presence.status
    usertag = message.author.tag
    usercolorole = message.guild.member(message.author.id).highestRole.displayHexColor
    usercriado = message.author.createdTimestamp
    userid = message.author.id
    game2 = message.author.presence.game
     
      
      
      
      
      
      
    userentrou = message.guild.member(message.author.id).joinedTimestamp;
    usercargo = message.guild.member(message.author.id).roles;
    userapelido = message.guild.member(message.author.id).nickname
    userbot = message.author.bot;
      servidores = bot.guilds.filter(a => a.members.get(message.author.id))
       comum = servidores.map(a => a.name).join(', ')
    }
  
  
  
  
  
  
  
  
if (bot.users.get(args[0])) {
var mesage = bot.users.get(args[0])
    us = mesage
      user = mesage.username
      userfoto = mesage.displayAvatarURL
      userstatus = mesage.presence.status
    usertag = mesage.tag
    usercriado = mesage.createdTimestamp
    userid = mesage.id
    game2 = mesage.presence.game
     
   // userentrou = bot.guilds.filter(a => a.members.get(userid)).joinedTimestamp;
userentrou = "BETA"
    usercargo = "BETA"
    userapelido = bot.guilds.filter(a => a.members.get(userid)).nickname
    userbot = message.bot;
  servidores = bot.guilds.filter(a => a.members.get(bot.users.get(args[0]).id))
   comum = servidores.map(a => a.name).join(', ')
 }

if(message.guild.members.find(x => x.displayName == `${args.join(" ")}`)) {

 us = message.guild.members.find(x => x.displayName == `${args.join(" ")}`)
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
 us = message.guild.members.find(x => x.user.tag == args.join(" "))
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
 us = message.guild.members.find(x => x.displayName.includes(args.join(" ")))
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
    function stats() {
      var status = userstatus
      if  (status == "online") {
      return "<:on1:501512018256330782> Disponível"
    } else if (status == "offline") {
      return ("<:inv2:614937679720611900> Indisponível")
      } else if  (status == "dnd") {
      return ("<:dnd2:614936955167178962> Ocupado")
      } else if (status == "idle") {
      return ("<:aus2:614936022978920451> Ausente")
      }
    }
   function incrivel() {
      let status = userstatus
      if  (status == "online") {
      return "<:on1:501512018256330782>"
    } else if (status == "offline") {
      return ("<:inv2:614937679720611900>")
      } else if  (status == "dnd") {
      return ("<:dnd2:614936955167178962>")
      } else if (status == "idle") {
      return ("<:aus2:614936022978920451>")
      }
    }
  
  
  
  
  



    var cargus;

if(usercargo !== "BETA") {
if(cargus) {
 cargus = usercargo.map(u => `<@&${u.id}>`).join(", ").replace("@everyone ", "")
if(cargus.includes("@everyone")) cargus = usercargo.map(u => u.name).join(", ").replace("@everyone", "Este usuário não possui cargos além do cargo padrão nomeado de: **TODOS, ou EVERYONE**")
} else {
 cargus = usercargo.map(u => u.name).join(", ").replace("@everyone, ", "").replace("@everyone", "Este usuário não possui cargos além do cargo padrão nomeado de: **TODOS, ou EVERYONE**")
}
}
if(bot.users.get(args[0])){
  if(message.guild.member(bot.users.get(args[0]).id)) {
    usercargo = message.guild.member(bot.users.get(args[0]).id).roles
cargus = usercargo.map(u => u.name).join(", ").replace("@everyone, ", "")
     

if(cargus.includes("@everyone")) cargus = usercargo.map(u => u.name).join(", ").replace("@everyone", "Este usuário não possui cargos além do cargo padrão nomeado de: **TODOS, ou EVERYONE**")
  }

}
if(cargus === undefined){
cargus = "O usuário não está nesse servidor."
} 
    function playing(){
      var playings = game2
      if(playings != undefined){
          return playings.name;
      }else{
          return "Não detectado";
      }
  }
if(bot.users.get(args[0])){
  if(message.guild.member(bot.users.get(args[0]).id)) {
    userentrou = message.guild.member(bot.users.get(args[0])).joinedTimestamp
  }
}
var diasEntrouNoServer = moment.duration(message.createdTimestamp - userentrou).asDays()
var resp = Math.floor(diasEntrouNoServer)
const diasContaCriada = moment.duration(message.createdTimestamp - usercriado).asDays()
var respenter =moment(userentrou).format('lll') 
if(respenter == "Invalid date") {
respenter = "Não está no servidor"
}
  if(!Math.floor(diasEntrouNoServer)) {
    resp = "Não é possível calcular os"
}
var comum1
var comum2
var comum3
var qtop
var blaa
if(message.guild.member(us.id)) blaa=message.guild.member(us.id).roles.size-1
if(!message.guild.member(us.id)) blaa=0
if(comum.includes("[PROTOCOL] Friday")) {
qtop = "Ele(a) também está na minha guilda, **[venha](https://discord.gg/aHk2XPR)** também!"
} else {
qtop = "Curioso, mas nem na minha guild tá. **[Entra logo!](https://discord.gg/aHk2XPR)**"
}
  if(`${comum.length}` >= 2048){
    comum = "A quantia de servidores em comum é muito grande, é desrespeitoso criar uma inchente de mensagens pra' uma coisa tão boba como essa..."
}
  if(comum.length >= 2048){
comum = "A quantia de servidores em comum é muito grande, é desrespeitoso criar uma inchente de mensagens pra' uma coisa tão boba como essa..."
}
if(us.presence.game !== null) {
if(us.presence.game.type == 1) {

var embed3 = new Discord.RichEmbed()
.setTitle(`<:wump:614940389954027520> ${incrivel()} \`${user}\``)
.setThumbnail(userfoto)
.addField(`:satellite_orbital: Status:`, `${stats()}`)
.addField(":date: Criou a conta em:", `${moment(usercriado).format('lll')} (${Math.floor(diasContaCriada)} dias)`)
.addField(":date: Entrou aqui em:", `${respenter}\n(${resp} dias.)`)
.addField(`<:b_stream2:585881521320230942> Transmitindo:`, `[${us.presence.game.name}](${us.presence.game.url})`, true)
.addField(`:computer: ID:`, userid, true )
.addField(`:computer: Tag no Discord:`, usertag, true)
.addField(`<:livro:614941002083336212> Cargos (${blaa}):`, cargus , true)
.addField(`🖇 Servidores em comum (${bot.guilds.filter(a => a.members.get(us.id)).size}):`, "||"+qtop+'||\n`'+comum+"`")
.setColor('BLUE')
return message.channel.send(embed3)
}}
if(us.presence.game !== null) {
if(us.presence.game.type == 3) {
var embed3 = new Discord.RichEmbed()
.setTitle(`<:wump:614940389954027520> ${incrivel()} \`${user}\``)
.setThumbnail(userfoto)
.addField(`:satellite_orbital: Status:`, `${stats()}`)
.addField(":date: Criou a conta em:", `${moment(usercriado).format('lll')} (${Math.floor(diasContaCriada)} dias)`)
.addField(":date: Entrou aqui em:", `${respenter}\n(${resp} dias.)`)
.addField(`📺 Assistindo: `, `[${us.presence.game.name}](${us.presence.game.url})`, true)
.addField(`:computer: ID:`, userid, true )
.addField(`:computer: Tag no Discord:`, usertag, true)
.addField(`<:livro:614941002083336212> Cargos (${blaa}):`, cargus , true)
.addField(`🖇 Servidores em comum (${bot.guilds.filter(a => a.members.get(us.id)).size}):`, "||"+qtop+'||\n`'+comum+"`")
.setColor('BLUE')
return message.channel.send(embed3)
}}
if(us.presence.game !== null) {
if(us.presence.game.type == 2) {
var embed3 = new Discord.RichEmbed()
.setTitle(`<:wump:614940389954027520> ${incrivel()} \`${user}\``)
.setThumbnail(userfoto)
.addField(`:satellite_orbital: Status:`, `${stats()}`)
.addField(":date: Criou a conta em:", `${moment(usercriado).format('lll')} (${Math.floor(diasContaCriada)} dias)`)
.addField(":date: Entrou aqui em:", `${respenter}\n(${resp} dias.)`)
.addField(`🎵 Ouvindo: `, `[${us.presence.game.name}](${us.presence.game.url})`, true)
.addField(`:computer: ID:`, userid, true )
.addField(`:computer: Tag no Discord:`, usertag, true)
.addField(`<:livro:614941002083336212> Cargos (${blaa}):`, cargus , true)
.addField(`🖇 Servidores em comum (${bot.guilds.filter(a => a.members.get(us.id)).size}):`, "||"+qtop+'||\n`'+comum+"`")
.setColor('BLUE')
return message.channel.send(embed3)
}}
if(us.presence) {
  if(us.presence.clientStatus) {
  if(us.presence.clientStatus.mobile) {
    if(us.presence.clientStatus.desktop){
if(!us.presence.game) {

var embed1 = new Discord.RichEmbed()
.setTitle(`<:wump:614940389954027520> ${incrivel()} \`${user}\``)
.setThumbnail(userfoto)
.addField(`:satellite_orbital: Status:`, `${stats()}\n**CROSS-OVER | 📱&🖥**`)
.addField(":date: Criou a conta em:", `${moment(usercriado).format('lll')} (${Math.floor(diasContaCriada)} dias)`)
.addField(":date: Entrou aqui em:", `${respenter}\n(${resp} dias.)`)
.addField(`🎮 Jogando:`, `**Nada**`, true)
.addField(`:computer: ID:`, userid, true )
.addField(`:computer: Tag no Discord:`, usertag, true)
.addField(`<:livro:614941002083336212> Cargos (${blaa}):`, cargus , true)
.addField(`🖇 Servidores em comum (${bot.guilds.filter(a => a.members.get(us.id)).size}):`, "||"+qtop+'||\n`'+comum+"`")
.setColor('BLUE')
return message.channel.send(embed1)
}
    }
  }
  }
}
  if(us.presence){

    if(us.presence.clientStatus){
  if(us.presence.clientStatus.mobile) {
    if(us.presence.clientStatus.desktop){
if(us.presence.game) {

var embed1 = new Discord.RichEmbed()
.setTitle(`<:wump:614940389954027520> ${incrivel()} \`${user}\``)
.setThumbnail(userfoto)
.addField(`:satellite_orbital: Status:`, `${stats()}\n**CROSS-OVER | 📱&🖥**`)
.addField(":date: Criou a conta em:", `${moment(usercriado).format('lll')} (${Math.floor(diasContaCriada)} dias)`)
.addField(":date: Entrou aqui em:", `${respenter}\n(${resp} dias.)`)
.addField(`🎮 Jogando:`, `**${playing()}**`, true)
.addField(`:computer: ID:`, userid, true )
.addField(`:computer: Tag no Discord:`, usertag, true)
.addField(`<:livro:614941002083336212> Cargos (${blaa}):`, cargus , true)
.addField(`🖇 Servidores em comum (${bot.guilds.filter(a => a.members.get(us.id)).size}):`, "||"+qtop+'||\n`'+comum+"`")
.setColor('BLUE')
return message.channel.send(embed1)
}
    }
  }
    }
}
   if(us.presence){

    if(us.presence.clientStatus){
if(us.presence.clientStatus.mobile) {
if(us.presence.game) {

var embed1 = new Discord.RichEmbed()
.setTitle(`<:wump:614940389954027520> ${incrivel()} \`${user}\``)
.setThumbnail(userfoto)
.addField(`:satellite_orbital: Status:`, `${stats()}\n**No telefone 📱**`)
.addField(":date: Criou a conta em:", `${moment(usercriado).format('lll')} (${Math.floor(diasContaCriada)} dias)`)
.addField(":date: Entrou aqui em:", `${respenter}\n(${resp} dias.)`)
.addField(`🎮 Jogando:`, `**${playing()}**`, true)
.addField(`:computer: ID:`, userid, true )
.addField(`:computer: Tag no Discord:`, usertag, true)
.addField(`<:livro:614941002083336212> Cargos (${blaa}):`, cargus , true)
.addField(`🖇 Servidores em comum (${bot.guilds.filter(a => a.members.get(us.id)).size}):`, "||"+qtop+'||\n`'+comum+"`")
.setColor('BLUE')
return message.channel.send(embed1)
}
}
    }
}
     if(us.presence){

    if(us.presence.clientStatus){
  if(us.presence.clientStatus.mobile) {
var embed1 = new Discord.RichEmbed()
.setTitle(`<:wump:614940389954027520> ${incrivel()} \`${user}\``)
.setThumbnail(userfoto)
.addField(`:satellite_orbital: Status:`, `${stats()}\n**No telefone 📱**`)
.addField(":date: Criou a conta em:", `${moment(usercriado).format('lll')} (${Math.floor(diasContaCriada)} dias)`)
.addField(":date: Entrou aqui em:", `${respenter}\n(${resp} dias.)`)
.addField(`🎮 Jogando:`, `**Nada no momento**`, true)
.addField(`:computer: ID:`, userid, true )
.addField(`:computer: Tag no Discord:`, usertag, true)
.addField(`<:livro:614941002083336212> Cargos (${blaa}):`, cargus , true)
.addField(`🖇 Servidores em comum (${bot.guilds.filter(a => a.members.get(us.id)).size}):`, "||"+qtop+'||\n`'+comum+"`")
.setColor('BLUE')
return message.channel.send(embed1)

  }}
}
if(us.presence.game !== null) { 
if(us.bot == true) {
var embed = new Discord.RichEmbed()
.setTitle(`<:wump:614940389954027520> ${incrivel()} \`${user}\``)
.setThumbnail(userfoto)
.addField(`:satellite_orbital: Status:`, `${stats()}`)
.addField(":date: Criou a conta em:", `${moment(usercriado).format('lll')} (${Math.floor(diasContaCriada)} dias)`)
.addField(":date: Entrou aqui em:", `${respenter}\n(${resp} dias.)`)
.addField(`🎮 Jogando :`, `**${playing()}**`, true)
.addField(`:computer: ID:`, userid, true )
.addField(`:computer: Tag no Discord:`, usertag, true)
.addField(`<:livro:614941002083336212> Cargos (${blaa}):`, cargus , true)
.addField(`🖇 Servidores em comum (${bot.guilds.filter(a => a.members.get(us.id)).size}):`, "||"+qtop+'||\n`'+comum+"`")
.setColor('BLUE')
return message.channel.send(embed)



}
if(us.presence.game) {
  if(us.presence.game.timestamps) {
   if(us.presence.game.timestamps.end) {
var embed122 = new Discord.RichEmbed()
.setTitle(`<:wump:614940389954027520> ${incrivel()} \`${user}\``)
.setThumbnail(userfoto)
.addField(`:satellite_orbital: Status:`, `${stats()}`)
.addField(":date: Criou a conta em:", `${moment(usercriado).format('lll')} (${Math.floor(diasContaCriada)} dias)`)
.addField(":date: Entrou aqui em:", `${respenter}\n(${resp} dias.)`)
.addField(`🎮 Jogo:`, `**${playing()}**`)
.addField(`🤖 Jogo acaba em:`, `**${moment(us.presence.game.timestamps.end).startOf('minute').fromNow()}**`, true)
.addField(`:computer: ID:`, userid, true )
.addField(`:computer: Tag no Discord:`, usertag, true)
.addField(`<:livro:614941002083336212> Cargos (${blaa}):`, cargus , true)
.addField(`🖇 Servidores em comum (${bot.guilds.filter(a => a.members.get(us.id)).size}):`, "||"+qtop+'||\n`'+comum+"`")
.setColor('BLUE')
return message.channel.send(embed122)
   }

   }

}
  if(us.presence.game) {
  if(!us.presence.game.timestamps) {
    var embede = new Discord.RichEmbed()
.setTitle(`<:wump:614940389954027520> ${incrivel()} \`${user}\``)
   
.setThumbnail(userfoto)
.addField(`:satellite_orbital: Status:`, `${stats()}`)
.addField(":date: Criou a conta em:", `${moment(usercriado).format('lll')} (${Math.floor(diasContaCriada)} dias)`)
.addField(":date: Entrou aqui em:", `${respenter}\n(${resp} dias.)`)
.addField(`🎮 Jogando 📰:`, `**${playing()}**\nSem tempo irmão.`, true)
.addField(`:computer: ID:`, userid, true )
.addField(`:computer: Tag no Discord:`, usertag, true)
.addField(`<:livro:614941002083336212> Cargos (${blaa}):`, cargus , true)
.addField(`🖇 Servidores em comum (${bot.guilds.filter(a => a.members.get(us.id)).size}):`, "||"+qtop+'||\n`'+comum+"`")
.setColor('BLUE')
return message.channel.send(embede)
   }
  }

if(us.presence.game) {
  if(us.presence.game.timestamps) {
   if(us.presence.game.timestamps.start) {
var embed = new Discord.RichEmbed()
.setTitle(`<:wump:614940389954027520> ${incrivel()} \`${user}\``)

.setThumbnail(userfoto)
.addField(`:satellite_orbital: Status:`, `${stats()}`)
.addField(":date: Criou a conta em:", `${moment(usercriado).format('lll')} (${Math.floor(diasContaCriada)} dias)`)
.addField(":date: Entrou aqui em:", `${respenter}\n(${resp} dias.)`)
.addField(`🎮 Jogando 📰:`, `**${playing()}**\n${moment(us.presence.game.timestamps.start).startOf('minute').fromNow()}`, true)
.addField(`:computer: ID:`, userid, true )
.addField(`:computer: Tag no Discord:`, usertag, true)
.addField(`<:livro:614941002083336212> Cargos (${blaa}):`, cargus , true)
.addField(`🖇 Servidores em comum (${bot.guilds.filter(a => a.members.get(us.id)).size}):`, "||"+qtop+'||\n`'+comum+"`")
.setColor('BLUE')
return message.channel.send(embed)
   }
  }
}
} else {
var embed1 = new Discord.RichEmbed()
.setTitle(`<:wump:614940389954027520> ${incrivel()} \`${user}\``)
.setThumbnail(userfoto)
.addField(`:satellite_orbital: Status:`, `${stats()}`)
.addField(":date: Criou a conta em:", `${moment(usercriado).format('lll')} (${Math.floor(diasContaCriada)} dias)`)
.addField(":date: Entrou aqui em:", `${respenter}\n(${resp} dias.)`)
.addField(`🎮 Jogando:`, `**Nada no momento**`, true)
.addField(`:computer: ID:`, userid, true )
.addField(`:computer: Tag no Discord:`, usertag, true)
.addField(`<:livro:614941002083336212> Cargos (${blaa}):`, cargus , true)
.addField(`🖇 Servidores em comum (${bot.guilds.filter(a => a.members.get(us.id)).size}):`, "||"+qtop+'||\n`'+comum+"`")
.setColor('BLUE')
return message.channel.send(embed1)
};
 



  };
//Encerrado, vamos definir as aliases e o nome da função.
module.exports.config = {
    name: "userinfo",
    aliases: ["ui"]
}
