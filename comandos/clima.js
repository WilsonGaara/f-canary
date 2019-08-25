//Vars:
var Discord = require('discord.js');
var fs = require('fs');
//Programação:
module.exports.run = async (bot, message, args, prefix) => {
var weather = require("weather-js");
weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) { 
 const Discord2 = require('discord.js');

 const embed2 = new Discord2.RichEmbed()
.setAuthor(message.author.tag, message.author.displayAvatarURL)
.setColor('BLUE')
.setTitle(':thinking: `'+prefix+'clima`')
 .setTimestamp()  
.setDescription('Verifique a temperatura de uma cidade!\n\n:information_desk_person: **Como usar:** '+prefix+'clima `cidade`')
.addField(':book: Exemplo:', prefix+'clima `São Paulo`')
 .addField("🔀 Alternativas:", "`"+prefix+"weather`, `"+prefix+"tempo`")
 .setFooter(`Utilitários`, bot.user.displayAvatarURL)
 if(args.length < 1) return message.channel.send({embed : embed2});

if (result === undefined || result.length === 0) return message.channel.send(':x: **|** '+message.author+' Não encontrei nenhuma cidade chamada `'+args.join(' ')+'`\nSe eu demorei um pouquinho para falar isso, tente novamente.')


 // Variáveis
 var current = result[0].current; 
  var location = result[0].location;
   var forecast = result[0].forecast[1];
    var amanha = result[0].forecast[2];
     var cor;
       
});
};
//Encerrado, vamos definir as aliases e o nome da função.
module.exports.config = {
    name: "clima",
    aliases: ["weather", "tempo"]
}