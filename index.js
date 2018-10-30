const Discord = require(discord.js);

const client = new Discord.Client();

var prefix = "*";

bot.on('ready', function () {
    console.log ('Je suis pret')

client.login ("NTA2OTQ0MjI5NjMzOTQ5NzYz.DrphLw.3Li_swPMZeqOsGmetBdcViV_sWg");

client.on ('message', message => { 
    if (message.content === prefix + "aide"){
        message.channel.send ("Salut moi c'est @OnizukaBOT, un bot créer par un français fan de GTO. Ce bot est 100% français et il y aura sans doute des mises a jours. Si vous avez une question venez sur mon discord ! https://discord.gg/fubC8Jk%22)
    }

    bot.login(cfg.token);
});
