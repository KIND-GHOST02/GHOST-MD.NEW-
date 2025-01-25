const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "👋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `╭━━〔 *GHOST-MD* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *⏳Uptime*:  ${runtime(process.uptime())} 
┃◈┃• *📟 Ram usage*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃◈┃• *⚙️ HostName*: ${os.hostname()}
┃◈┃• *👨‍💻 Owner*: ᴄʏʙᴇʀ ɢʜᴏꜱᴛ
┃◈┃• *🧬 Version*: ᴠ3
┃◈└───────────┈⊷
╰──────────────┈⊷

  𝐡𝐞𝐥𝐥𝐨𝐰 𝐢𝐦 𝐆𝐇𝐎𝐒𝐓 𝐌𝐃 𝐛𝐨𝐭.𝐢𝐦 𝐚𝐥𝐢𝐯𝐞 𝐧𝐨𝐰. 

  

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢʜᴏꜱᴛ ᴍᴅ`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://i.postimg.cc/HntYvQzS/IMG-20250118-WA0013.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363357105376275@g.us@newsletter',
                    newsletterName: 'ᴄʏʙᴇʀ ɢʜᴏꜱᴛ',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
