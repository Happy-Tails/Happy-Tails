function searchTrail() {
    $("#showTrailSearch").empty();
    var city = $("#city").val();
    console.log(city);
    var state = $("#state").val();
    console.log(state);
    // (this is what I used to test api)
    // var country = "United States";
    // var state = "Ohio";
    // var city = "Cleveland";

    var queryURL = "https://trailapi-trailapi.p.mashape.com/?q[activities_activity_type_name_eq]=hiking&q[city_cont]=" + city + "&q[country_cont]=United States" + "&q[state_cont]=" + state;

    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
            "X-Mashape-Key": "mdooQIOQIVmshTWRLBxh7vmwiYS3p1TjHYZjsnha3vcYMIF7Tl"
        }
    }).then(function (urlResponse) {
        console.log(urlResponse);

        var trailArray = [];

        urlResponse.places.forEach(function(singleTrail) {
    
            var name = singleTrail.name;
            var description = singleTrail.description;
            var length = singleTrail.activities[0].length;
            //trailArray.push(trail);'
            showTrail(name, description, length);
              
        });
     
    });
}

function showTrail(name, description, length){
    $("#showTrailSearch").append(
        "<div class='row'>" + 
        "<div class='col-sm-6'>" +
        "<div class='card' id='NewTrail'>" +
        "<div class='card-body'>" + 
        "<h2 class='card-title' id='AddCardTitle'>" + name + "</h2>" +
        "<p class='card-text' id='AddCardText'>" + description + "</p>" +
        "<p id='length'>" + length + " miles" + "</p>" +
        "<button id='addNewTrail' class='btn btn-primary'>Add Trail</button>" +
        "</div>" +
        "</div>" +
        "</div>"
    );
}



$("#submit-trail").on("click", function (event) {
            event.preventDefault();
            searchTrail();
        });

function addTrail(name, description, length){
    $("#addedTrails").append(
        "<div class='row'>" + 
        "<div class='col-sm-6'>" +
        "<div class='card' id='usertrails'>" +
        "<div class='card-body'>" + 
        "<h2 class='card-title' id='UserCardTitle'>" + name + "</h2>" +
        "<p class='card-text' id='UserCardText'>" + description + "</p>" +
        "<p id='length'>" + length + " miles" + "</p>" +
        "<a href='www.google.com'' class='btn btn-primary'>Go to Trail</a>" +
        "</div>" +
        "</div>" +
        "</div>"
    );
}

$(document).on("click", "#addNewTrail", function(event){
    event.preventDefault();
    addTrail();
    window.location.href ="viewAccount.html";
});