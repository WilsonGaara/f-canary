//Vars:
var Discord = require('discord.js'); //Define que talvez usaremos discord.js nisso aqui.
var fs = require('fs'); // Define que talvez usaremos fs (controle de diretórios, pastas) aqui.
//Programação:
module.exports.run = async (bot, message, args) => { //Passa o valor de bot, message e args pra cá!
    message.channel.send(`Pong!`).then(message1 => { 
message1.edit(message.author+`\n🏓 | Pong! (tempo de resposta): ${Math.round(Date.now() - message1.createdTimestamp)}**ms**\n💗 | Batida cardíaca (websocket): ${parseInt(bot.ping)}**ms**\n📖 | Dicionário:\n**ms** - quer dizer milisegundos;\n**websocket** - servidor que se comunica via TCP; geralmente executado na web.`)
    });    
};
//Encerrado, vamos definir as aliases e o nome da função.
module.exports.config = {
    name: "ping",
    aliases: ["ms", "lag", "latência", "ping", "latency"]
}