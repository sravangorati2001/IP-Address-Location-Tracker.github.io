var map;
window.addEventListener('load',mapDisplay(28.7041, 77.1025));

    $('#submit').click(function(){
      map.remove();
        var ip=$('#IP').val();
        var API_KEY="44b5154c6e7b4a418847327bf7840615";

       var url="https://api.ipgeolocation.io/ipgeo?apiKey="+API_KEY+"&ip="+ip;
      
       $.get(url,function(data){
      var latitude=parseFloat(data.latitude);
      var longitude=parseFloat(data.longitude);
     
        $('#city').html(data.city)
        $('#country').html(data.country_name);
        $('#flag').attr("src",data.country_flag)
       mapDisplay(latitude,longitude);
      
       });
    });


function mapDisplay(latitude,longitude){
  var mapOptions = {
    center: [latitude,longitude],
    zoom: 10
 }
 
 map = new L.map('map', mapOptions);

 var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
  L.marker([latitude,longitude]).addTo(map);

 map.addLayer(layer);
}
