const { Client, Intents, Message } = require('discord.js');
const { message } = require('prompt');
const { server } = require('websocket');
const client = new Client({ intents: Object.keys(Intents.FLAGS) });

client.on('ready', () => {
    console.log(`${client.user.tag}でログインしています`)
    console.log('Botが起動しました。')
    client.user.setStatus('online')
    client.user.setActivity(`Server:${client.guilds.cache.size}, Ping:${client.ws.ping}ms`,{type:'PLAYING'})
});

client.on('messageCreate',async msg => {
    if (msg.content === 'm!help') {
        msg.reply({
            embeds: [{
                title: 'コマンド一覧',
                fields: [
                    {
                        name: 'm!help',
                        value: 'コマンド一覧を表示'
                    },
                    {
                        name: 'm!ping',
                        value: 'pingを表示'
                    },
                    {
                        name: 'm!link',
                        value: 'みかんのsnsのリンクを表示'
                    },
                    {
                        name: 'm!spammer',
                        value: `spamチャンネルにスパムします(30回スパムメッセージを送信したら自動的に止まります)`
                    }
                ]
            }]
        })
    }
});

client.on('messageCreate',async msg => {
    if (msg.content === 'm!ping') {
        msg.reply(`現在のping:${client.ws.ping}ms`)
    }
});

client.on('messageCreate',async msg => {
    if (msg.content === 'm!link') {
        msg.reply({
            embeds: [{
                title: 'みかんのsnsリンク',
                fields: [
                    {
                        name: 'YouTube',
                        value: 'https://www.youtube.com/channel/UCi6LGIzO56OKgIwvWTS-C1Q'
                    },
                    {
                        name: 'Twitter',
                        value: 'https://twitter.com/2552k1'
                    },
                    {
                        name: 'Discord',
                        value: 'https://discord.gg/qvdPA84sAt'
                    },
                    {
                        name: 'Twitch',
                        value:'https://twitch.tv/k2552minecraft/'
                    },
                    {
                        name: 'Xboxゲーマータグ',
                        value: 'メインアカウント:MCMikan3556\rサブアカウント:k2552'
                    }
                ]
            }]
        })
    }
});

client.on('messageCreate',async msg => {
    if (msg.content === 'm!spammer') {
        const channel = client.channels.cache.get('919213973071613952')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
        channel.send('This bot created by mikan.')
    }
});
