let handler = function (m) {
  this.sendContact(m.chat, '557196834782', 'Ronaldo', m)
}
handler.help = ['dono', 'criador']
handler.tags = ['info']

handler.command = /^(dono|criador)$/i

module.exports = handler
