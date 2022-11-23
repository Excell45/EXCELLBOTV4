let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let url = 'https://h.top4top.io/p_2515yt3wb0.jpg'
let text = `━━ꕥ〔 *𝚂𝙴𝚆𝙰 & 𝙿𝚁𝙴𝙼𝙸𝚄𝙼* 〕ꕥ━⬣

┏━ꕥ〔 𝙷𝙰𝚁𝙶𝙰 𝚂𝙴𝚆𝙰 〕
┃
┃✾ 15 ʜᴀʀɪ 10ᴋ / ɢʀᴏᴜᴘ
┃✾ 30 ʜᴀʀɪ 15ᴋ / ɢʀᴏᴜᴘ
┃✾ 45 ʜᴀʀɪ 25ᴋ / ɢʀᴏᴜᴘ
┃✾ 60 ʜᴀʀɪ 30ᴋ / ɢʀᴏᴜᴘ
┃✾ ᴘᴇʀᴍᴀɴᴇɴ 25ᴋ / ɢʀᴏᴜᴘ 
┃
┗━━ꕥ *${author}* ꕥ━⬣

┏━ꕥ〔 𝙷𝙰𝚁𝙶𝙰 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 〕
┃
┃✾ 15 ʜᴀʀɪ 3ᴋ 
┃✾ 30 ʜᴀʀɪ 7ᴋ 
┃✾ 45 ʜᴀʀɪ 15ᴋ 
┃✾ 60 ʜᴀʀɪ 19ᴋ 
┃✾ ᴘᴇʀᴍᴀɴᴇɴ 25ᴋ
┃
┗━━ꕥ *${author}* ꕥ━⬣

┏━ꕥ〔 ꜰɪᴛᴜʀ 450+ 〕
┃
┃✾ ᴡᴇʟᴄᴏᴍᴇ
┃✾ ᴋɪᴄᴋ
┃✾ ᴀɴᴛɪʟɪɴᴋ
┃✾ ꜱᴛɪᴋᴇʀ
┃✾ ꜱᴏᴜɴᴅ
┃✾ ᴀɴɪᴍᴇ
┃✾ ꜱᴇɴᴅ ᴠɪʀᴛᴇx
┃✾ ꜱᴇɴᴅ ʙᴜɢ
┃✾ ɢᴀᴍᴇ ʀᴘɢ
┃✾ ᴅʟʟ
┃
┗━━ꕥ *${author}* ꕥ━⬣
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Klick untuk berlangganan', url: `https://wa.me/62895622225489?text=Hallo admin, saya tertarik untuk menyewa bot ${namebot}`}},
    {index: 4, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: url
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^(masuk|sewabot|sewa|belibot|buyprem)$/i

export default handler
