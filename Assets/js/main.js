// hamburger menu - sidebar
$(document).ready(function() {


    //slider header
    function slider() {
        $("header").toggleClass("bg1");
        $("header").toggleClass("bg2", 'slow');
    }

    setInterval(slider, 5000);

    // menu boczne
    function toggleSidebar() {
        $(".sidebar").toggleClass("active");
        $(".sidebar").toggleClass("inactive");
    }

    $(".hamburger1").on("click tap", function() {
        toggleSidebar();
    });
    $(".hamburger2").on("click tap", function() {
        toggleSidebar();
    });

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            toggleSidebar();
        }
    });

    function showPhotos() {
        $(".four").toggleClass("hide");
        $(".four").toggleClass("show");
    }

    function showDescription() {
        $(".description4").toggleClass("hide");
        $(".description4").toggleClass("show2");

    }

    function updateButton() {
        if ($(".viewAll").text() === 'VIEW LESS') {
            $(".viewAll").text("VIEW ALL");
        } else {
            $(".viewAll").text("VIEW LESS");
        };



    };


    $(".viewAll").on("click tap", function() {
        updateButton(), showPhotos(), showDescription();
    });
});