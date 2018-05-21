$(document).ready(function(){
    $("#test").text(localStorage.getItem("email"))
})









function showTrail() {

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
    });

    // // Need a div to hold the trial
    //   var trailDiv = $("<div class='trail'>");

    //   // Storing the trail rating
    //   var rating = response.rating;

    //   // Creating an element to have the rating displayed
    //   var trailRating = $("<p>").text("Rating: " + rating);

    //   // Displaying the rating
    //   trailDiv.append(trailRating);
    // });

}

$("#submit-trail").on("click", function (event) {
    event.preventDefault();
    showTrail();
});

