const Discord = require("discord.js");
const IxRawan = new Discord.Client();
var prefix = "$";





IxRawan.on('ready', () => {
   console.log('Bot Is Online');
IxRawan.user.setStatus("Online")
});











const cuttweet = [
     '�� ���� �- ����� �� ��� ����� ��� ���� ����� ����ɡ ���� �����',
     '�� ���� �- ���� ��� ������ ����� ����߿',
     '�� ���� �- ������ �� ... �',
     '�� ���� �- ���� ������� ������� �� �����߿',
     '�� ���� �- ���� ������ڿ',
     '�� ���� �- �� ����� ���� ������߿',
     '�� ���� �- �� ����� ���� ������߿',
     '�� ���� �- ���� ���� ����� �� ��� ��� ���� ����� �߿',
     '�� ���� �- ����� ����ѡ �������� �� ���ȿ',
     '�� ����| ��� 10 ���� ��� ����� �',

     '�� ���� �- ��� ���� ����� ������� ���� ��� ���߿',
     '��� ����| ���� ��� ����� �� ��� ������ �',
'�� ���� �- ���� ���� ����� ���� �����ǿ',
     '��� ����|�� �� ����� ���� ����� ���� �����ݿ',
     '��� ����|�� ���� ������ɿ',
     '��� ����|��� ������ �� ���� �',
     '��� ����|�� ��� ���� ��� ����.',
     '��� ����|��� ������ �� ������� �������� �',
     '��� ����|���� ���� ������ ��� ���� �߿',
     '��� ����|�� ����� ����� �� �� �� ���� | �� ���� ����� �� ������ ������� ����� �� ����� �����Ͽ',
     '��� ����|���� ���� �� ����� �� ������ �!',
     '��� ����|���� ���� ��� ���� �',
     '��� ����|����� ����� ��� ���� ����� ��� ���� ����� �',
     '�� ����|�� ��� ����� �� ��� ���� ����ʿ',
     '��� ����|���� ����� ������� �����ǿ',
     '��� ����|����� �� ����� ��� ���� ���� ����� �',
     '��� ����|�� ����� ���� ���� ����� �',
     '��� ����|����� ������ ����� �',
     '��� ����|- �� ��� ����� ���� ������ ��� ������ ����� ������',
]

IxRawan.on('message', message => {
  if (message.content === `$cuttweet`) {
message.channel.sendMessage({embed: {
  color: 3547003,
  description: `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`
}});
};
});










