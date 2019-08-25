module.exports.run = async (bot, message, args, prefix) => {
  
if(message.author.id == "395005096527790083") {
if(message.author.id !== "577271597564428299") {
    try {
    
        const code = args.join(" ");
        let evaled = eval(code);
    
        if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
            const Discord = require('discord.js')
            const clean = text => {
                if (typeof(text) === "string")
                    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
                else
                        return text;
            }
    var emb = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .addField('Input', '```js\n'+args.join(" ")+'```')
    .setColor('GREEN')
    .addField('Output', '```js\n'+clean(evaled)+'```')
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL)
        message.channel.send(emb)
    } catch (err) {
        const clean = text => {
            if (typeof(text) === "string")
                return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                    return text;
        }
        const Discord2 = require('discord.js')
        var embed = new Discord2.RichEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .addField('Erro', '```'+clean(err)+'```')
        .setColor('RED')
        .setFooter('Desculpe, mas você errou em alguma coisa ai viu!')
        message.channel.send(embed)
    }
    }}

if(message.author.id == "577271597564428299") {
if(message.author.id !== '395005096527790083') {
  try {
     const code = args.join(" ");
    
        let evaled = eval(code);
    
        if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
            const Discord = require('discord.js')
            const clean = text => {
                if (typeof(text) === "string")
                    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
                else
                        return text;
            }
    var emb = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .addField('Input', '```js\n'+args.join(" ")+'```')
    .setColor('GREEN')
    .addField('Output', '```js\n'+clean(evaled)+'```')
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL)
        message.channel.send(emb)
    } catch (err) {
        const clean = text => {
            if (typeof(text) === "string")
                return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                    return text;
        }
        const Discord2 = require('discord.js')
        var embed = new Discord2.RichEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .addField('Erro', '```'+clean(err)+'```')
        .setColor('RED')
        .setFooter('Desculpe, mas você errou em alguma coisa ai viu!')
        message.channel.send(embed)
    }
    }
}}

    module.exports.config = {
     
name: "eval",
        aliases: []
    }