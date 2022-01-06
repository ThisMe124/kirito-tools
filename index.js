const fetch = require('node-fetch')
const baseURL = "https://web.whatsapp.com"

async function test() {
    console.log("Hello Banh") 
}

async function status(code) {
    if (!code) throw new Error("Error: No code provided")
    const crs = await fetch(`http://kirito-db-api.vercel.app/db/status?code=${encodeURIComponent(code)}`)
    const result = await crs.json()
    if(!result) throw new Error("Fetch Error")
    return result
}

async function whatsappWebVersion() {
    const crs = await fetch(`${baseURL}/check-update?version=1&platform=web`)
    const result = await crs.json()
    if(!result) throw new Error("Fetch Error")
    return result.currentVersion
}

async function whatsappWebVersionFull() {
    const crs = await fetch(`${baseURL}/check-update?version=1&platform=web`)
    const result = await crs.json()
    if(!result) throw new Error("Fetch Error")
    return result
}

module.exports = {
    test, 
    status, 
    whatsappWebVersion, 
    whatsappWebVersionFull
}
