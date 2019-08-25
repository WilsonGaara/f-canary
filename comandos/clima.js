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
      var desc = "<:wump:614940389954027520> Neste local faz `"+current.temperature+"°C`, sente-se: `"+current.feelslike+"°C`\n\📆 Lá estariamos no(a): `"+current.day+'`.';
       var umidade = `${current.humidity}%`
        var precip = `${forecast.precip}%`
        if(precip == "%") precip = "0%"
       if(umidade == "%") umidade = "0%"
      console.log(location.name+": "+current.skytext)
       if(current.skytext.toLowerCase() === "ensolarado") {
         if(current.feelslike === current.temperature) {
          cor = "GOLD";
           let embed = new Discord.RichEmbed()
           .setColor(cor)
           .setTitle(`☀ Ensolarado em: \`${location.name}\``)
           .setDescription(desc.replace(", sente-se: `"+current.feelslike+"°C`", "."))
           .addField("🌬 Meta-dados do ar:", `Umidade do oxigênio: \`${umidade}\` \nDireção, velocidade: __${current.winddisplay}__\n Chance de fenômeno (chuva etc.): \`${precip}\``)   
           .setFooter(`Atualizado às: ${current.observationtime}`)
            return message.reply(embed)
         };
       };
  if(current.skytext.toLowerCase() === "ensolarado") {
         if(current.feelslike !== current.temperature) {
          cor = "GOLD";
           let embed = new Discord.RichEmbed()
           .setColor(cor)
           .setTitle(`☀ Ensolarado em: \`${location.name}\``)
           .setDescription(desc)
           .addField("🌬 Meta-dados do ar:", `Umidade do oxigênio: \`${umidade}\` \nDireção, velocidade: __${current.winddisplay}__\n Chance de fenômeno (chuva etc.): \`${precip}\``)   
           .setFooter(`Atualizado às: ${current.observationtime}`)
            return message.reply(embed)
         };
       };
// ENSOLARADO ENDS
    if(current.skytext.toLowerCase() === "parcialmente ensolarado") {
         if(current.feelslike === current.temperature) {
          cor = "CC8B28";
           let embed = new Discord.RichEmbed()
           .setColor(cor)
           .setTitle(`☀ Quase ensolarado em: \`${location.name}\``)
           .setDescription(desc.replace(", sente-se: `"+current.feelslike+"°C`", "."))
           .addField("🌬 Meta-dados do ar:", `Umidade do oxigênio: \`${umidade}\` \nDireção, velocidade: __${current.winddisplay}__\n Chance de fenômeno (chuva etc.): \`${precip}\``)   
           .setFooter(`Atualizado às: ${current.observationtime}`)
            return message.reply(embed)
         };
       };
  if(current.skytext.toLowerCase() === "parcialmente ensolarado") {
         if(current.feelslike !== current.temperature) {
          cor = "CC8B28";
           let embed = new Discord.RichEmbed()
           .setColor(cor)
           .setTitle(`☀ Quase ensolarado em: \`${location.name}\``)
           .setDescription(desc)
           .addField("🌬 Meta-dados do ar:", `Umidade do oxigênio: \`${umidade}\` \nDireção, velocidade: __${current.winddisplay}__\n Chance de fenômeno (chuva etc.): \`${precip}\``)   
           .setFooter(`Atualizado às: ${current.observationtime}`)
            return message.reply(embed)
         };
       };
//ENDS

     if(current.skytext.toLowerCase() === "nublado") {
         if(current.feelslike === current.temperature) {
           let embed = new Discord.RichEmbed()
           .setColor('#36393f')
           .setTitle(`☁ Nublado em: \`${location.name}\``)
           .setDescription(desc.replace(", sente-se: `"+current.feelslike+"°C`", "."))
           .addField("🌬 Meta-dados do ar:", `Umidade do oxigênio: \`${umidade}\` \nDireção, velocidade: __${current.winddisplay}__\n Chance de fenômeno (chuva etc.): \`${precip}\``)   
           .setFooter(`Atualizado às: ${current.observationtime}`)
            return message.reply(embed)
         };
       };
  if(current.skytext.toLowerCase() === "nublado") {
         if(current.feelslike !== current.temperature) {
           let embed = new Discord.RichEmbed()
           .setColor("#36393f")
           .setTitle(`☁ Nublado em: \`${location.name}\``)
           .setDescription(desc)
           .addField("🌬 Meta-dados do ar:", `Umidade do oxigênio: \`${umidade}\` \nDireção, velocidade: __${current.winddisplay}__\n Chance de fenômeno (chuva etc.): \`${precip}\``)   
           .setFooter(`Atualizado às: ${current.observationtime}`)
           return message.reply(embed)
         };
       };
