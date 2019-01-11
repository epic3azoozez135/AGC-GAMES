const Discord = require("discord.js");
const IxRawan = new Discord.Client();
var prefix = "E#";





IxRawan.on('ready', () => {
   console.log('Bot Is Online');
IxRawan.user.setStatus("Online")
});











const cuttweet = [
     'ﬂ   ÊÌ  ˛-  ŒÌ¯· ·Ê √‰ﬂ ” —”„ ‘Ì¡ ÊÕÌœ ›Ì’»Õ ÕﬁÌﬁ…° „«–« ” —”„ø',
     'ﬂ   ÊÌ  ˛- √ﬂÀ— ‘Ì¡ Ìı”ﬂˆ  «·ÿ›· »—√Ìﬂø',
     'ﬂ   ÊÌ  ˛- «·Õ—Ì… ·‹ ... ø',
     'ﬂ   ÊÌ  ˛- ﬁ‰«… «·ﬂ— Ê‰ «·„›÷·… ›Ì ÿ›Ê· ﬂø',
     'ﬂ   ÊÌ  ˛- ﬂ·„… ··’ıœ«⁄ø',
     'ﬂ   ÊÌ  ˛- „« «·‘Ì¡ «·–Ì Ìı›«—ﬁﬂø',
     'ﬂ   ÊÌ  ˛- „« «·‘Ì¡ «·–Ì Ìı›«—ﬁﬂø',
     'ﬂ   ÊÌ  ˛- „Êﬁ› „„Ì“ ›⁄· Â „⁄ ‘Œ’ Ê·« Ì“«· Ì–ﬂ—Â ·ﬂø',
     'ﬂ   ÊÌ  ˛- √ÌÂ„« Ì‰ ’—° «·ﬂ»—Ì«¡ √„ «·Õ»ø',
     'ﬂ   ÊÌ | »⁄œ 10 ”‰Ì‰ «Ì‘ » ﬂÊ‰ ø',

     'ﬂ   ÊÌ  ˛- „ˆ‰ √€—» Ê√Ã„· «·√”„«¡ «· Ì „—  ⁄·Ìﬂø',
     '˛ﬂ   ÊÌ | ⁄„—ﬂ ‘·  „’Ì»… ⁄‰ ‘Œ’ »—€» ﬂ ø',
'ﬂ   ÊÌ  ˛- √ﬂÀ— ”ƒ«· ÊÃˆ¯Â ≈·Ìﬂ „ƒŒ—«ø',
     '˛ﬂ   ÊÌ |„« ÂÊ «·‘Ì¡ «·–Ì ÌÃ⁄·ﬂ  ‘⁄— »«·ŒÊ›ø',
     '˛ﬂ   ÊÌ |Ê‘ Ì›”œ «·’œ«ﬁ…ø',
     '˛ﬂ   ÊÌ |‘Œ’ ·« —›÷ ·Â ÿ·»« ø',
     '˛ﬂ   ÊÌ |ﬂ„ „—Â Œ”—  ‘Œ’  Õ»Âø.',
     '˛ﬂ   ÊÌ |ﬂÌ›   ⁄«„· „⁄ «·«‘Œ«’ «·”·»ÌÌ‰ ø',
     '˛ﬂ   ÊÌ |ﬂ·„…  ‘⁄— »«·ŒÃ· «–« ﬁÌ·  ·ﬂø',
     '˛ﬂ   ÊÌ |Â·  ıŒ›Ì ‰Ã«Õﬂ √Ê ﬂ  ﬂ   ÊÌ  | Â·  Œ›Ì ‰Ã«Õﬂ √Ê √‘Ì«∆ﬂ «·Ã„Ì·… ŒÊ›« „‰ «·⁄Ì‰ Ê«·Õ”œø',
     '˛ﬂ   ÊÌ |Ã”„ﬂ «ﬂ»— „‰ ⁄Ò„—ﬂ «Ê «·⁄ﬂ”¯ ø!',
     '˛ﬂ   ÊÌ |√ﬁÊÏ ﬂ–»… „‘  ⁄·Ìﬂ ø',
     '˛ﬂ   ÊÌ |  √À— »œ„Ê⁄ ‘Œ’ Ì»ﬂÌ ﬁœ«„ﬂ ﬁ»·  ⁄—› «·”»» ø',
     'ﬂ   ÊÌ |Â· ÕœÀ Ê÷ÕÌ  „‰ √Ã· ‘Œ’Ú √Õ»» ø',
     '˛ﬂ   ÊÌ |√ﬂÀ—  ÿ»Ìﬁ  ” Œœ„Â „ƒŒ—«ø',
     '˛ﬂ   ÊÌ |˛«ﬂÀ— ‘Ì Ì—÷Ìﬂ «–« “⁄·  »œÊ‰  ›ﬂÌ— ø',
     '˛ﬂ   ÊÌ |Ê‘ „Õ «Ã ⁄‘«‰  ﬂÊ‰ „»”Êÿ ø',
     '˛ﬂ   ÊÌ |„ÿ·»ﬂ «·ÊÕÌœ «·ÕÌ‰ ø',
     '˛ﬂ   ÊÌ |- Â· ÕœÀ Ê‘⁄—  »√‰ﬂ «— ﬂ»  √Õœ «·–‰Ê» √À‰«¡ «·’Ì«„ø',
]

