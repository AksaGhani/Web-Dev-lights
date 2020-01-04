let lightId1 = 1;
let lightId2 = 2;
let lightId3 = 3;
let lightId4 = 4;
let lightId5 = 5;

let lightIds = [

]

// which lights?
for (let currentLightID = 0; currentLightID < 4; currentLightID++)
{
    togglelight(currentLightID);
}

function changeColours(element)
{
    let getState = $.getJSON(getLightURI(element), function (data)
    {
        let state = data["state"]["off"];
        if (state)
        {
            state = false;
        }
        else
        {
            blueLight(lightId1);
            redLight(lightId2);
            greenLight(lightId3);
            yellowLight(lightId4);
            pinkLight(lightId5);
        }

        let lightState = {"on":state, "hue" : 46920, "bri":254, "sat":150};

        $.ajax({
            url: getLightURI(element) + "state/",
            type: "PUT",
            data: JSON.stringify(lightState)
        })
    });
}
function lightSequence()
{
// get first light colour
    greenLight(lightId1);

//get second light colour
    redLight(lightId2);

//get third light colour
    blueLight(lightId3);

    //get fourth light colour
    yellowLight(lightId4);
}

//change light colours
function greenLight(element)
{
        let lightState = {"on": true, "hue": 25500, "bri": 254, "sat": 150};
        $.ajax({
            url:getLightURI(element) + "state/",
            type: "PUT",
            data: JSON.stringify(lightState)}
        )
}

function redLight(element) {
    let lightState = {"on": true, "hue": 65533, "bri": 254, "sat": 150};
    $.ajax({
            url: getLightURI(element) + "state/",
            type: "PUT",
            data: JSON.stringify(lightState)
        }
    )
}

function pinkLight(element) {
    let lightState = {"on": true, "hue": 56100, "bri": 254, "sat": 100};
    $.ajax({
            url: getLightURI(element) + "state/",
            type: "PUT",
            data: JSON.stringify(lightState)
        }
    )
}
function blueLight(element)
{
    getLightURI(element);
    {
        let lightState = {"on": true, "hue": 46920, "bri": 254, "sat": 150};
        $.ajax({
                url: getLightURI(element) + "state/",
                type: "PUT",
                data: JSON.stringify(lightState)
            }
        )
    }
}
function yellowLight(element)
{
    let lightState = {"on": true, "hue": 12750, "bri": 254, "sat": 200};
    $.ajax({
        url:getLightURI(element) + "state/",
        type: "PUT",
        data: JSON.stringify(lightState)}
    )
}

//get lights method
function getLightURI(element)
{
    var IP = "http://192.168.0.50/api/";
    var username = "stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz";
    var lights = "/lights/";
    var URI = IP + username + lights;
    return URI + element +"/";
}
function togglelight(element)
{
    var getState = $.getJSON(getLightURI(element), function (data)
    {
        var state = data["state"]["on"];
        if (state)
        {
            state = false;
        }
        else
        {
            state = true;
        }

        var lightState = {"on" : state};

        $.ajax({
            url: getLightURI(element) + "state/",
            type: "PUT",
            data: JSON.stringify(lightState)
        })
    });
}

// Change Lights
for (let currentLightID = 0; currentLightID < 4; currentLightID++)
{
    togglelight(currentLightID);
}

