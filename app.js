window.addEventListener('load', ()=> {
    let long = 24.7037952;
    let lat = 59.4075648;




    /*if(navigator.geolocation){   Google Chrome
         navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log("Long: ", long);
            console.log("Lat: ", lat);
         })
    }*/
    console.log("Long: ", long);
    console.log("Lat: ", lat);


    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api = `${proxy}https://api.darksky.net/forecast/45691c7c70dbbea66c18c050aa70adb9/${long},${lat}`;

    fetch(api)
    .then(response =>{
        return response.json();
    })
    .then(data => {
        console.log(data);
    })

});