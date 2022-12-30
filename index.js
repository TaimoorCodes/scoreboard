let homeCount = 0
let guestCount = 0

let homeInput = document.getElementById("home-input")
let guestInput = document.getElementById("guest-input")

function incrementHome1() {
    homeCount += 1
    homeInput.textContent = homeCount
}

function incrementHome2() {
    homeCount += 2
    homeInput.textContent = homeCount
}

function incrementHome3() {
    homeCount += 3
    homeInput.textContent = homeCount
}

function incrementGuest1() {
    guestCount += 1
    guestInput.textContent = guestCount
}

function incrementGuest2() {
    guestCount += 2
    guestInput.textContent = guestCount
}

function incrementGuest3() {
    guestCount += 3
    guestInput.textContent = guestCount
}