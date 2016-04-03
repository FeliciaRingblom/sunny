const API_STEM = 'http://api.openweathermap.org/data/2.5/weather?';
const API_KEY = '3696bdcc673594db06c301efa401f5e0';

var api = {
  getForecastForCity(city){
    city = city.toLowerCase().trim();
    var forecast = '';
    var url = `${API_STEM}q=${city}&units=metric&APPID=${API_KEY}`;
    return fetch(url).then((res) => res.json())
  }
};

export default api;
