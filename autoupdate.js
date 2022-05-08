const { exec } = require("child_process");
const axios = require("axios").default;
const json = require("./package.json")
module.exports = async () => {
    try {
        const res = await axios.get("https://raw-kirito.is-a.dev/teman.json")
        if (json.version !== res.data.version) {
            console.log("[SYSTEM] AutoUpdate: Available version v" + res.data.version + " ready to install.")
            console.log("[SYSTEM] AutoUpdate: Installing new version...")
            const Process = exec("npm i github:ThisMe124/kirito-tools", (error, stdout, stderr) => {
            if (error) return console.error("[SYSTEM] AutoUpdate Error: " + error.message)
            console.log("[SYSTEM] AutoUpdate: ✅ Successfully Installed v" + res.data.version + ",Restart in 3 Seconds....")   
                setTimeout(Reboot, 3000);
            });
            Process.stdout.setEncoding("utf8");
            Process.stdout.on("data", (chunk) => {
                console.log(chunk.toString());
            });
            Process.stderr.setEncoding("utf8");
            Process.stderr.on("data", (chunk) => {
                console.log(chunk.toString());
            });
        } else {
            console.log("[SYSTEM] AutoUpdate: No Found Updates Package...")
        }
    } catch (error) {
        console.warn("[SYSTEM] AutoUpdate: Error Contact Api.....")
    }
}

//REBOOT FUNCTION 
function Reboot() {
    try {
        process.on("exit", () => {
            require("child_process").spawn(process.argv.shift(), process.argv, {
                cwd: process.cwd(),
                detached: true,
                stdio: "inherit",
            });
        });
        process.exit()
    } catch (e) {
        console.error("[SYSTEM] AutoUpdate: Failed Restart...")
     }
}
