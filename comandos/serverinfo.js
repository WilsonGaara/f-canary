//Vars:
var Discord = require('discord.js');
var fs = require('fs');
//Programação:
module.exports.run = async (bot, message, args) => {
  		
        
    
	const moment = require('moment');
	moment.locale('pt-BR');  
	var timeout = `${message.guild.afkTimeout}`;
function verificationLevel() {
var guildVerification = message.guild.verificationLevel
if  (guildVerification == "0") {
return "Nenhum"
} else if (guildVerification == "1") {
return ("Baixo")
 












} else if  (guildVerification == "2") {
return ("Médio")
} else if (guildVerification == "3") {
return ("Alto")
 } else if (guildVerification == "4") {
return ("Extremo")
}
}

function tipo() {
var guildVerification = message.channel.type
if (guildVerification == "text") {
return (":notepad_spiral: l Texto")
 } else if  (guildVerification == "voice") {
return (":microphone: l Voz")

}
}

function regiao() {
var guildVerification = message.guild.region
if(!guildVerification)return"Não identificado."
if  (guildVerification == "en-us") {
return ":flag_us: Estados Unidos"
} else if (guildVerification == `brazil`) {
return (":flag_br: Brasil")
 } else if  (guildVerification == "russia") {
return (":flag_ru: Rússia")
} else if (guildVerification == "singapore") {
return (":flag_sg: Singapura")
 } else if (guildVerification == "hongkong") {
return (":flag_hk: Hong Kong")
} else if (guildVerification == undefined) {
return (":face_palm: **|** Eu não fiz mais functions, desculpe, volte mais tarde")
} else if (guildVerification == 'undefined') {
return (":face_palm: **|** Eu não fiz mais functions, desculpe, volte mais tarde")
} else if (guildVerification == "eu-west") {
return (":flag_eu: Europa Oeste")
} else if (guildVerification == "us-east") {
return (":flag_us: Costa Leste dos Estados Unidos")
} else if (guildVerification == "sydney") {
return (":flag_au: Sydney (Dentro da austrália)")
} else if (guildVerification == "us-central") {
return (":flag_us: Estados Unidos Central")
} else if (guildVerification == "us-south") {
return (":flag_us: Região Sul dos Estados Unidos")
} else if (guildVerification == "us-west") {
return (":flag_us: Região Oeste dos Estados Unidos")
} else if (guildVerification == "london") {
return (":flag_gb: Londres ")
} else if(guildVerification == "japan") {
return (":flag_jp: Japão")
} else if(guildVerification == "eu-central") {
return (":flag_eu: **|** Europa Central (Região na Europa)")
} else if(guildVerification == "india") {
return (":flag_in: **|** India")


}
}

 const Discord = require('discord.js')

function regiao2() {
var guildVerification2 = bot.guilds.get(args[0]).region
if  (guildVerification2 == "en-us") {
return ":flag_us: Estados Unidos"
} else if (guildVerification2 == `brazil`) {
return (":flag_br: Brasil")
 } else if  (guildVerification2 == "russia") {
return (":flag_ru: Rússia")
} else if (guildVerification2 == "singapore") {
return (":flag_sg: Singapura")
 } else if (guildVerification2 == "hongkong") {
return (":flag_hk: Hong Kong")
} else if (guildVerification2 == undefined) {
return (":face_palm: **|** Eu não fiz mais functions, desculpe, volte mais tarde")
} else if (guildVerification2 == 'undefined') {
return (":face_palm: **|** Eu não fiz mais functions, desculpe, volte mais tarde")
} else if (guildVerification2 == "eu-west") {
return (":flag_eu: Europa Oeste")
} else if (guildVerification2 == "us-east") {
return (":flag_us: Costa Leste dos Estados Unidos")
} else if (guildVerification2 == "sydney") {
return (":flag_au: Sydney (Dentro da austrália)")
} else if (guildVerification2 == "us-central") {
return (":flag_us: Estados Unidos Central")
} else if (guildVerification2 == "us-south") {
return (":flag_us: Região Sul dos Estados Unidos")
} else if (guildVerification2 == "us-west") {
return (":flag_us: Região Oeste dos Estados Unidos")
} else if (guildVerification2 == "london") {
return (":flag_gb: Londres ")
} else if(guildVerification2 == "japan") {
 return (":flag_jp: Japão")
} else if(guildVerification2 == "eu-central") {
 return (":flag_eu: **|** Europa Central (Região na Europa)")
} else if(guildVerification2 == "india") {
return (":flag_in: **|** India")

}
}
           
var min = Math.floor(timeout/(1*60))%60;
var horas = Math.floor(timeout/(1*60*60))%24;
var timeoutconv = horas + ' hrs e ' + min + ' mins';  
function afkchannel(){
var afk = message.guild.afkChannel
if(afk != undefined){
 return afk;
}else{
 return "Não detectado";
}
}

let string = ''
for(var i = 0;i < message.guild.roles.size;i++){

string  += `${message.guild.roles.array()[i].name}` + `, `;

}

function grandi(){
var botChecking = message.guild.large;
 if (botChecking == true) {
	 return "Esta guild é grande. (Mais de 250 membros)";
 } else {
if (botChecking == false){
	 return "Esta guild é pequena. (Menos de 250 membros)"
}
 }
}
function grandi2(){
 var botChecking2 = bot.guilds.get(args[0]).large;
	 if (botChecking2 == true) {
		 return "Esta guild é grande. (Mais de 250 membros)";
	 } else {
 if (botChecking2 == false){
		 return "Esta guild é pequena. (Menos de 250 membros)"
 }
	 }
 }
			
if(message.guild.iconURL) {
								let fala = message.guild.iconURL
if(fala == null) fala.replace('null', bot.user.avatarURL)
							var convert = fala.replace('jpg', 'png');
};
if(!message.guild.iconURL) {
	var embed2 = new Discord.RichEmbed()
							.setTitle("<:dis_logo:501512019141459978> **"+message.guild+"**")
							.setDescription(grandi())

							.addField('💻 ID' , message.guild.id, true)
							.addField('👑 Dono', message.guild.owner, true)
							.addField('🌎 Região', regiao() || "🔍 Não detectado na minha hierarquia de regiões 😕\n💾 Padrão: `"+message.guild.region+"`", true)
							.addField(`💬 Canais (${message.guild.channels.size - message.guild.channels.filter(channel => channel.type == "category").size})`, `:pencil: **Texto:** ${message.guild.channels.filter(channel => channel.type == 'text').size}\n:speaking_head: **Voz:** ${message.guild.channels.filter(channel => channel.type == 'voice').size}`, true)
							.addField(`📅 Criado em`, moment(message.guild.createdAt).format('lll'), true)
							.addField(`🌟 Entrei aqui em`,moment(message.guild.joinedAt).format(`lll`), true)
							.addField(`👥 Membros (${message.guild.memberCount})`, `<:on1:501512018256330782> **Alerta:** ${message.guild.presences.filter(channel => channel.status == 'online').size} <:aus2:614936022978920451> **Fora:** ${message.guild.presences.filter(channel => channel.status == 'idle').size} <:dnd2:614936955167178962> **Ocupado:** ${message.guild.presences.filter(channel => channel.status == 'dnd').size} <:inv2:614937679720611900> **Off:** ${message.guild.members.filter(member => member.user.presence.status === 'offline').size}\n🙋 **Pessoas:** ${message.guild.memberCount - message.guild.members.filter(member => member.user.bot).size}\n🤖 **Robôs:** ${message.guild.members.filter(member => member.user.bot).size}`, true)
							.setColor('BLUE')
.setThumbnail(bot.user.avatarURL)
						

			return message.channel.send(embed2), message.channel.send("🌟 Eu **AMO** estar aqui!")
} else {
						
							var embed2 = new Discord.RichEmbed()
						.setTitle("<:dis_logo:501512019141459978> **"+message.guild+"**")
							.setDescription(grandi())
							.addField('💻 ID' , message.guild.id, true)
							.addField('👑 Dono', message.guild.owner, true)
							.addField('🌎 Região', regiao() || "🔍 Não detectado na minha hierarquia de regiões 😕\n💾 Padrão: `"+message.guild.region+"`", true)
							.addField(`💬 Canais (${message.guild.channels.size - message.guild.channels.filter(channel => channel.type == "category").size})`, `:pencil: **Texto:** ${message.guild.channels.filter(channel => channel.type == 'text').size}\n:speaking_head: **Voz:** ${message.guild.channels.filter(channel => channel.type == 'voice').size}`, true)
							.addField(`📅 Criado em`, moment(message.guild.createdAt).format('lll'), true)
							.addField(`🌟 Entrei aqui em`,moment(message.guild.joinedAt).format(`lll`), true)
							.addField(`👥 Membros (${message.guild.memberCount})`, `<:on1:501512018256330782> **Alerta:** ${message.guild.presences.filter(channel => channel.status == 'online').size} <:aus2:614936022978920451> **Fora:** ${message.guild.presences.filter(channel => channel.status == 'idle').size} <:dnd2:614936955167178962> **Ocupado:** ${message.guild.presences.filter(channel => channel.status == 'dnd').size} <:inv2:614937679720611900> **Off:** ${message.guild.members.filter(member => member.user.presence.status === 'offline').size}\n🙋 **Pessoas:** ${message.guild.memberCount - message.guild.members.filter(member => member.user.bot).size}\n🤖 **Robôs:** ${message.guild.members.filter(member => member.user.bot).size}`, true)
							.setColor('BLUE')
							.setThumbnail(convert)
					
			return message.channel.send(embed2), message.channel.send("🌟 Eu **AMO** estar aqui!")
}}
//Encerrado, vamos definir as aliases e o nome da função.
module.exports.config = {
    name: "serverinfo",
    aliases: ["si"]
}
