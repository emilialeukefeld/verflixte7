let summeS1 = 0,
    summeS2 = 0
let wuerfeS1 = 0,
    wuerfeS2 = 0
let spielerAnDerReihe = 1

function wuerfeln() {
    if (spielerAnDerReihe === 1)
    {
        letwurf1 = Math.floor(Math.random()* 6+1)
        letwurf2 = Math.floor(Math.random()* 6+1)
        document.getElementById("pSumme1").innerHTML = "Würfel 1" + wurf1
        document.getElementById ("pSumme2").innerHTML = "Würfel 2" + wurf2

      anzahlWuerfeS1++
        document.getElementById("pAnzahlWuerfeSpieler1").innerHTML = "Anzahl Würfe Spieler 1:" + wuerfeS1
        if (wurf1 + wurf2 === 7){
            spielerAnDerReihe = 2
            alert("EINE 7!! SPIELER 2 IST AN DER REIHE.")
        } else {
            summeS1 +=wurf1 + wurf2
            document.getElementById("pSummeSpieler1").innerHTML="Summe Spieler 1:"+ summeS1
        }



             }
}