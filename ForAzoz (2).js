const Discord = require("discord.js");
const IxRawan = new Discord.Client();
var prefix = "$";





IxRawan.on('ready', () => {
   console.log('Bot Is Online');
IxRawan.user.setStatus("Online")
});











const cuttweet = [
     'ßÊ ÊæíÊ ş- ÊÎíøá áæ Ãäß ÓÊÑÓã ÔíÁ æÍíÏ İíÕÈÍ ÍŞíŞÉ¡ ãÇĞÇ ÓÊÑÓã¿',
     'ßÊ ÊæíÊ ş- ÃßËÑ ÔíÁ íõÓßöÊ ÇáØİá ÈÑÃíß¿',
     'ßÊ ÊæíÊ ş- ÇáÍÑíÉ áÜ ... ¿',
     'ßÊ ÊæíÊ ş- ŞäÇÉ ÇáßÑÊæä ÇáãİÖáÉ İí ØİæáÊß¿',
     'ßÊ ÊæíÊ ş- ßáãÉ ááÕõÏÇÚ¿',
     'ßÊ ÊæíÊ ş- ãÇ ÇáÔíÁ ÇáĞí íõİÇÑŞß¿',
     'ßÊ ÊæíÊ ş- ãÇ ÇáÔíÁ ÇáĞí íõİÇÑŞß¿',
     'ßÊ ÊæíÊ ş- ãæŞİ ããíÒ İÚáÊå ãÚ ÔÎÕ æáÇ íÒÇá íĞßÑå áß¿',
     'ßÊ ÊæíÊ ş- ÃíåãÇ íäÊÕÑ¡ ÇáßÈÑíÇÁ Ãã ÇáÍÈ¿',
     'ßÊ ÊæíÊ| ÈÚÏ 10 Óäíä ÇíÔ ÈÊßæä ¿',

     'ßÊ ÊæíÊ ş- ãöä ÃÛÑÈ æÃÌãá ÇáÃÓãÇÁ ÇáÊí ãÑÊ Úáíß¿',
     'şßÊ ÊæíÊ| ÚãÑß ÔáÊ ãÕíÈÉ Úä ÔÎÕ ÈÑÛÈÊß ¿',
'ßÊ ÊæíÊ ş- ÃßËÑ ÓÄÇá æÌöøå Åáíß ãÄÎÑğÇ¿',
     'şßÊ ÊæíÊ|ãÇ åæ ÇáÔíÁ ÇáĞí íÌÚáß ÊÔÚÑ ÈÇáÎæİ¿',
     'şßÊ ÊæíÊ|æÔ íİÓÏ ÇáÕÏÇŞÉ¿',
     'şßÊ ÊæíÊ|ÔÎÕ áÇÊÑİÖ áå ØáÈÇ ¿',
     'şßÊ ÊæíÊ|ßã ãÑå ÎÓÑÊ ÔÎÕ ÊÍÈå¿.',
     'şßÊ ÊæíÊ|ßíİ ÊÊÚÇãá ãÚ ÇáÇÔÎÇÕ ÇáÓáÈííä ¿',
     'şßÊ ÊæíÊ|ßáãÉ ÊÔÚÑ ÈÇáÎÌá ÇĞÇ ŞíáÊ áß¿',
     'şßÊ ÊæíÊ|åá ÊõÎİí äÌÇÍß Ãæ ßÊ ßÊ ÊæíÊ | åá ÊÎİí äÌÇÍß Ãæ ÃÔíÇÆß ÇáÌãíáÉ ÎæİÇğ ãä ÇáÚíä æÇáÍÓÏ¿',
     'şßÊ ÊæíÊ|ÌÓãß ÇßÈÑ ãä ÚñãÑß Çæ ÇáÚßÓø ¿!',
     'şßÊ ÊæíÊ|ÃŞæì ßĞÈÉ ãÔÊ Úáíß ¿',
     'şßÊ ÊæíÊ|ÊÊÃËÑ ÈÏãæÚ ÔÎÕ íÈßí ŞÏÇãß ŞÈá ÊÚÑİ ÇáÓÈÈ ¿',
     'ßÊ ÊæíÊ|åá ÍÏË æÖÍíÊ ãä ÃÌá ÔÎÕò ÃÍÈÈÊ¿',
     'şßÊ ÊæíÊ|ÃßËÑ ÊØÈíŞ ÊÓÊÎÏãå ãÄÎÑğÇ¿',
     'şßÊ ÊæíÊ|şÇßËÑ Ôí íÑÖíß ÇĞÇ ÒÚáÊ ÈÏæä ÊİßíÑ ¿',
     'şßÊ ÊæíÊ|æÔ ãÍÊÇÌ ÚÔÇä Êßæä ãÈÓæØ ¿',
     'şßÊ ÊæíÊ|ãØáÈß ÇáæÍíÏ ÇáÍíä ¿',
     'şßÊ ÊæíÊ|- åá ÍÏË æÔÚÑÊ ÈÃäß ÇÑÊßÈÊ ÃÍÏ ÇáĞäæÈ ÃËäÇÁ ÇáÕíÇã¿',
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
"ÒíÑæ ßäÌ",
"ÃÑÖ ÇáÃÍáÇã",
"ÃáÈÑÇÒíá",
"ÇáÚÑÇŞ",
"ÃáããáßÉ ÃáÚÑÈíÉ ÃáÓÚæÏíÉ",
"ÇáŞÓØäØíäíÉ",
"ÇáäåÇíÉ",
"ÇãÇÒæä",
"ÌÇİÇÓßÑÈÊ",
"Óåáå ãæ ÕÚÈå",
"ØÈŞ ÑØÈ ãÑŞ ÈŞÑ",
"ãÊÌÑ",
"ÔÌÑÉ ÇáÃæÛíÑí",
"ÚÔ ÇáÚÕİæÑ",
"åáÇ ÈáÎãíÓ",
"ÇáÍæÊ ÇáÃÒÑŞ",
"ÈáÇÏ ÇáÑÇİÏíä",
"ßÇäíßí",
"ÊæßÇ",
"ÚÇÏá ÇãÇã",
"ÚãÑæ ĞíÇÈ",
"ÚãÇä",
"ãÓŞØ",
"ÈÛÏÇÏ ÚÇÕãÉ ÇáÚÑÇŞ",
"Playing Minecraft",
"Music",
"FaceBooK",
"YouTube",
"Infinity",
"ÇÍÈß ÏÑíã",
"Don't Let Me Down",
"Space",
"Instgram",
"Google",
"Viber",
];
        var x2 = ['IxRawan',
        "DeathGames",
        "ÒíÑæ ßäÌ",
        "ÃÑÖ ÇáÃÍáÇã",
		"ÃáÈÑÇÒíá",
		"ÇáÚÑÇŞ",
		"ÃáããáßÉ ÃáÚÑÈíÉ ÃáÓÚæÏíÉ",
		"ÇáŞÓØäØíäíÉ",
		"ÇáäåÇíÉ",
		"ÇãÇÒæä",
		"ÌÇİÇÓßÑÈÊ",
		"Óåáå ãæ ÕÚÈå",
		"ØÈŞ ÑØÈ ãÑŞ ÈŞÑ",
		"ãÊÌÑ",
		"ÔÌÑÉ ÇáÃæÛíÑí",
		"ÚÔ ÇáÚÕİæÑ",
		"åáÇ ÈáÎãíÓ",
		"ÇáÍæÊ ÇáÃÒÑŞ",
        "ÈáÇÏ ÇáÑÇİÏíä",
        "ßÇäíßí",
        "ÊæßÇ",
        "ÚÇÏá ÇãÇã",
        "ÚãÑæ ĞíÇÈ",
        "ÚãÇä",
        "ãÓŞØ",
        "ÈÛÏÇÏ ÚÇÕãÉ ÇáÚÑÇŞ",
        "Playing Minecraft",
        "Music",
        "FaceBooK",
        "YouTube",
        "Infinity",
        "ÇÍÈß ÏÑíã",
        "Don't Let Me Down",
		"Space",
		"Instgram",
		"Google",
		"Viber",
		
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` Çæá ÔÎÕ íßÊÈ :  __**${x[x3]}**__
áÏíß 15 ËÇäíÉ ááÇÌÇÈÉ`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: áŞÏ ÇäÊåì ÇáæŞÊ æáã íŞã ÃÍÏ ÈÇáÃÌÇÈÉ ÈÔßá ÕÍíÍ 
            ÇáÅÌÂÈÉ ÇáÕÍíÍÉÉ åí __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} ÕÍ Úáíß íÇæÍÔ ßÊÈÊ ÇáßáãÉ ŞÈá áÇ íÎáÕ ÇáæŞÊ  `);
        })
        })
    }
})

IxRawan.on('message', puz => {
    if (puz.content == prefix + "puzzle") {
        var x = ["ãÇ åí ÍÇÓÉ ÇáÔã ÚäÏ ÇáËÚÈÇä ¿",
"ãÇ åæ ÇáÔí ÇáĞí íßÓæ ÇáäÇÓ æ åæ ÚÇÑ ÈÏæä ãáÇÈÓ ¿",
"ãÇ åæ ÇáÔí ÇáĞí áÇ íÌÑí æ áÇ íãÔí ¿",
"ãÇ åæ ÅÓã ÇáÔåÑ ÇáãíáÇÏí ÇáĞí ÅĞÇ ÍĞİÊ Ãæáå , ÊÍæá Åáì ÅÓã İÇßåå ¿",
"ãÇ åæ ÇáÔí ÇáĞí áÇ íÏÎá ÇáÅ ÅĞÇ ÖÑÈ Úáì ÑÃÓå ¿",
"ãÇ åæ ÇáÔíÁ ÇáĞí ÇÓãå Úáì áæäå ¿",
"ãÇ åæ ÇáÔí ÇáĞí ßáãÇ ÒÇÏ äŞÕ ¿",
"ãÇ åí ÇáÊí ÊÍÑŞ äİÓåÇ áÊİíÏ ÛíÑåÇ ¿",
"ßáå ËŞæÈ æ ãÚ Ğáß íÍİÙ ÇáãÇÁ ¿",
"ãÇ åæ ÇáĞí áÍãå ãä ÇáÏÇÎá æ ÚÙãå ãä ÇáÎÇÑÌ ¿",
"íÓÊØíÚ Çä íÎÊÑŞ ÇáÒÌÇÌ ãä Ïæä ßÓÑå .. İãÇ åæ ¿",
];
        var x2 = ['ÇááÓÇä',
		"ÇáÇÈÑå",
        "ÇáãÇÁ",
		"ÊãæÒ",
		"ÇáãÓãÇÑ",
		"ÇáÈíÖÉ",
		"ÇáÚãÑ",
		"ÇáÔãÚÉ",
		"ÇáÇÓİäÌ",
		"ÇáÓáÍİÇÉ",
		"ÇáÖæÁ",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        puz.channel.send(`ÇáÓÄÇá åæ:  __**${x[x3]}**__
