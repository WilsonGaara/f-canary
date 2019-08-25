
//Vars:
var Discord = require('discord.js');
var fs = require('fs');
//Programação:
module.exports.run = async (bot, message, args, prefix, authornick, botnick) => {
if(authornick == undefined){
 let dbbotnick = JSON.parse(fs.readFileSync("./db.json", "utf8"));

        dbbotnick[message.guild.id] = {
          dbbotnick: "Friday"
          
     }
authornick = dbbotnick[message.guild.id].dbbotnick || "Friday"
}
  	var uptime = `${bot.uptime}`;
var seg = Math.floor(uptime/1000)%60;
var min = Math.floor(uptime/(1000*60))%60;
var horas = Math.floor(uptime/(1000*60*60))%24;
var uptimeconv = `${horas}h, ${min}m e ${seg}s.`
  let embed = new Discord.RichEmbed()
.setColor(`BLUE`)
.setAuthor("Olá, eu sou sua Assistente :-)", bot.user.avatarURL)
.setDescription(`Olá, meu nome é: ${authornick}. Bom, você deve ser **${botnick}**, _nice to meet you_. Bom, eu sou uma assistente _s.f_ eu fui desenvolvida por:\n**${bot.users.get("577271597564428299").tag}** e: \n**${bot.users.get("311114872911822850").tag}**\n e minha missão em seu mundo é ajudar no que você precisar, seja nas tarefas, emocionalmente, socialmente, entre outros.\nEu acho que **basta**. Até, senhor(a) ^^ :wave:.\nUm robô ~~sem~~ fins lucrativos. :wink: _Doe pufavô_.\n📫 **|** Quer me adicionar;escravizar, ou vincular ao seu servidor?\nSe sim, clique [aqui.](https://discordapp.com/oauth2/authorize?=&client_id=${bot.user.id}&scope=bot&permissions=8)\n`+"`Sendo escravizada faz: "+uptimeconv+"`\n**Que mistério... Nenhuma [pista](https://discord.gg/aHk2XPR)**")
.setThumbnail(message.author.displayAvatarURL).setFooter(authornick+" / v3.6.9 | Status: Operacional (Requisitado por: "+message.author.tag+")", bot.user.displayAvatarURL)
message.channel.send(embed);
message.channel.send("_Um robô inspirado em F.R.I.D.A.Y_ e desenvolvido por dois __brasileiros__.")
};
//Encerrado, vamos definir as aliases e o nome da função.
module.exports.config = {
    name: "botinfo",
    aliases: ["quemevoce", "bi", "info", "biografia", "bio", "b-i", "infobot"]
}