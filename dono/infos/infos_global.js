const infobemvindo = (prefix) => {
return `

Olá, este comando é para informar, como você deve ativar o bem vindo, e lembrando, esse bemvindo, contém uma legenda diferente, a cada grupo que for colocado, o bemvindo2 tem essa função também. 


(ATENÇÃO - BEMVINDO2 NÃO TEM FOTO, SÓ LEGENDA. 
E É IGUAL O PROCEDIMENTO, SÓ MUDAR DE ${prefix}bemvindo pra ${prefix}bemvindo2 e os outros a mesma coisa, legendabv2 legendasaiu2, é isso... )

Pará ativar o comando, é nescessario ativar, com:

${prefix}bemvindo 1 

Pará Desativar :

${prefix}bemvindo 0


Pronto. 

Pará criar a legenda você deve digitar este comando :

${prefix}legendabv e colocar a legenda que você quer que o bot envie, após alguém entrar no grupo, e tem essas coisas. 

#nomedogp#

#numerobot#

#numerodele#

#prefixo#

#descrição#




Se eu fazer uma legenda assim, por exemplo: 

${prefix}legendabv Olá seja bem vindo(a) ao grupo : #numerodele# 

Grupo: #nomedogp#

Prefixo do bot : #prefixo#

Leia as regras : 

#descrição#


E também tem esse:

${prefix}legendasaiu e digita oq quer, por exemplo, Adeus.

mas não recomendo colocar legenda, é bom que só vem o bemvindo kkkk, vai aparecer que a legenda N foi definida kkkk


Pronto, se eu envio assim, no grupo que estou, toda vez que alguém entrar, sera enviado isso, o que você definiu ali 

#numerodele# = vai aparecer o numero dele, com essa definição. 

#nomedogp# = vai aparecer o nome do grupo com essa definição. 

#prefixo# = vai aparecer qual o símbolo que você está utilizando no bot, pra fazer ele funcionar.

#descrição# = vai aparecer a descrição do grupo todo. 



Pra trocar o fundo da imagem do bemvindo, é só mandar uma foto no WhatsApp, retangular e marcar ela com o comando :

${prefix}fundobemvindo 

Ou se quer trocar a do saiu 

${prefix}fundosaiu 

Só marcar uma foto e pronto, com o comando. 

Vale pra a foto do menu também. 

${prefix}fotomenu só marcar uma foto, que já é trocado.




É isso galera, buenas suerte ae.
`;
};

const infobancarac = (prefix, pushname) => {
return `
Olá ${pushname}

Um comando que criei, é exatamente assim:

com o comando 

${prefix}limitec você coloca o limite de caracteres que uma pessoa pode enviar no grupo, por exemplo um texto, se passar da quantidade que colocou, por exemplo, 3000, o bot vai remover, mas pra isso, depois de distinguir o limite, tem que ativar o comando por grupo que é :

${prefix}limitecaracteres 1 

1 é pra ativar, 0 pra desativar, ok? 

esse comando evitará que enviem trava de texto no seu grupo, pra o bot remover automaticamente, é isso aí.. 

Boa sorte.. 

`;
};

const infolistanegra = (prefix, pushname) => {
return `
Olá ${pushname} deseja saber como funciona o comando listanegra?, vamos lá. 

existe esses 2 comandos 

${prefix}listanegra

${prefix}tirardalista


--------------------------------

Como isso funciona? 

esse comando, por exemplo, se alguém envia algo no seu grupo, vamos supor, um link, e sai rápido, você vai digitar o seguinte 

${prefix}listanegra numero-junto-da-pessoa

vai colocar o número junto da pessoa que saiu, sem o + lembrando, e sem o -. 

pra remover ele da lista é simples:

${prefix}tirardalista numero-junto-da-pessoa

mesmos detalhes de add.. 

--------------------------------

é isso aí, boa sorte amigo..
`;
};

const infopalavrao = (prefix, pushname) => {
return `
Olá ${pushname}

Irei informar como funciona antipalavrão.. 

o antipalavrão é criado por você mesmo(a), "Como assim?", existe os seguintes comandos:

${prefix}addpalavra

${prefix}delpalavra

${prefix}antipalavrão

-------------------------------

primeiro, irei dá um exemplo: 

${prefix}addpalavra lixo

isso será incluído como um palavrão, "mas como faço isso funcionar agora?" 

você deve ativar a função por grupo, exemplo:

${prefix}antipalavrão 1  

1 é pra ativar, 0 pra desativar. 

e se você quer tirar a palavra de inclusão dos palavrões, é só digitar :

${prefix}delpalavra lixo

"lixo" é apenas a palavra que utilize como exemplo, mas você que tem que criar, e escolher quais frases não deseja que seja falada no seu grupo.

é isso aí, boa sorte..
`;
};

const infocontador = (prefix, pushname) => {
return`
Olá ${pushname} - 

Se você está lendo isso é porque está curioso(a) sobre o contador de mensagem de grupos. 

contém alguns comandos

-
(1) ${prefix}rankativos

(Descrição: Ele mostra os tops 5 com mais mensagem e comandos executados do bot, no grupo, mas essas mensagem, apenas serão contadas se o bot estiver ativo no termux, ele vai armazenar os dados de cada um que enviar mensagem.) 
 -      -      -       -       -       - 
 
 
 
-               
(2) ${prefix}atividades

(Descrição:  Este comando, ele mostra as atividades de todos os membros do grupo, mas devo lembrar novamente que só no termux que armazena os dados.)
-    -   -    -    -    -    -   -    -   -



-
(3) ${prefix}checkativo 

(Descrição: Esse comando, você deve marcar a pessoa, Exemplo: ${prefix}checkativo @marca-a-pessoa-do-gp, e assim como esse, é semelhante o aos outros 2.)
-   -   -   -   -   -   -   -   -   -   - 



(4) ${prefix}banghost

(Descrição: Preste muita atenção, este comando, você deve digitar ele, mais a quantidade de mensagem que é pra banir as pessoas que tiver abaixo daquela quantidade.

Exemplo: ${prefix}banghost 0 

ele vai banir todos aqueles que tiver com 0 mensagem, mas não digite este comando fora do termux (EXEMPLO: HOSPEDADO EM SITES, NÃO NO TERMUX, COMO FOSSE COMANDO, O COMANDO É PRA SER EXECUTADO NO WHATSAPP) , pois ele vai remover todos sem parar, que tiver 0 mensagem, já no termux, ele bane uma pessoa por comando, leia com atenção isso, pois não irei ser responsável por remover todos do seu grupo, por seus erros, recomendo deixar o bot on por 1 semana no grupo, pra usar esse comando, e banir aqueles que nunca enviou mensagem no grupo.)


(5) ${prefix}inativos 


Esse, ele vai te entregar os membros que estão com x mensagens definida por você, ou abaixo daquilo, exemplo: ${prefix}inativos 2
Todos com 2 mensagens ou menos, serão mostrado na lista... 

Má lembre, se colocou o bot agora, todos estarão zerado, pois não armazenou informações suficiente.
 `;
};

