const {
 default: makeWASocket,
  DisconnectReason,
  fetchLatestBaileysVersion,
  useSingleFileAuthState
 } = require('@adiwajshing/baileys');

 require("qrcode-terminal");
 const moment = require("moment-timezone")
 const pino = require('pino');
 const Pino = require('pino');
 const fs = require('fs');
 const axios = require("axios")
const { state, saveState } = useSingleFileAuthState("./qrcode.json")
const prefix = "."
// 𝐂𝐨𝐧𝐬𝐨𝐥𝐞 / 𝐓𝐞𝐫𝐦𝐮𝐱
const banner = "syx bot | power by m7"
async function startBot () {
console.log(banner)
const m7 = makeWASocket({
logger: pino({ level: "silent" }),printQRInTerminal: true,auth: state})
m7.ev.on("connection.update", (update) => {
const { connection, lastDisconnect } = update
if(connection === "close") {
const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
console.log("Conexão fechada devido a", lastDisconnect.error, "Tentando reconectar...", shouldReconnect)
if(shouldReconnect) {
startBot()}
} else if(connection === "open") {
console.log("foda-se a estética, o bagulho funcionando ta bom demais, bot on")
}})
const { fetchJson } = require("./fetcher")

// 𝐋𝐢𝐧𝐠𝐮𝐚𝐠𝐞𝐧 𝐃𝐨 𝐁𝐨𝐭

m7.ev.on("messages.upsert", async m => {
try {
const info = m.messages[0]
// await m7.sendReadReceipt(info.key.remoteJid, info.key.participant, [info.key.id]) baileys antiga
if (!info.key.participant) info.key.participant = info.key.remoteJid
info.key.participant = info.key.participant.replace(/:[0-9]+/gi, "")
if (!info.message) return
const from = info.key.remoteJid
const type = Object.keys(info.message).find((key) => !['senderKeyDistributionMessage', 'messageContextInfo'].includes(key))

// 🄰🄻🅃🄾 🅁🄴🅂🄿🄾🄽🄳🄴🅁 🄳🄾 🄱🄾🅃

const body = (type === 'conversation' &&
info.message.conversation.startsWith(prefix)) ?
info.message.conversation: (type == 'imageMessage') &&
info.message[type].caption.startsWith(prefix) ?
info.message[type].caption: (type == 'videoMessage') &&
info.message[type].caption.startsWith(prefix) ?
info.message[type].caption: (type == 'extendedTextMessage') &&
info.message[type].text.startsWith(prefix) ?
info.message[type].text: (type == 'listResponseMessage') &&
info.message[type].singleSelectReply.selectedRowId ?
info.message.listResponseMessage.singleSelectReply.selectedRowId: (type == 'templateButtonReplyMessage') ?
info.message.templateButtonReplyMessage.selectedId: (type === 'messageContextInfo') ?
info.message[type].singleSelectReply.selectedRowId: (type == 'm7.sendMessageButtonMessage') &&
info.message[type].selectedButtonId ?
info.message[type].selectedButtonId: (type == 'stickerMessage') && ((info.message[type].fileSha256.toString('base64')) !== null && (info.message[type].fileSha256.toString('base64')) !== undefined) ? (info.message[type].fileSha256.toString('base64')): ""
budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

// Bady
bady = (type === "conversation") ? info.message.conversation : (type == "imageMessage") ? info.message.imageMessage.caption : (type == "videoMessage") ? info.message.videoMessage.caption : (type == "extendedTextMessage") ? info.message.extendedTextMessage.text : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectenviar.selectedRowId) ? info.message.listResponseMessage.singleSelectenviar.selectedRowId: ""

// Budy
budy = (type === "conversation") ? info.message.conversation : (type === "extendedTextMessage") ? info.message.extendedTextMessage.text : ""

//===

button = (type == "buttonsResponseMessage") ? info.message.buttonsResponseMessage.selectedDisplayText : ""
button = (type == "buttonsResponseMessage") ? info.message.buttonsResponseMessage.selectedButtonId : ""
listMessage = (type == "listResponseMessage") ? info.message.listResponseMessage.title : ""

var pes = (type === "conversation" && info.message.conversation) ? info.message.conversation : (type == "imageMessage") && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == "videoMessage") && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == "extendedTextMessage") && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ""
function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}
// 𝐎𝐮𝐭𝐫𝐚𝐬 𝐅𝐮𝐧𝐜𝐨𝐞𝐬
// const isGroup = from.endsWith('@g.us')
const getGroupAdmins = (participants) => {
admins = []
for (let i of participants) {i.isAdmin ? admins.push(i.jid):''}
return admins}
const itsMe = m.sender == m7.user.id ? true : false
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.m || quoted).mimetype || ''
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss') 
const data = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))}
const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const isCmd = body.startsWith(prefix)
const enviar = (texto) => {
m7.sendMessage(from, { text: texto }, {quoted: info})}

// 𝐋𝐢𝐧𝐠𝐮𝐚𝐠𝐞𝐧 𝐃𝐞 𝐆𝐫𝐮𝐩𝐨
// const isAntiLink =  antilink.includes(from)
const botNumber = m7.user.jid
const isGroup = info.key.remoteJid.endsWith("@g.us")
const sender = isGroup ? info.key.participant : info.key.remoteJid
const groupMetadata = isGroup ? await m7.groupMetadata(from) : ""
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isGroupAdmins = groupAdmins.includes(sender) || false
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const groupName = isGroup ? groupMetadata.subject : ""
const pushname = info.pushName ? info.pushName : ""


const content = JSON.stringify(info.message)

