var watchID = navigator.geolocation.watchPosition(function(position) {  
  document.getElementById('geo').innerHTML ="" +position.coords.latitude +","+ position.coords.longitude
  //call="http://maps.google.com/maps/api/geocode/json?latlng="+position.coords.latitude=","+position.coords.longitude+"&sensor=false&region=nzThen%20you%20can%20use%20that%20XML%20to%20get%20whatever%20details%20you%20need,%20including%20the%20Citylink|improve%20this%20answeredited%20Oct%2012%20'10%20at%2019:59answered%20Oct%2012%20'10%20at%2019:49PostMan2,6551022Was%20this%20post%20useful%20to%20you?up%20vote0down%20voteIf%20you're%20looking%20for%20free%20(as%20freedom)%20sources,%20you%20can%20use%20Geonames%20API%20findNearbyPlaceName.For%20example%20the%20following%20returns%20nearest%20Placename:http://api.geonames.org/findNearbyPlaceName?lat=47.3&lng=9&username=demoMore%20information%20is%20available%20herehttp://www.geonames.org/export/web-services.html#findNearbyPlaceNameAnother option is getting data from Freebase. Instead of single point it takes bounded box:http://api.freebase.com/api/service/geosearch?location=[30.2,50.4,30.6,50.8]&location_type=/location/citytown&inside=true&indent=1link|improve this answeredited Apr 6 at 7:36answered Apr 6 at 7:28Maksym Kozlenko34624feedbackYour Answerlog in orNameEmailHome PageNot the answer you're looking for? Browse other questions tagged geolocation gps or ask your own question.Hello World!This is a collaboratively edited question and answer site for professional and enthusiast programmers. It's 100% free, no registration required.about » faq »taggedgeolocation × 1630gps × 1553asked12 months agoviewed484 timesactive6 months ago"
  p1=position.coords.latitude;
  p2=position.coords.longitude;
  url="http://where.yahooapis.com/geocode?q="+p1+","+p2+"&gflags=R&appid=ilbsgu7a&flags=J"
  $.getJSON(url,function(data) {
      city=data.ResultSet.Results[0].city;
      uzip=data.ResultSet.Results[0].uzip;
      //alert(city)
      geo=$("geo")
      document.getElementById('geo').innerHTML =""+city
      url2="http://localhost:3000/teachers/"+city+".json"
       $.getJSON(url2,function(data2) {
         //tnm=$("teachersnearme");
         //tnm.append("<h3>Teachers Near Me</h3>").append(data2);
          
         html="<h2>Teachers Near Me</h2>";
          html=html+"<ul class=\"list-thumbnail\">";
          for (i=0;i<data2.length;i++){
             //html=html+"<li>"+data2[i].profile.name+"</li>"
             //html=html+"<li title='" + data2[i].profile.name + "' data-profile-id='" + data2[i].profile.uuid + "'>"
             //html=html+link_to( get_user_avatar(user, :small) , profiles_show_path({:id => profile.uuid}))
             html=html+"<li><a href=\"/profiles/show?id="+ data2[i].profile.uuid+"\">"+data2[i].profile.name+"</a></li>";
            
          }
          
          html=html+"</ul>";
          if (data2.length >0){
             document.getElementById('teachersnearme').innerHTML =html;
          }
         
       }).error(function() { 
      
          //alert("error"); 
       });

  });
  
  //alert("" +position.coords.latitude +","+ position.coords.longitude);  
} ,
function(position){  
  //alert("Error getting position" );  
} 
, {enableHighAccuracy:true, maximumAge:30000, timeout:27000}
);  