const tabela = (prefix, NomeDoBot) => {
return`
𝐓𝐀𝐁𝐄𝐋𝐀 𝐁𝐘: ${NomeDoBot}🔥


𝐓𝐀𝐁𝐄𝐋𝐀 𝐃𝐄 𝐋𝐄𝐓𝐑𝐀𝐒 🌀
𝛢 𝛥 𝛬  𝜜 𝜟 𝜵 𝐴 𝐀 𝑨 𝙰 卂 么 入 刄 公
B 𝛣 𝚩 𝜝 𝐵 ℬ 𝓑 𝕭 乃 岌 多仍 
C 𝐂 𝑪 𝐶 𝓒  𝕮 匚 ር ℂ
D𝐃   𝑫 𝐷 𝓓 ᗪ 𝕯 
E 玄 𝐄 𝑬 𝐸 𝚬 𝚵 𝛴 𝛯 𝜮 𝜩 ℰ 乇 ꏂ 
F 𝐅 𝑭 𝐹 ℱ 𝕱 𝔉 千 
G 𝐆 𝑮 𝐺 Ꮹ                     
H 𝐇 𝑯 𝐻 ℋ ℌ 卄 ꫝ ዘ   
I 𝙸 𝕚 𝐈 𝑰 𝐼 𝔦 𝓲 | ቾ
J 𝔍 𝐉 𝑱 𝐽 𝒥  𝓳       
K 𝐊 𝑲 𝐾 𝚱 𝛫 𝜥 𝒦 
L 𝐋 𝑳 𝐿 ℒ 𝕷 ꪶ ㄥ廴
M 𝐌 𝑴 𝑀 ℳ ᗰ 𝕸 𝔐 ꪑ 爪 𝛭
N 𝐍 𝑵 𝑁 𝓝 ꪀ 𝚴 𝚴 ᜰ ꤾ ꡃ
O 𝐎 𝑶 𝑂𝒪 ꪮ ㄖ 𝚯 𝚶 𝛳 𝛩 𝛷 ❍ 〄
P 𝐏 𝑷 𝑃 𝙿 ℙ 𝕻 𝔓卩 𝛲 𝜬
Q 𝐐 𝑸 𝑄 𝕼 Ҩ
R  𝐑 𝑹 𝑅 ℛ ℜ 𝕽 尺     
S 𝐒 𝑺 𝑆 丂 令
T  𝑻 𝑇 ㄒፕ 𝚻 𝛵 亇
U 𝐔 𝑼 𝑈𝒰  ᑌ 𝔘 𝖀 ꪊ ㄩび
V  𝑽 𝑉 𝒱  ꪜ 𝛶 𝜰
W 𝐖 𝑾 𝑊 ᗯ ᭙ 山 ሠ 𝜔 Ꮤ ꪡ ꪝ ꤿ
X 𝕏 𝐗 𝑿 𝑋 𝒳  ᥊ 乂 ꉧ 𝛸 𝜲 ꪎ
Y 𝐘 𝕐 𝒀 𝑌 ꪗ ㄚ ሃ 𝜳 

INÍCIOS🌀
ৡৢ͜͡   ঔৣ͜͡   ᬊ͜͡    ೈ፝͜͡   ꯴᩠ꦽꦼ  ░⃟⃛ ➮ ⏤͟͟͞͞ 

FIM PARA NICK🌀
݈݇─  ͜〉⛧ ᭄ ⸸ ᭄ 𖤐⁩᭄ꦿ ᬏ᭄ ⛤⃗͜ᬏ᭄   

𝐒𝐈𝐌𝐁𝐎𝐋𝐎𝐒 🌀
     ⃟        ⃤     ⃝      ᬽ ۝ ⛧ ᪤ ⸸ ᬛ ᭆ ᭩ །  ᬽ
     ⃢        ⚚ ♕ ♔ ⛥ ᭟  ֎ ◌ ⚝ ⅌ 𝆮 ۞ ༒ ༆ ༅ ༄ ༃ ༀ ༁ ༺ ༻ ࿐ ࿘ ࿕ ࿖ ࿗ ࿔ ࿓ ࿒ ࿑ ࿋ ࿉ ࿄  ࿅࿆  ░ ▒ ▓  ◍   ▸ ▹ ▿ ▾ ▵ ▴ ◊ ◔ ◕ ◖ ◗☙  ☥ ☤  ☻ ☼ ☽ ☾ ☿  ♁ ♃ ♘ ♡ ♞ ♱ ♰  ⚶ ✢ ✤  ✔ ✕ ✗ ✘ ✰ ❀ ❁ ❃ ✻  ✵ ✯ ✭ ✧ ✦ ❍ ❐ ❑  ❒  ❏ ⸙ ⸎ ꧁ ꧂ シ ツ ﭢ ღ ✞ ✟ ༈ ✄ ⊱ ⊰  இ ༎ 🝐 🝳 🝲 🜊 🜋 🜌 🜏 🜎 🜘 🜚 🜛 🜜 🜥 🜞 🜟 🜢 ᭁ 𝀶  ᬽ ᭪ ᭦ ᭝ ᭕ ᭘ ᬊ ᬉ ᬏ  ᬇ ᬠ ᬨ  ᭄ ❦ ⦚ ⧛ ⧚ ⿰ ⿱ ⿴ ⿻ 〄 々〆 〃 〮     ҈      ҉   ೠ ಝ ಋ ಊ ౾ ౠ ෴ ๛ ༗ ༖ ༕ 卐 ㌌   ͢   𝁮 𝀑 

𝐈𝐍𝐈𝐂𝐈𝐎𝐒 𝐏𝐀𝐑𝐀 𝐍𝐈𝐂𝐊 🌀 

ᬊ͜͡   ঔৣ͜͡   ⏤͟͟͞͞🌻  𖥨֗  ೈ፝͜͡    🌾⃟ꦿ⸼  ✧͜͡҉    ঔৣ͜͡➳ ꧁͜͡    ৎ❥̤֟٭ۣۜ   ৡৢ͜͡    ঔৣ͜͡҉❅ۣ̤ۜ   ⿻ꦿꦂ  ❥ꦿꯧָ   ᭥ꩌ゚໋ ꯴᩠ꦽꦼ   ᭺ᮀฺ۪۟𖡎’￫ ࿂ꦿ๋͚ꪳ↛ ꪶ⚘࿆ꦿི ݈݇   ᥀·࣭࣪̇˖ ᠂࣭. ⃝༘⃕🍒 ✧༷ꦿ݈۟⸼͓۬࣪ꪶ  ནཹꦿ  ❀࿆⃧፝྅⃕ꦿ   ွဳ⃟ꦿ   
🌹፝⃟༘┼ ᜴⃕  ░⃟⃛ ➮ ⿻͜͡   ꪶཷ୭͓ꦿ݉ᐧᨗ  ✞⃟❐͜͡ 

𝐒𝐈𝐌𝐁𝐎𝐋𝐎𝐒 𝐄𝐒𝐓𝐑𝐀𝐍𝐇𝐎𝐒 🌀
𒁂𒀽𒁖𒁯𒁮𒂄𒂷𒇲𒈝𒈞𒈟𒈩𒉂𒉁𒈑𒈒𒉫𒉜𒉴𒉰𒊊𒊋𒊓𒊫𒊺𒊻𒊼𒊽𒋦𒋨𒌄𒌃𒌅𒌜𒌢𒌵𒍥𒍤𒍣𒍓𒍟𒐦𒐪𒑓𒊹𒇫𒇋𒆖𒆕𒄬 

𝐒𝐈𝐌𝐁𝐎𝐋𝐎𝐒 𝐄𝐆𝐈𝐏𝐂𝐈𝐎𝐒 🌀
𓁹𓁺𓁻𓁼𓁽𓁾𓁿𓂔𓂓𓂛𓂜𓂞𓂠𓂢𓂣𓂤𓁵𓁴𓁤𓁜𓁳𓁣𓁪𓁢𓁱𓁡𓁑𓁊𓁍𓁎𓁌𓂓𓂑𓃚𓃙𓃚𓃛𓃜𓃝𓃟𓃟𓃨𓃪𓃬𓃭𓃸𓃶𓃾𓅉𓅂𓅄𓅆𓅙𓅓𓅌𓅖𓅗𓅢𓅱𓅪𓅭𓅮𓆈𓆂𓆅𓆔𓆖𓆖𓆠𓆛𓆜𓆞𓆞𓆣𓆤𓆦𓆟𓆺𓆳𓆵𓆶𓇈𓇓𓇒𓇥𓇣𓇭𓉡𓉢𓉦𓉦𓉸𓉻𓉔𓊢𓊞𓊭𓋐𓋖𓋸𓌆𓌱𓌺𓍙𓍢𓏱𓏲𓏵𓏠𓏤𓏑𓏎𓂸 

𝐃𝐄𝐂𝐎𝐑𝐀𝐂𝐎𝐄𝐒 🌀
❒᭄꥓〭🌹 ᠂࣭. ⃝༘⃕🍒 ⸵░⃟🌻𖥨ํ∘̥⃟⸽⃟🌹 ｡˚༷🌸｡˚༷￫ 🌙ꪾ〬ꩌ۪٬ླྀ  ❑ꦽꦷ🌻⏤͟͟͞͞🍹⁖ฺ۟̇࣪·֗٬̤⃟🌸 

𝐒𝐈𝐌𝐁𝐎𝐋𝐎𝐒  𝐂𝐇𝐈𝐍𝐄𝐒𝐄𝐒🌀
㌀ ㌁ ㌂ ㌄ ㌇ ㌚ ㍃ ㍈ ㍖ ㌭ ㌡ ㌠ ㌙ ボ テ ス ツ ガ カ オ ぼ ⽔ ⽃ ⼪ ⼢ ⼒ ⻰ ㋒ ㋚ ㋔ ㋛ ㋘ ㋠ ㋡㐌 㐈 㐲 㐳 㑂 㑄 㐱 㒊 㑱 㓛 㓘 㓗 㓆㕣 㕚 㕛 㘪 㘦 㘶 㠫 㡍 㡴 㡲 㡰 㡱 㣊 㣍 㣻 丈 丕 

Outros símbolos🌀
ϟ ↯ ⛧ ⸸  ♞  ♘  ࿗  ࿕  ⛥  ツ  シ  ♰  ♱  卐 ✟  ✞ 

Símbolos pra colocar no meio do nick🌀
    ⃢          ⃤   ⃟       ⃝     - SETAS -    ͢         ⃮          ⃖       ⃯         ͍ ↠ ↡ ↢ ↚ ↛ ↜ ↝ ↞ ↟ ↣↤↥↦↧↰↱↲↳↴↵↶↷↸↹↺↻↼↽↾↿⇀⇁⇂⇃⇄⇅⇆⇇⇈⇉⇊⇋⇌⇍⇎⇏⇐⇑⇒⇓⇔⇖⇕⇗⇘⇙⇚⇛⇜⇝⇞⇟⇠⇡⇢⇣⇤⇥⇦⇧⇨⇩⇪⇫⇬⇭⇮⇯⇰⇱⇲⇳⇴⇵⇶⇷⇸⇹⇺⇻⇼⇽⇾⇿ 

COISAS PRA BOTAR NO INÍCIO E FIM DO NOME
〈〉  《》 「」『』【】〔〕〖〗〘〙〚〛⟬⟭ ⟦⟧ ⟨⟩ ⟪⟫ ⟮⟯ 

NÚMEROS🌀
➊ ➋ ➌ ➍ ➎ ➏ ➐ ➑ ➒ ⓿
𝟏 𝟐 𝟑 𝟒 𝟓 𝟔 𝟕 𝟖 𝟗 𝟎 

ᱹ▻      ҂͓꣣۫۫🍉۫ꢁ     ᯢ❁⃪ ◗     ░⃟⃛🍎༘݊➮ 

꒰১°᳝ꯥ‧ٓ➭    ꒰ෑ᪲꒱     ░ෆෑ    ❒᭄꥓〭🍌   ᠂⸱ེ̀.𖧷 

  ᩠░⃟⃜🍏ꪳ۫₎۬۟〬      ᭥ꩌ゚໋ ꯴̸᩠🍩⭛      ❀࿆⃧፝྅⃕ꦿ      〭〭〬〬⿻❥〬〬〬ꦿ[ 

  ᩠ ꣣ʹ͚🍣     𖦹҉ २꫶   ╰៚݈݇      ⸵░⃟🐛̸꙰     ᱸᱹ𖠳𖣻 

᭥ꩌ゚໋ ꯴᩠ꦽꦼ💌↦     ꔛ⃟⿻⃕⸵ࣻ꒰🍉꒱   ❨᯽ᨘ‛᩠⋆ꣻ     𖨮𖡎｡ 

㇀🐿 ۬.͜˖-    ⸾〬۝ꦿ҂⃨     ཷ꒱⸼   🌙ꪾ〬ꩌ۪٬ླྀ   ▩݅͜𖨌•.̇ 

᭥ꩌ゚໋ ꯴̸᩠🍩⭛      '꩖࿆͜͡𖡜•↣    ∎🚀    ࿂ꦿ๋͚ꪳ↛ 

  ᠌᠍᠍᠌᠎᠋᠎᠎ᤧᱸᱹ༊↯🍄       ᠌᠍᠍᠌᠎᠋᠎᠎ᤧᱸᱹ༊⇝     ꔷ㆒⸼݇҉ֻ᠂⃟🍉    ╰꫶ ࿉۟࣪࣪᭝ 

ꔛ⃟⿻ྀ⃕🍒           ⃝༘⃕🍒´݈       ᠂࣭.   ⃝༘⃕🍒↳    🎐·۪۫ˑ݈↷ 

᥀───🍰ٜᩦ୭     ꒰───🍰·ٜ۬･     🎡⿻ꦿꪳ։ 

🍩ꪶཷ୭͓ꦿ݉ᐧᨗ      ✧༷ꦿ݈۟⸼͓۬࣪ꪶ🌹     🍧.ᩦ୭✧ࣶᭂ     𖠵꩜⭟ 

╶ 🦔 ❪❥ꦿꯧָ❫      •.̇𖥨֗🍓⭟       ๋𖡜 ݈݈-݇     ─ ࿊⃨१ 

❥.ᨘ۫.ꪶ         .ᨘ۫.ꪶ🍧 ۪→      ᭥⃕꙰҉ ◍̤￫ 🌹࣭࣭◗   ❪🍑ꦿེ≭•۟.❫      ❪🛸ꦿꯧ⸼❫    𖣠ᮬ·̣̇꧈    ꪶ⚘࿆ꦿི ݈݇- 

𖧹⸻𖠚ꪴ۟〬  ╶ 🦔 ❪❥ꦿꯧָ❫      ❪̣࣭̇࣪·ฺ۪۟𖡎｡     𖣠ᮬ·̣̇͜᭺ 

⁖ฺ۟̇࣪·֗٬̤⃟🌻        ░░۟⃟🌻༘⸻       ·᳝∴̣࣭🌻·᳝∴̣࣭ 

⸻⿻ꦿꯧ๛    •.̇𖠵⃯🍧    ‡𖧱১   ᥀·࣭࣪̇˖💌◗ 

❪°·ꯥ̣ꩍ🍉↣    ๛ᤢ᪴🍑↯     ꪖ⚘⃯     𖠵⃕⁖      ❑ꦽꦷ꧈ 

────🛸°·ꯥ̣ꩍ    ─────̥˚᳝᳝𖥻🍧̇⸱ 

ꓻ┼       ꦽꦽꦼ➮     ꦽꦽꦶ꧈     ຊ✏     ❀ꦿ꩟ 

───𖡜̸｡᭭        ꫶─────୬۟◍⭟      ꨴ◍⸱￫ 

▩⃕͜ꦿ૰￫     ‡ᮀ১🌹；    ᭥ꙮ•̇‡ꪳ͢⠂ᨗ    🍓ꦽ᪱ꩍ 

᳝'꩖͜͡•꙰─»     ───𖡜ꦽ̸ོ˚￫     ▩⃪ꦽꦶ̸꧇      ᭺ᮀฺ۪۟𖡎’￫    

  ꓸ᭄ꦿ⃔⸙        ⿻ꦿꦂ🍑       ░༵۟🍉ֻ͛➜       ⎝❑⃕ཷ🍟 

‹‹❑ౄ🍒    ླ🍑❜︧༷︧➭    ꪶ🍄 ⃦⭛     ❍⃕⃟᎒⃟̀🍬ི૪ 

｡˚༷ᮀ｡˚༷￫     ｡˚༷｡˚༷🍒➮   ꓻ┼ꦽ᪱ꩍ🦔꧈    ⚘๋࿆.•۟ 

۝     ❪.🚀᪽̩¡❫     ๛·࣭̣࣪̇⸱🍩◗     ❒𖥻ꦼꦽ➮   

ꕥꦿོ꧈    ───ཹ🌹 ݇-݈    ❪১°᳝ꯥ‧ٓ↵❫      ১°᳝ꯥ‧ٓ🛸 

꒰🍒১°᳝ꯥ‧ٓ⭝       ꦽꦁ১︧.۪̇〬°⃟᮪݇⃟⃟🍧       ⃦ꦦꪳ՚𖦹       ⃦ꦦꪳ՚☕   

◖🍑ནཹꦿ◗    ◖🍒ནཹꦿ↣    𖣠’᪵১↣     ᳝'꩖͜͡𖧷𖦝    

────𖦹५ॱ     ᳝'꩖͜͡ꦿꦼ🍣     ◍ཻꢀ᮪⸱ᨗᨗᨗ🛸     ◍ཻꢀ🌹૰ 

惢🍑҂       惢🍉’݆￫     🌹ꦽꦼ̷১      ’٬࿊⃟☽ᝦ    

ꛒ੭〭۬🍒ᨘ₎      ᨆᨘ᭲.˚🍓྆≭     ◦ᮀᨘ۬․ٰ৴🍚੭      🍉⃟᮪〭۬̇〬⃟˖ꪶ    

᳝'꩖͜͡⚘࿆ํ·ٜꪶ      ⚘࿆꯴˖࣭̣᪽̇ ๋──       ꫶ ⃙◌⃙◍     ❪̣࣭̇࣪·ฺ۪۟࿃❫̣࣭̇࣪·ฺ۪۟ 

🍒 ⃟᮪〭۬̇〬⃟˖⸱ೇ    🌺ꦽꦼ̷•ˑ˒     🥥ꦽꦼ̷ꪶ     𖥕𖠗∙۟ᱹ۫↻ 

﹎૰ཾ⋅ꩌꦿ🍧｡        ❪𖦄͟𖦉̤۪᭮.↣         ៍ོ⃨̇𖦖🍑⭟     

✎․ೇ︨︧ཾ✾▹     𖤃·۪۫ˑ݈↷      ⸻⌔☐❜｡۪۪۫۫↛ 

｟𖠲۪۫ᮀ〭⑇⃨᪽᪴｠ ╰ํ⃝̸〭∙۬·𖤃    ❪🍧ฺ࣭࣪͘ꕸ▸    𖥨ํ∘̥⃟⸽⃟💌৴▸ 

𖥨ํ∘̥⃟⸽⃟🎐㇀      🌵ฺ࣭࣪͘◞,〬⎼      ꗏฺ࣭̇͘.㇀🍣      ─◍᳝࣪.⋕𖥾ᤢ۪.۫ 

▧⃯⃟৴ํฺ͘.•🍣”     ▧⃯⃟৴ํฺ͘.•🛸 ݈݇─     ▧⃟╳⃟ೇ̖ 


就像模像ા િ ી ુ ૂ ૃ ૄ ૅ ે ૈ ૉ ₡₢₣₤₥₦₩₪₫₭₯₾₽₻₺₸₷₶₶₵₴₴₲₰₱₳⸿⸚⸛ⶬ⻞⸙ㆃ㑹䡤 ▒░▓ ҉ ҈ ℳℴℵ℥ℤℨ℘ℜ
♔♕♖♖♗♘♚♝♟♠♢♢♣♤♦♨⚀⚂⚃⚅❧❥❥❤❣❠❠❑❒❁❃❅❔❔❖❆❇❈❙❙❋❜❝❞❏❎❍❌❊❊❉❈❇❅❄❂❀❀✰✱✳✳✴✵✷✷✸✹✺✻✼✽✿✯✮✫✫✪✧✦✥✤✤✣✢✡✡✠✟✞✜✛✚✙✘✘✖✖✗✕✔✓✒✑✍✎✏ ೈ፝͜͡࿇ ঔৣ͜͡➳ ⇝❦ۜ✯ۣۜৡৡۣۜ✯ۜ❦⇜꧁᭼⸼✞⸼᭼꧂ ঔৣ͜͡ீ͜❥͜ঔৣ👼 ⸎✴•เั•✴⸎ ঔৣ͜͡➳ೈ፝͜͡࿇↭ৢۜ͜͡✟✙✚✛✠✟✞✜✢✦✧꧁ᵗᶤᵃ ᵇᵘᶰᶰʸ꧂ ✦✮✭✬✫✪✩✯✰✺✹✸✷✶✵❂❧❦ ⇝❦ۜ✯ۣۜৡৡۣۜ✯ۜ❦⇜꧁᭼⸼✞⸼᭼꧂ঔৣ͜͡ீ͜❥͜ঔৣ👼 ⸎✴•เั•✴⸎🔴⚪⚫
๖ۣۜۜ͜͡ ۣۜ   ஓீ͜ ፝͡ৎ✞̤֟٭  ৎ❥̤֟٭  ৎ̤✙֟٭  ஓீۣ̤֟͜٭̤֟ ঔ  ፝͡ৎ   ፝͡ৎ✞̤֟٭  ⸎✞ 

  ৎ❥̤֟٭ۣۜ ஓீ፝͜͡   ✦ۣۜۜ☆ۣۜۜ͜͡   ঔৣֳ᷌᷈͜͡❀ ్మాై  ू ፝͜❥ ೈ፝͜͡๖ۣۜ   ৎ✿̤֟٭ ೈ፝ 

✦҈͜͡➳ ீ͜ৡৢ͜͡   ๖ۣۜۜ͜͡ீ͜   ೈ፝͜͡    ঔৣ͜͡   ৢۜ͜͡✟ ঔৣ͜͡ீ͜❥͜ঔৣ
ᢁ♾႘႙လၼဏ☍ᨖ∾⏦∞ზ⚪⚫⚬⭕🔴🔵๏༚ᢀᨔ⌻⌼⌽⌾⍉⍛⍜⎉⎊⎋⏀⏁⏂⏣◉○◌◍◎●◐◑◒◓◔◕◦◯◴◵◶◷☌⚭⚮⚯⛢❍⬤⬮⬯⭖⭗⭘⭙〄ʘஃ་჻᎒᎓᠁᠂᠃᠅᨞⁕⁑⁂⁖⁘⁙․‥…‧⁚⁛⁜⁝⁞※┄┅┆┇┈┉┊┋⛬⌗⌸⌹⍁⍂⍃⍄⍞⍯⎕⏍⏥▀▁▂▃▄▅▆▇█▉▊▋▌▍▎▏▐░▒▓▕▖▗▘▙▚▛▜▝▞▟■□▢▣▤▥▦▧▨▩▪▫▬▭▮▯▰▱◘◙◧◨◩◪◫◰◱◲◳◻◼◽◾⚼⛝⛞❏❐❑❒❘❙❚⬚⬛⬜🔲🔳⌧❖⌺⍋⍍⍒⍔⍙⍚⎏⎐⎑⎒⏃⏄⏅▲△▴▵▶▷▸▹►▻▼▽▾▿◀◁◂◃◄◅◆◇◈◊◢◣◤◥◬◭◮◸◹◺◿⛋⛛⛡⟐🔶🔷🔸🔹🔺🔻🔼🔽இ༓࿉།༎ᔗᔘᔚᔙᓬᕫᕬᕭᕮᖗᖘᖙᖚᖰᖱᖲᖳᖼᖽᖾᖿᗤᗥᗦᗧᗡᗠᗢᗣᗞᗟᗜᗝᗘᗛᗗᗖᗐᗑᗒᗕᘜᘝᘞᘛᘮᘯᘰᘳᙀᙁᙂᙅᙈᙉᙊᙍᙷᙸᙼᙺᨀᨁᨂᨃᨄᨅᨇᨋᨌᨍᨎᨏ᨟ᨐᨑᨒᨓᨕᱤᱥᱦᱧᱨᱩᱫᱬᱭᱮᱯᱰᱵᱜᱝ⌌⌍⌎⌏⌜⌝⌞⌟⌓⌔⌖⌘⌬⍊⍌⍎⍑⍓⍕⍝⍭⍱⍲⎄⎅⎆⎇⎈⎌⎍⎎⍽⍾⎓⎔⎗⎘⏆⏇⏈⏉⏊⏋⏌─━│┃┌┍┎┏┐┑┒┓└┕┖┗┘┙┚┛├┝┞┟┠┡┢┣┤┥┦┧┨┩┪┫┬┭┮┯┰┱┲┳┴┵┶┷┸┹┺┻┼┽┾┿╀╁╂╃╄╅╆╇╈╉╊╋╌╍╎╏═║╒╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡╢╣╤╥╦╧╨╩╪╫╬╭╮╯╰╱╲╴╵╶╷╸╹╺╻╼╽╾╿◖◗◚◛◜◝◞◟◠◡☰☱☲☳☴☵☶☷⚊⚋⚌⚍⚎⚏⚞⚟⚶⚷⚹⚺⚻⛘⛚⛻彡❡۩ண⌦⌫ਊ〽〰


A=Δ꙰ Λ λ Ⱥ ₳ ą å ส สั ล α ค ศ Ⴉ 🇦 🇦ศ ₳ ﾑΔ a ɑ Ă 厾 λ α Λ ɐ ส丹ⓐ Д ∆ ਸ λ Λ ą å ส ล ค α Ą ਜ Ẵ ศ ά āλ Д Å ä ล Ẳ Ħ ª ẩ ส Ä ձ Ą ๖ۣۜĄ αสั ά ặ
म स 禸 丒丸凡 丹入 ﾑ ム Д 开 ໞ Ѧ 月么 ਜ A҉ 岚 ๖ۣۜA ꬍꬅ 刄 㞩 

B=多🇧 乃 ঔৣ͜͡岌 в ฿ ß β ცⓑ ხ ɮ β ß ฿ Ъ طß в β ხ ฿ в ␢ ๒ Ъ ъ ь Ɓ ß ฿ Þ 乃 邦 ぶ ✇ 及 в Ⴊ 🇧 ๖ۣۜB 夃 ଷ
ゐßѢƀЪЬβϐбБъьわゎらね ♭ ɓ B҉ ㄢ 

C=¢ ₡ ₢ C ς ⊂ 匚 ㄷ ど に 二仁 🇨 ɕ ૮ C҉ ๖ۣۜC Շ 🇨 ¢ ₡ ᄃ c̈̈ ɔ ς ©C¢ ς © ζ Ƈ Ɔ ʗ ₡ ૮ ح¢ Ĉ č Č © ĉ Ć ૮ 

D=ↁ Đ ɗ đ δ ɖ わ 力 ⊅ ⊅໓ 🇩 ∌ D҉ 刀 Ɗ
๖ۣۜD ಖ 🇩đ Đ ɖ ⓓ ∂ ժÐ ∂ đ ۜÐ ₫Ð ∂ ð đ ๔ მ ძ ժ ɗ 

E=Ɇ € ℮ ㉫ ∉ ∈ Ξ Σ ξ Є ๋Є ع ə ɇ є ჲ を
ﾐ ﾓ 三 巨 玄乞 Ｅ它 ೯ ౯ ㄠ モ 🇪 E҉ 亥 ૯ ๖ۣۜE も ƎƏ Ɛ ؏៩ 🇪 乇 Є є Σ ε ξ ⓔ 玄 ៩ ₤ ჰ პ℮£ Є ξ Є๋ є ჱ ŧ Σ ε ع э έ נּ גּ ɛ ə ٤ ૯૯ є პ ε Ë ع ﻊ ē € ξ έ ℮ ë Э ۼ 

F=Ғ ƒ Բ下 ﾁ Ϝ Fヂ Ք F 下 🇫 F҉. ๖ۣۜF  🇫 ｷ ₣ ʃ ғ ⓕ f Ғƒ Բ ๖ۣۜF ₣ƒ ₣ ﬄ ךּ דּ Ғ ક 

G=₲ ǥ Ⴚ Ǥ ❡ ሬ 🇬 Ԍ G҉ ๖ۣۜG ໔ ໕ ផ ௹
🇬 Ĝ Ģ g G̈̈ ⓖ ₲ ௹ ğ G๋ ๔ Ġ ġ ģ ğ๋ ؤ و פĢ ₢ ɠ ૬ ǥ 

H=Ħ ん ɧ 卄௮ அ ஆ Һ һ н Ҕ ҕ Ң ң Ҥҥ Ӈ ӈ Ԋ ԋ 艹 Ⴌ 🇭 ╠╣ H み ђ ๖ۣۜH ਮ 🇭 ん ħ н ђ அ ჩ ħ ╠╣ ђ સ Њ ௮ Ћ нસ அ ħ ђ н Ћ Њ अ╠╣ 

I=፤ ɨ ៛ í ∣ ழェ エ ｪ ｴ 工讠 辶 เ ቾ 🇮 ҉ I҉ 
๖ۣۜI ⶇⷀ 🇮 ί Ξ រ ł ιΐ ι ║ï Î เ Ī ﭑ Ỉ î Į ĩϊ ΐ ذ ﻐ ɩ ւ ɨ 

J=ʝĲ ｊ Ｊ ʲქ ჟ 🇯 J ℑ ๖ۣۜJ 🇯ʝ ქ J Ĵ ɾ ე უل נ ਹ Ĵנ ل Ţ ړ ਹ ﻮ ʝ ჟ 

K=Ҝ Ҟ Ӄ ₭ Ҝ 长 ҟ Ҡ ҡ ӄ ҝ  🇰 Ƙ K ઝ ๖ۣۜK🇰 ₭ Ҝ κ ķ К к ๖ۣۜK ઝ Қ ķ к Ҝ ₭ К қ ҝ 

L=Ł Լ ℓ ∟ ﾚ し ̽ſ ʆ ไ ₰ 🇱よ๊レ 廴 L҉ ㄥ ๖ۣۜL โ Ն ₺ 🇱 Ł ₰ ℓ Լ よ ℓ Ĺ Ł Լ Ľ Ļ Ŀ ┘£ ไŁ ℓ Ļ ๋╝Լ 

M=ℳ ๓ ற м რ ო ɱ ₥ Ӎ ポ ボ /V\ 水 ണ Ӎ 🇲 M҉ 爪 ๖ۣۜM
🇲 м ℳ რ ற ო ɱ ๓ ʍ დლм ற /V\ ๓ ๖ۣۜM Щ๓ ற м ₥ რ ო ɱ 

N=₦ Ń ņ ரŋИ ภй מ Ň หฑ иη∩ ல ₪ ൯ Ŋ N҉ れ ๖ۣۜN ฌ ญ ൮ വശഷസ Л🇳и ₦ Π ₪ η ெ வ йи η ŋ ฑ ர И ภ й Ń ņ ή п ห Ŋ ภ Պ ฑ η и ர Ɲ ห ₪ ɳ מּ תּ ₦ 

O=Ѻ θ Θ ❍ ◯ 〇Ծ҉ ゆ ∅ Ø Ծ Օ ס ⊗ ₴ Θ ΦϕФ Ω θ๑ ๏ ο ๐ σ ø ѳ Ѻ Ѳ Ө ०
の 🇴 ۝ O 口 ๖ۣۜO 汩 ଠ 🇴Ø๏σǿ⊕ƠФץםץ₴ΘԾøΩ❍ტიბθ❂ ø σ Ø ૭ Ǿ ö ♂ ợ Ů Ơ Ō Ծ Θ δ Ǿ Ф Ộ Ö ǿ Ŏ ό Ø ѳ ø ૭ σ ๏ ơ Θ Ф ठ ☻☺ θ Ө ɵҨ 

P=℘ ₱ 了 ァ户 ㄕ尸 卩卫 ƿ ρ م թ ｱ ק ¶ や ゃ ア マ ャ ヤ ヹ ｱ  🇵 伊 ҉ P҉ ㄗ ๖ۣۜP 尹 🇵ρ ק թ þ φÞ ╠╝קּ թ φ þ քק Þ ρ P๋ ‽ ρ ƿ ք թ ॐ 

Q=φ Ҩ ҩ. 🇶 ϑ Q҉ ๖ۣۜQ🇶q ๖ۣۜQǪ ǫ գ 

R=ℜ Ԅ रै₹Я 訳 尺 㞍尻尺 尼 尽 Ի ʀ ɾ я Я 民 🇷 R҉ 屁 ૨ ๖ۣۜR ฯ ণ 尺 尻 я ℜ Γ я ® л Я Ř ř ર ŗ ѓ ל гг ŗ я ® Я Ŗ 

S= ฐ ร ຮ ธ ऽ ₷ ֆ ى ک উ ঊ Տ હ ៜ 🇸 ട
乌马 写 ㄅ ㄘㄎ 亐令 S҉ Ｓ ๖ۣۜS ঙ ຣ ଌ 🇸ঊ ₷ ន ѕ ร ₴ ஜى § ร ş ئ ટ ک Ŝ š હ Ş ઽ ՏȘ ร ﻜ § Ş ֆ હ $ Ș Ƨ ى ş Տ ડ ઽ ૐ 

T=┳ 〒 Ԏ Ŧ ₮ ৳ ॠ ŧ ჭ ⊥ 匕十 क़ 丁 も デ テ ナ ㄤ ｲ 亻 ট ゼ Ⴀ 🇹
平 亇 T҉ す ๖ۣۜT ক ፐ ፓ 弋 字 🇹т † է Ե ｲ Ŧ ৳ჯ ₮ क も ł ┼ † т Ŧ Ţ Ť ŧ 〶〒ł Ŧ ♰ Ƭ τ † 

U=น Ü บ ป ย ษ ข μ い ų น บ ป∪ リ ㄩ凵びひ სυʉ 🇺 Ҵ ચ થ ს U҉ む ષ ๖ۣۜU Ⴎ ษ 🇺 ひ υ ს ∪ચ µ Ü ü џ ů ย Û û ŭ ن น ષย џ ચ Ǔ Џ Ц Ū ப ʉ μ થ ય મ և υ ц 

V=√ 讠 🇻 V҉ ∨ ๖ۣۜV ง 🇻ν∇√ ૪√ ٧ ს 

W= ₩ ฬ ผ ฝ พ ฟ ௰ ឃ ω 🇼 W҉ ખ 山 ๖ۣۜW ຟ 🇼 Ѡ Ш ₩ ωŴ ω ŵ ખ ώ ฬ ฝ พ ฟ ﷲ ਘ 

X =× 区×义冈区囟ҳ̸Ҳ̸ҳ✘✗ χ 🇽 乂 X҉. メ ๖ۣۜX 🇽χ Ҳ ҳ ✖χ Ж ჯ ×א ﭏ Ҳ ҳ χ × 

Y = ƴ ¥ 丫吖 Ɏ Ύ Ⴘ 쏘 γ צ ყ Ⴘ Ⴗ ע γ у Y ﻻ ㄚ Ⴤ 🇾 ψ Ψ Y҉. ๖ۣۜY ⼬ Ƴ🇾у Ψ ყ γμ¥ ﻻ ŷ Ў ყ γ ÿ ý ५У ყ ﻻ צּ Ұ ¥ У ұ ץ 

Ζั = ʑ Ӡ ӡ ろ る 乙 之 z ƶ ȥ ʒ ʐ ʑ ƺ ʓ 🇿 Z҉ 🇿 z 乙 ζ Հ Ż ž ζ ż Ƶ Հ ƶ ƺ 

ᵃ ᵇ ᶜ ᵈ ᵉ ᶠ ᵍ ʰ ᶤ ʲ ᵏ ˡ ᵐ ᶰ ᵒ ᵖ ˁ ʳ ˢ ᵗ ᵘ ᵛ ʷ ˣ ʸ ᶻ ᵈˡᶜ ᶤ ᶫᵒᵛᵉ ʸᵒᵘ 

ᴬ ᴮ ՟ ᴰ ᴱ ˁ ᴳ ᴴ ᴵ ᴶ ᴷ ᴸ ᴹ ᴺ ᴼ ᴾ ᵠ ᴿ ⁵ ᵀ ᵁ ᵛ ᵂ ᵡ ᵞ ᶻ 

⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ 

✦҈͜͡ ➳ ீ͜ৡৢ͜͡ ๖ۣۜۜ͜͡ீ͜ ೈ፝͜͡ ঔৣ͜͡ ৢۜ͜͡✟ ঔৣ͜͡ீ͜❥͜ঔৣ     ፝͡ৎ❥̤֟٭ 

A⃟🌸  B⃟🌸 C⃟🌸 D⃟🌸E⃟🌸 F⃟🌸 G⃟🌸 H⃟🌸
I⃟🌸  J⃟🌸 K⃟🌸 L⃟🌸M⃟🌸N⃟🌸O⃟🌸 P⃟🌸
Q⃟🌸 R⃟🌸 S⃟🌸 T⃟🌸  U⃟🌸  V⃟🌸 X⃟🌸 Y⃟🌸 W⃟🌸 Z⃟🌸
れ ₡ ₩ ₤ ₦ ₱ ₲ ₰ ₳ ₷ ₸ ₹ ℐ ℑ ℒ ℊ ℋ ℌ ℍす や ⼳ ひ ቻ ঊ ֆ ℘ ℙ ℚ ℛ ℜ ℝ ℣ ℤ ℬ ℰ ℭ ℱ ℳ ⅅ ⅆ Ǥ 㞩 ↁ Ҩ む ⷀ ₦ み ↁ ؏ 亇 ł ❍
ｷ Ⱥ 多 及 Δ̸ 弋 ៩ ൬̸ 岌 ₮ ቾ ❍̸ 岌 


🇲🇾⃟༒🇹🇰⃟༒ᙶ⃢: ➤   ⿴⃟ٍࣽ❖᪶۫۫   🌺⃢❈❥  ▢ 🌹፝⃟༘┼⃢ᵉᵥ✦ 𖣘⃟ᗒ     ፝⃟༘❍፝⃟༘ ➀፝⃟༘ᵉᵥ      𖡹⃢⃟ᗒᵉᵥᗕ⃢⃟𖡹̤   ◆ ⃟ ⃟ ⃟  ⃟ ⃟◆     ༺〄༻
*🌹፝⃟༘┼ U࿆ ,࿆P⃟⸙ᵉᵥ✵*  

᭒𝔄𒆭𒂩𒃳⃟۝⏣ᙵ༒꧁꧂鬒ȴ𒉼𒍮𝔍𝓲𝔜𝔒𒃩ᙴ𒉣𒉐𒆜𒅴𒅌𒅄𒄘𒄖𒃿𒃾𒃸𒃹𒃣𒂤𒂥ޥ᙭☬ᭅ᭟𑋭𒂻𒂵亶❷ݳँᬒᬻޙ𑱖𐃌ऀ⇜ᬼᭁ֎⤳❷ᬽာ⭧ᭃ⠕⃞❨ः亹⠿☛௵𒴇乤⤠仓༻࿐ⲫට༺֍
𗅤𗄹𓀀𓀂𓀄𓀆𓀇𓀐𓀖𓀌𓀠𓀫𓀞𓀮𓀺𓁀𓀬𓁡𓁣𓁦𓁳𓁺𓁸𓁻𓁹𓁼𓁽𓁿𓂄𓂆𓂐𓂋𓂕𓂛𓂙𓂞𓂤𓂠𓂏𓂥𓂨𓂣𓂞𓂰𓂴𓂹𓃄𓃐𓃖𓃤𓃾𓄈𓄔𓄞𓄩𓄫𓄮𓅅𓅘𓅦𓇬𓈌𖦤𖦘𖦋𖦀𖦦𖦂𖧈𖧃𖧖𖧌𖧨𖧳𖧮𖨬𖨪𖨦𝟖𝟡𞤴𞤨𞤞🈤🈞🈠
ݡݞݴݩތޑޥޣޖޡࠌࠆࠑࢤࢦୃୁଶஅஇஊஔᴕᴡᶘᶓᶎḭ⁃⁀⁆⁓ⅆ⅑⊅⊤⋭⋱⏤⏠⏄⎾⏜
☣☬☞☌☋☍☈♆♅♄⚟⚝⚛⚪⚮⚮⚻⛬⛮⛥⛨⛛⛚⛜✮❁✳➲➭⟌⟘⟞⟣⟱⟶⟼⠮⡄⡆⡔⢫⢥⢩⦫⦝⦽⦻⦹⥡⥳⩄⩙⩣⪀⪋⪆⫛⫎⫡⭃⬸⭄ⶣⶨⶋⶅⶐⶄⵜⵘⵎ⸠⻤⻞⻫⻖けぎご〠れゑフラ㇕
䷨䷦世丨世亀乴亓亖亡仍仠仦渹渻湆꧅꧄ꪜꪦꩵꩦꬌꬬꬩꬣꮹꮽꯌ𐅊𐅑𐅒𐅌𐊔𐊴𐎫𐎝𐎝𒋐𒋬𒍫𒍨𝓨𝔄𝖀𝖕𝟍𝟘
⸙⋆ͤ℣⋆ͦ⸙
  ৢۜ͜͡  - ๖ۣۜ͡ஓீ͜͜͡❥ - ঔৣ͜͡ீ͜❥͜  -  ू ፝͜❥ - ৎ❥̤֟٭ۣۜ  -  ঔৣֳ᷌᷈͜͡❀  -  ৎ✿̤֟٭ - ✦҈͜͡➳  -  ঔৣ͜͡➳ - ๖ۣۜ͡ஓீ͜͡   - ஓீ͜͡   - ஓீ፝͜͡   -ஓீ͜  -  ్మాై  - ೈ፝͜͡๖ۣۜ   -  ೈ ፝  -  ீ͜ৡৢ͜͡   - ๖ۣۜۜ͜͡ீ͜   - ঔৣ͜͡   -  ೈ፝͜͡卐  *-* ✦ۣۜۜ☆ۣۜۜ͜͡     ۣۜۜ͜͡☆ۣۜۜ✦ۣۜۜ *-* ✧͜͡҉      ҉̶͜͡✧ - ঔৣ͜͡҉❅ۣ̤ۜ❥̤̤֟֟
A⃟༻ B⃟༻ C⃟༻ D⃟༻ E⃟༻ F⃟༻G⃟
H⃟༻ I⃟༻ J⃟༻K⃟༻ L⃟༻M⃟༻ N⃟༻O⃟༻ P⃟༻ Q⃟༻R⃟༻S⃟༻T⃟༻U⃟༻V⃟༻X⃟༻Y⃟༻W⃟༻ 

༈ ࿗᭄🌀 ᭨ ஓீᤢ✧͢⃟ᤢ🌸 🌹፝⃟༘┼ ᜴⃕🌹 ⿴⃟ٍࣽ❖᪶۫۫ 

ৢۜ͜͡  -  ๖ۣۜ͡ஓீ͜͜͡❥  -  ঔৣ͜͡ீ͜❥͜  -   ू ፝͜❥  -  ৎ❥̤֟٭ۣۜ  -  ✦ۣۜۜ☆ۣۜۜ͜͡   -  ঔৣֳ᷌᷈͜͡❀  -   ৎ✿̤֟٭  -  ✦҈͜͡➳  -  ঔৣ͜͡➳  -  ๖ۣۜ͡ஓீ͜͡   -  ஓீ͜͡   -    - ஓீ͜  -  ్మాై  -   ೈ፝͜͡๖ۣۜ   -   ೈ ፝  -   ீ͜ৡৢ͜͡    -   ๖ۣۜۜ͜͡ீ͜   -  ঔৣ͜͡   -  ৢۜ͜͡⍣   -  🔥፝⃟    -   ꦿ⃟ۜ✯  -     ⃟ۣ❃ -  ༻⃟༆  -  ༆⃟᠁  -  ွဳ⃟ꦿ  -  💸⃟ꦿ⸼  -  ⋆⃟ۣۜ᭪➣  -    ⃘⃤꙰ 

𝐁𝐘: ${NomeDoBot}🔥

`;
};

