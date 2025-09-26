

//Le fichier JS pour la partie Météo
//Sert à activer/desactiver les logs sur meteo et script
let LOGS =true;
//Objet conditions météos définit après avoir cliqué sur le bouton


//Fonction d'interrogation de l'API météo, c'est possible de le faire sans fonction et il n'est pas question de fonction dans l'énoncé mais je crois que c'est plus safe non ? 


async function askMeteoAPI(){
   return await fetch("https://prevision-meteo.ch/services/json/toulouse").then(response => {
    if(response.status == 200){
        return response.json();
    }else{
        throw new Error("Problème lors du fetch")
    }
})
}

//Initialisation des éléments du DOM

const cardMeteo = document.querySelector(".cardMeteo");
const bouton__cardMeteo = cardMeteo.children[cardMeteo.children.length-1];
const info = document.createElement("div");

// J'ai ajouté du CSS à la carte météo pour la rendre plus esthétique !
info.setAttribute("style" , "height:300px; width:200px;margin:16px 0 16px 0;border:3px solid white; background-color:royalblue; border-radius:10px; padding:16px 12px 24px 12px");
cardMeteo.insertBefore(info, bouton__cardMeteo);
// cardMeteo.insertBefore(info, cardMeteo_btt);

//Fonctions pour la partie météo

//addInfoV1
function addInfo(input){
    //version appendChild
    info.appendChild(input);
}
//addInfoV2
// function addInfo(input){
//     //version appendChild
//     info.innerText = input;
// }


function bouton(){
    cardMeteo.children[cardMeteo.children.length-1].classList.add("button__cardMeteo");
}

bouton__cardMeteo.addEventListener("mousedown",()=>{
    bouton__cardMeteo.setAttribute("style" , "background-color:orangered");
    //log d'information console pour desactiver basculer LOGS en "false"
    if(LOGS == true){
        console.log("down");
    }
    //log d'information console pour desactiver basculer LOGS en "false"
})
bouton__cardMeteo.addEventListener("mouseup",()=>{
    bouton__cardMeteo.removeAttribute("style");
    //log d'information console pour desactiver basculer LOGS en "false"
    if(LOGS == true){
        console.log("up");
    }
    //log d'information console pour desactiver basculer LOGS en "false"
})

//fonction pour reset l'affichage de cardMeteo -- pas demandé mais permet de recliquer sans que ça déborde

function eChildCleanup(element){
    const pick = Array.from(element.children);
    for(let i = 0 ; i < pick.length; i++){
        try{
            if(pick[i] != undefined || pick[i] != null){
                element.removeChild(pick[i]);
            }else{
                //log d'information console pour desactiver basculer LOGS en "false"
                if(LOGS == true){
                    console.log("L'élément de possède plus d'enfants");
                }
                //log d'information console pour desactiver basculer LOGS en "false"
            }
        }catch(e){
            throw "Erreur en supprimant un child";
        }
    }
}

//Action de chargement du bulletin

bouton__cardMeteo.addEventListener("click",()=>{
    let bulletin;
    askMeteoAPI().then((response) =>{
        //log d'information console pour desactiver basculer LOGS en "false"
        if(LOGS == true){
            console.log("Bulletin météo json : " , response);
        }
        //log d'information console pour desactiver basculer LOGS en "false"
        return bulletin = response;
    });
    //Appel de la fonction de reset de "info" pour éviter que la requête actuelle s'ajoute à la précédente
    eChildCleanup(info);
    setTimeout(() =>{
    const info_1 = document.createElement("h4");
    const info_2 = document.createElement("h4");
    const info_3 = document.createElement("h4");
    const info_4 = document.createElement("h4");
    //Ajout d'un attribut style pour changer un peu le CSS des balises H4
    info_1.setAttribute("style","color:white; font-size:19px ; margin-bottom:7px; text-align:center");
    info_2.setAttribute("style","color:white; font-size:19px ; margin-bottom:7px; text-align:center");
    info_3.setAttribute("style","color:white; font-size:19px ; margin-bottom:7px; text-align:center");
    info_4.setAttribute("style","color:white; font-size:19px ; margin-bottom:7px; text-align:center");
    //REtour à l'énoncé
    info_1.innerText = `Condition actuelle : \n${bulletin.current_condition.condition}`;
    info_2.innerText = `Température actuelle : \n${bulletin.current_condition.tmp}°C`;
    info_3.innerText = `Température maximum jour 0 : \n${bulletin.fcst_day_0.tmax}°C`;
    info_4.innerText = `Température minimum jour 0 : \n${bulletin.fcst_day_0.tmin}°C`;
    addInfo(info_1);
    addInfo(info_2);
    addInfo(info_3);
    addInfo(info_4);
    bouton();
    //log d'information console pour desactiver basculer LOGS en "false"
    if(LOGS == true){
        console.log("askMeteo");
    }
    //log d'information console pour desactiver basculer LOGS en "false"
    },200);
})