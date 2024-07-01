const infodono = (prefix, numerodn, NomeDoBot, sender) => {

return`
╭───────────────┐
├ INFORMAÇÕES DO DONO
├───────────────
│ Solicitou o CMD: @${sender.split("@")[0]}
├───────────────┐
│ Dono: wa.me/${numerodn} 
╞───────────────┘
╰──────────┐
╭──────────┴─┐
│ INFORMAÇÕES DO BOT
├────────────
│Prefixo: ⩺ ${prefix}
│Nome: ⩺ ${NomeDoBot} 
╰─────────────╯
`
}

exports.infodono = infodono