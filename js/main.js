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
			//Init Home
			TweenMax.to($('.text--1'),0.5,{autoAlpha:1,x:0,delay: 0.5, ease:Expo.easeInOut});
			TweenMax.to($('.img--1'),0.5,{autoAlpha:1, x:0, delay: 0.5, ease:Expo.easeInOut});
			main.Home();
		},

		//Functions
		Home: function(){
			FullPage.fullpage({
				navigation: true,
				scrollingSpeed: 1500,
				fitToSectionDelay: 1000,
				onLeave: function(index, newIndex, direction){
					if (newIndex==1) {
						//Intro -- 1
						TweenMax.to($('.text--1'),0.5,{autoAlpha:1, x:0,delay: 0.5, ease:Expo.easeInOut});
						TweenMax.to($('.img--1'),0.5,{autoAlpha:1, x:0, delay: 0.5, ease:Expo.easeInOut});

						//H i d e -- 2
						TweenMax.to($('.text--2'),0.5,{autoAlpha:0,x:-500,delay: 0.5, ease:Expo.easeInOut});
						TweenMax.to($('.img--2'),0.3,{autoAlpha:0, x:800, delay: 0.3, ease:Expo.easeIn});
					}
					if (newIndex == 2){
						//Intro -- 2
						TweenMax.to($('.text--2'),0.5,{autoAlpha:1,x:0,delay: 0.5, ease:Expo.easeInOut});
						TweenMax.to($('.img--2'),0.5,{autoAlpha:1, x:0, delay: 0.5, ease:Expo.easeInOut});

						//H i d e -- 1
						TweenMax.to($('.text--1'),0.5,{autoAlpha:0, x:-500,delay: 0.5, ease:Expo.easeInOut});
						TweenMax.to($('.img--1'),0.3,{autoAlpha:0, x:800, delay: 0.3, ease:Expo.easeIn});

						//H i d e -- 3
						TweenMax.to($('.text--3'),0.5,{autoAlpha:0,x:500,delay: 0.5, ease:Expo.easeInOut});
						TweenMax.to($('.img--3'),0.3,{autoAlpha:0, x:-500, delay: 0.3, ease:Expo.easeIn});
					}
					if (newIndex == 3){
						//Intro -- 3
						TweenMax.to($('.text--3'),0.5,{autoAlpha:1,x:0,delay: 0.5, ease:Expo.easeInOut});
						TweenMax.to($('.img--3'),0.5,{autoAlpha:1, x:0, delay: 0.5, ease:Expo.easeInOut});

						//H i d e -- 2
						TweenMax.to($('.text--2'),0.5,{autoAlpha:0,x:-500,delay: 0.5, ease:Expo.easeInOut});
						TweenMax.to($('.img--2'),0.3,{autoAlpha:0, x:800, delay: 0.3, ease:Expo.easeIn});

						//Intro -- 4
						TweenMax.to($('.text--4'),0.5,{autoAlpha:0,x:500,delay: 0.5, ease:Expo.easeInOut});
						TweenMax.to($('.img--4'),0.5,{autoAlpha:0, x:-500, delay: 0.5, ease:Expo.easeInOut});
					}
					if (newIndex == 4){
						//Intro -- 4
						TweenMax.to($('.text--4'),0.5,{autoAlpha:1,x:0,delay: 0.5, ease:Expo.easeInOut});
						TweenMax.to($('.img--4'),0.5,{autoAlpha:1, x:0, delay: 0.5, ease:Expo.easeInOut});

						//H i d e -- 3
						TweenMax.to($('.text--3'),0.5,{autoAlpha:0,x:500,delay: 0.5, ease:Expo.easeInOut});
						TweenMax.to($('.img--3'),0.3,{autoAlpha:0, x:-500, delay: 0.3, ease:Expo.easeIn});
					}
				},
				afterLoad: function(anchorLink, index) {
					if (index==1) {
						
					}
				}
			});
		},

	};//end main

	//Run
	window.main = main;
	$(window).load(function() {
		TweenMax.to($('.line--1'),0.5,{width:0,delay:0.5,ease:Expo.easeInOut});
		TweenMax.to($('.line--2'),0.5,{delay:0.5,ease:Expo.easeInOut});
		TweenMax.to($('#loader'), 0.5,{autoAlpha:0, ease:Power3.easeInOut, delay:2});
		main.init();
	});

})(jQuery);