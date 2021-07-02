var map;
window.addEventListener('load',mapDisplay(28.7041, 77.1025));

    $('#submit').click(function(){
      var ip=$('#IP').val();
      if(ip==="")
      alert("please enter IP Address");
      else{
      map.remove();
       
        var API_KEY="067c8fbb17dde34e18da148f49b95ae4fa7e69c0a4dc875d68d0d51bb1841d7f";

      
       var url="https://api.ipinfodb.com/v3/ip-city/?key="+API_KEY+"&ip="+ip+"&format=json"
      
       $.get(url,function(data){
      var latitude=parseFloat(data.latitude);
      var longitude=parseFloat(data.longitude);
      
        $('#city').html(data.cityName)
        $('#country').html(data.countryName);
        var flag=(data.countryCode).toLowerCase();
        $('#flag').attr("src","https://ipgeolocation.io/static/flags/"+flag+"_64.png")
       mapDisplay(latitude,longitude);
      
       });
      }
    });


function mapDisplay(latitude,longitude){
  var mapOptions = {
    center: [latitude,longitude],
    zoom: 10
 }
 
 // Creating a map object
 map = new L.map('map', mapOptions);
 
 // Creating a Layer object
 var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
  L.marker([latitude,longitude]).addTo(map);
 // Adding layer to the map
 map.addLayer(layer);
}
