/*!
	* main.js 	|	Jorge Fco.
	* Copyright 2016
*/
(function($){
	//Var
	var FullPage = $('#fullpage');

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
					if (newIndex == 2){
						//Intro -- 2
						TweenMax.to($('.text-2'),0.5,{autoAlpha:1,delay: 0.5, ease:Expo.easeInOut});
						TweenMax.to($('.img-2'),0.5,{autoAlpha:1, x:0, delay: 0.5, ease:Expo.easeInOut});

						//Exit -- 1
						TweenMax.to($('.text-1'),0.5,{autoAlpha:0, delay: 0.5, ease:Expo.easeInOut});
						TweenMax.to($('.img-1'),0.3,{autoAlpha:0, x:800, delay: 0.3, ease:Expo.easeIn});
					}
					if (newIndex==1) {
						//Intro -- 1
						TweenMax.to($('.text-1'),0.5,{autoAlpha:1,delay: 1, ease:Expo.easeInOut});
						TweenMax.to($('.img-1'),0.5,{autoAlpha:1, x:0, delay: 0.5, ease:Expo.easeInOut});

						//Exit -- 2
						TweenMax.to($('.text-2'),0.5,{autoAlpha:0,delay: 0.5, ease:Expo.easeInOut});
						TweenMax.to($('.img-2'),0.3,{autoAlpha:0, x:800, delay: 0.3, ease:Expo.easeIn});
					}
				},
				afterLoad: function(anchorLink, index) {
					if (index==1) {
						//Init Home
						TweenMax.to($('.text-1'),0.5,{autoAlpha:1,delay: 1, ease:Expo.easeInOut});
						TweenMax.to($('.img-1'),0.5,{autoAlpha:1, x:0, delay: 0.5, ease:Expo.easeInOut});
					}
				}
			});
		},

	};//end main

	//Run
	main.init();

})(jQuery);