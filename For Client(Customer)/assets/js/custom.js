
$(window).scroll(function(){

	
	/*------------------------------
		SCROLL TOP
	------------------------------*/
	if($(window).scrollTop() > 300) {
		$("#scrolltop").addClass("in");
	}
	else {
		$("#scrolltop").removeClass("in");
	}
});

/*------------------------------
	DOCUMENT READY
------------------------------*/
$(document).ready(function() {

	/*------------------------------
		SCROLL FUNCTION
	------------------------------*/
	function scrollToObj(target, offset, time) {
		$('html, body').animate({scrollTop: $( target ).offset().top - offset}, time);
	}

	$("a.scroll[href^='#']").click(function(){
		scrollToObj($.attr(this, 'href'), 80, 1000);
		return false;
	});

	$("#scrolltop").click(function() {
		scrollToObj('body',0, 1000);
    });

	/*------------------------------
		COMPARE TABLE
	------------------------------*/
	$('#table-compare').dragtable({
		dragHandle:'.fa-arrows',
		dragaccept:'.accept'
	});

	/*------------------------------
		TOOLTIP INIT
	------------------------------*/
	$('.widget-color .checkbox label').tooltip();

	/*------------------------------
		SCROLLSPY INIT
	------------------------------*/
	$('body').scrollspy({ target: '#scrollspy-nav', offset:100 });

	/*------------------------------
		GRID/LIST TOGGLE
	------------------------------*/
	$('#toggle-grid').click(function(e) {
        $(this).addClass('active');
		$('#toggle-list').removeClass('active');
		$('#products').fadeOut(300, function() {
			$(this).addClass('grid').removeClass('list').fadeIn(300);
		});
    });

	$('#toggle-list').click(function(e) {
        $(this).addClass('active');
		$('#toggle-grid').removeClass('active');
		$('#products').fadeOut(300, function() {
			$(this).addClass('list').removeClass('grid').fadeIn(300);
		});
    });

	/*------------------------------
		NAVBAR SEARCH
	------------------------------*/
	$('.navbar-search').click(function(e) {
		if($(this).hasClass("open")) {
			$(this).find("i").removeClass("fa-times");
			$(this).find("i").addClass("fa-search");
		}
		else {
			$(this).find("i").removeClass("fa-search");
			$(this).find("i").addClass("fa-times");
		}
	});

	$('.navbar-search').on('hide.bs.dropdown', function () {
		$(this).find("i").removeClass("fa-times");
		$(this).find("i").addClass("fa-search");
	});

	/*------------------------------
		OWL CAROUSEL
	------------------------------*/
	$("#homepage-1-carousel").owlCarousel({
    	items : 1,
		loop : true,
		autoplay : true,
		nav : true,
		navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn'
  	});

	$("#homepage-2-carousel").owlCarousel({
    	items : 1,
		loop : true,
		autoplay : true,
		nav : true,
		navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn'
  	});

	$("#homepage-3-carousel").owlCarousel({
    	items : 1,
		loop : true,
		autoplay : true,
		nav : true,
		navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn'
  	});

	$("#homepage-4-carousel").owlCarousel({
    	items : 1,
		loop : true,
		autoplay : true,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn'
  	});

	$("#testimonials-carousel").owlCarousel({
    	items : 1,
		loop : true,
		autoplay : true,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn'
  	});

	$("#blog-post-gallery").owlCarousel({
    	items : 1,
		loop : true,
		nav : true,
		dots : false,
		autoplay : true,
		navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
 	});

	$("#brands-carousel").owlCarousel({
		loop : true,
		autoplayHoverPause : true,
		autoplay : true,
		autoplayTimeout : 2000,
		smartSpeed : 1000,
		dots : false,
		responsive:{
			0:{
				items:2,
			},
			480:{
				items:3,
			},
			600:{
				items:4,
			},
			768:{
				items:5,
			},
			1200:{
				items:6,
			}
		}
  	});

	$("#product-carousel").owlCarousel({
    	items : 1,
		loop : true,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn'
  	});

	$('#product-quickview').on('shown.bs.modal', function (e) {

		$("#product-quickview").find(".product-carousel-wrapper").removeClass('hidden');

		$("#product-carousel-modal").owlCarousel({
			items : 1,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
		});
	})

	/*------------------------------
		PRODUCT QUANTITY
	------------------------------*/
	$('#qty-plus').click(function(e) {
		var temp = $('#qty').val();
		$('#qty').attr("value",parseInt(temp) + 1);
	});

	$('#qty-minus').click(function(e) {
		var temp = $('#qty').val();
		if(parseInt(temp) > 0) {
			$('#qty').attr("value",parseInt(temp) - 1);
		}
	});

	$('#modal-qty-plus').click(function(e) {
		var temp = $('#modal-qty').val();
		$('#modal-qty').attr("value",parseInt(temp) + 1);
	});

	$('#modal-qty-minus').click(function(e) {
		var temp = $('#modal-qty').val();
		if(parseInt(temp) > 0) {
			$('#modal-qty').attr("value",parseInt(temp) - 1);
		}
	});

	/*------------------------------
		WIDGET - PRICE FILTER
	------------------------------*/
	var minimum = 20;
	var maximum = 300;

	$( "#slider-range" ).slider({
      range: true,
      min: minimum,
      max: maximum,
      values: [ minimum, maximum ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] );
		$( "#amount2" ).val( "$" + ui.values[ 1 ] );
      }
    });

    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ));
	$( "#amount2" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ));

	/*------------------------------
		TWITTER QUERY
	------------------------------*/
	var twitterOptions = {
		"id": '541286991938457600',
		"domId": '',
		"customCallback": handleTweets,
		"maxTweets": 2,
		"enableLinks": true,
		"showUser": false,
		"showImages": false,
		"showInteraction": false
	};

	function handleTweets(tweets) {
		var n = tweets.length;
		var i = 0;
		var element = document.getElementById('twitter-wrapper');
		var html = '<ul class="list-unstyled">';
		while(i < n) {
		  html += '<li>' + tweets[i] + '</li>';
		  i++;
		}
		html += '</ul>';
		element.innerHTML = html;
	}

	twitterFetcher.fetch(twitterOptions);

	/*------------------------------
		GOOGLE MAP
	------------------------------*/
	var regions = [
		{lat: 18.4576048, lng: 73.846304},
		{lat: 40.715915, lng: -73.994263},
		{lat: 52.526258, lng: 13.430727},
		{lat: 48.857004, lng: 2.3645643}
	];

	var coordinates = [
		[{lat: 18.4576048, lng: 73.8484927}, "Tulsiganga Snacks,Near PICT College,Pune"], //for PICT
		[{lat: 18.4574063, lng: 73.8518723}, "Vijay Book Centre,Near PICT,pune"], //for PICT
		[{lat: 18.4576048, lng: 73.8501342}, "Shree Balaji Copiers Tours & Travels,Near PICT,pune"], //for PICT
		[{lat: 40.722355, lng: -73.998211}, "63 Crosby St\nNew York, NY 10012, USA"], //NEW YORK
		[{lat: 52.516808, lng: 13.393176}, "Bebelpl. 1\n10117 Berlin, Germany"], //BERLIN
		[{lat: 52.537379, lng: 13.425749}, "Jablonskistraße 16\n10405 Berlin, Germany"], //BERLIN
		[{lat: 52.516805, lng: 13.455275}, "Rigaer Str. 9\n10247 Berlin, Germany"], //BERLIN
		[{lat: 48.869031, lng: 2.333837}, "18 Rue Antin\n75002 Paris, France"] //PARIS
	];

	var markers = [];

	var map;

	var zoom = 13;
	if($(window).width() < 768) {
		zoom = zoom - 1;
	}

	// GOOGLE MAP INIT
	function initialize($) {
		var mapOptions = {
		  	zoom: zoom,
		  	center: regions[0],
		  	navigationControl: false,
		  	mapTypeControl: false,
		  	scaleControl: false,
		  	draggable: true,
			scrollwheel: false
		}
		map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
		google.maps.event.addListenerOnce(map, 'idle', putmarkers);
	}

	function putmarkers($) {
		for (var i = 0; i < coordinates.length; i++) {
			addMarkerWithTimeout(coordinates[i][0], coordinates[i][1], i+1, i * 400);
		}
	}

	if($("#map-canvas").length) {
		google.maps.event.addDomListener(window, 'load', initialize);
	}

	function addMarkerWithTimeout(position, text, store, timeout) {
	  	window.setTimeout(function() {

			var marker = new google.maps.Marker({
				position: position,
		  		map: map,
				title: text,
				url: "#marker-" + store,
		  		animation: google.maps.Animation.DROP
			});

			google.maps.event.addListener(marker, 'click', function() {
				scrollToObj(marker.url, 80, 800);
			});

			google.maps.event.addListener(marker, 'mouseover', function (event) {
				$("#map-tooltip").html("<p>" + marker.title + "</p>");
			});

			google.maps.event.addListener(marker, 'mouseout', function (event) {
				$("#map-tooltip").html('');
			});

			markers.push(marker);
	  	}, timeout);
	}

	$('#change-region').change(function(e) {
		var res = $(this).val();
		map.panTo(regions[res-1]);
		activaTab("region-" + res.toString());
    });

	function activaTab(tab){
		$('#tabs-regions .nav-tabs a[href="#' + tab + '"]').tab('show');
	};

});
