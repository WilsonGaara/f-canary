const Discord = require("discord.js");
var fs =require('fs')
let coins = require('../coins.json')

module.exports.run = async (bot, message, args) => {



 //async function replyWithInvite() {
 // let invite = await bot.channels.get("559419025474584601").createInvite({
   // maxAge: 86400, //maximum time for the invite, in milliseconds
   // maxUses: 1 //maximum times it can be used
  //}, `Requested with command by ${message.author.tag}`).catch(console.log);

//message.reply(invite ? `Here's your invite: ${invite}` : "There has been an error during the creation of the invite.");
//}
  //r//eplyWithInvite()
  //!coins
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let uCoins = coins[message.author.id].coins


  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(`${message.author.username}. É Friday, dia de gastar money. Aqui está o valor total:`, message.author.displayAvatarURL)
  .setColor("#00FF00")
  .setDescription("```js\n"+uCoins+" A$ 💰```")

  message.channel.send(coinEmbed).then(msg => {msg.delete(60000)});

}

module.exports.config = {
  name: "coins",
  aliases: []
}