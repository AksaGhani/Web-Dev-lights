var div1 = document.getElementById("1");

function changeBgColour() {
    let colours = [
        div1.setAttribute("class", "blueDiv"),
        div1.setAttribute("class", "greenDiv"),
        div1.setAttribute("class", "purpleDiv")
    ]
}

function blueBg() {
    div1.setAttribute("class", "blueDiv");
}