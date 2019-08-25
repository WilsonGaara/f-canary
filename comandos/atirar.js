const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let tiroUser = message.guild.member(message.mentions.users.first());
if (!tiroUser) return message.channel.send("Você usou o comando incorretamente: use .atirar @user)")

  let images2 = ['https://media.tenor.com/images/6b51efa5d12a9be16cfb66adb13b376d/tenor.gif', 'https://media.tenor.com/images/846178b9365be154470e85a17d270191/tenor.gif', 'https://media.tenor.com/images/22e7a0e8033b817892d92674fc1fb439/tenor.gif', 'http://78.media.tumblr.com/4bb74cde3875443b714c788cc9e55a74/tumblr_mqp3rhj5uO1s9s0bdo1_500.gif', 'http://www.cinemascape.org.uk/images/machine_gun_cat.gif'];
let cariEmbed = new Discord.RichEmbed()
    .setDescription("Toooma balaaa")
    .addField("Você ganhou uma bala na cabeça:", `${tiroUser}`)
    .addField("Quem atirou:", `${message.author}`)
    .setImage(images2[Math.floor(images2.length * Math.random())])


message.channel.send(cariEmbed);
}
module.exports.config = {
    name: "atirar",
    aliases: []
}