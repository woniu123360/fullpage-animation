/*!
	* main.js 	|	Jorge Fco.
	* Copyright 2016
*/
(function($){
	//Var
	var FullPage = $('#fullpage');
	var img = $('.img-1');
	var text = $('#text-1');

	//Init
	main = {
		init: function(){
			main.Home();
		},

		//Functions
		Home: function(){
			FullPage.fullpage({
				navigation: true,
				scrollingSpeed: 1500,
				fitToSectionDelay: 1000,
				onLeave: function(index, newIndex, direction){
					if (newIndex == 3){
						//Out 3
						TweenMax.to($('.text-3'),0.5,{autoAlpha:1,delay: 0.5, ease:Expo.easeInOut});
						TweenMax.to($('.img-3'),0.5,{autoAlpha:1, x:0, delay: 0.5, ease:Expo.easeInOut});
					}
					if (newIndex==4) {
						//In 3
						TweenMax.to($('.text-3'),0.5,{autoAlpha:0,delay: 0.5, ease:Expo.easeInOut});
						TweenMax.to($('.img-3'),0.3,{autoAlpha:0, x:800, delay: 0.3, ease:Expo.easeIn});
					}
				},
				afterLoad: function(anchorLink, index) {
					if (index==1) {
						TweenMax.to(text,0.5,{autoAlpha:1,delay: 1, ease:Expo.easeInOut});
						TweenMax.to(img,0.5,{autoAlpha:1, x:0, delay: 0.5, ease:Expo.easeInOut});
					}
				}
			});
		},

	};//end main

	//Run
	main.init();

})(jQuery);