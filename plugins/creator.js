let handler = function (m) {
  this.sendContact(m.chat, '5522992161220', 'TERROR', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
