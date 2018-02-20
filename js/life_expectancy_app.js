
// $.getJSON('http://miroshkin.netlify.com/json/life-expectancy.json', function(data) {
//     //data is the JSON string
//     console.log(data);
// });
var xhr = new XMLHttpRequest();
xhr.onreadystatechande = function () {
  if (xhr.readystate === 4) {
    console.log(typeof JSON.parse(xhr.responseText));
  }
}
xhr.open("GET", "https://miroshkin.netlify.com/json/life-expectancy.json");
xhr.send();
