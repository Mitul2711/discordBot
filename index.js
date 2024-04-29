const { Client, GatewayIntentBits} = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });


client.on("messageCreate", (message) => {
    console.log(message.content);
})

client.login("MTIzNDM4NDE3MzQ5NDQzOTkzNg.GON-Ur.N1wcrwlHCCnwlXI7xU7xoVxAptTCKefRPwxaXY");