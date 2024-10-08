// array med ingredienser/sovse og deres kalorier
const ingredienser = [
    { navn: "bolle", kalorier: 150 },
    { navn: "bof", kalorier: 250 },
    { navn: "ost", kalorier: 100 },
    { navn: "salat", kalorier: 5 },
    { navn: "tomat", kalorier: 10 },
    { navn: "log", kalorier: 15 },
    { navn: "mayonnaise", kalorier: 90 },
    { navn: "ketchup", kalorier: 20 },
    { navn: "burgerdressing", kalorier: 60 }
];

function beregnKalorier() {
    // Hent værdier fra inputfelterne
    const valgteIngredienser = {
        "bolle": parseInt(document.getElementById("bolle").value),
        "bof": parseInt(document.getElementById("bof").value),
        "ost": parseInt(document.getElementById("ost").value),
        "salat": parseInt(document.getElementById("salat").value),
        "tomat": parseInt(document.getElementById("tomat").value),
        "log": parseInt(document.getElementById("log").value),
        "sovsType": document.getElementById("sovsType").value,
        "sovsAntal": parseInt(document.getElementById("sovsAntal").value)
    };
    console.log("Valgte ingredienser:", valgteIngredienser);

    let totalKalorier = 0;

    // Gennemløb hvert element i arrayet
    for (let ingrediens of ingredienser) {
        const navn = ingrediens.navn;
        const kalorieprEnhed = ingrediens.kalorier;
        console.log("Behandler ingrediens:", navn, "Kalorier pr. enhed:", kalorieprEnhed);

        // Hvis ingrediensen er en af sovsene
        if (navn === valgteIngredienser.sovsType) {
            console.log("Sovs type fundet:", navn);
            totalKalorier += kalorieprEnhed * valgteIngredienser.sovsAntal;
        } else if (navn in valgteIngredienser && navn !== "sovsType" && navn !== "sovsAntal") {
            const antal = valgteIngredienser[navn] || 0;
            totalKalorier += kalorieprEnhed * antal;
        }
    }
    console.log("Total kalorier beregnet:", totalKalorier);

    // Viser resultatet i modalboksen
    document.getElementById("result").innerHTML = `Total kalorier: ${totalKalorier} kcal`;
}


// Åbner modalboksen
function openModal() {
    console.log("Åbner modalboksen");
    document.getElementById("myModal").style.display = "block";
}

// Lukker modalboksen
function closeModal() {
    console.log("Lukker modalboksen");
    document.getElementById("myModal").style.display = "none";
}

// Lukker modalboksen, hvis brugeren klikker udenfor
window.onclick = function (event) {
    console.log("Klik på vinduet:", event.target);
    if (event.target == document.getElementById("myModal")) {
        closeModal();
    }
}