function searchTrail() {

    var city = $("#city").val();
    console.log(city);
    var state = $("#state").val();
    console.log(state);
    var country = $("#country").val();
    console.log(country);
    // (this is what I used to test api)
    // var country = "United States";
    // var state = "Ohio";
    // var city = "Cleveland";

    var queryURL = "https://trailapi-trailapi.p.mashape.com/?q[activities_activity_type_name_eq]=hiking&q[city_cont]=" + city + "&q[country_cont]=" + country + "&q[state_cont]=" + state;

    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
            "X-Mashape-Key": "mdooQIOQIVmshTWRLBxh7vmwiYS3p1TjHYZjsnha3vcYMIF7Tl"
        }
    }).then(function (response) {
        var urlResponse = response;
        console.log(urlResponse);

        // Need a div to hold the trail info
        var trailInfo = $("<div class='trail'>");

        //Storing the trial name
        var trailName = response.name;
        console.log(trailName);

        //Storing the trail description
        var trailDescription = response.description;
        console.log(trailDescription);

        //Storing the trail length
        var trailLength = response.activies.length;
        console.log(trailLength);

        // Creating an element to have the rating displayed
        var showTrail = $("<p>").text("Trail Name: " + trailName);

        // Displaying the rating
        trailInfo.append(trailName);
    });

}

$("#submit-trail").on("click", function (event) {
            event.preventDefault();
            searchTrail();
        });

