function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(22.756748,75.902977),
      zoom:20,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker = new google.maps.Marker({position: center});

    marker.setMap(map);
    }