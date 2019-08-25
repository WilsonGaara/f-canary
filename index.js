const http = require('http');
const express = require('express');
const app = express();

app.get("/", (request, response) => {
    response.sendStatus(200);
  });
app.listen(process.env.PORT);
const botconfig = require("./botconfig.json")
const Discord = require('discord.js')
const bot = new Discord.Client({fetchAllMembers: true})
let criador1 = "Cauã"
let criador2 = "Eduardo"
let criador3 = "Layssa"
   var servers = {}
 var loop = {}


const fs = require("fs");

bot.on("ready", async () => {

    console.log(`Protocolo Friday |v3.6.9| Comando: iniciar.`)
    console.log("Olá, como está? Espero que bem.")
    console.log(`Rastreando meu criador...\nEncontrados:\n${criador1}; \n${criador2}; \n${criador3}`)
    
        let s = [{ name: `Preserve sua fonte de vida, a natureza.`, type: 'PLAYING'},{ name: `Meus criadores contarem historias`, type: 'LISTENING'},{ name:`Minha prefix é: .`, type: 'PLAYING'},{ name: `Me escravize, só usar .info`, type: 'LISTENING'},{ name: `Assistente | Criada para te ajudar!`, type: 'WATCHING'}]
    
    function st() {
        let rs = s[Math.floor(Math.random() * s.length)]
        bot.user.setPresence({ game: rs })
    }
    st()
    setInterval(() => st(), 60000)
var os = require('os-utils')
os.cpuUsage(async function(v){
  await bot.channels.get("607739442806915102").bulkDelete(2)
var embed = new Discord.RichEmbed()
.setDescription("📡 **Status**:\n🤔 **RAM**(512mb): "+(process.memoryUsage().heapUsed / 512 / 512 - 22).toFixed(2)+"mb\n🔥 **CPU**: "+v.toFixed(1)+"%\n[Tudo operacional.](https://www.google.com/trollei)")
.setFooter(`${bot.guilds.size} guilds, ${bot.users.size} gente!`, bot.guilds.get("477240886812475403").iconURL)

bot.channels.get("607739442806915102").send(embed)



  
 
 })})



bot.on("guildCreate", guild => {
    let db1 = JSON.parse(fs.readFileSync("./welcomeb.json", "utf8"));
    db1[guild.id] = {
        welcomeb: "falso"
      };
   fs.writeFile("./welcomeb.json", JSON.stringify(db1), (err) => {
        if (err) console.log(err)
      });
    let dbaa = JSON.parse(fs.readFileSync("./goodbyec.json", "utf8"));
    dbaa[guild.id] = {
        goodbyec: "nada"
      }
      fs.writeFile("./goodbyec.json", JSON.stringify(dbaa), (err) => {
        if (err) console.log(err)
      });
      let db2 = JSON.parse(fs.readFileSync("./welcomec.json", "utf8"))
      db2[guild.id] = {
        welcomec: "nada"
      };
      fs.writeFile("./welcomec.json", JSON.stringify(db2), (err) => {
        if (err) console.log(err)
      })
      let db4 = JSON.parse(fs.readFileSync("./goodbyeb.json", "utf8"));
      db4[guild.id] = {
        goodbyeb: "falso"
      }
      fs.writeFile("./goodbyeb.json", JSON.stringify(db4), (err) => {
        if (err) console.log(err)
      })
   let dbaaa = JSON.parse(fs.readFileSync("./goodbyec.json", "utf8"));
      dbaaa[guild.id] = {
        goodbyec: "nada"
      }
      fs.writeFile("./goodbyec.json", JSON.stringify(dbaaa), (err) => {
        if (err) console.log(err)
      })
  let db5 = JSON.parse(fs.readFileSync("./db.json", "utf8"));
      db5[guild.id] = {
        welcomec: "nada"
      };
      fs.writeFile("./db.json", JSON.stringify(db5), (err) => {
        if (err) console.log(err)
      });
   let dbk = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
      dbk[guild.id] = {
        prefixes: "."
      };
      fs.writeFile("./prefixes.json", JSON.stringify(dbk), (err) => {
        if (err) console.log(err)
      });
});

