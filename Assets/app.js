var button = document.querySelector('.search');
var myDate = document.querySelector('.date');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var SearchCityIcon = document.querySelector('#SearchCityIcon');
var lat = document.querySelector('.lat');
var log = document.querySelector('.log');
var card = document.querySelector('.card')


button.addEventListener('click', function (event) {
    event.preventDefault()
    var inputValue = document.querySelector('.Submit');
    var city = inputValue.value
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=1110a537a5d0dc6edde7bf296b840bde')
        .then(Response => Response.json())
        .then(data => {
            console.log(data)

      
            var inputValue = document.querySelector('.Submit');
            var city = inputValue.value
            fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=1110a537a5d0dc6edde7bf296b840bde')
                .then(data => {
                    console.log(data) })


                    var nameValue = data.name;
                    var dateValue = data.date;
                    var tempValue = data.main.temp;
                    var descValue = data.weather[0].description;
                    var iconValue = data.weather[0].icon;
                    var iconurl = 'http://openweathermap.org/img/wn/' + iconValue + '@2x.png'
                    var cardValue = data.main.temp;


                    SearchCityIcon.setAttribute('src', iconurl)


                    document.querySelector('.name').textContent = nameValue;
                    document.querySelector('.temp').textContent = tempValue;
                    document.querySelector('.desc').textContent = descValue;
                    document.querySelector('.date').textContent = dateValue;
                    document.querySelector('.card').textContent = cardValue;
                    
                })
        })

