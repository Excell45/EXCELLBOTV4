import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = await (await fetch(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group`))
let botol = global.wm
let str = `
✧─────[ *Group Official* ]─────✧
🍀 Group BOT :
https://chat.whatsapp.com/LmCfZPnIdH288fUzqSSSdY

🍀 Group Store :
https://chat.whatsapp.com/CPFKgDLcnIuC7B0Aj3NX7m

🍀  Instagram :
https://instagram.com/excell445?igshid=YmMyMTA2M2Y=
✧──────────···──────────✧
`.trim()
conn.sendButton(m.chat, str, `${botol}`, [['⋮☰ MENU','.menu']],m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

export default handler 