const infosorteio = (prefix, pushname) => {
return`
Olá ${pushname} : Deseja saber como funciona os comandos de Sorteio? 

Existe 2 tipos de comando de sorteio. 

[1]- ${prefix}sorteio

[2]- ${prefix}sorteionumero

------------------------------

O comando ${prefix}sorteio ele sorteia um número aleatorio de alguém do grupo e fala que ele foi o sortudo. 

Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteio de 100 R$

-------------------------------

O comando ${prefix}sorteionumero ele envia números aleatorios de 1 a 257

Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteionumero de 100 R$

--------------------------------

Ideias desses 2 comandos, utilizar para sorteios em seu grupo, vamos supor que 257 pessoas do seu grupo faz uma lista de 1 a 257, e quer realizar um sorteio então vai ser utilizado em esses comando, sorteio por número de telefone ou por números. 

`;
};

const cmd_termux = (prefix) => {
return `
`;
};

const infoduelo = (prefix, sender) => {
return`
Olá @${sender.split("@")[0]}, irei informar sobre o comando duelo, ele é usado mais para grupos de figurinhas, alguns grupo de figurinhas, gosta de interagir através de figurinhas, ae o Adm do grupo, da a oportunidade de 2 usuários que tem uma interação bem top no momento, ae eles 2 realiza o duelo, mas só eles pode enviar mensagens no grupo, ae vão trocando figurinhas.. Depois vai ter uma votação, e o pessoal do grupo que assistiu, vota no qual foi o melhor no duelo de figurinhas kkk, Mas vamos lá, irei mostrar o comando.. 

O exemplo é o seguinte:

${prefix}duelo @fulano1 @fulano2

Primeiro você marca os 2 que vão duelo, e quando for encerrar para começar a votação, o adm determina que parou o duelo, e digita: ${prefix}iniciar_votação

as pessoas vão clicar no link que direciona para o privado do bot, e lá só confirmar para votar.

se algum usuario quiser ver como votar, digitar: ${prefix}como_votar

depois que acabar o tempo de votação, algum adm digita: ${prefix}terminar_votação

e irei anunciar o ganhador com base nos votos.

se algum adm deseja acabar com o duelo e zerar tudo, digite: ${prefix}zerar_duelo

Então é isso, boa sorte.
`;
};

