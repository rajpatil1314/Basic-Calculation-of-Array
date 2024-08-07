let [seconds,minutes,hours]=[0,0,0];
let displaytime = document.getElementById('displaytime')
let timer = null;

function Watchstart()
{
    seconds++;
    if(seconds == 60)
    {
        seconds=0;
        minutes++;
        if(minutes == 60)
        {
            minutes=0;
            hours++;
        }
    }
    let h=(hours < 10 ? "0" :" ")+ hours;
    let m=(minutes < 10 ? "0" :" ")+ minutes;
    let s=(seconds < 10 ? "0" :" ")+ seconds;

    displaytime.innerHTML = h + ":" + m + ":" + s

}

function startWatch()
{
    timer = setInterval(Watchstart,1000);

}

function stopWatch()
{
    clearInterval(timer)
}
function resetWatch()
{
    clearInterval(timer);
    [seconds,minutes,hours]=[0,0,0];
    displaytime.innerHTML="00:00:00";
}