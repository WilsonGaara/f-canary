//Vars:
var Discord = require('discord.js');
var fs = require('fs');
//Programação:
module.exports.run = async (bot, message, args, prefix, authornick, botnick) => {
    message.channel.send(`✅ Olá, ${botnick}, deseja ver o que posso fazer?`);
    message.channel.send("Meus comandos são: \n`"+bot.commands.map(c => c.config.name).join(', ')+"`\n Meu prefixo nesta guild é: `"+prefix+"`")  
    
    var embed = new Discord.RichEmbed()
    .setColor(`#36393f`)
    .setTimestamp()
    .setAuthor("Oferecido por Friday ^^", message.author.displayAvatarURL)
    .setDescription("Ah, vamos lá.\nAqui estão os comandos de música:\n`play` `np` `queue` `skip` `pause` `resume` `volume` e `loop`")
    .setFooter("Comandos de música 🎵", bot.user.avatarURL)
    message.channel.send(embed)
    }
module.exports.config = {
    name: "help",
    aliases: ["ajuda", "comandos", "cmds", "cmd", "commands"]
}
