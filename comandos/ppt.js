//Vars:
var Discord = require('discord.js');
var fs = require('fs');
//Programação:
module.exports.run = async (bot, message, args) => {
    let args2 = args.join(``).toLowerCase()
    if(args2.length < 1) {
        message.channel.send('Espero que você esteja cansado(a) de tanto digitar...')
        
  message.reply(":x: **|** Um erro ocorreu, convém argumentar: pedra, papel ou tesoura. Obrigado.")
    } else {
   if(args[0].toLowerCase() != 'papel' && args[0].toLowerCase() != 'pedra' && args[0].toLowerCase() != 'tesoura') return message.reply('Você não colocou um argumento válido.')
                var texto = [`Você escolheu :new_moon:, eu escolhi :newspaper: \n :flag_black:  **| Que pena... Você perdeu, e errar é humano, mas o que vale é a intenção**`, `Você escolheu :new_moon:, eu escolhi :new_moon: \n :flag_white: **I Empate! ** `, `:tada: **I** Você escolheu :new_moon:, eu escolhi :scissors: \n :small_blue_diamond: **I Parabéns você ganhou! **`];
                const random = texto[Math.floor(Math.random() * texto.length)];
console.log(texto.length)
                var texto2 = [`Você escolheu :newspaper:, eu escolhi :scissors: \n :flag_black:  **| Que pena... Você perdeu, e errar é humano, mas o que vale é a intenção**`, `Você escolheu :newspaper:, eu escolhi :newspaper: \n :flag_white: **I Empate! ** `, `:tada: **I** Você escolheu :newspaper:, eu escolhi :new_moon: \n :small_blue_diamond: **I Parabéns você ganhou! **`];
                const random2 = texto2[Math.floor(Math.random() * texto2.length)];
      console.log(texto2.length)
                var texto3 = [`Você escolheu :scissors:, eu escolhi :new_moon: \n :flag_black:  **| Que pena... Você perdeu, e errar é humano, mas o que vale é a intenção**`, `Você escolheu :scissors:, eu escolhi :scissors: \n :flag_white: **I Empate! ** `, `:tada: **I** Você escolheu :scissors:, eu escolhi :newspaper: \n :small_blue_diamond: **I Parabéns você ganhou! **`];
                const random3 = texto3[Math.floor(Math.random() * texto3.length)];
      console.log(texto3.length)
        if(args2.includes(`esoura`)) {
            message.channel.send(random3)
        } else { 
                if (args2.includes(`edra`)) {
                    message.channel.send(random);
                } else {
                    if (args2.includes('apel')) {
                        message.channel.send(random2);
                    } else {
    }  
  }
  }
  }
};
//Encerrado, vamos definir as aliases e o nome da função.
module.exports.config = {
    name: "ppt",
    aliases: ["pedra-papel-e-tesoura", "pedrapapeltesoura", "pedrapapeletesoura", "jogar-ppt", "pedra.papel.tesoura"]
}