(function($) {

    $.fn.clipImg = function(config) {
        var mousePos = 0;

        $(this).parents('.imgPlace').mousemove(function(e) {
            mousePos = e.pageX;
            $('.upImg').css('clip', 'rect(0px, ' + mousePos + 'px, 678px, 0px)');
        });

        return this;
    };

    $('.upImg').clipImg();

})($);

// var clip = {
//     mousePos : '0px',
//     mousemove: function() {
//         $('.imgPlace').mousemove(function(e) {
//         	var g = $('.imgPlace').offset().left;
// 			mousePos = e.pageX;
//             $('.upImg').css('clip', 'rect(0px, ' + mousePos + 'px, 678px, 0px)');
//         });
//     }()
// };
