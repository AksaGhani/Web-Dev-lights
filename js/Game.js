//check if all colours have been turned off
function checkAllOff()
{
    //call methods for each light-bulb
    light4Off(lightId4);
    light5Off(lightId5);
    light6Off(lightId6);

    //turn the rest of the lights green
    greenLight(lightId1);
    greenLight(lightId2);
    greenLight(lightId3);
}

function light4Off(element)
{
    var getState = $.getJSON(getLightURI(element), function (data)
    {
        var state = data["state"]["off"];
        if (state)
        {
            state = true;
        }
        //if off turn green
        var lightState = {"on" : state, "hue":25500};

        $.ajax({
            url: getLightURI(element) + "state/",
            type: "PUT",
            data: JSON.stringify(lightState)
        })
    });
}
function light5Off(element)
{
    var getState = $.getJSON(getLightURI(element), function (data)
    {
        var state = data["state"]["off"];
        if (state)
        {
            state = true;
        }
        //if off turn green
        var lightState = {"on" : state, "hue":25500};

        $.ajax({
            url: getLightURI(element) + "state/",
            type: "PUT",
            data: JSON.stringify(lightState)
        })
    });
}
function light6Off(element)
{
    var getState = $.getJSON(getLightURI(element), function (data)
    {
        var state = data["state"]["off"];
        if (state)
        {
            state = true;
        }
        //if off turn green
        var lightState = {"on" : state, "hue":25500};

        $.ajax({
            url: getLightURI(element) + "state/",
            type: "PUT",
            data: JSON.stringify(lightState)
        })
    });
}

//RESET BUTTON - TURN ALL LIGHTS OFF
function turnAllOff()
{
// which lights
    for (let currentLightID = 0; currentLightID < 6; currentLightID++)
    {
        turnLightOff(currentLightID);
    }
}
function turnLightOff(element)
{
    var getState = $.getJSON(getLightURI(element), function (data)
    {
        var state = data["state"]["off"];
        if (state)
        {
            state = false;
        }

        var lightState = {"off" : state};

        $.ajax({
            url: getLightURI(element) + "state/",
            type: "PUT",
            data: JSON.stringify(lightState)
        })
    });
}