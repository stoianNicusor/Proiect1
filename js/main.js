$(document).ready(function(){

  //CAROUSEL

  $(".owl-carousel").owlCarousel({
  	loop:true,
  	nav:true,
  	dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        576:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });

  //GO TOP

 	$(".goTop").click(function(){
 		$("html").scrollTop( 0 );
 	})

  //BUTTON

 	$(window).scroll(function() {

    var scrollTop = $(this).scrollTop();
    //console.log(scrollTop);
      if (scrollTop > 550) {
        $(".goTop").show();

    } else {
        $(".goTop").hide();
    }
	});

  //ANIMATION TITLE

  var waypoint = new Waypoint({
    element: document.getElementById("featured"),
    handler: function() {
    document.getElementById('featuredTitle').style.animation = "mover 1.5s";
    },
    offset: 300
  })
   var waypoint = new Waypoint({
    element: document.getElementById("middle"),
    handler: function() {
    document.getElementById('articles').style.animation = "mover 1.5s";
    },
    offset: 300
  })

  //MENU

  $("#top .meniu-button").click(function(){
    $("#for-menu").show(300);
    $("#menu").show(300);
  });

  $("#menu .fa-times").click(function(){
    $("#for-menu").hide();
    $(this).next("#for-menu").hide('slide', {direction: 'left'},1400);
    $("#menu").hide(100);
  });

});



/* 

var scrollPos = $(window).scrollTop();
 		if(scrollPos > 0){
 			$('.goTop').show();
 		}
 		else{
 			$('.goTop').hide();
 		}


var scrollPos = $(window).scrollTop();

var lastScrollTop = 0;
$(window).scroll(function() {

    var scrollTop = $(this).scrollTop();
    
      if (scrollTop > lastScrollTop) {
        
        $('.goTop').show();
    } else {
     
        $('.goTop').hide();
    }
    
    lastScrollTop = scrollTop;
});

/*
obiect = {"kind":"youtube#searchListResponse","etag":"\"m2yskBQFythfE4irbTIeOgYYfBU/PaiEDiVxOyCWelLPuuwa9LKz3Gk\"","nextPageToken":"CAUQAA","regionCode":"KE","pageInfo":{"totalResults":4249,"resultsPerPage":5},"items":[{"kind":"youtube#searchResult","etag":"\"m2yskBQFythfE4irbTIeOgYYfBU/QpOIr3QKlV5EUlzfFcVvDiJT0hw\"","id":{"kind":"youtube#channel","channelId":"UCJowOS1R0FnhipXVqEnYU1A"}},{"kind":"youtube#searchResult","etag":"\"m2yskBQFythfE4irbTIeOgYYfBU/AWutzVOt_5p1iLVifyBdfoSTf9E\"","id":{"kind":"youtube#video","videoId":"Eqa2nAAhHN0"}},{"kind":"youtube#searchResult","etag":"\"m2yskBQFythfE4irbTIeOgYYfBU/2dIR9BTfr7QphpBuY3hPU-h5u-4\"","id":{"kind":"youtube#video","videoId":"IirngItQuVs"}}]}
console.log(obiect.regionCode);
console.log(obiect.pageInfo.totalResults);
console.log(obiect.items[0].id.channelId);
console.log(obiect.items[0].etag);
console.log(obiect.items[1].etag);
/*

function salut(){
	console.log("Salut");
}
salut();

scadere = (x,y) =>{
	console.log(x-y);
}
scadere(4,6)


function adunare(x,y){
	console.log(x+y);
}
adunare(2,4);

for(i=0;i<5;i++){
	if(i%2==0){
		console.log("Par");
	}
}

nume = "Ion";
hobby = ["Desen","Muzica"];
ion = {varsta:20,
	oras:"Bucuresti",
	masini:["Opel","Fiat","Alfa Romeo"]
	  }


console.log(ion.masini[1]);
*/
