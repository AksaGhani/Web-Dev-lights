//get lights method: Using Shirley's code which has been adjusted
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

// which lights
for (let currentLightID = 0; currentLightID < 4; currentLightID++)
{
    togglelight(currentLightID);
}

//My light code
//lights Id's
let lightId1 = 1;
let lightId2 = 2;
let lightId3 = 3;
let lightId4 = 4;
let lightId5 = 5;
let lightId6 = 6;

// which lights?
for (let currentLightID = 0; currentLightID < 4; currentLightID++)
{
    togglelight(currentLightID);
}

function allLightsGreen()
{
    greenLight(lightId1);
    greenLight(lightId2);
    greenLight(lightId3);
    greenLight(lightId4);
    yellowLight(lightId5);
    purpleLight(lightId6);
}
function lightSequence()
{
 blueLight(lightId4);
 yellowLight(lightId5);
 purpleLight(lightId6);
}

//different light colours
function greenLight(element)
{
    var getState = $.getJSON(getLightURI(element), function (data)
    {
        var state = data["state"]["on"];
        if (state)
        {
            state = true;
        }
        else
        {
            state = true;
        }

        var lightState = {"on" : state, "hue": 25500, "bri": 250};

        $.ajax({
            url: getLightURI(element) + "state/",
            type: "PUT",
            data: JSON.stringify(lightState)
        })
    });
}

function redLight(element)
{
    var getState = $.getJSON(getLightURI(element), function (data)
    {
        var state = data["state"]["on"];
        if (state)
        {
            state = true;
        }
        else
        {
            state = true;
        }

        var lightState = {"on" : state, "hue": 0, "bri":250};

        $.ajax({
            url: getLightURI(element) + "state/",
            type: "PUT",
            data: JSON.stringify(lightState)
        })
    });
}
function pinkLight(element)
{
    var getState = $.getJSON(getLightURI(element), function (data)
    {
        var state = data["state"]["on"];
        if (state)
        {
            state = true;
        }
        else
        {
            state = true;
        }

        var lightState = {"on" : state, "hue": 56100, "bri":250};

        $.ajax({
            url: getLightURI(element) + "state/",
            type: "PUT",
            data: JSON.stringify(lightState)
        })
    });
}
function blueLight(element)
{
    var getState = $.getJSON(getLightURI(element), function (data)
    {
        var state = data["state"]["on"];
        if (state)
        {
            state = true;
        }
        else
        {
            state = true;
        }

        var lightState = {"on" : state, "hue":39520};

        $.ajax({
            url: getLightURI(element) + "state/",
            type: "PUT",
            data: JSON.stringify(lightState)
        })
    });
}
function yellowLight(element)
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

        var lightState = {"on" : state, "hue":10000, "bri":250};

        $.ajax({
            url: getLightURI(element) + "state/",
            type: "PUT",
            data: JSON.stringify(lightState)
        })
    });
}
function purpleLight(element)
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

        var lightState = {"on" : state, "hue": 49990, "bri":250};

        $.ajax({
            url: getLightURI(element) + "state/",
            type: "PUT",
            data: JSON.stringify(lightState)
        })
    });
}


