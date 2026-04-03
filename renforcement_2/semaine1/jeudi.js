// *JEUDI — Renforcement : CRUD + Logique métier

// *...Challenge 7 — Le système de réservation de restaurant

// Crée une structure pour gérer les réservations
class Reservation {
    constructor(id, nom_client, nombre_personnes, date, heure, statut, telephone) {
        this.id = id;
        this.nom_client = nom_client;
        this.nombre_personnes = nombre_personnes;
        this.date = date;
        this.heure = heure; 
        this.statut = statut;
        this.telephone = telephone;
    }
}

// Fonction pour ajouter une réservation

let res2 = new Reservation(1,"Abderrazak",12,"2026-12-5","12:30","confirmée","0766428735");
console.log(res1);
let reservations = [];
function newReservation(id, nom_client, nombre_personnes, date, heure, statut, telephone){
    return new Reservation(id,nom_client,nombre_personnes,date,heure,statut,telephone);
}

function ajouterReservation(id, nom_client, nombre_personnes, date, heure, telephone){
    
        let total = reservations.filter(res => res.date === date && res.heure === heure && res.statut !== "annulée")
        .reduce((tot, res) => tot + res.nombre_personnes, 0);

        let statut = "confirmée";

        if(total + nombre_personnes > 30){
            statut = "en attente";
            console.log("reservation en attente");
        }else{
            console.log("Reservation confirmée");
        }

        let reserv = newReservation(id, nom_client, nombre_personnes, date, heure, statut, telephone);
        reservations.push(reserv);

        return reservations;
}

ajouterReservation(1, "Abderrazak", 10, "2026-04-05", "21:00", "0612345678");
ajouterReservation(2, "Ahmed", 15, "2026-04-05", "20:00", "0677889900");
ajouterReservation(3, "Karim", 8, "2026-04-05", "17:30", "0600000000");
ajouterReservation(4, "said", 11, "2026-04-05", "19:45", "060088888");
console.log(reservations)

// Fonction pour annuler une réservation
function annulerReservation(){
    let nomClient = prompt("Saisir votre nom pour annulée: ");
    for(let i = 0 ; i < reservations.length ; i++){
        if (nomClient == reservations[i].nom_client && reservations[i].statut !== "annulée"){
            reservations[i].statut = "annulée";
            console.log("Réservation annulée pour :"+ nomClient);
            for(let j = 0 ; j < reservations.length ; j++){
                if(reservations[j].statut == "en attente"){
                    reservations[j].statut = "confirmée";
                    break;
                }
            }
            break;
        }
    }
}

annulerReservation();
console.log(reservations);

// Fonction pour lister les réservations d'une date donnée, triées par heure
let arrDate = [];

function listerReservation() {
    let dateDonner = prompt("Saisir une date pour triee: ");
    arrDate = [];

    for (let i = 0; i < reservations.length; i++) {
        if (dateDonner == reservations[i].date) {
            arrDate.push(reservations[i]);
        }
    }

    for (let i = 0; i < arrDate.length; i++) {
        for (let j = 0; j < arrDate.length - 1; j++) {

            if (arrDate[j].heure > arrDate[j + 1].heure) {
                let temp = arrDate[j];
                arrDate[j] = arrDate[j + 1];
                arrDate[j + 1] = temp;
            }
        }
    }

    console.log("Reservations triées par heure:", arrDate);
}

listerReservation();

// Fonction pour calculer le taux d'occupation d'une journée (nombre de places réservées / 30 par créneau)

