

function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(22.756748,75.902977),
      zoom:20,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker = new google.maps.Marker({position: center});

    marker.setMap(map);
    }

  $(window).on('load',function(){
    
     
      $("#imag").fadeOut(-2000);
      $("#imag").fadeIn(2000);
    });


    var iScrollPos = 0;
$(window).scroll(function () {
    var windowsize = $(window).width();
    if(windowsize<=1440){
    var iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos > iScrollPos) {
        $('.header').css('position','absolute');
    } else {
      
        $('.header').css('position','fixed');  
        $(".header").slideDown(1000);
    }
    iScrollPos = iCurScrollPos;
    }
});

function facebook(){
  window.open("https://www.facebook.com/LateralX");
}
function twitter(){
  window.open("https://twitter.com/LateralX_");
}
function instagram(){
  window.open("https://www.instagram.com/LateralX_/");
}
function linkedin(){
  window.open("https://www.linkedin.com/company/lateralx/about/");
}

function sendMail(){
Email.send({
  // SecureToken : "4967fd5b-2bfa-4ab0-8cc2-ae2ad665842b",
  Host : "smtp.zoho.com",
    Username : "admin@lateralx.com",
    Password : "Lateralx@12315",
  To : 'gauravrozatkar@lateralx.com',
  From : "admin@lateralx.com",
  Subject : "CONTACT REQUEST FROM USER",
  Body : "NAME: "+document.getElementById('usr').value+"  Email: "+document.getElementById('email').value+"  MESSAGE: "+document.getElementById('comment').value+"   Phone number:  "+document.getElementById('phn').value+""
}).then(
message => alert(message)
);}