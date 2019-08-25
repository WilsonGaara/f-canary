const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Você não pode fazer isso.\n`Você precisa da permissão chamada: MANUSEAR_CARGOS`");
  if(!args[0]) {
 message.reply("> Oops! - parece que você não soube usar o comando corretamente... - \nTente usar como este exemplo: \n.autorole <nome do cargo / menção do cargo>")
}
  let autorole = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
  if (!args[0]) {
     autorole[message.guild.id] = {
         role: 0
     };
    fs.writeFile("./autorole.json", JSON.stringify(autorole), (err) => {
        if (err) console.log(err);
    });
  }
  if (args[0]) {
      let roles = args.join(" ")
      let role = message.guild.roles.find(x => x.name == roles) || message.guild.roles.find(x => x == roles)
      if (!role) return message.reply("Não encontrei esse cargo, tente colocar com o nome do cargo")
    autorole[message.guild.id] = {
        role: role.id
    };
    fs.writeFile("./autorole.json", JSON.stringify(autorole), (err) => {
         if (err) console.log(err)
    });
var emb = new Discord.RichEmbed()
.setTitle("**Oops!**")
.setDescription(":frowning: **|** Desculpe pelo ocorrido e por quaisquer inconveniência...\nBom, vou te mostrar uma hierarquia de erros, cuja hierarquia irá te mostrar todas as possibilidades registradas até agora de erros no comando: `autorole`:\n`Falta de permissão de Gerenciar Cargos.`\n (**SOLUÇÃO**): Me condecer a permissão de:\n[Gerenciar cargos](https://media.discordapp.net/attachments/467859967748210699/610192371505954817/unknown.png)\n`Membros com esta permissão podem criar e editar cargos abaixo deste.`\nCertifique-se de que você me colocou em um cargo com posição maior do que **[...]**\n o cargo a ser reivindicado automaticamente por novos membros.\n**E também se certifique de que:**\nO cargo setado não esteja na mesma posição do meu.\n<a:errado:607279323510079513> Problemas com minha ajuda no setor de: **Gerenciamento básico de Cargos**?\nEntão clique [aqui](https://support.discordapp.com/hc/pt-br/articles/214836687-Manual-B%C3%A1sico-de-Gerenciamento-de-Cargos) para melhores resultados! :blush:\n||Também não posso conceder cargos robóticos não é?||\nNão é por nada não mas recomendo arrumar rapidamente ou setar outro cargo...")
.setTimestamp()
.setFooter("Data de registro", bot.user.avatarURL)
    message.reply(`testando reivindicação automática do cargo: **${role.name}** em você!\nEspere um momento comigo neste bate-papo, estou registrando esse acontecimento na hierarquia de erros...`);
message.member.addRole(role).catch(error => message.channel.send(emb))
if(message.member.addRole(role)) message.reply("Prontinho, registrado.")
  }
}
module.exports.config = {
    name: "autorole",
    aliases: []
}