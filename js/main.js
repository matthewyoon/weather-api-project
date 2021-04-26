// need openweathermap.org api key to access application
const key = `loremipsum`// ADD OWN API KEY HERE

// function to get data from api
// declare variables to hold data from api
const getData = async (city) => {

    let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    console.log(response.data)
    const weather  = response.data.weather[0].description
    
    const temp_maxK = response.data.main.temp_max;
    const temp_maxF = ((temp_maxK * 9) / 5 - 459.67).toFixed(1); // will keep temperature to 1 digit after the decimal

    const temp_minK = response.data.main.temp_min;
    const temp_minF = ((temp_minK * 9) / 5 - 459.67).toFixed(1);

    const real_tempK = response.data.main.feels_like;
    const real_tempF = ((real_tempK * 9) / 5 - 459.67).toFixed(1)

    create_list(city, real_tempF, temp_maxF, temp_minF, weather)
}

// Add event listener for submit event(s)
form.addEventListener('submit', ( event ) => {
    event.preventDefault();
    let city = document.querySelector('#city').value
    getData(city)
    document.getElementById('city').value='';
})

// creation of html to place into table and the respective data 
const create_list = (city, real_tempF, temp_maxF, temp_minF, weather) => {
    const html = `<tr id="weather_data"><th scope="row" id="city_data">${city}</th><td id="feel_data">${real_tempF}</td><td id="high_data">${temp_maxF}</td><td id="low_data">${temp_minF}</td><td id="weather_data">${weather}</td></tr>`
    document.getElementById('data_table').insertAdjacentHTML('beforeend', html)
}

// Create data table headers when clearing submitted data
// For use with the "clear data" button
const create_table = () => {
const htmltest = 

    `<thead><tr>
    <th scope="col" id="table_city">City</th>
    <th scope="col">RealFeel Temperature (°F)</th>
    <th scope="col">High (°F)</th>
    <th scope="col">Low (°F)</th>
    <th scope="col">Weather Conditions</th>
    </tr></thead>`

    document.getElementById('data_table').insertAdjacentHTML('beforeend', htmltest)
}

// Create a constant to hold DOM element reference
const DOM_ELEMENTS = {
    data: 'data_table'
}

// function to allow user to clear all data from the data table
// will attach to clear data button
const clear_data = () => {
    document.getElementById('data_table').innerHTML = '';
    create_table()
}

// Function to change the background based on the city name entered
// const change_background = (weather, event) => {
//     switch(weather){
//         case 'clear sky': {
//             form
//         }
//     }
// }