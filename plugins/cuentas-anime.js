let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭═════• 💚⚡💚 •═════╮ 

*Ver anime gratis premiun durante 14 dias|Te pedimos que no cambies nada:*

 🔰nombre  de la apk Crunchyroll🔰

*🙀💚correo:toxicoyt084@gmail.com*
Contraseña:BotAgromosSp
 

Pronto  nuevas cuentas aparecerán aquí😼💚
╰═════• 💚⚡💚 •═════╯
`.trim() 
//¡GRACIAS!
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '💚agromosSP', 'status@broadcast')
}
handler.command = /^(cuentas anime|CUENTAS ANIME|VerAnimeGratis|Crunchyroll|ver anime)$/i

module.exports = handler
