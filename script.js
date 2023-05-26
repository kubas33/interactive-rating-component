$(document).ready(function(){

    let isRated = false;

    function checkTextLength() {
        isRated = $("#chosen-rate").text().length > 0;
    }

    $(".submit").click(function(){
         if (isRated) {
            $("#rating-state").toggle();
             $("#thank-you-state").toggle();
        }
        else {
            alert("Please choose rate first! :)")
        };
    });

    $("li.rate-circle").click(function(){
        $("li.rate-circle").removeClass("checked");
        $(this).addClass("checked");
        $("#chosen-rate").text($(this).text());
        checkTextLength()
    });
  }); 