áÏíß 20 ËÇäíÉ ááÇÌÇÈÉ`).then(msg1=> {
            var r = puz.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return puz.channel.send(`:negative_squared_cross_mark: áŞÏ ÇäÊåì ÇáæŞÊ æáã íŞã ÃÍÏ ÈÇáÃÌÇÈÉ ÈÔßá ÕÍíÍ 
            `)
        })
        
        r.then((collected)=> {
            puz.channel.send(`${collected.first().author} ÕÍ Úáíß íÇæÍÔ ßÊÈÊ ÇáßáãÉ ŞÈá áÇ íÎáÕ ÇáæŞÊ  `);
        })
        })
    }
})

IxRawan.on('message', fkk => {
    if (fkk.content == prefix + "dismantling") {
        var x = ["ÇáãÊÇÍ ááÌãíÚ áÇ íÊÇÍ áí",
"ÎÚÇÎÚ",
"İíáÇ",
"ÈÑíÁ",
"ÈÓã Çááå ÇáÑÍãä ÇáÑÍíã",
"ÇáÖÑæÑÉ",
"ÏäíÇ",
"ÕÇÑã",
"ãÇÊ",
"ÔÚÈÇä ÔÈÚÇä",
"ÃáÚÑÇŞ",
];
        var x2 = ['Ç á ã Ê Ç Í á á Ì ã í Ú á Ç í Ê Ç Í á ì',
		"Î Ú Ç Î Ú",
        "İ í á Ç",
		"È Ñ í Á",
		"È Ó ã Ç á á å Ç á Ñ Í ã ä Ç á Ñ Í í ã",
		"Ç á Ö Ñ æ Ñ É",
		"Ï ä í Ç",
		"Õ Ç Ñ ã",
		"ã Ç Ê",
		"Ô Ú È Ç ä Ô È Ú Ç ä",
		"Ã á Ú Ñ Ç Ş",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        fkk.channel.send(`Çæá ÔÎÕ íİßß :  __**${x[x3]}**__