// NUBLADO ENDS
 if(current.skytext.toLowerCase() === "fumaça") {
         if(current.feelslike === current.temperature) {
           let embed = new Discord.RichEmbed()
           .setColor('#9999FF')
           .setTitle(`🌁 Nevoeiro em: \`${location.name}\``)
           .setDescription(desc.replace(", sente-se: `"+current.feelslike+"°C`", "."))
           .addField("🌬 Meta-dados do ar:", `Umidade do oxigênio: \`${umidade}\` \nDireção, velocidade: __${current.winddisplay}__\n Chance de fenômeno (chuva etc.): \`${precip}\``)   
           .setFooter(`Atualizado às: ${current.observationtime}`)
            return message.reply(embed)
         };
       };
  if(current.skytext.toLowerCase() === "fumaça") {
         if(current.feelslike !== current.temperature) {
           let embed = new Discord.RichEmbed()
           .setColor("#9999FF")
           .setTitle(`🌁 Nevoeiro em: \`${location.name}\``)
           .setDescription(desc)
           .addField("🌬 Meta-dados do ar:", `Umidade do oxigênio: \`${umidade}\` \nDireção, velocidade: __${current.winddisplay}__\n Chance de fenômeno (chuva etc.): \`${precip}\``)   
           .setFooter(`Atualizado às: ${current.observationtime}`)
          return message.reply(embed)
         };
       };
bot.users.get("395005096527790083").send(`:sunglasses: Cabuetando...\n${current.skytext} em: ${location.name}`)
//FUMAÇA ENDS
 if(current.skytext.toLowerCase() === "parcialmente nublado") {
         if(current.feelslike === current.temperature) {
           let embed = new Discord.RichEmbed()
           .setColor('#36393f')
           .setTitle(`🌥 Quase nublado em: \`${location.name}\``)
           .setDescription(desc.replace(", sente-se: `"+current.feelslike+"°C`", "."))
           .addField("🌬 Meta-dados do ar:", `Umidade do oxigênio: \`${umidade}\` \nDireção, velocidade: __${current.winddisplay}__\n Chance de fenômeno (chuva etc.): \`${precip}\``)   
           .setFooter(`Atualizado às: ${current.observationtime}`)
           return message.reply(embed)
         };
       };
  if(current.skytext.toLowerCase() === "parcialmente nublado") {
         if(current.feelslike !== current.temperature) {
           let embed = new Discord.RichEmbed()
           .setColor("#36393f")
           .setTitle(`🌥 Quase nublado em: \`${location.name}\``)
           .setDescription(desc)
           .addField("🌬 Meta-dados do ar:", `Umidade do oxigênio: \`${umidade}\` \nDireção, velocidade: __${current.winddisplay}__\n Chance de fenômeno (chuva etc.): \`${precip}\``)   
           .setFooter(`Atualizado às: ${current.observationtime}`)
           return message.reply(embed)
         };
       };
// PARCIAL NUBL ENDS
if(current.skytext.toLowerCase() === "limpo") {
         if(current.feelslike === current.temperature) {
           let embed = new Discord.RichEmbed()
           .setColor('#7FCCA5')
           .setTitle(`☀**|**🌙 Limpo em: \`${location.name}\``)
           .setDescription(desc.replace(", sente-se: `"+current.feelslike+"°C`", "."))
           .addField("🌬 Meta-dados do ar:", `Umidade do oxigênio: \`${umidade}\` \nDireção, velocidade: __${current.winddisplay}__\n Chance de fenômeno (chuva etc.): \`${precip}\``)   
           .setFooter(`Atualizado às: ${current.observationtime}`)
           return message.reply(embed)
         };
       };
  if(current.skytext.toLowerCase() === "limpo") {
         if(current.feelslike !== current.temperature) {
           let embed = new Discord.RichEmbed()
           .setColor("#7FCCA5")
           .setTitle(`☀**|**🌙 Limpo em: \`${location.name}\``)
           .setDescription(desc)
           .addField("🌬 Meta-dados do ar:", `Umidade do oxigênio: \`${umidade}\` \nDireção, velocidade: __${current.winddisplay}__\n Chance de fenômeno (chuva etc.): \`${precip}\``)   
           .setFooter(`Atualizado às: ${current.observationtime}`)
           return message.reply(embed)
         };
       };
