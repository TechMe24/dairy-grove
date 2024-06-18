console.log("connected")

// Grab all elements
// Create an open function
// Create  an close function
// Apply function with event listener

const menuLink = document.getElementById("menuLink")
const menuModal = document.getElementById("menuModal")
const closeModalButton = document.getElementById("modalClose")

let doleModalClose;
let doleMenuLink;


const openModal = function () {
    console.log("open clicked")
    menuModal.style.zIndex = "999"
    menuModal.style.opacity = "1"
}

const closeModal = function () {
    console.log("open clicked")
    menuModal.style.zIndex = "-10"
    menuModal.style.opacity = "0"
}

closeModalButton.addEventListener("click", closeModal)
menuLink.addEventListener("click", openModal)



const faqModal = document.getElementById("faqModal")
const closefaqModalButton = document.getElementById("faqModalClose")
const faqMenuLink = document.getElementById("faqMenuLink")

const openfaqModal = function () {
    console.log("open clicked")
    faqModal.style.zIndex = "999"
    faqModal.style.opacity = "1"
}

const closefaqModal = function () {
    console.log("open clicked")
    faqModal.style.zIndex = "-10"
    faqModal.style.opacity = "0"
}

closeModalButton.addEventListener("click", closeModal)
menuLink.addEventListener("click", openModal)

closefaqModalButton.addEventListener("click", closefaqModal)
faqMenuLink.addEventListener("click", openfaqModal)



doleMenuLink = document.getElementById("doleMenuLink")
const doleModal = document.getElementById("doleModal")
doleModalClose = document.getElementById("doleModalClose")

const openDoleModal = function () {
    console.log("open clicked")
    doleModal.style.zIndex = "999"
    doleModal.style.opacity = "1"
}

const closeDoleModal = function () {
    console.log("open clicked")
    doleModal.style.zIndex = "-10"
    doleModal.style.opacity = "0"
}

if (doleModalClose) {
    doleModalClose.addEventListener("click", closeDoleModal)
}


if (doleMenuLink) {
    doleMenuLink.addEventListener("click", openDoleModal)
}




















// Swiper Section
if (document.querySelector(".mySwiper")) {
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
}




// AIzaSyDncbNz9l1jvkbUFfob6QAFbjfh6kYcbw0


(g => { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => { await (a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = `https://maps.${c}apis.com/maps/api/js?` + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a) })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) })({
    key: "AIzaSyDncbNz9l1jvkbUFfob6QAFbjfh6kYcbw0",
    v: "weekly",
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
});


// Initialize and add the map , 
let map;

async function initMap() {
    // The location of Uluru
    const position = { lat: 41.39203575296136, lng: -82.01231853947638 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered at Uluru
    map = new Map(document.getElementById("map"), {
        zoom: 15,
        center: position,
        mapId: "DEMO_MAP_ID",
    });

    // The marker, positioned at Uluru
    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Dairy Grove",
    });
}

initMap();