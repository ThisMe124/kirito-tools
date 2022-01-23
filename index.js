const fetch = require('node-fetch')
const phin = require("phin")
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

async function whatsappWebVersionFull() {
    const crs = await fetch(`${baseURL}/check-update?version=1&platform=web`)
    const res = await crs.json()
    if(!res) throw new Error("Fetch Error")
    return res
}


async function ip() {
return new Promise(async (resolve, reject) => {
var res = await fetch("http://ip-api.com/json/1.1.1.1?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query")
let json = await res.json()
resolve(json.country)
})
}

module.exports = {
    ip,
    test, 
    status,
    testDB,
    whatsappWebVersion, 
    whatsappWebVersionFull
}