IxRawan.on('message', message => {
  if (message.content === prefix + `cuttweet`) {
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
"“Ì—Ê ﬂ‰Ã",
"√—÷ «·√Õ·«„",
"√·»—«“Ì·",
"«·⁄—«ﬁ",
"√·„„·ﬂ… √·⁄—»Ì… √·”⁄ÊœÌ…",
"«·ﬁ”ÿ‰ÿÌ‰Ì…",
"«·‰Â«Ì…",
"«„«“Ê‰",
"Ã«›«”ﬂ—» ",
"”Â·Â „Ê ’⁄»Â",
"ÿ»ﬁ —ÿ» „—ﬁ »ﬁ—",
"„ Ã—",
"‘Ã—… «·√Ê€Ì—Ì",
"⁄‘ «·⁄’›Ê—",
"Â·« »·Œ„Ì”",
"«·ÕÊ  «·√“—ﬁ",
"»·«œ «·—«›œÌ‰",
"ﬂ«‰ÌﬂÌ",
" Êﬂ«",
"⁄«œ· «„«„",
"⁄„—Ê –Ì«»",
"⁄„«‰",
"„”ﬁÿ",
"»€œ«œ ⁄«’„… «·⁄—«ﬁ",
"Playing Minecraft",
"Music",
"FaceBooK",
"YouTube",
"Infinity",
"«Õ»ﬂ œ—Ì„",
"Don't Let Me Down",
"Space",
"Instgram",
"Google",
"Viber",
];
        var x2 = ['IxRawan',
        "DeathGames",
        "“Ì—Ê ﬂ‰Ã",
        "√—÷ «·√Õ·«„",
		"√·»—«“Ì·",
		"«·⁄—«ﬁ",
		"√·„„·ﬂ… √·⁄—»Ì… √·”⁄ÊœÌ…",
		"«·ﬁ”ÿ‰ÿÌ‰Ì…",
		"«·‰Â«Ì…",
		"«„«“Ê‰",
		"Ã«›«”ﬂ—» ",
		"”Â·Â „Ê ’⁄»Â",
		"ÿ»ﬁ —ÿ» „—ﬁ »ﬁ—",
		"„ Ã—",
		"‘Ã—… «·√Ê€Ì—Ì",
		"⁄‘ «·⁄’›Ê—",
		"Â·« »·Œ„Ì”",
		"«·ÕÊ  «·√“—ﬁ",
        "»·«œ «·—«›œÌ‰",
        "ﬂ«‰ÌﬂÌ",
        " Êﬂ«",
        "⁄«œ· «„«„",
        "⁄„—Ê –Ì«»",
        "⁄„«‰",
        "„”ﬁÿ",
        "»€œ«œ ⁄«’„… «·⁄—«ﬁ",
        "Playing Minecraft",
        "Music",
        "FaceBooK",
        "YouTube",
        "Infinity",
        "«Õ»ﬂ œ—Ì„",
        "Don't Let Me Down",
		"Space",
		"Instgram",
		"Google",
		"Viber",
		
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` «Ê· ‘Œ’ Ìﬂ » :  __**${x[x3]}**__
·œÌﬂ 15 À«‰Ì… ··«Ã«»…`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: ·ﬁœ «‰ ÂÏ «·Êﬁ  Ê·„ Ìﬁ„ √Õœ »«·√Ã«»… »‘ﬂ· ’ÕÌÕ 
            «·≈Ã¬»… «·’ÕÌÕ…… ÂÌ __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} ’Õ ⁄·Ìﬂ Ì«ÊÕ‘ ﬂ »  «·ﬂ·„… ﬁ»· ·« ÌŒ·’ «·Êﬁ   `);
        })
        })
    }
})

IxRawan.on('message', puz => {
    if (puz.content == prefix + "puzzle") {
        var x = ["„« ÂÌ Õ«”… «·‘„ ⁄‰œ «·À⁄»«‰ ø",
"„« ÂÊ «·‘Ì «·–Ì Ìﬂ”Ê «·‰«” Ê ÂÊ ⁄«— »œÊ‰ „·«»” ø",
"„« ÂÊ «·‘Ì «·–Ì ·« ÌÃ—Ì Ê ·« Ì„‘Ì ø",
"„« ÂÊ ≈”„ «·‘Â— «·„Ì·«œÌ «·–Ì ≈–« Õ–›  √Ê·Â ,  ÕÊ· ≈·Ï ≈”„ ›«ﬂÂÂ ø",
"„« ÂÊ «·‘Ì «·–Ì ·« ÌœŒ· «·≈ ≈–« ÷—» ⁄·Ï —√”Â ø",
"„« ÂÊ «·‘Ì¡ «·–Ì «”„Â ⁄·Ï ·Ê‰Â ø",
"„« ÂÊ «·‘Ì «·–Ì ﬂ·„« “«œ ‰ﬁ’ ø",
"„« ÂÌ «· Ì  Õ—ﬁ ‰›”Â« · ›Ìœ €Ì—Â« ø",
"ﬂ·Â ÀﬁÊ» Ê „⁄ –·ﬂ ÌÕ›Ÿ «·„«¡ ø",
"„« ÂÊ «·–Ì ·Õ„Â „‰ «·œ«Œ· Ê ⁄Ÿ„Â „‰ «·Œ«—Ã ø",
"Ì” ÿÌ⁄ «‰ ÌŒ —ﬁ «·“Ã«Ã „‰ œÊ‰ ﬂ”—Â .. ›„« ÂÊ ø",
];
        var x2 = ['«··”«‰',
		"«·«»—Â",
        "«·„«¡",
		" „Ê“",
		"«·„”„«—",
		"«·»Ì÷…",
		"«·⁄„—",
		"«·‘„⁄…",
		"«·«”›‰Ã",
		"«·”·Õ›«…",
		"«·÷Ê¡",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        puz.channel.send(`«·”ƒ«· ÂÊ:  __**${x[x3]}**__
·œÌﬂ 20 À«‰Ì… ··«Ã«»…`).then(msg1=> {
            var r = puz.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return puz.channel.send(`:negative_squared_cross_mark: ·ﬁœ «‰ ÂÏ «·Êﬁ  Ê·„ Ìﬁ„ √Õœ »«·√Ã«»… »‘ﬂ· ’ÕÌÕ 
            `)
        })
        
        r.then((collected)=> {
            puz.channel.send(`${collected.first().author} ’Õ ⁄·Ìﬂ Ì«ÊÕ‘ ﬂ »  «·ﬂ·„… ﬁ»· ·« ÌŒ·’ «·Êﬁ   `);
        })
        })
    }
})

IxRawan.on('message', fkk => {
    if (fkk.content == prefix + "dismantling") {
        var x = ["«·„ «Õ ··Ã„Ì⁄ ·« Ì «Õ ·Ì",
"Œ⁄«Œ⁄",
"›Ì·«",
"»—Ì¡",
"»”„ «··Â «·—Õ„‰ «·—ÕÌ„",
"«·÷—Ê—…",
"œ‰Ì«",
"’«—„",
"„« ",
"‘⁄»«‰ ‘»⁄«‰",
"√·⁄—«ﬁ",
];
        var x2 = ['« · „   « Õ · · Ã „ Ì ⁄ · « Ì   « Õ · Ï',
		"Œ ⁄ « Œ ⁄",
        "› Ì · «",
		"» — Ì ¡",
		"» ” „ « · · Â « · — Õ „ ‰ « · — Õ Ì „",
		"« · ÷ — Ê — …",
		"œ ‰ Ì «",
		"’ « — „",
		"„ «  ",
		"‘ ⁄ » « ‰ ‘ » ⁄ « ‰",
		"√ · ⁄ — « ﬁ",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        fkk.channel.send(`«Ê· ‘Œ’ Ì›ﬂﬂ :  __**${x[x3]}**__
·œÌﬂ 15 À«‰Ì… ··«Ã«»…`).then(msg1=> {
            var r = fkk.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return fkk.channel.send(`:negative_squared_cross_mark: ·ﬁœ «‰ ÂÏ «·Êﬁ  Ê·„ Ìﬁ„ √Õœ »«·√Ã«»… »‘ﬂ· ’ÕÌÕ 
            «·≈Ã¬»… «·’ÕÌÕ…… ÂÌ __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            fkk.channel.send(`${collected.first().author} ’Õ ⁄·Ìﬂ Ì«ÊÕ‘ ﬂ »  «·ﬂ·„… ﬁ»· ·« ÌŒ·’ «·Êﬁ  `);
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
IxRawan.user.setGame(`E#help|E#Invite`,"http://twitch.tv/IDK")
IxRawan.user.setStatus("Online")
});






