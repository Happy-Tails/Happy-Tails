module.exports = function(sequelize,dataTypes){
    var Trail = sequelize.define("Trail",{
        
    });
    return Trail;
};

function showTrail() {
    var url = "https://trailapi-trailapi.p.mashape.com/?lat=34.1&limit=25&lon=-105.2&q[activities_activity_type_name_eq]=hiking&q[city_cont]=Denver&q[country_cont]=Australia&q[state_cont]=California&radius=25";

    var city = $(this).val()("city");
    var state = $(this).val()("state");
    var country = $(this).val()("country");
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
        console.log(response);
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

showTrail();
