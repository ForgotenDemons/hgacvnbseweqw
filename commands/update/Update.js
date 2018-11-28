const {
    Command
  } = require('discord.js-commando');
  //const request = require('request-promise');
  const Roblox = require('roblox-js');
  const db = require('quick.db');

  module.exports = class UpdateCommand extends Command {
    constructor(client) {
      super(client, {
        name: 'update',
        group: 'update',
        memberName: 'update',
        description: 'Update',
        guarded: true
      });
    }
  
    async run(msg) {
  
      function giveRoles(id) {
        var maingroup = '4410645'; 
        Roblox.getRankInGroup(maingroup, id)
          .then(function(rank) {
            Roblox.getUsernameFromId(id)
              .then(function(username) {
               if (rank === 0) {
                   msg.author.send(`You're not on the group: Newingtont City Police Department`)
               }else
               if (rank === 1) {
                msg.member.setNickname(`[UR] ${username}`);
              } else
              if (rank === 2) {
                msg.member.setNickname(`[S] ${username}`);
              } else
              if (rank === 3) {
                msg.member.setNickname(`[LR] ${username}`);
              } else
              if (rank === 4) {
                msg.member.setNickname(`[LR] ${username}`);
              } else
              if (rank === 5) {
                msg.member.setNickname(`[LR] ${username}`);
              } else
              if (rank === 6) {
                msg.member.setNickname(`[LR] ${username}`);
              } else
              if (rank === 7) {
                msg.member.setNickname(`[LR] ${username}`);
              } else
              if (rank === 8) {
                msg.member.setNickname(`[MR] ${username}`);
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
            
            var group1 = '2622548'; //FBI
          Roblox.getRankInGroup(group1, id)
            .then(function(rank) {
              if (rank === 0) return;
              if (rank > 255) return;
              msg.member.addRole(msg.guild.roles.find('name', 'FBI')).catch(console.error);
            }).catch(function(err) {
              msg.channel.send('Unable to get rank from group');
              console.log(err);
            });
            
        });
    }
      const userInfo = await db.fetch(`user_${msg.author.id}`);
      if (userInfo !== null) {
        const id = userInfo;
        giveRoles(id);
      }
    }
  };
