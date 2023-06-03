console.log("running from the javascript for using public folder");




const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector("#message-1");
const messagetwo = document.querySelector("#message-2");
const messagethree = document.querySelector("#message-3");

messageOne.textContent="";
messagetwo.textContent="";
messagethree.textContent="";


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loc = search.value;
    // console.log(loc);
    messageOne.textContent="Loading....";
    messagetwo.textContent="";
    messagethree.textContent="";
    fetch("http://localhost:3000/weather?address="+loc).then((response) =>{
        response.json().then((data) => {
            // console.log(data);
            if(data.Error){
                messageOne.textContent="Error:- " + data.Error;
                messagetwo.textContent="Address:- "+data.address;
                messagethree.textContent="";
                console.log(data.Error);
                console.log(data.address);
            }else{
                messageOne.textContent="Temprature is " +data.weather_update.temperature;
                messagetwo.textContent="Weather Summary:- " + data.weather_update.weather_descriptions[0];
                messagethree.textContent="Location is " + data.address;
                console.log(data.weather_update.temperature);
                console.log(data.weather_update.weather_descriptions[0]);
                console.log(data.address);
            }
        })
    })
    search.value="";
})