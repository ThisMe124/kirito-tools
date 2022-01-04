const fetch = require('node-fetch')
const baseurl = "http://kirito-db-api.vercel.app"

async function test() {
    console.log("Hello Banh") 
}

async function status(package) {
    const crs = await fetch(`${baseurl}/db/status?code=${encodeURIComponent(code)}`)
    const result = await crs.json()
    if (!code) throw new Error("Error: No package name provided")
    if(!r) throw new Error("Fetch Error")
    return result.createdAt
}

module.exports = {
    test
}
