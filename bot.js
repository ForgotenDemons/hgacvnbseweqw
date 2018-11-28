var token = "NTE3NDY4MjU2MTY1MDM2MDM0.DuCpkw.wLEYOQEycCtKqPXDgi-FCCwC21E";
const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
	commandPrefix: '!',
	owner: '458500270830125056',
	invite: 'https://discord.gg/2NGPMDV',
	disableEveryone: true,
	unknownCommandResponse: false,
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['verify', 'Verify'],
		['botinfo', 'Botinfo'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands({
		help: false,
	})
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
	client.user.setActivity('!commands | V1.0.5');
});


client.on('error', console.error);

client.login(token);
