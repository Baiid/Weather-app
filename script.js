
const input = document.getElementById("input")
const cityName = document.getElementById("cityName")
const temp = document.getElementById("temperature")
const sky = document.getElementById("sky")
const submit = document.getElementById("submit")
const time = document.getElementById("time")
const hum = document.getElementById("hum")
const API = "bac56e07d03dbc48060bdd2e03428a33"
 


//Date
let today = new Date()
time.innerHTML = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();



submit.addEventListener("click", function(){

fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value +'&units=metric&appid=bac56e07d03dbc48060bdd2e03428a33')
.then(resp => resp.json()) //Convert to json file
.then(data => {

    console.log(data)
    temp.innerHTML = Math.round(data.main.temp) + " &#8451;"
    cityName.innerHTML = data.name
    sky.innerHTML = data.weather[0].main 
    hum.innerHTML = data.main.humidity + "%"

 
   
})
    


.catch(err => alert("Error: Please insert correct city name")) //Catch error

})



