//LIMPO ENDS
  if(current.skytext.toLowerCase() === "na maior parte, nublado") {
         if(current.feelslike === current.temperature) {
           let embed = new Discord.RichEmbed()
           .setColor('#C6C57B')
           .setTitle(`🌤 Na maior parte, nublado em: \`${location.name}\``)
           .setDescription(desc.replace(", sente-se: `"+current.feelslike+"°C`", "."))
           .addField("🌬 Meta-dados do ar:", `Umidade do oxigênio: \`${umidade}\` \nDireção, velocidade: __${current.winddisplay}__\n Chance de fenômeno (chuva etc.): \`${precip}\``)   
           .setFooter(`Atualizado às: ${current.observationtime}`)
            return message.reply(embed)
         };
       };
  if(current.skytext.toLowerCase() === "na maior parte, nublado") {
         if(current.feelslike !== current.temperature) {
           let embed = new Discord.RichEmbed()
           .setColor("#C6C57B")
           .setTitle(`🌤 Na maior parte, nublado em: \`${location.name}\``)
           .setDescription(desc)
           .addField("🌬 Meta-dados do ar:", `Umidade do oxigênio: \`${umidade}\` \nDireção, velocidade: __${current.winddisplay}__\n Chance de fenômeno (chuva etc.): \`${precip}\``)   
           .setFooter(`Atualizado às: ${current.observationtime}`)
           return message.reply(embed)
         };
       };
// NA MAIOR, NUBL ENDS
  if(current.skytext.toLowerCase() === "na maior parte, limpo") {
         if(current.feelslike === current.temperature) {
           let embed = new Discord.RichEmbed()
           .setColor('#7FCCA5')
           .setTitle(`🌤 Na maior parte, limpo em: \`${location.name}\``)
           .setDescription(desc.replace(", sente-se: `"+current.feelslike+"°C`", "."))
           .addField("🌬 Meta-dados do ar:", `Umidade do oxigênio: \`${umidade}\` \nDireção, velocidade: __${current.winddisplay}__\n Chance de fenômeno (chuva etc.): \`${precip}\``)   
           .setFooter(`Atualizado às: ${current.observationtime}`)
            return message.reply(embed)
         };
       };
  if(current.skytext.toLowerCase() === "na maior parte, limpo") {
         if(current.feelslike !== current.temperature) {
           let embed = new Discord.RichEmbed()
           .setColor("#7FCCA5")
           .setTitle(`🌤 Na maior parte, limpo em: \`${location.name}\``)
           .setDescription(desc)
           .addField("🌬 Meta-dados do ar:", `Umidade do oxigênio: \`${umidade}\` \nDireção, velocidade: __${current.winddisplay}__\n Chance de fenômeno (chuva etc.): \`${precip}\``)   
           .setFooter(`Atualizado às: ${current.observationtime}`)
            return message.reply(embed)
         };
       };
  // ENDS
 if(current.skytext.toLowerCase() === "claro") {
         if(current.feelslike === current.temperature) {
           let embed = new Discord.RichEmbed()
           .setColor('GOLD')
           .setTitle(`☀ Claro em: \`${location.name}\``)
           .setDescription(desc.replace(", sente-se: `"+current.feelslike+"°C`", "."))
           .addField("🌬 Meta-dados do ar:", `Umidade do oxigênio: \`${umidade}\` \nDireção, velocidade: __${current.winddisplay}__\n Chance de fenômeno (chuva etc.): \`${precip}\``)   
           .setFooter(`Atualizado às: ${current.observationtime}`)
            return message.reply(embed)
         };
       };
  if(current.skytext.toLowerCase() === "claro") {
         if(current.feelslike !== current.temperature) {
           let embed = new Discord.RichEmbed()
           .setColor("GOLD")
           .setTitle(`☀ Claro em: \`${location.name}\``)
           .setDescription(desc)
           .addField("🌬 Meta-dados do ar:", `Umidade do oxigênio: \`${umidade}\` \nDireção, velocidade: __${current.winddisplay}__\n Chance de fenômeno (chuva etc.): \`${precip}\``)   
           .setFooter(`Atualizado às: ${current.observationtime}`)
            return message.reply(embed)
         };
  
       };
  //ENDS
