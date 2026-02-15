document.addEventListener("DOMContentLoaded", () => {
    const currentTheme = localStorage.getItem("theme");
    const currentThemeIcon = document.querySelector("#theme-icon");

    if (currentTheme === "dark") {
        currentThemeIcon.setAttribute("data-lucide", "sun");
        themeButton.setAttribute("data-theme-mode", "dark");
        toggleClass(currentThemeIcon, ["text-white"]);
        
        handleChangeTheme();
        lucide.createIcons();
    }

    initTime();
});

const LIGHT_COLORS = ["bg-blue-500", "bg-white", "bg-black"];
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const timeLocation = document.querySelector("#time-location");
const themeButton = document.querySelector("#theme-button");

themeButton.addEventListener("click", (event) => {
    const currentThemeMode = event.currentTarget.getAttribute("data-theme-mode");
    const themeIcon = document.querySelector("#theme-icon");

    if (currentThemeMode === "light") {
        themeIcon.setAttribute("data-lucide", "sun");
        event.currentTarget.setAttribute("data-theme-mode", "dark");
        localStorage.setItem("theme", "dark");

        handleChangeTheme();
    } else {
        themeIcon.setAttribute("data-lucide", "moon");
        event.currentTarget.setAttribute("data-theme-mode", "light");
        localStorage.setItem("theme", "light");

        handleChangeTheme();
    }

    toggleClass(themeIcon, ["text-white"]);

    lucide.createIcons();
});

function initTime() {
    const date = new Date();

    const currentHours = String(date.getHours()).padStart(2, "0");
    const currentMinutes = String(date.getMinutes()).padStart(2, "0");
    const currentSeconds = String(date.getSeconds()).padStart(2, "0");
    const currentTimeLocation = Intl.DateTimeFormat().resolvedOptions().timeZone;

    hours.textContent = currentHours;
    minutes.textContent = currentMinutes;
    seconds.textContent = currentSeconds;
    timeLocation.textContent = currentTimeLocation;
}

function handleChangeTheme() {
    const timeCards = document.querySelectorAll("#time-wrapper > div");
    toggleClass(timeLocation, ["text-stone-700", "text-white"]);
    toggleClass(document.body, ["bg-blue-50", "bg-stone-900"]);

    timeCards.forEach((card) => {
        const cardContent = card.children;

        toggleClass(card, ["bg-white", "bg-stone-800"]);
        toggleClass(cardContent[0], ["text-white"]);
        if (cardContent[1]) {
            toggleClass(cardContent[1], ["text-white"]);
        }
    });
}

function toggleClass(element, classList) {
    for (item of classList) {
        element.classList.toggle(item);
    }
}

setInterval(initTime, 1000);