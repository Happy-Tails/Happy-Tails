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
        "<h5 class='card-title' id='AddCardTitle'>Trail Name Here</h5>" +
        "<p class='card-text' id='AddCardText'>API Info</p>" +
        "<a href='#'' class='btn btn-primary'>Add Trail</a>" +
        "</div>" +
        "</div>" +
        "</div>"

        // "<h2 id='name'>" + name + "</h2>" +
        // "<h3 id='description'>" + description + "</h3>" +
        // "<p id='length'>" + length + " miles" + "</p>" +
        // "</div>"
    );
}


$("#submit-trail").on("click", function (event) {
            event.preventDefault();
            searchTrail();
        });

