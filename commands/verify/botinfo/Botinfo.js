const {
    Command
  } = require('discord.js-commando');
  //const request = require('request-promise');
  const Discord = require('discord.js')
  
  module.exports = class BotInfoCommand extends Command {
    constructor(client) {
      super(client, {
        name: 'botinfo',
        group: 'botinfo',
        memberName: 'botinfo',
        description: 'Botinfo',
        guarded: true
      });
    }
  
    async run(msg) {
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
        const cpu = process.cpuUsage().system / 1024 / 1024;
        const duration = moment(bot.uptime).format(' D [days], H [hrs], m [mins], s [secs]')
        let embed = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.displayAvatarURL)
        .addField('Uptime', duration, true)
        .addField('CPU', Math.round(cpu * 100) + '%', true)
        .addField('Ram', (used).toFixed(2) + 'MB', true)
        .addField('Guilds', bot.guilds.size, true)
        .addField('Users', bot.users.size.toLocaleString(), true)
        .addField('Version', Discord.version, true)
        .setThumbnail(bot.user.displayAvatarURL)
        .setColor("RANDOM");
        message.channel.send({ embed: embed });
        return;
        }
    }