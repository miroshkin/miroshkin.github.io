
// $.getJSON('http://miroshkin.netlify.com/json/life-expectancy.json', function(data) {
//     //data is the JSON string
//     console.log(data);
// });
alert("start");
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  alert("readystate:" + xhr.readystate);
  if (xhr.readystate === 4) {
    var list = JSON.parse(xhr.responseText);
    var listHTML = "<ul>";
    alert(list.length);
    for(var i=0; i<list.length; i += 1){
      alert("start loop");
      listHTML += "<li>";
      listHTML += list[i].Country;
      listHTML += "</li>";
    }
    listHTML += "</ul>";
    alert(listHTML);
    document.getElementById("content").innerHTML = listHTML;
  }
}
xhr.open("GET", "https://miroshkin.netlify.com/json/life-expectancy.json");
xhr.send();
