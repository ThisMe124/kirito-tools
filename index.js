const fetch = require('node-fetch')
const baseURL = "https://web.whatsapp.com"
const translate = require("@vitalets/google-translate-api");

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
    translate,
    whatsappWebVersion, 
    whatsappWebVersionFull
}
