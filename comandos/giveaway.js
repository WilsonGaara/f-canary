
//Vars:
var Discord = require('discord.js'); //Define que talvez usaremos discord.js nisso aqui.
var fs = require('fs'); // Define que talvez usaremos fs (controle de diretórios, pastas) aqui
var ms = require('ms');
var dbbotnick32 = JSON.parse(fs.readFileSync("./db.json", "utf8"));
 module.exports.run = async (bot, message, args, prefix) => {
   
   var args1 = args.join(" ");
if(!args1) return message.reply("Defina argumentos:\n> Exemplo: __"+prefix+"giveaway  <**Item**>__");
   // if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("😦 | Desculpe, você não pode executar esta ação porque seu nível neste servidor não alcança os requisitos para usar o comando.");
   var channel;
if(dbbotnick32[message.guild.id]){
  if(dbbotnick32[message.guild.id].anuncioc){
channel = message.guild.channels.find(x => x.id == dbbotnick32[message.guild.id].anuncioc)
  }
}
   if(!channel)return message.channel.send(":x: **|** Esta guilda não definiu nenhum canal de anúncio, se você for um integrante da staff digite: \n **PREFIXconfigs/config** _anunciarc_ <ID DO CANAL>\n Obrigada desde já!")
if(!dbbotnick32[message.guild.id])return message.channel.send(":x: **|** Esta guilda não definiu nenhum canal de anúncio, se você for um integrante da staff digite: \n **PREFIXconfigs/config** _anunciarc_ <ID DO CANAL>\n Obrigada desde já!")
if(!dbbotnick32[message.guild.id].anuncioc)return message.channel.send(":x: **|** Esta guilda não definiu nenhum canal de anúncio, se você for um integrante da staff digite: \n **PREFIXconfigs/config** _anunciarc_ <ID DO CANAL>\n Obrigada desde já!")
  message.channel.send("**LEIA**:\n:tada: | Ótimo, parabéns, você conseguiu, buut... Agora você precisa definir o tempo até eu decidir quem vou reivindicar!\n:warning: Digite cancelar se não deseja um tempo fora do padrão (`120 segundos (2minutos)`)\nVale citar que disponibilizarei o sorteio no canal pré-setado para anúncios :wink: ")
.then(() => {
 message.channel.awaitMessages(response => response.author.id === message.author.id, {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
.then((collected) => {
  collected = collected.first().content.toLowerCase()

 if(collected === "cancelar") {
message.reply("Tudo bem então...\n**Status: Definindo timer para: 120s**")
    var embed = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("🎉 **|** Giveaway, eba!")
    .setDescription("O item a ser sorteado é: `"+args1+"`\nReaja com :tada: essa mensagem para se inscrever no sorteio!\n⏰ | Tempo: `120s` (2 minutos)\nContando desde... JÁ!!!")
    .setTimestamp()
    .setFooter("Sorteio começou desde:", 'https://st2.depositphotos.com/5266903/8949/v/950/depositphotos_89495772-stock-illustration-date-and-time-icon.jpg');
channel.send(embed).then(daddy => {
daddy.react("🎉")

setTimeout(() => {

    var winnerMsg = [daddy.reactions.get("🎉").users]
if(winnerMsg.length >=2) daddy.react("🎉")
  var i = 0;
var embe = new Discord.RichEmbed()

.setColor("GREEN")
.setDescription("Temos um vencedor:\nParticipante(s):\n➡"+`${winnerMsg[Math.floor(Math.random() * winnerMsg.length)].map(a => a.username+` (**nº${i++}**)`).join(', ').replace("Assistente (**nº0**), ", "")}\n:thinking: | Uhh... O número **${Math.floor((Math.random() * `${[daddy.reactions.get("🎉").users].length + 0}`)) + 1} **ganhou... E ali está ele!\nPatrocinado por: ${message.author}\nRecompensa pra ser reivindicada... \n**${args1}**`)
daddy.edit(embe)
 
            }, 120000)
})
                         } else {

    if(collected != "cancelar")
      
if(!ms(collected)) return message.reply("Tente como esse exemplo:\n1m (um minuto)")
                           if(ms(collected) > 1200000) return message.channel.send("OPA!!! O giveaway não pode demorar mais do que 20 minutinhos.\nNão sou a melhor bot... :cry:")
        var embed = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("🎉 **|** Giveaway, eba!")
    .setDescription("O item a ser sorteado é: `"+args1+"`\nReaja com :tada: essa mensagem para se inscrever no sorteio!\n⏰ | Tempo: `"+collected+"`\nContando desde... JÁ!!!")
    .setTimestamp()
    .setFooter("Sorteio começou desde:", 'https://st2.depositphotos.com/5266903/8949/v/950/depositphotos_89495772-stock-illustration-date-and-time-icon.jpg');
channel.send(embed).then(daddy => {
daddy.react("🎉")

setTimeout(() => {

    var winnerMsg = [daddy.reactions.get("🎉").users]
if(winnerMsg.length >=2) daddy.react("🎉")
  var i = 0;
var embe = new Discord.RichEmbed()

.setColor("GREEN")
.setDescription("Temos um vencedor:\nParticipante(s):\n➡"+`${winnerMsg[Math.floor(Math.random() * winnerMsg.length)].map(a => a.username+` (**nº${i++}**)`).join(', ').replace("Assistente (**nº0**), ", "")}\n:thinking: | Uhh... O número **${Math.floor((Math.random() * `${[daddy.reactions.get("🎉").users].length + 0}`)) + 1} **ganhou... E ali está ele!\nPatrocinado por: ${message.author}\nRecompensa pra ser reivindicada... \n**${args1}**`)
daddy.edit(embe)
 
            }, ms(collected))
})
.catch(() => {
      message.channel.send(' **|** Você não digitou nada depois de 30 segundos... Decepção').then(message2 => {
        setInterval(() => {
          message2.delete()
        },7000);
      })})
  }})})}
//Encerrado, vamos definir as aliases e o nome da função.
module.exports.config = {
    name: "giveaway",
    aliases: ["sorteio"]
}