IxRawan.on('message', msg => {
    if (msg.content == prefix + "speed") {
        var x = ["Azoz",
"DeathGames",
"���� ���",
"��� �������",
"��������",
"������",
"������� ������� ��������",
"�����������",
"�������",
"������",
"���������",
"���� �� ����",
"��� ��� ��� ���",
"����",
"���� ��������",
"�� �������",
"��� ������",
"����� ������",
"���� ��������",
"������",
"����",
"���� ����",
"���� ����",
"����",
"����",
"����� ����� ������",
"Playing Minecraft",
"Music",
"FaceBooK",
"YouTube",
"Infinity",
"���� ����",
"Don't Let Me Down",
"Space",
"Instgram",
"Google",
"Viber",
];
        var x2 = ['IxRawan',
        "DeathGames",
        "���� ���",
        "��� �������",
		"��������",
		"������",
		"������� ������� ��������",
		"�����������",
		"�������",
		"������",
		"���������",
		"���� �� ����",
		"��� ��� ��� ���",
		"����",
		"���� ��������",
		"�� �������",
		"��� ������",
		"����� ������",
        "���� ��������",
        "������",
        "����",
        "���� ����",
        "���� ����",
        "����",
        "����",
        "����� ����� ������",
        "Playing Minecraft",
        "Music",
        "FaceBooK",
        "YouTube",
        "Infinity",
        "���� ����",
        "Don't Let Me Down",
		"Space",
		"Instgram",
		"Google",
		"Viber",
		
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` ��� ��� ���� :  __**${x[x3]}**__
���� 15 ����� �������`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: ��� ����� ����� ��� ��� ��� �������� ���� ���� 
            ������� �������� �� __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} �� ���� ����� ���� ������ ��� �� ���� �����  `);
        })
        })
    }
})

IxRawan.on('message', puz => {
    if (puz.content == prefix + "puzzle") {
        var x = ["�� �� ���� ���� ��� ������� �",
"�� �� ���� ���� ���� ����� � �� ��� ���� ����� �",
"�� �� ���� ���� �� ���� � �� ���� �",
"�� �� ��� ����� �������� ���� ��� ���� ���� , ���� ��� ��� ����� �",
"�� �� ���� ���� �� ���� ��� ��� ��� ��� ���� �",
"�� �� ����� ���� ���� ��� ���� �",
"�� �� ���� ���� ���� ��� ��� �",
"�� �� ���� ���� ����� ����� ����� �",
"��� ���� � �� ��� ���� ����� �",
"�� �� ���� ���� �� ������ � ���� �� ������ �",
"������ �� ����� ������ �� ��� ���� .. ��� �� �",
];
        var x2 = ['������',
		"������",
        "�����",
		"����",
		"�������",
		"������",
		"�����",
		"������",
		"�������",
		"��������",
		"�����",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        puz.channel.send(`������ ��:  __**${x[x3]}**__
���� 20 ����� �������`).then(msg1=> {
            var r = puz.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return puz.channel.send(`:negative_squared_cross_mark: ��� ����� ����� ��� ��� ��� �������� ���� ���� 
            `)
        })
        
        r.then((collected)=> {
            puz.channel.send(`${collected.first().author} �� ���� ����� ���� ������ ��� �� ���� �����  `);
        })
        })
    }
})

IxRawan.on('message', fkk => {
    if (fkk.content == prefix + "dismantling") {
        var x = ["������ ������ �� ���� ��",
"�����",
"����",
"����",
"��� ���� ������ ������",
"�������",
"����",
"����",
"���",
"����� �����",
"������",
];
        var x2 = ['� � � � � � � � � � � � � � � � � � � �',
		"� � � � �",
        "� � � �",
		"� � � �",
		"� � � � � � � � � � � � � � � � � � �",
		"� � � � � � �",
		"� � � �",
		"� � � �",
		"� � �",
		"� � � � � � � � � �",
		"� � � � � �",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        fkk.channel.send(`��� ��� ���� :  __**${x[x3]}**__
���� 15 ����� �������`).then(msg1=> {
            var r = fkk.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return fkk.channel.send(`:negative_squared_cross_mark: ��� ����� ����� ��� ��� ��� �������� ���� ���� 
            ������� �������� �� __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            fkk.channel.send(`${collected.first().author} �� ���� ����� ���� ������ ��� �� ���� ����� `);
        })
        })
    }
})


IxRawan.on('ready', () => {
   console.log(`----------------`);
      console.log(` Bot By IxRawan_`);
        console.log(`----------------`);
      console.log(`ON ${IxRawan.guilds.size} Servers `);
    console.log(`----------------`);
  console.log(`Logged in as ${IxRawan.user.tag}!`);
IxRawan.user.setGame(`$help|ArabicGamesCommunity`,"http://twitch.tv/IDK")
IxRawan.user.setStatus("Online")
});










        IxRawan.on('message', message => {
            if (message.content === prefix + "help") {
            let embed = new Discord.RichEmbed()
       .setThumbnail(message.author.avatarURL)
       .addField('     **Bot Created By** `IxRawan`', 'IxRawan ID: 516307527806484490')
       .addField('     **$cuttweet** ' ,' ``���� �� ����`` ')
       .addField('     **$sra7a**  ' ,' ``����� ����� ����� ���� ����� ������`` ')
       .addField('     **$puzzle**  ' ,' ``����� ������ ����� ���� ������`` ')
       .addField('     **$speed **  ' ,' ``����� �� ������ ���� ������� �� ������`` ')
	   .addField('     **$dismantling**' ,' ``���� ���`` ')
       .setColor('RANDOM')
         message.author.sendEmbed(embed);
           }
       });




IxRawan.login(����);