const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
if(!args[0]) return message.reply("Espero que esteja cansado(a) de tanto digitar... :unamused:")
    let embed = new Discord.RichEmbed()
    
    .setAuthor(`Cabass... de ${args[0]}`, `https://mc-heads.net/head/${args[0]}`)
    .setColor("#00ffff")
    .setImage(`https://mc-heads.net/head/${args[0]}`)
    
    .setDescription("Tente baixar por: " + `[*aqui*](https://mc-heads.net/download/${args[0]})`)
    message.channel.send(embed)
};

module.exports.config = {
    name: "mccabass",
    aliases: ["minehead", "mccabeca"]
}