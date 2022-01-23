const clock = document.querySelector("#clock");

function getTime() {
    
    const now = new Date();
    const year = String(now.getFullYear());
    const month = String(now.getMonth() +1).padStart(2,"0");
    const day = String(now.getDate()).padStart(2,"0");
    const hours = String(now.getHours()).padStart(2,"0");
    const minutes = String(now.getMinutes()).padStart(2,"0");
    const seconds = String(now.getSeconds()).padStart(2,"0");


    clock.innerHTML= `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;

}
getTime();
setInterval(getTime,1000);