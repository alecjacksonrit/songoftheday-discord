const Discord = require('discord.js')
const config = require('./config.json')
const utils = require('./utils/util.js')

const client = new Discord.Client()

client.on('ready', () => {
    console.log('The client is ready!')
})

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

utils.loadModules("events");
utils.loadModules("commands", true);

client.login(process.env.DISCORD_TOKEN)