
const anikey = "Lady-Bot"
const aninick = "SLady-Bot"

const { downloadContentFromMessage, relayWAMessage, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, getLastMessageInChat } = require('@whiskeysockets/baileys');

//_-_-_-__-_-_-_-_-_-MODULOS/FUNÇÕES-_-_-_-_-_-__-_-_-_-_-\\

const { fs, axios, crypto, util, P, linkfy, request, cheerio, ms, ffmpeg, webp_mp4, qrterminal, exec, spawn, execSync, moment, color, time, hora, date, getBuffer, convertSticker, recognize, fetchJson, fetchText, getBase64, createExif, response, addLimit, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, getpc, supre, wait, getExtension, generateMessageID, getGroupAdmins, getMembros, getRandom, banner2, banner3, temporizador, chyt, kyun, simih, botoff, colors, comand, rgp, rg_aluguel } = require('./push.js');

//-_-_-_-_-_--_-_-_-_-JS-MENUS/INFORMAÇÕES-_-_-_-_-_-_-_-_-_-_\\

const { menu, anotacao, infosorteio, menudono, adms, menulogos, efeitos, menuprem, brincadeiras, infocontador, infoduelo, infobemvindo, idiomagtts, infolistanegra, infotransmitir, infopalavrao, infobancarac, infodono, gitdobot, configbot, cmd_termux, alteradores, tabela, conselhob, palavrasc, ban, nescessario, setting, logoslink, premium, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, patentes, antispam, rggold, anotar, black_, enviarfiguUrl, getFileBuffer, DLT_FL, sleep, ANT_LTR_MD_EMJ } = require('./push.js');
const trevoapi = JSON.parse(fs.readFileSync('./dono.json'))
const anikit = trevoapi.servidor
const key = trevoapi.chave_servidor
const username = trevoapi.nome_servidor
const servidor = anikit
//_-_-_-_-_-_-_-_-_-_-_-_-(INFOS)_-_-_-_-_-_-_-_-_-_-_-_-_-_-_--\\

var { antipv3, TOKEN_GPT, isRecolherLink, cmdpremium, msgantipv2, visualizarmsg, dono1, dono2, dono3, dono4, dono5, dono6 } = require("./dono/nescessario.json");

const Links_P = require("./armor/links.json");

var { fundo1, fundo2, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, beijocmd, chutecmd, tapacmd, rnkgay, rnkgado, rnkcorno, rnkgostoso, rnkgostosa, rnknazista, rnkotaku, rnkpau } = require("./armor/links.json");

var { NomeDoBot, NickDono, prefix } = require("./dono.json");

try {
    var recolherLNK = JSON.parse(fs.readFileSync("./armor/funcoes/recolherLNK.json"));
} catch (e) {
    fs.writeFileSync("./armor/funcoes/recolherLNK.json", JSON.stringify([]));
}

const ANT_FL = JSON.parse(fs.readFileSync("./armor/json/ANTI_SPAM.json"));

try {
    var SIMI_OFC = JSON.parse(fs.readFileSync("./armor/json/simi.json"));
} catch (e) {
    fs.writeFileSync("./armor/json/simi.json", JSON.stringify([]));
}

//====================≠≠===============\\

var RND_TOKEN_GPT = TOKEN_GPT[Math.floor(Math.random() * TOKEN_GPT.length)];

var numerodono_ofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "");

const SNET = "@s.whatsapp.net";

