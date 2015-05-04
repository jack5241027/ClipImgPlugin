// (function($) {

//     $.fn.clipImg = function(config) {
//         $(this).hover(function(e) {

//         	console.log(e.pageX);

//         }, function(e) {

//         });

//         (function(e) {
//             e.preventDefault();
//             pageApp.changeScene(4, {}, true);
//         });

//         return this;
//     };

//     this.each(function() {
//         init($(this));
//     });

//     $('.js_toRule').toRule();

// })($);

var clip = {
    mousePos : '0px',
    mousemove: function() {
        $('.upImg').mousemove(function(e) {
        	var g = $('.imgPlace').offset().left;
			mousePos = e.pageX;
            $(this).css('clip', 'rect(0px, ' + mousePos + 'px, 678px, 0px)');
        });
    }()
};
