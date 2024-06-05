
let searchButton=document.getElementById('search');
let inpute=document.querySelector('.search-bar');
let City=document.querySelector(".city");
// let shoWeather=document.querySelector("weatherloading")\
let showErrore=document.querySelector(".errore");
// console.log(showErrore);

let citiesData={
  tehran:{city:"Tehran",temp:12,weather:"rainy",humidity:23,windSpeed:32},
  shiraz:{city:"Shiraz",temp:9,weather:"fine",humidity:12,windSpeed:14},
  tabriz:{city:"Tabriz",temp:1,weather:"snow",humidity:43,windSpeed:12},
  mashhad:{city:"Mashhad",temp:16,weather:"Sunny",humidity:7,windSpeed:24},
  esfahan:{city:"Esfahan",temp:20,weather:"rainy",humidity:15,windSpeed:18},
};
 
searchButton.addEventListener('click',function(){
  let markaz=citiesData[inpute.value];
  // console.log(  citiesData[inpute.value]);
  if(markaz){

    document.querySelector(".weather").classList.remove('loading');
    City.innerHTML=markaz.city;
    document.querySelector(".temp").innerHTML=markaz.temp+"°C";
    document.querySelector(".humidity").innerHTML="Humidity: "+markaz.humidity;
    document.querySelector(".wind").innerHTML="Wind speed:"+markaz.windSpeed+"km/h";

  }
  else{
  
    showErrore.style.display='flex';
    setTimeout(function(){
    showErrore.style.display='none';
      console.log("alah")
    },3000)


  }
  

})

