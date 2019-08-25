const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Não pode fazer isso.\nRequer MANAGE_MESSAGES, ou Gerenciar Mensagens.");
  if(!args[0]) return message.channel.send("Você não mencionou a quantia de mensagens a serem metidas à extinção cara.");
if(args[0] >= 101) return message.reply("Máximo de mensagens: 100")
if(args[0] >= 101) return message.reply("Mínimo de mensagens: 2")
  message.channel.bulkDelete(args[0]).catch(error => message.reply(":frowning: **-** Que pena... Algo falhou:\nAqui está uma hierarquia de problemas, veja qual se encaixa mais e conserte!\n[`Mensagens a serem metidas à extinção são mais antigas do que 2 semanas (lê-se 14 dias)`]\n[`Sem permissões`]")).then(() => {
  message.channel.send(`🚀 - Eu apaguei ***${args[0]}*** mensagens.`).then(msg => msg.delete(2000));
});

}

module.exports.config = {
    name: "apagar",
    aliases: ["clear", "limpar"]
}