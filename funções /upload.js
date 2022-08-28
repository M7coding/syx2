const axios = require("axios")
const fetch = require('node-fetch')
const fs = require('fs')
const mimetype = require("mime-types")
const { fromBuffer } = require("file-type")
const getExtension = async (type) => {
	return await mimetype.extension(type)
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`;
}
const getBuffer = (url, options) => new Promise(async (resolve, reject) => { 
options ? options : {}
await axios({method: "get", url, headers: {"DNT": 1, "Upgrade-Insecure-Request": 1}, ...options, responseType: "arraybuffer"}).then((res) => {
resolve(res.data)
}).catch(reject)
})
function upload (midia)  {
return new Promise(async (resolve, reject) => {
try {
let { ext } = await fromBuffer(midia)
let form = new FormData()
form.append("file", midia, "tmp." + ext)
await fetch("https://telegra.ph/upload", {
method: "POST",
body: form
})
.then(html => html.json())
.then(post => {
resolve("https://telegra.ph" + post[0].src)
})
.catch(erro => reject(erro))
} catch (erro) {
return console.log(erro)
}
})
}
module.exports = { getBuffer, getExtension, getRandom, upload }