áÏíß 15 ËÇäíÉ ááÇÌÇÈÉ`).then(msg1=> {
            var r = fkk.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return fkk.channel.send(`:negative_squared_cross_mark: áŞÏ ÇäÊåì ÇáæŞÊ æáã íŞã ÃÍÏ ÈÇáÃÌÇÈÉ ÈÔßá ÕÍíÍ 
            ÇáÅÌÂÈÉ ÇáÕÍíÍÉÉ åí __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            fkk.channel.send(`${collected.first().author} ÕÍ Úáíß íÇæÍÔ ßÊÈÊ ÇáßáãÉ ŞÈá áÇ íÎáÕ ÇáæŞÊ `);
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
       .addField('     **$cuttweet** ' ,' ``áÚÈÉ ßÊ ÊæíÊ`` ')
       .addField('     **$sra7a**  ' ,' ``ÇáÈæÊ íÓÆáß ÇÓÆáÉ áÇÒã ÊÌÇæÈ ÈÕÑÇÍÉ`` ')
       .addField('     **$puzzle**  ' ,' ``ÇáÈæÊ íÌíÈáß ÇáÛÇÒ áÇÒã ÊÚÑİåÇ`` ')
       .addField('     **$speed **  ' ,' ``ÇáÈæÊ ÑÍ íÚØíßã ßáãÉ æÇáÇÓÑÚ ÑÍ íßÊÈåÇ`` ')
	   .addField('     **$dismantling**' ,' ``áÚÈÉ İßß`` ')
       .setColor('RANDOM')
         message.author.sendEmbed(embed);
           }
       });




IxRawan.login(ÇÓãæ);