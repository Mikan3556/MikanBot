const { Client, Intents, Message } = require('discord.js');
const Discord = require('discord.js')
const client = new Discord.Client({ intents: Object.keys(Intents.FLAGS) });

const GUILD = '919120389534253056'
const CHANNEL = '932077630088433674'

client.on('ready', () => {
    console.log('bot is now online')
    const guild = client.guilds.cache.get(GUILD)
    const channel = guild.channels.cache.get(CHANNEL)
    client.user.setActivity('メンバー数: ' + guild.memberCount,{type:'PLAYING'})
});

client.on('messageCreate',async msg => {
  if (msg.content === 'm?about') {
    msg.reply({
      embeds: [{
        title: 'Botの機能',
        fields: [
          {
            name: `・メンバーの参加,退出を通知\r・現在のサーバーの人数を表示`,
            value: '.'
          }
        ]
      }]
    })
  }
});

client.on('guildMemberAdd', member => {
    const welcome = client.channels.cache.get('919120389534253059')
    const currentDate= new Date();
    const channel = member.guild.channels.cache.get(CHANNEL)
    channel.setName('メンバー数: ' + member.guild.memberCount)
    welcome.send({
      embeds: [{
        title: 'サーバー参加ログ',
        description: `@${member.displayName} さんがサーバーに参加しました!`,
        fields: [
          {
            name: `.`,
            value: `まずは ${client.channels.cache.get('919124822385119243')} を読んでね\r${currentDate}`
          }
        ]
      },
    ]
    })
});

client.on('guildMemberRemove', member => {
    const welcome = client.channels.cache.get('919120389534253059')
    welcome.send(`@${member.displayName} left the server.`)
    if (member.guild.id === GUILD) {
      const channel = member.guild.channels.cache.get(CHANNEL)
      channel.setName('メンバー数: ' + member.guild.memberCount)
    }
});
