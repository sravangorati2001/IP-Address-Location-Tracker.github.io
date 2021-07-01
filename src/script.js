var map;
window.addEventListener('load',mapDisplay(28.7041, 77.1025));

    $('#submit').click(function(){
      var ip=$('#IP').val();
      if(ip==="")
      alert("please enter IP Address");
      else{
      map.remove();
       
        var API_KEY="44b5154c6e7b4a418847327bf7840615";

       var url="https://api.ipgeolocation.io/ipgeo?apiKey="+API_KEY+"&ip="+ip;
      
       $.get(url,function(data){
      var latitude=parseFloat(data.latitude);
      var longitude=parseFloat(data.longitude);
      console.log(data);
      
        $('#city').html(data.city)
        $('#country').html(data.country_name);
        $('#flag').attr("src",data.country_flag)
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
