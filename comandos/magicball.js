//Vars:
var Discord = require('discord.js');
var fs = require('fs');
//Programação:
module.exports.run = async (bot, message, args) => {
let argns = args.join(` `)
if(argns.length < 1) {
  message.channel.send('Espero que você esteja cansado(a) de tanto digitar...')
  
} else {
if(!argns.size < 1) return message.reply(`Espero que você esteja cansado(a) de tanto digitar... `)
  message.react(`🎱`)
  var texto = ['Eu tenho uma pequena certeza que sim.', 'Não, acho que não viu.', 'Como assim?', 'Alô?! TERRA?!', 'Hmm, acho que sim em!', 'Acho que não...', 'Pergunte pra outro', 'Sua vida é tão ruim assim?!']
  const random = texto[Math.floor(Math.random() * texto.length)];
 
  message.channel.send(message.author+' 🎱 **|** Minha resposta é: '+random)
  
}
}
module.exports.config = {
    name: "magicball",
    aliases: ["decida", "8ball", "eightball", "bola-oito", "bolaoito", "simounao"]
}