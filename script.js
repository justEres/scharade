
let allebegriffe = ['Koch/Köchin', 'traurig', 'Fußball spielen', 'Känguru', 'Tänzer*in', 'verträumt', 'Ski fahren', 'Faultier', 'Friseur*in', 'ängstlich', 'rutschen', 'Meer-schweinchen', 'Dirigent*in', 'Elsa', 'fröhlich', 'schaukeln', 'Pferd', 'Bäcker*in', 'Rapunzel', 'verliebt', 'einen Witz erzählen', 'Fisch', 'Busfahrer*in', 'wütend', 'Karate machen', 'Hai', 'Arzt/Ärztin', 'Dumbo', 'irritiert', 'häkeln', 'Maulwurf', 'Schauspieler*in', 'angeekelt', 'Schach spielen', 'Affe', 'Kellner*in', 'erschrocken', 'tauchen', 'Huhn', 'Polizist*in', 'besorgt', 'Bogenschießen', 'Flamingo', 'Bauarbeiter*in', 'gelangweilt', 'ein Buch lesen', 'Regen', 'Verkäufer*in', 'Tarzan', 'ruhig', 'Pizza machen', 'Welle', 'Näher*in', 'Mogli', 'amüsiert', 'Ein Eis essen', 'Baum', 'Model', 'aufgeregt', 'eine Idee haben', 'Blume', 'Pilot*in', 'müde', 'nachdenken', 'Sonne', 'Maler*in', 'einge-schüchtert', 'Mittagsschlaf machen', 'Schnee',]



function sendWord(){
    let last = document.getElementById("begriff").innerHTML
    
    let randomnum = Math.floor(Math.random() * allebegriffe.length)
    let word = allebegriffe[randomnum]
    let begriff = document.getElementById("begriff")
    begriff.innerHTML = word
}
