
const { 
"default": makeWASocket,
downloadContentFromMessage, 
fetchLatestBaileysVersion, 
useMultiFileAuthState, 
makeInMemoryStore, 
DisconnectReason,
WAGroupMetadata,
relayWAMessage,	
MediaPathMap, 
mentionedJid, 
processTime,	
MediaType, 
Browser, 
MessageType, 
Presence, 
Mimetype, 
Browsers, 
delay, 
MessageRetryMap
} = require("@whiskeysockets/baileys");

// MÓDULOS ABAIXO.. 

const { Boom }  = require("@hapi/boom");

const axios = require("axios");

const fs = require("fs-extra");

const cheerio = require("cheerio");

const crypto = require("crypto");

const util = require("util");

const P = require("pino");

const NodeCache = require("node-cache");

const linkfy = require("linkifyjs");

const request = require("request");

const ms = require("ms");

const ffmpeg = require("fluent-ffmpeg");

const fetch = require("node-fetch");

const qrterminal = require("qrcode-terminal");

const { exec, spawn, execSync } = require("child_process");

const moment = require("moment-timezone");

const colors = require("colors");

const time = moment.tz("America/Sao_Paulo").format("HH:mm:ss");

const hora = moment.tz("America/Sao_Paulo").format("HH:mm:ss");

const date = moment.tz("America/Sao_Paulo").format("DD/MM/YY");

// FUNÇÕES ABAIXO... 

const webp_mp4 = require("./armor/js/webp_mp4.js");

const { sendVideoAsSticker, sendImageAsSticker } = require("./armor/sticker/rename.js");

const { sendVideoAsSticker2, sendImageAsSticker2 } = require("./armor/sticker/rename2.js");

const { addLimit, getLimit } = require("./armor/js/limit.js");

const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("./armor/js/banned.js");

const { validmove, setGame } = require("./armor/tictactoe");

const { addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos } =  require("./armor/js/addcmd.js");

const { wait, getExtension, generateMessageID, getMembros, getGroupAdmins, getRandom, banner, banner2, banner3, temporizador, chyt, getBuffer, fetchJson, fetchText, createExif, getBase64, convertSticker, nit, getpc, supre, recognize, FormData } = require("./armor/funcoes/functions.js"); // FUNÇÕES NESCESSARIAS PRA FUNFAR ALGUMAS COISAS

// JSON FUNÇÕES ABAIXO CONSTS >

const rg_aluguel = JSON.parse(fs.readFileSync("./armor/json/rg_aluguel.json"));

const rgp = JSON.parse(fs.readFileSync("./armor/json/TMGP.json"));

const sotoy = JSON.parse(fs.readFileSync("./armor/json/sotoy.json"));

try {
var countMessage = JSON.parse(fs.readFileSync("./armor/countmsg.json"));
} catch {
fs.writeFileSync("./armor/countmsg.json", JSON.stringify([]));
}

const comandos = JSON.parse(fs.readFileSync("./armor/comandos.json"));

const daily = JSON.parse(fs.readFileSync("./datab/usuarios/diario.json"));

const nescessario = JSON.parse(fs.readFileSync("./dono/nescessario.json"));

const premium = JSON.parse(fs.readFileSync("./armor/premium.json"));

const ban = JSON.parse(fs.readFileSync("./datab/usuarios/banned.json"));

const limitefll = JSON.parse(fs.readFileSync("./datab/usuarios/flood.json"));

const patentes = JSON.parse(fs.readFileSync("./armor/patentes.json"));

const antispam = JSON.parse(fs.readFileSync("./dono/media/antispam.json"));

const rggold = JSON.parse(fs.readFileSync("./armor/json/golds.json"));

const anotar = JSON.parse(fs.readFileSync("./armor/json/anotar.json"));

const setting = JSON.parse(fs.readFileSync("./dono.json"));

const logoslink = JSON.parse(fs.readFileSync("./armor/logos.json"));

const black_ = JSON.parse(fs.readFileSync("./datab/grupos/AVISOS.json"));

//\\

// JS DE MENUS / INFORMAÇÕES DE UTILIZAR \

const { menu, adms, menudono, menulogos, menuprem, brincadeiras, efeitos, alteradores } = require("./dono/menus/menus.js");

const { infobemvindo, infobancarac, infolistanegra, infopalavrao, infocontador, infosorteio, tabela, cmd_termux, infoduelo, idiomagtts, infotransmitir, infoaluguel, anotacao } = require("./dono/infos/infos_global.js");

const { infodono } = require("./dono/menus/infodono.js");

const { gitdobot } = require("./dono/gitdobot.js");

const { configbot } = require("./dono/menus/configurar.js");

const { conselhob } = require("./armor/js/conselhob.js");

const { palavrasc } = require("./armor/js/conselhos.js");

//\\

