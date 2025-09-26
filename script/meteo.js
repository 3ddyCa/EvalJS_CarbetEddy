

//Le fichier JS pour la partie Météo
//Sert à activer/desactiver les logs sur meteo et script
let LOGS =true;
//Objet conditions météos définit après avoir cliqué sur le bouton
let bulletin;

async function askMeteo(){
   return await fetch("https://prevision-meteo.ch/services/json/toulouse").then(response => {
    if(response.status == 200){
        return response.json();
    }else{
        throw new Error("Problème lors du fetch")
    }
})
}

const cardMeteo = document.querySelector(".cardMeteo");
const cardMeteo_btt = cardMeteo.children[cardMeteo.children.length-1];
const info = document.createElement("div");
// J'ai ajouté du CSS à la carte météo pour la rendre plus esthétique !
info.setAttribute("style" , "height:300px; width:200px;margin:16px 0 16px 0;border:3px solid white; background-color:royalblue; border-radius:10px; padding:16px 12px 24px 12px");
cardMeteo.insertBefore(info, cardMeteo.children[cardMeteo.children.length-1]);
// cardMeteo.insertBefore(info, cardMeteo_btt);

function addInfo(input){
    info.innerText = `${input}`;
}

function bouton(){
    cardMeteo.children[cardMeteo.children.length-1].classList.add("button__cardMeteo");
}

cardMeteo_btt.addEventListener("mousedown",()=>{
    cardMeteo_btt.setAttribute("style" , "background-color:orangered");
    if(LOGS == true){
        console.log("down");
    }
})
cardMeteo_btt.addEventListener("mouseup",()=>{
    cardMeteo_btt.removeAttribute("style");
    if(LOGS == true){
        console.log("up");
    }
})

//fonction pour reset l'affichage de cardMeteo

function eChildCleanup(element){
    const pick = Array.from(element.children);
    for(let i = 0 ; i < pick.length; i++){
        try{
            if(pick[i] != undefined || pick[i] != null){
                element.removeChild(pick[i]);
            }else{
                if(LOGS == true){
                    console.log("L'élément de mossède plus d'enfants");
                }
            }
        }catch(e){
            throw "Error erasing child";
        }
    }
}

cardMeteo_btt.addEventListener("click",()=>{
    askMeteo().then((response) =>{
        if(LOGS == true){
            console.log("Bulletin météo json : " , response);
        }
        return bulletin = response;
    });
    eChildCleanup(cardMeteo.children[2]);
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
    cardMeteo.children[2].appendChild(info_1);
    cardMeteo.children[2].appendChild(info_2);
    cardMeteo.children[2].appendChild(info_3);
    cardMeteo.children[2].appendChild(info_4);
    bouton();
    if(LOGS == true){
        console.log("askMeteo");
    }
    },200);
})