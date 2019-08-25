//Vars:
var Discord = require('discord.js')
var fs = require('fs');

module.exports.run = async (bot, message, args) => {
 let dbbotnick32 = JSON.parse(fs.readFileSync("./db.json", "utf8"))
var channel
if(dbbotnick32[message.guild.id]){
channel = message.guild.channels.find(x => x.id ==dbbotnick32[message.guild.id].anuncioc)
} else {
return message.channel.send(":x: **|** Esta guilda não definiu nenhum canal de anúncio, se você for um integrante da staff digite: \n **.configs/config** _anunciarc_ <ID DO CANAL>\n Obrigada desde já!")
}
  if(channel){
    if(channel.type == 'voice') return message.reply("MEU DEUS. ENTENDA VOCÊ Não pode me fazer FALAR EM UM CANAL DE VOZ USANDO MENSAGENS, defina um canal de texto")
  }
if(!channel) return message.channel.send(":x: **|** Esta guilda não definiu nenhum canal de anúncio, se você for um integrante da staff digite: \n **.configs/config** _anunciarc_ <ID DO CANAL>\n Obrigada desde já!")
  if(!dbbotnick32[message.guild.id]) return message.channel.send(":x: **|** Esta guilda não definiu nenhum canal de anúncio, se você for um integrante da staff digite: \n **.configs/config** _anunciarc_ <ID DO CANAL>\n Obrigada desde já!")
if(!args[0]) return message.reply("DEFINA ARGUMENTO! \n**💡 DICA PARA A VIDA: Você pode usar {everyone} ou {here} para menções naquele canal :wink:**")
if(!dbbotnick32[message.guild.id].anuncioc) return message.channel.send(":x: **|** Esta guilda não definiu nenhum canal de anúncio, se você for um integrante da staff digite: \n **.configs/config** _anunciarc_ <ID DO CANAL>\n Obrigada desde já!")

if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("😦 | Desculpe, você não pode executar esta ação porque seu nível neste servidor não alcança os requisitos para usar o comando.\n> Requer permissão nomeada de: `ADMINISTRADOR.`");
    
if(args.join(" ").includes("{everyone}")) {
var embed = new Discord.RichEmbed()
.setColor('#00ffff')
.setAuthor("Anúncio por: "+message.author.tag, message.author.displayAvatarURL)
.setDescription("**Conteúdo**: \n"+args.join(" ").replace("{everyone}", ''))
.setTimestamp()
.setFooter("Data do anúncio:")
 channel.send(embed).catch(error => message.reply(":frowning: **-** Que pena... Algo falhou:\nAqui está uma hierarquia de problemas, veja qual se encaixa mais e conserte!\n`[Falta de permissão de falar no canal de anúncio],`\n[`Canal removido`]"))
 channel.send("@everyone").catch(error => message.reply(":frowning: **-** Que pena... Algo falhou:\nAqui está uma hierarquia de problemas, veja qual se encaixa mais e conserte!\n`[Falta de permissão de falar no canal de anúncio],`\n[`Canal removido`]"))
}
if(args.join(" ").includes("{here}")) {
var embed = new Discord.RichEmbed()
.setColor('#00ffff')
.setAuthor("Anúncio por: "+message.author.tag, message.author.displayAvatarURL)
.setDescription("**Conteúdo**: \n"+args.join(" ").replace("{here}", ''))
.setTimestamp()
.setFooter("Data do anúncio:")
 channel.send(embed).catch(error => message.reply(":frowning: **-** Que pena... Algo falhou:\nAqui está uma hierarquia de problemas, veja qual se encaixa mais e conserte!\n`[Falta de permissão de falar no canal de anúncio],`\n[`Canal removido`]"))
 channel.send("@here").catch(error =>  message.reply(":frowning: **-** Que pena... Algo falhou:\nAqui está uma hierarquia de problemas, veja qual se encaixa mais e conserte!\n`[Falta de permissão de falar no canal de anúncio],`\n[`Canal removido`]"))
}
if(!args.join(" ").includes("{everyone}")) {
if(!args.join(" ").includes("{here}")) {

var embed = new Discord.RichEmbed()
.setColor('#00ffff')
.setAuthor("Anúncio por: "+message.author.tag, message.author.displayAvatarURL)
.setDescription("**Conteúdo**: \n"+args.join(" "))
.setTimestamp()
.setFooter("Data do anúncio:")
 channel.send(embed).catch(error =>  message.reply(":frowning: **-** Que pena... Algo falhou:\nAqui está uma hierarquia de problemas, veja qual se encaixa mais e conserte!\n`[Falta de permissão de falar no canal de anúncio],`\n[`Canal removido`]"))
}
}
};
//Vamos definir as aliases e o nome da função.
module.exports.config = {
    name: "anunciar",
    aliases: []
}