bot.on('guildMemberAdd', member => {
  let autorole = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
  let config =  ("./autorole.json", "utf8");
  if (!autorole[member.guild.id]) {
       autorole[member.guild.id] = {
           autorole: config.autorole
       };
  }
  var role = autorole[member.guild.id].role;
if(!autorole[member.guild.id]) return;
  if (role === '0') return;
  member.addRole(role);

});
var prefixesa = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
bot.on('guildMemberAdd', member => {
if(member.guild.id == "425864977996578816") return
  prefixesa = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))
    let db = JSON.parse(fs.readFileSync("./db.json", "utf8"));
    let db1 = JSON.parse(fs.readFileSync("./welcomeb.json", "utf8"));
  if(db1[member.guild.id].welcomeb === "falso") return 
    let db12 = JSON.parse(fs.readFileSync("./welcomec.json", "utf8"));
    let nome = `${member.user.username}`
    var texto = [`➡ Jogador **${nome}** pronto!`, `➡ **${nome}** chegou, finjam estar ocupados!`, `➡ Trouxe pizza **${nome}**?`, `➡ **${nome}** acabou de entrar no servidor - glhf!`, `➡ **${nome}** acabou de aterrissar. Parece OP - Por favor nerfe!`, `➡ Rosas são vermelhas, violetas azuis, **${nome}** entrou no servidor com tu!`, `➡ É um pássaro, um avião... Não, é só **${nome}**.`, `➡ É perigoso ir sozinho! Leve **${nome}**`, `➡ Olha que coisa mais linda, mais cheia de graça, é __**${nome}**__, que vem e que passa... Tô falando de você mesmo, __**${nome}**__.`, `➡ __**${nome}**__ entrou no servidor! É superefetivo!`, `➡ __**${nome}**__ pulou para o servidor. Canguru!!`]
    const random = texto[Math.floor(Math.random() * texto.length)];
    let channel = member.guild.channels.find(x => x.id == db12[member.guild.id].welcomec)
  
    if(db1[member.guild.id].welcomeb === "verdadeiro") {if(!channel) return member.guild.member(member.guild.owner.id).send(":confused: Defina o canal de boas-vindas!\n Desculpe quaisquer incômodo.\n Pra realizar tal ação, use o comando: .config welcomec ou goodbyec ID DO CANAL\nTudo isso ocorreu na guilda:\n**"+member.guild+"**")
    var embed = new Discord.RichEmbed()
    .setColor('BLUE')
    .setTimestamp()
    .setDescription(random)
    .setFooter("Bem-vindo (ou vinda)", member.user.displayAvatarURL)
       channel.send(embed).catch(error => member.guild.member(member.guild.owner.id).send(`😕**:warning: Sorry, e desculpe-me por quaisquer incômodo**\n:cry: O canal ${channel} da guilda:`+"`"+member.guild+"`"+` está tendo problemas, no caso. Eu não consigo enviar mensagens lá, se você for o responsável pela configuração da guilda, pode consertar por favor? :pushpin::handshake: | Qualquer erro ou estresse que essa mensagem esteja te causando, fale com: ${bot.users.get("395005096527790083").tag}!\n:money_mouth: | Me _mime_! Você pode doar, mas claro... Se estiver na minha guilda: discord.gg/pUTaeYX se junte a nossa família já!`)).catch(error => member.send(`:confused: **:warning: Sorry, e desculpe-me por quaisquer incômodo**\n:cry: O canal ${channel} da guilda:`+"`"+member.guild+"`"+`está tendo problemas, no caso. Eu não consigo enviar mensagens lá, se você for o responsável pela configuração da guilda, pode consertar por favor? :pushpin:\n**:rage: Eu sei que você provavelmente não é um dono do servidor, mas eu só envio essa mensagem quando o dono tem uma DM limitada. Então avise-o por favorzinho. :cry:**\n:handshake: | Qualquer erro ou estresse que essa mensagem esteja te causando, fale com: ${bot.users.get("395005096527790083").tag}!\n:money_mouth: | Me _mime_! Você pode doar, mas claro... Se estiver na minha guilda: discord.gg/pUTaeYX se junte a nossa família já!`))
    }})