const idiomagtts = (prefix, NomeDoBot) => {
return`  
IDIOMAS DO GTTS OU DO TRADUTOR

EXEMPLO :

>> ${prefix}gtts pt (texto)

o PT que coloquei, é a linguagem, então pode por no lugar as 2 letras que define a linguagem, iguais os exemplos e os idiomas abaixo.

'af': 'Afrikaans',
'sq': 'Albanian',
'ar': 'Arabic',
'hy': 'Armenian',
'ca': 'Catalan',
'hr': 'Croatian',
'cs': 'Czech',
'da': 'Danish',
'nl': 'Dutch',
'en': 'English',
'eo': 'Esperanto',
'fi': 'Finnish',
'fr': 'French',
'de': 'German',
'el': 'Greek',
'ht': 'Haitian Creole',
'hi': 'Hindi',
'hu': 'Hungarian',
'is': 'Icelandic',
'id': 'Indonesian',
'it': 'Italian',
'ja': 'Japanese',
'ko': 'Korean',
'la': 'Latin',
'lv': 'Latvian',
'mk': 'Macedonian',
'no': 'Norwegian',
'pl': 'Polish',
'pt': 'Portugues',
'ro': 'Romanian',
'ru': 'Russian',
'sr': 'Serbian',
'sk': 'Slovak',
'es': 'Spanish',
'sw': 'Swahili',
'sv': 'Swedish',
'ta': 'Tamil',
'th': 'Thai',
'tr': 'Turkish',
'vi': 'Vietnamese',
'cy': 'Welsh'
 
🔥${NomeDoBot}🔥`;
};