IxRawan.on('message', msg => {
	if(msg.content === prefix + "invite") {
		msg.author.send(`
**Bot By IxRawan_**
**IxRawan_ ID: 516307527806484490**

**‘ﬂ—√ ·ﬂ ·√÷«›… «·»Ê  «·Ï ”Ì—›—ﬂ**
Link: https://discordapp.com/api/oauth2/authorize?client_id=533345455019393034&permissions=8&scope=bot
:heart:
:kissing_heart:
`);

	}
});

IxRawan.on('message', message => {
	if(message.content === "E!invite") {
		message.author.send(`
		‘ﬂ—√ ·«” Œœ«„ﬂ ·»Ê ‰«
		—«»ÿ «÷«›… «·»Ê :
		https://discordapp.com/api/oauth2/authorize?client_id=533305158315278336&permissions=8&scope=bot
		Bot Created By IxRawan`);
	}
});




        IxRawan.on('message', message => {
            if (message.content === prefix + "help") {
            let embed = new Discord.RichEmbed()
       .setThumbnail(message.author.avatarURL)
       .addField('     **Bot Created By** `IxRawan`', 'IxRawan ID: 516307527806484490')
       .addField('     **E#cuttweet** ' ,' ``·⁄»… ﬂ   ÊÌ `` ')
       .addField('     **E#sra7a**  ' ,' ``«·»Ê  Ì”∆·ﬂ «”∆·… ·«“„  Ã«Ê» »’—«Õ…`` ')
       .addField('     **E#puzzle**  ' ,' ``«·»Ê  ÌÃÌ»·ﬂ «·€«“ ·«“„  ⁄—›Â«`` ')
       .addField('     **E#speed **  ' ,' ``«·»Ê  —Õ Ì⁄ÿÌﬂ„ ﬂ·„… Ê«·«”—⁄ —Õ Ìﬂ »Â«`` ')
	   .addField('     **E#dismantling**' ,' ``·⁄»… ›ﬂﬂ`` ')
       .setColor('RANDOM')
         message.author.sendEmbed(embed);
           }
       });




IxRawan.login("NTMzMzQ1NDU1MDE5MzkzMDM0.Dxps-A.kdqXOIKEalzmQzPTJo2Sb-ZjFi8");