bot.on('guildMemberRemove', member => {
   let db202 = JSON.parse(fs.readFileSync("./goodbyec.json", "utf8"))
if(db202[member.guild.id]){
  let db1 = JSON.parse(fs.readFileSync("./goodbyeb.json", "utf8"))
  let db12 = JSON.parse(fs.readFileSync("./welcomec.json", "utf8"))
  let nome = `${member.user.username}`
  let channel1 = member.guild.channels.find(x => x.id === db12[member.guild.id].welcomec)
 let channel12 = member.guild.channels.find(x => x.id == db202[member.guild.id].goodbyec)
  if(db1[member.guild.id].goodbyeb == "verdadeiro") {
    if(!channel12)return member.guild.member(member.guild.owner.id).send("😕 Defina o canal de boas-vindas!\n Desculpe quaisquer incômodo.\n Pra realizar tal ação, use o comando: `"+prefixesa[member.guild.id].prefixes+"`config/configs welcomec/goodbyec ID DO CANAL\nTudo isso ocorreu na guilda:\n**"+member.guild+"**)")
    if(db202[member.guild.id].goodbyec){
  var embed1 = new Discord.RichEmbed()
  .setColor('RED')
  .setTimestamp()
  .setDescription(`⬅ :cry: Adeus **${nome}** 😕`)
  .setFooter("Oferecido por Friday.", member.user.displayAvatarURL)
    channel12.send(embed1).catch(error => member.guild.member(member.guild.owner.id).send(`😕 **Sorry, e desculpe-me por quaisquer incômodo**\n:cry: O canal ${channel12} da guilda:`+"`"+member.guild+"`"+` está tendo problemas, no caso. Eu não consigo enviar mensagens lá, se você for o responsável pela configuração da guilda, pode consertar por favor? :pushpin::handshake: | Qualquer erro ou estresse que essa mensagem esteja te causando, fale com: ${bot.users.get("395005096527790083").tag}!\n:money_mouth: | Me _mime_! Você pode doar, mas claro... Se estiver na minha guilda: discord.gg/pUTaeYX se junte a nossa família já!`)).catch(error => member.send(`:confused: **:warning: Sorry, e desculpe-me por quaisquer incômodo**\n:cry: O canal ${channel12} da guilda:`+"`"+member.guild+"`"+`está tendo problemas, no caso. Eu não consigo enviar mensagens lá, se você for o responsável pela configuração da guilda, pode consertar por favor? :pushpin:\n**:rage: Eu sei que você provavelmente não é um dono do servidor, mas eu só envio essa mensagem quando o dono tem uma DM limitada. Então avise-o por favorzinho. :cry:**\n:handshake: | Qualquer erro ou estresse que essa mensagem esteja te causando, fale com: ${bot.users.get("395005096527790083").tag}!\n:money_mouth: | Me _mime_! Você pode doar, mas claro... Se estiver na minha guilda: discord.gg/pUTaeYX se junte a nossa família já!`))
  } 
  }
if(db1[member.guild.id].goodbyeb !== "verdadeiro") {

return;
}
}})



bot.commands = new Discord.Collection()
bot.aliases = new Discord.Collection()

fs.readdir(`./comandos/`, (err, files) => {
    if (err) console.log(err)

var jsfile = files.filter(f => f.split(".").pop() === "js")
    jsfile.forEach((f, i) => {
        let pull = require(`./comandos/${f}`)
        bot.commands.set(pull.config.name, pull)
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)

        });
    });
});

bot.on("message", async message => {

  var fs = require('fs')


     

 let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: "."
    };
 }
  let dbbotnick = JSON.parse(fs.readFileSync("./db.json", "utf8"))
   if(!dbbotnick[message.guild.id]){
        dbbotnick[message.guild.id] = {
          dbbotnick: "Friday"
          
        };
     }

 let prefi1x = prefixes[message.guild.id].prefixes||"."
  if(message.content == `<@577286065052975134>`) message.reply("oi! Meu prefix aqui é: `"+prefi1x+"`")
  if(message.content == `<@!577286065052975134>`) message.reply("oi! Meu prefix aqui é: `"+prefi1x+"`")
  let db1 = JSON.parse(fs.readFileSync("./welcomeb.json", "utf8"))
 
    if(message.author.bot == true) return
    let prefix = prefixes[message.guild.id].prefixes || "."
  
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0]
    let args = messageArray.slice(1)


