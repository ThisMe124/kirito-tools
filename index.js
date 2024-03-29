const fetch = require('node-fetch')
const baseURL = "https://web.whatsapp.com"
const translate = require("@vitalets/google-translate-api");
const axios = require('axios')
const FormData = require("form-data")
const got = require('got')
const cheerio = require('cheerio')
const pdfkit = require('pdfkit')

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

async function getRandom(ext) {
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

async function parseTime(seconds) {
      seconds = Number(seconds)
      var d = Math.floor(seconds / (3600 * 24));
      var h = Math.floor(seconds % (3600 * 24) / 3600);
      var m = Math.floor(seconds % 3600 / 60);
      var s = Math.floor(seconds % 60);
      var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
      var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
      var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
      var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
      return dDisplay + hDisplay + mDisplay + sDisplay;
}

async function timeCon(duration) {
    const s = i => i === 1 ? '' : 's';
    const res = [];
    const msInMinute = 1000 * 60;
    const msInHour = msInMinute * 60;
    const msInDay = msInHour * 24;
    const msInWeek = msInDay * 7;
    const msInMonth = (365.25 / 12) * msInDay;
    const msInYear = msInMonth * 12;
    const years = Math.trunc(duration / msInYear);
    if (years > 0) {
        res.push(years + ` year${s(years)},`);
        duration = duration - (years * msInYear)
    }
    const months = Math.trunc(duration / msInMonth);
    if (months > 0) {
        res.push(months + ` month${s(months)},`);
        duration = duration - (months * msInMonth)
    }
    const weeks = Math.trunc(duration / msInWeek);
    if (weeks > 0) {
        res.push(weeks + ` week${s(weeks)},`);
        duration = duration - (weeks * msInWeek)
    }
    const days = Math.trunc(duration / msInDay);
    if (days > 0) {
        res.push(days + ` day${s(days)},`);
        duration = duration - (days * msInDay)
    }
    const hours = Math.trunc(duration / msInHour);
    if (hours > 0) {
        res.push(hours + ` hour${s(hours)},`);
        duration = duration - (hours * msInHour);
    }
    const minutes = Math.trunc(duration / msInMinute);
    if (minutes > 0) {
        res.push(minutes + ` minute${s(minutes)},`);
        duration = duration - (minutes * msInMinute);
    }
    const seconds = Math.trunc(duration / 1000);
    if (seconds > 0) {
        res.push(seconds + ` second${s(seconds)},`);
    }
    res[res.length - 2] = res[res.length - 2]?.replace(',', ' and');
    return res.join(' ').slice(0, -1);
}

async function createBar(total, current, size = 25, line = "▬", slider = "🔷") {
    try {
      if (!total) throw "MISSING MAX TIME";
      if (!current) return `**[${slider}${line.repeat(size - 1)}]**`;
      let bar = current > total 
          ? [line.repeat(size / 2 * 2), (current / total) * 100] 
          : [line.repeat(Math.round(size / 2 * (current / total))).replace(/.$/, slider) 
            + line.repeat(size - Math.round(size * (current / total)) + 1), current / total];
      if (!String(bar).includes(slider)) {
        return `**[${slider}${line.repeat(size - 1)}]**`;
      } else{
        return `**[${bar[0]}]**`;
      }
    } catch (e) {
      console.log(String(e.stack).bgRed)
    }
  }

async function uploadFile(path) {
new Promise((resolve, reject) => {
const fs = require("fs");
const fd = new FormData();
fd.append("file", fs.createReadStream(path));
axios({
method: "POST",
url: "https://api.anonfiles.com/upload",
data: fd,
maxContentLength: Infinity,
maxBodyLength: Infinity,
headers: {
"user-agent": "Refresh :D",
"content-type": `multipart/form-data; boundary=${fd._boundary}`,
},
})
.then(({ data }) => resolve(data))
.catch(reject)
})
}

async function getFile(url) {
const res = await got({
url: url,
method: 'get',
responseType: 'buffer'
})
return res.rawBody
}

async function toPdf(images = [], size = 'A4') {
return new Promise(async(resolve, reject) => {
if (!Array.isArray(images)) throw new TypeError('images must be an array');
let buffs = [];
const doc = new pdfkit({ margin: 0, size: size });
for (let img of images) {
const data = await getFile(img)
doc.image(data, 0, 0, {
fit: [595.28, 841.89],
align: 'center',
valign: 'center',
})
doc.addPage();
}
doc.on('data', (chunk) => buffs.push(chunk));
doc.on('end', () => resolve(Buffer.concat(buffs)));
doc.on('error', (err) => reject(err));
doc.end()
})
}

function getNhentaiInfo(id) {
	return new Promise(async(resolve, reject) => {
		const req = await got('https://nhentai.net/g/' + id + '/')
		const $ = cheerio.load(req.body)
		let title = $('#info').find('h1').text();
		let nativeTitle = $('#info').find('h2').text();
		let details = {};
		$('.tag-container.field-name').find('count').each(function() {
			this.text(` (${el.text()}) `);
		})
		$('.tag-container.field-name').text().split('\n').map(string => string.trim()).filter(u => u).map((tag, i, tags) => {
			if (tag.endsWith(':') && !tags[i + 1].endsWith(':')) {
				details[tag.substring(0, tag.length - 1).toLowerCase()] = tags[i + 1].replace(/(\([0-9,]+\))([a-zA-Z])/g, '$1 $2').split(/(?<=\))\s(?=[a-zA-Z])/);
			}
		});
		const pages = []; 
		$('#thumbnail-container').find('.thumbs > div.thumb-container').each((i, e) => {
			pages.push($(e)
			.find('.gallerythumb > img')
			.attr('data-src')
			.replace(/\/\/t/, '//i')
			.replace(/t\.jpg/g, '.jpg')
			.replace(/t\.png/g, '.png'))
		})
		resolve({ title,nativeTitle, details, pages })
	})
}

async function translateText(text = null, l = "id") {
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
    timeCon, 
    createBar, 
    uploadFile, 
    parseTime,
    translate,
    getRandom,
    getBuffer,
    fetchJson, 
    jsonString,
    getNhentaiInfo, 
    translateText, 
    toPdf, 
    getFile,
    whatsappWebVersion, 
    whatsappWebVersionFull
}
