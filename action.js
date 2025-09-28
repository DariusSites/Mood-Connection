//---------STAGE 1 LINK ELEMENTS-----------------//
let displayBoard = document.querySelector("article");
let biomeTitles = document.querySelector("#biomesTXT");
let sectionBG = document.querySelector("section");

let coverContent = document.querySelector(".coverCont");
let forestContent = document.querySelector(".forestCont");
let grasslandContent = document.querySelector(".grasslandCont");
let desertContent= document.querySelector(".desertCont");
let tundraContent = document.querySelector(".tundraCont");

let coverText = document.querySelector("#coverFact");
let forestText = document.querySelector("#forestFact");
let grassText = document.querySelector("#grasslandFact");
let desertText = document.querySelector("#desertFact");
let tundraText = document.querySelector("#tundraFact");


let focal = document.querySelector("#focusBTN");
let peace = document.querySelector("#peaceBTN");
let angry = document.querySelector("#angryBTN");
let happy = document.querySelector("#happyBTN");


// --------STAGE 2 CREATE FUNCTIONS----//
function coverVisibleToggle(){
     biomeTitles.style.display = "block";
         biomeTitles.innerText = "EARTH";

       coverContent.style.display = "block";
      coverText.style.display = "block";
}

function forestVisibleToggle(){
         biomeTitles.style.display = "block";
         biomeTitles.innerText = "FOREST";


        forestContent.style.display = "block";
        forestText.style.display = "block";
        sectionBG.style.background = "#7ab97a";
       

      coverContent.style.display = "none";
      coverText.style.display = "none";

        grasslandContent.style.display = "none";
        grassText.style.display = "none";

        desertContent.style.display = "none";
        desertText.style.display = "none";

          tundraContent.style.display = "none";
        tundraText.style.display = "none";

};

function grassVisibleToggle(){
        biomeTitles.style.display = "block";
         biomeTitles.innerText = "GRASSLANDS";

        grasslandContent.style.display = "block";
        grassText.style.display = "block";
        sectionBG.style.background = "#60b012";

       coverContent.style.display = "none";
      coverText.style.display = "none";

        forestContent.style.display = "none";
        forestText.style.display = "none";

        desertContent.style.display = "none";
        desertText.style.display = "none";

          tundraContent.style.display = "none";
        tundraText.style.display = "none";


};

function desertVisibleToggle(){
      biomeTitles.style.display = "block";
         biomeTitles.innerText = "DESERT";

        desertContent.style.display = "block";
        desertText.style.display = "block";
        sectionBG.style.background = "#bfa592";
       

        coverContent.style.display = "none";
         coverText.style.display = "none";

        forestContent.style.display = "none";
        forestText.style.display = "none";

        grasslandContent.style.display = "none";
        grassText.style.display = "none";

         tundraContent.style.display = "none";
        tundraText.style.display = "none";
};

function tundraVisibleToggle(){
        biomeTitles.style.display = "block";
         biomeTitles.innerText = "TUNDRA";

        tundraContent.style.display = "block";
        tundraText.style.display = "block";
        sectionBG.style.background = "#92c0c0";
        

         coverContent.style.display = "none";
         coverText.style.display = "none";

        forestContent.style.display = "none";
        forestText.style.display = "none";

        grasslandContent.style.display = "none";
        grassText.style.display = "none";

         desertContent.style.display = "none";
        desertText.style.display = "none";

};


// --------STAGE 3 ADD EVENT LISTNERS----//
window.addEventListener("load",coverVisibleToggle)
focal.addEventListener("click",forestVisibleToggle);
peace.addEventListener("click",grassVisibleToggle);
angry.addEventListener("click",desertVisibleToggle);
happy.addEventListener("click",tundraVisibleToggle);