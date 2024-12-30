console.log("Hello World");

let tabsLink01 = document.querySelector(".tabs-link-01");
let tabsLink02 = document.querySelector(".tabs-link-02");
let tabsLink03 = document.querySelector(".tabs-link-03");

let tabsContentDiv = document.querySelector(".tabs-content-div");

let tabsContent01 = document.querySelector(".tabs-content-01");
let tabsContent02 = document.querySelector(".tabs-content-02");
let tabsContent03 = document.querySelector(".tabs-content-03");

displayContentOne();

function displayContentOne(){

    tabsContent01.style.display = "block"
    tabsContent02.style.display = "none";
    tabsContent03.style.display = "none";

    tabsLink01.classList.add("hover-effect");
    tabsLink02.classList.remove("hover-effect");
    tabsLink03.classList.remove("hover-effect");
};

tabsLink01.addEventListener("click", function(){
    console.log("Button 01 was clicked");
    
    displayContentOne();
    
});

tabsLink02.addEventListener("click", function(){
    console.log("Button 02 was clicked");
    tabsContent02.style.display = "block";
    tabsContent01.style.display = "none";
    tabsContent03.style.display = "none";

    tabsLink02.classList.add("hover-effect");
    tabsLink01.classList.remove("hover-effect");
    tabsLink03.classList.remove("hover-effect");
});

tabsLink03.addEventListener("click", function(){
    console.log("Button 03 was clicked");
    tabsContent03.style.display = "block";
    tabsContent01.style.display = "none";
    tabsContent02.style.display = "none";

    tabsLink03.classList.add("hover-effect");
    tabsLink01.classList.remove("hover-effect");
    tabsLink02.classList.remove("hover-effect");
});

let writerEffect01 = document.querySelector(".writer-effect-01")
let writerEffect02 = document.querySelector(".writer-effect-02");
//writerEffect.style.color = "#fff";
let text = "Web Developer";
let next = "D-Yung Kay";
let spanIndex01 = 0;
let spanIndex02 = 0;
let speed = 50;

function typeWriter(){
    if(spanIndex02 < text.length){
        writerEffect02.innerHTML += text.charAt(spanIndex02);
        spanIndex02++;
        setTimeout(typeWriter, 100);
    }
    if(spanIndex01 < next.length){
        writerEffect01.innerHTML += next.charAt(spanIndex01);
        spanIndex01++;
        setTimeout(typeWriter, 500);
    }
};

typeWriter();
let headerContainer = document.querySelector(".header-container");
document.addEventListener("scroll", () => {
    //headerContainer.style.border = "2px solid #ffffff";
   // headerContainer.style.borderRadius = "10px"

});

let menuBar = document.querySelector(".fa-bars");
menuBar.addEventListener("click", DisplayMenu);

let closeBar = document.querySelector(".fa-close");
closeBar.addEventListener("click", closeMenu);

let dropMenu = document.querySelector(".drop-menu");

function DisplayMenu(){
    dropMenu.style.display = "block";
    menuBar.style.display = "none";
    closeBar.style.display = "block";
};

function closeMenu(){
    dropMenu.style.display = "none";
    closeBar.style.display = "none";
    menuBar.style.display = "block";

}

function openLink(){

    let dropLink01 = document.querySelector("#drop-link-01");
    let dropLink02 = document.querySelector("#drop-link-02");
    let dropLink03 = document.querySelector("#drop-link-03");
    let dropLink04 = document.querySelector("#drop-link-04");
    let dropLink05 = document.querySelector("#drop-link-05");
    
    dropLink01.addEventListener("click", function(){
        dropMenu.style.display = "none";
        closeBar.style.display = "none";
        menuBar.style.display = "block";
    })


    dropLink02.addEventListener("click", function(){
        dropMenu.style.display = "none";
        closeBar.style.display = "none";
        menuBar.style.display = "block";
    })

    dropLink03.addEventListener("click", function(){
        dropMenu.style.display = "none";
        closeBar.style.display = "none";
        menuBar.style.display = "block";
    })

    dropLink04.addEventListener("click", function(){
        dropMenu.style.display = "none";
        closeBar.style.display = "none";
        menuBar.style.display = "block";
    })

    dropLink05.addEventListener("click", function(){
        dropMenu.style.display = "none";
        closeBar.style.display = "none";
        menuBar.style.display = "block";
    })


};


