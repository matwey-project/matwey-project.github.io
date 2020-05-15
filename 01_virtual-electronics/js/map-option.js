var options = {
      styles: [
      {
        "stylers": [
        {
          "visibility": "simplified"
        }
        ]
      },
      {
        "stylers": [
        {
          "color": "#131314"
        }
        ]
      },
      {
        "featureType": "water",
        "stylers": [
        {
          "color": "#131313"
        },
        {
          "lightness": 7
        }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
        {
          "visibility": "on"
        },
        {
          "lightness": 25
        }
        ]
      }
      ]
    };

// var markers = [
//   {
//     coordinates: {lat: 51.491686, lng: -0.038784},
//     image: '/img/marker.svg',
//     info: '<p>text</p>'
//   },
// ];

var coords = [
    {lat: 50.0274617, lng: 36.2225905, zoom: 12},
    {lat: 51.5177099, lng: 0.1254583, zoom: 12},
    {lat: 1.2890698, lng: 103.8447739, zoom: 12}
];
var markers = [];
var maps = [];

var icon = {
    url: "/img/marker.svg"
};

function initMap() {
    for(var i = 0, length = coords.length; i < length; i++)
    {
        var point = coords[i];
        var latlng = new google.maps.LatLng(point.lat, point.lng);

        /**********Div's are called in this line*********/
        maps[i] = new google.maps.Map(document.getElementsByClassName('map')[i], {
            zoom: point.zoom,
            center: latlng,
            options
        });

        markers[i] = new google.maps.Marker({
            position: latlng,
            map: maps[i],
            icon: icon
        });
    }
}
google.maps.event.addDomListener(window, "load", initMap);