function VR_EMJ_LMD(text) {
    const regex = /[\u0300-\u036F\u0483-\u0489\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/g;
    return regex.test(text);
}

process.on('uncaughtException', function (err) {
    console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
    console.error(err.stack);
});

// ABAIXO: INÍCIO DE CONEXÃO

async function ladyonline(upsert, conn, qrcode, sessionStartTim) {

    if (sessionStartTim) {
        const nmrdn_dono2 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"),
            "") + SNET;

        var hora120 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

        for (const info of upsert?.messages || []) {

            const from = info.key.remoteJid;
            const isGroup = from.endsWith('@g.us');

            const VR_JSON_GLOBAL = fs.existsSync(`./armor/grupos/${from}.json`) ? true : false;

            const JOGO_D_V = fs?.existsSync(`./armor/tictactoe/db/${from}.json`) ?
                JSON?.parse(fs?.readFileSync(`./armor/tictactoe/db/${from}.json`)) : false

            if (VR_JSON_GLOBAL) {
                var jsonGp = JSON.parse(fs.readFileSync(`./armor/grupos/${from}.json`));
            }

            if (VR_JSON_GLOBAL && jsonGp[0]?.x9 && info.messageStubType) {
                switch (info.messageStubType) {
                    case 29:
                        await delay(1000);
                        conn.sendMessage(info.key.remoteJid, {
                            text: `O usuario @${info.messageStubParameters[0].split("@")[0]} foi promovido pelo @${info.participant.split("@")[0]}`
                            , mentions: [info.messageStubParameters[0], info.participant]
                        });
                        break;
                    case 30:
                        await delay(1000);
                        conn.sendMessage(info.key.remoteJid, {
                            text: `O ADM @${info.messageStubParameters[0].split("@")[0]} foi rebaixado para membro comum pelo adm @${info.participant.split("@")[0]}`
                            , mentions: [info.messageStubParameters[0], info.participant]
                        });
                        break;
                }
            }

            if (!info.message) return;
            if (upsert.type == "append") return;
            const baileys = require('@whiskeysockets/baileys');
            const type = baileys.getContentType(info.message);
            const content = JSON.stringify(info.message);
            const pushname = info.pushName ? info.pushName : '';
            if (visualizarmsg) {
                await conn.readMessages([info.key]);
            } else {
                if (from == "status@broadcast") return;
            }

            global.prefix;
            global.blocked;

            //==============(BODY)================\\

            var body = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || info.message?.buttonsResponseMessage?.selectedButtonId || info.message?.listResponseMessage?.singleSelectReply?.selectedRowId || info.message?.templateButtonReplyMessage?.selectedId || info?.text || ""

            var Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || ""

            const args = body.trim().split(/ +/).slice(1);

            var budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

            if (isGroup && VR_JSON_GLOBAL) {
                if (jsonGp[0].multiprefix) {
                    var prefix = jsonGp[0]?.prefixos.find(p => String(body)?.trim()?.startsWith(p)) || jsonGp[0].prefixos[0];
                } else {
                    var prefix = setting.prefix;
                }
            } else if (!isGroup || (isGroup && !VR_JSON_GLOBAL)) {
                var prefix = setting.prefix;
            }



            var isCmd = body.trim().startsWith(prefix);

            const command = isCmd ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase() : null;

            const q_2 = budy2.trim().split(/ +/).slice(1).join(' ');

            const q = args.join(' ');

            var budy = info?.message?.conversation || info?.message?.extendedTextMessage?.text || '';

            var budy3 = budy.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

            var PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

            const q_ofc = PR_String.trim().split(/ +/).slice(1).join(" ");

            //======================================\\

            try { var groupMetadata = isGroup ? await conn.groupMetadata(from) : "" } catch { return }

            const groupName = isGroup ? groupMetadata.subject : '';

            const sender = isGroup ? info.key.participant.includes(':') ? info.key.participant.split(':')[0] + SNET : info.key.participant : info.key.remoteJid;

            const messagesC = PR_String.slice(0).trim().split(/ +/).shift().toLowerCase();

            const arg = body.substring(body.indexOf(' ') + 1);

            const botNumber = await conn.user.id.split(':')[0] + SNET;
            const argss = body.split(/ +/g);
            const testat = body;
            const ants = body;

            const groupDesc = isGroup ? groupMetadata.desc : '';

            const groupMembers = isGroup ? groupMetadata.participants : '';

            const isnit = nit.includes(sender);

            const issupre = supre.includes(sender);

            const ischyt = chyt.includes(sender);

            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : '';

            const somembros = isGroup ? getMembros(groupMembers) : '';

            //=======================================\\
            const client = conn
            const nmrdn = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") +
                SNET || isnit;

            const numerodono = [`${nmrdn}`, `${dono1}@s.whatsapp.net`,
            `${dono2}@s.whatsapp.net`, `${dono3}@s.whatsapp.net`, `${dono4}@s.whatsapp.net`,
            `${dono5}@s.whatsapp.net`, `${dono6}@s.whatsapp.net`];

            //===========(Res_Aguarde)=============\\

            const { mensagens } = require('./armor/js/aleatoria.js');

            const { sortear } = require('./armor/js/aleatoria.js');

            var enviarmen = mensagens[Math.floor(Math.random() * mensagens.length)];
            //========================================\\

            //================= Funções de Grupo 🥋 =============//

            const dirGroup = `./armor/grupos/${from}.json`;

            const nescj = "./dono/nescessario.json";

            const data_IDGP = [{
                name: groupName,
                groupId: from, x9: false,
                antiimg: false, antivideo: false,
                antiaudio: false, antisticker: false,
                antidoc: false, antictt: false,
                antiloc: false, antilinkgp: false,
                antilinkhard: false, antifake: false,
                Odelete: false, antispam: false,
                antinotas: false, anticatalogo: false,
                sistemGold: false, visuUnica: false,
                registrarFIGUS: false, soadm: false,
                rg_aluguel: false,
                listanegra: [], advertir: [], prefixos: ["!"],
                advertir2: [], legenda_estrangeiro: "0",
                legenda_documento: "0", legenda_video: "0",
                legenda_imagem: "0", multiprefix: false,
                forca_ofc: [{ acertos: 0, erros: 0, palavra: [], escreveu: [], palavra_ofc: 0, dica: 0, tema: 0 }],
                minerar_gold: [], ausentes: [], forca_inc: false,
                antipalavrao: {
                    active: false,
                    palavras: []
                },
                limitec: {
                    active: false,
                    quantidade: null
                },
                wellcome: [{
                    bemvindo1: false,
                    legendabv: "Olá #numerodele#, seja bem vindo (a)",
                    legendasaiu: 0
                },
                {
                    bemvindo2: false,
                    legendabv: "Olá #numerodele#, seja bem vindo (a)",
                    legendasaiu: 0
                }],
                simi1: false, simi2: false,
                autosticker: false, autoresposta: false,
                jogos: false, level: false,
                bangp: false, nsfw: false
            }];

            if (isGroup && !fs.existsSync(dirGroup)) {
                fs.writeFileSync(dirGroup, JSON.stringify(data_IDGP, null, 2) + '\n');
            }

            try {
                var dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined;
            } catch (e) {
                fs.writeFileSync(dirGroup, JSON.stringify(data_IDGP));
            }

            function setGp(index) {
                fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + '\n')
            }

            function setNes(index) {
                fs.writeFileSync(nescj, JSON.stringify(index, null, 2))
            }

            //=======(ADMS/DONO/ETC..CONST)========\\

            const adivinha = info.key.id.length > 21 ? 'Android ツ' : info.key.id.substring(0, 2) == '3A' ? 'IPhone ｯ' : 'WhatsApp web シ';

            const quoted = info.quoted ? info.quoted : info;

            const isBot = info.key.fromMe ? true : false;

            const SoDono = numerodono.includes(sender) || isBot || isnit || issupre ||
                ischyt;

            dfndofc = setting.numerodono + SNET;

            const DonoOficial = dfndofc.includes(sender);

            const isPremium = premium.includes(sender) || SoDono;

            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;

            const isGroupAdmins = groupAdmins.includes(sender) || SoDono

            const isBanned = ban.includes(sender)

            const isVisualizar = nescessario.visualizarmsg

            const isVerificado = nescessario.verificado

            const isAudioMenu = nescessario.menu_audio

            const isAntiPv2 = nescessario.antipv2

            const isAntiPv3 = nescessario.antipv3

            const isConsole = nescessario.consoleoff

            const isBotoff = nescessario.botoff

            const listanegraG = nescessario.listanegraG

            const isAntiPv = nescessario.antipv

            const isAnticall = nescessario.anticall

            //============(FUNÇÕES)============\\


            const isAntiImg = isGroup ? dataGp[0].antiimg : undefined

            const isAntiVid = isGroup ? dataGp[0].antivideo : undefined

            const isAntiAudio = isGroup ? dataGp[0].antiaudio : undefined

            const isAntiSticker = isGroup ? dataGp[0].antisticker : undefined

            const Antidoc = isGroup ? dataGp[0].antidoc : undefined

            const isAntiCtt = isGroup ? dataGp[0].antictt : undefined

            const Antiloc = isGroup ? dataGp[0].antiloc : undefined

            const isAntilinkgp = isGroup ? dataGp[0].antilinkgp : undefined

            const isAntiLinkHard = isGroup ? dataGp[0].antilinkhard : undefined

            const isAntifake = isGroup ? dataGp[0].antifake : undefined

            const IS_DELETE = nescessario.Odelete

            const So_Adm = isGroup ? dataGp[0].soadm : undefined

            const isX9VisuUnica = isGroup ? dataGp[0].visuUnica : undefined

            const IS_sistemGold = isGroup ? dataGp[0].sistemGold : undefined

            const ADVT = isGroup ? dataGp[0].advertir : undefined

            const ADVT2 = isGroup ? dataGp[0].advertir2 : undefined

            const isx9 = isGroup ? dataGp[0].x9 : undefined

            const isMultiP = isGroup ? dataGp[0].multiprefix : undefined

            const isAntiNotas = isGroup ? dataGp[0].antinotas : undefined

            const isAnticatalogo = isGroup ? dataGp[0].anticatalogo : undefined

            const isWelkom = isGroup ? dataGp[0].wellcome[0].bemvindo1 : undefined

            const isWelkom2 = isGroup ? dataGp[0].wellcome[1].bemvindo2 : undefined

            const isSimi = isGroup ? dataGp[0].simi1 : undefined

            const isSimi2 = isGroup ? dataGp[0].simi2 : undefined

            const isAutofigu = isGroup ? dataGp[0].autosticker : undefined

            const isAutorepo = isGroup ? dataGp[0].autoresposta : undefined

            const isModobn = isGroup ? dataGp[0].jogos : undefined

            const isLevelingOn = isGroup ? dataGp[0].level : undefined

            const isBanchat = isGroup ? dataGp[0].bangp : undefined

            const isNsfw = isGroup ? dataGp[0].nsfw : undefined

            const isPalavrao = isGroup ? dataGp[0].antipalavrao.active : undefined

            const isPalavras = isGroup ? dataGp[0].antipalavrao.palavras : undefined

            const isAntiFlood = isGroup ? dataGp[0].limitec.active : undefined

            const isLimitec = isGroup ? dataGp[0].limitec.quantidade : undefined

            //=======================================\\

            var Res_Aguarde = enviarmen

            var Res_SoGrupo = "Este comando só deve ser utilizado em Grupos."

            var Res_SoDono = "Este comando é apenas para o meu dono utilizar..."

            var Res_SoAdm = "Só Administradores do grupo podem utilizar este comando.."

            var Res_BotADM = "O Bot precisa ser Administrador do grupo para utilizar este comando..."

            var Res_SoModoBN = `Este comando so pode ser utilizado com o comando ${prefix}modobrincadeira 1 ativado, para desativar só basta utilizar ${prefix}modobrincadeira 0`

            //==========(VERIFICADO)===============\\

            if (isVerificado) {
                var selo = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `${NomeDoBot}` } } }
            } else {
                var selo = info
            }

            // FUNÇÕES DE MARCAÇÕES ESSENCIAL \\

            const menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant

            const menc_jid = args?.join(" ").replace("@", "") + SNET

            const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid

            const sender_ou_n = q.includes("@") ? menc_jid : sender

            const mrc_ou_numero = q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + SNET : menc_prt
            const menc_os2 = q.includes("@") ? menc_jid : menc_prt

            const marc_tds = q.includes("@") ? menc_jid : q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + SNET : menc_prt

            const menc_prt_nmr = q.length > 12 ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + SNET : menc_prt

            ////////////////////////////////////////////


            var isUrl = (url) => {
                return linkfy.find(url)[0]?.isLink
            }

            if (!isCmd && info.key.fromMe) return

            const reply = (texto) => {
                conn.sendMessage(from, { text: texto }, { quoted: info }).catch(e => {
                    return reply("Erro..");
                })
            }

            //
            const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
            if (time2 > "00:00:00" && time2 < "05:00:00") {
                var tempo = 'Boa madrugada'
            } if (time2 > "05:00:00" && time2 < "12:00:00") {
                var tempo = 'Bom dia'
            } if (time2 > "12:00:00" && time2 < "18:00:00") {
                var tempo = 'Boa tarde'
            } if (time2 > "18:00:00") {
                var tempo = 'Boa noite'
            }

            const sendSticker = (from, filename, info) => {
                conn.sendMessage(from, { sticker: { url: fileName } }, { quoted: info })
            }

            const sendImage = (ytb) => {
                conn.sendMessage(from, { image: { url: ytb } }, { quoted: info })
            }


            const sendMess = (hehe, ytb) => {
                conn.sendMessage(hehe, { text: ytb })
            }

            const mentions = (teks, memberr, id) => {
                (id == null || id == undefined || id == false) ? conn.sendMessage(from, { text: teks.trim(), mentions: memberr }) : conn.sendMessage(from, { text: teks.trim(), mentions: memberr })
            }

            const mention = (teks = '', ms = info) => {
                memberr = []
                vy = teks.includes('\n') ? teks.split('\n') : [teks]
                for (vz of vy) {
                    for (zn of vz.split(' ')) {
                        if (zn.includes('@')) memberr.push(parseInt(zn.split('@')[1]) + SNET)
                    }
                }
                conn.sendMessage(from, { text: teks.trim(), mentions: memberr }, { quoted: ms })
            }

            const mencionarIMG = (teks = '', Url, ms) => {
                memberr = []
                vy = teks.includes('\n') ? teks.split('\n') : [teks]
                for (vz of vy) {
                    for (zn of vz.split(' ')) {
                        if (zn.includes('@')) memberr.push(parseInt(zn.split('@')[1]) + SNET)
                    }
                }
                conn.sendMessage(from, { image: { url: Url }, caption: teks.trim(), mentions: memberr }, { quoted: ms })
            }

            const reagir = async (idgp, emj) => {
                var reactionMessage = {
                    react: {
                        text: emj,
                        key: info.key
                    }
                }
                conn.sendMessage(idgp, reactionMessage)
            }

            const verificarN = async (sla) => {
                const [result] = await conn.onWhatsApp(sla)
                if (result == undefined) {
                    reply("Este usuário não é existente no WhatsApp")
                } else {
                    reply(`-> ${sla} Número inserido é existente no WhatsApp.\n\ncom o id: ${result.jid}`)
                }
            }

            var sendlistA = async (id, txt1, txt2, title1, btext, but, vr) => {
                var sections = but
                var listMessage = {
                    text: txt1,
                    footer: txt2,
                    title: title1,
                    buttonText: btext,
                    sections
                }
                conn.sendMessage(id, listMessage, { quoted: vr })
            }

            const EnvLista = async (IDG, TXT1, TXT2, TTL, TTB, TTB2, ENVLRW) => {
                listMessage = {
                    text: TXT1, footer: TXT2,
                    title: TTL, buttonText: TTB,
                    sections: [{
                        title: TTB2, rows: ENVLRW
                    }]
                };
                conn.sendMessage(IDG, listMessage).catch(e => {
                    console.log(e);
                });
            };

            if (isGroup && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.key.fromMe) {
                if (menc_jid2?.length >= groupMembers.length - 1) {
                    conn.sendMessage(from, { text: "Membro comum com mensagem de marcação de todos do grupo, por conta disso irei remover do grupo, qualquer coisa entre em contato com um administrador..." })
                    if (IS_DELETE) {
                        setTimeout(() => {
                            conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } })
                        }, 500)
                    }
                    conn.groupParticipantsUpdate(from, [sender], "remove")
                }
            }

            const enviarfigu = async (figu, tag) => {
                conn.sendMessage(from, { sticker: { url: figu } }, { quoted: tag })
            }

            if (isAutofigu && isGroup) {
                async function autofiguf() {
                    setTimeout(async () => {

                        if (budy.includes(`${prefix}sticker`) || budy.includes(`${prefix}s`) || budy.includes(`${prefix}stk`) || budy.includes(`${prefix}st`) || budy.includes(`${prefix}fsticker`) || budy.includes(`${prefix}f`) || budy.includes(`${prefix}fstiker`)) return

                        if (type == 'imageMessage') {
                            var pack = `🐞 ⇝ Grupo:\n${groupName}`
                            var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n${NickDono}`
                            owgi = await getFileBuffer(info.message.imageMessage, 'image')
                            let encmediaa = await sendImageAsSticker2(conn, from, owgi, info, { packname: pack, author: author2 })
                            DLT_FL(encmediaa)
                        }

                        if (type == 'videoMessage') {
                            if ((isMedia && info.message.videoMessage.seconds < 10)) {
                                var pack = `🐞 ⇝ Grupo:\n${groupName}`
                                var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n⚒${NickDono}`
                                owgi = await getFileBuffer(info.message.videoMessage, 'video')
                                let encmedia = await sendVideoAsSticker2(conn, from, owgi, info, { packname: pack, author: author2 })
                                DLT_FL(encmedia)
                            }
                        }
                    }, 1000)
                }
                autofiguf().catch(e => {
                    console.log(e)
                })
            }

            var nmrdnofc1 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")

            if (isGroup && fs.existsSync(`./armor/json/afk-@${nmrdnofc1}.json`)) {
                if (budy.indexOf(`@${nmrdnofc1}`) >= 0) {
                    const tabelin = JSON.parse(fs.readFileSync(`./armor/json/afk-@${nmrdnofc1}.json`));

                    txt = `- Olá, o ${NickDono} Está ausente.\n\n - Desde: ${tabelin.Ausente_Desde}\n\n- 😇 Mensagem de ausência : ${tabelin.Motivo_Da_Ausência}`

                    conn.sendMessage(from, { text: txt }, { quoted: info })
                }
            }

            if (isGroup && dataGp[0].ausentes?.length > 0 && menc_jid2?.length > 0 && JSON.stringify(dataGp[0].ausentes).includes(menc_jid2)) {
                blue = []
                for (i of menc_jid2) {
                    if (groupAdmins.indexOf(String(i)) != -1) blue.push(groupAdmins.indexOf(String(i)))
                }
                if (blue.length == 0) return
                big = []
                for (i of blue) {
                    big.push(groupAdmins[i])
                }
                blr = []
                for (i = 0; i < big.length; i++) {
                    blr.push(dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(big[i])])
                }
                for (i of blr) {
                    var blak = i
                }
                mention(`
╭─────────────
┊ Registro de ausência.
┊ 
┊ ADM: @${blak.id.split("@")[0]}
┊   
╰────◉  ◊

↺➤ Mensagem: ${blak.msg}

 ─────────────`)
            }

            if (isBotGroupAdmins && isGroupAdmins && body === "apaga") {
                if (!menc_prt) return
                conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt } })
            }

            if (SoDono && budy.includes("reiniciar-ale") || info.key.fromMe && budy.includes("reiniciar-ale")) {
                fs.writeFileSync("./cnt-upd.json", JSON.stringify([], null, 2))
                setTimeout(() => {
                    file = require.resolve("./iniciar.js")
                    delete require.cache[file]
                    require(file)
                }, 500)
                setTimeout(() => {
                    DLT_FL("./cnt-upd.json")
                }, 1500)
            }

            //========================================\\

            //BAN GRUPO & BOT OFF
            if (isGroup && isCmd && isBanchat && !SoDono) return

            if (isGroup && isCmd && So_Adm && !SoDono && !isGroupAdmins) return

            if (isBotoff && !SoDono) return

            //=======================================\\

            const sendStickerFromUrl = async (to, url) => {
                try {
                    var names = Date.now() / 10000;
                    var download = function (uri, filename, callback) {
                        request.head(uri, function (err, res, body) {
                            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                        });
                    };
                    download(url, './sticker' + names + '.png', async function () {
                        console.log('enviando sticker');
                        let filess = './sticker' + names + '.png'
                        let asw = './sticker' + names + '.webp'
                        exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
                            let media = fs.readFileSync(asw)
                            conn.sendMessage(to, { sticker: media }, { sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true }, quoted: info }).catch(e => {
                                return reply("Erro..")
                            })
                            DLT_FL(filess)
                            DLT_FL(asw)
                        });
                    });
                } catch {
                    return reply("Erro.. FNC")
                }
            }

            //=========(isQuoted/consts)=============\\
            const isImage = type == 'imageMessage'
            const isVideo = type == 'videoMessage'
            const isVisuU2 = type == 'viewOnceMessageV2'
            const isAudio = type == 'audioMessage'
            const isSticker = type == 'stickerMessage'
            const isContact = type == 'contactMessage'
            const isLocation = type == 'locationMessage'
            const isProduct = type == 'productMessage'
            const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2")
            typeMessage = body.substr(0, 50).replace(/\n/g, '')
            if (isImage) typeMessage = "Image"
            else if (isVideo) typeMessage = "Video"
            else if (isAudio) typeMessage = "Audio"
            else if (isSticker) typeMessage = "Sticker"
            else if (isContact) typeMessage = "Contact"
            else if (isLocation) typeMessage = "Location"
            else if (isProduct) typeMessage = "Product"

            const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation')

            const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text')

            const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

            const isQuotedVisuU = type === 'extendedTextMessage' && content.includes('viewOnceMessage')

            const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')

            const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

            const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

            const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage')

            const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

            const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

            const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

            const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

            const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')

            //////BLOCK CMD///////
            //(CREDITOS AO KAUAN GAY)\\
            if (isGroup) {
                const checar = getComandos(from)
                if (checar === undefined) addComandosId(from)
            }
            if (isGroup && isCmd && !SoDono && !isnit && getComandoBlock(from).includes(command)) return reply('comando blockeado')

            ////FIMMMMMMMMM/////
            if (isConsole) {
                if (isGroup && info.message?.reactionMessage?.text) {
                    console.log(colors.brightGreen(`
     〔 ${colors.brightYellow("USUARIO")} 〕: ${pushname}
     〔 NÚMERO 〕:〔 ${colors.brightMagenta(sender.split("@")[0])} 〕
     〔 ${isGroup ? colors.brightMagenta("GRUPO") : colors.brightMagenta("PRIVADO")} 〕${isGroup ? `〔 ${colors.cyan(groupName)} 〕` : ""}
     〔 REACCIÓN 〕: 〔 ${info.message.reactionMessage.text} 〕
    `))
                } else if (isGroup && !isCmd) {
                    console.log(colors.brightGreen(`
    〔 ${colors.brightYellow("USUARIO")} 〕: ${pushname}
    〔 NÚMERO 〕:〔 ${colors.brightMagenta(sender.split("@")[0])} 〕
    〔 ${colors.brightMagenta("GRUPO")} 〕:〔 ${colors.cyan(groupName)} 〕
    `))
                } else if (isCmd && !isGroup) {
                    console.log(colors.brightGreen(`
    〔 ${colors.brightYellow("USUARIO")} 〕: ${pushname}
    〔 NÚMERO 〕:〔 ${colors.brightMagenta(sender.split("@")[0])} 〕
    〔 ${colors.red("PRIVADO")} 〕 
    〔 COMANDO 〕 :「 ${command} 」
    `))
                } else if (isCmd && isGroup) {
                    console.log(colors.brightGreen(`
    〔 ${colors.brightYellow("USUARIO")} 〕: ${pushname}
    〔 NÚMERO 〕:〔 ${colors.brightMagenta(sender.split("@")[0])} 〕
    〔 ${colors.brightMagenta("GRUPO")} 〕:〔 ${colors.cyan(groupName)} 〕
    〔 COMANDO 〕:「 ${command} 」
     `))
                } else {
                    console.log(colors.brightGreen(`
    〔 ${colors.brightYellow("USUARIO")} 〕 : ${pushname}
    〔 NÚMERO 〕:〔 ${colors.brightMagenta(sender.split("@")[0])} 〕
    〔 ${colors.red("PRIVADO")} 〕
    `))
                }
            }
            numerodn = setting.numerodono
            //======(JOGO-DA-VELHA)=======(Função)===\\

            async function joguinhodavelha() {
                const cmde = budy.toLowerCase().split(" ")[0] || "";
                let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
                if (JOGO_D_V != false) {
                    const boardnow = setGame(`${from}`);
                    if (budy == "Cex") return reply("why");
                    if (
                        budy.toLowerCase() == "S" ||
                        budy.toLowerCase() == "sim" ||
                        budy.toLowerCase() == "ok"
                    ) {
                        if (boardnow.O == sender.replace(SNET, "")) {
                            if (boardnow.status)
                                return reply(`O jogo já começou antes!`);
                            const matrix = boardnow._matrix;
                            boardnow.status = true;
                            fs.writeFileSync(`./armor/tictactoe/db/${from}.json`,
                                JSON.stringify(boardnow, null, 2)
                            );
                            const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
                            mention(chatAccept);
                        }
                    } else if (
                        budy.toLowerCase() == "N" ||
                        budy.toLowerCase() == "não" ||
                        budy.toLowerCase() == "no"
                    ) {
                        if (boardnow.O == sender.replace(SNET, "")) {
                            if (boardnow.status)
                                return reply(`O jogo já começou!`);
                            DLT_FL(`./armor/tictactoe/db/${from}.json`);
                            mention(`@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio ❌😕_*`)
                        }
                    }
                }

                if (arrNum.includes(cmde)) {
                    const boardnow = setGame(`${from}`);
                    if (!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
                    if (
                        (boardnow.turn == "X" ? boardnow.X : boardnow.O) !=

                        sender.replace(SNET, "")
                    )
                        return;
                    const moving = validmove(Number(budy), `${from}`);
                    const matrix = moving._matrix;
                    if (moving.isWin) {
                        if (moving.winner == "SERI") {
                            const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Jogo termina empatado 😐
`;
                            reply(chatEqual);
                            DLT_FL(`./armor/tictactoe/db/${from}.json`);
                            return;
                        }
                        const abt = Math.ceil(Math.random() + 4000)
                        const winnerJID = moving.winner == "O" ? moving.O : moving.X;
                        const looseJID = moving.winner == "O" ? moving.X : moving.O;
                        const limWin = Math.floor(Math.random() * 1) + 10;
                        const limLoose = Math.floor(Math.random() * 1) + 5;
                        const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Vencido por @${winnerJID} 😎👑
`;

                        mention(chatWon)
                        setTimeout(() => {
                            if (fs.existsSync("./armor/tictactoe/db/" + from + ".json")) {
                                DLT_FL("./armor/tictactoe/db/" + from + ".json");
                                reply(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
                            } else {
                                console.log(colors.red(time, "red"), colors.magenta("[ EXPIRADO ]"), colors.red('Jogo da velha espirado'));
                            }
                        }, 300000) //5 minutos
                        reply(`_*🥳Parabéns @${winnerJID} Você ganhou 20 Golds por ter ganhado o jogo da velha🎉...*_`)
                        if (JSON.stringify(rggold).includes(from)) {
                            var i2 = rggold.map(i => i.grupo).indexOf(from)
                            if (JSON.stringify(rggold[i2].usus).includes(sender)) {
                                var i3 = rggold[i2].usus.map(i => i.id).indexOf(sender)
                                rggold[i2].usus[i3].Golds += 20
                                Goldrgs(rggold)
                            }
                        }
                        DLT_FL(`./armor/tictactoe/db/${from}.json`);
                    } else {
                        const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Sua vez : @${moving.turn == "X" ? moving.X : moving.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
                        mention(chatMove);
                    }
                }
            }

            //=================================\\

            function contar(frase, letraProcurada) {
                var total = 0;[...frase].forEach(letra => {
                    if (letra === letraProcurada) total++;
                });
                return total;
            }

            joguinhodavelha()

            if (isAntilinkgp && isGroup && isBotGroupAdmins && !isGroupAdmins) {
                if (Procurar_String.includes("chat.whatsapp.com/")) {
                    if (isBot) return

                    let link_dgp;
                    try {
                        link_dgp = await conn?.groupInviteCode(from)
                    } catch {
                        link_dgp = "000000"
                    }
                    if (Procurar_String.match(link_dgp)) return reply('Link do nosso grupo, não irei remover.. ')
                    if (IS_DELETE) {
                        setTimeout(() => {
                            conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } })
                        }, 500)
                    }
                    if (!JSON.stringify(groupMembers).includes(sender)) return
                    conn.groupParticipantsUpdate(from, [sender], 'remove')
                }
            }

            const groupIdscount = [];
            for (let obj of countMessage) {
                groupIdscount.push(obj.groupId);
            }

            //========(CONTADOR-DE-MENSAGENS)========\\ LMR
            var numbersIds = []
            if (isGroup && groupIdscount.indexOf(from) >= 0) {
                var ind = groupIdscount.indexOf(from)
                for (let obj of countMessage[ind].numbers) { numbersIds.push(obj.id) }
                if (numbersIds.indexOf(sender) >= 0) {
                    var indnum = numbersIds.indexOf(sender)
                    var RSM_CN = countMessage[ind].numbers[indnum]
                    type == "stickerMessage" ? "" : RSM_CN.messages += isCmd ? 0 : 1
                    type == "stickerMessage" ? "" : RSM_CN.cmd_messages += isCmd ? 1 : 0
                    type == "stickerMessage" ? "" : RSM_CN.aparelho = adivinha
                    RSM_CN.figus += type == "stickerMessage" ? 1 : 0
                    fs.writeFileSync('./armor/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
                } else {
                    const messages = isCmd ? 0 : 1
                    const cmd_messages = isCmd ? 1 : 0
                    var figus = type == "stickerMessage" ? 1 : 0
                    countMessage[ind].numbers.push({
                        id: sender,
                        messages: messages,
                        cmd_messages: cmd_messages,
                        aparelho: adivinha,
                        figus: figus
                    })
                    fs.writeFileSync('./armor/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
                }
            } else if (isGroup) {
                countMessage.push({
                    groupId: from,
                    numbers: [{
                        id: sender,
                        messages: 2,
                        figus: 0,
                        cmd_messages: isCmd ? 1 : 0,
                        aparelho: adivinha
                    }]
                })
                fs.writeFileSync('./armor/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
            }

            //============(EVAL-EXECUÇÕES)===========\\

            if (budy.startsWith('>')) {
                try {
                    if (info.key.fromMe) return
                    if (!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return
                    console.log('[', colors.cyan('EVAL'), ']', colors.yellow(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss')), colors.green(budy))
                    return conn.sendMessage(from, { text: JSON.stringify(eval(budy.slice(2)), null, '\t') }).catch(e => {
                        return reply(String(e))
                    })
                } catch (e) {
                    return reply(String(e))
                }
            }

            if (budy.startsWith('(>')) {
                try {
                    if (info.key.fromMe) return
                    if (!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return
                    var konsol = budy.slice(3)
                    Return = (sul) => {
                        var sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return conn.sendMessage(from, { text: bang }, { quoted: info })
                    }

                    conn.sendMessage(from, { text: util.format(eval(`;(async () => { ${konsol} })()`)) }).catch(e => {
                        return reply(String(e))
                    })
                    console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, colors.green(">"), 'from', colors.green(sender.split('@')[0]), 'args :', colors.green(args.length))
                } catch (e) {
                    return reply(String(e))
                    console.log(e)
                }
            }


            if (body.startsWith('$')) {
                if (info.key.fromMe) return
                if (!SoDono && !isnit) return
                exec(q, (err, stdout) => {
                    if (err) return reply(`${err}`)
                    if (stdout) {
                        reply(stdout)
                    }
                })
            }

            //======================================\\


            //======(ANTI-IMAGEM)========\\
            if (isAntiImg && !isGroupAdmins && isBotGroupAdmins && type == 'imageMessage') {
                if (info.key.fromMe) return
                if (dataGp[0].legenda_imagem != "0") {
                    conn.sendMessage(from, { text: dataGp[0].legenda_imagem }, { quoted: info })
                }
                if (IS_DELETE) {
                    setTimeout(() => {
                        conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } })
                    }, 500)
                }
                if (!JSON.stringify(groupMembers).includes(sender)) return
                conn.groupParticipantsUpdate(from, [sender], 'remove')
            }

            //======(ANTI-STICKER)========\\
            if (isAntiSticker && !isGroupAdmins && isBotGroupAdmins && type == 'stickerMessage') {
                if (info.key.fromMe) return
                conn.sendMessage(from, { text: '*mensagem proibida detectada, banindo...*' }, { quoted: info })
                if (IS_DELETE) {
                    setTimeout(() => {
                        conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } })
                    }, 500)
                }
                if (!JSON.stringify(groupMembers).includes(sender)) return
                conn.groupParticipantsUpdate(from, [sender], 'remove')
            }

            if (Antidoc && isBotGroupAdmins && !isGroupAdmins && type == 'documentMessage') {
                if (info.key.fromMe) return
                if (dataGp[0].legenda_documento != "0") {
                    conn.sendMessage(from, { text: dataGp[0].legenda_documento }, { quoted: info })
                }
                if (IS_DELETE) {
                    setTimeout(() => {
                        conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } })
                    }, 500)
                }
                if (!JSON.stringify(groupMembers).includes(sender)) return
                conn.groupParticipantsUpdate(from, [sender], 'remove')
            }

            let isTrueFalse = Array('tiktok', 'facebook', 'instagram', 'twitter', 'ytmp3', 'ytmp4', 'play', 'play_audio', 'play_video', 'play').some(item => item === command)

            if (isUrl(Procurar_String) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
                if (Procurar_String.includes("chat.whatsapp.com")) {
                    var link_dgp = await conn?.groupInviteCode(from);
                    if (!link_dgp || !Procurar_String.match(link_dgp)) {
                        conn.groupParticipantsUpdate(from, [sender], 'remove');
                    } else {
                        return reply('Link do nosso grupo, não irei remover..');
                    }
                }

                if (isCmd && isTrueFalse) return;

                var OSINF_K = [];
                await OSINF_K.push(info.key.id);
                conn.groupSettingUpdate(from, 'announcement');
                setTimeout(() => {
                    conn.groupSettingUpdate(from, 'not_announcement');
                }, 1500);

                setTimeout(async () => {
                    for (var i of OSINF_K) {
                        conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: i, participant: sender } });
                        OSINF_K = [];
                    }
                }, 500);

                var groupMemberIds = new Set(groupMembers.map(i => i.id));
                if (!groupMemberIds.has(sender)) return;
                conn.groupParticipantsUpdate(from, [sender], 'remove');
            }


            // ANTI NOTAS FAKES ======================>

            if (isAntiNotas && budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.message?.reactionMessage?.text && budy2.length > 20) {
                let verificar = budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
                if (verificar && budy.length < 100) return
                if (IS_DELETE) {
                    setTimeout(() => {
                        conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } })
                    }, 500)
                }
                if (!JSON.stringify(groupMembers).includes(sender)) return
                conn.groupParticipantsUpdate(from, [sender], 'remove')
            }

            //FINALZIN ==============================>


            //======(ANTI-VIDEO)========\\

            if (isAntiVid && isBotGroupAdmins && !isGroupAdmins && type == 'videoMessage') {
                if (dataGp[0].legenda_video == "0") {
                    conn.sendMessage(from, { text: '*mensagem proibida detectada, banindo...*' }, { quoted: info })
                } else {
                    conn.sendMessage(from, { text: dataGp[0].legenda_video }, { quoted: info })
                }
                if (IS_DELETE) {
                    setTimeout(() => {
                        conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } })
                    }, 500)
                }
                if (!JSON.stringify(groupMembers).includes(sender)) return
                conn.groupParticipantsUpdate(from, [sender], 'remove')
            }

            //======(ANTI-AUDIO)=======\\
            if (isAntiAudio && isBotGroupAdmins && !isGroupAdmins && type == 'audioMessage') {
                conn.sendMessage(from, { text: '*mensagem proibida detectada, banindo...*' }, { quoted: info })
                if (IS_DELETE) {
                    setTimeout(() => {
                        conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } })
                    }, 500)
                }
                if (!JSON.stringify(groupMembers).includes(sender)) return
                conn.groupParticipantsUpdate(from, [sender], 'remove')
            }

            //========(ANTI-PV-QUE-BLOQUEIA)======\\
            var BLC_CL = []
            if (isAntiPv && !BLC_CL.includes(sender)) {
                if (!isGroup && !SoDono && !isnit && !isPremium) {
                    await sleep(2500)
                    reply("_- PROGRAMAÇÃO DE - _\n\n BLOQUEAR / USUARIOS POR ENVIAR MENSAGEM PARA O BOT\n\n_- REALIZANDO AÇÃO _-")
                    setTimeout(async () => {
                        conn.updateBlockStatus(sender, 'block')
                    }, 2000)
                    return
                }
                BLC_CL.push(sender)
            }
            //======================================\\

            {
                var hora_ = moment.tz('America/Sao_Paulo').format('HH:mm');
                var hora_2 = moment.tz('America/Sao_Paulo').format('mm');
                for (i of black_) {
                    if (i.hora == hora_) { var blu_dc = true } else { var blu_dc = false }
                }
                if (blu_dc == true) {
                    for (i of black_) {
                        if (i.hora == hora_) var ik = i
                    }
                    for (i of ik?.PUXAR) {
                        if (i.avisou == true) return
                        if (i.length == 0) return
                        conn.sendMessage(i.idgp, { text: i.msg })
                        i.avisou = true
                        fs.writeFileSync("./datab/grupos/AVISOS.json", JSON.stringify(black_, null, 2))
                    }
                }; for (i of black_) {
                    if (hora_2 >= i.hora.split(":")[1] + parseInt(1)) {
                        var ik2 = i
                        var ik_r = true
                    } else { var ik_r = false }
                }; if (ik_r == true) {
                    for (i of ik2.PUXAR) {
                        if (i.avisou == true) {
                            i.avisou = false
                            fs.writeFileSync("./datab/grupos/AVISOS.json", JSON.stringify(black_, null, 2))
                        }
                    }
                }
            }

            //=========(ANTIPV-QUE-SÓ-FALA)==========\\
            var MSG_ANTPV2 = []
            if (!isGroup && !isPremium && !SoDono && !isnit && !issupre && !ischyt &&
                !info.key.fromMe && isAntiPv2 && !MSG_ANTPV2.includes(sender)) {
                reply(msgantipv2)
                MSG_ANTPV2.push(sender)
            }

            //======================================\\

            // ANTI PV QUE IGNORA
            if (!isGroup && !isPremium && !SoDono && !info.key.fromMe && isAntiPv3) {
                return
            }
            const nomeBot = NomeDoBot
            // ANTI_LIGAR \\
            var BLC_ANTCL = []
            if (!isGroup && isAnticall && !BLC_ANTCL.includes(sender)) {
                conn.ws.on('CB:call', async (B) => {
                    if (B.content[0].tag == 'offer') {
                        conn.sendMessage(B.content[0].attrs['call-creator'], { text: "_- PROGRAMAÇÃO DE - _\n\n BLOQUEAR / USUARIOS POR EFETUAR LIGAÇÃO PARA O BOT\n\n_- REALIZANDO AÇÃO _-" }).then(() => {
                            conn.updateBlockStatus(B.content[0].attrs['call-creator'], "block")
                        })
                    }
                })
                BLC_ANTCL.push(sender)
            }

            //======================================\\ LMR

            var i9 = countMessage.map(i => i.groupId).indexOf(from)
            var idgrupo = groupIdscount.indexOf(from)

            var idusu = numbersIds?.indexOf(sender)

            if (isGroup && JSON.stringify(countMessage).includes(from) && JSON.stringify(countMessage[i9]).includes(sender)) {

                try {
                    var qnt_msg = countMessage[idgrupo].numbers[idusu].messages
                } catch {
                    var qnt_msg = 0
                }

                var patente = "Aspirante"

                var level_up = 0

                if (qnt_msg >= 0 && qnt_msg < 20) { var patente = "Aspirante"; var level_up = 0 }; if (qnt_msg >= 20 && qnt_msg < 50) { var patente = "Recruta"; var level_up = 1 }; if (qnt_msg >= 50 && qnt_msg < 100) { var patente = "Soldado"; var level_up = 2 }; if (qnt_msg >= 100 && qnt_msg < 200) { var patente = "Cabo"; var level_up = 3 }; if (qnt_msg >= 200 && qnt_msg < 300) { var patente = "Sargento"; var level_up = 4 }; if (qnt_msg >= 300 && qnt_msg < 400) { var patente = "Sargento I"; var level_up = 5 }; if (qnt_msg >= 400 && qnt_msg < 500) { var patente = "Sargento II"; var level_up = 6 }; if (qnt_msg >= 500 && qnt_msg < 600) { var patente = "Sargento III"; var level_up = 7 }; if (qnt_msg >= 600 && qnt_msg < 700) { var patente = "Sargento IV"; var level_up = 8 }; if (qnt_msg >= 700 && qnt_msg < 800) { var patente = "Sargento V"; var level_up = 9 }; if (qnt_msg >= 800 && qnt_msg < 900) { var patente = "Sargento VI"; var level_up = 10 }; if (qnt_msg >= 900 && qnt_msg < 1000) { var patente = "Sargento VII"; var level_up = 11 }; if (qnt_msg >= 1000 && qnt_msg < 1100) { var patente = "Sargento VII"; var level_up = 12 }; if (qnt_msg >= 1100 && qnt_msg < 1200) { var patente = "Sargento VIII"; var level_up = 13 }; if (qnt_msg >= 1200 && qnt_msg < 1500) { var patente = "Sargento IX"; var level_up = 14 }; if (qnt_msg >= 1500 && qnt_msg < 2000) { var patente = "Sargento X"; var level_up = 15 }; if (qnt_msg >= 2000 && qnt_msg < 2500) { var patente = "Tenente I"; var level_up = 16 }; if (qnt_msg >= 2500 && qnt_msg < 2600) { var patente = "Tenente II"; var level_up = 17 }; if (qnt_msg >= 2600 && qnt_msg < 2700) { var patente = "Tenente III"; var level_up = 18 }; if (qnt_msg >= 2700 && qnt_msg < 2800) { var patente = "Tenente III"; var level_up = 19 }; if (qnt_msg >= 2800 && qnt_msg < 2900) { var patente = "Tenente IV"; var level_up = 20 }; if (qnt_msg >= 2900 && qnt_msg < 3000) { var patente = "Tenente V"; var level_up = 21 }; if (qnt_msg >= 3000 && qnt_msg < 3200) { var patente = "Capitão I"; var level_up = 22 }; if (qnt_msg >= 3200 && qnt_msg < 3400) { var patente = "Capitão II"; var level_up = 23 }; if (qnt_msg >= 3400 && qnt_msg < 3800) { var patente = "Capitão III"; var level_up = 24 }; if (qnt_msg >= 3800 && qnt_msg < 4000) { var patente = "Capitão IV"; var level_up = 25 }; if (qnt_msg >= 4000 && qnt_msg < 5000) { var patente = "Capitão V"; var level_up = 26 }; if (qnt_msg >= 5000 && qnt_msg < 5500) { var patente = "Major I"; var level_up = 27 }; if (qnt_msg >= 5500 && qnt_msg < 6000) { var patente = "Major II"; var level_up = 28 }; if (qnt_msg >= 6000 && qnt_msg < 6500) { var patente = "Major III"; var level_up = 29 }; if (qnt_msg >= 6500 && qnt_msg < 8000) { var patente = "Major IV"; var level_up = 30 }; if (qnt_msg >= 8000 && qnt_msg < 9000) { var patente = "Major V"; var level_up = 31 }; if (qnt_msg >= 9000 && qnt_msg < 10000) { var patente = "Tenente C I"; var level_up = 32 }; if (qnt_msg >= 10000 && qnt_msg < 11000) { var patente = "Tenente C II"; var level_up = 33 }; if (qnt_msg >= 11000 && qnt_msg < 12000) { var patente = "Tenente C II"; var level_up = 34 }; if (qnt_msg >= 12000 && qnt_msg < 13000) { var patente = "Tenente C III"; var level_up = 35 }; if (qnt_msg >= 13000 && qnt_msg < 15000) { var patente = "Tenente C IV"; var level_up = 36 }; if (qnt_msg >= 15000 && qnt_msg < 17000) { var patente = "Tenente C V"; var level_up = 37 }; if (qnt_msg >= 17000 && qnt_msg < 20000) { var patente = "Coronel I"; var level_up = 38 }; if (qnt_msg >= 20000 && qnt_msg < 23000) { var patente = "Coronel II"; var level_up = 39 }; if (qnt_msg >= 25000 && qnt_msg < 28000) { var patente = "Coronel III"; var level_up = 40 }; if (qnt_msg >= 28000 && qnt_msg < 30000) { var patente = "Coronel IV"; var level_up = 41 }; if (qnt_msg >= 30000 && qnt_msg < 35000) { var patente = "Coronel V"; var level_up = 42 }

                if (isLevelingOn && !type == "stickerMessage") {
                    switch (qnt_msg) {
                        case 20: case 50: case 100: case 200: case 300: case 400:
                        case 500: case 600: case 700: case 800: case 900: case 1000:
                        case 1100: case 1200: case 1500: case 2000: case 2500: case 2600:
                        case 2700: case 2800: case 2900: case 3000: case 3200: case 3400:
                        case 3600: case 3800: case 4000: case 5000: case 5500: case 6000:
                        case 6500: case 8000: case 9000: case 10000: case 11000: case 12000:
                        case 13000: case 15000: case 17000: case 20000: case 23000:
                        case 25000: case 28000: case 30000:
                            conn.sendMessage(from, {
                                text: `
￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
✥ Parabéns: @${sender.split("@")[0]}

Você upou de level e também de patente por completar ${qnt_msg} mensagens e recebeu 25 Golds, veja as informações abaixo..\n
✧ Patente: ${patente}

✧ Level: ${level_up}

￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣`
                                , mentions: [sender]
                            })
                            if (JSON.stringify(rggold).includes(from)) {
                                var i2 = rggold.map(i => i.grupo).indexOf(from)
                                if (JSON.stringify(rggold[i2].usus).includes(sender)) {
                                    var i3 = rggold[i2].usus.map(i => i.id).indexOf(sender)
                                    rggold[i2].usus[i3].Golds += 25
                                    Goldrgs(rggold)
                                }
                            }
                            break
                    }
                }
            }

            if (isGroup) {
                if (!JSON.stringify(patentes).includes(from)) {
                    patentes.push({
                        grupoID: from,
                        usus: [{
                            id: sender,
                            level_usu: level_up,
                            patente_usu: patente
                        }]
                    })
                    fs.writeFileSync("./armor/patentes.json", JSON.stringify(patentes))
                }
                var i8 = patentes.map(i => i.grupoID).indexOf(from)
                if (!JSON.stringify(patentes[i8].usus).includes(sender)) {
                    patentes[i8].usus.push({
                        id: sender,
                        level_usu: level_up,
                        patente_usu: patente
                    })
                    fs.writeFileSync("./armor/patentes.json", JSON.stringify(patentes))
                }
                var i9 = patentes[i8].usus.map(i => i.id).indexOf(sender)
                if (patentes[i8]?.usus[i9]?.patente_usu != patente) {
                    patentes[i8].usus[i9].patente_usu = patente
                    fs.writeFileSync("./armor/patentes.json", JSON.stringify(patentes))
                }
                if (patentes[i8].usus[i9].level_usu != level_up) {
                    patentes[i8].usus[i9].level_usu = level_up
                    fs.writeFileSync("./armor/patentes.json", JSON.stringify(patentes))
                }
            }

            if (isX9VisuUnica) {
                if (info.message?.viewOnceMessageV2 || type == "viewOnceMessage") {
                    if (JSON.stringify(info).includes("videoMessage")) {
                        var px = info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage
                        px.viewOnce = false
                        px.video = { url: px.url }
                        px.caption += "\n\nRevelando Visualização única.."
                        conn.sendMessage(from, px)
                    } else {
                        var px = info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage
                        px.viewOnce = false
                        px.image = { url: px.url }
                        px.caption += "\n\nRevelando Visualização única.."
                        conn.sendMessage(from, px)
                    }
                }
            }

            /////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\
            function Goldrgs(index) {
                fs.writeFileSync("./armor/funcoes/golds.json", JSON.stringify(index, null, 2) + '\n')
            }

            if (!JSON.stringify(rggold).includes(from)) {
                rggold.push({ grupo: from, usus: [] })
                Goldrgs(rggold)
            }

            if (isGroup && IS_sistemGold) {
                var i2 = rggold.map(i => i.grupo).indexOf(from)
                var blt = [];
                for (i of rggold[i2].usus) { blt.push(i.id) }

                if (blt.indexOf(sender) < 0) {
                    rggold[i2].usus.push({ id: sender, Golds: 0, data: 0, desligar: false })
                    Goldrgs(rggold)
                }; await sleep(100)

                if (JSON.stringify(rggold).includes(from) && JSON.stringify(rggold[i2].usus).includes(sender)) {
                    var i2 = rggold.map(i => i.grupo).indexOf(from)
                    var i3 = rggold[i2].usus.map(i => i.id).indexOf(sender)

                    var AddGold = async (qnt, usu) => {
                        rggold[i2].usus[rggold[i2].usus.map(i => i.id).indexOf(usu)].Golds += qnt
                        Goldrgs(rggold)
                        conn.sendMessage(from, { text: `Parabéns: > @${usu.split("@")[0]} você ganhou ${qnt} Golds.. `, mentions: [usu] })
                    }

                    var ConsultarGold = async (usu) => {
                        conn.sendMessage(from, { text: `Olá @${usu.split("@")[0]} você contém ${rggold[i2].usus[rggold[i2].usus.map(i => i.id).indexOf(usu)].Golds} Golds, breve você será bem mais rico que Elon Musk, só confia..`, mentions: [usu] })
                    }

                    var TirarGold = async (qnt, usu) => {
                        rggold[i2].usus[rggold[i2].usus.map(i => i.id).indexOf(usu)].Golds -= qnt
                        Goldrgs(rggold)
                        conn.sendMessage(from, { text: `Que pena... @${usu.split("@")[0]} você perdeu ${qnt} Golds.. `, mentions: [usu] })
                    }

                    var ConsumirGold = async (qnt, usu) => {
                        if (rggold[i2].usus[i3].Golds < qnt) return reply("Você não tem Golds suficiente para utilizar este comando..")
                        rggold[i2].usus[rggold[i2].usus.map(i => i.id).indexOf(usu)].Golds -= qnt
                        Goldrgs(rggold)
                        mention(`${tempo} @${sender.split("@")[0]}  após o uso do comando ${command} foi consumido ${qnt} Golds dos seus > ${rggold[i2].usus[i3].Golds + qnt} Golds`)
                    }

                    var QNTD_GOLDS = rggold[i2].usus[i3].Golds

                    var dattofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

                    if (rggold[i2].usus[i3].desligar == false) {
                        async function PR_Gold() {
                            mention(`✫ Parabéns @${sender.split("@")[0]} - 
Você recebeu 10 Golds pela primeira mensagem do dia e também 0/2 para mineração de área, utilize o comando ${prefix}minerar_gold 2 vez, ${tempo} ✫`)
                            rggold[i2].usus[i3].data = dattofc
                            rggold[i2].usus[i3].desligar = true
                            rggold[i2].usus[i3].Golds += 10
                            Goldrgs(rggold)
                            if (!JSON.stringify(dataGp[0].minerar_gold).includes(sender)) {
                                dataGp[0].minerar_gold.push({ id: sender, ChanceG: 0 })
                                setGp(dataGp)
                            }
                            await sleep(200)
                            var i4 = dataGp[0].minerar_gold.map(i => i.id).indexOf(sender)
                            dataGp[0].minerar_gold[i4].ChanceG = null
                            setGp(dataGp)
                        }
                        return PR_Gold()
                    }
                }

                if (dattofc != rggold[i2].usus[i3].data) {
                    rggold[i2].usus[i3].data = dattofc
                    rggold[i2].usus[i3].desligar = false
                    Goldrgs(rggold)
                }

            }
            /////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\

            if (isBanned) return BannedExpired(ban)

            var palavrasfr = JSON.parse(fs.readFileSync("./datab/grupos/palavras_forca.json"))

            var palavrasfrc = palavrasfr[Math.floor(Math.random() * palavrasfr.length)]

            var ALT_FR = palavrasfrc?.plvr.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

            async function rv_forca() {
                var blue = []
                for (let i = 0; i < ALT_FR.length; i++) {
                    if (ALT_FR[i] == ' ') {
                        blue.push(' ')
                    } else {
                        blue.push('_')
                    }
                }
                dataGp[0].forca_ofc = [{ acertos: 0, erros: 0, palavra: blue, escreveu: [], palavra_ofc: ALT_FR, dica: palavrasfrc.dica, tema: palavrasfrc.tema }]
                dataGp[0].forca_inc = false
                setGp(dataGp)
            }

            if (isRecolherLink && budy.includes("https://chat.whatsapp.com")) {

                var L_WTS = "https://chat.whatsapp.com/"

                for (var i = 1; i < body.split(L_WTS).length; i++) {
                    if (!recolherLNK.map(i => i?.Link).includes(L_WTS + body.split(L_WTS)[i].slice(0, 22))) recolherLNK.push({ Link: L_WTS + body.split(L_WTS)[i].slice(0, 22) })
                }

                fs.writeFileSync("./armor/funcoes/recolherLNK.json", JSON.stringify(recolherLNK, null, 2))
                if (isBotGroupAdmins && !isGroupAdmins) {
                    setTimeout(async function () {
                        conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } })
                    }, 1100);
                }
            }

            if (!isPremium && nescessario.cmdpremium.includes(command)) return reply(`Este comando é apenas para
usuário premium, se deseja adquirir, fale com meu dono:
https://wa.me/${numerodono_ofc}`)


            // PRA LIMPAR DO CONTADOR QUEM NÃO ESTÁ NO GRUPO
            async function LIMPARDOCNT_QUEMJASAIU() {
                var RD_CNT = countMessage[countMessage.map(i => i.groupId).indexOf(from)].numbers
                CNT1 = []; for (i of groupMembers) { CNT1.push(i.id) }
                CNT = []; for (i of RD_CNT) {
                    if (!CNT1.includes(i.id)) CNT.push(i)
                }
                for (i of CNT) {
                    RD_CNT.splice(RD_CNT.map(i => i.id).indexOf(i.id), 1)
                }
                fs.writeFileSync("./armor/countmsg.json", JSON.stringify(countMessage, null, 2))
            }
            RPT_M = []
            if (!RPT_M.includes(from) && (nescessario?.rg_aluguelGB || isGroup && dataGp[0]?.rg_aluguel || false) && !SoDono && !rg_aluguel.some(i => i.id_gp == from)) {
                RPT_M.push(from)
                setTimeout(() => {
                    RPT_M.splice(RPT_M.indexOf(from), 1)
                }, 30000)
                return reply(`O aluguel do ( Grupo / Usuario ) não está registrado, fale com o dono para registrar o aluguel ou renovar: https://wa.me/${numerodono_ofc}`)
            }

            if ((nescessario?.rg_aluguelGB || isGroup && dataGp[0]?.rg_aluguel || false) && rg_aluguel.some((ab) => {
                var tempo_A = Math.floor(Date.now() / 1000);
                var VNCM = Math.floor(ab?.vencimento)
                return tempo_A > VNCM
            })) {

                var RS_P = []

                for (var abc of rg_aluguel) {
                    var tempo_A = Math.floor(Date.now() / 1000);
                    var VNCM = Math.floor(abc?.vencimento)
                    if (tempo_A > VNCM) {
                        console.log(colors.blue(`Grupo / Usuario: ${abc.nome_}\nID: ${abc.id_gp}\n\nExpirou o aluguel..`));
                        RS_P.push(`Grupo: ${abc.nome_}\nID: ${abc.id_gp}\n\nExpirou o aluguel..`);
                        rg_aluguel.splice(rg_aluguel.findIndex(a => a.id_gp === abc.id_gp), 1);
                    }
                }

                conn.sendMessage(numerodono_ofc + "@s.whatsapp.net", { text: RS_P.join('\n') });
                fs.writeFileSync("./armor/json/rg_aluguel.json", JSON.stringify(rg_aluguel, null, 2));
            }

            //INICIO DE COMANDO DE PREFIXO
            switch (command) {


                case 'roll':
                    var [d1, d2] = q.toLowerCase().trim().split("d")
                    var [d3] = q.toLowerCase().trim().split("+") || 0
                    if (parseInt(d1) > 200) return reply("Quantidade de dados muito exagerado.")
                    if (!q.toLowerCase().includes("d")) return reply(`Exemplo: ${prefix}roll 2d20`);
                    if (!Number(parseInt(d2))) return reply(`Exemplo: ${prefix}roll 2d20`);
                    RS_D = "Resultado dos Dados:\n\n"
                    for (i = 0; i < d1; i++) {
                        RS_D += `[ ${i + 1} ] ${Math.floor(Math.random() * parseInt(d2) + parseInt(d3))}\n\n`
                    }
                    reply(RS_D)
                    break;

                case 'infoanotacao':
                    conn.sendMessage(from, { text: anotacao(prefix) })
                    break

                case 'owner':
                case 'odono':
                case 'dono':
                case 'infodono':
                    numerodn = numerodono_ofc
                    conn.sendMessage(from, { image: { url: logoslink.logo }, caption: infodono(prefix, numerodn, NomeDoBot, sender), mentions: [sender] }, { quoted: selo })
                    break;

                case 'tabela':
                    conn.sendMessage(from, { text: tabela(prefix, NomeDoBot) }, { quoted: selo })
                    break

                case 'infobemvindo':
                case 'infobv':
                    conn.sendMessage(from, { text: infobemvindo(prefix) }, { quoted: selo })
                    break

                case 'idiomas':
                case 'idioma':
                    conn.sendMessage(from, { text: idiomagtts(prefix, NomeDoBot) }, { quoted: selo })
                    break

                case 'infoforca':
                    reply(`como adicionar palavras no comando forca.
Exemplo: ${prefix}addpalavras_forca gato|Animal|Ele mia

Exemplo para tirar a palavra do comando forca, é só usar:

${prefix}rmpalavra_forca gato

boa sorte.
`)
                    break;

                case 'infopremium':
                    reply(`Informação sobre o novo recurso de escolher qual comando vai ser,
premium.

- Comando: ${prefix}cmdpremium 
este comando vai mostrar quais comandos está premium.

- Comando: ${prefix}addcmdpremium
este comando coce vai usar pra adicionar o comando de premium, por exemplo:
${prefix}addcmdpremium play_audio ae o comando play_audio, so vai poder ser
utilizado por premium KKK

- Comando: ${prefix}tirarcmdpremium
já este comando, ele vai tirar o comando da lista premium, que você adiciono,
exemplo: ${prefix}tirarcmdpremium play_audio

Boa sorte.`)
                    break;

                case 'infoduelo':
                    mention(infoduelo(prefix, numerodn, NomeDoBot, sender))
                    break

                case 'infomultiprefixo': case 'infomultiprefix':
                    mention(`${tempo} @${sender.split("@")[0]}, Irei informar como funciona a função de multiplos prefixo.

Essa função é por grupo, feito em um, não será feito em todos.

Primeiramente, ativar ele com 

${prefix}multiprefixo usando primeira vez ele ativa, depois ele desativa... E assim vai em diante..

Contém os seguintes comandos:

${prefix}add_prefixo\n\n${prefix}tirar_prefixo\n\n${prefix}prefixos

Exemplo do primeiro comando >

${prefix}add_prefixo &

O & que usei como exemplo, vai passar a ser um prefixo oficial do grupo, então se usar ${prefix} ou & funcionará, pode adicionar quantos quiser.. 

E pra tirar vai fazer o seguinte\n${prefix}tirar_prefixo &

E pra verificar os prefixos que foi adicionado 

${prefix}prefixos

É isso, boa sorte...`)
                    break

                case 'infosorteio':
                case 'helpsorteio':
                    conn.sendMessage(from, { text: infosorteio(prefix, pushname) }, { quoted: selo })
                    break

                case 'infocontador':
                case 'infobanghost':
                    conn.sendMessage(from, { text: infocontador(prefix, pushname) }, { quoted: selo })
                    break

                case 'infolistanegra':
                    conn.sendMessage(from, { text: infolistanegra(prefix, pushname) }, { quoted: selo })
                    break

                case 'infotransmitir':
                    conn.sendMessage(from, { text: infotransmitir(prefix, pushname) }, { quoted: selo })
                    break

                case 'infopalavrão':
                case 'infopalavrao':
                    conn.sendMessage(from, { text: infopalavrao(prefix, pushname) }, { quoted: selo })
                    break

                case 'infobancarac':
                    conn.sendMessage(from, { text: infobancarac(prefix, pushname) }, { quoted: selo })
                    break

                case 'git':
                case 'git-bot':
                case 'gitdobot':
                case 'gitbot':
                    conn.sendMessage(from, { text: gitdobot(prefix) }, { quoted: selo })
                    break


                case 'metadinha':
                case 'metadinha2':
                case 'metadinha3':
                    // if (!isGroup) return reply(resposta.grupo)
                    anuu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')

                    random = anuu[Math.floor(Math.random() * anuu.length)]
                    let buttonssMessssage = {
                        image: { url: random.male },
                        caption: `🥶MASCULINO🥶`,
                        footer: `${nomeBot}`,
                        headerType: 4
                    }
                    await client.sendMessage(from, buttonssMessssage, { quoted: info }).catch(err => {
                        return ('Error!')
                    })
                    let buttonssMesssage = {
                        image: { url: random.female },
                        caption: `🌸FEMININO🌸`,
                        footer: `${nomeBot}`,
                        headerType: 4
                    }
                    await client.sendMessage(from, buttonssMesssage, { quoted: info }).catch(err => {
                        return ('Error!')
                    })
                    break

                // comandos que utilizam a Api \\
                //case 'play_video':
                case 'ytmp4':
                    try {
                        if (!q) return reply(`˖⸙̭❛✰❤️Coloque um link do YouTube pata o bot baixar`)
                        client.sendMessage(from, { react: { text: '🕚', key: info.key } })
                        var url = q;
                        var anikit = await fetchJson(servidor + `/anikit/ytmp4?username=${username}&key=${key}&videoUrl=${url}`)
                        client.sendMessage(from,
                            {
                                video: { url: `${anikit.url}` },
                                mimetype: 'video/mp4'
                            })
                    } catch (e) {
                        return reply("ERROR!!");
                        console.log(e)
                    }
                    break


                //case 'play_audio':
                case 'ytmp3':
                    try {
                        if (!q) return reply(`˖⸙̭❛✰❤️Coloque um link do YouTube pata o bot baixar`)
                        client.sendMessage(from, { react: { text: '🕚', key: info.key } })
                        var url = q;
                        var anikit = await fetchJson(servidor + `/anikit/ytmp3?username=${username}&key=${key}&videoUrl=${url}`)
                        client.sendMessage(from,
                            {
                                audio: { url: `${anikit.url}` },
                                mimetype: 'audio/mpeg'
                            })
                    } catch (e) {
                        return reply("ERROR!!");
                        console.log(e)
                    }
                    break

                case "playvideo":
                case "playmp4":
                case 'playvd':
                    if (!q) return reply('Coloque o nome da musica também')
                    reply("「🍉」𝙲𝚊𝚕𝚖𝚘 𝙰𝚛𝚛𝚘𝚖𝚋𝚊𝚍𝚘, 𝙹𝚊 𝚃𝚘 𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘...")
                    fetch(servidor + `/yt/playmp4?query=${q}&key=${key}&username=${username}`).then(response => response.json()).then(ytbr => {

                        client.sendMessage(from, { image: { url: servidor + `/music-card2?key=${key}&username=${username}&thumbnail=${ytbr.thumb}&backgroundcolor=070707&autor=${ytbr.channel}&nome=${ytbr.title}&starttime=0%3A02&endtime=2%3A56` }, caption: `「👤」𝙽𝚘𝚖𝚎  ҂ ${ytbr.title}\n「📺」𝙲𝚊𝚗𝚊𝚕  ҂ ${ytbr.channel}\n「📈」𝚅𝚒𝚎𝚠𝚜  ҂ ${ytbr.views}` }, { quoted: info })


                        client.sendMessage(from, { video: { url: ytbr.url }, mimetype: 'video/mp4' }, { quoted: info })

                    })

                    break

                case "playaudio":
                case 'play':
                    if (!q) return reply('Coloque o nome da musica também')
                    reply("「🍉」𝙲𝚊𝚕𝚖𝚘 𝙰𝚛𝚛𝚘𝚖𝚋𝚊𝚍𝚘, 𝙹𝚊 𝚃𝚘 𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘...")
                    fetch(servidor + `/yt/playmp4?query=${q}&key=${key}&username=${username}`).then(response => response.json()).then(ytbr => {

                        client.sendMessage(from, { image: { url: servidor + `/music-card2?key=${key}&username=${username}&thumbnail=${ytbr.thumb}&backgroundcolor=070707&autor=${ytbr.channel}&nome=${ytbr.title}&starttime=0%3A02&endtime=2%3A56` }, caption: `「👤」𝙽𝚘𝚖𝚎  ҂ ${ytbr.title}\n「📺」𝙲𝚊𝚗𝚊𝚕  ҂ ${ytbr.channel}\n「📈」𝚅𝚒𝚎𝚠𝚜  ҂ ${ytbr.views}` }, { quoted: info })


                        client.sendMessage(from, { audio: { url: ytbr.url }, mimetype: 'audio/mpeg' }, { quoted: info })

                    })

                    break

                case "tiktok":
                case "tiktokvd": {
                    if (q.length < 1) return reply("Por favor, coloque o link do vídeo após o comando.");
                    const url = q;
                    const apiUrl = servidor + `/download/tiktok?url=${url}&username=${username}&key=${key}`;
                    fetch(apiUrl)
                        .then(response => response.json())
                        .then(data => {
                            if (data.videoSemWt) {
                                client.sendMessage(from, {
                                    video: { url: data.videoSemWt },
                                    mimetype: 'video/mp4'
                                });
                            } else {
                                return reply("Não foi possível obter o vídeo. Verifique o link e tente novamente.");
                            }
                        })
                        .catch(error => {
                            console.error(error);
                            return reply("Ocorreu um erro ao processar o pedido. Tente novamente mais tarde.");
                        });
                } break

                case "tiktokad": {
                    if (q.length < 1) return reply("Por favor, coloque o link do vídeo após o comando.");
                    const url = q;
                    const apiUrl = servidor + `/download/tiktok?url=${url}&username=${username}&key=${key}`;
                    fetch(apiUrl)
                        .then(response => response.json())
                        .then(data => {
                            if (data.videoSemWt) {
                                client.sendMessage(from, {
                                    audio: { url: data.audio },
                                    mimetype: 'audio/mpeg'
                                });
                            } else {
                                reply("Não foi possível obter o vídeo. Verifique o link e tente novamente.");
                            }
                        })
                        .catch(error => {
                            console.error(error);
                            return reply("Ocorreu um erro ao processar o pedido. Tente novamente mais tarde.");
                        });
                } break



                case "cosplay":
                case "waifu":
                case "waifu2":
                case "shota":
                case "loli":
                case "yotsuba":
                case "shinomiya":
                case "yumeko":
                case "tejina":
                case "chiho":
                case "shizuka":
                case "boruto":
                case "kagori":
                case "kaga":
                case "kotori":
                case "mikasa":
                case "akiyama":
                case "hinata":
                case "minato":
                case "naruto":
                case "nezuko":
                case "yuki":
                case "hestia":
                case "emilia":
                case "itachi":
                case "elaina":
                case "madara":
                case "sasuke":
                case "deidara":
                case "sakura":
                case "tsunade":
                    //reply("off no momento")
                    try {
                        client.sendMessage(from, { react: { text: '🕚', key: info.key } })
                        fetch(encodeURI(servidor + `/nime/${command}?username=${username}&key=${key}`))
                            .then(response => response.json())
                            .then(data => {
                                var resultado = data.url;

                                let buttonMessage4 = {
                                    image: { url: `${resultado}` },
                                    caption: `🏕 Olá ${pushname}, aqui está sua imagem 🎲`,
                                    footer: '',
                                    //buttons: buttons,
                                    headerType: 4
                                }
                                client.sendMessage(from, buttonMessage4, { quoted: info })
                            })
                    } catch (e) {
                        console.log(e)
                        reply("nao achei a foto, tente novamente mais tarde")
                    }

                    break

                case 'ahegao':
                case 'ass':
                case 'bdsm':
                case 'blowjob':
                case 'cuckold':
                case 'cum':
                case 'ero':
                case 'kasedaiki':
                case 'femdom':
                case 'foot':
                case 'gangbang':
                case 'glasses':
                case 'jahy':
                case 'manga':
                case 'masturbation':
                case 'neko':
                case 'orgy':
                case 'panties':
                case 'pussy':
                case 'neko2':
                case "neko":
                case 'tentacles':
                case 'thighs':
                case 'yuri':
                case 'zettai':
                    //reply("off no momento")

                    try {
                        client.sendMessage(sender, { react: { text: '🕚', key: info.key } })
                        fetch(encodeURI(servidor + `/nsfw/${command}?username=${username}&key=${key}`))
                            .then(response => response.json())
                            .then(data => {
                                var resultado = data.url;

                                let buttonMessage4 = {
                                    image: { url: `${resultado}` },
                                    caption: `🏕 Olá ${pushname}, aqui está sua imagem 🎲`,
                                    footer: '',
                                    //buttons: buttons,
                                    headerType: 4
                                }
                                client.sendMessage(sender, buttonMessage4, { quoted: info })
                            })
                    } catch (e) {
                        console.log(e)
                        reply("nao achei a foto, tente novamente mais tarde")
                    }

                    break

                case "x4":
                case "4x4": {
                    fras = [
                        "Vamos com tudo, pessoal!",
                        "Mostrem seu potencial agora!",
                        "Nós somos imparáveis!",
                        "A vitória é nossa, acreditem!",
                        "Ação rápida, vitória certa!",
                        "Não vamos deixar ninguém para trás!",
                        "Juntos, somos invencíveis!",
                        "Foco, determinação e coragem!",
                        "Nada pode nos deter!",
                        "Vamos mostrar quem manda aqui!",
                        "Não se esqueçam de trabalhar em equipe!",
                        "A sorte favorece os audaciosos!",
                        "Vamos fazer história hoje!",
                        "Não podemos desistir, a luta está só começando!",
                        "Concentração total, galera!",
                        "Não tenham medo, enfrentem o perigo de frente!",
                        "A vitória está a um passo de nós, não vamos recuar!",
                        "Acreditem em si mesmos e vençam!",
                        "Vamos jogar com estratégia e inteligência!",
                        "Vocês são os melhores, vamos mostrar isso agora!",
                        "Não permitam que nos subestimem, mostrem do que somos capazes!",
                        "Fiquem alertas, o inimigo está próximo!",
                        "A força está em cada um de nós, vamos utilizá-la!",
                        "Não deixem o cansaço atrapalhar, sigam em frente!",
                        "Não existe time melhor do que o nosso!"
                    ]
                    epa = fras[Math.floor(Math.random() * fras.length)]
                    tabi = ["😀", "😃", "😁", "😆", "😂", "🤣", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🥲", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤥", "🤡", "😈", "🥵", "👽", "😷", "💦", "👺", "👹", "💨", "😸", "😹", "❤️", "🫀", "😻", "💋", "🫂", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "🌈", "💧", "🙈", "🍑", "🍒", "🍓", "🌶️", "🍆", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎭", "📽️", "🎰", "☎️", "📞", "👑", "💎", "💍", "🗡️", "⚔️", "💣", "⁉️", "✅", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🤔", "🤫", "😏", "🍆", "👺", "🙊"]
                    kkk = tabi[Math.floor(Math.random() * tabi.length)]

                    membros = (groupId, membros1) => {
                        array = []
                        for (let i = 0; i < membros1.length; i++) {
                            array.push(membros1[i].id)
                        }
                        return array
                    }
                    var yd = membros(from, groupMembers)

                    client.sendMessage(from, {
                        text: `${groupName}

⚔️SLOT 1⚔️
${kkk}
${kkk}
${kkk}
${kkk}

⚔️SLOT 2⚔️
${kkk}
${kkk}
${kkk}
${kkk}

${epa}`,
                        mentions: yd
                    })

                } break

                case "x6":
                case "6x6": {

                    fras = [
                        "Vamos com tudo, pessoal!",
                        "Mostrem seu potencial agora!",
                        "Nós somos imparáveis!",
                        "A vitória é nossa, acreditem!",
                        "Ação rápida, vitória certa!",
                        "Não vamos deixar ninguém para trás!",
                        "Juntos, somos invencíveis!",
                        "Foco, determinação e coragem!",
                        "Nada pode nos deter!",
                        "Vamos mostrar quem manda aqui!",
                        "Não se esqueçam de trabalhar em equipe!",
                        "A sorte favorece os audaciosos!",
                        "Vamos fazer história hoje!",
                        "Não podemos desistir, a luta está só começando!",
                        "Concentração total, galera!",
                        "Não tenham medo, enfrentem o perigo de frente!",
                        "A vitória está a um passo de nós, não vamos recuar!",
                        "Acreditem em si mesmos e vençam!",
                        "Vamos jogar com estratégia e inteligência!",
                        "Vocês são os melhores, vamos mostrar isso agora!",
                        "Não permitam que nos subestimem, mostrem do que somos capazes!",
                        "Fiquem alertas, o inimigo está próximo!",
                        "A força está em cada um de nós, vamos utilizá-la!",
                        "Não deixem o cansaço atrapalhar, sigam em frente!",
                        "Não existe time melhor do que o nosso!"
                    ]
                    epa = fras[Math.floor(Math.random() * fras.length)]

                    tabi = ["😀", "😃", "😁", "😆", "😂", "🤣", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🥲", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤥", "🤡", "😈", "🥵", "👽", "😷", "💦", "👺", "👹", "💨", "😸", "😹", "❤️", "🫀", "😻", "💋", "🫂", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "🌈", "💧", "🙈", "🍑", "🍒", "🍓", "🌶️", "🍆", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎭", "📽️", "🎰", "☎️", "📞", "👑", "💎", "💍", "🗡️", "⚔️", "💣", "⁉️", "✅", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🤔", "🤫", "😏", "🍆", "👺", "🙊"]
                    kkk = tabi[Math.floor(Math.random() * tabi.length)]
                    membros = (groupId, membros1) => {
                        array = []
                        for (let i = 0; i < membros1.length; i++) {
                            array.push(membros1[i].id)
                        }
                        return array
                    }
                    var yd = membros(from, groupMembers)

                    client.sendMessage(from, {
                        text: `${groupName}

⚔️SLOT 1⚔️
${kkk}
${kkk}
${kkk}
${kkk}
${kkk}
${kkk}

⚔️SLOT 2⚔️
${kkk}
${kkk}
${kkk}
${kkk}
${kkk}
${kkk}


${epa}`,
                        mentions: yd
                    })

                } break

                // Criadas por @clovermods 
                // Api https://clover-t-bot.onrender.com
                // Lembre-se de por sua key e username nos lugares corretos 

                case 'wallpaper1':
                    //if (!isPremium) return reply('[⚙️️]comando so pra usuários vip')
                    reply("「🐸」ja to enviando no teu pv")
                    google = await fetchJson(servidor + `/wallpaper/satanic?key=${key}&username=${username}`)
                    client.sendMessage(sender, { image: { url: google.url } }, { quoted: info })
                    break


                case 'wallpaper2':
                    //if (!isPremium) return reply('[⚙️️]comando so pra usuários vip')
                    reply("「🐸」ja to enviando no teu pv")
                    google = await fetchJson(servidor + `/wallpaper/cyberspace?key=${key}&username=${username}`)
                    client.sendMessage(sender, { image: { url: google.url } }, { quoted: info })
                    break


                case 'wallpaper3':
                    //if (!isPremium) return reply('[⚙️️]comando so pra usuários vip')
                    reply("「🐸」ja to enviando no teu pv")
                    google = await fetchJson(servidor + `/wallpaper/gaming?key=${key}&username=${username}`)
                    client.sendMessage(sender, { image: { url: google.url } }, { quoted: info })
                    break


                case 'wallpaper4':
                    //if (!isPremium) return reply('[⚙️️]comando so pra usuários vip')
                    reply("「🐸」ja to enviando no teu pv")
                    google = await fetchJson(servidor + `/wallpaper/wallpapertec?key=${key}&username=${username}`)
                    client.sendMessage(sender, { image: { url: google.url } }, { quoted: info })
                    break


                case 'wallpaper5':
                    //if (!isPremium) return reply('[⚙️️]comando so pra usuários vip')
                    reply("「🐸」ja to enviando no teu pv")
                    google = await fetchJson(servidor + `/wallpaper/ppcouple?key=${key}&username=${username}`)
                    client.sendMessage(sender, { image: { url: google.url } }, { quoted: info })
                    break


                case 'wallpaper6':
                    //if (!isPremium) return reply('[⚙️️]comando so pra usuários vip')
                    reply("「🐸」ja to enviando no teu pv")
                    google = await fetchJson(servidor + `/wallpaper/pubg?key=${key}&username=${username}`)
                    client.sendMessage(sender, { image: { url: google.url } }, { quoted: info })
                    break

                case 'wallpaper7':
                    //if (!isPremium) return reply('[⚙️️]comando so pra usuários vip')
                    reply("「🐸」ja to enviando no teu pv")
                    google = await fetchJson(servidor + `/wallpaper/aesthetic?key=${key}&username=${username}`)
                    client.sendMessage(sender, { image: { url: google.url } }, { quoted: info })
                    break


                case 'wallpaper8':
                    //if (!isPremium) return reply('[⚙️️]comando so pra usuários vip')
                    reply("「🐸」ja to enviando no teu pv")
                    google = await fetchJson(servidor + `/wallpaper/aesthetic?key=${key}&username=${username}`)
                    client.sendMessage(sender, { image: { url: google.url } }, { quoted: info })
                    break

                case 'wallpaper9':
                    //if (!isPremium) return reply('[⚙️️]comando so pra usuários vip')
                    reply("「🐸」ja to enviando no teu pv")
                    google = await fetchJson(servidor + `/nime/anime?key=${key}&username=${username}`)
                    client.sendMessage(sender, { image: { url: google.url } }, { quoted: info })
                    break

                //===========================\\


                case 'emoji2':
                case 'emoji-mix':
                case 'emojimix': {
                    if (!q) return reply(`Exemplo : ${prefix + command} 😅+🤔`)
                    reply('SER NÃO FOR TENTA COM OUTRO... ?')
                    let [emoji1, emoji2] = q.split`+`
                    var em = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                    for (let res of em.results) {
                        templateMassage = {
                            image: {
                                url: `${res.url}`,
                                quoted: info
                            }
                        }
                        client.sendMessage(from, templateMassage, { quoted: live })
                    }
                }
                    break


                case "playstore": {
                    const apiUrl = "gg"
                    fetch(apiUrl)
                        .then(response => response.json())
                        .then(data => {

                        })
                } break

                case "gerarnick":
                case 'Fazernick':
                case 'fazernick': {
                    async function styletext(teks) {
                        return new Promise((resolve, reject) => {
                            axios.get('http://qaz.wtf/u/convert.cgi?text=' + teks)
                                .then(({ data }) => {
                                    let $ = cheerio.load(data)
                                    let hasil = []
                                    $('table > tbody > tr').each(function (a, b) {
                                        hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
                                    })
                                    resolve(hasil)
                                })
                        })
                    }
                    if (!q) return reply("kd o texto?")
                    let anu = await styletext(q)
                    let teks = `𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐍𝐈𝐂𝐊𝐒: ${q}\n\n`
                    for (let i of anu) {
                        teks += `➥ ${i.result}\n\n`
                    }
                    reply(teks)
                } break


                //_-2 ÁREA DE COMANDOS SÓ PRA ADMINISTRADORES

                case 'addautorm':
                case 'addautoban':
                case 'listanegra':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono ou Adm')
                    if (!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra..")
                    if (dataGp[0].listanegra.includes(mrc_ou_numero)) return reply('*Esse Número ja esta incluso*')
                    dataGp[0].listanegra.push(mrc_ou_numero)
                    setGp(dataGp)
                    reply(`*Número adicionado a lista de autoban*`)
                    break

                case 'delremover':
                case 'delautorm':
                case 'delautoban':
                case 'tirardalista':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins && !SoDono) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..")
                    if (!dataGp[0].listanegra.includes(mrc_ou_numero)) return reply('*Esse Número não esta incluso*')
                    var i = dataGp[0].listanegra.indexOf(mrc_ou_numero)
                    dataGp[0].listanegra.splice(i, 1)
                    setGp(dataGp)
                    reply(`*Número foi removido da lista de autoban*`)
                    break

                case 'listban':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (dataGp[0].listanegra.length < 1) return reply('*Nenhum Número não foi adicionado*')
                    teks = '*Números que vou moer na porrada se voltar 😡:*\n'
                    for (i = 0; i < dataGp[0].listanegra.length; ++i) {
                        teks += `➤ *${dataGp[0].listanegra[i].split('@')[0]}*\n`
                    }
                    teks += '*Esses ai vou descer meu martelo do ban 🥵*'
                    reply(teks)
                    break

                case 'band':
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    try {
                        if (!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
                        if (IS_DELETE) {
                            setTimeout(() => {
                                conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } })
                            }, 500)
                        }
                        if (!JSON.stringify().includes(menc_os2)) return reply("Este usuário já foi removido do grupo.")
                        if (botNumber.includes(menc_os2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
                        if (numerodono.includes(menc_os2)) return reply('Não posso remover meu dono 🤧')
                        conn.sendMessage(from, { text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) -`, mentions: [menc_os2] })
                        conn.groupParticipantsUpdate(from, [menc_os2], "remove")
                    } catch (e) {
                        console.log(e)
                    }
                    break

                case 'ban': case 'banir': case 'kick': case 'avadakedavra':
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    try {
                        if (!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
                        if (!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário já foi removido do grupo ou saiu.")
                        if (botNumber.includes(menc_os2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
                        if (JSON.stringify(numerodono).indexOf(menc_os2) >= 0) return reply('Não posso remover meu dono 🤧')
                        conn.sendMessage(from, { text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) -`, mentions: [menc_os2] })
                        conn.groupParticipantsUpdate(from, [menc_os2], "remove")
                    } catch (e) {
                        console.log(e)
                    }
                    break

                case 'promover':
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
                    if (!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível promover..")
                    conn.sendMessage(from, { text: `@${menc_os2.split("@")[0]} Foi promovido(a) para adm com sucesso.`, mentions: [menc_os2] })
                    conn.groupParticipantsUpdate(from, [menc_os2], "promote")
                    break

                case 'rebaixar':
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
                    if (!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível rebaixar..")
                    conn.sendMessage(from, { text: `@${menc_os2.split("@")[0]} Foi Rebaixado para [ MEMBRO COMUM ] com sucesso.`, mentions: [menc_os2] })
                    conn.groupParticipantsUpdate(from, [menc_os2], "demote")
                    break

                case 'sorteionumero':
                case 'sorteionumeros':
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    try {
                        if (!isGroup) return reply(Res_SoGrupo)
                        if (!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteionumero de 100 R$`)
                        var numerossrt = sortear[Math.floor(Math.random() * sortear.length)]
                        d = []
                        teks = `🎉Parabéns ao número do sortudo, por ganhar o sorteio ${q}:\n\n`
                        for (i = 0; i < 1; i++) {
                            teks += `🔥፝⃟  ➣ ${numerossrt}\n`
                            d.push(numerossrt)
                        }
                        mentions(teks, d, true)
                    } catch (e) {
                        console.log(e)
                        reply('Deu erro, tente novamente :/')
                    }
                    break

                case 'sorteio':
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    try {
                        if (!isGroup) return reply(Res_SoGrupo)
                        if (!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteio de 100 R$`)
                        d = []
                        teks = `🎉Parabéns, por ganhar o sorteio ${q}:\n\n`
                        for (i = 0; i < 1; i++) {
                            r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
                            teks += `🔥፝⃟  ➣ @${groupMembers[r].id.split('@')[0]}\n`
                            d.push(groupMembers[r].id)
                        }
                        mentions(teks, d, true)
                    } catch (e) {
                        console.log(e)
                        reply('Deu erro, tente novamente :/')
                    }
                    break


                case 'rankinativo':
                case 'rankinativos':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    await LIMPARDOCNT_QUEMJASAIU()
                    bule = [];
                    bule2 = []
                    mentioned_jid = []
                    for (cag of countMessage[ind].numbers) {
                        bule2.push(cag.id)
                        if (cag.messages <= 1) { bule.push(cag) }
                    }
                    bule.sort((a, b) => ((a.messages + a.cmd_messages) < (b.cmd_messages + b.messages)) ? 0 : -1)
                    boardi = 'Rank dos mais Ghosts do Grupo:\n\n'
                    if (bule.length == 0) boardi += 'Sem Ghosts'
                    for (i = 0; i < (bule.length < 5 ? bule.length : 5); i++) {
                        if (i != null) boardi += `${i + 1}º : @${bule[i].id.split('@')[0]}\nMensagens: ${bule[i].messages}\nComandos dados: ${bule[i].cmd_messages}\nAparelho: ${bule[i].aparelho}\n\n`
                        mentioned_jid.push(bule[i].id)
                    }
                    mentions(boardi, mentioned_jid, true)
                    break

                case 'advertir':
                case 'adverter':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (menc_os2 == botNumber) return reply("Não pode advertir o próprio bot...");
                    if (menc_os2 == nmrdn) return reply("Não pode advertir o próprio dono do bot");
                    if (groupAdmins.includes(menc_os2)) return reply("Não pode advertir ADMS..");
                    if (!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Não tem como advertir um usuário que não se encontra mais no grupo..")
                    ADVT.push(menc_os2); setGp(dataGp)
                    setTimeout(async () => {
                        var dfqn = ADVT.filter(x => x == menc_os2).length
                        var dfntxt = `Opa: @${menc_os2.split("@")[0]} você foi advertido ${dfqn}/3, tome cuidado, com 3 advertências, você será removido...`
                        if (!dfntxt.includes("3/3")) {
                            if (!JSON.stringify(ADVT).includes(sender)) {
                                await sleep(1500); mentions(dfntxt, [menc_os2])
                            } else if (dfqn == 2) {
                                await sleep(1500); mentions(dfntxt, [menc_os2])
                            }
                        } else {
                            conn.sendMessage(from, { text: `Adeus usuário @${menc_os2.split("@")[0]}, você completou 3 advertências 😪, fale com quem a baniu para ter noção de o que ocorreu..`, mentions: [menc_os2] })
                            await sleep(1500)
                            conn.groupParticipantsUpdate(from, [menc_os2], "remove")
                            var i = ADVT.indexOf(menc_os2); ADVT.splice(i, 3); setGp(dataGp)
                        }
                    }, 3000)
                    break

                case 'grupo':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (args[0] === 'a') {
                        reply(`*GRUPO ABERTO COM SUCESSO*`)
                        conn.groupSettingUpdate(from, 'not_announcement')
                    } else if (args[0] === 'f') {
                        reply(`*GRUPO FECHADO COM SUCESSO*`)
                        conn.groupSettingUpdate(from, 'announcement')
                    }
                    break

                case 'grupoinfo':
                case 'infogrupo':
                case 'infogp':
                case 'gpinfo':
                case 'regras':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    try {
                        var ppUrl = await conn.profilePictureUrl(from, 'image')
                    } catch {
                        var ppUrl = `https://telegra.ph/file/6ca032835ed7a16748b6f.jpg`
                    }
                    conn.sendMessage(from, { image: { url: ppUrl }, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${groupDesc}`, thumbnail: null }, { quoted: info })
                    break

                case 'totag':
                case 'cita':
                case 'hidetag':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    var DFC = "";
                    var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
                    var pink = isQuotedImage ? rsm?.imageMessage : info.message?.imageMessage
                    var blue = isQuotedVideo ? rsm?.videoMessage : info.message?.videoMessage
                    var purple = isQuotedDocument ? rsm?.documentMessage : info.message?.documentMessage
                    var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage : info.message?.documentWithCaptionMessage?.message?.documentMessage
                    var aud_d = isQuotedAudio ? rsm.audioMessage : ""
                    var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
                    var red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue && !purple && !yellow ? rsm.conversation : info.message?.conversation
                    var green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text
                    var MRC_TD = groupMembers.map(i => i.id)
                    if (pink && !aud_d && !purple) {
                        var DFC = pink
                        pink.caption = q.length > 1 ? "Marcação Do Adm: " + q : pink.caption.replace(new RegExp(prefix + command, "gi"), ``)
                        pink.image = { url: pink.url }
                        pink.mentions = MRC_TD
                    } else if (blue && !aud_d && !purple) {
                        var DFC = blue
                        blue.caption = q.length > 1 ? "Marcação Do Adm: " + q.trim() : blue.caption.replace(new RegExp(prefix + command, "gi"), ``).trim()
                        blue.video = { url: blue.url }
                        blue.mentions = MRC_TD
                    } else if (red && !aud_d && !purple) {
                        black = {}
                        black.text = red.replace(new RegExp(prefix + command, "gi"), ``).trim()
                        black.mentions = MRC_TD
                        var DFC = black
                    } else if (!aud_d && !figu_d && green && !purple && !purple) {
                        brown = {}
                        brown.text = green.replace(new RegExp(prefix + command, "gi"), ``).trim()
                        brown.mentions = MRC_TD
                        var DFC = brown
                    } else if (purple) {
                        var DFC = purple
                        purple.document = { url: purple.url }
                        purple.mentions = MRC_TD
                    } else if (yellow && !aud_d) {
                        var DFC = yellow
                        yellow.caption = q.length > 1 ? "Marcação Do Adm: " + q.trim() : yellow.caption.replace(new RegExp(prefix + command, "gi"), ``).trim()
                        yellow.document = { url: yellow.url }
                        yellow.mentions = MRC_TD
                    } else if (figu_d && !aud_d) {
                        var DFC = figu_d
                        figu_d.sticker = { url: figu_d.url }
                        figu_d.mentions = MRC_TD
                    } else if (aud_d) {
                        var DFC = aud_d
                        aud_d.audio = { url: aud_d.url }
                        aud_d.mentions = MRC_TD
                        aud_d.ptt = true
                    }
                    conn.sendMessage(from, DFC).catch(e => {
                        console.log(e)
                    })
                    break

                case 'marcar':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    async function marcac() {
                        bla = []
                        blad = `\n𝑀𝐸𝑀𝐵𝑅𝑂𝑆 𝐶𝑂𝑀𝑈𝑀\n𝐵𝑂𝑇: ${NomeDoBot}\n\n-_- Do Grupo: ${groupName} -_-${!q ? "" : `\n\n~» Mensagem: ${q}`}\n\n`
                        for (let i of somembros) {
                            blad += `✥➤ @${i.split("@")[0]}\n\n`
                            bla.push(i)
                        }
                        blam = JSON.stringify(somembros)
                        if (blam.length == 2) return reply(`Olá Adm - Não contêm Membros comum no Grupo: ${groupName}, apenas - [ ADMINISTRADORES ]`)
                        mentions(blad, bla, true)
                    }
                    marcac().catch(e => {
                        console.log(e)
                    })
                    break

                case 'marcar2':
                    try {
                        if (!isGroup) return reply(Res_SoGrupo)
                        if (!isGroupAdmins) return reply(Res_SoAdm)
                        if (q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
                        members_id = []
                        teks = (args.length > 1) ? body.slice(8).trim() : ''
                        teks += '\n\n'
                        for (let mem of groupMembers) {
                            teks += `╠➥ @${mem.id.split('@')[0]}\n`
                            members_id.push(mem.id)
                        }
                        reply(teks)
                    } catch {
                        reply('ERROR!!')
                    }
                    break

                case 'marcarwa':
                    try {
                        if (!isGroup) return reply(Res_SoGrupo)
                        if (!isGroupAdmins) return reply(Res_SoAdm)
                        if (q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
                        members_id = []
                        teks = (args.length > 1) ? body.slice(10).trim() : ''
                        teks += '\n\n'
                        for (let mem of groupMembers) {
                            teks += `╠➥ https://wa.me/${mem.id.split('@')[0]}\n`
                            members_id.push(mem.id)
                        }
                        conn.sendMessage(from, { text: teks }, { quoted: info })
                    } catch {
                        reply('ERROR!!')
                    }
                    break

                case 'nomegp':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    blat = args.join(" ")
                    conn.groupUpdateSubject(from, `${blat}`)
                    conn.sendMessage(from, { text: 'Sucesso, alterou o nome do grupo' }, { quoted: info })
                    break

                case 'descgp':
                case 'descriçãogp':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_SoAdm)
                    blabla = args.join(" ")
                    conn.groupUpdateDescription(from, `${blabla}`)
                    conn.sendMessage(from, { text: 'Sucesso, alterou a descrição do grupo' }, { quoted: info })
                    break

                case 'setfotogp':
                case 'fotogp':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
                    ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
                    rane = getRandom('.' + await getExtension(ftgp.mimetype))
                    buffimg = await getFileBuffer(ftgp, 'image')
                    fs.writeFileSync(rane, buffimg)
                    medipp = rane
                    conn.updateProfilePicture(from, { url: medipp })
                    reply(`Foto do grupo alterada com sucesso`)
                    break

                case 'linkgp':
                case 'linkgroup':
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    linkgc = await conn.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/' + linkgc)
                    break

                case 'recrutar':
                    if (!isGroupAdmins) return reply("Só ADM")
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    rcrt = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + SNET
                    linkgc = await conn.groupInviteCode(from)
                    conn.sendMessage(rcrt, {
                        image: { url: logoslink.logo }, caption: "Clique no símbolo a cima da imagem para entrar no grupo...", contextInfo: {
                            externalAdReply: {
                                title: "- Clique aqui para participar do grupo",
                                body: "",
                                reviewType: "PHOTO",
                                thumbnailUrl: logoslink.logo,
                                sourceUrl: `https://chat.whatsapp.com/` + linkgc,
                                mediaType: 2
                            }
                        }
                    })
                    reply("Convite de recrutamento do usuário, foi enviado para o privado dele com sucesso...")
                    break

                case 'anotar':
                case 'tirar_nota':
                case 'rmnota':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (command == "anotar") {
                        var [q5, q10] = q.trim().split("|")
                        if (!q5 || !q10 || !q.trim().includes("|")) return reply(`Digite o título da anotação e o texto que deseja anotar..\nExemplo: ${prefix}anotar cachorro|Cachorros são bom pra comer na Venezuela...`)
                        if (JSON.stringify(anotar).includes(from)) {
                            var i2 = anotar.map(i => i.grupo).indexOf(from)
                            if (JSON.stringify(anotar[i2].puxar).includes(q5)) {
                                var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q5)
                                if (anotar[i2].puxar[i3].nota == q5) return reply(`Esta anotação já está inclusa, utilize outro título.. Ou você pode tirar com\n${prefix}tirar_nota ${q5}`)
                            }
                        }
                        if (!JSON.stringify(anotar).includes(from)) {
                            anotar.push({ grupo: from, puxar: [{ nota: q5, anotacao: q10 }] })
                            fs.writeFileSync("./armor/json/anotar.json", JSON.stringify(anotar))
                            reply("Anotação registrada com sucesso...")
                        } else {
                            anotar[i2].puxar.push({ nota: q5, anotacao: q10 })
                            fs.writeFileSync("./armor/json/anotar.json", JSON.stringify(anotar))
                            reply("Anotação registrada com sucesso...")
                        }
                    } else {
                        if (!q) return reply("Digite qual anotação deseja tirar pelo título..")
                        if (JSON.stringify(anotar).includes(from)) {
                            var i2 = anotar.map(i => i.grupo).indexOf(from)
                            if (JSON.stringify(anotar[i2].puxar).includes(q)) {
                                var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)
                            }
                        }
                        if (0 > anotar[i2].puxar.map(i => i.nota).indexOf(q)) return reply("Esta nota não está inclusa, verifique com atenção...")
                        anotar[i2].puxar.splice(i3, 1)
                        fs.writeFileSync("./armor/json/anotar.json", JSON.stringify(anotar))
                        reply(`Anotação ${q} tirada com sucesso...`)
                    }
                    break

                case 'rm_aviso':
                case 'rm_avisos':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    for (i of black_) { var RDFA = i }
                    if (!JSON.stringify(RDFA.PUXAR).includes(from)) return reply(`Nenhum aviso foi registrado nesse grupo, utilize o comando ${prefix}rg_aviso`)
                    RDFA.PUXAR.splice(RDFA.PUXAR.indexOf(from))
                    fs.writeFileSync("./datab/grupos/AVISOS.json", JSON.stringify(black_, null, 2))
                    reply("Avisos referente a esse grupo, foi tirado de todos os horários registrados..")
                    break

                case 'rg_aviso':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    var [hr, ms] = q.trim().split("|")
                    if (!q.trim().includes(":") && !q.trim().includes("|")) return reply(`Exemplo: ${prefix + command} 12:00|Boa tarde a todos, prestem atenção nas regras do grupo\n\neste exemplo.. Ele vai enviar todos os dias as 12:00 da tarde a mensagem que você registrou, já se você quer trocar o horário.. Só refazer o comando\nSe você quer apagar o aviso do grupo, apenas coloque ${prefix}rm_aviso`)
                    var i5 = black_?.map(i => i?.hora)?.indexOf(hr)
                    if (JSON.stringify(black_[i5]?.PUXAR)?.includes(from)) {
                        black_[i5].PUXAR.splice(black_[i5].PUXAR.map(i => i.idgp).indexOf(from))
                        fs.writeFileSync("./datab/grupos/AVISOS.json", JSON.stringify(black_, null, 2))
                        setTimeout(() => {
                            reply(`O Registro anterior foi apagado e recriou um novo, se deseja continuar\n - Lembre-se que há avisos programados em outros horários, se quiser limpar todos, digite: ${prefix}rm_avisos`)
                        }, 500)
                    } else if (!JSON.stringify(black_).includes(hr)) {
                        black_.push({ hora: hr, PUXAR: [{ idgp: from, msg: ms, avisou: false }] })
                        fs.writeFileSync("./datab/grupos/AVISOS.json", JSON.stringify(black_, null, 2))
                        reply("Aviso Criado com sucesso..")
                    } else if (!JSON.stringify(black_[i5].PUXAR).includes(from)) {
                        black_[i5].PUXAR.push({ idgp: from, msg: ms, avisou: false })
                        fs.writeFileSync("./datab/grupos/AVISOS.json", JSON.stringify(black_, null, 2))
                        reply("Aviso Criado com sucesso..")
                    }
                    break

                case 'rv-forca':
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (dataGp[0].forca_inc == false) return reply(`O jogo não foi iniciado.\nDigite ${prefix}iniciar_forca`)
                    rv_forca()
                    reply("Forca resetada com sucesso...")
                    break

                //_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-/

                case 'infoaluguel':
                    reply(`Comandos:

1: ${prefix}aluguel

2: ${prefix}aluguel_global

3: ${prefix}rg_aluguel

4: ${prefix}rm_aluguel

5: ${prefix}renovar_aluguel

6: ${prefix}listaaluguel

_1: O primeiro comando: ( ${prefix}aluguel ) serve para ativar que aquele grupo/usuario só funcionará quando for renovado o aluguel ou determinado o tempo que vai expirar o uso naquele grupo/usuario | Para desativar, só usar o comando novamente.

_2: O segundo comando: ( ${prefix}aluguel_global ) serve para ativar que todos grupo/usuario só funcionará quando for renovado o aluguel ou determinado o tempo que vai expirar o uso naquele grupo/usuario | Para desativar, só usar o comando novamente.

_3: O terceiro comando: ( ${prefix}rg_aluguel ) serve para registrar quando o aluguel vai expirar, Exemplos:

${prefix}rg_aluguel /30d

${prefix}rg_aluguel /24h

d é dias e h é horas, pode por o tempo que quiser.

_4: O quarto comando: ( ${prefix}rm_aluguel ) serve para tirar o grupo da lista de aluguel, e não funcionarei mais nele.

_5: O quinto comando: ( ${prefix}renovar_aluguel ) serve para você renovar o novo tempo do grupo, para o funcionamento do bot 100%.

_6: O sexto comando: ( ${prefix}listaaluguel ) serve para ver todos os usuarios/grupos que estão cok tempo de vencimento, e etc..

Boa sorte.`)
                    break;

                case 'aluguel':
                    if (!SoDono) return reply(Res_SoDono);
                    if (!isGroup) return reply(Res_SoGrupo)
                    dataGp[0]['rg_aluguel'] = !dataGp[0]['rg_aluguel'];
                    setGp(dataGp)
                    reply(dataGp[0]['rg_aluguel'] ? `Ativado com sucesso, agora use o comando: ${prefix}rg_aluguel\nOu então o comando ${prefix}infoaluguel pra saber como usar o resto.` : "Desativado com sucesso.")
                    break;

                case 'aluguel_global':
                    if (!SoDono) return reply(Res_SoDono);
                    nescessario.rg_aluguelGB = !nescessario.rg_aluguelGB
                    setNes(nescessario)
                    reply(nescessario?.rg_aluguelGB ? `Ativado com sucesso, agora use o comando: ${prefix}rg_aluguel\nOu então o comando ${prefix}infoaluguel pra saber como usar o resto.` : "Desativado com sucesso..")
                    break;

                case 'renovar_aluguel':
                    if (!SoDono) return reply(Res_SoDono);
                    var ID_G = rg_aluguel.findIndex(i => i.id_gp == from)
                    if (rg_aluguel.some(i => i.id_gp != from)) return reply(`Este grupo não está na lista de aluguel, use: ${prefix}listaaluguel pra ver os grupos que estão registrado.`)
                    if (q.trim().length > 1 && (q.trim().includes("d") || q.trim().includes("h")) && q.trim().includes("/")) {
                        var TMP_A = Math.floor(Date.now() / 1000)
                        var TEMPO = (q.trim().includes("h") ? Math.floor(q.trim().split("/")[1].split("h")[0]) * 60 * 60 : Math.floor(q.trim().split("/")[1].split("d")[0]) * 60 * 60 * 24);
                        rg_aluguel[ID_G].vencimento = TMP_A + TEMPO
                        fs.writeFileSync("./armor/json/rg_aluguel.json", JSON.stringify(rg_aluguel, null, 2));
                        reply(`Este grupo foi renovado, e vai vencer em: ${kyun(Math.floor(rg_aluguel[ID_G].vencimento - TMP_A))}, caso queira tirar este grupo da lista de aluguel antes do tempo, use: ${prefix}rm_aluguel ${from}`)
                    } else {
                        reply(`Exemplo: ${prefix + command} /24h ou Exemplo: ${prefix + command} /30d\n\nCom d é dias, e h é horas, então boa sorte..`)
                    }
                    break;

                case 'rg_aluguel':
                case 'rgaluguel':
                    if (!SoDono) return reply(Res_SoDono);
                    if (!nescessario?.rg_aluguelGB && !dataGp[0]["rg_aluguel"]) return reply(`Você não ativou o sistema de aluguel para esse grupo, nem global.. Leia como utilizar em ${prefix}infoaluguel\n\nBoa sorte.`)
                    if (q.trim().length > 1 && (q.trim().includes("d") || q.trim().includes("h")) && q.trim().includes("/")) {
                        var TMP_A = Math.floor(Date.now() / 1000)
                        var TEMPO = (q.trim().includes("h") ? Math.floor(q.trim().split("/")[1].split("h")[0]) * 60 * 60 : Math.floor(q.trim().split("/")[1].split("d")[0]) * 60 * 60 * 24);
                        var ID_G = rg_aluguel.findIndex(i => i.id_gp == from);
                        if (ID_G === -1) {
                            rg_aluguel.push({ id_gp: from, nome_: groupName || pushname, vencimento: TMP_A + TEMPO });
                            fs.writeFileSync("./armor/json/rg_aluguel.json", JSON.stringify(rg_aluguel, null, 2));
                            await new Promise(resolve => setTimeout(resolve, 1000)); // Aguarda 1 segundo
                            ID_G = rg_aluguel.findIndex(i => i.id_gp == from); // Atualiza o valor de ID_G
                            reply(`Este grupo/usuario foi registrado com sucesso, e vai vencer em: ${kyun(Math.floor(rg_aluguel[ID_G].vencimento) - TMP_A)}, caso queira tirar este grupo da lista de aluguel antes do tempo, use: ${prefix}rm_aluguel ${from}\n\nSe deseja ver a lista de Usuarios/Grupos, use: ${prefix}listaaluguel`);
                        } else {
                            reply(`Este grupo já está registrado, e vai vencer em: ${kyun(Math.floor(rg_aluguel[ID_G].vencimento) - TMP_A)}, caso queira tirar este grupo da lista de aluguel antes do tempo, use: ${prefix}rm_aluguel ${from}`);
                        }
                    } else {
                        reply(`Exemplo: ${prefix + command} /24h ou Exemplo: ${prefix + command} /30d\n\nCom d é dias, e h é horas, então boa sorte..`);
                    }
                    break;


                case 'rm_aluguel': case 'rmaluguel':
                    if (!SoDono) return reply(Res_SoDono);
                    if (q.trim().length < 4) return reply(`Use o comando ${prefix + command} ${from}\nAssim removerá este grupo da listaaluguel`)
                    var ID_R = rg_aluguel.findIndex(i => i.id_gp == q.trim())
                    if (!rg_aluguel.map(i => i.id_gp).includes(q.trim())) return reply(`Este grupo não está na lista de aluguel, use: ${prefix}listaaluguel pra ver os grupos que estão registrado.`)
                    rg_aluguel.splice(ID_R, 1)
                    fs.writeFileSync("./armor/json/rg_aluguel.json", JSON.stringify(rg_aluguel, null, 2));
                    reply(`Grupo/Usuario tirado com sucesso da lista de aluguel, não irei mais funcionar aqui.`)
                    break;

                case 'listaaluguel': case 'lista_aluguel':
                    if (!SoDono) return reply(Res_SoDono);
                    if (rg_aluguel?.length === 0) return reply("Não contém nenhum usuario/grupo na lista de aluguel...")
                    var TMP = Math.floor(Date.now() / 1000)
                    ABC = "Lista de Usuarios/Grupos:\n\n"
                    for (var i of rg_aluguel) {
                        ABC += `ID: ${i?.id_gp}\nNome: ${i.nome_}\nVencimento: ${kyun(Math.floor(i.vencimento) - TMP)}\n-----------------------------------------\n`
                    }
                    reply(ABC)
                    break;

                case 'listlinks': case 'links':
                    try {
                        if (!SoDono) return reply(Res_SoDono);
                        async function RM_L(A) {
                            var response = await axios.get(A);
                            const html = response.data;
                            if (html.includes("https://static.whatsapp.net/rsrc.php/v3/yB/r/_0dVljceIA5.png")) {
                                recolherLNK.splice(i, 1)
                                await fs.writeFileSync("./armor/funcoes/recolherLNK.json", JSON.stringify(recolherLNK, null, 2))
                            }
                        }
                        LNK = "_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n\n"
                        for (i = 0; i < recolherLNK.length; i++) {
                            LNK += `Link - ${i + 1} _- ${recolherLNK[i].Link}\n\n`
                            RM_L(recolherLNK[i]?.Link)
                        }
                        reply(LNK)
                    } catch (e) {
                        return reply("Erro")
                    }
                    break;

                case 'recolherlink':
                    if (!SoDono) return reply(Res_SoDono);
                    if (isRecolherLink) {
                        nescessario.isRecolherLink = false
                        isRecolherLink = nescessario.isRecolherLink
                        setNes(nescessario)
                        reply("Sistema desativado.")
                    } else {
                        nescessario.isRecolherLink = true
                        isRecolherLink = nescessario.isRecolherLink
                        setNes(nescessario)
                        reply(`Sistema de recolher links e armazenar em ${prefix}listlinks foi ativado..`)
                    }
                    break;

                case 'iddogrupo': case 'idgrupo':
                    if (!SoDono) return reply(Res_SoDono)
                    reply(from)
                    break

                case 'minerar_gold':
                case 'minerar_golds':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!IS_sistemGold) return reply(`Este comando só pode ser utilizado quando o sistema ${prefix}sistemgold 1 está ativado.`)
                    blit = []
                    for (i of dataGp[0].minerar_gold) { blit.push(i.id) }
                    if (blit.indexOf(sender) < 0) {
                        dataGp[0].minerar_gold.push({ id: sender, ChanceG: null })
                        setGp(dataGp)
                    }
                    await sleep(200)
                    var i4 = dataGp[0].minerar_gold.map(i => i.id).indexOf(sender)
                    if (dataGp[0].minerar_gold[i4].ChanceG == 2) return reply("Você não tem mais chances de minerar Gold, volte amanhã...")
                    dataGp[0].minerar_gold[i4].ChanceG += 1
                    setGp(dataGp)
                    rnd = Math.floor(Math.random() * 2)
                    rndg = Math.floor(Math.random() * 15)
                    if (rnd == 0) {
                        mention(`Parabéns @${sender.split("@")[0]} você recebeu ${rndg} Golds, você só pode minerar 2 vez por dia... ${dataGp[0].minerar_gold[i4].ChanceG == 2 ? "infelizmente você não tem mais chances para minerar hoje, volte amanhã.." : "Ainda resta 1/2 para obter Golds, sua chance é 0/2"}`)
                        var i2 = rggold.map(i => i.grupo).indexOf(from)
                        var i3 = rggold[i2].usus.map(i => i.id).indexOf(sender)
                        rggold[i2].usus[i3].Golds += rndg
                        Goldrgs(rggold)
                    } else if (rnd != 0) {
                        reply(`A, você não teve sorte dessa vez, sinto muito... ${dataGp[0].minerar_gold[i4].ChanceG == 2 ? "infelizmente você não tem mais chances para minerar hoje, volte amanhã.." : "Ainda resta 1/2 para obter Golds, sua chance é 0/2"}`)
                    }
                    break

                case 'addpalavras_forca':
                case 'addpalavras_f':
                    if (!SoDono) return reply(Res_SoDono)
                    var [ttl, tema, dc] = q.toLowerCase().trim().split("|")
                    if (!q.includes("|")) return reply(`Faltanda a primeira |\nExemplo: ${prefix + command} titulo|tema|dica`)
                    if (q.lastIndexOf("|") < 0) return reply(`Faltando a segunda |\nExemplo: ${prefix + command} titulo|tema|dica`)
                    kir = []
                    for (i of palavrasfr) { kir.push(i.plvr) }
                    if (kir.indexOf(ttl.toLowerCase().trim()) >= 0) return reply("Este título já foi adicionado/existente...")
                    palavrasfr.push({ plvr: ttl, tema: tema, dica: dc })
                    fs.writeFileSync("./datab/grupos/palavras_forca.json", JSON.stringify(palavrasfr, null, 2))
                    reply("Palavra adicionada ao jogo da forca com sucesso...")
                    break

                case 'rmpalavra_f':
                case 'rmpalavra_forca':
                    if (!SoDono) return reply(Res_SoDono)
                    var i5 = palavrasfr.map(i => i.plvr).indexOf(q.trim().toLowerCase())
                    palavrasfr.splice(i5, 1)
                    fs.writeFileSync("./datab/grupos/palavras_forca.json", JSON.stringify(palavrasfr, null, 2))
                    reply("Palavra tirada do jogo da forca com sucesso...")
                    break

                case 'mostrar_forca':
                case 'ver_forca':
                case 'iniciar_forca':
                    if (!isGroup) return reply(Res_SoGrupo)
                    try {
                        if (dataGp[0].forca_inc) return reply(`Jogo já está em andamento, caso queira resetar, fale com um adm para executar ${prefix}rv-forca, ou tente acertar o jogo da forca que deve está logo a cima.`)
                        if (!dataGp[0].forca_inc) {
                            rv_forca()
                            var DM_FR = dataGp[0].forca_ofc[0]
                            dataGp[0].forca_inc = true
                            setGp(dataGp)
                            await sleep(300)
                            linha_fr = " "
                            for (i of DM_FR.palavra) { linha_fr += ` ${i}` }
                            rsp_fr = `- Jogo da forca - ${DM_FR.palavra_ofc.length} Letras\n\nTema: ${DM_FR.tema}\n\nDica: ${DM_FR.dica}\n
|________
       _¦_\n\n\n\n\n\n\n
${linha_fr}\n
_____________________
\n_- JOGO INICIADO -_
\nUse ${prefix}r-f letra que talvez exista por sua observação.\n\nOu ${prefix}r-f nome todo\n
_____________________
`
                            reply(rsp_fr)
                        }
                    } catch (e) {
                        console.log(e)
                    }
                    break

                case 'r-forca':
                case 'r-f':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!dataGp[0].forca_inc) return reply(`O jogo não foi iniciado.\nDigite ${prefix}iniciar_forca`)
                    if (!q.toLowerCase().trim()) return reply("Digite a letra que deseja responder..")
                    var q2 = q_2.trim().toLowerCase()
                    if (ANT_LTR_MD_EMJ(q2) || Number(q2)) return reply("Não pode letras modificadas, nem emoji, nem números..")
                    if (q.trim().length == 2) return reply("Digite letra por letra para tentar adivinhar, ou acerte a palavra toda, boa sorte...")
                    DM_FR = dataGp[0].forca_ofc[0]
                    if (DM_FR.escreveu.indexOf(q2) >= 0) return reply("Esta letra já foi utilizada..")
                    var i2 = rggold.map(i => i.grupo).indexOf(from)
                    var i3 = rggold[i2].usus.map(i => i.id).indexOf(sender)
                    var ERRQ = DM_FR.palavra_ofc.includes(q2) ? 0 : 1
                    var ERROS = dataGp[0].forca_ofc[0].erros
                    DM_FR.escreveu.push(q2); setGp(dataGp)
                    PSC = []
                    if (DM_FR.palavra_ofc.indexOf(q2) >= 0) {
                        for (i = 0; i < DM_FR.palavra_ofc.length; i++) {
                            if (DM_FR.palavra_ofc[i] == q2) {
                                PSC.push(i)
                                DM_FR.acertos += 1
                            }
                        }
                        setGp(dataGp)
                        for (i of PSC) {
                            DM_FR.palavra[i] = q2; setGp(dataGp)
                        }
                    }
                    await sleep(300)
                    linha_fr = " "
                    for (i of DM_FR.palavra) { linha_fr += ` ${i}` }
                    letra_ut = " "
                    for (i of DM_FR.escreveu) { letra_ut += `${i}, ` }
                    var RST_T = `- Jogo da forca - ${DM_FR.palavra_ofc.length} Letras\n\nTema: ${DM_FR.tema}\n\nDica: ${DM_FR.dica}\n
__________-_
         _|_\n
        ${ERROS + ERRQ >= 1 ? "🤡" : ""}\n      ${ERROS + ERRQ >= 2 ? "👈" : ""} ${ERROS + ERRQ >= 3 ? "👉" : ""}  \n         ${ERROS + ERRQ >= 4 ? "👖" : ""}\n         ${ERROS + ERRQ >= 5 ? "👞" : ""} ${ERROS + ERRQ >= 6 ? "👞" : ""}
\n${linha_fr}\n
___-________-_____\n
Letras ja utilizadas: ${letra_ut}
___-________-_____
`
                    if (q.length > 2) { reply("Humm, espertinho quer acertar a palavra toda") }
                    await sleep(500)
                    if (DM_FR.palavra_ofc.indexOf(q2) >= 0 || q2.length > 2 && q2 == DM_FR.palavra_ofc) {
                        reply(`${q2.length > 2 ? `Você acertou a palavra toda e ganhou${IS_sistemGold ? " 10 Golds," : " "}bom menino(a), irei resetar o jogo...` : DM_FR.acertos == DM_FR.palavra_ofc.length ? `Parabéns, toda palavra foi concluída : < ${DM_FR.palavra_ofc} >${IS_sistemGold ? ` você recebeu 5 Golds, por ser o último..,` : " "}irei resetar o jogo..` : `Você acertou uma letra e ganhou${IS_sistemGold ? " 2 Golds " : " "}continue assim..`}`)
                        if (IS_sistemGold) {
                            rggold[i2].usus[i3].Golds += q.length > 2 ? 10 : DM_FR.acertos == DM_FR.palavra_ofc.length ? 5 : 2
                            Goldrgs(rggold)
                        }
                        if (q2.length > 2 || DM_FR.acertos == DM_FR.palavra_ofc.length) { return rv_forca() }
                        await sleep(200)
                        reply(RST_T)
                    } else {
                        reply(`${q2.length > 2 ? `Infelizmente você perdeu${IS_sistemGold ? " 3 Golds" : ""}, errou a palavra toda, deveria ter tentado letra por letra né, irei resetar o jogo..` : ERROS + ERRQ == 6 ? `Aa, você completou 6 Erros, e perdeu ${IS_sistemGold ? "2 Golds infelizmente," : ", "}irei resetar o jogo..` : `Você Errou, e perdeu ${IS_sistemGold ? "2 Golds" : ""} 😥..`}`)
                        if (IS_sistemGold) {
                            rggold[i2].usus[i3].Golds += 2
                            Goldrgs(rggold)
                        }
                        dataGp[0].forca_ofc[0].erros += 1
                        setGp(dataGp)
                        if (q2.length > 2 || ERROS + ERRQ == 6) { return rv_forca() }
                        await sleep(200)
                        reply(RST_T)
                    }
                    break

                case 'figurinhas':
                    if (!q) return reply("Insira a qnd de figu que deja que eu envie")
                    if (!Number(args[0]) || Number(q.trim()) > 5) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 5..")
                    async function figuss() {
                        var rnd = Math.floor(Math.random() * 8051)
                        conn.sendMessage(from, { sticker: { url: `https://raw.githubusercontent.com/badDevelopper/Testfigu/main/fig (${rnd}).webp` } })
                    }
                    for (i = 0; i < q; i++) {
                        await sleep(680)
                        figuss()
                    }
                    break

                case 'limpar_mortos-cnt':
                    if (!SoDono) return reply(Res_SoDono)
                    if (!isGroup) return reply(Res_SoDono)
                    var RD_CNT = countMessage[countMessage.map(i => i.groupId).indexOf(from)].numbers
                    CNT1 = []; for (i of groupMembers) { CNT1.push(i.id) }
                    CNT = []; for (i of RD_CNT) {
                        if (!CNT1.includes(i.id)) CNT.push(i)
                    }
                    for (i of CNT) {
                        RD_CNT.splice(RD_CNT.map(i => i.id).indexOf(i.id), 1)
                    }
                    fs.writeFileSync("./armor/countmsg.json", JSON.stringify(countMessage, null, 2))
                    reply("Usuários que já foi removido, ou saiu do grupo, foi tirado do contador de mensagens..")
                    break

                case 'tirar_docnt':
                    if (!SoDono) return
                    if (!isGroup) return reply(Res_SoDono)
                    var i2 = countMessage.map(i => i.groupId).indexOf(from)
                    var i = countMessage[i2].numbers.map(i => i.id).indexOf(q.trim() + SNET)
                    countMessage[i2].numbers.splice(i, 1)
                    fs.writeFileSync("./armor/countmsg.json", JSON.stringify(countMessage))
                    reply("Usuário tirado do contador de mensagens com sucesso...")
                    break

                case 'anotacao':
                case 'anotacoes':
                case 'nota':
                case 'notas':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (command == "anotacao" || command == "nota") {
                        if (!q.trim()) return reply("Digite o título da anotação que deseja puxar..")
                        if (!JSON.stringify(anotar).includes(from)) return reply("Este grupo não tem nenhuma anotação...")
                        var i2 = anotar.map(i => i.grupo).indexOf(from)
                        if (!JSON.stringify(anotar[i2].puxar).includes(q)) return reply("Não contém nenhuma anotação com este título.")
                        var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q.trim())
                        mention(`〈 ${anotar[i2].puxar[i3].anotacao} 〉`)
                    } else {
                        var i2 = anotar.map(i => i.grupo).indexOf(from)
                        if (i2 < 0) return reply("Este grupo não tem nenhuma anotação...")
                        var i2 = anotar.map(i => i.grupo).indexOf(from)
                        var antr = anotar[i2]?.puxar
                        txtin = "──────────────────\n\n"
                        for (i = 0; i < antr?.length; i++) {
                            txtin += `↝ Anotação: ⟮ ${anotar[i2]?.puxar[i]?.nota} ⟯ - 〈 ${anotar[i2]?.puxar[i]?.anotacao} 〉\n\n`
                        }
                        txtin += "──────────────────\n\n"
                        mention(txtin)
                    }
                    break

                case 'download-link':
                    if (q.includes("video") || q.includes("mp4")) {
                        conn.sendMessage(from, { video: { url: q }, mimetype: 'video/mp4' }, { quoted: info }).catch(e => {
                            reply("Erro, visualize se este link é válido...")
                        })
                    } else if (q.includes("webp") || q.includes("jpg")) {
                        conn.sendMessage(from, { image: { url: q } }, { quoted: info }).catch(e => {
                            reply("Erro, visualize se este link é válido...")
                        })
                    }
                    break

                case 'logos1':
                    if (!q) return reply(`Exemplo: ${prefix + command} boteco`);
                    var LOGOS = ['shadow', 'metalgold', 'cup', 'txtborboleta', 'cemiterio', 'efeitoneon', 'harryp', 'lobometal', 'neon2', 'madeira', 'lovemsg3', 'coffecup', 'coffecup2', 'florwooden', 'narutologo', 'fire', 'romantic', 'smoke', 'papel', 'lovemsg', 'lovemsg2', 'fiction', '3dstone', 'areia', 'style', 'blood', 'pink', 'cattxt', 'neondevil', 'carbon', 'metalfire', 'thunder', 'vidro', 'jokerlogo', 'transformer', 'demonfire', 'jeans', 'metalblue', 'natal', 'ossos', 'asfalto', 'break', 'glitch2', 'colaq', 'neon3', 'nuvem', 'horror', 'matrix', 'berry', 'luxury', 'lava', 'thunderv2', 'neongreen', 'neve', 'neon', 'neon1', 'neon3d', 'gelo', 'neon3', '3dgold', 'lapis', 'toxic', 'demongreen', 'rainbow', 'halloween', 'angelwing', 'hackneon', 'fpsmascote', 'equipemascote', 'txtquadrinhos', 'ffavatar', 'mascotegame', 'angelglx', 'gizquadro', 'wingeffect', 'blackpink', 'metalgold', 'girlmascote', 'logogame'];
                    var ENV = [];
                    for (var a = 0; a < LOGOS.length; a++) {
                        ENV.push({ title: LOGOS[a], description: `Logo personalizada: ${a + 1}`, rowId: prefix + LOGOS[a] + ` ${q}` })
                    }
                    LGS = "LOGOS DE 1 TEXTO:\n\n"
                    for (i of ENV) {
                        LGS += `${i.description}\n\nLogo: ${i.title}\n\nExemplo: ${i.rowId}\n\n_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n\n`
                    }
                    reply(LGS)
                    break


                case 'menu':
                case 'helpp':
                case 'menup':
                case 'comandosp':
                    if (isAudioMenu) {
                        audiomenu = await fs.readFileSync("./datab/audios/menucmd.mp3")
                        conn.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg', ptt: true }, { quoted: info })
                    }
                    conn.sendMessage(from, { image: { url: logoslink.logo }, caption: menu(prefix, NomeDoBot, sender), mentions: [sender] }, { quoted: info })
                    break

                case 'ativarcmds':
                case 'ativacoes':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    var statuszada =
                        `
Anti Link Hard: ${isAntiLinkHard ? '✓' : '✕'} 
Comando: ${prefix}antilink 1 / 0

Anti Notas: ${isAntiNotas ? '✓' : '✕'} 
Comando: ${prefix}antinotas 1 / 0

Limite Caracteres: ${isAntiFlood ? '✓' : '✕'} 
Comando: ${prefix}limitecaracteres 1 / 0

Anti Fake: ${isAntifake ? '✓' : '✕'} 
Comando: ${prefix}antifake 1 / 0

Anti Catalogo: ${isAnticatalogo ? '✓' : '✕'} 
Comando: ${prefix}anticatalogo 1 / 0

Anti Localização: ${Antiloc ? '✓' : '✕'} 
Comando: ${prefix}antiloc 1 / 0

X9 De Cargo de ADM: ${isx9 ? '✓' : '✕'}  
Comando: ${prefix}x9 1 / 0

Revelar visualização única: ${isX9VisuUnica ? '✓' : '✕'} 
Comando: ${prefix}x9visuunica 1 / 0

Modo Brincadeira: ${isModobn ? '✓' : '✕'} 
Comando: ${prefix}modobrincadeira 1 / 0

Anti Link Grupo: ${isAntilinkgp ? '✓' : '✕'} 
Comando: ${prefix}antilinkgp 1 / 0

Bem Vindo 1: ${isWelkom ? '✓' : '✕'} 
Comando: ${prefix}bemvindo 1 / 0

Bem Vindo 2: ${isWelkom2 ? '✓' : '✕'} 
Comando: ${prefix}bemvindo2 1 / 0

Level ${isLevelingOn ? '✓' : '✕'} 
Comando: ${prefix}leveling 1 / 0

Anti Vídeo: ${isAntiVid ? '✓' : '✕'} 
Comando: ${prefix}antivideo 1 / 0

Anti Imagem: ${isAntiImg ? '✓' : '✕'} 
Comando: ${prefix}antiimg 1 / 0

Anti Áudio: ${isAntiAudio ? '✓' : '✕'} 
Comando: ${prefix}antiaudio 1 / 0

Anti Documento: ${Antidoc ? '✓' : '✕'} 
Comando: ${prefix}antidoc 1 / 0

Anti Contato ${isAntiCtt ? '✓' : '✕'}
Comando: ${prefix}antictt 1 / 0

Anti Sticker: ${isAntiSticker ? '✓' : '✕'} 
Comando: ${prefix}antisticker 1 / 0

Auto Sticker: ${isAutofigu ? '✓' : '✕'} 
Comando: ${prefix}autofigu 1 / 0

Auto Resposta: ${isAutorepo ? '✓' : '✕'} 
Comando: ${prefix}autorepo 1 / 0

Anti Palavrão: ${isPalavrao ? '✓' : '✕'} 
Comando: ${prefix}antipalavrao 1 / 0

Nsfw: ${isNsfw ? '✓' : '✕'} 
Comando: ${prefix}nsfw 1 / 0

Recolher Link: ${isRecolherLink ? '✓' : '✕'} 
Comando: ${prefix}recolherlink

`
                    conn.sendMessage(from, { image: { url: logoslink.logo }, caption: statuszada }, { quoted: info })
                    break

                case 'ativarfuncoesdono':
                case 'ativacoes_dono':
                    if (!SoDono) return reply(Res_SoDono)
                    reply(`

- Comando de Ativar / Desativar o bloqueador de quando ligarem pro bot, so
digitar o comando ligar, e denovo pra desligar: 
${prefix}antiligar 

- Comando para ativar ou desativar o visualizador de mensagem, visualizar
mensagem de tudo, so digitar o comando pra ligar, e o comando novamente pra
desligar: 
${prefix}visualizarmsg

- Comando de desativar o que mostra comandos dados no console, so digitar o
comando 1 vez ora ativar, e digitar o comando novamente pra desativar:
${prefix}console

- Comando para ativar o bloqueador de quando algum usuário mande mensagem
privado do bot, seja bloqueado, o comando usado 1 vez, ele ativa, usado
novamente ele desativar:
${prefix}antipv

- Comando de falar que não pode mandar mensagem privado, para alterar a
mensagem, so usar o comando ${prefix}msgantipv e coloque o que quer, para ativar
o comando é digitar ele uma vez, e digitar novamente para desativar: 
${prefix}antipv2

- Comando de ativar e desativar o audio do menu:
${prefix}audio-menu

- Comando de ativar e desativar o verificado de marcação: 
${prefix}verificado-global

- Comando de desativar o bot completamente para ninguém usar:
${prefix}botoff

- Comando de funcionar só comandos pra administrador:
${prefix}So_Adm

- Comando para recolher link de grupos que o bot estiver:
${prefix}recolherlink

`)
                    break

                case 'verificado-global':
                    if (!SoDono) return reply(Res_SoDono)
                    if (!isVerificado) {
                        nescessario.verificado = true
                        setNes(nescessario)
                        reply(`- O Verificado foi Ativado de todos os comandos que tem, para tirar novamente só digitar o comando novamente..`)
                    } else if (isVerificado) {
                        nescessario.verificado = false
                        setNes(nescessario)
                        reply(`- O Verificado de todos os menu / comando, foi Desativado, para ativar novamente só digitar o comando novamente..`)
                    }
                    break

                case 'audio-menu':
                    if (!SoDono) return reply(Res_SoDono)
                    if (!isAudioMenu) {
                        nescessario.menu_audio = true
                        setNes(nescessario)
                        reply(`- O Áudio foi ativado para o menu _- COM SUCESSO - _\n\nSe quiser Desativar - Só digitar o comando novamente`)
                    } else if (isAudioMenu) {
                        nescessario.menu_audio = false
                        setNes(nescessario)
                        reply(`- O Áudio foi Desativado do menu _- COM SUCESSO - _\n\nSe quiser Ativar - Só digitar o comando novamente`)
                    }
                    break;

                case 'console':
                    if (!SoDono) return reply(Res_SoDono)
                    if (!isConsole) {
                        nescessario.consoleoff = true
                        setNes(nescessario)
                        reply(`- O comando de tirar o console foi ativado _- COM SUCESSO - _ Agora não verá mais os comandos nem mensagem dadas no console, mas funcionará perfeitamente, ok?, é bom para evitar banimento de spam no heroku.\n\nSe quiser Desativar - Só digitar o comando novamente`)
                    } else if (isConsole) {
                        nescessario.consoleoff = false
                        setNes(nescessario)
                        reply(`- O comando de tirar o console foi Desativado  _- COM SUCESSO - _ Agora verá os comandos e mensagens dadas no console, mas se for utilizar no heroku, recomendo ativar. é bom para evitar banimento de spam no heroku.\n\nSe quiser Ativar - Só digitar o comando novamente`)
                    }
                    break;

                case 'logos':
                case 'menulogo':
                case 'menulogos':
                    conn.sendMessage(from, { image: { url: logoslink.logo }, caption: menulogos(prefix, numerodn, NomeDoBot, sender), mentions: [sender] }, { quoted: info })
                    break

                case 'menuadm':
                case 'menuadms':
                case 'adm':
                    conn.sendMessage(from, { image: { url: logoslink.logo }, caption: adms(prefix, numerodn, NomeDoBot, sender), mentions: [sender] }, { quoted: info })
                    break;

                case 'menudono':
                case 'donomenu':
                    conn.sendMessage(from, { image: { url: logoslink.logo }, caption: menudono(prefix, numerodn, NomeDoBot, sender), mentions: [sender] }, { quoted: info })
                    break;

                case 'efeitosimg':
                case 'efeitos':
                case 'efeitoimg':
                case 'efeitosmarcar':
                    conn.sendMessage(from, { image: { url: logoslink.logo }, caption: efeitos(prefix, numerodn, NomeDoBot, sender), mentions: [sender] }, { quoted: info })
                    break;

                case 'alteradores':
                    conn.sendMessage(from, { image: { url: logoslink.logo }, caption: alteradores(prefix, numerodn, NomeDoBot, sender), mentions: [sender] }, { quoted: selo })
                    break;

                case 'brincadeiras':
                case 'brincadeira':
                    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
                    conn.sendMessage(from, { image: { url: logoslink.logo }, caption: brincadeiras(prefix, numerodn, NomeDoBot, sender), mentions: [sender] }, { quoted: selo })
                    break;

                case 'menupremium':
                case 'menuprem':
                    conn.sendMessage(from, { text: menuprem(prefix, numerodn, NomeDoBot, sender), mentions: [sender] }, { quoted: selo })
                    break;

                case 'configurar-bot':
                    conn.sendMessage(from, { text: configbot(prefix) }, { quoted: selo })
                    break;

                case 'comandos-termux':
                    conn.sendMessage(from, { text: cmd_termux(prefix) }, { quoted: selo })
                    break;

                case 'perfil':
                    try {
                        ppimg = await conn.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
                    } catch {
                        ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
                    }
                    try {
                        var conselho = palavrasc[Math.floor(Math.random() * palavrasc.length)]
                        const nivelgado = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                        const nivelgado2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                        const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
                        const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))]
                        const puta = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                        const puta2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                        const putar = puta[Math.floor(Math.random() * (puta.length))]
                        const putar2 = puta2[Math.floor(Math.random() * (puta2.length))]
                        const gostosura = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                        const gostosura2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                        const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
                        const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))]
                        gadop = `${Math.floor(Math.random() * 100)}`
                        const programa = Math.ceil(Math.random() * 10000)
                        const dptr = `     「 🔥 ~_*PERFIL*_~ 🌈 」
🗒 *Nome* : *${pushname}*
🪀 *Número* : @${sender.split("@")[0]}
🐂 *Nível gado* : *${nivelgador}${nivelgado2r}%*
📱 *Seu Célular* : ${info.key.id.length > 21 ? 'Android 🤣' : info.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅'}
😈 *Nível puta* : *${putar}${putar2}%*
😋 *Nível de gostosura* : *${gostosurar}${gostosurar2}%*
🍼 *Valor do programa* : *R$${programa}*

➻ *~_CONSELHO_~* :
${conselho}`
                        conn.sendMessage(from, { image: { url: ppimg }, caption: dptr, mentions: [sender] }, { quoted: selo })
                    } catch (e) {
                        console.log(e)
                    }
                    break

                case 'conselhobiblico':
                case 'conselhosbiblico':
                case 'conselhosb':
                case 'conselhob':
                    var conselhosb = conselhob[Math.floor(Math.random() * conselhob.length)]
                    jr = `${tempo} ${pushname} 

Conselhos Bíblico para você: 

- ${conselhosb} 

> Bot: ${NomeDoBot}
> Grupo: ${groupName}`
                    conn.sendMessage(from, { text: jr }, { quoted: info, contextInfo: { "mentionedJid": jr } })
                    break

                //========(FUNÇÕES-PREMIUM-AQUI)=======\\


                case 'ler':
                case 'ocr':
                case 'lerfoto':
                    if ((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {
                        encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
                        rane = getRandom('.' + await getExtension(encmedia.mimetype))
                        buffimg = await getFileBuffer(encmedia, 'image')
                        fs.writeFileSync(rane, buffimg)
                        media = rane
                        reply(Res_Aguarde)
                        await recognize(media, { lang: 'eng+ind', oem: 1, psm: 3 })
                            .then(teks => {
                                reply(teks.trim())
                                DLT_FL(media)
                            })
                            .catch(err => {
                                reply(err.message)
                                DLT_FL(media)
                            })
                    } else {
                        reply('Somente fotos!')
                    }
                    break

                case 'premiumlist':
                    tkks = '╭────*「 *PREMIUM USER👑* 」\n'
                    for (let V of premium) {
                        tkks += `│+  @${V.split('@')[0]}\n`
                    }
                    tkks += `│+ Total : ${premium.length}\n╰──────*「 *${NomeDoBot}* 」*────`
                    mention(tkks.trim())
                    break

                case 'getquoted':
                case 'getinfo':
                case 'get':
                    reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
                    break

                case 'get-txt':
                    reply(JSON.stringify(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation, null, 2))
                    break

                case 'gerarcpf':
                    cp1 = `${Math.floor(Math.random() * 300) + 600}`
                    cp2 = `${Math.floor(Math.random() * 300) + 600}`
                    cp3 = `${Math.floor(Math.random() * 300) + 600}`
                    cp4 = `${Math.floor(Math.random() * 30) + 60}`
                    cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
                    conn.sendMessage(from, { text: `CPF gerado com sucesso : ${cpf}` }, { quoted: info })
                    break



                case 'ddd':
                    if (args.length < 1) return reply(`Use ${prefix + command} 81`)
                    ddd = body.slice(5)
                    ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
                    dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
                    for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
                    conn.sendMessage(from, { text: dddlist }, { quoted: info })
                    break

                case 'encurtalink':
                    if (args.length < 1) return reply(`Exemplo:\n${prefix}encurtalink https://youtube.com/@clovermyt`)
                    try {
                        link = args[0]
                        anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
                        reply(`${anu.data}`)
                    } catch (e) {
                        emror = String(e)
                        reply(`${e}`)
                    }
                    break

                //===========(ADMS-FUNÇÕES-AKI)=========\\

                case 'calculadora':
                case 'calcular':
                case 'calc':
                    rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
                    return reply(JSON.stringify(eval(rsp, null, '\t')))
                    break

                case 'listatm':
                    if (!SoDono) return reply(Res_SoDono)
                    if (rgp.length == 0) return reply(`Não contém nenhum registro de transmissão, utilize ${prefix}rgtm no grupo que deseja que ele receba as transmissões do bot..`)
                    bl = "_-_-_-_-_-_-_-_-_-_-_-_-\n\n";
                    for (i = 0; i < rgp.length; i++) {
                        bl += `${i + 1} - ID: ${rgp[i].id}\n\n- NOME DO USUÁRIO OU GRUPO: ${rgp[i].infonome}\n\n`
                    }
                    reply(bl)
                    break

                case 'rgtm':
                    if (!SoDono) return reply(Res_SoDono)
                    if (JSON.stringify(rgp).includes(from)) return reply("Este grupo ja está registrado na lista de transmissão")
                    rgp.push({ id: from, infonome: `${isGroup ? groupName : pushname}` })
                    fs.writeFileSync("./armor/json/TMGP.json", JSON.stringify(rgp))
                    reply("Registrado com sucesso, quando for realizada as transmissões, esse grupo/usuário estará na lista.")
                    break

                case 'tirardatm':
                    if (!SoDono) return reply(Res_SoDono)
                    if (!JSON.stringify(rgp).includes(from)) return reply("Este grupo não está registrado para ser tirado da lista de transmissão")
                    if (q.trim().length > 4) {
                        var ustm = rgp.map(i => i.id).indexOf(q.trim())
                    } else {
                        var ustm = rgp.map(i => i.id).indexOf(from)
                    }
                    rgp.splice(ustm, 1)
                    fs.writeFileSync("./armor/json/TMGP.json", JSON.stringify(rgp))
                    reply("Grupo/Usuário tirado da lista de transmissão com sucesso")
                    break

                case 'fazertm':
                    if (!SoDono) return reply(Res_SoDono)
                    if (rgp.lengh == 0) return reply("Não contém nenhum grupo registrado para realizar transmissão")
                    await sleep(1000);
                    var DFC = "";
                    var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
                    var pink = isQuotedImage ? rsm?.imageMessage : info.message?.imageMessage
                    var blue = isQuotedVideo ? rsm?.videoMessage : info.message?.videoMessage
                    var red = isQuotedMsg ? rsm?.textMessage : info.message?.textMessage
                    var purple = isQuotedDocument ? rsm?.documentMessage : info.message?.documentMessage
                    var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage : info.message?.documentWithCaptionMessage?.message?.documentMessage
                    var aud_d = isQuotedAudio ? rsm.audioMessage : ""
                    var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
                    var red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue && !purple && !yellow ? "Transmissão Do Dono: " + rsm.conversation : info.message?.conversation
                    var green = isQuotedMsg2 && !aud_d && !figu_d && !red && !pink && !blue && !purple && !yellow ? "Transmissão Do Dono: " + rsm.extendedTextMessage?.text : info?.message?.extendedTextMessage?.text
                    if (pink) {
                        var DFC = pink
                        pink.caption = q.length > 1 ? "Transmissão Do Dono: " + q : pink.caption.replace(new RegExp(prefix + command, "gi"), `TRANSMISSÃO DO DONO: ${NickDono}\n\n`)
                        pink.image = { url: pink.url }
                    } else if (blue) {
                        var DFC = blue
                        blue.caption = q.length > 1 ? "Transmissão Do Dono: " + q : blue.caption.replace(new RegExp(prefix + command, "gi"), `TRANSMISSÃO DO DONO: ${NickDono}\n\n`)
                        blue.video = { url: blue.url }
                    } else if (red) {
                        black = {}
                        black.text = red.replace(new RegExp(prefix + command, "gi"), `TRANSMISSÃO DO DONO: ${NickDono}\n\n`)
                        var DFC = black
                    } else if (!aud_d && !figu_d && green) {
                        brown = {}
                        brown.text = green.replace(new RegExp(prefix + command, "gi"), `TRANSMISSÃO DO DONO: ${NickDono}\n\n`)
                        var DFC = brown
                    } else if (purple) {
                        var DFC = purple
                        purple.document = { url: purple.url }
                    } else if (yellow) {
                        var DFC = yellow
                        yellow.caption = q.length > 1 ? "Transmissão Do Dono: " + q : yellow.caption.replace(new RegExp(prefix + command, "gi"), `TRANSMISSÃO DO DONO: ${NickDono}\n\n`)
                        yellow.document = { url: yellow.url }
                    } else if (figu_d) {
                        var DFC = figu_d
                        figu_d.sticker = { url: figu_d.url }
                    } else if (aud_d) {
                        var DFC = aud_d
                        aud_d.audio = { url: aud_d.url }
                    }
                    for (i = 0; i < rgp.length; i++) {
                        conn.sendMessage(rgp[i].id, DFC)
                    }
                    break


                case 'reviver':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!SoDono) return reply("Comando Desativado pelo dono...")
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque uma mensagem do alvo!')
                    sleep(5000)
                    response2 = await conn.groupParticipantsUpdate(from, [menc_prt], "add")
                    reply('Usuario Adicionado de volta ao grupo.')
                    break

                case 'sairgp':
                    if (isGroup && !SoDono && !info.key.fromMe) return reply("Este comando só o bot ou o dono pode executar..")
                    try {
                        conn.groupLeave(from)
                    } catch (erro) {
                        reply(String(erro))
                    }
                    break

                case 'seradm':
                    if (!SoDono && !isnit) return reply("Só dono pode executar este comando.")
                    mentions(`@${sender.split("@")[0]} Pronto - Agora você é um administrador..`, [sender], true)
                    conn.groupParticipantsUpdate(from, [sender], "promote")
                    break

                case 'sermembro':
                    if (!SoDono && !isnit) return reply("Só dono pode executar este comando.")
                    mentions(`@${sender.split("@")[0]} Pronto - Agora você é um membro comum novamente..`, [sender], true)
                    conn.groupParticipantsUpdate(from, [sender], "demote")
                    break

                //======≠(INFOS/EXECUÇÃO/DONO)≠=========\\

                case 'apresentar':
                case 'apr':
                    inff = `Bem vindo(a) ao grupo : ${groupName}


👾 •𝑬𝑵𝑻𝑹𝑶𝑼 𝑺𝑬 𝑨𝑷𝑹𝑬𝑺𝑬𝑵𝑻𝑨•
📸 •F𝜣T𝜣
👻 •N𝜣ME
📌 •CID∆DE
🗓️ •ID∆DE
⚠️ •LEI∆ ∆S REGR∆S D𝜣 GRUP𝜣

*APROVEITE O GRUPO!*`
                    conn.sendMessage(from, { text: inff }, { quoted: selo })
                    break

                case 'papof':
                case 'regraspp':
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    txtz = `【᯽𒋨📷:𝑆𝑒 𝑎𝑝𝑟𝑒𝑠𝑒𝑛𝑡𝑒𝑚 𝑙𝑖𝑥𝑜𝑠🌚»°】
𒋨·࣭࣪̇🔥ɴᴏᴍᴇ:
𒋨·࣭࣪̇🔥ɪᴅᴀᴅᴇ:
𒋨·࣭࣪̇🔥ʀᴀʙᴀ:
*Aᴘʀᴇsᴇɴᴛᴇ-sᴇ sᴇ ǫᴜɪsᴇʀ.*
𝙏𝘼𝙂𝙎➭᜔ׂ࠭ ⁸₈⁸|𝟖𝟖𝟖|𝟠𝟠𝟠| ེི⁸⁸⁸
 ──╌╌╌┈⊰★⊱┈╌╌╌┈─
❌ ENTROU NO 
GRUPO INTERAJA, NÃO PRECISAMOS DE ENFEITES,INATIVOS SERAO REMOVIDOS ❌* 

/﹋<,︻╦╤─ ҉ - -----💥 
/﹋ 🅴 🅱🅴🅼 🆅🅸🅽🅳🅾 🆂🅴🆄🆂 🅵🅸🅻🅷🅾🆂 🅳🅰 🅿🆄🆃🅰`
                    conn.sendMessage(from, { text: txtz }, { quoted: selo })
                    break

                case 'digt':
                    bla = `🔥↯𝐉𝐀 𝐄𝐍𝐓𝐑𝐀 𝐃𝐈𝐆𝐈𝐓𝐀𝐍𝐃𝐎 𝚽𝐈 ↯°🌚💕
           ི⋮ ྀ🌴⏝ ི⋮ ྀ🚸 ི⋮ ྀ⏝🌴 ི⋮ ྀ 

🐼🍧↯𝖠𝖰𝖴𝖨 𝖵𝖮𝖢𝖤̂ 𝖯𝖮𝖣𝖤 𝖲𝖤𝖱↯🍧🐻
ㅤㅤㅤㅤ  ◍۫❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ⟅◌ٜ🛸◌⟆࣭࣭ٜ໑⃕ꔷ⃘࣭࣭࣭࣭ٜ❀۫◍ི࣭࣭࣭࣭ ུ
    【✔】ᴘʀᴇᴛᴀ👩🏾‍🦱 【✔】ʙʀᴀɴᴄᴀ👩🏼
    【✔】ᴍᴀɢʀᴀ🍧【✔】ɢᴏʀᴅᴀ🍿
    【✔】ᴘᴏʙʀᴇ🪙 【✔】ʀɪᴄᴀ💳
    【✔】ʙᴀɪᴀɴᴀ💌【✔】ᴍᴀᴄᴏɴʜᴇɪʀᴀ🍁
    【✔】ᴏᴛᴀᴋᴜ🧧【✔】ᴇ-ɢɪʀʟ🦄
    【✔】ʟᴏʟɪ🍭    【✔】ɢᴀᴅᴏ🐃
    【✔】ɢᴀʏ🏳️‍🌈     【✔】ʟᴇsʙɪᴄᴀ✂️
    【✔】ᴠᴀᴅɪᴀ💄  【✔】ᴛʀᴀᴠᴇᴄᴏ🍌
                【✔】ɴɪɴɢᴜᴇᴍ ʟɪɢᴀ📵
. ☪︎ • ☁︎. . •.
【 𝐕𝐄𝐌 𝐆𝐀𝐋𝐄𝐑𝐀, 𝐒𝐄 𝐃𝐈𝐕𝐄𝐑𝐓𝐈𝐑 𝐄 𝐅𝐀𝐙𝐄𝐑 𝐏𝐀𝐑𝐓𝐄 𝐃𝐀 𝐅𝐀𝐌𝐈𝐋𝐈𝐀.】🥂`
                    conn.sendMessage(from, { text: bla }, { quoted: selo })
                    break

                case 'sairdogp':
                    if (!SoDono) return reply(Res_SoDono)
                    if (!q) return reply(`Você deve visualizar o comando ${prefix}listagp e olhar de qual o grupo quer sair, e veja a numeração dele, e só digitar\nExemplo: ${prefix}sairdogp 0\nesse comando é para o bot sair do grupo que deseja..`)
                    var getGroups = await conn.groupFetchAllParticipating()
                    var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                    var ingfoo = groups.map(v => v)
                    try {
                        conn.sendMessage(ingfoo[q].id, { text: "Irei sair do grupo, por ordem do meu dono, adeus..." })
                        setTimeout(() => {
                            conn.groupLeave(ingfoo[q].id)
                        }, 5000)
                    } catch (erro) {
                        reply(String(erro))
                    }
                    reply("Pronto meu dono, sair do grupo que você queria, em caso de dúvidas acione o comando listagp pra verificar..")
                    break

                case 'listagp':
                    if (!SoDono && !isnit && !info.key.fromMe) return reply('```SOMENTE MEU DONO LINDÃO```')
                    var getGroups = await conn.groupFetchAllParticipating()
                    var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                    var ingfoo = groups.map(v => v)
                    ingfoo.sort((a, b) => (a[0] < b.length))
                    teks1 = `*LISTA DE GRUPOS*\n*Total de Grupos* : ${ingfoo.length}\n\n`
                    for (let i = 0; i < ingfoo.length; i++) {
                        var metadt = await conn.groupMetadata(ingfoo[i].id)
                        try {
                            var linkdogp = await conn.groupInviteCode(ingfoo[i].id)
                        } catch {
                            var linkdogp = "Não foi possivel puxar o link"
                        }
                        teks1 += `• *Grupo* : ${i}\n• *Nome do Grupo* : ${ingfoo[i].subject}\n• *Id do Grupo* : ${ingfoo[i].id}\n• Link do grupo: https://chat.whatsapp.com/${linkdogp}\n• *Dono_Ofc*: ${metadt.subjectOwner}\n• *Criado* : ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n• *Total de Membros* : ${ingfoo[i].participants.length}\n\n`
                    }
                    reply(teks1)
                    break

                case 'atividade':
                case 'atividades':
                    try {
                        if (!isGroupAdmins && !issupre && !ischyt) return reply(Res_SoAdm)
                        if (isGroup && JSON.stringify(countMessage).includes(from)) {
                            var i6 = countMessage.map(i => i.groupId).indexOf(from)
                            if (countMessage[i6].numbers.length == 0) return
                            teks = `*Atividade dos membros do grupo:*\n\n`
                            for (i = 0; i < countMessage[i6].numbers.length; i++) {
                                var i8 = countMessage[i6].numbers.map(i => i.id).indexOf(countMessage[i6].numbers[i].id)
                                var uscnt = countMessage[i6].numbers[i]
                                teks += `*• Membro:* @${uscnt.id.split('@')[0]}\n*• Comandos:* ${uscnt.cmd_messages}*\n*• Mensagens:* ${uscnt.messages}*\n*• Aparelho:* ${uscnt.aparelho}*\n\n----------------------------------\n\n`
                            }
                            mention(teks)
                        } else return reply('*Nada foi encontrado*')
                    } catch (e) {
                        console.log(e)
                    }
                    break

                case 'inativos':
                case 'inativo':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (q.match(/[a-z]/i) || !q) return reply(`Exemplo: ${prefix + command} 0\nIsso mostrará quantas pessoas tem 0 mensagens no grupo, e se usar 5, vai mostrar quantos usuários tem 5 mensagens ou menos..`)
                    await LIMPARDOCNT_QUEMJASAIU()
                    var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
                    blue = []; for (i of countMessage[i2].numbers) {
                        if (i.messages <= q.trim())
                            if (i.figus <= q.trim())
                                if (i.cmd_messages <= q.trim())
                                    if (!groupAdmins.includes(i.id))
                                        if (!numerodono.includes(i.id))
                                            if (i.id != botNumber)
                                                if (groupMembers.map(i => i.id).includes(i.id))
                                                    blue.push(i.id)
                    }; for (i of countMessage[i2].numbers) {
                        if (!groupMembers.map(a => a.id == i.id))
                            if (i.id.length > 5)
                                blue.push(i.id)
                    }
                    if (blue.length == 0) return reply(`Não tem pessoas com ${q}  mensagens..`)
                    bli = `Usuários com ${q.trim()} mensagem(ns) pra baixo..\n\n`
                    for (ac = 0; ac < blue.length; ac++) {
                        bli += `${ac + 1} - _ Usuário: @${blue[ac].split("@")[0]}\n\n`
                    }
                    mention(bli)
                    break

                case 'banghost':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!SoDono) return reply(Res_SoDono)
                    if (q.match(/[a-z]/i) || !q || q.length > 3) return reply(`Digite a partir de quantas mensagens pra baixo você deseja remover (que não interaje no grupo).\nExemplo: ${prefix + command} 0`)
                    var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
                    blue = []; for (i of countMessage[i2].numbers) {
                        if (i.messages <= Number(q.trim()))
                            if (i.figus <= Number(q.trim()))
                                if (i.cmd_messages <= Number(q.trim()))
                                    if (!groupAdmins.includes(i.id))
                                        if (!numerodono.includes(i.id))
                                            if (i.id != botNumber)
                                                if (groupMembers.map(i => i.id).includes(i.id))
                                                    blue.push(i.id)
                    }; for (i of countMessage[i2].numbers) {
                        if (!groupMembers.map(i => i.id).includes(i.id))
                            if (i.id.length > 5)
                                blue.push(i.id)
                    }
                    if (blue.length == 0) return reply(`Não tem mais pessoas com ${q.trim()} mensagem(ns) para eu remover..`)
                    for (i = 0; i < blue.length; i++) {
                        await sleep(1000)
                        conn.groupParticipantsUpdate(from, [blue[i]], "remove")
                    }
                    break

                case 'correio':
                    if (!q.trim().includes("/")) return reply(`Exemplo: ${prefix}correio 558198923680/Oi Amor, sdds`)
                    var [tx1, tx2] = q.trim().split("/")
                    bla =
                        `╭┄━┄━┄━┄━┄━╮
┞┧ ⸙. ͎۪۫          💌  ː͡₊ꞋꞌꞋꞌ
┞┧Correio anônimo. 
┞┧Msg: ${tx2}
┞┧
╰┄━┄━┄━┄━┄━╮`
                    conn.sendMessage(`${tx1}@s.whatsapp.net`, { text: bla })
                    reply(`Mensagem enviada com sucesso para o usuário: ${tx1}`)
                    break

                case 'nome-bot':
                    if (!SoDono && !isnit && !info.key.fromMe) return reply(Res_SoDono)
                    NomeDoBot = q.trim()
                    setting.NomeDoBot = q.trim()
                    fs.writeFileSync('./armor/settings.json', JSON.stringify(setting, null, 2))
                    reply(`O nome do seu bot foi alterado com sucesso para : ${q}`)
                    break

                case 'nick-dono':
                    if (!SoDono && !isnit && !info.key.fromMe) return reply(Res_SoDono)
                    setting.NickDono = q.trim()
                    NickDono = setting.NickDono
                    fs.writeFileSync('./armor/settings.json', JSON.stringify(setting, null, 2))
                    reply(`O Nick Do Dono foi configurado para : ${q}`)
                    break

                case 'numero-dono':
                    if (!SoDono && !isnit && !info.key.fromMe) return reply(Res_SoDono)
                    if (q.match(/[a-z]/i)) return reply("É apenas números..")
                    reply(`O número dono foi configurado com sucesso para : ${q}`)
                    setting.numerodono = q.trim().replace(new RegExp("[()+-/ +/]", "gi"), "");
                    numerodono[0] = setting.numerodono
                    numerodn = setting.numerodono
                    numerodono_ofc = setting.numerodono
                    fs.writeFileSync('./armor/settings.json', JSON.stringify(setting, null, 2))
                    break

                case 'prefixo-bot': case 'setprefix':
                    if (args.length < 1) return
                    if (!SoDono && !isnit && !info.key.fromMe) return reply(Res_SoDono)
                    setting.prefix = q
                    fs.writeFileSync('./armor/settings.json', JSON.stringify(setting, null, 2))
                    reply(`O prefixo foi alterado com sucesso para: ${setting.prefix}`)
                    break

                case 'fotomenu':
                case 'fundomenu':
                    if (!SoDono) return reply(Res_SoDono)
                    if (!isQuotedImage) return reply("Marque uma imagem")
                    if ((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {
                        reply(`- Calma ae amigo(a), já estou trocando a foto do menu para você..`)
                        boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
                        owgi = await getFileBuffer(boij, 'image')
                        res = await upload(owgi, "image")
                        logoslink.logo.splice([])
                        fs.writeFileSync('./armor/logos.json', JSON.stringify(logoslink, null, 2))
                        setTimeout(() => {
                            logoslink.logo.push(res)
                            fs.writeFileSync('./armor/logos.json', JSON.stringify(logoslink, null, 2))
                            reply(`A foto do menu foi alterada com sucesso para: ${logoslink.logo}`)
                        }, 1200)
                    } else {
                        reply(`Mande uma imagem com o comando ${prefix + command} para trocar a foto de todos menu..`)
                    }
                    break

                case 'setprefixs':
                    if (args.length < 1) return
                    if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
                    prefix = args[0]
                    setting.prefix = prefix
                    fs.writeFileSync('./armor/settings.json', JSON.stringify(setting, null, 2))
                    reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
                    break

                case 'nomegp':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    conn.groupUpdateSubject(from, `${body.slice(9)}`)
                    conn.sendMessage(from, { text: 'Sucesso, alterou o nome do grupo' }, { quoted: info })
                    break

                case 'fotobot':
                    if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
                    if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
                    buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
                    conn.updateProfilePicture(botNumber, buff)
                    reply('Obrigado pelo novo perfil😗')
                    break

                case 'clonar':
                    if (!SoDono && !isnit && !issupre && !ischyt) return reply('Você quem é o proprietário?')
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (args.length < 1) return reply('Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @')
                    if (!menc_jid2[0] || menc_jid2[1]) return reply("Marque o @ do usuário para roubar a foto do perfil dele, para a do bot..")
                    let { jid, id, notify } = groupMembers.find(x => x.id === menc_jid2[0])
                    try {
                        pp = await conn.profilePictureUrl(id)
                        buffer = await getBuffer(pp)
                        conn.updateProfilePicture(botNumber, buffer)
                        mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [id], true)
                    } catch (e) {
                        reply('Putz, deu erro, a pessoa deve estar sem foto 😔')
                    }
                    break

                case 'envmsg':
                    if (!SoDono && !isnit) return
                    var [tx1, tx2] = q.split("/")
                    conn.sendMessage(tx1, { text: tx2 })
                    break

                case 'bcgp':
                case 'bcgc':
                    if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!q) return reply('Cade o texto?')
                    var nomor = info.participant
                    if (isMedia && !info.message.videoMessage || isQuotedImage) {
                        encmedia = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
                        for (i = 0; i < groupMembers.length; i++) {
                            await sleep(2000)
                            conn.sendMessage(groupMembers[i].id, { image: buff }, { caption: `*「 TRANSMISSÃO 」*\n\nGrupo: ${groupName}\n Número: wa.me/${sender.split('@')[0]}\nMensagem : ${body.slice(6)}` })
                        }
                        reply('Transmissão enviada..')
                    } else {
                        for (i = 0; i < groupMembers.length; i++) {
                            await sleep(2000)
                            sendMess(groupMembers[i].id, `*「 TRANSMISSÃO 」*\n\nGrupo : ${groupName}\n Número : wa.me/${sender.split('@')[0]}\nMensagem : ${body.slice(6)}`)
                        }
                        reply('Grupo de transmissão bem-sucedido')
                    }
                    break

                case 'dono1':
                    if (args.length < 1) return
                    if (!SoDono && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
                    nescessario.dono1 = q.trim().replaceAll("@", "")
                    dono1 = nescessario.dono1
                    setNes(nescessario)
                    reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${q}`)
                    break

                case 'dono2':
                    if (args.length < 1) return
                    if (!SoDono && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
                    nescessario.dono2 = q.trim().replaceAll("@", "")
                    dono2 = nescessario.dono2
                    setNes(nescessario)
                    reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono2}`)
                    break

                case 'dono3':
                    if (args.length < 1) return
                    if (!SoDono && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
                    nescessario.dono3 = q.trim().replaceAll("@", "")
                    dono3 = nescessario.dono3
                    setNes(nescessario)
                    reply(`Agora contem um terceiro dono(a) alterado com sucesso para: ${dono3}`)
                    break

                case 'dono4':
                    if (args.length < 1) return
                    if (!SoDono && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
                    nescessario.dono4 = q.trim().replaceAll("@", "")
                    dono4 = nescessario.dono4
                    setNes(nescessario)
                    reply(`Agora contem um quarto dono(a) alterado com sucesso para: ${dono4}`)
                    break

                case 'dono5':
                    if (args.length < 1) return
                    if (!SoDono && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
                    nescessario.dono5 = q.trim().replaceAll("@", "")
                    dono5 = nescessario.dono5
                    setNes(nescessario)
                    reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono5}`)
                    break

                case 'dono6':
                    if (args.length < 1) return
                    if (!SoDono && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
                    nescessario.dono6 = q.trim().replaceAll("@", "")
                    dono6 = nescessario.dono6
                    setNes(nescessario)
                    reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono6}`)
                    break

                case 'getquoted':
                    reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
                    break

                case 'donos':
                    p = `[ Lista de donos do bot ${NomeDoBot} ] 

Dono Oficial do bot: ${numerodono_ofc}

- [ 1 ] ${dono1}\n- [ 2 ] ${dono2}\n- [ 3 ] ${dono3}\n- [ 4 ] ${dono4}\n- [ 5 ] ${dono5}\n- [ 6 ] ${dono6}`
                    reply(p)
                    break

                case 'admins':
                case 'listadmins':
                case 'listaadmins':
                    if (!isGroup) return reply(Res_SoGrupo)
                    ytb = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
                    no = 0
                    for (let admon of groupAdmins) {
                        no += 1
                        ytb += `[${no.toString()}] @${admon.split('@')[0]}\n`
                    }
                    mentions(ytb, groupAdmins, true)
                    break

                case 'criartabela': case 'criartbl': case 'criartab':
                    if (!isGroupAdmins && !SoDono) return reply("Só adm ou dono pode utilizar este comando.")
                    if (!q.trim()) return reply("Digite o que deseja colocar na tabela do grupo..")
                    msgz = args.join(" ")
                    msgtmpol = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
                    datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
                    fs.writeFileSync(`./armor/json/TABELA/tabela-${from}.json`,
                        JSON.stringify({ Horario: msgtmpol, Data: datinhaofc, Tabela: msgz }, null, 2));
                    reply(`Tabela do grupo foi criada com sucesso..`)
                    break

                case 'tabelagp': case 'tabeladogp': case 'tabelinha':
                    if (!fs.existsSync(`./armor/json/TABELA/tabela-${from}.json`)) {
                        return reply(`Cade a tabela, cria ela com o comando\nExemplo : ${prefix}criartabela lindas do grupo : e etc ..`)
                    }
                    const tabelagpofc = JSON.parse(fs.readFileSync(`./armor/json/TABELA/tabela-${from}.json`));
                    blity = `- ⏰ Horário que criou a Tabela : ${tabelagpofc.Horario}\n\n- 🗓️ Data que criou a Tabela : ${tabelagpofc.Data}\n\n - Tabela : ${tabelagpofc.Tabela}`
                    mention(blity)
                    break

                case 'ativo': case 'on': case 'voltei':
                    if (!isGroupAdmins && !SoDono) return reply("Comando apenas para administradores ou dono..")
                    if (DonoOficial) {
                        if (fs.existsSync("./armor/json/afk-@" + numerodono_ofc + ".json")) {
                            DLT_FL("./armor/json/afk-@" + numerodono_ofc + ".json");
                            reply("Bem vindo de volta, agora você está online 🙂")
                        } else {
                            reply("Você não registrou nenhuma mensagem de ausência...")
                        }
                    } else if (isGroupAdmins) {
                        if (!JSON.stringify(dataGp[0].ausentes).includes(sender)) return reply("Não há nenhum registro de ausência sua..")
                        dataGp[0].ausentes.splice(dataGp[0].ausentes.map(x => x.id).indexOf(sender), 1)
                        setGp(dataGp)
                        reply("Registro de ausência tirada com sucesso...")
                    }
                    break

                case 'ausente': case 'off': case 'afk':
                    if (!isGroupAdmins && !SoDono) return reply("Comando apenas para administradores ou dono..")
                    if (DonoOficial) {
                        msgtmp = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
                        fs.writeFileSync(`./armor/json/afk-@${setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")}.json`,
                            JSON.stringify({
                                Ausente_Desde: msgtmp,
                                Motivo_Da_Ausência: q
                            }, null, 2));
                        reply(`Mensagem de ausência criada com sucesso...`)
                    } else if (isGroupAdmins) {
                        if (!q.trim()) return reply(`Digite a mensagem de ausência, Exemplo: ${prefix + command} Estou tomando banho`)
                        if (!JSON.stringify(dataGp[0].ausentes).includes(sender)) {
                            dataGp[0].ausentes.push({ id: sender, msg: q.trim() })
                            setGp(dataGp)
                            reply("Mensagem de ausência criada com sucesso..\n\nSe deseja Desativar a mensagem de ausência use o comando ativo")
                        } else {
                            dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(sender)].msg = q.trim()
                            setGp(dataGp)
                            reply("Mensagem de ausência alterada com sucesso..\n\nSe deseja Desativar a mensagem de ausência use o comando ativo")
                        }
                    } else {
                        return reply("Comando apenas para administradores e dono do bot..")
                    }
                    break

                case 'serpremium':
                case 'serprem':
                    if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
                    premium.push(nmrdn)
                    fs.writeFileSync('./armor/premium.json', JSON.stringify(premium))
                    mention(`Pronto @${numerodono_ofc} você foi adicionado na lista premium.`)
                    break

                case 'reagir':
                    const reactionMessage = {
                        react: {
                            text: "💖",
                            key: info.key
                        }
                    }
                    sendMsg = conn.sendMessage(from, reactionMessage)
                    break

                case 'iniciar_o_jogo':
                    if (jogo_iniciado) return reply("o jogo já foi iniciado, aguarde terminar..")
                    mentions(`- ${tempo} Atenção a todos do grupo, o Usuário @${sender.split("@")[0]} iniciou o jogo `, sender)
                    break

                case 'addcmdpremium':
                    if (!SoDono) return reply(Res_SoDono);
                    if (nescessario.cmdpremium.includes(q.replace(prefix,
                        "").trim())) return reply("Este comando já se encontra na lista premium.")
                    nescessario.cmdpremium.push(q.replace(prefix, "").trim())
                    cmdpremium = nescessario.cmdpremium
                    setNes(nescessario)
                    reply(`Comando ${q.trim()} adicionado para apenas usuarios premium tirar`);
                    break;

                case 'tirarcmdpremium':
                    if (!SoDono) return reply(Res_SoDono);
                    if (!nescessario.cmdpremium.includes(q.replace(prefix,
                        "").trim())) return reply("Este comando não é premium, não esta na lista para ser tirado.")
                    nescessario.cmdpremium.splice(nescessario.cmdpremium.indexOf(q.replace(prefix,
                        "").trim()), 1)
                    cmdpremium = nescessario.cmdpremium
                    setNes(nescessario)
                    reply(`Comando ${q.trim()} tirado da lista premium.`);
                    break;

                case 'cmdpremium':
                    if (nescessario.cmdpremium.length == 0) return reply("Não contém nenhum comando na lista Premium")
                    ABC = "Comandos Premium:\n\n"
                    for (i of nescessario.cmdpremium) {
                        ABC += `_- ${i}\n\n`
                    }
                    reply(ABC)
                    break;

                case 'addpremium':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
                    if (!marc_tds) return reply("Marque o usuário do grupo ou digite o número do usuário ou marque a mensagem dele..")
                    bla = premium.includes(marc_tds)
                    if (bla) return reply("*Este número já está incluso..*")
                    premium.push(marc_tds)
                    fs.writeFileSync('./armor/premium.json', JSON.stringify(premium))
                    conn.sendMessage(from, { text: `👑@${marc_tds.split("@")[0]} foi adicionado à lista de usuários premium com sucesso👑`, mentions: [marc_tds] }, { quoted: info })
                    break

                case 'delpremium':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
                    if (!marc_tds) return reply("Marque o usuário do grupo ou digite o número do usuário ou marque a mensagem dele..")
                    if (!premium.includes(marc_tds)) return reply("*Este número não está incluso na lista premium..*")
                    pesquisar = marc_tds
                    processo = premium.indexOf(pesquisar)
                    while (processo >= 0) {
                        premium.splice(processo, 1)
                        processo = premium.indexOf(pesquisar)
                    }
                    fs.writeFileSync('./armor/premium.json', JSON.stringify(premium))
                    conn.sendMessage(from, { text: ` @${marc_tds.split("@")[0]} foi tirado da lista premium com sucesso..`, mentions: [marc_tds] }, { quoted: info })
                    break

                case 'limpar':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
                    conn.sendMessage(from, { text: clear }, { quoted: selo, contextInfo: { forwardingScore: 500, isForwarded: true } })
                    break

                case 'd_':
                    if (!isPremium) return reply("Apenas premium..")
                    conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.buttonsResponseMessage.contextInfo.stanzaId, participant: botNumber } })
                    break

                case 'deletar': case 'delete': case 'del': case 'd':
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!menc_prt) return reply("Marque a mensagem do usuário que deseja apagar, do bot ou de alguém..")
                    conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt } })
                    break

                case 'fundobemvindo':
                case 'fundobv':
                    if (!SoDono && !isnit && !info.key.fromMe) return reply(Res_SoDono)
                    if (!isQuotedImage) return reply("Marque uma imagem")
                    reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
                    if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo) && !q.length <= 1) {
                        boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage : info
                        owgi = await getFileBuffer(boij, 'image')
                        res = await upload(owgi, "image")
                        fundo1 = res
                        Links_P.fundo1 = res
                        fs.writeFileSync("./armor/links.json", JSON.stringify(Links_P, null, 2));
                        reply(`A imagem de bem vindo foi alterado com sucesso para: ${fundo1}`)
                    }
                    break

                case 'fundosaiu':
                    if (!SoDono && !isnit && !info.key.fromMe) return reply(Res_SoDono)
                    if (!isQuotedImage) return reply("Marque uma imagem")
                    reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
                    if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo) && !q.length <= 1) {
                        boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage : info
                        owgi = await getFileBuffer(boij, 'image')
                        res = await upload(owgi, "image")
                        fundo2 = res
                        Links_P.fundo2 = res
                        fs.writeFileSync("./armor/links.json", JSON.stringify(Links_P, null, 2));
                        reply(`A imagem de saiu foi alterado com sucesso para: ${fundo2}`)
                    }
                    break

                case 'antiligar':
                case 'antiligacao':
                case 'antiligação':
                    if (!SoDono) return reply(Res_SoDono)
                    if (!isAnticall) {
                        nescessario.anticall = true
                        setNes(nescessario)
                        reply(`Ativando anti ligação para o bot...\ncaso liguem para o bot serão bloqueado..`)
                    } else if (isAnticall) {
                        nescessario.anticall = false
                        setNes(nescessario)
                        reply('Desativando anti ligação para o bot...')
                    }
                    break

                case 'antipv':
                    if (!SoDono) return reply(Res_SoDono)
                    if (!isAntiPv) {
                        nescessario.antipv = true
                        setNes(nescessario)
                        reply(`Ativando anti privado para o bot...\ncaso mandem mensagem para o bot serão bloqueado..`)
                    } else if (isAntiPv) {
                        nescessario.antipv = false
                        setNes(nescessario)
                        reply('Desativando anti privado para o bot...')
                    }
                    break

                case 'antipv2':
                    if (!SoDono) return reply(Res_SoDono)
                    if (!isAntiPv2) {
                        nescessario.antipv2 = true
                        setNes(nescessario)
                        reply("*Sucesso alterado para modo antipv, pv não poderá ser utilizado, mas não bloquearei, só flodarei mensagem a cada mensagem dele..")
                    } else if (isAntiPv2) {
                        nescessario.antipv2 = false
                        setNes(nescessario)
                        reply("*Sucesso modo antipv desligado, pv liberado.")
                    }
                    break

                case 'antipv3':
                    if (!SoDono) return reply(Res_SoDono)
                    if (!isAntiPv3) {
                        nescessario.antipv3 = true
                        setNes(nescessario)
                        reply("*Anti Pv3 Ativado comn sucesso, irei ignorar todas mensagem recebida no privado, exceto: Dono, premium")
                    } else if (isAntiPv3) {
                        nescessario.antipv3 = false
                        setNes(nescessario)
                        reply("*Sucesso modo Anti PV3 desligado, pv liberado.")
                    }
                    break

                case 'msgantipv':
                    if (!SoDono) return reply(Res_SoDono);
                    if (!q.trim()) return reply("KD a mensagem para eu por no antipv2")
                    msgantipv2 = q.trim()
                    nescessario.msgantipv2 = q.trim()
                    setNes(nescessario)
                    reply("Mensagem do antipv2 foi alterada.");
                    break;

                case 'block':
                    if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
                    if (!q.length > 6) return reply("Marque o @ do usuário que deseja bloquear de ele utilizar os comandos, ou o número da fórma que copiar...")
                    var blcp = menc_jid2 || q.replace(new RegExp("[()+-/ @+/]", "gi"), "") + SNET || menc_prt
                    var numblc = ban.indexOf(blcp)
                    if (numblc >= 0) return reply('*Esse Número ja esta incluso*')
                    ban.push(blcp)
                    fs.writeFileSync('./datab/usuarios/banned.json', JSON.stringify(ban))
                    susp = `🚫@${blcp.split('@')[0]} foi banido e não poderá mais usar os comandos do bot🚫`
                    conn.sendMessage(from, { text: susp, mentions: [blcp] })
                    break

                case 'unblock':
                    if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
                    if (!q.length > 6) return reply("Marque o @ do usuário que deseja desbloquear pra ele utilizar os comandos, ou o número da fórma que copiar...")
                    var blcp = menc_jid2 || q.replace(new RegExp("[()+-/ @+/]", "gi"), "") + SNET || menc_prt
                    var numbl = ban.indexOf(blcp)
                    if (numbl < 0) return reply('*Esse número não está incluso*')
                    pesquisar = blcp
                    processo = ban.indexOf(pesquisar)
                    while (processo >= 0) {
                        ban.splice(processo, 1)
                        processo = ban.indexOf(pesquisar)
                    }
                    fs.writeFileSync('./datab/usuarios/banned.json', JSON.stringify(ban))
                    susp = `@${blcp.split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot❎`
                    conn.sendMessage(from, { text: susp, mentions: [blcp] })
                    break

                case 'blocklist':
                    jrc = 'ESTA É A LISTA DE NÚMEROS BLOQUEADOS :\n'
                    for (let benn of ban) {
                        jrc += `~> @${benn.split('@')[0]}\n`
                    }
                    jrc += `Total : ${ban.length}`
                    conn.sendMessage(from, { text: jrc.trim(), mentions: ban })
                    break


                case 'acess':
                    if (!SoDono && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
                    teks = body.slice(7)
                    exec(teks, (err, stdout) => {
                        if (err) return conn.sendMessage(from, { text: `root@ladybot:~ ${err}` }, { quoted: info })
                        if (stdout) {
                            conn.sendMessage(from, { text: stdout })
                        }
                    })
                    break

                case 'execut':
                    if (!SoDono && !isnit && !issupre && !ischyt) return
                    try {
                        return eval(`(async() => { ${args.join(' ')}})()`)
                    } catch (e) {
                        conn.sendMessage(from, { text: `${e}` })
                    }
                    break

                case 'exec':
                    if (!SoDono && !isnit && !issupre && !ischyt) return
                    try {
                        paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;
                        return eval(`${paramsQuoted}`)
                        console.log(`[EXEC]~> ${paramsQuoted}`)
                    } catch (e) {
                        reply(e)
                    }
                    break

                case 'sender':
                    bla = isGroup ? info.key.participant : info.key.remoteJid
                    reply(bla)
                    break

                case 'dados':
                case 'ping':
                    r = (Date.now() / 1000) - info.messageTimestamp
                    uptime = process.uptime()
                    hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
                    bla = `
━━━━┉┉┉┅┅┅┅┉┉┉━━━━

 ू ፝͜❥ ${tempo} @${sender.split("@")[0]} 

 O Bot se encontra online por:
 
  ͢   ${kyun(uptime)}

  ͢   Velocidade de Resposta: ${String(r.toFixed(3))}

━━━━┉┉┉┅┅┅┅┉┉┉━━━━`
                    conn.sendMessage(from, { text: bla, mentions: [sender] }, { quoted: selo })
                    break

                case 'gtts':
                    try {
                        if (args.length < 1) return conn.sendMessage(from, { text: `Cade o texto?, digite algo Exemplo:\n${prefix}gtts PT Oi` }, { quoted: info })
                        const gtts = require('./armor/funcoes/gtts')(args[0])
                        if (args.length < 2) return conn.sendMessage(from, { text: 'Falta colocar o código do idioma!' }, { quoted: info })
                        dtt = body.slice(8)
                        ranm = getRandom('.mp3')
                        rano = getRandom('.ogg')
                        if (dtt.length > 200) return reply('Para reduzir spam o máximo de letras permitidas são 200!')
                        gtts.save(ranm, dtt, function () {
                            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                                conn.sendMessage(from, { audio: fs.readFileSync(ranm), ptt: true, mimetype: "audio/mpeg" }, { quoted: info }).catch(e => {
                                    return reply("Erro..")
                                })
                                DLT_FL(ranm)
                                DLT_FL(rano)
                            })
                        })
                    } catch {
                        return reply("Erro..")
                    }
                    break

                case 'tagme':
                    const tagme = `@${sender.split("@")[0]} ✔️`
                    await mentions(tagme, [sender], true)
                    break

                case 'blockcmd':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (q.trim().toLowerCase().includes("blockcmd blockcmd") || (q.trim().toLowerCase().includes("blockcmd  blockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de bloquear comando?`)
                    if (getComandoBlock(from).includes(q.trim().toLowerCase())) return reply('Este comando já está blockeado')
                    addComandos(from, q.trim().toLowerCase())
                    reply(`O comando ${args[0]} Foi blockeado`)
                    break

                case 'unblockcmd':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (q.trim().toLowerCase().includes("blockcmd unblockcmd") || (q.trim().toLowerCase().includes("blockcmd  unblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de desbloquear comando?`)
                    if (!getComandoBlock(from).includes(q.trim().toLowerCase())) return reply('Este comando já está  desbloqueado')
                    deleteComandos(from, q.trim().toLowerCase())
                    reply(`O comando ${args[0]} Foi desblockeado`)
                    break

                case 'listacomandos':
                    tkks = '╭─*「 *COMANDOS BLOCK* 」\n'
                    for (let V of getComandoBlock(from)) {
                        tkks += `│+  ${V}\n`
                    }
                    tkks += `│+ Total : ${getComandoBlock(from).length}\n╰──────*「 *${NomeDoBot}* 」*────`
                    conn.sendMessage(from, { text: tkks.trim() }, { quoted: info })
                    break

                case 'avalie':
                    const avalie = body.slice(8)
                    if (args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
                    if (args.length >= 400) return conn.sendMessage(from, { text: 'Máximo 400 caracteres' }, { quoted: info })
                    var nomor = info.participant
                    tdptls = `[ Avaliação ]\nDe: wa.me/${sender.split(SNET)[0]}\n: ${avalie}`
                    conn.sendMessage(nmrdn, { text: tdptls }, { quoted: info })
                    reply("mensagem enviada ao meu dono, obrigado pela avaliação, iremos melhorar a cada dia.")
                    break

                case 'bug':
                    const bug = body.slice(5)
                    if (args.length <= 1) return reply(`Exemplo: ${prefix}bug "ocorreu um erro no comando sticker"`)
                    if (args.length >= 800) return conn.sendMessage(from, { text: 'Máximo 800 caracteres' }, { quoted: info })
                    var nomor = info.participant
                    teks1 = `[ Problema ]\nDe: wa.me/${sender.split(SNET)[0]}\nErro ou bug: ${bug}`
                    conn.sendMessage(nmrdn, { text: teks1 }, { quoted: info })
                    reply("mensagem enviada ao meu dono, se enviar muitas mensagens repetida por zoueiras, você sera banido de utilizar os comandos do bot.")
                    break

                case 'sugestão':
                case 'sugestao':
                    const sugestao = body.slice(10)
                    if (args.length <= 1) return reply(`Exemplo: ${prefix}sugestao "Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso.."`)
                    if (args.length >= 800) return conn.sendMessage(from, { text: 'Máximo 800 caracteres' }, { quoted: info })
                    var nomor = info.participant
                    sug = `[ Sugestões ]\nDe: wa.me/${sender.split(SNET)[0]}\n: ${sugestao}`
                    conn.sendMessage(nmrdn, { text: sug }, { quoted: info })
                    reply("mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões.")
                    break

                //==========(BAIXAR/PESQUISAS)==========\\

                case 'gerarlink':
                case 'imgpralink':
                    try {
                        if ((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {
                            reply(Res_Aguarde)
                            let boij;
                            boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
                            owgi = await getFileBuffer(boij, 'image')
                            res = await upload(owgi, "image")
                            reply(res)
                        } else {
                            boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.videoMessage : info.message.videoMessage
                            owgi = await getFileBuffer(boij, 'video')
                            res = await upload(owgi, "video")
                            reply(res)
                        }
                    } catch (e) {
                        return reply("Só gero link de imagem, sinto mt / Erro")
                    }
                    break


                case 'votar_duelo': case 'votar_combate':
                    if (isGroup) return reply(`Este comando só deve ser utilizado em privado após a votação ser iniciada em algum grupo, lá terá o exemplo..`)
                    var [nmr_v, id_g] = q.trim().split("/")
                    if (!id_g) return msg.reply(`Digite o comando ${prefix}votar no grupo que iniciou a votação para ver como votar no formato correto.`)
                    if (!fs.existsSync(`./armor/json/DUELO/duelo_${id_g}.json`)) return reply(`Nenhum duelo foi iniciado nesse grupo..`)
                    var dl_JsOn = JSON.parse(fs.readFileSync(`./armor/json/DUELO/duelo_${id_g}.json`))
                    if (dl_JsOn.voto_usu1.includes(sender)) return reply("Você já votou em alguem, então não pode votar novamente.")
                    if (dl_JsOn.voto_usu2.includes(sender)) return reply("Você já votou em alguem, então não pode votar novamente.")
                    if (dl_JsOn.usu1 == nmr_v + "@s.whatsapp.net") {
                        dl_JsOn.voto_usu1.push(sender)
                    } else {
                        dl_JsOn.voto_usu2.push(sender)
                    }
                    fs.writeFileSync(`./armor/json/DUELO/duelo_${id_g}.json`, JSON.stringify(dl_JsOn, null, 2))
                    reply("Votou com sucesso, agora só aguardar terminar, para ver os resultados 🙂.")
                    break;

                case 'votar': case 'como_votar':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!fs.existsSync(`./armor/json/DUELO/duelo_${from}.json`)) return reply(`Nenhum duelo foi iniciado nesse grupo..`)
                    reply("Como votar foi enviado no seu privado a explicação dos 2.")
                    var dl_JsOn = JSON.parse(fs.readFileSync(`./armor/json/DUELO/duelo_${from}.json`))
                    conn.sendMessage(sender, {
                        text: `Para votar no primeiro usario: 
Use o comando: ${setting.prefix}votar_duelo ${dl_JsOn.usu1}/${from} 

Para votar no segundo usuario:

Use o comando: ${setting.prefix}votar_duelo ${dl_JsOn.usu2}/${from} 
`})
                    break;

                case 'zerar_duelo': case 'zerar_combate':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply("Apenas administrador..")
                    if (!fs.existsSync(`./armor/json/DUELO/duelo_${from}.json`)) return reply(`Nenhum duelo foi iniciado nesse grupo..`)
                    DLT_FL(`./armor/json/DUELO/duelo_${from}.json`)
                    reply("Duelo resetado / cancelado..")
                    break

                case 'terminar_votacao':
                    try {
                        if (!isGroup) return reply(Res_SoGrupo)
                        if (!isGroupAdmins) return reply("Apenas administrador..")
                        if (!fs.existsSync(`./armor/json/DUELO/duelo_${from}.json`)) return reply(`Nenhum duelo foi iniciado nesse grupo..`)
                        dl_JsOn = JSON.parse(fs.readFileSync(`./armor/json/DUELO/duelo_${from}.json`))
                        if (dl_JsOn.voto_usu1.length == dl_JsOn.voto_usu2.length) return reply(`[ OBS ] - OS 2 USUARIOS TERMINARAM EMPATE, COM MESMA PONTUAÇÃO:

1: ${dl_JsOn.voto_usu1.length} Votos

2: ${dl_JsOn.voto_usu2.length} Votos

Então a decisão está na mão dos administradores, se vai refazer o duelo, ou decidir o ganhador de alguma fórma..`)
                        var blak = `[ Ganhador: @${dl_JsOn.voto_usu1.length > dl_JsOn.voto_usu2.length ? dl_JsOn.usu1.split("@")[0] : dl_JsOn.usu2.split("@")[0]} ]\n\nUsuário _- 1 - @${dl_JsOn.usu1.split("@")[0]}\n\nQuantidade de votos: ${dl_JsOn.voto_usu1.length}\n_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n\nUsuário _- 2 - @${dl_JsOn.usu2.split("@")[0]}\n\nQuantidade de votos: ${dl_JsOn.voto_usu2.length}\n`
                        try { pfimg = await conn.profilePictureUrl(`${dl_JsOn.voto_usu1.length > dl_JsOn.voto_usu2.length ? dl_JsOn.usu1.split("@")[0] : dl_JsOn.usu2.split("@")[0]}@c.us`, 'image') } catch { pfimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg' };
                        bl1 = await getBuffer(pfimg); bl_up = await upload(bl1, "image")
                        blar = await getBuffer(`https://eruakorl.sirv.com/josival-aleatory/ganhador.jpg?text.0.text=${dl_JsOn.voto_usu1.length > dl_JsOn.voto_usu2.length ? dl_JsOn.usu1.split("@")[0] : dl_JsOn.usu2.split("@")[0]}&text.0.position.gravity=center&text.0.position.y=22%25&text.0.size=62&text.0.color=000000&text.0.font.family=Source%20Serif%20Pro&text.0.font.weight=700&text.0.font.style=italic`)
                        bli = await upload(blar, "image")
                        conn.sendMessage(from, { image: { url: `https://telegra.ph/file/63b348d0102cd6aff8b3a.jpg` }, caption: blak, mentions: [dl_JsOn.usu1, dl_JsOn.usu2] })
                    } catch {
                        reply("Erro, tente novamente..")
                    }
                    U_S_US = `Usuarios que votou em: ${dl_JsOn.usu1.split("@")[0]}\n\n`
                    for (var i of dl_JsOn.voto_usu1) {
                        U_S_US += `- ( https://wa.me/${i.split("@")[0]} )\n\n`
                    }

                    U_S_US += `Usuarios que votou em: ${dl_JsOn.usu2.split("@")[0]}\n\n`
                    for (var i of dl_JsOn.voto_usu2) {
                        U_S_US += `- ( https://wa.me/${i.split("@")[0]} )\n`
                    }
                    conn.sendMessage(sender, { text: U_S_US })
                    await setTimeout(() => {
                        DLT_FL(`./armor/json/DUELO/duelo_${from}.json`)
                    }, 30000)
                    break

                case 'iniciar_votacao':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply("Apenas administrador..")
                    if (!fs.existsSync(`./armor/json/DUELO/duelo_${from}.json`)) return reply(`Nenhum duelo foi iniciado nesse grupo..`)
                    dl_JsOn = JSON.parse(fs.readFileSync(`./armor/json/DUELO/duelo_${from}.json`))
                    mention(`[ ATENÇÃO ] - Votação iniciada, prestem atenção.

@${dl_JsOn.usu1.split("@")[0]}
Para votar no primeiro usuario do duelo: 
https://wa.me/${botNumber.split("@")[0]}?text=${setting.prefix}votar_duelo%20${dl_JsOn.usu1.split("@")[0]}/${from}

@${dl_JsOn.usu2.split("@")[0]}
Para votar no segundo usuario do duelo:
https://wa.me/${botNumber.split("@")[0]}?text=${prefix}votar_duelo%20${dl_JsOn.usu2.split("@")[0]}/${from}`)
                    break;



                case 'bc': case 'bcgroup': case 'transmitir': case 'transmissão': {
                    if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
                    if (!q) return reply(`Texto onde?\n\nExemplo : ${prefix + command} BOA VISTA `)
                    let getGroups = await conn.groupFetchAllParticipating()
                    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                    let anu = groups.map(v => v.id)
                    for (i = 0; i < anu.length; i++) {
                        await sleep(1500)
                        let txt = `「 TRANSMISSÃO DO BOT 」\n\n ${q}`
                        conn.sendMessage(anu[i], { text: txt })
                    }
                    reply(`Enviando com sucesso `)
                }
                    break


                case 'join': case 'entrar':
                    if (!SoDono) return reply(Res_SoDono)
                    string = args.join(' ')
                    if (!string) return reply('Insira um link de convite ao lado do comando.')
                    if (string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.')) {
                        link = string.split('app.com/')[1]
                        try {
                            conn.groupAcceptInvite(`${link}`)
                        } catch (erro) {
                            if (String(erro).includes('resource-limit')) {
                                reply('O grupo já está com o alcance de 257 membros.')
                            }
                            if (String(erro).includes('not-authorized')) {
                                reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
                            }
                        }
                    }
                    break

                case 'antiimg':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (args.length < 1) return reply('Hmmmm')
                    if (Number(args[0]) === 1) {
                        if (isAntiImg) return reply('Já Esta ativo')
                        dataGp[0].antiimg = true
                        setGp(dataGp)
                        reply('Ativou com sucesso o recurso de anti imagem neste grupo✔️')
                    } else if (Number(args[0]) === 0) {
                        if (!isAntiImg) return reply('Ja esta Desativado.')
                        dataGp[0].antiimg = false
                        setGp(dataGp)
                        reply('Desativou com sucesso o recurso de anti imagem neste grupo✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    break

                case 'antivideo':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (args.length < 1) return reply('Hmmmm')
                    if (Number(args[0]) === 1) {
                        if (isAntiVid) return reply('Ja esta ativo')
                        dataGp[0].antivideo = true
                        setGp(dataGp)
                        reply('Ativou com sucesso o recurso de anti video neste grupo✔️')
                    } else if (Number(args[0]) === 0) {
                        if (!isAntiVid) return reply('Ja esta Desativado')
                        dataGp[0].antivideo = false
                        setGp(dataGp)
                        reply('Desativou com sucesso o recurso de anti video neste grupo✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    break

                case 'antiaudio':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (args.length < 1) return reply('Hmmmm')
                    if (Number(args[0]) === 1) {
                        if (isAntiAudio) return reply('Ja esta ativo')
                        dataGp[0].antiaudio = true
                        setGp(dataGp)
                        reply('Ativou com sucesso o recurso de anti audio neste grupo✔️')
                    } else if (Number(args[0]) === 0) {
                        if (!isAntiAudio) return reply('Ja esta Desativado')
                        dataGp[0].antiaudio = false
                        setGp(dataGp)
                        reply('Desativou com sucesso o recurso de anti audio neste grupo✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    break

                case 'antisticker':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (args.length < 1) return reply('Hmmmm')
                    if (Number(args[0]) === 1) {
                        if (isAntiSticker) return reply('Já Esta ativo')
                        dataGp[0].antisticker = true
                        setGp(dataGp)
                        reply('Ativou com sucesso o recurso de anti sticker neste grupo✔️')
                    } else if (Number(args[0]) === 0) {
                        if (!isAntiSticker) return reply('Ja esta Desativado.')
                        dataGp[0].antisticker = false
                        setGp(dataGp)
                        reply('Desativou com sucesso o recurso de anti sticker neste grupo✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    break

                case 'antidocumento':
                case 'antidoc':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
                    if (Number(args[0]) === 1) {
                        if (Antidoc) return reply('Ja esta ativo')
                        dataGp[0].antidoc = true
                        setGp(dataGp)
                        reply('Ativou com sucesso o recurso de anti documento neste grupo✔️')
                    } else if (Number(args[0]) === 0) {
                        if (!Antidoc) return reply('Ja esta Desativado')
                        dataGp[0].antidoc = false
                        setGp(dataGp)
                        reply('‼️ Desativou com sucesso o recurso de anti documento neste grupo✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    break

                case 'antictt':
                case 'anticontato':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
                    if (Number(args[0]) === 1) {
                        if (isAntiCtt) return reply('Ja esta ativo')
                        dataGp[0].antictt = true
                        setGp(dataGp)
                        reply('🌀 Ativou com sucesso o recurso de anticontato neste grupo 📝')
                    } else if (Number(args[0]) === 0) {
                        if (!isAntiCtt) return reply('Ja esta Desativado')
                        dataGp[0].antictt = false
                        setGp(dataGp)
                        reply('‼️ Desativou com sucesso o recurso de anticontato neste grupo✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    break

                case 'antiloc':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    try {
                        if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
                        if (Number(args[0]) === 1) {
                            if (Antiloc) return reply('Já está Ativo.')
                            dataGp[0].antiloc = true
                            setGp(dataGp)
                            reply('Ativou com sucesso o recurso de anti loc neste grupo✔️')
                        } else if (Number(args[0]) === 0) {
                            if (!Antiloc) return reply('Já está Desativado.')
                            dataGp[0].antiloc = false
                            setGp(dataGp)
                            reply('Desativou com sucesso o recurso de anti loc neste grupo✔️')
                        } else {
                            reply('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        reply('Deu erro, tente novamente :/')
                    }
                    break

                case 'antilinkgp':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
                    if (Number(args[0]) === 1) {
                        if (isAntilinkgp) return reply('Ja esta ativo')
                        dataGp[0].antilinkgp = true
                        setGp(dataGp)
                        reply('🌀 Ativou com sucesso o recurso de antilinkgp 📝')
                    } else if (Number(args[0]) === 0) {
                        if (!isAntilinkgp) return reply('Ja esta Desativado')
                        dataGp[0].antilinkgp = false
                        setGp(dataGp)
                        reply('‼️ Desativou com sucesso o recurso de antilink de grupo ✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    break

                case 'antilinkhard':
                case 'antilink':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
                    if (Number(args[0]) === 1) {
                        if (isAntiLinkHard) return reply('Ja esta ativo')
                        dataGp[0].antilinkhard = true
                        setGp(dataGp)
                        reply('🌀 Ativou com sucesso o recurso de antilink hardcore neste grupo 📝')
                    } else if (Number(args[0]) === 0) {
                        if (!isAntiLinkHard) return reply('Ja esta Desativado')
                        dataGp[0].antilinkhard = false
                        setGp(dataGp)
                        reply('‼️ Desativou com sucesso o recurso de antilink harcore neste grupo✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    break

                case 'x9':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
                    if (Number(args[0]) === 1) {
                        if (isx9) return reply('Ja esta ativo')
                        dataGp[0].x9 = true
                        setGp(dataGp)
                        reply('🌀 Ativou com sucesso o recurso de x9 neste grupo, irei notificar quando alguém for Rebaixado ou promovido a adm 😏..')
                    } else if (Number(args[0]) === 0) {
                        if (!isx9) return reply('Ja esta Desativado')
                        dataGp[0].x9 = false
                        setGp(dataGp)
                        reply('‼️ Desativou com sucesso o recurso de x9 neste grupo, não irei mais notificar promoção de adm nem rebaixamento..✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    break

                case 'visualizarmsg':
                    if (!SoDono) return reply(Res_SoDono)
                    if (!isVisualizar) {
                        nescessario.visualizarmsg = true
                        setNes(nescessario)
                        reply('🌀 Ativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado 📝')
                    } else if (isVisualizar) {
                        nescessario.visualizarmsg = false
                        setNes(nescessario)
                        reply('‼️ Desativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    break

                case 'gold': case 'golds': case 'consultargold':
                    if (!IS_sistemGold) return reply(`Só é possível utilizar este comando ativando o sistema de Golds\nExemplo: ${prefix}sistemgold 1`)
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (command == "consultargold") {
                        ConsultarGold(menc_os2)
                    } else {
                        ConsultarGold(sender)
                    }
                    break

                case 'rankgold':
                    if (!isGroup) return reply(Res_SoGrupo)
                    galo = rggold[rggold.map(i => i.grupo).indexOf(from)].usus.map(i => i)
                    rank = galo.sort((a, b) => (a.Golds < b.Golds) ? 0 : -1)
                    ment = []

                    ble = `💰 *Rank de Golds* 💰\n`

                    for (i = 0; i < 5; i++) {
                        if (i != null) {
                            ble += `
┌───────────────
│ ${i + 1}º : @${rank[i].id.split('@')[0]}
│
│  Saldo: ${rank[i].Golds}
└────────────\n`
                            ment.push(rank[i].id)
                        }
                    }
                    mentions(ble, ment, true)

                    break

                case 'addgold': case 'tirargold':
                    if (!SoDono) return reply(Res_SoDono)
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!menc_os2 && !Number(q) || menc_jid2[1]) return reply(`Marque a mensagem ou @ do usuário que deseja adicionar Golds Ou tirar..\n\nExemplo: Se for apenas tirar ou add marcando a mensagem\nUse: ${prefix}addgold 5\n\nSe for Tirar ou add usando @\nUse: ${prefix}addgold @marque 5`)
                    var qp = q.replace(menc_jid2, "")
                    if (command == "addgold") {
                        AddGold(Number(qp), menc_os2)
                    } else if (command == "tirargold") {
                        TirarGold(Number(qp), menc_os2)
                    }
                    break

                case 'sistemgold':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
                    hora130 = moment.tz('America/Sao_Paulo').format('HH:mm');
                    if (Number(args[0]) === 1) {
                        if (IS_sistemGold) return reply('Ja esta ativo')
                        dataGp[0].sistemGold = true
                        setGp(dataGp)
                        reply(`Sistema de Golds foi ativado com sucesso nesse grupo, As: ${hora130}`)
                    } else if (Number(args[0]) === 0) {
                        if (!IS_sistemGold) return reply('Ja esta Desativado')
                        dataGp[0].sistemGold = false
                        setGp(dataGp)
                        reply(`Para a infelicidade dos usuários o sistema de Golds foi Desativado nesse grupo, As: ${hora130}`)
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    break

                case 'x9visuunica':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
                    if (Number(args[0]) === 1) {
                        if (isX9VisuUnica) return reply('Ja esta ativo')
                        dataGp[0].visuUnica = true
                        setGp(dataGp)
                        reply('🌀 Ativou com sucesso o recurso de revelar visu única neste grupo 📝')
                    } else if (Number(args[0]) === 0) {
                        if (!isX9VisuUnica) return reply('Ja esta Desativado')
                        dataGp[0].visuUnica = false
                        setGp(dataGp)
                        reply('‼️ Desativou com sucesso o recurso de revelar visu única neste grupo✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    break

                case 'so_adm':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
                    if (Number(args[0]) === 1) {
                        if (So_Adm) return reply('Ja esta ativo')
                        dataGp[0].soadm = true
                        setGp(dataGp)
                        reply(' - Ativou com sucesso o recurso de só adm utilizar comandos neste grupo 📝')
                    } else if (Number(args[0]) === 0) {
                        if (!So_Adm) return reply('Ja esta Desativado')
                        dataGp[0].soadm = false
                        setGp(dataGp)
                        reply('‼️ Desativou o recurso de Só ADM utiliar comandos neste grupo ✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    break

                case 'odelete':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!SoDono) return reply(Res_SoDono)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
                    if (Number(args[0]) === 1) {
                        if (IS_DELETE) return reply('Ja esta ativo')
                        nescessario.Odelete = true
                        setNes(nescessario)
                        reply('🌀 Ativou com sucesso o recurso de delete nos grupos 📝')
                    } else if (Number(args[0]) === 0) {
                        if (!IS_DELETE) return reply('Ja esta Desativado')
                        nescessario.Odelete = false
                        setNes(nescessario)
                        reply('‼️ Desativou com sucesso o recurso de delete nos grupos ✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    break

                case 'antifake':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
                    if (Number(args[0]) === 1) {
                        if (isAntifake) return reply('Ja esta ativo')
                        dataGp[0].antifake = true
                        setGp(dataGp)
                        reply('🌀 Ativou com sucesso o recurso de antifake neste grupo 📝')
                    } else if (Number(args[0]) === 0) {
                        if (!isAntifake) return reply('Ja esta Desativado')
                        dataGp[0].antifake = false
                        setGp(dataGp)
                        reply('‼️ Desativou com sucesso o recurso de antifake neste grupo✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    break

                case 'prefixos':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (dataGp[0].prefixos.length < 1) return reply("Não contem nenhum prefixo a + adicionado neste grupo.")
                    bla = `Lista de prefixos para uso do bot, no Grupo: ${groupName}\n\n`
                    for (i of dataGp[0].prefixos) {
                        bla += `Prefixo: ${i}\n\n`
                    }
                    reply(bla)
                    break

                case 'add_prefixo':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo 1`)
                    if (ANT_LTR_MD_EMJ(q)) return reply("Não pode letra modificada, nem emoji..")
                    if (!q.trim()) return reply("Determine o novo prefixo, não pode espaço vazio...")
                    if (q.trim() > 1) return reply(`Calma, o prefixo só pode ser um\nExemplo: ${prefix + command} _\nAe o bot vai passar á responder _ como prefixo do bot..`)
                    if (dataGp[0].prefixos.indexOf(q.trim()) >= 0) return reply(`Esse prefixo já se encontra incluso, procure ver na lista dos prefixos\nExemplo: ${prefix}prefixos`)
                    dataGp[0].prefixos.push(q.trim())
                    setGp(dataGp)
                    reply(`Prefixo ${q.trim()} Adicionado com sucesso na lista de prefixos para uso do bot, neste grupo...`)
                    break

                case 'tirar_prefixo':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo 1`)
                    if (ANT_LTR_MD_EMJ(q)) return reply("Não pode letra modificada, nem emoji..")
                    if (!q.trim()) return reply("Determine o prefixo que deseja tirar, não pode espaço vazio...")
                    if (q.trim() > 1) return reply(`Calma, o prefixo só pode ser tirado um por vez\nExemplo: ${prefix + command} _\nAe o bot não vai responder mais com _`)
                    if (dataGp[0].prefixos.indexOf(q.trim()) < 0) return reply(`Esse prefixo não está incluso, procure ver na lista dos prefixos\nExemplo: ${prefix}prefixos`)
                    if (dataGp[0].prefixos.length == 1) return reply("Adicione um prefixo para pode tirar este, tem que ter pelo menos 1 prefixo já incluso dentro do sistema para tirar outro.")
                    dataGp[0].prefixos.splice(dataGp[0].prefixos.indexOf(q.trim()), 1)
                    setGp(dataGp)
                    reply(`Prefixo ${q.trim()} tirado com sucesso da lista de prefixos de uso deste grupo..`)
                    break

                case 'multiprefixo': case 'multiprefix':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins && !SoDono) return reply(Res_SoAdm)
                    if (!isMultiP) {
                        dataGp[0].multiprefix = true
                        setGp(dataGp)
                        reply('🌀 Ativou com sucesso o recurso de multi prefixos neste grupo 📝')
                    }
                    if (isMultiP) {
                        dataGp[0].multiprefix = false
                        setGp(dataGp)
                        reply('‼️ Desativou com sucesso o recurso de multi prefixos neste grupo✔️')
                    }
                    break

                case 'antinotas':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (args.length < 1) return reply('Hmmmm')
                    if (Number(args[0]) === 1) {
                        if (isAntiNotas) return reply('Já Esta ativo')
                        dataGp[0].antinotas = true
                        setGp(dataGp)
                        reply('Ativou com sucesso o recurso de anti notas neste grupo✔️')
                    } else if (Number(args[0]) === 0) {
                        if (!isAntiNotas) return reply('Ja esta Desativado.')
                        dataGp[0].antinotas = false
                        setGp(dataGp)
                        reply('Desativou com sucesso o recurso de anti notas neste grupo✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    break

                case 'anticatalogo':
                case 'anticatalg':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
                    if (Number(args[0]) === 1) {
                        if (isAnticatalogo) return reply('Ja esta ativo')
                        dataGp[0].anticatalogo = true
                        setGp(dataGp)
                        reply('🌀 Ativou com sucesso o recurso de anticatalogo neste grupo 📝')
                    } else if (Number(args[0]) === 0) {
                        if (!isAnticatalogo) return reply('Ja esta Desativado')
                        dataGp[0].anticatalogo = false
                        setGp(dataGp)
                        reply('‼️ Desativou com sucesso o recurso de anticatalogo neste grupo✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    break

                case 'bemvindo':
                case 'welcome':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    //if(!SoDono) return reply(Res_SoDono)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
                    if (Number(args[0]) === 1) {
                        if (isWelkom) return reply('Ja esta ativo')
                        dataGp[0].wellcome[0].bemvindo1 = true
                        setGp(dataGp)
                        reply('🌀 Ativou com sucesso o recurso de bem vindo neste grupo 📝')
                    } else if (Number(args[0]) === 0) {
                        if (!isWelkom) return reply('Ja esta Desativado')
                        dataGp[0].wellcome[0].bemvindo1 = false
                        setGp(dataGp)
                        reply('‼️ Desativou com sucesso o recurso de bemvindo neste grupo✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    break

                case 'bemvindo2':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    //if(!SoDono) return reply(Res_SoDono)
                    if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix + command} 1 para ativar `)
                    if (Number(args[0]) === 1) {
                        if (isWelkom2) return reply('❎O recurso já está ativado no grupo❎')
                        dataGp[0].wellcome[1].bemvindo2 = true
                        setGp(dataGp)
                        reply('✅O recurso foi ativado✅')
                    } else if (Number(args[0]) === 0) {
                        if (!isWelkom2) return reply('❎O recurso não está ativado no grupo❎')
                        dataGp[0].wellcome[1].bemvindo2 = false
                        setGp(dataGp)
                        reply('❌O recurso foi desativado❌')
                    } else {
                        reply(`Digite da forma correta:\nComando: ${prefix + command} 1, para ativar e 0 para desativar`)
                    }
                    break

                case 'legendabv':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
                    teks = body.slice(11)
                    if (isWelkom) {
                        dataGp[0].wellcome[0].legendabv = teks
                        setGp(dataGp)
                        reply('*Mensagem de boas vindas definida com sucesso!*')
                    } else {
                        reply(`Ative o ${prefix}bemvindo 1`)
                    }
                    break

                case 'legendasaiu':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (args.length < 1) return reply('*Escreva a mensagem de saída*')
                    teks = body.slice(13)
                    if (isWelkom) {
                        dataGp[0].wellcome[0].legendasaiu = teks
                        setGp(dataGp)
                        reply('*Mensagem de saída definida com sucesso!*')
                    } else {
                        reply(`Ative o ${prefix}bemvindo 1`
                        )
                    }
                    break

                case 'legendabv2':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
                    teks = body.slice(12)
                    if (isWelkom2) {
                        dataGp[0].wellcome[1].legendabv = teks
                        setGp(dataGp)
                        reply('*Mensagem de boas vindas2 definida com sucesso!*')
                    } else {
                        reply(`Ative o ${prefix}bemvindo2 1`)
                    }
                    break

                case 'legendasaiu2':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (args.length < 1) return reply('*Escreva a mensagem de saída*')
                    teks = body.slice(14)
                    if (isWelkom2) {
                        dataGp[0].wellcome[1].legendasaiu = teks
                        setGp(dataGp)
                        reply('*Mensagem de saída2 definida com sucesso!*')
                    } else {
                        reply(`Ative o ${prefix}bemvindo2 1`)
                    }
                    break

                case 'legenda_estrangeiro':
                case 'legenda_estrangeiros':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
                    if (isAntifake) {
                        dataGp[0].legenda_estrangeiro = q
                        setGp(dataGp)
                        reply('*Mensagem de remoção de estrangeiros definida com sucesso!*')
                    } else {
                        reply(`Ative o antifake primeiro com ${prefix}antifake 1`)
                    }
                    break

                case 'legenda_video':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
                    dataGp[0].legenda_video = q
                    setGp(dataGp)
                    reply('*Mensagem de remoção de video definida com sucesso!*')
                    break

                case 'legenda_imagem':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
                    dataGp[0].legenda_imagem = q
                    setGp(dataGp)
                    reply('*Mensagem de remoção de imagem definida com sucesso!*')
                    break

                case 'legenda_documento':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
                    dataGp[0].legenda_documento = q
                    setGp(dataGp)
                    reply('*Mensagem de remoção de Documento definida com sucesso!*')
                    break

                case 'autobang':
                case 'listanegrag':
                    if (!SoDono) return reply(Res_SoDono)
                    if (!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra Global..")
                    if (listanegraG.includes(mrc_ou_numero)) return reply('*Esse Número ja esta incluso*')
                    listanegraG.push(mrc_ou_numero)
                    fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
                    reply(`*Número adicionado a lista de autoban*`)
                    break

                case 'tirardalistag':
                    if (!SoDono) return reply(Res_SoDono)
                    if (!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..")
                    if (!listanegraG.includes(mrc_ou_numero)) return reply('*Esse Número não esta incluso*')
                    var i = listanegraG.indexOf(mrc_ou_numero)
                    listanegraG.splice(i, 1)
                    fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
                    reply(`*Número foi removido da lista negra*`)
                    break

                case 'simi':
                    if (!isGroup) return reply(Res_SoGrupo)
                    try {
                        datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {
                            method: 'POST',
                            headers: { 'content-type': "application/x-www-form-urlencoded" },
                            body: "text=" + q + "&lc=pt"
                        })
                        return reply(datasimi.message)
                    } catch (e) {
                        return reply("Resposta não encontrada..")
                    }
                    break

                case 'autofigu': case 'autosticker':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
                    if (Number(args[0]) === 1) {
                        if (isAutofigu) return reply('Ja esta ativo')
                        dataGp[0].autosticker = true
                        setGp(dataGp)
                        reply('🌀 Ativou com sucesso o recurso de auto figurinhas neste grupo 📝')
                    } else if (Number(args[0]) === 0) {
                        if (!isAutofigu) return reply('Ja esta Desativado')
                        dataGp[0].autosticker = false
                        setGp(dataGp)
                        reply('‼️ Desativou com sucesso o recurso de auto figurinhas neste grupo✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    break

                case 'autorepo':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
                    if (Number(args[0]) === 1) {
                        if (isAutorepo) return reply('Ja esta ativo')
                        dataGp[0].autoresposta = true
                        setGp(dataGp)
                        reply('🌀 Ativou com sucesso o recurso de auto resposta neste grupo 📝')
                    } else if (Number(args[0]) === 0) {
                        if (!isAutorepo) return reply('Ja esta Desativado')
                        dataGp[0].autoresposta = false
                        setGp(dataGp)
                        reply('‼️ Desativou com sucesso o recurso de auto resposta neste grupo✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    break

                case 'modobrincadeira':
                case 'modobrincadeiras':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
                    if (Number(args[0]) === 1) {
                        if (isModobn) return reply('o modobrincadeira já está ativo')
                        dataGp[0].jogos = true
                        setGp(dataGp)
                        reply('🎯 Ativou com sucesso o recurso de Modo brincadeira neste grupo 🪀')
                    } else if (Number(args[0]) === 0) {
                        if (!isModobn) return reply('o modobrincadeira já está Desativado')
                        dataGp[0].jogos = false
                        setGp(dataGp)
                        reply('🎯 Desativou com sucesso o recurso de Modo brincadeira neste grupo 🪀')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    break

                case 'patente':
                case 'level':
                    if (!isGroup) return reply(Res_SoGrupo)
                    resul = `     
Olá Usuário -> @${sender.split("@")[0]}\n\n★彡[ ${tempo} ]彡★ Aqui está suas informações: 

- Patente : ${patente} 

- Level* : ${level_up}

- Grupo: ${groupName}`
                    conn.sendMessage(from, { text: resul, mentions: [sender] }, { quoted: info })
                    break

                case 'leveling':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (args.length < 1) return reply('Ative pressione 1, Desativar pressione 0')
                    if (Number(args[0]) === 1) {
                        if (isLevelingOn) return reply('*O recurso de nível já estava ativo antes*')
                        dataGp[0].level = true
                        setGp(dataGp)
                        reply(enviar.levelon)
                    } else if (Number(args[0]) === 0) {
                        if (!isLevelingOn) return reply(`O recurso de level já está Desativado neste grupo.`)
                        dataGp[0].level = false
                        setGp(dataGp)
                        reply(enviar.leveloff)
                    } else {
                        reply('「* Adicionar parâmetro 1 ou 0 ')
                    }
                    break

                case 'bangp':
                case 'unbangp':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!SoDono) return reply(Res_SoDono)
                    if (command == 'bangp') {
                        if (isBanchat) return reply(`Este grupo ja está banido`)
                        dataGp[0].bangp = true
                        setGp(dataGp)
                        reply(`Grupo banido com sucesso`)
                    } else {
                        if (!isBanchat) return reply(`Este grupo não está mais banido`)
                        dataGp[0].bangp = false
                        setGp(dataGp)
                        reply(`Grupo desbanido...`)
                    }
                    break

                case 'boton':
                case 'botoff':
                    if (!SoDono) return reply(Res_SoDono)
                    if (!isBotoff) {
                        nescessario.botoff = true
                        setNes(nescessario)
                        reply('Desativando funções e parando a execução de comandos por membros com sucesso...')
                    } else if (isBotoff) {
                        nescessario.botoff = false
                        setNes(nescessario)
                        reply(`Ativando todos os funcionamentos do bot novamente...`)
                    }
                    break

                case 'modonsfw':
                case 'nsfw':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (args.length < 1) return reply('Hmmmm')
                    if (Number(args[0]) === 1) {
                        if (isNsfw) return reply('O modo nsfw já está ativo')
                        dataGp[0].nsfw = true
                        setGp(dataGp)
                        reply(`\`\`\`✓Ativado com sucesso o modo nsfw +18 no grupo\`\`\` *${groupMetadata.subject}*`)
                    } else if (Number(args[0]) === 0) {
                        if (!isNsfw) return reply('O modo nsfw já está Desativado')
                        dataGp[0].nsfw = false
                        setGp(dataGp)
                        reply(`\`\`\`✓Modo Nsfw +18 desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
                    } else {
                        reply('1 para ativar, 0 para desligar')
                    }
                    break

                case 'antipalavrão':
                case 'antipalavrao':
                case 'antipalavra':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (args.length < 1) return reply(`[❗] 1 / 0, Exemplo ${prefix + command} 1`)
                    if (Number(args[0]) === 1) {
                        if (isPalavrao) return reply('Ja esta ativo.')
                        dataGp[0].antipalavrao.active = true
                        setGp(dataGp)
                        reply('🌀 Ativou com sucesso o recurso de Anti Palavras hardcore neste grupo 📝')
                    } else if (Number(args[0]) === 0) {
                        if (!isPalavrao) return reply('Ja esta Desativado')
                        dataGp[0].antipalavrao.active = false
                        setGp(dataGp)
                        reply('‼️ Desativou com sucesso o recurso de Anti Palavra harcore neste grupo✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    break

                case 'addpalavra':
                    if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
                    if (!isPalavrao) return reply('Anti palavrão desativado!')
                    if (args.length < 1) return reply(`Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
                    texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
                    if (isPalavras.includes(texto)) return reply('Já foi adicionada')
                    dataGp[0].antipalavrao.palavras.push(texto)
                    setGp(dataGp)
                    reply('Palavrão adicionado com sucesso!')
                    break

                case 'delpalavra':
                    if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
                    if (!isPalavrao) return reply('Anti palavrão desativado!')
                    if (args.length < 1) return reply(`Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
                    texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
                    if (!isPalavras.includes(texto)) return reply('Já foi removida')
                    var i = dataGp[0].antipalavrao.palavras.indexOf(texto)
                    dataGp[0].antipalavrao.palavras.splice(i, 1)
                    setGp(dataGp)
                    reply('Palavrão removido da lista com sucesso!')
                    break

                case 'listapalavrão': case 'listapalavra':
                case 'listpalavra':
                    if (!isPalavrao) return reply('Anti palavrão desativado!')
                    let lbw = `Esta é a lista de palavrão\nTotal : ${isPalavras.length}\n`
                    for (let i of isPalavras) {
                        lbw += `➸ ${i}\n`
                    }
                    await reply(lbw)
                    break

                case 'limitecaracteres':
                case 'limiteflood':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (args.length < 1) return reply(`Digite ${prefix + command} 1 para ativar`)
                    if (Number(args[0]) === 1) {
                        if (isAntiFlood) return reply(`🌀 O recurso limite de caracteres já está ativo no grupo 🌀`)
                        dataGp[0].limitec.active = true
                        setGp(dataGp)
                        reply(`✔️ O recurso limite de caracteres foi ativado nesse grupo📝`)
                    } else if (Number(args[0]) === 0) {
                        if (!isAntiFlood) return reply('✔️ O recurso limite de caracteres não está ativado no grupo 📝')
                        dataGp[0].limitec.active = false
                        setGp(dataGp)
                        reply('O recurso limite de caracteres foi desativado nesse grupo ✔️')
                    } else {
                        reply(`Digite ${prefix + command} 1 para ativar, 0 para desativar o recurso`)
                    }
                    break

                case 'limitec_global':
                case 'limitec':
                    if (!SoDono && !isnit && !ischyt) return reply(Res_SoDono)
                    if (!isAntiFlood) return reply(`Ative este recurso primeiro ${prefix}limiteflood 1`)
                    if (!q) return reply(`Cade a quantidade? Ex: ${prefix + command} 5000`)
                    if (isNaN(q) == true) return reply('Digite apenas números')
                    if (command == 'limitec') {
                        dataGp[0].limitec.quantidade = q
                        setGp(dataGp)
                        reply(`Foi alterado o limite de caracteres para: ${q}`)
                    } else {
                        var data = { limitefl: q }
                        fs.writeFileSync('./datab/usuarios/flood.json', JSON.stringify(data, null, '\t'))
                        reply(`Foi adicionado um limite global de caracteres de: ${q}`)
                    }
                    break

                case 'status':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins && !SoDono && !isnit && !issupre && !ischyt &&
                        !info.key.fromMe) return reply(Res_SoAdm);
                    statuszada =
                        `
Anti Link Hard: ${isAntiLinkHard ? '✓' : '✕'} 
Comando: ${prefix}antilink 1 / 0

Anti Notas: ${isAntiNotas ? '✓' : '✕'} 
Comando: ${prefix}antinotas 1 / 0

Limite Caracteres: ${isAntiFlood ? '✓' : '✕'} 
Comando: ${prefix}limitecaracteres 1 / 0

Anti Fake: ${isAntifake ? '✓' : '✕'} 
Comando: ${prefix}antifake 1 / 0

Anti Catalogo: ${isAnticatalogo ? '✓' : '✕'} 
Comando: ${prefix}anticatalogo 1 / 0

Anti Localização: ${Antiloc ? '✓' : '✕'} 
Comando: ${prefix}antiloc 1 / 0

X9 De Cargo de ADM: ${isx9 ? '✓' : '✕'}  
Comando: ${prefix}x9 1 / 0

Revelar visualização única: ${isX9VisuUnica ? '✓' : '✕'} 
Comando: ${prefix}x9visuunica 1 / 0

Modo Brincadeira: ${isModobn ? '✓' : '✕'} 
Comando: ${prefix}modobrincadeira 1 / 0

Anti Link Grupo: ${isAntilinkgp ? '✓' : '✕'} 
Comando: ${prefix}antilinkgp 1 / 0

Bem Vindo 1: ${isWelkom ? '✓' : '✕'} 
Comando: ${prefix}bemvindo 1 / 0

Bem Vindo 2: ${isWelkom2 ? '✓' : '✕'} 
Comando: ${prefix}bemvindo2 1 / 0

Level ${isLevelingOn ? '✓' : '✕'} 
Comando: ${prefix}leveling 1 / 0

Anti Vídeo: ${isAntiVid ? '✓' : '✕'} 
Comando: ${prefix}antivideo 1 / 0

Anti Imagem: ${isAntiImg ? '✓' : '✕'} 
Comando: ${prefix}antiimg 1 / 0

Anti Áudio: ${isAntiAudio ? '✓' : '✕'} 
Comando: ${prefix}antiaudio 1 / 0

Anti Documento: ${Antidoc ? '✓' : '✕'} 
Comando: ${prefix}antidoc 1 / 0

Anti Contato ${isAntiCtt ? '✓' : '✕'}
Comando: ${prefix}antictt 1 / 0

Anti Sticker: ${isAntiSticker ? '✓' : '✕'} 
Comando: ${prefix}antisticker 1 / 0

Auto Sticker: ${isAutofigu ? '✓' : '✕'} 
Comando: ${prefix}autofigu 1 / 0

Auto Resposta: ${isAutorepo ? '✓' : '✕'} 
Comando: ${prefix}autorepo 1 / 0

Anti Palavrão: ${isPalavrao ? '✓' : '✕'} 
Comando: ${prefix}antipalavrao 1 / 0

Nsfw: ${isNsfw ? '✓' : '✕'} 
Comando: ${prefix}nsfw 1 / 0

`
                    conn.sendMessage(from, { image: { url: logoslink.logo }, caption: statuszada }, { quoted: info })
                    break
                //
                case 'reiniciar':
                    if (!SoDono) return
                    setTimeout(async () => {
                        reply("Reiniciando..")
                        setTimeout(async () => {
                            process.exit()
                        }, 1200)
                    }, 1000)
                    break

                //==========(Sticker-Stickers)===========\\

                case 'figfundo':
                case 'figvideo':
                case 'figusemfundo':
                case 'sfundo':
                    if ((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {
                        rafa = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
                        reply(Res_Aguarde)
                        if (IS_sistemGold) {
                            setTimeout(async () => {
                                await ConsumirGold(2, sender)
                            }, 1000)
                        }
                        buff = await getFileBuffer(rafa, 'image')
                        bas64 = `data:image/jpeg;base64,${buff.toString('base64')}`
                        anu = args.join(' ').split('|')
                        satu = anu[0] !== '' ? anu[0] : `${pushname}`
                        sd = `📍Criado por↓        ${NomeDoBot}`
                        dua = typeof anu[1] !== 'undefined' ? anu[1] : `${sd}`
                        var mantap = await convertSticker(bas64, `${dua}`, `${satu}`)
                        var sti = new Buffer.from(mantap, 'base64');
                        conn.sendMessage(from, { sticker: sti }, { quoted: info })
                    } else {
                        return reply(`So imagem mn -_-`)
                    }
                    break

                case 'rbale':
                    if (!isQuotedSticker) return reply('Marque uma figurinha...')
                    encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
                    reply(Res_Aguarde)
                    bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
                    var mantap = await convertSticker(bas64, `bot`, `lady`)
                    var sti = new Buffer.from(mantap, 'base64');
                    conn.sendMessage(from, { sticker: sti, contextInfo: { externalAdReply: { title: `Lady Bot`, body: "", previewType: "PHOTO", thumbnail: sti } } }, { quoted: info })
                        .catch((err) => {
                            reply(`❎ Erro, tenta mais tarde`);
                        })
                    break

                case 'rename':
                case 'roubar':
                    if (!isQuotedSticker) return reply('Marque uma figurinha...')
                    encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
                    var kls = q
                    var pack = kls.split("/")[0];
                    var author2 = kls.split("/")[1];
                    if (!q) return reply('*E o autor e o nome do pacote?*')
                    if (!pack) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/bla*`)
                    if (!author2) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/dms*`)
                    reply(Res_Aguarde)
                    if (IS_sistemGold) {
                        setTimeout(async () => {
                            await ConsumirGold(3, sender)
                        }, 1000)
                    }
                    bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
                    var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
                    var sti = new Buffer.from(mantap, 'base64');
                    conn.sendMessage(from, { sticker: sti, contextInfo: { externalAdReply: { title: `${pack}|${author2}`, body: "", previewType: "PHOTO", thumbnail: sti } } }, { quoted: info })
                        .catch((err) => {
                            reply(`❎ Erro, tenta mais tarde`);
                        })
                    break

                case 'fstiker':
                case 'fsticker':
                case 'f':
                    if (IS_sistemGold) {
                        setTimeout(async () => {
                            ConsumirGold(1, sender)
                        }, 1000)
                    }
                    var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
                    var boij = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
                    var boij2 = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
                    if (boij) {
                        var pack = `🐞 Feita por >:\n🐞 pelo Bot >:\n🐞 Dono(a):`
                        var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n${NickDono}`
                        reply(Res_Aguarde)
                        owgi = await getFileBuffer(boij, 'image')
                        let encmediaa = await sendImageAsSticker(conn, from, owgi, info, { packname: pack, author: author2 })
                        await DLT_FL(encmediaa)
                    } else if (boij2 && boij2?.seconds < 11) {
                        var pack = `🐞 Feita por >:\n🐞 pelo Bot >:\n🐞 Dono(a):`
                        var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n${NickDono}`
                        reply(Res_Aguarde)
                        owgi = await getFileBuffer(boij2, 'video')
                        let encmedia = await sendVideoAsSticker(conn, from, owgi, info, { packname: pack, author: author2 })
                        await DLT_FL(encmedia)
                    } else {
                        reply(`Enviar imagem / vídeo / gif com legenda \n${prefix}sticker (duração do adesivo de vídeo de 1 a 10 segundos)`)
                    }
                    break

                case 'figu':
                    if (fs.existsSync(DF_TJ)) return reply("Aguarde um momento, e realize o pedido novamente, não seja tão rápido...")
                    var DF_TJ = "./datab/data/CVF.json"
                    fs.writeFileSync(DF_TJ, JSON.stringify([isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage || isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage]))
                    var PUXJ = JSON.parse(fs.readFileSync(DF_TJ))
                    var DFN = PUXJ[0]
                    DFN.sticker = { url: DFN.url }
                    await delay(1200)
                    DLT_FL(DF_TJ)
                    conn.sendMessage(from, DFN)
                    break

                case 'st':
                case 'stk':
                case 'sticker':
                case 's':
                    if (IS_sistemGold) {
                        setTimeout(async () => {
                            ConsumirGold(1, sender)
                        }, 1000)
                    }
                    var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
                    var boij2 = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
                    var boij = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
                    if (boij2) {
                        var pack = `🐞 Feita por >:\n🐞 pelo Bot >:\n🐞 Dono(a):`
                        var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n${NickDono}`
                        reply(Res_Aguarde)
                        owgi = await getFileBuffer(boij2, 'image')
                        let encmediaa = await sendImageAsSticker2(conn, from, owgi, info, { packname: pack, author: author2 })
                        await DLT_FL(encmediaa)
                    } else if (boij && boij.seconds < 11) {
                        var pack = `🐞 Feita por >:\n🐞 pelo Bot >:\n🐞 Dono(a):`
                        var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n⚒${NickDono}`
                        reply(Res_Aguarde)
                        owgi = await getFileBuffer(boij, 'video')
                        let encmedia = await sendVideoAsSticker2(conn, from, owgi, info, { packname: pack, author: author2 })
                        await DLT_FL(encmedia)
                    } else {
                        return reply(`Marque uma imagem, ou um vídeo de ate 9.9 segundos, ou uma visualização única, para fazer figurinha, com o comando ${prefix + command}`)
                    }
                    break

                case 'toimg':
                    if (!isQuotedSticker) return reply('❌ adesivo de resposta um ❌')
                    try {
                        reply(Res_Aguarde)
                        if (IS_sistemGold) {
                            setTimeout(async () => {
                                ConsumirGold(1, sender)
                            }, 1000)
                        }
                        buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
                        conn.sendMessage(from, { image: buff }, { quoted: info }).catch(e => {
                            console.log(e);
                            reply('ERRO!!')
                        })
                    } catch {
                        reply("Erro..")
                    }
                    break

                //=============(LOGOS)=============\\



                //==========(PLAQUINHAS-LOGOS)===========\

                case 'placaloli':
                    if (!q) return reply(enviar.wrongFormat)
                    reply('Aguarde..')
                    if (IS_sistemGold) {
                        setTimeout(async () => {
                            ConsumirGold(1, sender)
                        }, 1000)
                    }
                    lod = await fetchJson(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${q}`)
                    sendStickerFromUrl(from, lod.message, enviar.success)
                    break

                //=======================================\\

                case 'substituir':
                    if (!SoDono && !isnit) return reply("Só dono..")
                    if (isMedia && !info.message.videoMessage || isQuotedDocument) {
                        media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
                        rane = getRandom('.' + await getExtension(media.mimetype))
                        doc = await getFileBuffer(media, 'document')
                        fs.writeFileSync(q, doc)
                        conn.sendMessage(from, { text: 'Substituido com sucesso..' }, { quoted: info })
                    } else {
                        reply('Marque o documento ou arquivo..')
                    }
                    break

                case 'index-bot':
                    if (!SoDono) return reply(Res_SoDono)
                    if (isMedia && !info.message.videoMessage || isQuotedDocument) {
                        media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
                        rane = getRandom('.' + await getExtension(media.mimetype))
                        doc = await getFileBuffer(media, 'document')
                        fs.writeFileSync('./index.js', doc)
                        conn.sendMessage(from, { text: 'Pronto novinha..' }, { quoted: info })
                    } else {
                        reply('Marque o documento ou o arquivo que deseja enviar pra determinar pasta ou substituir..')
                    }
                    break

                case 'bann':
                    if (!SoDono) return reply("Só usuário premium pode utilizar este comando..")
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
                    if (!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário já foi removido ou saiu do grupo.")
                    if (premium.includes(menc_os2)) return mentions(`@${menc_os2.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [menc_os2], true)
                    if (groupAdmins.includes(menc_os2)) return mentions(`@${menc_os2.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [menc_os2], true)
                    if (botNumber.includes(menc_os2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
                    if (numerodono.includes(menc_os2)) return reply('Não posso remover meu dono 🤧')
                    conn.sendMessage(from, { text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos ainda não esclarecidos) -`, mentions: [menc_os2] })
                    conn.groupParticipantsUpdate(from, [menc_os2], "remove")
                    break

                case 'nuke': case 'arquivargp':
                    if (!SoDono && !isnit) return reply("Só dono pode utilizar este comando...")
                    if (!isBotGroupAdmins) return reply(Res_BotADM)
                    if (info.key.fromMe) return
                    blup = []
                    for (i of groupMembers) {
                        if (!numerodono.includes(i.id)) blup.push(i.id)
                    }
                    blup.splice(blup.indexOf(botNumber), 1)
                    for (i = 0; i < blup.length; i++) {
                        await sleep(500)
                        conn.groupParticipantsUpdate(from, [blup[i]], 'remove')
                    }
                    break


                //======================================\\


                //===(ZOUEIRAS/BRINCADEIRAS/HUMOR)===\\

                case 'modonsfw':
                case 'nsfw':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isGroupAdmins) return reply(Res_SoAdm)
                    if (args.length < 1) return reply('Hmmmm')
                    if (Number(args[0]) === 1) {
                        if (isNsfw) return reply('O modo nsfw já está ativo')
                        nsfw.push(from)
                        fs.writeFileSync('./datab/grupos/nsfw.json', JSON.stringify(nsfw))
                        reply(`\`\`\`✓Ativado com sucesso o modo nsfw +18 no grupo\`\`\` *${groupMetadata.subject}*`)
                    } else if (Number(args[0]) === 0) {
                        if (!isNsfw) return reply('O modo nsfw já está Desativado')
                        nsfw.splice(from, 1)
                        fs.writeFileSync('./datab/grupos/nsfw.json', JSON.stringify(nsfw))
                        reply(`\`\`\`✓Modo Nsfw +18 desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
                    } else {
                        reply('1 para ativar, 0 para desligar')
                    }
                    break


                case 'chance':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
                    var avb = body.slice(7)
                    if (args.length < 1) return conn.sendMessage(from, { text: `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do luuck ser gay` }, { quoted: info })
                    random = `${Math.floor(Math.random() * 100)}`
                    hasil = `A chance ${body.slice(8)}\n\né de... ${random}%`
                    mention(hasil)
                    break

                case 'nazista':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
                    conn.sendMessage(from, { text: `❰ Pesquisando a sua ficha de nazista : @${sender_ou_n.split("@")[0]} aguarde... ❱`, mentions: [sender_ou_n] })
                    setTimeout(async () => {
                        random = `${Math.floor(Math.random() * 110)}`
                        conn.sendMessage(from, { image: { url: imgnazista }, caption: `O quanto você é nazista? \n\n「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱  nazista 卐`, mentions: [sender_ou_n] }, { quoted: info })
                    }, 7000)
                    break

                case 'gay':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
                    conn.sendMessage(from, { text: `❰ Pesquisando a sua ficha de gay : @${sender_ou_n.split("@")[0]} aguarde... ❱`, mentions: [sender_ou_n] })
                    setTimeout(async () => {
                        random = `${Math.floor(Math.random() * 110)}`
                        feio = random
                        boiola = random
                        if (boiola < 20) { var bo = 'hmm... você é hetero😔' } else if (boiola == 21) { var bo = '+/- boiola' } else if (boiola == 23) { var bo = '+/- boiola' } else if (boiola == 24) { var bo = '+/- boiola' } else if (boiola == 25) { var bo = '+/- boiola' } else if (boiola == 26) { var bo = '+/- boiola' } else if (boiola == 27) { var bo = '+/- boiola' } else if (boiola == 2) { var bo = '+/- boiola' } else if (boiola == 29) { var bo = '+/- boiola' } else if (boiola == 30) { var bo = '+/- boiola' } else if (boiola == 31) { var bo = 'tenho minha desconfiança...😑' } else if (boiola == 32) { var bo = 'tenho minha desconfiança...😑' } else if (boiola == 33) { var bo = 'tenho minha desconfiança...😑' } else if (boiola == 34) { var bo = 'tenho minha desconfiança...😑' } else if (boiola == 35) { var bo = 'tenho minha desconfiança...😑' } else if (boiola == 36) { var bo = 'tenho minha desconfiança...😑' } else if (boiola == 37) { var bo = 'tenho minha desconfiança...😑' } else if (boiola == 3) { var bo = 'tenho minha desconfiança...😑' } else if (boiola == 39) { var bo = 'tenho minha desconfiança...😑' } else if (boiola == 40) { var bo = 'tenho minha desconfiança...😑' } else if (boiola == 41) { var bo = 'você é né?😏' } else if (boiola == 42) { var bo = 'você é né?😏' } else if (boiola == 43) { var bo = 'você é né?😏' } else if (boiola == 44) { var bo = 'você é né?😏' } else if (boiola == 45) { var bo = 'você é né?😏' } else if (boiola == 46) { var bo = 'você é né?😏' } else if (boiola == 47) { var bo = 'você é né?😏' } else if (boiola == 4) { var bo = 'você é né?😏' } else if (boiola == 49) { var bo = 'você é né?😏' } else if (boiola == 50) { var bo = 'você é ou não?🧐' } else if (boiola > 51) {
                            var bo = 'você é gay🙈'
                        }
                        conn.sendMessage(from, { image: { url: imggay }, caption: `  O quanto você é gay? \n\n 「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱ gay 🏳️‍🌈\n\n${bo}`, mentions: [sender_ou_n], thumbnail: null }, { quoted: info })
                    }, 7000)
                    break

                case 'feio':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
                    conn.sendMessage(from, { text: `❰ Pesquisando a sua ficha de feio : @${sender_ou_n.split("@")[0]} aguarde... ❱`, mentions: [sender_ou_n] })
                    setTimeout(async () => {
                        random = `${Math.floor(Math.random() * 110)}`
                        feio = random
                        if (feio < 20) { var bo = 'É não é feio' } else if (feio == 21) { var bo = '+/- feio' } else if (feio == 23) { var bo = '+/- feio' } else if (feio == 24) { var bo = '+/- feio' } else if (feio == 25) { var bo = '+/- feio' } else if (feio == 26) { var bo = '+/- feio' } else if (feio == 27) { var bo = '+/- feio' } else if (feio == 2) { var bo = '+/- feio' } else if (feio == 29) { var bo = '+/- feio' } else if (feio == 30) { var bo = '+/- feio' } else if (feio == 31) { var bo = 'Ainda tá na média' } else if (feio == 32) { var bo = 'Da pra pegar umas(ns) novinha(o) ainda' } else if (feio == 33) { var bo = 'Da pra pegar umas(ns) novinha(o) ainda' } else if (feio == 34) { var bo = 'É fein, mas tem baum coração' } else if (feio == 35) { var bo = 'Tá na média, mas não deixa de ser feii' } else if (feio == 36) { var bo = 'Bonitin mas é feio com orgulho' } else if (feio == 37) { var bo = 'Feio e preguiçoso(a), vai se arrumar praga feia' } else if (feio == 3) { var bo = 'tenho ' } else if (feio == 39) { var bo = 'Feio, mas um banho E se arrumar, deve resolver' } else if (feio == 40) { var bo = 'FeiN,  mas não existe gente feia, existe gente que não conhece os produtos jequity' } else if (feio == 41) { var bo = 'você é Feio, mas é legal, continue assim' } else if (feio == 42) { var bo = 'Nada que uma maquiagem e se arrumar, que não resolva 🥴' } else if (feio == 43) { var bo = 'Feio que dói de ver, compra uma máscara que melhora' } else if (feio == 44) { var bo = 'Feio mas nada que um saco na cabeça não resolva né!?' } else if (feio == 45) { var bo = 'você é feio, mas tem bom gosto' } else if (feio == 46) { var bo = 'Feio mas tem muitos amigos' } else if (feio == 47) { var bo = 'Feio mas tem lábia pra pegar várias novinha' } else if (feio == 4) { var bo = 'Feio e ainda não sabe se vestir, vixi' } else if (feio == 49) { var bo = 'Feiooo' } else if (feio == 50) { var bo = 'você é Feio, mas não se encherga 🧐' } else if (feio > 51) { var bo = 'você é Feio demais 🙈' }

                        conn.sendMessage(from, { image: { url: imgfeio }, caption: `  O quanto você é feio? \n\n 「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱ feio 🙉\n\n${bo}`, mentions: [sender_ou_n], thumbnail: null }, { quoted: info })
                    }, 7000)
                    break

                case 'corno':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
                    conn.sendMessage(from, { text: ` ❰ Pesquisando a ficha de corno : @${sender_ou_n.split("@")[0]}, aguarde... ❱`, mentions: [sender_ou_n] })
                    setTimeout(async () => {
                        random = `${Math.floor(Math.random() * 110)}`
                        conn.sendMessage(from, { image: { url: imgcorno }, caption: ` O quanto você é corno? \n\n 「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱  corno 🐃`, mentions: [sender_ou_n] }, { quoted: info })
                    }, 7000)
                    break

                case 'vesgo':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
                    conn.sendMessage(from, { text: `❰ Pesquisando a ficha de vesgo : @${sender_ou_n.split("@")[0]}, aguarde... ❱`, mentions: [sender_ou_n] })
                    setTimeout(async () => {
                        random = `${Math.floor(Math.random() * 110)}`
                        conn.sendMessage(from, { image: { url: imgvesgo }, caption: `O quanto você é vesgo? \n\n「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱  Vesgo 🙄😆`, mentions: [sender_ou_n] }, { quoted: info })
                    }, 7000)
                    break

                case 'bebado':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
                    conn.sendMessage(from, { text: `❰ Pesquisando a ficha de bebado : @${sender_ou_n.split("@")[0]} , aguarde... ❱`, mentions: [sender_ou_n] })
                    setTimeout(async () => {
                        random = `${Math.floor(Math.random() * 110)}`
                        conn.sendMessage(from, { image: { url: imgbebado }, caption: `O quanto você é bebado? \n\n「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱ Bêbado 🤢🥵🥴`, mentions: [sender_ou_n] }, { quoted: info })
                    }, 7000)
                    break

                case 'gado':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
                    conn.sendMessage(from, { text: `❰ Pesquisando a ficha de gado : @${sender_ou_n.split("@")[0]}, aguarde... ❱`, mentions: [sender_ou_n] })
                    setTimeout(async () => {
                        random = `${Math.floor(Math.random() * 110)}`
                        conn.sendMessage(from, { image: { url: imggado }, caption: `O quanto você é gado? \n\n「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱  gado 🐂`, mentions: [sender_ou_n] }, { quoted: info })
                    }, 7000)
                    break

                case 'gostoso':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
                    conn.sendMessage(from, { text: ` ❰ Pesquisando a sua ficha de gostoso : @${sender_ou_n.split("@")[0]} aguarde... ❱`, mentions: [sender_ou_n] })
                    setTimeout(async () => {
                        random = `${Math.floor(Math.random() * 110)}`
                        conn.sendMessage(from, { image: { url: imggostoso }, caption: `O quanto você é gostoso? 😏\n\n「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱ gostoso 😝`, gifPlayback: true, mentions: [sender_ou_n] }, { quoted: info })
                    }, 7000)
                    break

                case 'gostosa':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
                    conn.sendMessage(from, { text: `❰ Pesquisando a sua ficha de gostosa : @${sender_ou_n.split("@")[0]} aguarde... ❱`, mentions: [sender_ou_n] })
                    setTimeout(async () => {
                        random = `${Math.floor(Math.random() * 110)}`
                        conn.sendMessage(from, { image: { url: imggostosa }, caption: `O quanto você é gostosa? 😏\n\n「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱ gostosa 😳`, mentions: [sender_ou_n] }, { quoted: info })
                    }, 7000)
                    break

                case 'matar':
                case 'mata':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
                    if (!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer matar, a mensagem ou o @')
                    conn.sendMessage(from, { video: { url: matarcmd }, gifPlayback: true, caption: `Você Acabou de matar o(a) @${menc_os2.split('@')[0]} 😈👹`, mentions: [menc_os2] }, { quoted: info })
                    break


                case 'beijo':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
                    if (!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer beijar, a mensagem ou o @')
                    conn.sendMessage(from, { video: { url: beijocmd }, gifPlayback: true, caption: `Você deu um beijo gostoso na(o) @${menc_os2.split('@')[0]} 😁👉👈❤`, mentions: [menc_os2] }, { quoted: info })
                    break

                case 'biografia':
                    try {
                        var status = await conn.fetchStatus(marc_tds)
                    } catch {
                        var status = "Privado ou inexistente. "
                    }
                    reply(status)
                    break

                case 'tapa':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`)
                    if (!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer da um tapa, a mensagem ou o @')
                    conn.sendMessage(from, { video: { url: tapacmd }, gifPlayback: true, caption: `Você Acabou de da um tapa na raba da😏 @${menc_os2.split('@')[0]} 🔥`, mentions: [menc_os2] }, { quoted: info })
                    break

                case 'chute':
                case 'chutar':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
                    if (!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer da um chute, a mensagem ou o @')
                    conn.sendMessage(from, { video: { url: chutecmd }, gifPlayback: true, caption: `Você Acabou de da um chute em @${menc_os2.split('@')[0]} 🤡`, mentions: [menc_os2] }, { quoted: info })
                    break

                case 'dogolpe':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
                    if (!menc_os2 || menc_jid2[1]) return reply('Marque a mensagem com o comando ou marque o @ do usuário..')
                    random = `${Math.floor(Math.random() * 100)}`
                    conn.sendMessage(from, { text: `*GOLPISTA ENCONTRADO👉🏻*\n\n*GOLPISTA* : *@${menc_os2.split("@")[0]}*\n*PORCENTAGEM DO GOLPE* : ${random}%😂\n\nEle(a) gosta de ferir sentimentos 😢`, mentions: [menc_os2] })
                    break

                case 'shipo':
                    if (!menc_jid2) return reply('Marque uma pessoa do grupo para encontrar o par dela')
                    mention(`*Hmmm.... Eu Shipo eles 2💘💘*\n\n1 = @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]}\n && 2 = ${menc_jid2.split("@")[0]} com uma porcentagem de: ${Math.floor(Math.random() * 100) + "%"}`)
                    break

                case 'casal':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`)
                    mention(`*Hmmm.... Eu Shipo eles 2💘💘*\n\n1= @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]}\ne esse\n2= @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]}\ncom uma porcentagem de: ${Math.floor(Math.random() * 100) + "%"}`)
                    break

                case 'ranklevel':
                case 'rankpatente':
                    var i3 = countMessage.map(i => i.groupId).indexOf(from)
                    var blue = countMessage[i3].numbers.map(i => i)
                    blue.sort((a, b) => ((a.figus == undefined ? a.figus = 0 : a.figus + a.messages + a.cmd_messages + a.figus) < (b.figus == undefined ? b.figus = 0 : b.figus + b.cmd_messages + b.messages + b.figus)) ? 0 : -1)
                    menc = []
                    blad = `
┌───────────────┐
│  RANK DE LEVEL & PATENTES\n`
                    for (i = 0; i < (blue.length < 5 ? blue.length : 5); i++) {
                        var i5 = patentes.map(i => i.grupoID).indexOf(from)
                        var i6 = patentes[i5].usus.map(i => i.id).indexOf(blue[i].id)
                        if (i != null) blad += `
┌───────────────
│ ${i + 1}º : @${blue[i].id.split('@')[0]}
└─────
   ༶ Level: ${patentes[i5].usus[i6].level_usu}\n   ༶ Patente: ${patentes[i5].usus[i6].patente_usu}\n   ༶ Conectado em: ${blue[i].aparelho}\n└────────────\n`
                        menc.push(blue[i].id)
                    }
                    mentions(blad, menc, true)
                    break

                case 'rankativos':
                case 'rankativo':
                    if (!isGroup) return reply(Res_SoGrupo)
                    await LIMPARDOCNT_QUEMJASAIU()
                    var i3 = countMessage.map(i => i.groupId).indexOf(from)
                    var blue = countMessage[i3].numbers.map(i => i)
                    blue.sort((a, b) => ((a.figus == undefined ? a.figus = 0 : a.figus + a.messages + a.cmd_messages) < (b.figus == undefined ? b.figus = 0 : b.figus + b.cmd_messages + b.messages)) ? 0 : -1)
                    menc = []
                    blad = `
┌────────────────┐
│ RANK DE MAIS ATIVOS DO GRUPO\n`
                    for (i = 0; i < (blue.length < 5 ? blue.length : 5); i++) {
                        var i5 = patentes.map(i => i.grupoID).indexOf(from)
                        var i6 = patentes[i5].usus.map(i => i.id).indexOf(blue[i].id)
                        if (i != null) blad += `
┌───────────────
│ ${i + 1}º : @${blue[i].id.split('@')[0]}
└─────
   ༶ Mensagens: ${blue[i].messages}\n   ༶ Comandos dados: ${blue[i].cmd_messages}${i6 < 0 ? "" : `\n   ༶ Patente: ${patentes[i5].usus[i6].patente_usu}`}\n   ༶ Conectado em: ${blue[i].aparelho}\n   ༶ Figurinhas: ${blue[i].figus}\n└────────────\n`
                        menc.push(blue[i].id)
                    }
                    mentions(blad, menc, true)
                    break

                case 'checkativo':
                    if (!isGroup) return reply(Res_SoGrupo)
                    await LIMPARDOCNT_QUEMJASAIU()
                    if (groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
                    var ind = groupIdscount.indexOf(from)
                    if (!menc_os2 || menc_jid2[1]) return reply('Marque o @ de quem deseja puxar a atividade / Só pode um por vez..')
                    if (numbersIds.indexOf(menc_os2) >= 0) {
                        var indnum = numbersIds.indexOf(menc_os2)
                        var RSM_CN = countMessage[ind].numbers[indnum]
                        mentions(`𖣘⃟ᗒ Consulta das atividade de\n𖣘⃟ᗒ @${menc_os2.split('@')[0]} no grupo: ${groupName}\n𖣘⃟ᗒ Mensagens: ${RSM_CN.messages}\n𖣘⃟ᗒ Comandos dados: ${RSM_CN.cmd_messages}\n𖣘⃟ᗒ Conectado em: ${RSM_CN.aparelho}\n𖣘⃟   Figurinhas: ${RSM_CN.figus}`, [menc_os2], true)
                    } else {
                        mentions(`⋆⃟ۣۜ᭪➣ Consulta da atividade de ⋆⃟ۣۜ᭪➣ @${menc_os2.split('@')[0]} no grupo\n⋆⃟ۣۜ᭪➣ Mensagens: 0\n⋆⃟ۣۜ᭪➣ Comandos dados: 0`, [menc_os2], true)
                    }
                    break

                case 'rankgay': case 'rankgays':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isModobn) return reply(Res_SoModoBN)
                    ABC = `*🤖RANK DOS 5 MAIS GAYS DO GRUPO [ ${groupName} ]🏳‍🌈*\n\n`
                    for (var i = 0; i < 5; i++) {
                        ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
                    }
                    mencionarIMG(ABC, rnkgay)
                    break;

                case 'rankgado': case 'rankgados':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isModobn) return reply(Res_SoModoBN)
                    ABC = `RANK DOS 5 MAIS GADO DO GRUPO 🐂🐃\n\n`
                    for (var i = 0; i < 5; i++) {
                        ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
                    }
                    mencionarIMG(ABC, rnkgado);
                    break;

                case 'rankcorno': case 'rankcornos':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isModobn) return reply(Res_SoModoBN)
                    ABC = `RANK DOS 5 MAIS CORNO DO GRUPO 🐂\n\n`
                    for (var i = 0; i < 5; i++) {
                        ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
                    }
                    mencionarIMG(ABC, rnkcorno);
                    break;

                case 'rankgostosos': case 'rankgostoso':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isModobn) return reply(Res_SoModoBN)
                    ABC = `RANK DOS 5 MAIS GOSTOSOS DO GRUPO 😏🔥\n\n`
                    for (var i = 0; i < 5; i++) {
                        ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
                    }
                    mencionarIMG(ABC, rnkgostoso);
                    break;

                case 'rankgostosas': case 'rankgostosa':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isModobn) return reply(Res_SoModoBN)
                    ABC = `RANK DAS 5 MAIS GOSTOSAS DO GRUPO 😏🔥\n\n`
                    for (var i = 0; i < 5; i++) {
                        ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
                    }
                    mencionarIMG(ABC, rnkgostosa);
                    break;

                case 'ranknazista': case 'ranknazistas':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isModobn) return reply(Res_SoModoBN)
                    ABC = `*💂‍♂RANK DOS 5 MAIS NAZISTAS DO GRUPO 卐🤡*\n\n`
                    for (var i = 0; i < 5; i++) {
                        ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
                    }
                    mencionarIMG(ABC, rnknazista);
                    break;

                case 'rankotaku': case 'rankotakus':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isModobn) return reply(Res_SoModoBN)
                    ABC = `*㊙ RANK DOS 5 MAIS OTAKU DO GRUPO ( ˶•̀ _•́ ˶)*\n\n`
                    for (var i = 0; i < 5; i++) {
                        ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
                    }
                    mencionarIMG(ABC, rnkotaku);
                    break;

                case 'rankpau':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!isModobn) return reply(Res_SoModoBN)
                    ABC = `*RANK DOS 5 PAU MAIOR DO GRUPO 📏*\n\n`
                    TMPAU = ["Pequeno pra cact, se mata maluco 🥴", `Pequenininho chega ser até fofo 🥺`, `Menor que meu dedo mindinho pequeno demais 😑`, `Até que dá sentir, tá na média 😌`, `Grandinho 🥵`, `Grande até `, `Gigantesco igual meu braço 😖`, `Enorme quase chega no útero 🤧`, `Grandão demais em, e uii 🤯`, `Vara de pegar manga, grande demais, como sai na rua assim??`, "Que grandão em, nasceu metade animal 😳"]
                    for (var i = 0; i < 5; i++) {
                        ABC += `${TMPAU[Math.floor(Math.random() * TMPAU.length)]} _- @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
                    }
                    mencionarIMG(ABC, rnkpau);
                    break;

                case 'jogodavelha':
                    if (!isGroup) return reply(Res_SoGrupo)
                    if (!menc_jid2) return reply("Marque junto com o comando, o @ do usuário que deseja desafiar..")
                    if (JOGO_D_V != false) {
                        const boardnow = setGame(`${from}`);
                        const matrix = boardnow._matrix;
                        const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
     
[❗] Alguém está jogando no momento...\n\n@${boardnow.X} VS @${boardnow.O}
     
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
     
 Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}

caso queira resetar o jogo, mande um adm ou os jogadores que estão jogando utilizar o comando ${prefix}rv
`;
                        mention(chatMove);
                        return;
                    }
                    if (q.length === 1) return reply(`*⟅❗⟆ Jogue com Alguem!!!!*
*para inicar a partida : ${prefix + command} @membro do gp*`);
                    const boardnow = setGame(`${from}`);
                    console.log(`Start No jogodavelha ${boardnow.session}`);
                    boardnow.status = false;
                    boardnow.X = sender.replace(SNET, "");
                    boardnow.O = argss[1].replace("@", "");
                    var blabord = [`${boardnow.X}`, `${boardnow.O}`]
                    fs.writeFileSync(`./armor/tictactoe/db/${from}.json`,
                        JSON.stringify(boardnow, null, 2)
                    );
                    const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*
     
@${sender.replace(SNET,
                        "")} _está te desafiando para uma partida de jogo da velha..._
_[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para não aceitar..._\n\nEm caso de problemas, marque algum administrador para resetar o jogo com o comando ${prefix}rv`;
                    b = [sender, menc_jid]
                    mentions(strChat, b, true)
                    break

                case 'resetarvelha':
                case 'resetavelha':
                case 'resetarv':
                case 'resetav':
                case 'resetvelha':
                case 'rv':
                    if (!sender.includes(JOGO_D_V?.X) && !sender.includes(JOGO_D_V?.O) && !isGroupAdmins) return reply(`Fale com algum dos jogadores que jogaram ou espere eles terminar para
você jogar, se não tiver nenhum dos 2 online, fale com algum adm para digitar ${prefix}rv para resetar o jogo.`)
                    if (fs.existsSync("./armor/tictactoe/db/" + from + ".json")) {
                        DLT_FL("./armor/tictactoe/db/" + from + ".json");
                        reply(`Jogo da velha resetado com sucesso nesse grupo!`);
                    } else {
                        reply(`Não a nenhuma sessão em andamento...`);
                    }
                    break

                case "ppt":
                    if (args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
                    ppt = ["pedra", "papel", "tesoura"]
                    ppy = ppt[Math.floor(Math.random() * ppt.length)]
                    ppg = Math.floor(Math.random() * 1) + 10
                    pptb = ppy
                    if ((pptb == "pedra" && args == "papel") ||
                        (pptb == "papel" && args == "tesoura") ||
                        (pptb == "tesoura" && args == "pedra")) {
                        var vit = "vitoria"
                    } else if ((pptb == "pedra" && args == "tesoura") ||
                        (pptb == "papel" && args == "pedra") ||
                        (pptb == "tesoura" && args == "papel")) {
                        var vit = "derrota"
                    } else if ((pptb == "pedra" && args == "pedra") ||
                        (pptb == "papel" && args == "papel") ||
                        (pptb == "tesoura" && args == "tesoura")) {
                        var vit = "empate"
                    } else if (vit = "undefined") {
                        return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
                    }
                    if (vit == "vitoria") {
                        var tes = "Vitória do jogador"
                    }
                    if (vit == "derrota") {
                        var tes = "A vitória é do BOT"
                    }
                    if (vit == "empate") {
                        var tes = "O jogo terminou em empate"
                    }
                    reply(`${NomeDoBot} jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
                    break

                case 'cassino':
                    const soto = [
                        '🍊 : 🍒 : 🍐',
                        '🍒 : 🔔 : 🍊',
                        '🍇 : 🍇 : 🍇',
                        '🍊 : 🍋 : 🔔',
                        '🔔 : 🍒 : 🍐',
                        '🔔 : 🍒 : 🍊',
                        '🍊 : 🍋 : ??',
                        '🍐 : 🍒 : 🍋',
                        '🍐 : 🍐 : 🍐',
                        '🍊 : 🍒 : 🍒',
                        '🔔 : 🔔 : 🍇',
                        '🍌 : 🍒 : 🔔',
                        '🍐 : 🔔 : 🔔',
                        '🍊 : 🍋 : 🍒',
                        '🍋 : 🍋 : 🍌',
                        '🔔 : 🔔 : 🍇',
                        '🔔 : 🍐 : 🍇',
                        '🔔 : 🔔 : 🔔',
                        '🍒 : 🍒 : 🍒',
                        '🍌 : 🍌 : 🍌'
                    ]

                    const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
                    if ((somtoy2 == '🥑 : 🥑 : 🥑') || (somtoy2 == '🍉 : 🍉 : 🍉') || (somtoy2 == '🍓 : 🍓 : 🍓') || (somtoy2 == '🍎 : 🍎 : 🍎') || (somtoy2 == '🍍 : 🍍 : 🍍') || (somtoy2 == '🥝 : 🥝 : 🥝') || (somtoy2 == '🍑 : 🍑 : 🍑') || (somtoy2 == '🥥 : 🥥 : 🥥') || (somtoy2 == '🍋 : 🍋 : 🍋') || (somtoy2 == '🍐 : 🍐 : 🍐') || (somtoy2 == '🍌 : 🍌 : 🍌') || (somtoy2 == '🍒 : 🍒 : 🍒') || (somtoy2 == '🔔 : 🔔 : 🔔') || (somtoy2 == '🍊 : 🍊 : 🍊') || (somtoy2 == '🍇 : 🍇 : 🍇')) {
                        var Vitória = "Você ganhou!!!"
                    } else {
                        var Vitória = "Você perdeu..."
                    }

                    const cassino = `
┏━━━━❪🎰❫━━━━
┣► ${somtoy2}◄┛
┗━━━━❪💰❫━━━━

*${Vitória}*`
                    conn.sendMessage(from, { text: cassino }, { quoted: info })
                    break

                //==(AUDIOS/DE-MUSICA/ZOUEIRA/ETC..)===\\

                case 'bot':
                    const soundft = fs.readFileSync('datab/audios/qviado.mp3')
                    conn.sendMessage(from, { audio: soundft, mimetype: 'audio/mpeg', ptt: true }, { quoted: info })
                    break

                case 'infobot':
                    const cmdoo = fs.readFileSync('datab/audios/infobot.mp3')
                    conn.sendMessage(from, { audio: cmdoo, mimetype: 'audio/mpeg', ptt: true }, { quoted: info })
                    break

                //=======================================\\


                //=====(ALTERADOR-DE-AUDIO/VIDEO)=======\\

                case 'videocontrario':
                case 'reversevid':
                    if ((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
                        reply(Res_Aguarde)
                        encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
                        rane = getRandom('.' + await getExtension(encmedia.mimetype))
                        buffimg = await getFileBuffer(encmedia, 'video')
                        fs.writeFileSync(rane, buffimg)
                        media = rane
                        ran = getRandom('.mp4')
                        exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
                            DLT_FL(media)
                            if (err) return reply(`Err: ${err}`)
                            buffer453 = fs.readFileSync(ran)
                            conn.sendMessage(from, { video: buffer453, mimetype: 'video/mp4' }, { quoted: info })
                            DLT_FL(ran)
                        })
                    } else {
                        reply("Marque um vídeo..")
                    }
                    break

                case 'videolento':
                case 'slowvid':
                    if ((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
                        reply(Res_Aguarde)
                        encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
                        rane = getRandom('.' + await getExtension(encmedia.mimetype))
                        buffimg = await getFileBuffer(encmedia, 'video')
                        fs.writeFileSync(rane, buffimg)
                        media = rane
                        ran = getRandom('.mp4')
                        exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
                            DLT_FL(media)
                            if (err) return reply(`Err: ${err}`)
                            buffer453 = fs.readFileSync(ran)
                            conn.sendMessage(from, { video: buffer453, mimetype: 'video/mp4' }, { quoted: info })
                            DLT_FL(ran)
                        })
                    } else {
                        reply("Marque um vídeo..")
                    }
                    break

                case 'videorapido':
                case 'fastvid':
                    if ((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
                        reply(Res_Aguarde)
                        encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
                        rane = getRandom('.' + await getExtension(encmedia.mimetype))
                        buffimg = await getFileBuffer(encmedia, 'video')
                        fs.writeFileSync(rane, buffimg)
                        media = rane
                        ran = getRandom('.mp4')
                        exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
                            DLT_FL(media)
                            if (err) return reply(`Err: ${err}`)
                            buffer453 = fs.readFileSync(ran)
                            conn.sendMessage(from, { video: buffer453, mimetype: 'video/mp4' }, { quoted: info })
                            DLT_FL(ran)
                        })
                    } else {
                        reply("Marque o vídeo..")
                    }
                    break

                case 'audiocontrario':
                case 'audioreverse':
                    if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
                        reply(Res_Aguarde)
                        encmedia = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
                        rane = getRandom('.' + await getExtension(encmedia.mimetype))
                        buffimg = await getFileBuffer(encmedia, 'audio')
                        fs.writeFileSync(rane, buffimg)
                        media = rane
                        ran = getRandom('.mp3')
                        exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
                            DLT_FL(media)
                            if (err) return reply(`Err: ${err}`)
                            buffer453 = fs.readFileSync(ran)
                            conn.sendMessage(from, { audio: buffer453, mimetype: 'audio/mpeg' }, { quoted: info })
                            DLT_FL(ran)
                        })
                    } else {
                        reply("Marque um audio..")
                    }
                    break

                case 'grave2':
                    if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
                        reply(Res_Aguarde)
                        muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
                        rane = getRandom('.' + await getExtension(muk.mimetype))
                        buffimg = await getFileBuffer(muk, 'audio')
                        fs.writeFileSync(rane, buffimg)
                        gem = rane
                        ran = getRandom('.mp3')
                        exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
                            DLT_FL(gem)
                            if (err) return reply('Erro!')
                            hah = fs.readFileSync(ran)
                            conn.sendMessage(from, { audio: hah, mimetype: 'audio/mpeg', ptt: true }, { quoted: info })
                            DLT_FL(ran)
                        })
                    } else {
                        reply("Marque o áudio..")
                    }
                    break

                case 'grave':
                    if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
                        reply(Res_Aguarde)
                        muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
                        rane = getRandom('.' + await getExtension(muk.mimetype))
                        buffimg = await getFileBuffer(muk, 'audio')
                        fs.writeFileSync(rane, buffimg)
                        gem = rane
                        ran = getRandom('.mp3')
                        exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
                            DLT_FL(gem)
                            if (err) return reply('Erro!')
                            hah = fs.readFileSync(ran)
                            conn.sendMessage(from, { audio: hah, mimetype: 'audio/mpeg', ptt: true }, { quoted: info })
                            DLT_FL(ran)
                        })
                    } else {
                        reply("Marque o áudio..")
                    }
                    break

                case 'adolesc':
                case 'vozmenino':
                    if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
                        reply(Res_Aguarde)
                        muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
                        rane = getRandom('.' + await getExtension(muk.mimetype))
                        buffimg = await getFileBuffer(muk, 'audio')
                        fs.writeFileSync(rane, buffimg)
                        gem = rane
                        ran = getRandom('.mp3')
                        exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
                            DLT_FL(gem)
                            if (err) return reply('Erro!')
                            hah = fs.readFileSync(ran)
                            conn.sendMessage(from, { audio: hah, mimetype: 'audio/mpeg', ptt: true }, { quoted: info })
                            DLT_FL(ran)
                        })
                    } else {
                        reply("Marque o áudio..")
                    }
                    break

                case 'tomp3':
                    if ((isMedia && !info.message.imageMessage || isQuotedVideo)) {
                        post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.videoMessage
                        reply(Res_Aguarde)
                        encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
                        rane = getRandom('.' + await getExtension(encmedia.mimetype))
                        buffimg = await getFileBuffer(encmedia, 'video')
                        fs.writeFileSync(rane, buffimg)
                        media = rane
                        ran = getRandom('.mp4')
                        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                            DLT_FL(media)
                            if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
                            buffer = fs.readFileSync(ran)
                            conn.sendMessage(from, { audio: buffer, mimetype: 'audio/mpeg' }, { quoted: info })
                            DLT_FL(ran)
                        })
                    } else {
                        reply("Marque o vídeo para transformar em áudio por favor..")
                    }
                    break

                case 'bass3':
                    if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
                        reply(Res_Aguarde)
                        muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
                        rane = getRandom('.' + await getExtension(muk.mimetype))
                        buffimg = await getFileBuffer(muk, 'audio')
                        fs.writeFileSync(rane, buffimg)
                        gem = rane
                        ran = getRandom('.mp3')
                        exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
                            DLT_FL(gem)
                            if (err) return reply('Erro!')
                            hah = fs.readFileSync(ran)
                            conn.sendMessage(from, { audio: hah, mimetype: 'audio/mpeg', ptt: true }, { quoted: info })
                            DLT_FL(ran)
                        })
                    } else {
                        reply("Marque o áudio..")
                    }
                    break

                case 'bass':
                    if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
                        reply(Res_Aguarde)
                        muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
                        rane = getRandom('.' + await getExtension(muk.mimetype))
                        buffimg = await getFileBuffer(muk, 'audio')
                        fs.writeFileSync(rane, buffimg)
                        gem = rane
                        ran = getRandom('.mp3')
                        exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
                            DLT_FL(gem)
                            if (err) return reply('Erro!')
                            hah = fs.readFileSync(ran)
                            conn.sendMessage(from, { audio: hah, mimetype: 'audio/mpeg', ptt: true }, { quoted: info })
                            DLT_FL(ran)
                        })
                    } else {
                        reply("Marque o áudio..")
                    }
                    break

                case 'bass2':
                    if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
                        reply(Res_Aguarde)
                        muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
                        rane = getRandom('.' + await getExtension(muk.mimetype))
                        buffimg = await getFileBuffer(muk, 'audio')
                        fs.writeFileSync(rane, buffimg)
                        gem = rane
                        ran = getRandom('.mp3')
                        exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
                            DLT_FL(gem)
                            if (err) return reply('Erro!')
                            hah = fs.readFileSync(ran)
                            conn.sendMessage(from, { audio: hah, mimetype: 'audio/mpeg', ptt: true }, { quoted: info })
                            DLT_FL(ran)
                        })
                    } else {
                        reply("Marque o áudio..")
                    }
                    break

                case 'estourar':
                    if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
                        reply(Res_Aguarde)
                        muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
                        rane = getRandom('.' + await getExtension(muk.mimetype))
                        buffimg = await getFileBuffer(muk, 'audio')
                        fs.writeFileSync(rane, buffimg)
                        gem = rane
                        ran = getRandom('.mp3')
                        exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
                            DLT_FL(gem)
                            if (err) return reply('Erro!')
                            hah = fs.readFileSync(ran)
                            conn.sendMessage(from, { audio: hah, mimetype: 'audio/mpeg', ptt: true }, { quoted: info })
                            DLT_FL(ran)
                        })
                    } else {
                        reply("Marque o áudio..")
                    }
                    break

                case 'fast':
                case 'audiorapido':
                    if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
                        reply(Res_Aguarde)
                        muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
                        rane = getRandom('.' + await getExtension(muk.mimetype))
                        buffimg = await getFileBuffer(muk, 'audio')
                        fs.writeFileSync(rane, buffimg)
                        gem = rane
                        ran = getRandom('.mp3')
                        exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
                            DLT_FL(gem)
                            if (err) return reply('Erro')
                            hah = fs.readFileSync(ran)
                            conn.sendMessage(from, { audio: hah, mimetype: 'audio/mpeg', ptt: true }, { quoted: info })
                            DLT_FL(ran)
                        })
                    } else {
                        reply("Marque o áudio...")
                    }
                    break

                case 'esquilo':
                    if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
                        reply(Res_Aguarde)
                        muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
                        rane = getRandom('.' + await getExtension(muk.mimetype))
                        buffimg = await getFileBuffer(muk, 'audio')
                        fs.writeFileSync(rane, buffimg)
                        gem = rane
                        ran = getRandom('.mp3')
                        exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
                            DLT_FL(gem)
                            if (err) return reply('Erro!')
                            hah = fs.readFileSync(ran)
                            conn.sendMessage(from, { audio: hah, mimetype: 'audio/mpeg', ptt: true }, { quoted: info })
                            DLT_FL(ran)
                        })
                    } else {
                        reply("Marque o áudio...")
                    }
                    break

                case 'audiolento':
                case 'slow':
                    if ((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
                        reply(Res_Aguarde)
                        muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
                        rane = getRandom('.' + await getExtension(muk.mimetype))
                        buffimg = await getFileBuffer(muk, 'audio')
                        fs.writeFileSync(rane, buffimg)
                        gem = rane
                        ran = getRandom('.mp3')
                        exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
                            DLT_FL(gem)
                            if (err) return reply('Erro!')
                            hah = fs.readFileSync(ran)
                            conn.sendMessage(from, { audio: hah, mimetype: 'audio/mpeg', ptt: true }, { quoted: info })
                            DLT_FL(ran)
                        })
                    } else {
                        reply("Marque o áudio..")
                    }
                    break

                //==========(EFEITOS-MARCAR)==========\\

                case 'togif':
                    if (!isQuotedSticker) return reply('*[ ❗ ] Marque a figurinha animada!*')
                    try {
                        if ((isMedia && !info.message.videoMessage || isQuotedSticker) && !q.length <= 1) {
                            buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
                            reply('*「 ❗ 」 Aguarde, convertendo a figu em gif...*')
                            if (IS_sistemGold) {
                                setTimeout(async () => {
                                    ConsumirGold(1, sender)
                                }, 1000)
                            }
                            a = await webp_mp4(buff)
                            conn.sendMessage(from, { video: { url: a }, gifPlayback: true, fileName: `stick.gif` }, { quoted: info }).catch(e => {
                                reply("Erro..")
                            })
                            DLT_FL(buff)
                        }
                    } catch {
                        reply("Erro..")
                    }
                    break


                case 'convite':
                    if (!budy.includes("chat.whatsapp.com")) return reply("Cadê o link do grupo que você deseja que eu entre?")
                    cnvt = args.join(" ")
                    reply(`O convite para o bot entrar em seu grupo, foi enviado, espere o dono aceitar..`)
                    await sleep(1000)
                    reply(`Use ${prefix}entrar cnvt ou ${prefix}recusar ${sender}, alguem enviou convite para entrar no grupo dele.`)
                    break

                case 'recusar':
                    if (!SoDono) return reply(Res_SoDono)
                    conn.sendMessage(q, { text: `Olá Amigo(a), sinto muito dizer, mas seu convite foi recusado 🥺` })
                    break

                case 'join': case 'entrar':
                    if (!SoDono) return reply(Res_SoDono)
                    string = args.join(' ')
                    if (!string) return reply('Insira um link de convite ao lado do comando.')
                    if (string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.')) {
                        link = string.split('app.com/')[1]
                        try {
                            conn.groupAcceptInvite(`${link}`)
                        } catch (erro) {
                            if (String(erro).includes('resource-limit')) {
                                reply('O grupo já está com o alcance de 257 membros.')
                            }
                            if (String(erro).includes('not-authorized')) {
                                reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
                            }
                        }
                    }
                    break
                //=======(FIM-EFEITOS-MARCAR)=========\\

                default:

                    if (isGroup && isBotGroupAdmins && !isGroupAdmins) {
                        if (isAntiCtt || Antiloc || isAnticatalogo) {
                            if (type === 'contactMessage' || type === 'contactsArrayMessage' || type === 'locationMessage' || type === 'productMessage') {
                                if (isGroupAdmins) return conn.sendMessage(from, { text: `Uma dessas opções estão ativada, mas por você ser ADM, não será removido(a) _(ANTI CONTATO - ANTI CATALOGO - ANTI LOCALIZAÇÃO)` }, { quoted: info })
                                if (IS_DELETE) {
                                    setTimeout(() => {
                                        conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } })
                                    }, 500)
                                }
                                if (!JSON.stringify(groupMembers).includes(sender)) return
                                conn.groupParticipantsUpdate(from, [sender], 'remove')
                                clear = `🗑${"\n".repeat(255)}🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
                                conn.sendMessage(from, { text: clear, contextInfo: { forwardingScore: 500, isForwarded: true } })
                                conn.sendMessage(from, { text: 'reporte aos adm o ocorrido ', mentions: groupAdmins })
                            }
                        }
                    }

                    if (isGroup && isAntiFlood && !SoDono && !isnit && isBotGroupAdmins && !isGroupAdmins && !isBot) {
                        if (isLimitec == null) {
                            var limitefl = limitefll.limitefl
                        } else {
                            var limitefl = isLimitec
                        }
                        if (budy.length >= limitefl) {
                            setTimeout(() => {
                                return conn.sendMessage(from, { text: 'Muitas Caracteres enviadas, isto é contra as normas do grupo, por precaução, eu irei remover.' })
                                console.log(colors.red('Deram Spam de caracteres..'))
                            }, 100)
                            setTimeout(async () => {
                                if (IS_DELETE) {
                                    setTimeout(() => {
                                        conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } })
                                    }, 500)
                                }
                                if (!JSON.stringify(groupMembers).includes(sender)) return
                                conn.groupParticipantsUpdate(from, [sender], 'remove')
                            }, 1000)
                        }
                    }

                    //INICIO DE COMANDOS SEM PREFIXO
                    switch (testat) {
                    }

                    const EnvAudio_SMP = async (direcao, nome1, nome2, nome3, nome4, nome5) => {
                        bla = [nome1, nome2, nome3, nome4, nome5]
                        for (i of bla) {
                            if (i == undefined) return
                            if (messagesC.includes(i)) {
                                conn.sendMessage(from, { audio: { url: direcao }, mimetype: "audio/mpeg", ptt: true })
                            }
                        }
                    }

                    const EnvAudio2_SMP = async (direcao, nome1, nome2, nome3, nome4, nome5) => {
                        bla = [nome1, nome2, nome3, nome4, nome5]
                        for (i of bla) {
                            if (i == undefined) return
                            if (messagesC.includes(i)) {
                                conn.sendMessage(from, { audio: { url: direcao }, mimetype: "audio/mpeg", ptt: true })
                            }
                        }
                    }

                    const EnvTXT_SMP = async (texto, nome1, nome2, nome3, nome4, nome5) => {
                        bla = [nome1, nome2, nome3, nome4, nome5]
                        for (i of bla) {
                            if (i == undefined) return
                            if (messagesC.includes(i)) {
                                conn.sendMessage(from, { text: texto })
                            }
                        }
                    }

                    const EnvAudio2_GTTS = async (lingua, texto, txt1, txt2, txt3, txt4, txt5) => {
                        bla = [txt1, txt2, txt3, txt4, txt5]
                        for (i of bla) {
                            if (i == undefined) return
                            if (budy2.includes(i)) {
                                var gtt = require('./armor/funcoes/gtts')(lingua)
                                ranm = getRandom('.mp3')
                                rano = getRandom('.ogg')
                                gtt.save(ranm, texto, function () {
                                    exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                                        DLT_FL(ranm)
                                        buffer = fs.readFileSync(rano)
                                        conn.sendMessage(from, { audio: buffer, ptt: true }, { quoted: info })
                                        DLT_FL(rano)
                                    })
                                })
                            }
                        }
                    }

                    var hora_sla = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

                    EnvAudio2_GTTS("pt", `São ${hora_sla} da ${tempo.split(" ")[1]}`, "que horas sao?")

                    EnvTXT_SMP(prefix, "prefixo")

                    if (isAutorepo) {

                        if (budy2 === "bot") {
                            blars = ["oi delícia", "oi amor da minha vida", "oi princesa do meu coração"]
                            blarnd = blars[Math.floor(Math.random() * blars.length)]
                            reply(blarnd)
                        }

                        if (budy2.includes("bot corno")) {
                            if (info.key.fromMe) return
                            reply("Corno é você, seu animal")
                        }

                        if (budy2.includes("adivinha meu celular") || budy2.includes("bot qual meu celular")) {
                            conn.sendMessage(from, { text: adivinha }, { quoted: info })
                        }

                        EnvAudio2_SMP("./datab/audios/corno.mp3", "corno")

                    }

                    if (messagesC.includes('exec')) {
                        if (!SoDono && !isnit && !issupre && !ischyt) return
                        try {
                            paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;
                            return eval(`${paramsQuoted}`)
                            console.log(`[EXEC]~> ${paramsQuoted}`)
                        } catch (e) {
                            reply(e)
                        }
                    }

                    //==============(ANTILINK)===============\\

                    switch (ants) {
                    }

                    //=========[--ANTI PALAVRÃO --]==========\\
                    if (isGroup && isPalavrao && isBotGroupAdmins && !SoDono && !isGroupAdmins) {
                        if (dataGp[0].antipalavrao.palavras.some(i => budy2.includes(i.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))) {
                            setTimeout(() => {
                                if (!JSON.stringify(groupMembers).includes(sender)) return
                                conn.groupParticipantsUpdate(from, [sender], 'remove')
                                setTimeout(() => {
                                    conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } })
                                }, 500)
                            }, 2000)
                            conn.sendMessage(from, { text: `*「 - REMOVIDO POR UTILIZAR UMA PALAVRA PROIBIDA - 」*\nVocê será banido do gp, Na proxima veja as regras ao digitar qualquer palavra..!!` })
                        }
                    }

                    //===============(SIMIH-1)===============\\

                    //========================================\\

                    hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

                    if (isCmd) {
                        uptime = process.uptime()
                        client.sendMessage(from, { react: { text: `❌️`, key: info.key } })
                    }
                //========================================\\
            }
        }
    }

}

module.exports = ladyonline;