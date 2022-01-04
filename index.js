const fetch = require('node-fetch')
const baseurl = "http://kirito-db-api.vercel.app"
const { version } = require('./package.json')

async function test() {
    console.log("Hello Banh") 
}

async function status(code) {
    if (!code) throw new Error("Error: No code provided")
    const crs = await fetch(`${baseurl}/db/status?code=${encodeURIComponent(code)}`)
    const result = await crs.json()
    if(!result) throw new Error("Fetch Error")
    return result
}

module.exports = {
    test, 
    status, 
    version
}
