const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args, prefix) => {

  if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("Não pode fazer isso.\nRequer permissão de `Gerenciar Servidor.`");
  if(!args[0] || args[0 == "help"]) return message.reply("Use: "+prefix+"prefix <nova prefix>");
if(args[0].length >=4){
 let sE1mbed = new Discord.RichEmbed()
  .setColor("#ff0000")
  .setTitle("**Erro!**")
  .setDescription(`Não pode setar prefixes maiores que 3 caractéres, como essa: \n`+"`"+args[0]+"`");

  return message.channel.send(sE1mbed);
}
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#0b6623")
  .setTitle("**Prefix setada**")
  .setDescription(`Nova prefix `+"`"+args[0]+"`");

  message.channel.send(sEmbed);

}

module.exports.config = {
  name: "setprefix",
  aliases: []
}