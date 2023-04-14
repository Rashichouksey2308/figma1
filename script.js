
$(document).ready(function () {

    $(".btn").click(function () {
        //   button
        $(this).text(function (show, hide) {
            return hide =='-' ? '+' : '-'
        });

        //   toggle
        var height = { scrollTop: $(document).height() }
        $(".top-Header").animate({ height: 'toggle' });
        // $(".top-Header").animate({height:'toggle'});
    });


    
    //  slider
    var currentSlide = 1;
    var $slider = $(".slider");
    var slideCount = $slider.children().length;
    var slideTime = 2000;
    setInterval(function () {
        $slider.animate({
            marginLeft: '-=900px'
        }, 800);
    }, slideTime);

    console.log(slideCount, "dfjk")
});