const getFileBuffer = async (mediakey, MediaType) => { 
const stream = await downloadContentFromMessage(mediakey, MediaType)

let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? m7.sendMessage(from, {text: teks.trim(), mentions: memberr}) : m7.sendMessage(from, {text: teks.trim(), mentions: memberr})
}

const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()


// 𝐂𝐨𝐦𝐚𝐧𝐝𝐨 𝐍𝐨 𝐏𝐫𝐢𝐯𝐚𝐝𝐨

if (!isGroup && isCmd){ console.log("------\ncomando no pv : \n")
  console.log('nome:', pushname, "\n")
  console.log('comando:', comando, "\n")
}

// 𝐌𝐞𝐧𝐬𝐚𝐠𝐞𝐧 𝐍𝐨 𝐏𝐫𝐢𝐯𝐚𝐝𝐨

if (!isCmd && !isGroup){
  console.log("Mensagem no privado, mlk mo burro nem sabe que eu sou um bot \n")
  console.log('nome:', pushname, '\n')
  console.log('mensagem:', budy, "\n")
}

// 𝐂𝐨𝐦𝐚𝐧𝐝𝐨 𝐄𝐦 𝐆𝐫𝐮𝐩𝐨

if (isCmd && isGroup) {
  console.log("------\ncomando em grupo \n")
  console.log('nome do grupo:', groupName, '\n')
  console.log('comando:', comando, "\n")
}

// 𝐌𝐞𝐧𝐬𝐚𝐠𝐞𝐧 𝐄𝐦 𝐆𝐫𝐮𝐩𝐨

if (!isCmd && isGroup){
  console.log("--------\n mensagem em grupo \n")
  console.log('nome do grupo:', groupName, '\n')
  console.log("nome do user: ", pushname, "\n")
  console.log('mensagem:', budy, "\n")
}
function chatMd(usR, tipo){
  if (!isGroup){
    return enviar("Não e um grupo")
  }
  usR = `${usR}@s.whatsapp.net`
  if (args.length == 0){
    return enviar("Função incompleta! Verifique o comando!")
  }
  
  if (isGroupAdmins){
    if (tipo == "remove"){
  return m7.groupParticipantsUpdate(from, [usR], "remove")}
  else if (tipo == "add"){
    return m7.groupParticipantsUpdate(from, [usR], "add")
  }}
  else {
   return enviar("Só meu dono pode!")
  }
  
  
  
}
switch (comando)
{
case 'sla':
  return enviar("se você não sabe, imagine eu")
break
case 'menu':
await m7.sendMessage(from, {text: "Aguarde..."})
templateButtons = [


{ quickReplyButton: { displayText: 'Menu dono', id: `${prefix}menudono`}},
]
var templateMessage = {
  image: {url: './logo.png'},
  caption: `
┌───────────────
│
╠〢「 © syxBot 」
│Ele demora um pouco no .play, não flodem
|comandos!
|Bot esta com a maioria dos comandos off, estou
|refazendo eles
|
└───────────────
┌───────────────
|HORA: ${hora}
|PREFIXO: ${prefix}
└───────────────
┌───────────────
╠〢「 PESQUISAR/BAIXAR 」
│
│🚩${prefix}play
│🚩${prefix}playdocument
│🚩${prefix}play2
│🚩${prefix}ytsearch
│
└───────────────
┌───────────────
╠〢「 CMDS/TODOS 」
│
│🚩${prefix}dono
│🚩${prefix}ping
│🚩${prefix}fazernick
│🚩${prefix}imgpralink
│🚩${prefix}menulist
│🚩${prefix}dono
│🚩${prefix}ban
│🚩${prefix}add
│🚩${prefix}encurtar
└───────────────`,
footer: 'syxBot',
templateButtons: templateButtons
}
m7.sendMessage(from, templateMessage)
break
case 'ban':
  chatMd(args, "remove")
break
case 'add':
  chatMd(args, "add")
break
case 'pingg':
case 'ping':
const varping = speed();
const ping = speed() - varping
const timestamp = speed();
uptime = process.uptime()
const latensi = speed() - timestamp
uptime = process.uptime()
m7.sendMessage(from, {text: `┌───────────────┐\n│ Velocidade Do Bot + Informações \n│ \n│ Velocidade : ${latensi.toFixed(4)}\n│ \n┌─────────────┐\n│ Tempo Ativo : \n│ [ ${kyun(uptime)} ] \n└───────────\n│ \n│ Data : ${data}\n│ \n│ Solicitou Comando : ${pushname}\n│ \n└─────────〔 ${hora} 〕`, footer: `© syx-bot`, templateButtons: [ { quickReplyButton: { displayText: 'Ver PING Denovo', id: `${prefix}ping`}}, ]})
break

case 'dono':
enviar("NICK: M7 \n WA.ME: wa.me/5511981458247")

case 'play':
  await enviar("aguarde")
  if (args.lenght == 0){
    enviar("cade a merda do nome da música? n sou adivinho.")
  }
  
const { url } = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/yt/playmp3?query=${args}&apikey=apiteam`).catch(err => enviar('Ocorreu um erro!'));
await m7.sendMessage(from, {audio: {url: url }, mimetype: 'audio/mp4'}, {quoted: info});
enviar("ta ai fdp")
break;
case 'encurtar':
  if (args.length == 0){
    return enviar("cadê o link?")
  }
  const {status, resultado} = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/short/tiny?url=${args}`);
  if (status == true){
    return enviar(`Link encurtado: ${resultado.link}`)
  }
  else{
    return enviar("Erro desconhecido, contate o desenvolvedor do bot! ")
  }
break

default :


}
}
catch(e) {
  console.log(e)
}})}
startBot()