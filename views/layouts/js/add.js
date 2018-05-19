$(document).ready(function(){
    var addBtn = "";

    $(document).on("click",addBtn,function(){
        var trailUrl = $(this).attr("data-url");
        $.ajax({
            url: "",
            method: "POST",
            data: {
                fav: trailUrl,
                email: "placeholder",
                password: "placeholder"
            }
        })
    })
})