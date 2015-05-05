(function($) {

    $.fn.clipImg = function(config) {
    	var $this = $(this);
        var imgPlaceWeight= $this.width();
        var imgPlaceHeight= $this.height();
    	var mousePos = (imgPlaceWeight /2);
    	$this.css('clip', 'rect(0px, ' + mousePos + 'px, 678px, 0px)');
        $('.line').css({
        	'height':imgPlaceHeight
        });

        $(this).parent().css({
        	'width' :imgPlaceWeight,
        	'height':imgPlaceHeight
        });
        $(this).parent().mousemove(function(e) {
            mousePos = e.pageX -10;
            $this.css('clip', 'rect(0px, ' + mousePos + 'px, 678px, 0px)');
			$('.line').css('left', mousePos);
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
