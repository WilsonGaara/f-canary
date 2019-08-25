const Discord = require('discord.js');
const bot = new Discord.Client();
module.exports.run = (bot, message, args) => {

  if(message.channel.nsfw == false){
    if(args.join(" ").toLowerCase() === "pedra"){
return message.reply("Bloqueado, só NSFW...")
    }
  }
    if (args.join(" ").length <= 0 ) return message.reply("Espero que esteja cansado(a) de tanto digitar... :unamused:")
    let embed = new Discord.RichEmbed()
    
    .setAuthor(`Pele de... ${args[0]}`, `https://mc-heads.net/body/${args[0]}`)
    .setColor("GOLD")
    .setImage(`https://mc-heads.net/body/${args[0]}`)
    .setDescription("Linkzinho: " + `[aqui](https://mc-heads.net/download/${args[0]})`)
    .setFooter(`De FRIDAY para: ${message.author.tag}`, `${bot.user.avatarURL}`)
    message.channel.send(embed)
};

    module.exports.config = {
        name: "pele",
        aliases: ["mineskin", "minecraftskin"]
    }