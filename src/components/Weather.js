import "./Weather.css";

function Weather() {
  var t, h, l;
  var lat, long;
  var cityName, cityName1;

  function clickCity() {
    cityName = document.getElementById("city1").value;
    // console.log(cityName);
    fetchApi();
    // fetchWeather();
  }
  function fetchApi() {
    let city = fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=c6ac6ec60f2117221925da9d2a74ff00`
    );
    city
      .then((test) => {
        return test.json();
      })
      .then((test) => {
        // console.log(test[0]);
        //    cityName= document.getElementById('city1').value;
        //    console.log(cityName);
        //    console.log((test[0].lat).toFixed(2));
        //    console.log((test[0].lon).toFixed(2));
        lat = test[0].lat.toFixed(2);
        long = test[0].lon.toFixed(2);

        let data = fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3ed2bc661efb075dc75af44c65fb545a`
        );
        data
          .then((result) => {
            return result.json();
          })
          .then((result) => {
            t = result.main.temp - 273.15;
            // console.log("Temp: ",result.main.temp -273.15);
            h = result.main.humidity;
            // console.log("Humidity: "+result.main.humidity);
            l = result.name;
            // console.log("Location: "+result.name);
            document.getElementById("temp").innerHTML = (
              result.main.temp - 273.15
            ).toFixed(0);
            document.getElementById("loc").innerText = result.name;
          });
      });
  }

  function fetchWeather() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
    function showPosition(position) {
      // console.log("Latitude: "+position.coords.latitude +
      // "Longitude: "+
      // position.coords.longitude);
      // lat=(position.coords.latitude).toFixed(2) ;
      // long=(position.coords.longitude).toFixed(2);
      console.log("lat: ", lat);
      console.log("long: ", long);

      // cityName="rohtak"
    }
    window.onload = () => {
      // x.innerHTML =
      //   "Latitude: " +
      //   position.coords.latitude +
      //   "<br>Longitude: " +
      //   position.coords.longitude;
    };
    // console.log(t,h,l);
  }
  return (
    <>
      <div className="main">
        <br />
        <div className="search">
          <input type="text" id="city1"></input>
          <i onClick={clickCity} className="bi bi-search "></i>
        </div>
        <br></br>
        <div className="image">
          <img src="https://i.ibb.co/vJzR2SL/rainy-day.png"></img>
        </div>
        <div className="temp">
          <h1>
            <span id="temp">-</span>
            <sup>o</sup>
          </h1>
        </div>
        <div className="location">
          <h1 id="loc">Loading...</h1>
        </div>
        {/* <div className='search1'></div> */}
        <div className="lower">
        <div className="col">
          <div className="col-left">
            <img src="https://cdn-icons-png.flaticon.com/512/1182/1182902.png"></img>
          </div>
          <div className="col-right">
            <h3 id="humidity">50%</h3>
            <h5> Humidity</h5>
          </div>
        </div>
        <div className="col">
          <div className="col-left">
            <img src="https://cdn-icons-png.flaticon.com/512/1182/1182902.png"></img>
          </div>
          <div className="col-right">
            <h3 id="humidity">50%</h3>
            <h5> Humidity</h5>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
