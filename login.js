var attemps
var wins
var forgot_password_url = "https://www.google.com/search?q=how+to+reset+my+password"

var setInitialState = function () {
    attempts = 0
    wins = 0
    login.style.transform = "none"
    login.style.opacity = 1
    document.body.style.paddingTop = 0
    document.body.style.paddingRight = 0
}

document.addEventListener("submit", function (e) {
    e.preventDefault()

    if (username.value.toLowerCase() == "level" && password.value == 'Access123') {
        new Audio("submit.mp3").play()
        wins++

        login.style.transform = "rotate(" + (wins * 412) + "deg)"
        login.style.opacity = 1 - (wins / 5)
        if (wins == 1) {
            alert("Welcome, " + username.value + "!");
        }
        if (wins == 7) {
            setInitialState()
        }
        if (screen.width > 512) {
            document.body.style.paddingTop = (wins * 128) + "px"
            document.body.style.paddingRight = (wins * 128) + "px"
        }
    } else {
        attempts++
        if (attempts == 1) {
            var forgot_password_div = document.createElement("div")
            var forgot_password_link = document.createElement("a")

            forgot_password_div.id = "forgot_password"
            forgot_password_link.href = forgot_password_url;
            forgot_password_link.innerHTML = "Help me, I forgot my password"

            forgot_password_div.appendChild(forgot_password_link)
            document.body.appendChild(forgot_password_div)
        }
        if (attempts < 9) {
            forgot_password.style.fontSize = 25 + (attempts * 3) + "px"
        }
        if (attempts > 2) {
            if (confirm("It seems you may have forgotten your password, do you need help?")) {
                window.location = forgot_password_url
            }
        } else {
            alert("Incorrect user name and password combination")
        }
    }
})
setInitialState()