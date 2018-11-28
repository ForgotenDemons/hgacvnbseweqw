const {
    Command
  } = require('discord.js-commando');
  //const request = require('request-promise');
  const Discord = require('discord.js')

  module.exports = class UpdateCommand extends Command {
    constructor(client) {
      super(client, {
        name: 'commands',
        group: 'commands',
        memberName: 'commands',
        description: 'Commands',
        guarded: true
      });
    }
    async run(msg) {
        const embed = new Discord.RichEmbed()
        .setColor(0x28cd83)
        .addField('!verify', `Verifying your Discord account with the specified ROBLOX username`, false)
        .addField('!update', `Updates the author's role and nickname.`, false)
        .addField('!remove', `Removes user from the database and removes all roles associated with the user.`, false)
        .addField('!commands', `Display this Message!`)
        msg.author.send(embed)
    }
}
