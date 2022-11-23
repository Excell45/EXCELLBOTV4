let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = true
    m.reply(' *Sukses Menghidupkan EXCELLBOT© ğŸ¤–* ')
}


handler.tags = ['owner']
handler.command = /^(boton)$/i

handler.group = true
handler.admin = true

export default handler
