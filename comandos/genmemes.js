// Começa o comando gerar memes.

module.exports.run = async (bot, message, args) => { // kk burro
 var Discord = require('discord.js'); //Define que talvez usaremos discord.js nisso aqui.
var fs = require('fs'); // Define que talvez usaremos fs (controle de diretórios, pastas) aqui.

 
  message.channel.send(`✅ Olá, este comando está em desenvolvimento.`);
   
    let dbmems = JSON.parse(fs.readFileSync("./memes.json", "utf8"));

  dbmems[bot.user.id] = {
     dbmems: args[0]
  }
 fs.writeFile("./memes.json", JSON.stringify(dbmems), (err) => {
        if (err) console.log(err)
      });
}
   module.exports.config = {
    name: "genmemes",
    aliases: ["gerarmems"]
};
  