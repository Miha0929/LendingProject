console.log("Hi");


let cardFree = document.getElementById("cardFree");
let cardPro = document.getElementById("cardPro");
let cardPremium = document.getElementById("cardPremium");

let selectedText = document.getElementById("selectedText");
let selectedBtn = document.getElementById("selectedBtn");

let selectedPlan = "Free";   // состояние

// делаем первый активным при загрузке
cardFree.classList.add("pricing-card--active");

cardFree.addEventListener("click", handleFreeClick);
cardPro.addEventListener("click", handleProClick);
cardPremium.addEventListener("click", handlePremiumClick);

function handleFreeClick() {

    selectedPlan = "Free";

    cardFree.classList.add("pricing-card--active");
    cardPro.classList.remove("pricing-card--active");
    cardPremium.classList.remove("pricing-card--active");

    selectedText.textContent = "Вы выбрали: Free";
    selectedBtn.textContent = "Оформить Free";
}

function handleProClick() {

    selectedPlan = "Pro";

    cardPro.classList.add("pricing-card--active");
    cardFree.classList.remove("pricing-card--active");
    cardPremium.classList.remove("pricing-card--active");

    selectedText.textContent = "Вы выбрали: Pro";
    selectedBtn.textContent = "Оформить Pro";
}

function handlePremiumClick() {

    selectedPlan = "Premium";

    cardPremium.classList.add("pricing-card--active");
    cardFree.classList.remove("pricing-card--active");
    cardPro.classList.remove("pricing-card--active");

    selectedText.textContent = "Вы выбрали: Premium";
    selectedBtn.textContent = "Оформить Premium";
}
