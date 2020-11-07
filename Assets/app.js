var button = document.querySelector('.search');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var SearchCityIcon = document.querySelector('#SearchCityIcon')

button.addEventListener('click', function(event) {
    event.preventDefault()
    var inputValue = document.querySelector('.Submit');
    var city = inputValue.value
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&appid=1110a537a5d0dc6edde7bf296b840bde')
    .then(Response => Response.json())
    .then(data => {
        console.log(data)
   
    var nameValue = data.name[0];
    var tempValue = data.main.temp;
    var descValue = data.weather[0].description;
    var iconValue = data.weather[0].icon;
    var iconurl = 'http://openweathermap.org/img/wn/'+iconValue+'@2x.png'

    SearchCityIcon.setAttribute('src',iconurl)


    name.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;
    })
})
