//Vars:
var Discord = require('discord.js'); //Define que talvez usaremos discord.js nisso aqui.
var fs = require('fs'); // Define que talvez usaremos fs (controle de diretórios, pastas) aqui.
//Programação:
module.exports.run = async (bot, message, args) => { //Passa o valor de bot, message e args pra cá!
  var a =  bot.users.filter(user => user.discriminator === message.author.discriminator).map(user => user.tag).join('\n')

if(a.length < 0) {
a = "Só tem você que eu conheço com esse número, então não posso mostrar os demais."
}
var aa = bot.users.filter(user => user.discriminator === message.author.discriminator).map(user => user.tag)[Math.floor(Math.random() * bot.users.filter(user => user.discriminator === message.author.discriminator).map(user => user.tag).length)]
if(a.length >= 2048){
a = bot.users.filter(user => user.discriminator === message.author.discriminator).map(user => user.tag).slice('', bot.users.filter(user => user.discriminator === message.author.discriminator).map(user => user.tag).length / 2)[Math.floor(Math.random() * bot.users.filter(user => user.discriminator === message.author.discriminator).map(user => user.tag).length)]
}

var embed = new Discord.RichEmbed()
.setColor('BLUE')
.setTitle("🌍 Usuários com o discriminador "+message.author.discriminator)
.setDescription(`**Existem `+"`"+`${bot.users.filter(user => user.discriminator === message.author.discriminator).map(user => user.tag).length}`+"`"+` usuários que eu conheço com o discriminador `+"`"+message.author.discriminator+"`!**\n\n"+`No Discord, um "discriminator" é um númerozinho que vem depois do teu nome, no teu caso, o seu é **${message.author.discriminator}**. Todo mundo tem um discriminator aleatório entre **0001** e **9999** (alguns definem os seus com Nitro...) e, para alterar seu discriminator de graça, você terá que alterar teu nome de usuário do Discord para um nome que possua um discriminator igual o seu. Se você trocar seu nome para `+"`"+aa+"`"+`, o seu discriminator vai mudar pra um outro número de 4 digitos vindo diretamente do Inferno, brincadeira.\n\n`+"`"+a+"`.")
message.channel.send(embed)
};
//Encerrado, vamos definir as aliases e o nome da função.
module.exports.config = {
    name: "discrim",
    aliases: ['discriminator']
}