const city_name = document.querySelector(".city_name");
const btn = document.getElementById("btn");
const sun_img = document.querySelector(".sun_img");
const temperature = document.querySelector(".temperature");
const SEARCH_BOX = document.querySelector(".SEARCH_BOX")
const temp = document.querySelector(".temp")
const winds = document.querySelector(".winds")
const humid = document.querySelector(".humid")
const desc = document.querySelector(".desc")
const additionl = document.querySelector(".additionl")
const not_found = document.querySelector(".not_found")


async function checkweather(city){
  const API_key='06c0f479224bdb2abcb610e2c5e3c812';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;

  const data =await fetch(`${url}`).then(Response => Response.json());
  console.log(data)

  if(data.cod === "404"){
    console.log("Error");
    not_found.style.display = "flex";
    additionl.style.display = "none";
    temp.style.display = "none";
    return;
  }

   not_found.style.display = "none";
   additionl.style.display = "flex";
   temp.style.display = "flex";

  temperature.innerHTML = `Temp of ${data.name} : ${Math.round(data.main.temp - 273.15)} °C`;
  desc.innerHTML = `${data.weather[0].main}`
  winds.innerHTML = `${data.wind.speed} Km/H`;
  humid.innerHTML = `${data.main.humidity}%`;
  

  switch(data.weather[0].main){
    case 'Clear' :
      sun_img.src = "sunn.png";
     break;
    case 'Clouds' :
     sun_img.src = "cloud.png";
     break;
    case 'Rain' :
     sun_img.src = "/rain.png";
     break;
  }
  // if(data.weather[0].main == "rain")
}
btn.addEventListener('click', ()=>{
  checkweather(city_name.value);
  city_name.value =''
})