const infotransmitir = (prefix, pushname) => {
return`
Olá ${pushname}, irei explicar como funciona os seguintes comando:

${prefix}rgtm

${prefix}tirardatm

${prefix}fazertm

${prefix}listatm

O comando rgtm, você entra no grupo ou privado de alguém que deseja que ele receba transmissão, digita ${prefix}rgtm

E caso queira tirar o grupo da transmissão, entra nele e digita 

${prefix}tirardatm ou se já saiu dele, procura o id dele no comando ${prefix}listatm

E caso queira fazer a transmissão para todos os grupos que foi registrado para transmissão, digita 

${prefix}fazertm e digita o que quer enviar para todos os grupos que foi registrado ou marque uma imagem já com legenda, ou envie uma imagem com legenda, ou documento, ou vídeo, ou texto, então é isso..
`;
};

const infoaluguel = (prefix, pushname) => {
return`

Olá ${pushname} Irei explicar como utilizar o comando 

${prefix}rg_aluguel

O exemplo é: ${prefix}rg_aluguel 01/01|coloca o número do dono aqui

Você coloca o mês que vai expirar, ae ele vai enviar uma mensagem no seu privado no dia que expirar, e vai renovar sozinho pro próximo mês, na mesma data, só não coloque pro mês 12, pois senão ele vai renovar pro mês 13 kkkk, mas só tirar o registro do aluguel..

Comando de tirar um aluguel do registro..

${prefix}rm_aluguel iddogrupo 

Em iddogrupo você tem que pegar o id do grupo, que está registrado o aluguel, use o comando ${prefix}iddogrupo 

E contem também o comando ${prefix}lista_aluguel que visualiza todos aluguel já registrado... 

Lá você pode pegar o id do grupo também, pra tirar do registro kkkk

Boa sorte..
`;
};

const anotacao = (prefix) => {
return `

Olá. Se você está lendo isso, provavelmente está curioso sobre o comando anotação. 

Existe os seguintes comando:

1 ${prefix}anotações

2 ${prefix}anotar

3 ${prefix}tirar_nota

4 ${prefix}nota titulo


O primeiro ele mostra todas as anotações do grupo, criada. 

O segundo, ele é usado para criar a nota, tipo um bloco de notas, exemplo: ${prefix}anotar ABC|ABC são 3 letras do alfabeto, utilizada bastante

Isso foi um exemplo, mas pode ser utilizado da fórma que quiser, mas lembre que antes do | é o título, depois é a anotação.

Ja o terceiro, é pra tirar a nota, Exemplo como expliquei, ${prefix}tirar_nota ABC 

Com isso a anotação que estava criada foi apagada. 

Já o terceiro, ele é pra buscar a anotação que deseja, pelo título, exemplo: ${prefix}nota ABC

É isso... 

Boa sorte. 
`;
};

module.exports = {
infobancarac, infobemvindo, infolistanegra, infopalavrao, infocontador, tabela, infosorteio, cmd_termux, infoduelo, idiomagtts, infotransmitir, infoaluguel, anotacao
};