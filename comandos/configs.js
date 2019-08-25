
//Vars:
var Discord = require('discord.js');
var fs = require('fs');

//Programação:
module.exports.run = async (bot, message, args, prefix) => {
    if(!args[0]) { 
        return message.channel.send(message.author+" Você precisa definir um argumento para este comando, as formas de uso são:\n**"+prefix+"configs/config** _nick_ `O nome no qual vou te chamar depois que você predefinir um.`\n**"+prefix+"configs/config** _botname_ `O meu novo nome.`\n**"+prefix+"configs/config** _welcomeb_ `sim/não` (Definir se vou dar as boas-vindas nessa guilda ou não) \n**"+prefix+"configs/config** _goodbyeb_ `sim/não` (Definir se vou dar adeus nessa guilda usando o canal de boas-vindas) \n|Requer canal de welcome previamente definido|\n**EM TESTES**\n **"+prefix+"configs/config** "+prefix+"anunciarc `[ID do canal de avisos]`\n> Libera o comando **"+prefix+"**anunciar\n(Defina o canal onde vou anunciar o que você pedir)")
    }
if(args[0] === "nick") { 
  if(!args[1]) return message.reply("DEFINA UM ARGUMENTO")
    let dbnick = JSON.parse(fs.readFileSync("./db.json", "utf8"));
    dbnick[message.author.id] = {
        dbnick: args[1]
      };
      fs.writeFile("./db.json", JSON.stringify(dbnick), (err) => {
        if (err) console.log(err)
      });
      message.channel.send("😃 | Devo te chamar agora de: `"+args[1]+"`.")
};
if(args[0] === "botname") { 
  if(!args[1]) return message.reply("DEFINA UM ARGUMENTO")
if(message.author.id == "395005096527790083") {
 let dbbotnick1 =JSON.parse(fs.readFileSync("./db.json", "utf8"));
    dbbotnick1[message.guild.id] = {
        dbbotnick: args[1]
      };
      fs.writeFile("./db.json", JSON.stringify(dbbotnick1), (err) => {
        if (err) console.log(err)
      });
 message.channel.send("Como desejar, senhor.")
return message.guild.me.setNickname(args[1])
}
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("😦 | Desculpe, você não pode executar esta ação porque seu nível neste servidor não alcança os requisitos para usar o comando.");

    let dbbotnick = JSON.parse(fs.readFileSync("./db.json", "utf8"));
    dbbotnick[message.guild.id] = {
        dbbotnick: args[1]
      };
      fs.writeFile("./db.json", JSON.stringify(dbbotnick), (err) => {
        if (err) console.log(err)
      });
      message.channel.send("🤔 | Eu acho que eu não tinha um nome, mas agora tenho. E ele é: `"+args[1]+"`.")
return message.guild.me.setNickname(args[1])
};
if(args[0] === "welcomeb") { 
  if(!args[1]) return message.reply("DEFINA UM ARGUMENTO")
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("😦 | Desculpe, você não pode executar esta ação porque seu nível neste servidor não alcança os requisitos para usar o comando.");
if(args[1] === "sim") {
  if(!args[1]) return message.reply("DEFINA UM ARGUMENTO")
  let dbbotnick1 = JSON.parse(fs.readFileSync("./welcomeb.json", "utf8"));
    dbbotnick1[message.guild.id] = {
        welcomeb: "verdadeiro"
      };
      fs.writeFile("./welcomeb.json", JSON.stringify(dbbotnick1), (err) => {
        if (err) console.log(err)
      });

message.channel.send("Agora você só precisa definir o canal que irei dar as boas vindas para os membros do servidor usando: \n **"+prefix+"configs/config welcomec (ID do canal)**");
message.reply("Ok, consegui. Devo ter te mandado alguma instrução, leia com atenção e siga as etapas.")
};

if(args[1] === "não") {
  if(!args[1]) return message.reply("DEFINA UM ARGUMENTO")
  let dbbotnick2 = JSON.parse(fs.readFileSync("./welcomeb.json", "utf8"));
    dbbotnick2[message.guild.id] = {
        welcomeb: "falso"
      };
      fs.writeFile("./welcomeb.json", JSON.stringify(dbbotnick2), (err) => {
        if (err) console.log(err)
      });

  message.channel.send("Configurações atualizadas.");
}
};
if(args[0] === "anunciarc") { 
   if(!args[1]) return message.reply("DEFINA UM ID \n > Dica: Acesse: \n > **Configs. -> Aparência. >> Modo desenvolvedor: ativado**.")
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("😦 | Desculpe, você não pode executar esta ação porque seu nível neste servidor não alcança os requisitos para usar o comando.");
 
  let dbbotnick32 = JSON.parse(fs.readFileSync("./db.json", "utf8"));
    dbbotnick32[message.guild.id] = {
        anuncioc: args[1]
      };
      fs.writeFile("./db.json", JSON.stringify(dbbotnick32), (err) => {
        if (err) console.log(err)
      });
      let channel = message.guild.channels.find(x => x.id == dbbotnick32[message.guild.id].anuncioc);
    if(channel.type == 'voice') return message.reply("MEU DEUS. ENTENDA VOCÊ Não pode me fazer FALAR EM UM CANAL DE VOZ USANDO MENSAGENS, defina um canal de texto")
      if(!channel) return message.reply("Desculpe, eu não detectei este canal, ou o canal que você definiu por Id não existe nesta guild.")

      message.reply("Pronto.")
    
};

if(args[0] === "welcomec") { 
  if(!args[1]) return message.reply("DEFINA UM ARGUMENTO")
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("😦 | Desculpe, você não pode executar esta ação porque seu nível neste servidor não alcança os requisitos para usar o comando.");
  if(!args[1]) return message.reply("DEFINA UM ARGUMENTO")
  let dbbotnick32 = JSON.parse(fs.readFileSync("./welcomec.json", "utf8"));
    dbbotnick32[message.guild.id] = {
        welcomec: args[1]
      };
      fs.writeFile("./welcomec.json", JSON.stringify(dbbotnick32), (err) => {
        if (err) console.log(err)
      });
      let channel = message.guild.channels.find(x => x.id == dbbotnick32[message.guild.id].welcomec);
       if(!channel) return message.reply("Desculpe, eu não detectei este canal, ou o canal que você definiu por Id não existe.")
  if(channel.type == 'voice') return message.reply("MEU DEUS. ENTENDA QUE VOCÊ Não pode me fazer FALAR EM UM CANAL DE VOZ USANDO MENSAGENS, defina um canal de texto")
 
      message.reply("Pronto.")
    
};
  if(args[0] === "goodbyec") { 
  if(!args[1]) return message.reply("DEFINA UM ARGUMENTO")
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("😦 | Desculpe, você não pode executar esta ação porque seu nível neste servidor não alcança os requisitos para usar o comando.");
  if(!args[1]) return message.reply("DEFINA UM ARGUMENTO")
  let debe = JSON.parse(fs.readFileSync("./goodbyec.json", "utf8"));
    debe[message.guild.id] = {
        goodbyec: args[1]
      };
      fs.writeFile("./goodbyec.json", JSON.stringify(debe), (err) => {
        if (err) console.log(err)
      });
      let channel = bot.channels.get(debe[message.guild.id].goodbyec);
    if(channel.type == 'voice') return message.reply("MEU DEUS. ENTENDA QUE VOCÊ Não pode me fazer FALAR EM UM CANAL DE VOZ USANDO MENSAGENS, defina um canal de texto")
      if(!channel) return message.reply("Desculpe, eu não detectei este canal, ou o canal que você definiu por Id não existe.")
      message.reply("Pronto.")
    
};
if(args[0] === "goodbyeb") { 
  if(!args[1]) return message.reply("DEFINA UM ARGUMENTO")
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("😦 | Desculpe, você não pode executar esta ação porque seu nível neste servidor não alcança os requisitos para usar o comando.");
if(args[1] === "sim") {
  let debe = JSON.parse(fs.readFileSync("./welcomeb.json", "utf8"));
  if(!args[1]) return message.reply("DEFINA UM ARGUMENTO")
  let db12 = JSON.parse(fs.readFileSync("./welcomec.json", "utf8"));
  let channel = message.guild.channels.find(x => x.id == db12[message.guild.id].welcomec);
  if(!channel) return message.reply('antes defina as configurações do welcomeb (sim/não) e do welcomec (id do canal de boasvindas e adeus), obrigado desde já. Obrigado por me escolher como robô de gestão de servidores.')
  if(debe[message.guild.id].welcomeb === "falso") return message.reply("antes defina as configurações para as boas-vindas (canal) pois compartilho do canal de boas vindas!")

  let dbbotnick1 = JSON.parse(fs.readFileSync("./goodbyeb.json", "utf8"));
    dbbotnick1[message.guild.id] = {
        goodbyeb: "verdadeiro"
      };
      fs.writeFile("./goodbyeb.json", JSON.stringify(dbbotnick1), (err) => {
        if (err) console.log(err)
      });
message.channel.send("Agora você só precisa definir o canal que irei dar as boas vindas para os membros do servidor usando: \n **"+prefix+"configs/config goodbyec (ID do canal)**");
message.reply("Ok, consegui. Devo ter te mandado alguma instrução, leia com atenção e siga as etapas.")

};

if(args[1] === "não") {
  if(!args[1]) return message.reply("DEFINA UM ARGUMENTO")
  let dbbotnick2 = JSON.parse(fs.readFileSync("./goodbyeb.json", "utf8"));
    dbbotnick2[message.guild.id] = {
        goodbyeb: "falso"
      };
      fs.writeFile("./goodbyeb.json", JSON.stringify(dbbotnick2), (err) => {
        if (err) console.log(err)
      });

  message.channel.send("Configurações atualizadas.");
}

};
};
//Encerrado, vamos definir as aliases e o nome da função.
module.exports.config = {
    name: "configs",
    aliases: ["config"]
}
