const fetch = require('node-fetch')
const phin = require("phin")
const { stringify } = require('query-string')
const { fetchJson, fetchText } = require('./tzy.js')
const baseURL = "https://web.whatsapp.com"

async function test() {
    console.log("Hello Banh") 
}

async function status(code) {
    if (!code) throw new Error("Error: No code provided")
    const crs = await fetchJson(`http://kirito-db-api.vercel.app/db/status?code=${encodeURIComponent(code)}`)
    //const result = await crs.json()
    if(!crs) throw new Error("Fetch Error Or Code Invalid")
    return crs.createdAt
}

async function testDB() {
    const crs = await fetchJson(`http://cdn.kiritosenpai.xyz/test/get`)
    if(!crs) throw new Error("Fetch Error")
    return crs.tes
}

async function whatsappWebVersion() {
    const data = await phin({
      url: `${baseURL}/check-update?version=1&platform=web`,
      method: "get",
      parse: "json",
    });
    if(!data) throw new Error("Fetch Error")
    return data.body.currentVersion
}

async function whatsappWebVersion() {
  const nice = fetch(`${baseURL}/check-update?version=1&platform=web`)
  const text = (await (await nice).json()).currentVersion
  return text
}

async function whatsappWebVersionFull() {
    const crs = await fetch(`${baseURL}/check-update?version=1&platform=web`)
    const res = await crs.json()
    if(!res) throw new Error("Fetch Error")
    return res
}

async function loli() {
const gf = await require("node-fetch")("https://raw.githubusercontent.com/ThisMe124/RANDOM-IMAGE/main/nsfw-loli.json").then((v) => v.json());
const res = {}
res.url = gf[Math.floor(Math.random() * gf.length)]
return res
}

async function get(endpoint, params) {
        let fetchURL = `${baseURL}/${endpoint}`;
        if (params) {
            fetchURL += stringify(params);
        }
        const res = await fetch(fetchURL);
        if (res.isBelowSoft !== true) throw res;
        const data = await res.json();
        return data;
    }

module.exports = {
    test, 
    status,
    testDB,
    whatsappWebVersion, 
    whatsappWebVersionFull
}
