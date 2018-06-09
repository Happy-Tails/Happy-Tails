$(document).ready(function () {
    $.get("/getAccountTrail", function (data) {
        console.log(data);
        $.each(data, function (i, val) {
            // var item = val.dataValues;

            var trailDiv = $("<div>")
            var titleDiv = $("<h2>").text(val.trailName);
            var descrDiv = $("<p class='card-text' id='AddCardText'>").text(val.trailDescription);
            var lengthDiv = $("<p id='length'>").text(val.trailLength);
            trailDiv.append(titleDiv).append(descrDiv).append(lengthDiv);
            $("#addedTrails").append(trailDiv);
        })
    });
});