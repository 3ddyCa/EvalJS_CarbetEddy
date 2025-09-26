// INITIALISATION AOS



//-----------Tableaux en vrac------------

const usersHuman = [{
        type: "humain",
        name: "John Doe",
        email: "j.smith@gmail.com",
        age: 25,
        avatar : './img/john.png',
        icon : './img/john_icon.png',
        latitude : 43.604429,
        longitude : 1.443812
    },
    {
        type: "humain",
        name: "Jane Smith",
        email: "ja.doe@sfr.fr",
        age: 5,
        avatar : './img/jane.png',
        icon : './img/jane_icon.png',
        latitude : 43.60792, 
        longitude : 1.44133
    },
    {
        type: "humain",
        name: "Le Vénérable",
        email: "levy@gmail.com",
        age: 500,
        avatar : './img/venerable.png',
        icon : './img/venerable_icon.png',
        latitude : 43.60053,
        longitude : 1.44590
    }
];

const usersPet = [{
        type: "animal de compagnie",
        espece: "chien",
        name: "Rox",
        age: 7,
        propriétaire: "John Doe",
        avatar : './img/chien.png',
        icon : './img/chien_icon.png',
        latitude : 43.60377,
        longitude : 1.43583
    },
    {
        type: "animal de compagnie",
        espece: "renard",
        name: "Roukie",
        age: 300,
        propriétaire: "Le Vénérable",
        avatar : './img/renard.jpg',
        icon : './img/renard_icon.png',
        latitude : 43.59602,
        longitude : 1.43692
    }
];

const usersXeno = [{
        type: "Xeno",
        espece: "Krogan",
        name: "Wrex",
        menace: "Rouge",
        age: 45,
        avatar : './img/wrex.png',
        icon : './img/wrex_icon.png',
        latitude : 43.59555,
        longitude : 1.45257
    },
    {
        type: "Xeno",
        espece: "Turien",
        name: "Garrus",
        menace: "Vert",
        age: 35,
        avatar : './img/garrus.png',
        icon : './img/garrus_icon.png',
        latitude : 43.61108,
        longitude : 1.45539
    },
    {
        type: "Xeno",
        espece: "Asari",
        name: "Liara",
        menace: "ULTRA Rouge",
        age: 25,
        avatar : './img/liara.png',
        icon : './img/liara_icon.png',
        latitude : 43.61183,
        longitude :  1.43222
    }
];

//------Tableau principal----------
// Je ne suis pas sûr d'avoir compris si il faut push les tableaux ou merge tout les listes en une seule

//version avec plusieurs listes dans une liste
const tabData = []
tabData.push(usersHuman);
tabData.push(usersPet);
tabData.push(usersXeno);

//version avec les trois listes mergés dans tabData
// const tabData = []
// for(let i = 0 ; i<usersHuman.length , i++){
//     tabData.push(usersHuman[i]);
// }
// for(let i = 0 ; i<usersPet.length , i++){
//     tabData.push(usersPet);
// }
// for(let i = 0 ; i<usersXeno.length , i++){
//     tabData.push(usersXeno);
// }




//---------Fonctions-------------

function cardHuman(objet){
    const article = document.createElement("article");
    const hdline = document.createElement("h2");
    const image = document.createElement("img");
    const parag = document.createElement("p");

    hdline.innerText = objet.name;    
    image.src = objet.avatar;
    image.alt = `Portrait de : ${objet.name}`;    
    parag.innerText = `Est agé de : ${objet.age} ans\nAdresse mail : ${objet.email}`;

    article.appendChild(hdline);
    article.appendChild(image);
    article.appendChild(parag);
    article.classList.add("card");
    //J'ai rajouté un animation sur les cars parce que j'ai finit plus tôt
    article.setAttribute("data-aos","fade-right");
    article.setAttribute("data-aos-offset","200");
    article.setAttribute("data-aos-duration" , "1000");
    article.setAttribute("data-aos-easing","ease-in-out");
    article.setAttribute("data-aos-mirror","true");
    article.setAttribute("data-aos-once","false");
    article.setAttribute("data-aos-anchor-placement","left-right");
    //log d'information console pour desactiver basculer LOGS en "false"
    if(LOGS == true){
        console.log("card human : " + objet.name + " Faite");
    }
    //log d'information console pour desactiver basculer LOGS en "false"
    return article;
};

function cardPet(objet){
    const article = document.createElement("article");
    const hdline = document.createElement("h2");
    const image = document.createElement("img");
    const parag = document.createElement("p");

    hdline.innerText = objet.name;    
    image.src = objet.avatar;
    image.alt = `Portrait de : ${objet.name}`;    
    parag.innerText = `Est agé de : ${objet.age} ans\nEspèce : ${objet.espece}\nPropriétaire : ${objet.propriétaire}`;

    article.appendChild(hdline);
    article.appendChild(image);
    article.appendChild(parag);
    article.classList.add("card");
    //J'ai rajouté un animation sur les cars parce que j'ai finit plus tôt
    article.setAttribute("data-aos","fade-right");
    article.setAttribute("data-aos-offset","200");
    article.setAttribute("data-aos-duration" , "1000");
    article.setAttribute("data-aos-easing","ease-in-out");
    article.setAttribute("data-aos-mirror","true");
    article.setAttribute("data-aos-once","false");
    article.setAttribute("data-aos-anchor-placement","left-right");
    //log d'information console pour desactiver basculer LOGS en "false"
    if(LOGS == true){
        console.log("card pet : "+objet.name+" Faite");
    }
    //log d'information console pour desactiver basculer LOGS en "false"
    return article;
};

