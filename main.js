// syxbot by m7 
// fiz no meu tempo livre ent ta uma bosta 
const {
 default:makeWASocket,
  DconnectReason,
  fetchLatestBaileysVersion,
  useSingleFileAuthState
 } = require('@adiwajshing/baileys');

 require("qrcode-terminal");
 const moment = require("moment-timezone")
 const pino = require('pino');
 const Pino = require('pino');
 const fs = require('fs');
 const axios = require("axios")
 const cfonts = require("cfonts")
const { state, saveState } = useSingleFileAuthState("./qrcode.json")
const prefix = "."

var cor = ['red','cyan','blue','white','green','yellow','magenta']
cores = cor[Math.floor(Math.random() * cor.length)]

var bases = ['BOT','SYX','SYXV2']
nomes = bases[Math.floor(Math.random() * bases.length)]

var fontes = ['simple','block','shade','pallet','slick']
fonts = fontes[Math.floor(Math.random() * fontes.length)]


const banner = cfonts.render((`${nomes}|Md`), {
font : `${fonts}`,
align: "center",
colors: [`${cores}`,`green`]
})
async function startBot () {
console.log(banner.string)
const m7 = makeWASocket({
logger: pino({ level: "silent" }),printQRInTerminal: true,auth: state})
m7.ev.on("connection.update", (update) => {
const { connection, lastDconnect } = update
if(connection === "close") {
const shouldReconnect = (lastDconnect.error)?.output?.statusCode !== DconnectReason.loggedOut
console.log("Conexão fechada devido a", lastDconnect.error, "Tentando reconectar...", shouldReconnect)
if(shouldReconnect) {
startBot()}
} else if(connection === "open") {
console.log("Conectado")
}})
const { fetchJson } = require("./fetcher")


m7.ev.on("messages.upsert", async m => {
try {
const info = m.messages[0]
// await m7.sendReadReceipt(info.key.remoteJid, info.key.participant, [info.key.id]) baileys antiga
if (!info.key.participant) info.key.participant = info.key.remoteJid
info.key.participant = info.key.participant.replace(/:[0-9]+/gi, "")
if (!info.message) return
const from = info.key.remoteJid
const type = Object.keys(info.message).find((key) => !['senderKeyDtributionMessage', 'messageContextInfo'].includes(key))



const body = (type === 'conversation' &&
info.message.conversation.startsWith(prefix)) ?
info.message.conversation: (type == 'imageMessage') &&
info.message[type].caption.startsWith(prefix) ?
info.message[type].caption: (type == 'videoMessage') &&
info.message[type].caption.startsWith(prefix) ?
info.message[type].caption: (type == 'extendedTextMessage') &&
info.message[type].text.startsWith(prefix) ?
info.message[type].text: (type == 'ltResponseMessage') &&
info.message[type].singleSelectReply.selectedRowId ?
info.message.ltResponseMessage.singleSelectReply.selectedRowId: (type == 'templateButtonReplyMessage') ?
info.message.templateButtonReplyMessage.selectedId: (type === 'messageContextInfo') ?
info.message[type].singleSelectReply.selectedRowId: (type == 'm7.sendMessageButtonMessage') &&
info.message[type].selectedButtonId ?
info.message[type].selectedButtonId: (type == 'stickerMessage') && ((info.message[type].fileSha256.toString('base64')) !== null && (info.message[type].fileSha256.toString('base64')) !== undefined) ? (info.message[type].fileSha256.toString('base64')): ""
budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

// Bady
bady = (type === "conversation") ? info.message.conversation : (type == "imageMessage") ? info.message.imageMessage.caption : (type == "videoMessage") ? info.message.videoMessage.caption : (type == "extendedTextMessage") ? info.message.extendedTextMessage.text : (info.message.ltResponseMessage && info.message.ltResponseMessage.singleSelectenviar.selectedRowId) ? info.message.ltResponseMessage.singleSelectenviar.selectedRowId: ""

// Budy
budy = (type === "conversation") ? info.message.conversation : (type === "extendedTextMessage") ? info.message.extendedTextMessage.text : ""

//===

button = (type == "buttonsResponseMessage") ? info.message.buttonsResponseMessage.selectedDplayText : ""
button = (type == "buttonsResponseMessage") ? info.message.buttonsResponseMessage.selectedButtonId : ""
ltMessage = (type == "ltResponseMessage") ? info.message.ltResponseMessage.title : ""

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
// const Group = from.endsWith('@g.us')
const getGroupAdmins = (participants) => {
  admins = [];
  for (let i of participants) {
   i.Admin ? admins.push(i.jid): '';
  }
  return admins;
 };
const itsMe = m.sender == m7.user.id ? true : false
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.m || quoted).mimetype || ''
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss') 
const data2 = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
const sleep = async (ms) => {
return new Prome(resolve => setTimeout(resolve, ms))}
const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const Cmd = body.startsWith(prefix)
const enviar = (texto) => {
m7.sendMessage(from, { text: texto }, {quoted: info})}


// const AntiLink =  antilink.includes(from)
const botNumber = m7.user.jid
const Group = info.key.remoteJid.endsWith("@g.us")
const sender = Group ? info.key.participant : info.key.remoteJid
const groupMetadata = Group ? await m7.groupMetadata(from) : ""

const groupMembers = Group ? groupMetadata.participants : ''

// const groupDesc = Group ? groupMetadata.desc : ''

const groupAdmins = Group ? await groupMembers.filter(v => v.admin !== null).map(v => v.id): '';
const GroupAdmins = Group ? groupAdmins.includes(sender): false;

const BotGroupAdmins = groupAdmins.includes(botNumber) || false
const groupName = Group ? groupMetadata.subject : ""
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

if (!Group && Cmd){ console.log(`\n -> COMANDO NO PV: NOME DO USUÁRIO:${pushname} COMANDO: ${comando} `)
}

// 𝐌𝐞𝐧𝐬𝐚𝐠𝐞𝐧 𝐍𝐨 𝐏𝐫𝐢𝐯𝐚𝐝𝐨

if (!Cmd && !Group){
  console.log(`\n -> MENSAGEM NO PV: NOME DO USUÁRIO:${pushname} MENSAGEM: ${budy} `)
}

// 𝐂𝐨𝐦𝐚𝐧𝐝𝐨 𝐄𝐦 𝐆𝐫𝐮𝐩𝐨

if (Cmd && Group) {
  console.log(`\n -> COMANDO EM GRUPO: NOME DO USUÁRIO:${pushname} COMANDO: ${comando} `)
}

// 𝐌𝐞𝐧𝐬𝐚𝐠𝐞𝐧 𝐄𝐦 𝐆𝐫𝐮𝐩𝐨

if (!Cmd && Group){
  console.log(`\n -> MENSAGEM EM GRUPO: NOME DO GRUPO:${groupName} MENSAGEM: ${budy} `)
}
const QuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
const QuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
const QuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const QuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const QuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const QuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const QuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const QuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const QuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")

function chatMd(usR, tipo){
  
  usR = `${usR}@s.whatsapp.net`
  if (args.length == 0){
    return enviar("Função incompleta! Verifique o comando!")
  }
  
  if (GroupAdmins){
    if (tipo == "add2"){
      return m7.groupParticipantsUpdate("120363045266984374@g.us", [usR], "add")
    }
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
m7.ev.on('group-participants.update', async (anu) => {
console.log(anu)
try {
let metadata = await m7.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
memb = metadata.participants.length
try {
ppimg = await m7.profilePictureUrl(`${sender.split("@")[0]}@c.us`, "image")
} catch(e) {
ppimg = logo
}
perfil = await getBuffer(ppimg)

if (anu.action == 'add') {
m7.sendMessage(anu.id, { image: perfil, caption: `oi @${num.split('@')[0]}\nBem vindo(a) 𝘢𝘰 𝘨𝘳𝘶𝘱𝘰 :\n*${metadata.subject}*\n  segue as regras, prefixo do bot e .` })
} else if (anu.action == 'remove') {
m7.sendMessage(anu.id, { image: perfil, caption: ` Ol∆ Galer∆ do Grp:\n*${metadata.subject}*\n\nMembro: @${num.split('@')[0]}\n\nSaiu do Grp ou foi Banido.` })}
}} catch (err) {
console.log(err)
}
})
const selo = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": `SyxBot`,"title": "M7 lindo" }}}
  
  const selo2 = { key: { participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'dplayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;M7,;;;\nFN:M7,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': {url: `./logo.png`},sendEphemeral: true}}}
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
  if (!Group){
    return enviar("Não e um grupo")
  }
  
  if (!GroupAdmins){
    return enviar("Somente os adms podem usar so!")
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
  if (!Group) {
    return enviar("Não e um grupo!")
  }
  if (!GroupAdmins){
    return enviar("Você tem que ser admin para usar so!")
  }
m7.sendMessage(from, {text: "Chat limpo!\n\n\n\\\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nChat limpo!"})
break
case 'sla':
  return enviar("se você não sabe, imagine eu")
break
case 'demote':
case 'tiraradm':
  chatMd(args, "demote")
  enviar("que trte mano, virou membro comum")
break

case 'promote':
case 'promover':
  chatMd(args, "promote")
  enviar("Usuário promovido a admintrador")
break
case 'menu':
await m7.sendMessage(from, {text: "Aguarde..."}, {quoted: selo})
var gay = await getBuffer(`https://ayu-team.herokuapp.com/api/canvas/menu?nome=${pushname}&perfil=https://ayu-team.herokuapp.com/img/ayu.jpg&fundo=https://telegra.ph/file/14c9a6ce9c4e3e43a8ee1.jpg&cor1=ffea00&cor2=ffea00&numero=${sender.split('@')[0]}&titulo=MENU&apikey=Wv4HkHb5jY`)
templateButtons = [


{ quickReplyButton: { dplayText: 'Menu dono', id: `${prefix}menudono`}},
]
var templateMessage = {
  image: gay,
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
╠〢「 PESQUAR/BAIXAR 」
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
│🚩${prefix}ban @
│🚩${prefix}add @
│🚩${prefix}encurtar
│🚩${prefix}limpar
│🚩${prefix}pornhub
│🚩${prefix}demote @
│🚩${prefix}promote @
│🚩${prefix}grupo f - fecha o grupo
│🚩${prefix}grupo a - abre o grupo
│🚩${prefix}banfake - use so quando um número
|🚩fake tiver entrado no grupo 
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
case "pornhub":
  if (args.length == 0){
    return enviar("Erro")
  }
  await enviar("aguarde")
  var sla = await getBuffer(`https://ayu-team.herokuapp.com/api/textpro/pornhub?nome=${args}&nome2=hub&apikey=Wv4HkHb5jY`)
  
 return m7.sendMessage(from, {image: sla}, {quoted: selo2})
break
case 'pingg':
case 'ping':
const varping = speed();
const ping = speed() - varping
const timestamp = speed();
uptime = process.uptime()
const latensi = speed() - timestamp
uptime = process.uptime()
m7.sendMessage(from, {text: `┌───────────────┐\n│ Velocidade Do Bot + Informações \n│ \n│ Velocidade : ${latensi.toFixed(4)}\n│ \n┌─────────────┐\n│ Tempo Ativo : \n│ [ ${kyun(uptime)} ] \n└───────────\n│ \n│ Data : │ \n│ Solicitou Comando : ${pushname}\n│ \n└─────────〔 ${hora} 〕`, footer: `© syx-bot`, templateButtons: [ { quickReplyButton: { dplayText: 'Ver PING Denovo', id: `${prefix}ping`}}, ]})
break
case 'id':
  var groupMembers2 = await groupMembers 
  console.log(groupMembers2)
  console.log(from)
  m7.sendMessage(groupMembers[5][args], {text: "Olá, quer entrar na minha team privada de hacking e programação? se sim, mande mensagem para: wa.me/5511981458247"})
  
break
case "menudono":
  if (sender == "5511981458247@s.whatsapp.net"){return enviar("se e mt gay, n fez nada ainda aq")}
  else {
    return enviar("para de ser gay, so o meu dono pode fz so!")
  }
break
case 'dono':
m7.sendMessage(from, {image: "./logo.png"}, {caption: 
`
Username: M7
Github: https://github.com/M7coding
Repositório do SyxBot: https://github.com/M7coding/syx2
`}, {quoted: selo})
break
//saporra n ta funcionando 
case 'imgpralink':    
try {
if (QuotedImage) {
enviar("aguarde")
boij = QuotedImage || QuotedVideo ? JSON.parse(JSON.stringify(info).replace("quotedM","m")).message.extendedTextMessage.contextInfo.message.imageMessage : info
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
case 'playaudio':
  await enviar("aguarde")
  var {url, titulo, canal, thumb, data, views} = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/yt/playmp3?query=${args}&apikey=apiteam`).catch(err => enviar('Ocorreu um erro!'));
  var teste = await fetchJson(`https://ayu-team.herokuapp.com/api/dl/play?nome=${titulo}&apikey=Wv4HkHb5jY`)
  await m7.sendMessage(from, {audio: {url: teste.resultado.link }, mimetype: 'audio/mp4'}, {ptt: true}, {quoted: selo});
break
case 'play':
  await enviar("aguarde")
  if (args.lenght == 0){
   return enviar("cade o nome da música? n sou adivinho.")
  }

  var {url, titulo, canal, thumb, data, views} = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/yt/playmp3?query=${args}&apikey=apiteam`).catch(err => enviar('Ocorreu um erro!'));
  var teste = await fetchJson(`https://ayu-team.herokuapp.com/api/dl/play?nome=${args}&apikey=Wv4HkHb5jY`)
  var foto21 = await getBuffer(`${thumb}`)
  templateButtons =[
    { quickReplyButton: { dplayText: 'Audio', id: `${prefix}playaudio ${args}`}},
    {quickReplyButton: { dplayText: 'Video', id: `${prefix}playvideo ${args}`}}
    ]
  templateMessage = {
    image: foto21,
    caption: `
Titulo: ${titulo}
Canal: ${canal}
Data de upload: ${data}
Vualizações: ${views}
    `,
    footer: 'SyxBot',
    templateButtons: templateButtons
  }
  
  await m7.sendMessage(from, templateMessage, {quoted: info})
 // await m7.sendMessage(from, {audio: {url: teste.resultado.link }, mimetype: 'audio/mp4'}, {quoted: info});



break;
case "playvideo":
  
  await enviar("aguarde")
  var slagay = await fetchJson(`https://ayu-team.herokuapp.com/api/dl/playv?nome=${args}&apikey=Wv4HkHb5jY`)
  var slaVideo = getBuffer(slagay.resultado.url)
  return m7.sendMessage(from, {video: slaVideo, mimetype: 'video/mp4'}, {quoted: info})
break;

case 'grupo':
  if (!Group){
    return enviar("Não e um grupo!")
  }
  if (!GroupAdmins){
    return enviar("Você não e um admintrador!")
  }
  // if (!BotGroupAdmins){
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
  break
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
  
m7.sendMessage(from, {text: `╭─────────────\n│\n││• Comando: Não Exte\n││• Data: ${data}\n││• Hora: ${hora}\n││• Use .menu\n│\n╰─────────────`, footer: `© syx-bot`, templateButtons: [ { quickReplyButton: { dplayText: '━━━━━━━━━━━━━━━', id: `${prefix}menu`}}, ]})
}
}
}
catch(e) {
  console.log(e)
}})}
startBot()
