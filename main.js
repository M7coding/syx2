const {
 default:makeWASocket,
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
console.log("SyxBot On✓")
}})
const { fetchJson } = require("./fetcher")
const admins = JSON.parse(fs.readFileSync("./admins.json"))
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
const{ getBuffer, getExtension, getRandom, upload } = require("./upload")
// 𝐎𝐮𝐭𝐫𝐚𝐬 𝐅𝐮𝐧𝐜𝐨𝐞𝐬
// const isGroup = from.endsWith('@g.us')
const getGroupAdmins = (participants) => {
  admins = [];
  for (let i of participants) {
   i.isAdmin ? admins.push(i.jid): '';
  }
  return admins;
 };
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

// const groupDesc = isGroup ? groupMetadata.desc : ''

const groupAdmins = isGroup ? await groupMembers.filter(v => v.admin !== null).map(v => v.id): '';
const isGroupAdmins = isGroup ? groupAdmins.includes(sender): false;

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
const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")

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
  else if (tipo == "promote"){
    return m7.groupParticipantsUpdate(from, [usR], "promote")}
  else if (tipo == "demote"){
    return m7.groupParticipantsUpdate(from, [usR], "demote")
  }
  else if (tipo == "add"){
    return m7.groupParticipantsUpdate(from, [usR], "add")
  }}
  else {
   return enviar("Somente os adms podem usar esse comando!")
  }
  
  
  
}
switch (comando)
{
case 'banfake':
 var userUm = groupMembers[0]
 if (!userUm.split('@')[0].startsWith(55)){
   await enviar("Não pode número fake no gp!")
   return m7.groupParticipantsUpdate(from, [userUm], "remove")
 }
 else {
   return enviar("Nenhum fake que entrou agora para eu remover!")
 }
case "marcar":
  if (!isGroup){
    return enviar("Não e um grupo")
  }
  
  if (!isGroupAdmins){
    return enviar("Somente os adms podem usar isso!")
  }
  members_id = []

  jrp = (args.length > 1) ? body.slice(8).trim() : ''

  jrp += '\n\n'
  for (let mem of groupMembers) {
  jrp += `*⪧* @${mem.jid.split('@')[0]}\n`
  members_id.push(mem.jid)
  } await sleep (5000)
  mentions(jrp, members_id, true)
break
  
case "clear":
case "limpar":
  if (!isGroup) {
    return enviar("Não e um grupo!")
  }
  if (!isGroupAdmins){
    return enviar("Você tem que ser admin para usar isso!")
  }
m7.sendMessage(from, {text: "Chat limpo!\n\n\n\\\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nChat limpo!"})
break
case 'sla':
  return enviar("se você não sabe, imagine eu")
break
case 'demote':
case 'tiraradm':
  chatMd(args, "demote")
  enviar("que triste mano, virou membro comum")
break
case 'promote':
case 'promover':
  chatMd(args, "promote")
  enviar("Usuário promovido a administrador")
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
│🚩${prefix}ytsearch
│
└───────────────
┌───────────────
╠〢「 CMDS/TODOS 」
│
│🚩${prefix}dono
│🚩${prefix}ping [MANUTENÇÃO]
│🚩${prefix}fazernick [TO SEM API]
│🚩${prefix}imgpralink [EM DESENVOLVIMENTO]
│🚩${prefix}dono
│🚩${prefix}ban
│🚩${prefix}add
│🚩${prefix}encurtar
│🚩${prefix}limpar
│🚩${prefix}demote @
│🚩${prefix}promote @
│🚩${prefix}grupo f - fecha o grupo
│🚩${prefix}grupo a - abre o grupo
│🚩${prefix}banfake - use isso quando um número fake tiver entrado no grupo 
└───────────────`,
footer: 'syxBot',
templateButtons: templateButtons
}
m7.sendMessage(from, templateMessage)
break
case 'ban':
  chatMd(args, "remove")
  enviar("Usuário removido ")
break
case 'add':
  chatMd(args, "add")
  enviar("Usuário adicionado!")
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
break
case 'imgpralink':    
try {
if (isQuotedImage) {
enviar("aguarde")
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace("quotedM","m")).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, "image")
res = await upload(owgi)
m7.sendMessage(from, {text: res})
} else {
enviar("[❗️] Marque uma imagem")
}
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break
case 'play':
  await enviar("aguarde")
  if (args.lenght == 0){
   return enviar("cade o nome da música? n sou adivinho.")
  }
  
const { url } = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/yt/playmp3?query=${args}&apikey=apiteam`).catch(err => enviar('Ocorreu um erro!'));
await m7.sendMessage(from, {audio: {url: url }, mimetype: 'audio/mp4'}, {quoted: info});

break;
case 'grupo':
  if (!isGroup){
    return enviar("Não e um grupo!")
  }
  if (!isGroupAdmins){
    return enviar("Você não e um administrador!")
  }
  // if (!isBotGroupAdmins){
  //  return enviar("O bot não e admin")
 // }
  if (args.lenght == 0){
    return enviar("A = aberto / F = fechado")
  }
  if (args == "a"){
    await m7.groupSettingUpdate(from, 'not_announcement')
    return enviar("Grupo aberto!")
  }
  if (args == "f"){
    await m7.groupSettingUpdate(from, 'announcement')
    return enviar("Grupo fechado com sucesso!")
  }
  return enviar("Erro desconhecido!")
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

if (budy == `${prefix}${comando}`){
  
m7.sendMessage(from, {text: `╭─────────────\n│\n││• Comando: Não Existe\n││• Data: ${data}\n││• Hora: ${hora}\n││• Use .menu\n│\n╰─────────────`, footer: `© syx-bot`, templateButtons: [ { quickReplyButton: { displayText: '━━━━━━━━━━━━━━━', id: `${prefix}menu`}}, ]})
}
}
}
catch(e) {
  console.log(e)
}})}
startBot()