function cardXeno(objet){
    const article = document.createElement("article");
    const hdline = document.createElement("h2");
    const image = document.createElement("img");
    const parag = document.createElement("p");

    hdline.innerText = objet.name;    
    image.src = objet.avatar;
    image.alt = `Portrait de : ${objet.name}`;    
    parag.innerText = `Est agé de : ${objet.age} ans\nEspèce : ${objet.espece}\nNiveau de menace : ${objet.menace}`;

    article.appendChild(hdline);
    article.appendChild(image);
    article.appendChild(parag);
    article.classList.add("card");
    //J'ai rajouté un animation sur les cars parce que j'ai finit plus tôt
    article.setAttribute("data-aos","fade-right");
    article.setAttribute("data-aos-offset","200");
    article.setAttribute("data-aos-duration" , "1000");
    article.setAttribute("data-aos-easing","ease-in-out");
    article.setAttribute("data-aos-mirror","true");
    article.setAttribute("data-aos-once","false");
    article.setAttribute("data-aos-anchor-placement","left-right");
    //log d'information console pour desactiver basculer LOGS en "false"
    if(LOGS == true){
        console.log("card xeno : "+ objet.name +" Faite");
    }
    //log d'information console pour desactiver basculer LOGS en "false"
    return article;
};

//fonction qui renvoie une erreur pour le try catch si le type de l'objet n'existe pas 

function typeExists(input){
    const type = ["humain", "animal de compagnie", "Xeno"];
    let isMatch = false;
    for(let i = 0 ; i<type.length ; i++){
        if(type[i].match(input) == null){
            isMatch = true;
        }
    }
    if(!isMatch){
        throw new Error("Type de profil non Existant");
    }
}

//-----------------------Fonctions de construction d'éléments HTML--------------------------

function profil(list){
    const cardList = [];
    for(let i = 0 ; i < list.length ; i++){
        try{
            typeExists(list[i].type);
            switch(list[i].type){
                case "humain" :
                    cardList.push(cardHuman(list[i]));
                    //log d'information console pour desactiver basculer LOGS en "false"
                    if(LOGS == true){
                        console.log("ajout de card human : "+list[i].name+" à cardlist");
                    }
                    //log d'information console pour desactiver basculer LOGS en "false"
                    break;
                case "animal de compagnie" :
                    cardList.push(cardPet(list[i]));
                    //log d'information console pour desactiver basculer LOGS en "false"
                    if(LOGS == true){
                        console.log("ajout de card pet : "+list[i].name+" à cardlist");
                    }
                    //log d'information console pour desactiver basculer LOGS en "false"
                    break;
                case "Xeno" :
                    cardList.push(cardXeno(list[i]));
                    //log d'information console pour desactiver basculer LOGS en "false"
                    if(LOGS == true){
                        console.log("ajout de card xeno : "+list[i].name+" à cardlist");
                    }
                    //log d'information console pour desactiver basculer LOGS en "false"
                    break;

                default:
                    //log d'information console pour desactiver basculer LOGS en "false"
                    if(LOGS == true){
                        console.log("finit");
                    }
                    //log d'information console pour desactiver basculer LOGS en "false"                
                    break;
            }
        }catch(e){
            console.error(e.message);
        }
    };
    return cardList;
}

function profilAll(sqList){
    const cardTab = [];
    const profils = document.querySelector(".profils");
    for(let i = 0 ; i<sqList.length; i++){
    //Avec la deuxième version de tabData, il n'y a besoin que d'une seule boucle pour traiter les informations du tableau donc pas de variable stop pour enregistrer les tableaux successifs
        let stop = profil(sqList[i]);
        for(let j = 0 ; j<stop.length; j++){           
            cardTab.push(stop[j]);
        }
        //log d'information console pour desactiver basculer LOGS en "false"
        if(LOGS == true){
            console.log(cardTab);
        }
        //log d'information console pour desactiver basculer LOGS en "false"
    }
    for(let i = 0 ; i<cardTab.length; i++){
        profils.appendChild(cardTab[i]);
    }
};

profilAll(tabData);

//--------------------------PARTIE LEAFLET---------------------------------

let map = L.map('map').setView([43.604429, 1.443812], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


function markerProfil(objet){
    const ICON = L.icon({
        iconUrl : objet.icon,
        iconSize : [50.83],
        iconAnchor : [25.83],
    });

const current = L.marker([objet.latitude, objet.longitude],{icon:ICON}).addTo(map);
current.bindPopup("Je suis ici !");

};

//Fonction pour réunir les différents tableaux tabData dans un seul grand tableau pour la première version sans merge, sqList vaux pour "square liste" vu que c'est une liste en 2D

function groupList(sqList){
    const markers = [];
    for(let i = 0 ; i<sqList.length; i++){
        let stop = sqList[i];
        for(let j = 0 ; j<stop.length; j++){           
            markers.push(stop[j]);
        }
    }
    //log d'information console pour desactiver basculer LOGS en "false"
    if(LOGS == true){
        console.log("Profils stockés pour création de marqueurs :\n", markers);
    }
    //log d'information console pour desactiver basculer LOGS en "false"

    return markers;
}

//Fonction qui prends en entrée la liste et qui générère des marqueurs pour toutes les entrées des sous listes sqList vaux pour "square liste" vu que c'est une liste en 2D

function markerProfilAll(sqList){
    const markers = groupList(sqList)
    for(let i = 0 ; i<markers.length; i++){
        //J'ai mis un timer pour faire un effet visible de pop mais ça n'a pas l'air de marcher
        setTimeout(() => {
            markerProfil(markers[i]);
            //log d'information console pour desactiver basculer LOGS en "false"
            if(LOGS == true){
                console.log("pop");
            }
            //log d'information console pour desactiver basculer LOGS en "false"
        },100);
    }
}

markerProfilAll(tabData);
//___