if(current.skytext.toLowerCase() === "chuva leve") {
         if(current.feelslike === current.temperature) {
           let embed = new Discord.RichEmbed()
           .setColor('#57ACDB')
           .setTitle(`🌦 Chuva leve em: \`${location.name}\``)
           .setDescription(desc.replace(", sente-se: `"+current.feelslike+"°C`", "."))
           .addField("🌬 Meta-dados do ar:", `Umidade do oxigênio: \`${umidade}\` \nDireção, velocidade: __${current.winddisplay}__\n Chance de fenômeno (chuva etc.): \`${precip}\``)   
           .setFooter(`Atualizado às: ${current.observationtime}`)
            return message.reply(embed)
         };
       };
  if(current.skytext.toLowerCase() === "chuva leve") {
         if(current.feelslike !== current.temperature) {
           let embed = new Discord.RichEmbed()
           .setColor("#57ACDB")
           .setTitle(`🌦 Chuva leve em: \`${location.name}\``)
           .setDescription(desc)
           .addField("🌬 Meta-dados do ar:", `Umidade do oxigênio: \`${umidade}\` \nDireção, velocidade: __${current.winddisplay}__\n Chance de fenômeno (chuva etc.): \`${precip}\``)   
           .setFooter(`Atualizado às: ${current.observationtime}`)
            return message.reply(embed)
         };
  
       };
  //ENDS
  if(current.skytext.toLowerCase() === "na maior parte, ensolarado") {
         if(current.feelslike === current.temperature) {
           let embed = new Discord.RichEmbed()
           .setColor('#DCA01E')
           .setTitle(`☀ Quase tudo ensolarado em: \`${location.name}\``)
           .setDescription(desc.replace(", sente-se: `"+current.feelslike+"°C`", "."))
           .addField("🌬 Meta-dados do ar:", `Umidade do oxigênio: \`${umidade}\` \nDireção, velocidade: __${current.winddisplay}__\n Chance de fenômeno (chuva etc.): \`${precip}\``)   
           .setFooter(`Atualizado às: ${current.observationtime}`)
            return message.reply(embed)
         };
       };
  if(current.skytext.toLowerCase() === "na maior parte, ensolarado") {
         if(current.feelslike !== current.temperature) {
           let embed = new Discord.RichEmbed()
           .setColor("#DCA01E")
           .setTitle(`☀ Quase tudo ensolarado em: \`${location.name}\``)
           .setDescription(desc)
           .addField("🌬 Meta-dados do ar:", `Umidade do oxigênio: \`${umidade}\` \nDireção, velocidade: __${current.winddisplay}__\n Chance de fenômeno (chuva etc.): \`${precip}\``)   
           .setFooter(`Atualizado às: ${current.observationtime}`)
            return message.reply(embed)
         };
  
       };
 if(current.skytext.toLowerCase() === "tempestade de raios") {
         if(current.feelslike === current.temperature) {
           let embed = new Discord.RichEmbed()
           .setColor('#33647F')
           .setTitle(`⛈ Tempestade de raios em: \`${location.name}\``)
           .setDescription(desc.replace(", sente-se: `"+current.feelslike+"°C`", "."))
           .addField("🌬 Meta-dados do ar:", `Umidade do oxigênio: \`${umidade}\` \nDireção, velocidade: __${current.winddisplay}__\n Chance de fenômeno (chuva etc.): \`${precip}\``)   
           .setFooter(`Atualizado às: ${current.observationtime}`)
            return message.reply(embed)
         };
       };
  if(current.skytext.toLowerCase() === "tempestade de raios") {
         if(current.feelslike !== current.temperature) {
           let embed = new Discord.RichEmbed()
           .setColor("#33647F")
           .setTitle(`⛈ Tempestade de raios em: \`${location.name}\``)
           .setDescription(desc)
           .addField("🌬 Meta-dados do ar:", `Umidade do oxigênio: \`${umidade}\` \nDireção, velocidade: __${current.winddisplay}__\n Chance de fenômeno (chuva etc.): \`${precip}\``)   
           .setFooter(`Atualizado às: ${current.observationtime}`)
            return message.reply(embed)
         };
  
       };
//ENDS
if(current.skytext.toLowerCase() === "chuvas") {
         if(current.feelslike === current.temperature) {
           let embed = new Discord.RichEmbed()
           .setColor('#57ACDB')
           .setTitle(`🌧 Chuvas em: \`${location.name}\``)
           .setDescription(desc.replace(", sente-se: `"+current.feelslike+"°C`", "."))
           .addField("🌬 Meta-dados do ar:", `Umidade do oxigênio: \`${umidade}\` \nDireção, velocidade: __${current.winddisplay}__\n Chance de fenômeno (chuva etc.): \`${precip}\``)   
           .setFooter(`Atualizado às: ${current.observationtime}`)
            return message.reply(embed)
         };
       };
  if(current.skytext.toLowerCase() === "chuvas") {
         if(current.feelslike !== current.temperature) {
           let embed = new Discord.RichEmbed()
           .setColor("#57ACDB")
           .setTitle(`🌧 Chuvas em: \`${location.name}\``)
           .setDescription(desc)
           .addField("🌬 Meta-dados do ar:", `Umidade do oxigênio: \`${umidade}\` \nDireção, velocidade: __${current.winddisplay}__\n Chance de fenômeno (chuva etc.): \`${precip}\``)   
           .setFooter(`Atualizado às: ${current.observationtime}`)
            return message.reply(embed)
         };
  
       };
});
};
//Encerrado, vamos definir as aliases e o nome da função.
module.exports.config = {
    name: "clima",
    aliases: ["weather", "tempo"]
}
