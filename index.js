const fetch = require('node-fetch')
const baseURL = "https://web.whatsapp.com"
const translate = require("@vitalets/google-translate-api");
const axios = require('axios')

async function test() {
    console.log("Hello Banh") 
}

async function whatsappWebVersion() {
  const nice = fetch(`${baseURL}/check-update?version=1&platform=web`)
  const text = (await (await nice).json()).currentVersion
  return text
}

async function whatsappWebVersionFull() {
    const res = await require("node-fetch")(`${baseURL}/check-update?version=1&platform=web`).then((v) => v.json());
    if(!res) throw new Error("Fetch Error")
    return res
}

async function loli() {
    const gf = await require("node-fetch")("https://raw-kirito.is-a.dev/nsfw-loli.json").then((v) => v.json());
    const res = {}
    res.url = gf[Math.floor(Math.random() * gf.length)]
    return res
}

async function jsonString(string) {
    return JSON.stringify(string, null, 2)
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function isUrl(url) {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

async function getRandom(ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}

async function getBuffer(url, options) {
    try {
    options ? options : {}
    const res = await axios({
    method: "get",
    url,
    headers: {
    'DNT': 1,
    'Upgrade-Insecure-Request': 1
    },
    ...options,
    responseType: 'arraybuffer'
    })
    return res.data
    } catch (err) {
    return err
    }
}

async function fetchJson(url, options) {
     try {
     options ? options : {}
     const res = await axios({
     method: 'GET',
     url: url,
     headers: {
     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
     },
     ...options
     })
     return res.data
     } catch (err) {
     return err
     }
}



async function translate(text = null, l = "id") {
    result = {};
    if (!text) throw `No String text.`
    var res = await translate(text, { to: l })
    result.status = true
    result.result = { from_lang: res.from.language.iso, response: res.text };
    return result
}

module.exports = {
    loli,
    sleep,
    isUrl, 
    translate,
    getRandom,
    getBuffer,
    fetchJson, 
    jsonString, 
    whatsappWebVersion, 
    whatsappWebVersionFull
}
