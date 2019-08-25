const Discord = require('discord.js')
exports.run = (bot, message, args, prefix) => {
  if(!args[0]) return message.channel.send(':face_palm: Coloque assim:\n'+prefix+'revertir <textao>');

  function revertir(str) {
      return str.split("").reverse().join("");
  }

  let sreverse = revertir(args.join(' '))
   

message.channel.send("🔄 | O seu texto revertido fica assim:\n"+sreverse)
    
}
    module.exports.config = {
        name: "reverter",
        aliases: ["revertir"]
    }