let YTDL = require("ytdl-core")

 function play(connection,message) {
   var server = servers[message.guild.id]
server.dispatcher = connection.playStream(YTDL(server.queue[0],{quality:'highestaudio'}),{pass:3})
  server.dispatcher.on("end", function() {
if(loop[message.guild.id].loop == "n"){
server.queue.shift()
}
if (server.queue[0]){play(connection, message)
if(loop[message.guild.id].loop == "s")message.channel.send('🔄 | Loopando...')
if(loop[message.guild.id].loop =="n"){server.np2.shift();server.np.shift();server.queuen.shift();server.queue.shift();return message.channel.send("💿 | Tocando: "+server.queuen[0])}
}else{
if(loop[message.guild.id].loop == "s"){message.channel.send('🔄 | Loopando...')
play(connection, message)
}
var embed = new Discord.RichEmbed().setColor('BLUE').setDescription("📀 Lista acabou...\nUse:\n`"+prefix+"play [pesquisa]`")
message.reply(embed)
connection.disconnect();loop[message.guild.id].loop="n";server.np.shift();server.queuen.shift();server.np2.shift()
}})}if(message.content.startsWith(prefix+"play")){if(!args.join(" ")) return message.reply("FALA")
var video
 var ytSearch = require('yt-search')
    ytSearch(args.join(" "), async function (err,r){
      if (!r.videos[0]) return message.reply("🌎 Não consegui as informações da música...\nA música pode ser bloqueada em algum país que faça parte na minha rede encorporada...\n🔍 Ou posso não ter encontrado. Mude a indexação.")
video = r.videos[0]  
    let musica = "youtube.com" + video.url
          if (!message.member.voiceChannel)return message.reply("CANAL VOZ")
          if(!servers[message.guild.id]) servers[message.guild.id] = {
              queue: [],
            queuen: [],
            np: [],
            np2: [] 
          }
 if(!loop[message.guild.id])loop[message.guild.id] = {
         loop: ["n"]
          }
let blaks
 
let info2 = await YTDL.getInfo(musica).catch(error=> blaks='a')
if(blaks=='a') return
var server = servers[message.guild.id]
 const info = r.videos[0];server.np2.push(musica);server.queue.push(musica);server.np.push(info.title);server.queuen.push(info.title+" por "+message.author);var embed = new Discord.RichEmbed()
.setColor("BLUE")
.setAuthor(`${message.author.tag} atualizou a fila:`, message.author.displayAvatarURL)
.setDescription(`🎵 | Música: `+"`"+ info.title + "`"+ `\n⏲ | Duração: **`+r.videos[0].duration.timestamp+"**\n😊 Por: "+message.author+"")
.setFooter(`${info2.author.name}`,info2.author.avatar)
message.channel.send(embed)
if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){play(connection, message)})  
    })
}
if(message.content.startsWith(prefix+"np")){

if(!servers[message.guild.id]) {
return message.channel.send(`sem música tocando!`)
}
if(servers[message.guild.id].np.length <1) {
return message.channel.send(`sem música tocando!`)
}
       if(servers[message.guild.id].np) {
var embed = new Discord.RichEmbed()
.setDescription(`📀 » [${servers[message.guild.id].np[0]}](https://${servers[message.guild.id].np2[0]})`)
.setColor("BLUE")
message.channel.send(embed)
} 
}
  if(message.content.startsWith(prefix+"pause")){
var server1 = servers[message.guild.id];
 if(!server1) {
     return message.channel.send("Então... Não estou tocando... 😕")
    }
    if(server1.queuen.length < 1) {
      return message.channel.send("Então... Não estou tocando... 😕")
    }
 
    servers[message.guild.id].dispatcher.pause()
message.channel.send("⏯ Pausada(s) `1` música(s).")
    
  }
 if(message.content.startsWith(prefix+"resume")){
var server1 = servers[message.guild.id];
 if(!server1) {
     return message.channel.send("Então... Não estou tocando...😕")
    }
if(server1.queuen.length < 1) {
message.channel.send("Então... Não estou tocando... 😕")
}
    servers[message.guild.id].dispatcher.resume()
    message.channel.send("⏯ Resumida(s) `1` música(s).")
  }
