$(document).ready(function () {
    $.get("/getAccountTrail", function (data) {
        console.log(data);
        $.each(data, function (i, val) {
            // var item = val.dataValues;
            console.log(val);
            var name = val.trailName;
            var description = val.trailDescription; 
            var length = val.trailLength;
            // var trailDiv = $("<div id='yourTrail'>");
            // var titleDiv = $("<h2>").text(val.trailName);
            // var descrDiv = $("<p class='card-text' id='AddCardText'>").text(val.trailDescription);
            // var lengthDiv = $("<p id='length'>").text(val.trailLength);
            // trailDiv.append(titleDiv).append(descrDiv).append(lengthDiv);

            $("#addedTrails").append(
                "<div class='row'>" + 
                "<div class='col-sm-6'>" +
                "<div class='card' id='NewTrail'>" +
                "<div class='card-body'>" + 
                "<h2 class='card-title' id='AddCardTitle'>" + name + "</h2>" +
                "<p class='card-text' id='AddCardText'>" + description + "</p>" +
                "<p id='length'>" + length + " miles" + "</p>" +
                "</div>" +
                "</div>" +
                "</div>"
            );
        })
    });
});