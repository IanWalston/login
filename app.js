var attemps
var wins
var style = document.body.style

var setInitialState = function () {
    attempts = 0
    wins = 0
    style.transform = "none"
    style.opacity = 1
    style.paddingTop = 0
    style.paddingRight = 0
}

document.addEventListener("submit", function (e) {
    e.preventDefault()

    if (username.value.toLowerCase() == "level" && password.value == 'Access123') {
        wins++
        style.transform = "rotate(" + (wins * 412) + "deg)"
        style.opacity = 1 - (wins / 5)
        if (wins == 1) {
            alert("Welcome, " + username.value + "!");
        }
        if (wins == 7) {
            setInitialState()
        }
        if (screen.width > 512) {
            style.paddingTop = (wins * 128) + "px"
            style.paddingRight = (wins * 128) + "px"
        }
    } else {
        attempts++
        if (attempts == 1){
            forgot_password.classList.remove("hide")
        }
        if (attempts < 9) {
            forgot_password.style.fontSize = 25 + (attempts * 3) + "px"
        }
        if (attempts > 2) {
            if (confirm("It seems you may have forgotten your password, do you need help?")) {
                window.location = "https://www.google.com/search?q=how+to+reset+my+password"
            }
        } else {
            alert("Incorrect user name and password combination")
        }
    }
})
setInitialState()