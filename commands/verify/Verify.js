const {
  Command
} = require('discord.js-commando');
//const request = require('request-promise');
const Roblox = require('roblox-js');
const db = require('quick.db');
const Discord = require('discord.js')

module.exports = class VerifyCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'verify',
      group: 'verify',
      memberName: 'verify',
      description: 'Verify',
      guarded: true
    });
  }

  async run(msg) {
    if (msg.channel.id !== '488928204577439764') return;

    function giveRoles(id) {
      var maingroup = '4410645'; 
      Roblox.getRankInGroup(maingroup, id)
        .then(function(rank) {
          Roblox.getUsernameFromId(id)
            .then(function(username) {
              if (rank === 0) {
                msg.author.send(`You're not on the group: Newingtont City Police Department`);
              } else 
              if (rank >= 1) {
                msg.member.addRole(msg.guild.roles.find('name', 'Verified')).catch(console.error);
              }
              if (rank === 1) {
                msg.member.setNickname(`[UR] ${username}`);
                msg.member.addRole(msg.guild.roles.find('name', '[UR] Cadet')).catch(console.error);
              } else
              if (rank === 2) {
                msg.member.setNickname(`[S] ${username}`);
                msg.member.addRole(msg.guild.roles.find('name', 'Suspended')).catch(console.error);
              } else
              if (rank === 3) {
                msg.member.setNickname(`[LR] ${username}`);
                msg.member.addRole(msg.guild.roles.find('name', '[LR] Officer')).catch(console.error);
              } else
              if (rank === 4) {
                msg.member.setNickname(`[LR] ${username}`);
                msg.member.addRole(msg.guild.roles.find('name', '[LR] Corporal')).catch(console.error);
              } else
              if (rank === 5) {
                msg.member.setNickname(`[LR] ${username}`);
                msg.member.addRole(msg.guild.roles.find('name', '[LR] Constable')).catch(console.error);
              } else
              if (rank === 6) {
                msg.member.setNickname(`[LR] ${username}`);
                msg.member.addRole(msg.guild.roles.find('name', '[LR] Sergeant')).catch(console.error);
              } else
              if (rank === 7) {
                msg.member.setNickname(`[LR] ${username}`);
                msg.member.addRole(msg.guild.roles.find('name', '[LR] Sergeant Major')).catch(console.error);
              } else
              if (rank === 8) {
                msg.member.setNickname(`[MR] ${username}`);
                msg.member.addRole(msg.guild.roles.find('name', '[LR] Sergeant Major')).catch(console.error);
              } else
              if (rank === 9) {
                msg.member.setNickname(`[MR] ${username}`);
              } else
                if (rank === 10) {
                msg.member.setNickname(`[MR] ${username}`);
              } else
                if (rank === 11) {
                msg.member.setNickname(`[MR] ${username}`);
              } else
                if (rank === 12) {
                msg.member.setNickname(`[MR] ${username}`);
              } else
                if (rank === 16) {
                msg.member.setNickname(`[HR] ${username}`);
                msg.member.addRole(msg.guild.roles.find('name', 'HR')).catch(console.error);
              } else
                if (rank === 17) {
                msg.member.setNickname(`[HR] ${username}`);
                msg.member.addRole(msg.guild.roles.find('name', 'HR')).catch(console.error);
              } else
                if (rank === 20) {
                msg.member.setNickname(`[HC] ${username}`);
                msg.member.addRole(msg.guild.roles.find('name', 'HC')).catch(console.error);
              } else
                if (rank === 244) {
                msg.member.setNickname(`[HC] ${username}`);
                msg.member.addRole(msg.guild.roles.find('name', 'HC')).catch(console.error);
              } else
                if (rank === 254) {
                msg.member.setNickname(`[DC] ${username}`);
                msg.member.addRole(msg.guild.roles.find('name', 'Mayor')).catch(console.error);
              } else
              if (rank === 255) {
                try {
                  msg.member.setNickname(`[C] ${username}`);
                } catch (e) {
                  console.log('USERISOWNER');
                }
                msg.member.addRole(msg.guild.roles.find('name', '****Chief Of Police****')).catch(console.error); //CHIEF RANKS
              } else
              if (rank > 255) {
                verifyMsg.edit('Rank is above 255. This is not normal.');
              }
            }).catch(function(err) {
              msg.channel.send('Unable to get rank from group');
              console.log(err);
            });
        });
    }

    const verifyMsg = await msg.reply('Checking account info...');
    const userInfo = await db.fetch(`user_${msg.author.id}`);
    if (userInfo !== null) {
      const id = userInfo;
      giveRoles(id);
      return verifyMsg.edit('Your account has already been verified!');
    }

    function makeid() {
      var text = '';
      var words = ['Apple', 'Watch', 'Not', 'Phone', 'Group', 'Green', 'Yellow', 'Watch', 'We', 'Game', 'A', 'Been', 'Info', 'Rank', 'Good', 'New', 'Quick', 'Hi', 'No', 'Yes', 'Star', 'Package', 'United', 'Dog', 'Cool', 'Strange', 'One', 'Town', 'Cow', 'Sky', 'Wonder', 'Divide', 'House', 'Kingdom', 'America', 'Cats', 'Best', 'Palace', 'Ship', 'Army', 'Dark', 'Boss', 'Horse', 'Place', 'Sweet', 'Stairs', 'Night', 'Grass', 'Sun', 'Moon', 'Care', 'Star', 'Earth', 'Ally', 'West', 'Money', 'Diplomat', 'Woof', 'Meow', 'Toy', 'Box', 'Conquest', 'Tiger', 'Battle', 'Attack', 'Tree', 'Apple', 'Door', 'Hero', 'Light', 'Fox', 'Bright', 'Great', 'Bread'];
      var word1 = words[Math.floor(Math.random() * words.length)];
      var word2 = words[Math.floor(Math.random() * words.length)];
      var word3 = words[Math.floor(Math.random() * words.length)];
      var word4 = words[Math.floor(Math.random() * words.length)];
      var word5 = words[Math.floor(Math.random() * words.length)];
      text = word1 + ' ' + word2 + ' ' + word3 + ' ' + word4 + ' ' + word5;
      return text;
    }
    const text = makeid();
    try {
      verifyMsg.edit('Check your DM\'s!');
      const embed = new Discord.RichEmbed()
      .setColor(0x28cd83)
      .addField('Verification Process', `What is your ROBLOX username?`, false)
      msg.author.send(embed).then(() => {
        msg.author.dmChannel.awaitMessages(response => response.content, {
          max: 1,
          time: 60000,
          errors: ['time'],
        })
          .then((collected) => {
            try {
              Roblox.getIdFromUsername(collected.first().content)
                .then(function(id) {
                  try {
                    const embed = new Discord.RichEmbed()
                    .setColor(0x28cd83)
                    .addField('Verification Process', `Please update your Status with the following Code then confirm the change by replying \`done\` to this message`)
                    .addField('Code', `${text}`)
                    msg.author.send(embed).then(() => {
                      msg.author.dmChannel.awaitMessages(response => response.content, {
                        max: 1,
                        time: 180000,
                        errors: ['time'],
                      }).then((collected2) => {
                        if (!collected2.first().content === 'done') return msg.author.send('Verify Canceled');
                        Roblox.getStatus(id)
                          .then(function(blurb) {
                            if (blurb === text) {
                              db.set(`user_${msg.author.id}`, id);
                              const logUser = db.fetch(`user_${msg.author.id}`);
                              const embed = new Discord.RichEmbed()
                              .setColor(0x28cd83)
                              .addField('Sucessfully your account Verified',`You\'re account has been verified! \n\nJoin our Discord Server https://discord.gg/2NGPMDV`)
                              msg.author.send(embed);
                              verifyMsg.delete();
                              console.log(logUser);
                              giveRoles(id);
                            } else {
                              console.log(text);
                              const embed = new Discord.RichEmbed()
                              .setColor(0xb83e3e)
                              .setDescription(`I couldn't find the code on your ROBLOX status!`)
                              return;
                            }
                          }).catch(function(err) {
                            msg.author.send('API Error. Code 8');
                            console.log('Code 8 ' + err);
                          });
                      }).catch(function(err) {
                        msg.author.send('Code 7');
                        console.log('Code 7 ' + err);
                      });
                    }).catch(function(err) {
                      msg.auther.send('An error occured. Code 6');
                      console.log('Code 6 ' + err);
                    });

                  } catch (err) {
                    msg.author.send('Failed to get user data from Roblox API. Code 5');
                    console.log('Code 5 ' + err);
                    return verifyMsg.delete();
                  }

                }).catch(function(err) {
                  console.log('Code 4 ' + err);
                  msg.author.send('Failed to get Roblox ID from Username. Make sure you have given a vaild username. Code 4');
                  return verifyMsg.delete();
                });


            } catch (err) {
              console.log('Code 3 ' + err);
              msg.author.send('An error occured while fetching that user\'s data. Code 3');
              return verifyMsg.delete();
            }
            //msg.channel.send(`Your verify code is \`${text}\``);
            //msg.channel.send(`The username message was: ${collected.first().content}`);
          })
          .catch(() => {
            msg.author.send('There was no message sent within the time limit! Code 2');
            return verifyMsg.delete();
          });
      }).catch(() => {
        msg.channel.send('An error occured! This maybe due to your DM\'s being disabled Code 1');
      });
    } catch (e) {
      console.log(e);
      return verifyMsg.edit('An error occured while fetching that user\'s data. Code 0');
    }
  }
};
