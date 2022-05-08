const fetch = require('node-fetch')
const phin = require("phin")
const { stringify } = require('query-string')
const { fetchJson, fetchText } = require('./tzy.js')
const baseURL = "https://web.whatsapp.com"

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

module.exports = {
    loli,
    whatsappWebVersion, 
    whatsappWebVersionFull
}