// PEGAR LINK DA IMAGEM
function upload(midia) {
return new Promise(async (resolve, reject) => {
try {
const { fromBuffer } = require("file-type");
const { ext } = await fromBuffer(midia);
const form = new FormData();
form.append("file", midia, "tmp." + ext);
fetch("https://telegra.ph/upload", {
method: "POST",
body: form
}).then((response) => response.json())
.then((data) => {
resolve("https://telegra.ph" + data[0].src);
}).catch((error) => reject(error));
} catch (error) {
console.log(error);
reject(error);
}
});
}


// DELETAR ARQUIVO..
function DLT_FL(file) {
try {
fs.unlinkSync(file);
} catch (error) {
}
}

// CONVERTER BYTES EM KB / MB / GB / TB
const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
if(bytes == 0) {
return "n/a";
}
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
if(i == 0) {
return bytes + " " + sizes[i];
}
return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i];
};

// ANTI NOME MODIFICADA / EMOJI
function ANT_LTR_MD_EMJ(str) {
for (let i = 0, n = str.length; i < n; i++) {
if(str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}

// Transformar segundos em hora/minutos
function kyun(seconds){
function pad(s){
return (s < 10 ? "0" : "") + s;
}
var dias = Math.floor(seconds / (60*60) / (24));
var horas = Math.floor(seconds / (60*60) % (24));
var minutos = Math.floor(seconds % (60*60) / 60);
var segundos = Math.floor(seconds % 60);
return `${pad(dias)} Dia(s) ${pad(horas)} Hora(s) ${pad(minutos)} Minuto(s) ${pad(segundos)} Segundo(s)`;
}

// FUNÇÃO DO BAILES PRA PUXAR MÍDIA ENVIADA, E EXECUTAR AÇÃO..
const getFileBuffer = async (mediakey, MediaType) => {
  
const stream = await downloadContentFromMessage(mediakey, MediaType);

let buffer = Buffer.from([]);
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
return buffer;
};

// Tudo abaixo await sleep(1000) vai demorar 1 segundo pra funcionar, 1000 é igual 1 segundo..
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms));
};

// ENVIAR FIGU EM URL
const enviarfiguUrl = async (conn, from, link, mr) => {
ranp = getRandom(".gif");
rano = getRandom(".webp");
ini_buffer = `${link}`;
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
DLT_FL(ranp);
buff = fs.readFileSync(rano);
conn.sendMessage(from, {sticker: buff}, {quoted: mr}).catch(() => {
return console.log("Erro..");
});
DLT_FL(rano);
});
};

const comand = (conn, info, prefix, isGroup, Res_SoGrupo, sender, pushname, command, reply, args, from, mentions, Res_SoAdm, Res_BotADM, isGroupAdmins, isBotGroupAdmins, upsert) => {

async function comandos_que_nao_usa_muito() {

switch(command) {

}

}

comandos_que_nao_usa_muito().catch(e => {
console.log(e+" - CSFJ")
})

}

// INTELIGENCIA-ARTIFICIAL
const simih = async (text) => {
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: "POST",
headers: {"content-type": "application/x-www-form-urlencoded"},
body: "text="+text+"&lc=pt"})
if(datasimi.message == "Required parameter is not present") return
return datasimi.message
} catch (e){
return
}}

module.exports = {
  
// MÓDULOS ABAIXO >
  
P, fs, util, Boom, axios, linkfy, request, ms, ffmpeg, fetch, 
qrterminal, exec, spawn, 
execSync, limitefll, moment, time, hora, date, 

// FUNÇÕES JS ABAIXO >
comand, getBuffer, convertSticker, fetchJson, 
fetchText, getBase64, createExif, addLimit, 
getLimit, upload, nit, 
addBanned, unBanned, BannedExpired, 
cekBannedUser, validmove, setGame, 
addComandosId, deleteComandos, getComandoBlock, 
getComandos, addComandos, getpc, supre, wait, 
getExtension, generateMessageID, getGroupAdmins, 
getMembros, getRandom, banner, banner2, banner3,
temporizador, chyt, webp_mp4, simih,

// JSON FUNÇÕES ABAIXO >
patentes, rggold, antispam, anotar, sotoy, countMessage, comandos, daily, 
nescessario, premium, ban, black_, rgp, rg_aluguel,

// JSON JUNÇÕES DE ATIconst / DESATIconst 
setting, logoslink,

// JS DE MENUS, INFORMAÇÕES DE UTILIZAR COMANDOS \\

menu, infosorteio, infoaluguel, idiomagtts, infotransmitir, anotacao, menudono, adms, menulogos, 
efeitos, menuprem, brincadeiras, 
infocontador, infobemvindo, infolistanegra, 
infopalavrao, infobancarac, infodono, gitdobot, 
configbot, cmd_termux, infoduelo, alteradores, tabela, conselhob, palavrasc, 
recognize, colors, cheerio, NodeCache,
// FUNÇÃO... 

kyun, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2,sendImageAsSticker2, enviarfiguUrl, getFileBuffer, DLT_FL, sleep, ANT_LTR_MD_EMJ, convertBytes
}