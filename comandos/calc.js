//Vars:
var Discord = require('discord.js');
var fs = require('fs');
const math = require('mathjs');
//Programação:
module.exports.run = async (bot, message, args) => {
    let args1 = `${args.join(' ')}`
 
    if(!args[0]) return message.channel.send('Por favor convém argumentar uma equação.');
  if(args[0] === "index") return message.reply("Só para criadores."); 
    let resp;
    try {
        if(!args1.includes("para" || 'pra')) {
         resp =  math.eval(args1);
        } else {
             resp = math.eval(args1.replace('para' || 'pra', 'to'))
        }
     
    } catch (e) {
        return message.channel.send('A equação matemática é impossível de calcular!')
    }
    message.channel.send(':nerd: **|** O resultado que encontrei foi: \n ```js\n'+resp+'```');
};
//Encerrado, vamos definir as aliases e o nome da função.
module.exports.config = {
    name: "calc",
    aliases: ["math", "calcular", "calculadora", "conta", "equação"]
}