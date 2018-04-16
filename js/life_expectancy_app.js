
// $.getJSON('http://miroshkin.netlify.com/json/life-expectancy.json', function(data) {
//     //data is the JSON string
//     console.log(data);
// });
// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//     var list = JSON.parse(xhr.responseText);
//     var listHTML = "<ul>";
//     for(var i=0; i<list.length; i += 1){
//       listHTML += "<li>";
//       listHTML += list[i].Country + " " + list[i].BothSexesLifeExpectancy;
//       listHTML += "</li>";ы
//     }
//     listHTML += "</ul>";
//     document.getElementById("content").innerHTML = listHTML;
//   }
// }
// xhr.open("GET", "https://miroshkin.netlify.com/json/life-expectancy.json");
// xhr.send();

// Added test comment
// $(document).ready(function () {
  $.getJSON('https://miroshkin.netlify.com/json/life-expectancy.json', function(response) {
      //data is the JSON string
      var listHTML = "<ul>";
      $.each(response, function (index, data) {
        listHTML += "<li>";
        listHTML += data[i].Country + " " + data[i].BothSexesLifeExpectancy;
        listHTML += "</li>";
      });
      listHTML += "</ul>";
      $("content").html(listHTML);
    });
// });
