// -----------------MARDI — Renforcement : Méthodes de tableaux---------------

const chansons = [
    { titre: "Blinding Lights", artiste: "The Weeknd", duree: 200, genre: "Pop" },
    { titre: "Bohemian Rhapsody", artiste: "Queen", duree: 354, genre: "Rock" },
    { titre: "Shape of You", artiste: "Ed Sheeran", duree: 233, genre: "Pop" },
    { titre: "Smells Like Teen Spirit", artiste: "Nirvana", duree: 301, genre: "Grunge" },
    { titre: "Billie Jean", artiste: "Michael Jackson", duree: 294, genre: "Jazz" },
    { titre: "Lose Yourself", artiste: "Eminem", duree: 326, genre: "Rap" },
    { titre: "Rolling in the Deep", artiste: "Adele", duree: 228, genre: "Soul" },
    { titre: "One Dance", artiste: "Drake", duree: 173, genre: "Dancehall" },
    { titre: "Hotel California", artiste: "Eagles", duree: 391, genre: "Rock" },
    { titre: "Despacito", artiste: "Luis Fonsi", duree: 229, genre: "Reggaeton" }
];


// Affiche uniquement les titres de toutes les chansons
for(let i = 0 ; i<chansons.length ; i++){
    console.log("- "+chansons[i].titre);
}

// Crée un nouveau tableau contenant uniquement les chansons de genre "Rock"
let rockMusic = [];
for(let i = 0 ; i<chansons.length ; i++){
    if(chansons[i].genre=="Rock"){
        rockMusic.push(chansons[i]);
    }
}
console.log(rockMusic);

// Crée un nouveau tableau où chaque durée est convertie en format "3:45" (minutes:secondes)
let minSec = [];
for(let i = 0 ; i<chansons.length ; i++){
    let min = (chansons[i].duree/60).toFixed(0);
    let sec = chansons[i].duree%60;
    // console.log("- "+chansons[i].duree+" : "+min+":"+sec);
    minSec.push(min+":"+sec+"s")
}
console.log(minSec);

// Calcule la durée totale de la playlist en minutes et secondes
let totalDuree = 0;
for(let i = 0 ; i < chansons.length ; i++){
    totalDuree += chansons[i].duree;
}
let min = (totalDuree/60).toFixed(0);
let sec = totalDuree%60;
console.log("La durée totale du Playlist est: "+min+":"+sec);

// Trouve la chanson la plus longue
let musicDuree = chansons[0].duree;
let nom = "";
let musicNewDuree;
for(let i = 0 ; i < chansons.length ; i++){
    let chanson = chansons[i];
    if(chanson.duree >= musicDuree){
        musicDuree=chanson.duree;
        nom = chanson.titre;
        let min = (chanson.duree/60).toFixed(0);
        let sec = (chanson.duree%60)
        musicNewDuree = min+":"+sec;
    }
}

console.log(nom+", est la chansons la plus longue, avec une duree de: "+musicNewDuree+"s");

// Vérifie si toutes les chansons durent moins de 6 minutes
let musicMoinsSexMn = [];
let musicPlusSexMn = [];
for(let i = 0 ; i < chansons.length ; i++){
    if(chansons[i].duree > 360){
        musicPlusSexMn.push(chansons[i].titre);
    }else{
        musicMoinsSexMn.push(chansons[i].titre);
    }
}
console.log("Voici les chansons qui ont la durée plus de 6 minutes: "+musicPlusSexMn.join("-|-"));
console.log("------------------------------");
console.log("Voici les chansons qui ont la durée moins de 6 minutes: "+musicMoinsSexMn.join("-|-"));