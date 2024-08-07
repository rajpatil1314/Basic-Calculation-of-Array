let hours =document.getElementById('hrs');
let seconds =document.getElementById('sec');

let currentTime = new Date();

setInterval(()=>{
    let currentTime=new Date();
    hours.innerHTML =(currentTime.getHours()<10?"0":"")+currentTime.getHours();
    minutes.innerHTML = (currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
    seconds.innerHTML = (currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();
} );
let minutes =document.getElementById('min');