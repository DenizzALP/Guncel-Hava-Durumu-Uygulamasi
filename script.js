// https://openweathermap.org/current   bu link uzerinden istedigim sekilde apiyi alip buraya entegre edebiliyorum
//https://api.openweathermap.org/data/2.5/ bunu aliyoruiz sayfadaki linkten
const url = 'https://api.openweathermap.org/data/2.5/' // istekte bulunacagimiz icin basina http koyduk
const key = '359d303e21fbbb49c85ea5c37792d9b0'//bu sitemizin bana vermis oldugu apikeydir
const setQuery = (e) =>{//klavyeden gelen olayi yakalayacagi icin event yani e yapiyormusuz
    if(e.keyCode == '13'){//13 enterin kodu gelen event listener bize enteri 13 u getirdiyse eger diyrouz burda
        getResult(searchBar.value)

    }
}
// burda getReusltun degerini almis yani sehrimizin degerini almis olduk
//assagidaki queryi suna gore tanimliyoruz
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
//         quey dedigimiz kendi url mizi olusturmak simdi query icinde urlmizi sonra aldigimizi sehiri ve appidyi  ekleyerek ilerleyecez
const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&unit=metric&lang=tr`
    fetch(query)
    .then(weather =>{
        return weather.json()
    })
    .then(displayResult)
}
// fetch api ile hangi sehir oldugunu aldigimiz deger ile urlyi gonderdik simdi bize buna gore bir result dondurcek ve biz bu resultu alip icinden 
// gerekli degerleri alabilecez
const displayResult = (result) => {
    let city = document.querySelector('.city')//bunu queryselector ile aliyoruzx class degerini city yaptigimiz icin sondaki degeri de ayni yaptik
    city.innerText = `${result.name}, ${result.sys.country}`//icindeki testi editlemek istedigimiz icin innertext yaptik

    let temp = document.querySelector('.temp')// bu sonlarda goruldugu gibi adlandirdigimiz classlara gore olusturuyoruz 
    //index html icinde olusturdugumuz temp ve citylere gore veriyoruz sondaki kisimlari
    temp.innerText = `${Math.round((result.main.temp)-273.15)}°C`// burdaki matematiksel islemlerin sebebi yazilimin bize kelvin gondermesi
    //biz turkler santigrat cinsini tercih ediyoruz bunu hesaplamak icin ilk istenilen degeri cikardim sonra onu round ile yuvarladim

    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description // bu kisimlari diziden nasil aldigimiz neye gore sectigimizi en assagida koydugum sekilden bakip gorebilirsin

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round((result.main.temp_min)-273.15)}°C / ${Math.round((result.main.temp_max)-273.15)}°C`

}

const searchBar = document.getElementById('searchBar')//searchBar id li etiketimden gelen degeri burda yakaliyorum
searchBar.addEventListener('keypress',setQuery)//enter tusuna basildiginda tanimlamios oldugum setQuery fonksiyonu uzerinden islemler devam edecek




// Istanbulu ogrenmek istedigim zaman olusan query
// https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=359d303e21fbbb49c85ea5c37792d9b0&unit=metric&lang=tr

// bana geri donen object
// {
//     "coord": {
//       "lon": 28.9833,
//       "lat": 41.0351
//     },
//     "weather": [
//       {
//         "id": 800,
//         "main": "Clear",
//         "description": "açık",
//         "icon": "01n"
//       }
//     ],
//     "base": "stations",
//     "main": {
//       "temp": 282.83,
//       "feels_like": 281.55,
//       "temp_min": 282.83,
//       "temp_max": 282.83,
//       "pressure": 1024,
//       "humidity": 81,
//       "sea_level": 1024,
//       "grnd_level": 1016
//     },
//     "visibility": 10000,
//     "wind": {
//       "speed": 2.57,
//       "deg": 210
//     },
//     "clouds": {
//       "all": 0
//     },
//     "dt": 1735842173,
//     "sys": {
//       "type": 1,
//       "id": 6970,
//       "country": "TR",
//       "sunrise": 1735795747,
//       "sunset": 1735829204
//     },
//     "timezone": 10800,
//     "id": 745042,
//     "name": "İstanbul",
//     "cod": 200
//   }


//https://openweathermap.org/current