if(message.content.startsWith(prefix+"loop")){
if(!loop[message.guild.id]) return message.reply("Sorry, eu não reconheci músicas. Tente novamente.")
if(!loop[message.guild.id].loop) return message.reply("Sorry, eu não reconheci músicas. Tente novamente.")
if(!servers[message.guild.id]) return message.reply("Sorry, eu não reconheci músicas.")
if(servers[message.guild.id].queuen.length < 1) return message.reply("Sorry, eu não reconheci músicas. Tente novamente.")
  if(loop[message.guild.id].loop == "s"){

 loop[message.guild.id].loop="n"
message.channel.send('✅ Pronto!\nDeixei de tocar essa música repetida 😉')
  } else {
loop[message.guild.id].loop="s"
message.channel.send('✅ Pronto!\nA música atual será retocada😉')
}
}
if(message.content.startsWith(prefix+"volume")){
  var server1 = servers[message.guild.id]
if (!message.member.voiceChannel) return message.channel.send('❌ **|** Ocorreu um erro inesperado ao conectar-se.');
if (!args[0]) return message.channel.send('🔈 **|** O volume precisa ser definido.');
		if (!server1 || servers[message.guild.id].queuen.length < 1 ) return message.channel.send('🎧 **|** Nada tocando. Use o meu comando play!');
 if(isNaN(args[0])) return message.reply("⚠ Oops! - **Você precisa definir um número de 1 > 8!** -")
	if(args[0] < 1) return message.reply('🔇 **|** O volume não pode ser menor que o número 1 para o conforto de todos.')
		if(args[0] > 8) return message.reply('🔈 **|** O volume não pode ser maior que o número 8 para o conforto de todos.')
		

	
		servers[message.guild.id].dispatcher.setVolumeLogarithmic(args[0] / 5);
		 message.channel.send('🔈 Alterei o volume pra: `'+args[0]+'`.')
}
if(message.content.startsWith(prefix+"queue")){
var server1 = servers[message.guild.id]
       if(!server1) {
var embed2= new Discord.RichEmbed()
.setDescription(`:frowning: **-** Affs, queria tocar. \n**SÍNTAXE:** USE: **.**play <intenção de pesquisa/URL.do.vídeo>\n**DICA:** Para saber qual música está tocando no momento, ela geralmente é a primeira da fila, mas se não for. Use **.np**`)
.setAuthor(" Affs!", message.author.displayAvatarURL)
.setColor("#FF0000")
.setTimestamp()
.setFooter("Que pena.", bot.user.avatarURL)
return message.channel.send(embed2)

}

  if(server1.queuen.length < 1) {
var embed2= new Discord.RichEmbed()
.setDescription(`:frowning: **-** Affs, queria tocar. \n**SÍNTAXE:** USE: **.**play <intenção de pesquisa/URL.do.vídeo>\n**DICA:** Para saber qual música está tocando no momento, ela geralmente é a primeira da fila, mas se não for. Use **.np**`)
.setAuthor("Nhaa... Affs!", message.author.displayAvatarURL)
.setColor("#FF0000")
.setTimestamp()
.setFooter("Que pena.", bot.user.avatarURL)
return message.channel.send(embed2)

}

if (server1.queuen) {
var embed = new Discord.RichEmbed()
.setDescription(server1.queuen.map(song => `${song}`).join('\n').replace(`${server1.queuen[0]}`, "")).setTitle("📓 **Fila de músicas:**").addField("🎵 Tocando agora:", server1.queuen[0]).setColor("BLUE")
return message.channel.send(embed)
}}
if(message.content.startsWith(prefix+"skip")){
         var server = servers[message.guild.id]
   if (!message.member.voiceChannel) {
         return message.reply("CANAL VOZ")
          
   }
if(!message.guild.voiceConnection) return message.reply(`Tô nem aí...`)
         if(server.dispatcher)loop[message.guild.id].loop="n";server.dispatcher.end();if(server.dispatcher)message.react('✅')}
    let botnick = dbbotnick[message.guild.id].dbbotnick;
let dbd = JSON.parse(fs.readFileSync("./db.json", "utf8"))||require('./db.json')
if(!dbd[message.author.id]){
dbd[message.author.id] ={
  dbnick: message.author.username
}
}
    let authornick = dbd[message.author.id].dbnick
    if(!message.content.startsWith(prefix)) return
    let commandFile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandFile)commandFile.run(bot,message,args,prefix,botnick,authornick)

                   
 })
  
 
bot.login(process.env.TOKEN)
