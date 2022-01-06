const fetch = require('node-fetch')
const { fetchJson, fetchText } = require('./tzy.js')
const baseURL = "https://web.whatsapp.com"

async function test() {
    console.log("Hello Banh") 
}

async function status(code) {
    if (!code) throw new Error("Error: No code provided")
    const crs = await fetchJson(`http://kirito-db-api.vercel.app/db/status?code=${encodeURIComponent(code)}`)
    //const result = await crs.json()
    //if(!crs) throw new Error("Fetch Error")
    return crs.createdAt
}

async function whatsappWebVersion() {
    const crs = await fetch(`${baseURL}/check-update?version=1&platform=web`)
    const res = await crs.json()
    if(!res) throw new Error("Fetch Error")
    return res.currentVersion
}

async function whatsappWebVersionFull() {
    const crs = await fetch(`${baseURL}/check-update?version=1&platform=web`)
    const res = await crs.json()
    if(!res) throw new Error("Fetch Error")
    return res
}

module.exports = {
    test, 
    status, 
    whatsappWebVersion, 
    whatsappWebVersionFull
}
