$(document).ready(function () {
    $.get("/getAccountTrail", function (data) {
        console.log(data);
        $.each(data, function (i, val) {
            // var item = val.dataValues;

            var trailDiv = $("<div>")
            var titleDiv = $("<div>").text(val.trailName);
            var descrDiv = $("<div>").text(val.trailDescription);
            var lengthDiv = $("<div>").text(val.trailLength);
            trailDiv.append(titleDiv).append(descrDiv).append(lengthDiv);
            $("#addedTrails").append(trailDiv);
        })
    });
});